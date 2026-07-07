insert into shipments (
  tracking_number, sender_name, sender_address, sender_email, sender_phone,
  receiver_name, receiver_address, receiver_email, receiver_phone,
  description, origin, destination, status,
  current_lat, current_lng, origin_lat, origin_lng, destination_lat, destination_lng,
  shipment_date, estimated_delivery, weight_kg, package_type
) values (
  'VLX-1000001',
  'Hyeon Bin', 'Bucharest, Romania', 'hbin@example.com', '+40 734 159 385',
  'Jumnah Evi', 'Tonjong Village, RT 03 RW 06 Desa Karehkel, Kec. Leuwiliang Kab. Bogor, Jawa Barat, Indonesia', 'jevi@example.com', '+62 878 1775 2711',
  'Parcel contains fashion items of various kinds.',
  'Bucharest, Romania', 'Jakarta, Indonesia', 'in_transit',
  -6.2088, 106.8456, 44.4268, 26.1025, -6.2088, 106.8456,
  '2026-06-22', '2026-06-23', 5.2, 'Parcel'
)
on conflict (tracking_number) do update set
  sender_name = excluded.sender_name,
  sender_address = excluded.sender_address,
  sender_email = excluded.sender_email,
  sender_phone = excluded.sender_phone,
  receiver_name = excluded.receiver_name,
  receiver_address = excluded.receiver_address,
  receiver_email = excluded.receiver_email,
  receiver_phone = excluded.receiver_phone,
  description = excluded.description,
  origin = excluded.origin,
  destination = excluded.destination,
  status = excluded.status,
  current_lat = excluded.current_lat,
  current_lng = excluded.current_lng,
  origin_lat = excluded.origin_lat,
  origin_lng = excluded.origin_lng,
  destination_lat = excluded.destination_lat,
  destination_lng = excluded.destination_lng,
  shipment_date = excluded.shipment_date,
  estimated_delivery = excluded.estimated_delivery,
  weight_kg = excluded.weight_kg,
  package_type = excluded.package_type;

-- Add a tracking history entry so the "Location history" section on the tracking page shows something
insert into tracking_history (shipment_id, status, location, lat, lng, note)
select id, 'in_transit', 'Arrived in Indonesia', -6.2088, 106.8456, null
from shipments where tracking_number = 'VLX-1000001';
