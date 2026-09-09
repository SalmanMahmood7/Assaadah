// One-time fix: the tables were seeded with display_order defaulting to 0
// for every row, which made ordering fall back to the (random) UUID id
// column. This sets each row's display_order to match the intended
// presentation order from scripts/seedContent.js.
//
// Usage: node scripts/backfillDisplayOrder.js
// Requires SUPABASE_SERVICE_ROLE_KEY in .env.local (bypasses RLS for updates).

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
const supabaseUrl = env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;

if (!serviceKey) {
  console.error("SUPABASE_SERVICE_ROLE_KEY not found in .env.local — required to bypass RLS for updates.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceKey);

// table -> [ { match: {col: val, ...}, order: n }, ... ]
const orderPlan = {
  testimonials: [
    "Muhammad bin Tahir", "Muhammad Yousuf Umar", "Syed Usman Gillani",
    "Muhammad Osama Amin", "Owais Ahmad"
  ].map((name, i) => ({ match: { name }, order: i })),

  instructors: [
    "Muhammad Ibrahim", "Syed Ahmed Kabir Hashmi", "Abdul Rehman", "Syed Hasnain Pasha"
  ].map((name, i) => ({ match: { name }, order: i })),

  level_rules: [
    { level: "Level 1", rule: "Male & Female Madaris Graduates (Separate Classes)" },
    { level: "Level 1", rule: "Absolute beginners welcome" },
    { level: "Level 1", rule: "Those willing to commit 2–3 hours daily" },
    { level: "Level 1", rule: "Those ready to follow strict deadlines and discipline" },
    { level: "Level 3", rule: "Idea validation workshops" },
    { level: "Level 3", rule: "Technical product development supervision" },
    { level: "Level 3", rule: "Mentorship from experienced professionals" },
    { level: "Level 3", rule: "Structured execution discipline" },
    { level: "Level 3", rule: "Collaborative startup team environment" }
  ].map((match, i) => ({ match, order: i })),

  courses: [
    { level: "Level 1", title: "Logical Thinking" },
    { level: "Level 1", title: "Python Programming Foundations" },
    { level: "Level 1", title: "Debugging & Problem Solving" },
    { level: "Level 1", title: "Team Collaboration" },
    { level: "Level 1", title: "Responsible Use of AI Tools" },
    { level: "Level 2", title: "Artificial Intelligence (AI)" },
    { level: "Level 2", title: "Web & App Development" },
    { level: "Level 2", title: "Cloud & DevOps" },
    { level: "Level 2", title: "UI/UX Designing" },
    { level: "Level 2", title: "Digital Marketing & E-Commerce" },
    { level: "Level 2", title: "Emerging Technologies" },
    { level: "Level 2", title: "Creative & Media" },
    { level: "Level 3", title: "Idea Validation" },
    { level: "Level 3", title: "Product Development" },
    { level: "Level 3", title: "Mentorship" },
    { level: "Level 3", title: "Collaborative Teams" },
    { level: "Level 3", title: "Incubation Environment" },
    { level: "Level 3", title: "Execution Discipline" }
  ].map((match, i) => ({ match, order: i })),

  videos: [
    "As-Sa'adah Introduction", "Free Digital Education Program",
    "Community Bootcamp Session", "Student Success Stories"
  ].map((title, i) => ({ match: { title }, order: i }))
};

async function run() {
  for (const [table, plan] of Object.entries(orderPlan)) {
    for (const { match, order } of plan) {
      let query = supabase.from(table).update({ display_order: order });
      for (const [col, val] of Object.entries(match)) {
        query = query.eq(col, val);
      }
      const { error, count } = await query.select("id");
      if (error) {
        console.error(`[${table}] failed to set order ${order} for`, match, "-", error.message);
      } else {
        console.log(`[${table}] order=${order} <- ${JSON.stringify(match)}`);
      }
    }
  }
}

run();
