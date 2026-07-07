-- Run this in Supabase SQL Editor to add the new fields to your EXISTING shipments table
alter table shipments add column if not exists sender_address text;
alter table shipments add column if not exists sender_email text;
alter table shipments add column if not exists sender_phone text;
alter table shipments add column if not exists receiver_address text;
alter table shipments add column if not exists receiver_email text;
alter table shipments add column if not exists receiver_phone text;
alter table shipments add column if not exists description text;
alter table shipments add column if not exists shipment_date date;
alter table shipments add column if not exists shipment_comments text;
alter table shipments add column if not exists notification_type text;
alter table shipments add column if not exists package_image_url text;

-- Storage bucket for parcel images
insert into storage.buckets (id, name, public)
values ('shipment-images', 'shipment-images', true)
on conflict (id) do nothing;

drop policy if exists "Public can view shipment images" on storage.objects;
create policy "Public can view shipment images"
on storage.objects for select
to anon, authenticated
using (bucket_id = 'shipment-images');

drop policy if exists "Authenticated users can upload shipment images" on storage.objects;
create policy "Authenticated users can upload shipment images"
on storage.objects for insert
to authenticated
with check (bucket_id = 'shipment-images');

drop policy if exists "Authenticated users can update shipment images" on storage.objects;
create policy "Authenticated users can update shipment images"
on storage.objects for update
to authenticated
using (bucket_id = 'shipment-images');

drop policy if exists "Authenticated users can delete shipment images" on storage.objects;
create policy "Authenticated users can delete shipment images"
on storage.objects for delete
to authenticated
using (bucket_id = 'shipment-images');
