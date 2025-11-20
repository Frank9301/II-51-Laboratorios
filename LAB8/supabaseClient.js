import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// ==========================
// CONFIGURA TU SUPABASE
// ==========================
let SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ5anBhanRpb3l6amFxdWV3b2Z4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1NDUzMTEsImV4cCI6MjA3NjEyMTMxMX0.zfZ72BFMVUJZLErSuCAQsljI0-kVCuRMK9TTfs2aOXE";
let SUPABASE_URL = "https://byjpajtioyzjaquewofx.supabase.co";

// Crear cliente una sola vez
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
 