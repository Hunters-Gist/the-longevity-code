"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ASSESSMENT_QUESTIONS,
  PILLAR_INSIGHTS,
  SILA_PILLARS,
  type PillarKey,
} from "@/content/sila";
import { communityHref, getExternalCommunityUrl } from "@/lib/site-config";

const OPTIONS = [
  { label: "Strongly disagree", value: 1 },
  { label: "Disagree", value: 2 },
  { label: "Neutral", value: 3 },
  { label: "Agree", value: 4 },
  { label: "Strongly agree", value: 5 },
];

function toRadarPoints(values: number[], radius: number, centre: number) {
  const count = values.length;
  return values
    .map((value, index) => {
      const angle = (Math.PI * 2 * index) / count - Math.PI / 2;
      const scaled = (value / 100) * radius;
      const x = centre + Math.cos(angle) * scaled;
      const y = centre + Math.sin(angle) * scaled;
      return `${x},${y}`;
    })
    .join(" ");
}

function getPillarRecommendations(lowestPillar: PillarKey) {
  if (lowestPillar === "brain") {
    return "Prioritise deep-work blocks, sleep regularity, and the Sila Focus stack for clearer cognitive output.";
  }
  if (lowestPillar === "skin") {
    return "Layer anti-inflammatory nutrition, hydration consistency, and recovery routines to support skin renewal from within.";
  }
  if (lowestPillar === "body") {
    return "Anchor movement, protein intake, and recovery scheduling to improve energy stability and physical resilience.";
  }
  if (lowestPillar === "longevity") {
    return "Build preventive routines: nutrition quality, training consistency, stress regulation, and quarterly wellbeing review cycles.";
  }
  return "Strengthen stress response with behavioural rituals, reflection prompts, and consistent community accountability.";
}

export function SilaAssessmentClient() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [email, setEmail] = useState("");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === ASSESSMENT_QUESTIONS.length;

  const scores = useMemo(() => {
    const totalByPillar: Record<PillarKey, number> = {
      brain: 0,
      skin: 0,
      body: 0,
      longevity: 0,
      rehab: 0,
    };
    const countByPillar: Record<PillarKey, number> = {
      brain: 0,
      skin: 0,
      body: 0,
      longevity: 0,
      rehab: 0,
    };

    for (const question of ASSESSMENT_QUESTIONS) {
      const answer = answers[question.id];
      if (!answer) continue;
      totalByPillar[question.pillar] += answer;
      countByPillar[question.pillar] += 1;
    }

    const scoreByPillar: Record<PillarKey, number> = {
      brain: 0,
      skin: 0,
      body: 0,
      longevity: 0,
      rehab: 0,
    };

    for (const pillar of SILA_PILLARS) {
      const count = countByPillar[pillar.key] || 1;
      const average = totalByPillar[pillar.key] / count;
      scoreByPillar[pillar.key] = Math.round(((average - 1) / 4) * 100);
    }

    const overall = Math.round(
      (Object.values(scoreByPillar).reduce((sum, value) => sum + value, 0) /
        SILA_PILLARS.length) *
        10,
    ) / 10;

    const lowest = SILA_PILLARS.reduce((current, next) =>
      scoreByPillar[next.key] < scoreByPillar[current]
        ? next.key
        : current,
    "brain" as PillarKey);

    return { scoreByPillar, overall, lowest };
  }, [answers]);

  const radarValues = SILA_PILLARS.map((pillar) => scores.scoreByPillar[pillar.key]);
  const radarPoints = toRadarPoints(radarValues, 92, 120);

  const onSubmitEmail = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isComplete || !email.trim() || isSubmitting || showResults) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/assessment/capture", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email.trim(),
          answers,
          scoreByPillar: scores.scoreByPillar,
          overallScore: scores.overall,
          lowestPillar: scores.lowest,
          sourceRoute: "/assessment",
          marketingConsent,
        }),
      });

      if (!response.ok) {
        throw new Error("Assessment capture failed.");
      }

      setShowResults(true);
    } catch {
      setSubmitError(
        "We could not save your assessment yet. Please check your email and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-10">
      <div className="glass-card rounded-[26px] p-6 sm:p-8">
        <div className="mb-6 flex items-center justify-between">
          <p className="eyebrow">Progress</p>
          <p className="font-mono text-sm text-obsidian">
            {answeredCount}/{ASSESSMENT_QUESTIONS.length}
          </p>
        </div>
        <div className="h-2 rounded-full bg-surface">
          <div
            className="h-full rounded-full bg-sage transition-all duration-500"
            style={{ width: `${(answeredCount / ASSESSMENT_QUESTIONS.length) * 100}%` }}
          />
        </div>
      </div>

      <div className="grid gap-4">
        {ASSESSMENT_QUESTIONS.map((question) => (
          <article key={question.id} className="luxury-card rounded-2xl p-5 sm:p-6">
            <p className="text-xs uppercase tracking-[0.18em] text-muted">
              {question.id}.{" "}
              {SILA_PILLARS.find((pillar) => pillar.key === question.pillar)?.name}
            </p>
            <h3 className="mt-2 text-lg leading-snug text-heading">{question.text}</h3>
            <div className="mt-4 grid gap-2 sm:grid-cols-5">
              {OPTIONS.map((option) => {
                const checked = answers[question.id] === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setShowResults(false);
                      setSubmitError("");
                      setAnswers((previous) => ({
                        ...previous,
                        [question.id]: option.value,
                      }));
                    }}
                    className={`min-h-11 rounded-xl border px-3 text-xs uppercase tracking-[0.12em] transition ${
                      checked
                        ? "border-sage bg-sage/14 text-obsidian"
                        : "border-line text-muted hover:border-sage/70 hover:text-obsidian"
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </article>
        ))}
      </div>

      <form onSubmit={onSubmitEmail} className="glass-card rounded-[26px] p-6 sm:p-8">
        <p className="eyebrow">Unlock your result</p>
        <h3 className="mt-3 text-2xl text-heading sm:text-3xl">
          Enter your email to unlock your personalised Sila Score and recommendations.
        </h3>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted">
          Your assessment is an educational self-reflection tool. It is not medical advice,
          diagnosis, treatment, or a substitute for practitioner guidance.
        </p>
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <label htmlFor="assessmentEmail" className="sr-only">
            Email address
          </label>
          <input
            id="assessmentEmail"
            type="email"
            required
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setShowResults(false);
              setSubmitError("");
            }}
            placeholder="your@email.com"
            className="h-12 flex-1 rounded-full border border-line bg-bone-white px-5 text-sm text-obsidian placeholder:text-muted focus:border-sage focus:outline-none"
          />
          <button
            type="submit"
            disabled={!isComplete || isSubmitting || showResults}
            className="h-12 rounded-full bg-obsidian px-6 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white transition duration-300 enabled:hover:bg-terracotta disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Saving..." : showResults ? "Score unlocked" : "Reveal my score"}
          </button>
        </div>
        <label className="mt-4 flex gap-3 text-sm leading-relaxed text-muted">
          <input
            type="checkbox"
            checked={marketingConsent}
            onChange={(event) => setMarketingConsent(event.target.checked)}
            className="mt-1 h-4 w-4 rounded border-line text-obsidian"
          />
          <span>
            I agree to receive educational Sila Code updates. I can unsubscribe at any time.
          </span>
        </label>
        {!isComplete ? (
          <p className="mt-3 text-xs text-muted">
            Complete all 15 questions to unlock your full score.
          </p>
        ) : null}
        {submitError ? (
          <p role="alert" className="mt-3 rounded-xl border border-terracotta/40 bg-terracotta/10 px-4 py-3 text-sm text-heading">
            {submitError}
          </p>
        ) : null}
        {showResults ? (
          <p role="status" className="mt-3 rounded-xl border border-sage/40 bg-sage/10 px-4 py-3 text-sm text-heading">
            Your assessment has been saved. Your results are unlocked below.
          </p>
        ) : null}
      </form>

      {showResults ? (
        <section className="luxury-panel rounded-[26px] p-6 sm:p-8">
          <p className="eyebrow">Your results</p>
          <h3 className="mt-3 text-3xl text-heading sm:text-4xl">
            Overall Sila Score:{" "}
            <span className="font-mono text-terracotta">{scores.overall}</span>
          </h3>

          <div className="mt-8 grid gap-8 lg:grid-cols-[320px_1fr]">
            <div className="mx-auto w-full max-w-[320px]">
              <svg viewBox="0 0 240 240" className="w-full">
                {[20, 40, 60, 80, 100].map((level) => (
                  <polygon
                    key={level}
                    points={toRadarPoints(
                      SILA_PILLARS.map(() => level),
                      92,
                      120,
                    )}
                    fill="none"
                    stroke="rgba(45,58,49,0.18)"
                    strokeWidth="1"
                  />
                ))}
                {SILA_PILLARS.map((_, index) => {
                  const angle = (Math.PI * 2 * index) / SILA_PILLARS.length - Math.PI / 2;
                  const x = 120 + Math.cos(angle) * 92;
                  const y = 120 + Math.sin(angle) * 92;
                  return (
                    <line
                      key={index}
                      x1="120"
                      y1="120"
                      x2={x}
                      y2={y}
                      stroke="rgba(45,58,49,0.18)"
                    />
                  );
                })}
                <polygon
                  points={radarPoints}
                  fill="rgba(140,154,132,0.2)"
                  stroke="#8C9A84"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div className="space-y-4">
              {SILA_PILLARS.map((pillar) => (
                <article key={pillar.key} className="glass-card rounded-xl p-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg text-heading">{pillar.name}</h4>
                    <p className="font-mono text-terracotta">
                      {scores.scoreByPillar[pillar.key]}
                    </p>
                  </div>
                  <p className="mt-2 text-sm text-muted">{PILLAR_INSIGHTS[pillar.key]}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-line bg-surface/60 p-4">
            <p className="text-xs uppercase tracking-[0.16em] text-muted">
              Personalised recommendation
            </p>
            <p className="mt-2 text-sm leading-relaxed text-foreground/90">
              {getPillarRecommendations(scores.lowest)}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={communityHref()}
              prefetch={false}
              {...(getExternalCommunityUrl()
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="inline-flex min-h-11 items-center rounded-full bg-obsidian px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-bone-white transition duration-300 hover:bg-terracotta"
            >
              Join the free community
            </Link>
            <Link
              href="/shop/sila-focus"
              className="inline-flex min-h-11 items-center rounded-full border border-sage/70 bg-bone-white/75 px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian transition duration-300 hover:border-terracotta hover:text-terracotta"
            >
              Shop Sila Focus
            </Link>
            <Link
              href="/subscribe"
              className="inline-flex min-h-11 items-center rounded-full border border-sage/70 bg-bone-white/75 px-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-obsidian transition duration-300 hover:border-terracotta hover:text-terracotta"
            >
              View Membership
            </Link>
          </div>
        </section>
      ) : null}
    </div>
  );
}
