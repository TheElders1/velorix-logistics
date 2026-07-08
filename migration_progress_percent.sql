-- Add progress_percent column to tracking_history
alter table tracking_history add column if not exists progress_percent integer default 0;
