// One-time content migration: pushes the site's existing hardcoded content
// into Supabase so the admin panel (Testimonials, Hero Images, Instructors,
// Courses, Videos, Level Rules) is pre-populated with real rows.
//
// Usage: node scripts/seedContent.js
//
// Safe to re-run: any table that already has rows is skipped.
//
// Inserts run under RLS. The admin panel writes as an *authenticated* user,
// so a plain anon-key insert from this standalone script will likely be
// rejected by your RLS policies. If you see permission/RLS errors below,
// add a line to .env.local:
//   SUPABASE_SERVICE_ROLE_KEY=<service_role key from Supabase Dashboard > Project Settings > API>
// then re-run this script, and remove that line again afterward.

const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");

function loadEnvLocal() {
  const envPath = path.join(__dirname, "..", ".env.local");
  const env = {};
  if (!fs.existsSync(envPath)) return env;
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
const anonKey = env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!supabaseUrl || !(serviceKey || anonKey)) {
  console.error("Missing NEXT_PUBLIC_SUPABASE_URL / keys in .env.local");
  process.exit(1);
}

if (!serviceKey) {
  console.warn(
    "No SUPABASE_SERVICE_ROLE_KEY found in .env.local — using the anon key.\n" +
    "If inserts fail below with a permission/RLS error, add the service role key and re-run.\n"
  );
}

const supabase = createClient(supabaseUrl, serviceKey || anonKey);

const seedData = {
  testimonials: [
    { name: "Muhammad bin Tahir", photo: "/muhammad.jpg", quote: "I recently completed a 6-month Digital Skills course at As-Sa'adah, Islamabad, and it was an excellent learning experience. The instructors were supportive, the training was practical, and I gained valuable skills in digital media, social media, and modern IT tools. This course really improved my confidence and helped me adapt to today's digital world. I highly recommend it!", location: "Lahore", programme: "Digital Skills Graduate" },
    { name: "Muhammad Yousuf Umar", photo: "/Yousef.jpg", quote: "At As-Sa'adah, I learned full-stack development while living a simple and focused lifestyle. This experience strengthened my technical abilities, enhanced my soft skills, and brought clarity to my vision and mission. The Bootcamp refined my competencies and gave my goals clear direction. I strongly recommend this transformative program to Ulama and graduates of Dars-e-Nizami.", location: "Sadiqabad", programme: "Full-Stack Developer" },
    { name: "Syed Usman Gillani", photo: "/usman.jpg", quote: "The As-Sa'adah IT Bootcamp under the Religious Empowerment program was a pivotal experience that enhanced my technical proficiency and essential soft skills, giving me clear professional vision. I strongly recommend this high-value program to Ulama and graduates of Dars-e-Nizami as a strategic investment of their time.", location: "Multan", programme: "IT Professional" },
    { name: "Muhammad Osama Amin", photo: "/usamaa.jpg", quote: "I discovered this bootcamp right after completing my educational journey in Multan. The program provided excellent training in global and digital skills that taught us how to serve the world in a better way. We received outstanding trainers who showed us how to invest our time productively and develop valuable technical skills.", location: "Multan", programme: "Bootcamp Graduate" },
    { name: "Owais Ahmad", photo: "/owais.jpg", quote: "My experience at As-Sa'adah was truly transformative. During the Bootcamp, I gained hands-on expertise in full-stack development and developed practical VR/360° projects within a highly focused and disciplined environment. This program not only enhanced my technical capabilities but also strengthened my soft skills and provided clarity in defining my professional goals.", location: "Dir Lower, KPK", programme: "VR Developer" }
  ],

  hero_images: [
    { page: "Homepage", image: "/hero-image-1.jpg", altText: "As-Sa'adah - Education & Religious Studies" },
    { page: "Homepage", image: "/hero-image-3.jpg", altText: "As-Sa'adah - Community Service" },
    { page: "Homepage", image: "/hero-image-4.jpg", altText: "As-Sa'adah - Charity & Welfare" },
    { page: "Homepage", image: "/hero-image-5.jpg", altText: "As-Sa'adah - Islamic Center" },
    { page: "About Us", image: "/WhatsApp Image 2025-11-05 at 02.57.46_321328ff.jpg", altText: "Religious scholars collaborating during a digital literacy session" },
    { page: "About Us", image: "/WhatsApp Image 2025-11-05 at 12.38.05_77150b61.jpg", altText: "Instructor guiding students through a digital empowerment workshop" },
    { page: "About Us", image: "/education-hero-bg-alt.jpg", altText: "Aerial view of As-Sa'adah education hub" },
    { page: "About Us", image: "/WhatsApp Image 2025-11-05 at 18.32.17_254218d3.jpg", altText: "Students presenting project work as part of the program" }
  ],

  instructors: [
    { name: "Muhammad Ibrahim", photo: "/Instructors/Ibrahim.jpeg", subject: "Digital Marketing & Growth Strategist", bio: "Content Strategy, Social Media Marketing, Digital Growth" },
    { name: "Syed Ahmed Kabir Hashmi", photo: "/Instructors/Syed Ahmed.jpeg", subject: "Python Specialist & Full-Stack Developer", bio: "AI Systems Integrator" },
    { name: "Abdul Rehman", photo: "/Instructors/Abdul Rehman.jpeg", subject: "UI/UX Designer & Graphic Designer", bio: "UI/UX Design, Graphic Design, Branding, Figma, Prototyping" },
    { name: "Syed Hasnain Pasha", photo: "/Instructors/Syed Hasnain.jpeg", subject: "Communication and Language Trainer", bio: "" }
  ],

  courses: [
    // Level 1 — learning topics
    { level: "Level 1", title: "Logical Thinking", focus: "Breaking real-life problems into structured steps. Clear reasoning and systematic thinking." },
    { level: "Level 1", title: "Python Programming Foundations", focus: "Basic coding concepts. Conditions and loops. Structured functions. Data handling." },
    { level: "Level 1", title: "Debugging & Problem Solving", focus: "Identifying and correcting errors. Thinking through challenges calmly." },
    { level: "Level 1", title: "Team Collaboration", focus: "Working in small structured groups. Meeting deadlines responsibly." },
    { level: "Level 1", title: "Responsible Use of AI Tools", focus: "Using AI for assistance. Verifying outputs. Avoiding blind copying." },
    // Level 2 — bootcamp tracks
    { level: "Level 2", title: "Artificial Intelligence (AI)", focus: "Machine Learning, Data Science, AI Ethics" },
    { level: "Level 2", title: "Web & App Development", focus: "Full-Stack, Mobile App Development (iOS/Android)" },
    { level: "Level 2", title: "Cloud & DevOps", focus: "AWS/Azure/GCP, Automation, Infrastructure Management" },
    { level: "Level 2", title: "UI/UX Designing", focus: "User-Centric Design, Accessibility, Wireframing" },
    { level: "Level 2", title: "Digital Marketing & E-Commerce", focus: "SEO, SEM, Social Media Strategy, Online Business Development" },
    { level: "Level 2", title: "Emerging Technologies", focus: "Blockchain, Cryptography Fundamentals" },
    { level: "Level 2", title: "Creative & Media", focus: "Graphic Designing, Design & Animation, Media Studies" },
    // Level 3 — ecosystem features
    { level: "Level 3", title: "Idea Validation", focus: "Structured evaluation and refinement of startup concepts." },
    { level: "Level 3", title: "Product Development", focus: "Technical guidance to build functional prototypes." },
    { level: "Level 3", title: "Mentorship", focus: "Supervision from experienced professionals." },
    { level: "Level 3", title: "Collaborative Teams", focus: "Work within disciplined, structured startup teams." },
    { level: "Level 3", title: "Incubation Environment", focus: "Operate within a focused and accountable ecosystem." },
    { level: "Level 3", title: "Execution Discipline", focus: "Structured pathway toward real startup execution." }
  ],

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
  ],

  videos: [
    { placement: "Homepage", title: "As-Sa'adah Introduction", videoUrl: "https://www.youtube.com/watch?v=qsKcLtGzPpI" },
    { placement: "Homepage", title: "Free Digital Education Program", videoUrl: "https://www.youtube.com/watch?v=PQ1CmWGAUck" },
    { placement: "Homepage", title: "Community Bootcamp Session", videoUrl: "https://www.youtube.com/watch?v=OT_ew0Gh8Hc" },
    { placement: "Homepage", title: "Student Success Stories", videoUrl: "https://www.youtube.com/watch?v=91PhCsCa1fk" }
  ]
};

// hero_images has no display_order column (its slide order isn't critical);
// every other table does, and the app/admin panel sort by it.
const TABLES_WITH_DISPLAY_ORDER = new Set([
  "testimonials", "instructors", "courses", "level_rules", "videos"
]);

async function seedTable(tableName, rows) {
  const { count, error: countError } = await supabase
    .from(tableName)
    .select("*", { count: "exact", head: true });

  if (countError) {
    console.error(`[${tableName}] could not check existing rows: ${countError.message}`);
    return;
  }

  if (count > 0) {
    console.log(`[${tableName}] already has ${count} row(s) — skipped.`);
    return;
  }

  const rowsToInsert = TABLES_WITH_DISPLAY_ORDER.has(tableName)
    ? rows.map((row, index) => ({ ...row, display_order: index }))
    : rows;

  const { error: insertError } = await supabase.from(tableName).insert(rowsToInsert);
  if (insertError) {
    console.error(`[${tableName}] insert failed: ${insertError.message}`);
    if (!serviceKey) {
      console.error(
        `[${tableName}] this is likely RLS blocking anon inserts — add SUPABASE_SERVICE_ROLE_KEY to .env.local and re-run.`
      );
    }
    return;
  }

  console.log(`[${tableName}] inserted ${rows.length} row(s).`);
}

(async () => {
  for (const [table, rows] of Object.entries(seedData)) {
    await seedTable(table, rows);
  }
})();
