import { communitySignals, forumGroups, weeklyTopics } from "@/content/community";

type RankedTheme = {
  topic: string;
  mentions: number;
  demand: number;
  score: number;
};

type GroupDemand = {
  group: string;
  title: string;
  requests: number;
};

export type CommunityInsightsSnapshot = {
  generatedAt: string;
  activeMembersNow: number;
  weeklyPosts: number;
  weeklyComments: number;
  topThemes: RankedTheme[];
  mostRequested: GroupDemand[];
  nextWeeklyDrop: string[];
};

const rankThemes = (): RankedTheme[] => {
  return [...communitySignals]
    .map((signal) => ({
      topic: signal.topic,
      mentions: signal.mentions,
      demand: signal.demand,
      score: signal.mentions * 0.62 + signal.demand * 0.38,
    }))
    .sort((a, b) => b.score - a.score);
};

const rankGroupDemand = (): GroupDemand[] => {
  return forumGroups
    .map((group) => {
      const requests = communitySignals
        .filter((signal) => signal.group === group.slug)
        .reduce((total, signal) => total + signal.demand, 0);

      return {
        group: group.slug,
        title: group.title,
        requests,
      };
    })
    .sort((a, b) => b.requests - a.requests);
};

const calculateLiveMembers = (date: Date): number => {
  const minute = date.getUTCMinutes();
  const wave = Math.sin((minute / 60) * Math.PI * 2);
  return 220 + Math.round((wave + 1) * 46);
};

const calculateWeeklyPosts = (date: Date): number => {
  const day = date.getUTCDay();
  return 480 + day * 18;
};

const calculateWeeklyComments = (date: Date): number => {
  const hour = date.getUTCHours();
  return 1320 + hour * 7;
};

export const buildCommunityInsightsSnapshot = (
  now: Date = new Date(),
): CommunityInsightsSnapshot => {
  return {
    generatedAt: now.toISOString(),
    activeMembersNow: calculateLiveMembers(now),
    weeklyPosts: calculateWeeklyPosts(now),
    weeklyComments: calculateWeeklyComments(now),
    topThemes: rankThemes().slice(0, 4),
    mostRequested: rankGroupDemand().slice(0, 4),
    nextWeeklyDrop: weeklyTopics.slice(0, 6).map((topic) => topic.title),
  };
};
