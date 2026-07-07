-- Run this in Supabase SQL Editor to update the existing sample row
-- (the schema file only affects new inserts, not what's already in your table)

update shipments
set origin = 'Bucharest, Romania',
    destination = 'Jakarta, Indonesia',
    origin_lat = 44.4268, origin_lng = 26.1025,
    destination_lat = -6.2088, destination_lng = 106.8456,
    current_lat = -6.2088, current_lng = 106.8456,
    sender_name = 'Test Sender'
where tracking_number = 'VLX-1000001';
