create table if not exists assessment_submissions (
  id bigint generated always as identity primary key,
  email varchar(320) not null,
  source_route varchar(128) not null default '/assessment',
  answers jsonb not null,
  score_by_pillar jsonb not null,
  overall_score integer not null,
  lowest_pillar varchar(32) not null,
  marketing_consent integer not null default 0,
  created_at timestamp with time zone not null default now()
);

create index if not exists assessment_submissions_email_idx
  on assessment_submissions (email);

create index if not exists assessment_submissions_created_at_idx
  on assessment_submissions (created_at);
