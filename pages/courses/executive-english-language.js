import Head from "next/head";
import CourseDetailLayout from "../../components/CourseDetailLayout";
import { FaLanguage, FaChalkboardTeacher, FaLayerGroup, FaListOl, FaClock } from "react-icons/fa";

const phases = [
  {
    title: "Foundation Grammar",
    range: "Days 1–6",
    summary: "The 8 parts of speech, verb forms and all 12 tenses.",
    items: [
      { no: 1, title: "Introduction to Parts of Speech", outcome: "Students identify the 8 parts of speech and understand their functions." },
      { no: 2, title: "Noun & Pronoun", outcome: "Students replace nouns with suitable pronouns and identify both in sentences." },
      { no: 3, title: "Adjective & Verb", outcome: "Students describe people/things and identify actions/states." },
      { no: 4, title: "Chart of Verbs", outcome: "Auxiliary verbs, modal auxiliaries, action verbs, and state verbs." },
      { no: 5, title: "Forms of Verbs", outcome: "V1, V2, V3, V-ing, V-s/es with practice." },
      { no: 6, title: "Chart of Tenses", outcome: "Introduction to all 12 tenses and their structures." },
    ],
  },
  {
    title: "Tense Transformation",
    range: "Days 7–8",
    summary: "Converting between tenses fluently, in both English and Urdu.",
    items: [
      { no: 7, title: "Transformation of Tenses (English)", outcome: "Students convert one tense into another." },
      { no: 8, title: "Transformation of Tenses (Urdu)", outcome: "Students translate Urdu structures into correct English tenses." },
    ],
  },
  {
    title: "Connected Sentences",
    range: "Days 9–15",
    summary: "Describing present routines, past events and future plans in natural, connected speech.",
    items: [
      { no: 9, title: "Connected Sentences Pair 1 & Pair 2", outcome: "Basic present routines and habits." },
      { no: 10, title: "Connected Sentences Pair 3", outcome: "Talking about past actions." },
      { no: 11, title: "Connected Sentences Pair 4", outcome: "Talking about completed past actions." },
      { no: 12, title: "Connected Sentences Pair 5", outcome: "Talking about background actions." },
      { no: 13, title: "Connected Sentences Pairs 3, 4 & 5", outcome: "Describing past events using sequence and timeline." },
      { no: 14, title: "Connected Sentences Pair 6 (a)", outcome: "Future plans and intentions." },
      { no: 15, title: "Connected Sentences Pair 6 (b)", outcome: "Future predictions and arrangements." },
    ],
  },
  {
    title: "Modal Auxiliary Verbs",
    range: "Days 16–22",
    summary: "Ability, obligation, advice and logical deduction, across present and past.",
    items: [
      { no: 16, title: "Can, Could, Will Be Able To", outcome: "Ability in present, past, and future." },
      { no: 17, title: "Should, Must, Should Have", outcome: "Advice, obligation, and past regret." },
      { no: 18, title: "Have To, Had To, Will Have To", outcome: "External obligation in different time periods." },
      { no: 19, title: "Must (Logical Conclusion – Present)", outcome: "Deduction about present situations." },
      { no: 20, title: "Must (Logical Conclusion – Past)", outcome: "Deduction about past situations." },
      { no: 21, title: "May (Logical Conclusion – Present & Past)", outcome: "Possibility and probability." },
      { no: 22, title: "Might (Logical Conclusion – Present & Past)", outcome: "Weak possibility and speculation / doubt." },
    ],
  },
  {
    title: "Conditional Sentences",
    range: "Days 23–24",
    summary: "Real, unreal and mixed conditionals, closing with a full course review.",
    items: [
      { no: 23, title: "Conditional Sentences Type 1 & Type 2", outcome: "Real and unreal present/future conditions." },
      { no: 24, title: "Conditional Sentences Type 3 + Final Revision", outcome: "Unreal past situations, mixed practice, and course review." },
    ],
  },
];

export default function ExecutiveEnglishLanguagePage() {
  return (
    <>
      <Head>
        <title>Executive English Language | Level 1 Curriculum | As-Sa&apos;adah</title>
        <meta
          name="description"
          content="24-session Executive English Language course covering grammar foundations, tense transformation, connected sentences, modal verbs and conditionals."
        />
        <link rel="icon" href="/images.png" />
      </Head>

      <CourseDetailLayout
        icon={<FaLanguage />}
        badge="Level 1 · Communication Track"
        title="Executive English Language"
        tagline="24 sessions, 3 classes a week, 2 months — grammar accuracy built into confident, real-world English."
        heroImage="/courses/english-language.jpg"
        stats={[
          { icon: <FaChalkboardTeacher />, label: "Instructor", value: "Syed Hasnain Pasha" },
          { icon: <FaListOl />, label: "Sessions", value: "24" },
          { icon: <FaLayerGroup />, label: "Modules", value: "5" },
          { icon: <FaClock />, label: "Outcome", value: "Real-World Fluency" },
        ]}
        overviewEyebrow="Overview"
        overviewTitle="Grammar Accuracy, Then Real Fluency"
        overviewParagraphs={[
          "The course starts from the 8 parts of speech and all 12 tenses, then moves quickly into how English is actually spoken — connected sentences about routines, past events and future plans.",
          "The final third focuses on modal verbs and conditional sentences, the two areas that separate confident, precise English from textbook English, finishing with a full course review under Syed Hasnain Pasha.",
        ]}
        itemLabel="Day"
        phases={phases}
        pdfPath="/courses/pdfs/executive-english-language-course-plan.pdf"
        applyFormUrl="https://forms.gle/BFadm5ZTHHpTtoWCA"
      />
    </>
  );
}
