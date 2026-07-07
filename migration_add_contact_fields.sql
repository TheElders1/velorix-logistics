-- Run this in Supabase SQL Editor to add the new fields to your EXISTING shipments table
alter table shipments add column if not exists sender_address text;
alter table shipments add column if not exists sender_email text;
alter table shipments add column if not exists sender_phone text;
alter table shipments add column if not exists receiver_address text;
alter table shipments add column if not exists receiver_email text;
alter table shipments add column if not exists receiver_phone text;
alter table shipments add column if not exists description text;
alter table shipments add column if not exists shipment_date date;
