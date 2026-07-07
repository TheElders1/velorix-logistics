-- Run this in Supabase SQL Editor to update the existing sample row
-- (the schema file only affects new inserts, not what's already in your table)

update shipments
set origin = 'Origin City',
    destination = 'Destination City',
    origin_lat = 0, origin_lng = 0,
    destination_lat = 0, destination_lng = 0,
    current_lat = 0, current_lng = 0,
    sender_name = 'Test Sender'
where tracking_number = 'VLX-1000001';
