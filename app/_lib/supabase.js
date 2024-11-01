import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    "https://cdeqvgwygriizhqisgny.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNkZXF2Z3d5Z3JpaXpocWlzZ255Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMDQ2Mzc4NywiZXhwIjoyMDQ2MDM5Nzg3fQ.08QqH1s1xxa8SCd4vG2Otuj-RYxv9jNyXFsMecegrYw"
);
