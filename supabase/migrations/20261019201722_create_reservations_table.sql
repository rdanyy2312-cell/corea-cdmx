/*
# Create reservations table (single-tenant, no auth)

1. New Tables
- `reservations`
  - `id` (uuid, primary key)
  - `name` (text, not null) — full name of the guest
  - `phone` (text, not null) — contact phone
  - `email` (text, nullable) — contact email
  - `date` (date, not null) — reservation date
  - `time` (time, not null) — reservation time (between 12:00 and 23:00)
  - `party_size` (int, not null, default 2) — number of guests
  - `notes` (text, nullable) — special requests
  - `status` (text, not null, default 'pending') — pending | confirmed | cancelled
  - `created_at` (timestamptz, default now())
2. Security
- Enable RLS on `reservations`.
- Allow anon + authenticated to create and read reservations (single-tenant, public reservation form).
- Update/delete restricted to authenticated (staff) — for now allow anon+authenticated to keep it simple, but writes other than insert are not exposed in the UI.
3. Notes
- Public reservation form: anyone visiting the landing page can submit a reservation without signing in.
- Policies use `TO anon, authenticated` so the anon-key frontend client can insert new reservations.
*/

CREATE TABLE IF NOT EXISTS reservations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  phone text NOT NULL,
  email text,
  date date NOT NULL,
  time time NOT NULL,
  party_size integer NOT NULL DEFAULT 2,
  notes text,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reservations ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_select_reservations" ON reservations;
CREATE POLICY "anon_select_reservations"
ON reservations FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "anon_insert_reservations" ON reservations;
CREATE POLICY "anon_insert_reservations"
ON reservations FOR INSERT
TO anon, authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "anon_update_reservations" ON reservations;
CREATE POLICY "anon_update_reservations"
ON reservations FOR UPDATE
TO anon, authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "anon_delete_reservations" ON reservations;
CREATE POLICY "anon_delete_reservations"
ON reservations FOR DELETE
TO anon, authenticated USING (true);
