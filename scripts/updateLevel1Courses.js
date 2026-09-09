// One-time content update: replaces the old placeholder "Level 1" course
// rows (Logical Thinking, Python Programming Foundations, Debugging &
// Problem Solving, Team Collaboration, Responsible Use of AI Tools) with
// the 4 real Level 1 tracks actually taught, each with a short multi-line
// description (rendered as bullet points on the Level 1 page).
//
// Usage: node scripts/updateLevel1Courses.js
// Requires SUPABASE_SERVICE_ROLE_KEY in .env.local (bypasses RLS).

const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");

function loadEnvLocal() {
  const envPath = path.join(__dirname, "..", ".env.local");
  const env = {};
  const raw = fs.readFileSync(envPath, "utf8");
  for (const line of raw.split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    env[trimmed.slice(0, eq).trim()] = trimmed.slice(eq + 1).trim();
  }
  return env;
}

const env = loadEnvLocal();
const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;
if (!serviceKey) {
  console.error("SUPABASE_SERVICE_ROLE_KEY not found in .env.local — required to bypass RLS.");
  process.exit(1);
}

const supabase = createClient(env.NEXT_PUBLIC_SUPABASE_URL, serviceKey);

const NEW_LEVEL1_COURSES = [
  {
    level: "Level 1",
    title: "UI/UX Design & Figma",
    focus: [
      "Figma fundamentals — frames, auto layout, components & prototyping",
      "Graphic design essentials: social media posts, posters, logos & branding",
      "Mobile app UI design with interactive prototyping (Smart Animate)",
      "Responsive website UI design, from wireframes to a complete landing page"
    ].join("\n")
  },
  {
    level: "Level 1",
    title: "Python, VS Code & GitHub",
    focus: [
      "Python fundamentals: variables, conditionals, loops & functions",
      "Data structures — lists, dictionaries, tuples & sets",
      "Object-oriented programming, file handling & error handling",
      "Git, GitHub, APIs, SQLite databases & a final capstone project"
    ].join("\n")
  },
  {
    level: "Level 1",
    title: "Executive English Language",
    focus: [
      "Foundation grammar: parts of speech, nouns, verbs & tenses",
      "Tense transformation and connected sentence structures",
      "Modal auxiliary verbs for ability, obligation & deduction",
      "Conditional sentences and practical communication skills"
    ].join("\n")
  },
  {
    level: "Level 1",
    title: "Digital Marketing & Freelancing",
    focus: [
      "Digital marketing fundamentals, SEO & marketing funnels",
      "Competitor research, brand analysis & AI tools for marketing",
      "Meta Business Suite, Facebook Pages & Ads campaigns",
      "Client hunting and freelancing to launch a marketing career"
    ].join("\n")
  }
].map((row, index) => ({ ...row, display_order: index }));

async function run() {
  const { error: deleteError } = await supabase
    .from("courses")
    .delete()
    .eq("level", "Level 1");

  if (deleteError) {
    console.error("Failed to delete old Level 1 courses:", deleteError.message);
    process.exit(1);
  }
  console.log("Old Level 1 courses removed.");

  const { error: insertError } = await supabase.from("courses").insert(NEW_LEVEL1_COURSES);
  if (insertError) {
    console.error("Failed to insert new Level 1 courses:", insertError.message);
    process.exit(1);
  }
  console.log(`Inserted ${NEW_LEVEL1_COURSES.length} new Level 1 courses.`);
}

run();
