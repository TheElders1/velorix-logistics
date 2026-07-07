-- Velorix Logistics — Supabase schema
-- Run this in Supabase Dashboard → SQL Editor

-- 1. Shipments table
create table if not exists shipments (
  id uuid primary key default gen_random_uuid(),
  tracking_number text unique not null,
  sender_name text,
  sender_address text,
  sender_email text,
  sender_phone text,
  receiver_name text,
  receiver_address text,
  receiver_email text,
  receiver_phone text,
  origin text,
  destination text,
  description text,
  status text not null default 'pending', -- pending, in_transit, out_for_delivery, delivered, delayed, cancelled
  current_lat double precision,
  current_lng double precision,
  origin_lat double precision,
  origin_lng double precision,
  destination_lat double precision,
  destination_lng double precision,
  estimated_delivery date,
  shipment_date date,
  weight_kg numeric,
  package_type text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- If the table already existed before this update, add the new columns safely:
alter table shipments add column if not exists sender_address text;
alter table shipments add column if not exists sender_email text;
alter table shipments add column if not exists sender_phone text;
alter table shipments add column if not exists receiver_address text;
alter table shipments add column if not exists receiver_email text;
alter table shipments add column if not exists receiver_phone text;
alter table shipments add column if not exists description text;
alter table shipments add column if not exists shipment_date date;

-- 2. Tracking history — status timeline shown on the public tracking page
create table if not exists tracking_history (
  id uuid primary key default gen_random_uuid(),
  shipment_id uuid not null references shipments(id) on delete cascade,
  status text not null,
  location text,
  lat double precision,
  lng double precision,
  note text,
  created_at timestamptz not null default now()
);

-- Keep updated_at fresh on shipments
create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists trg_shipments_updated_at on shipments;
create trigger trg_shipments_updated_at
before update on shipments
for each row execute function set_updated_at();

-- 3. Row Level Security
alter table shipments enable row level security;
alter table tracking_history enable row level security;

-- Public (anon) can READ shipments by tracking number — needed for the public tracking page.
-- No public INSERT/UPDATE/DELETE — only authenticated admin users can modify.
create policy "Public can view shipments"
  on shipments for select
  to anon, authenticated
  using (true);

create policy "Public can view tracking history"
  on tracking_history for select
  to anon, authenticated
  using (true);

-- Only logged-in (authenticated) users — i.e. your admin — can insert/update/delete.
create policy "Authenticated users can insert shipments"
  on shipments for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update shipments"
  on shipments for update
  to authenticated
  using (true);

create policy "Authenticated users can delete shipments"
  on shipments for delete
  to authenticated
  using (true);

create policy "Authenticated users can insert tracking history"
  on tracking_history for insert
  to authenticated
  with check (true);

create policy "Authenticated users can update tracking history"
  on tracking_history for update
  to authenticated
  using (true);

create policy "Authenticated users can delete tracking history"
  on tracking_history for delete
  to authenticated
  using (true);

-- 4. Sample row (safe to delete later) for testing the tracking page end-to-end
insert into shipments (
  tracking_number, sender_name, receiver_name, origin, destination, status,
  current_lat, current_lng, origin_lat, origin_lng, destination_lat, destination_lng,
  estimated_delivery, weight_kg, package_type
) values (
  'VLX-1000001', 'Test Sender', 'Test Receiver', 'Origin City', 'Destination City', 'in_transit',
  0, 0, 0, 0, 0, 0,
  current_date + interval '3 days', 5.2, 'Parcel'
)
on conflict (tracking_number) do nothing;
