import Head from "next/head";
import CourseDetailLayout from "../../components/CourseDetailLayout";
import { FaBullhorn, FaChalkboardTeacher, FaLayerGroup, FaListOl, FaClock } from "react-icons/fa";

const phases = [
  {
    title: "Marketing Fundamentals",
    range: "Classes 1–6",
    summary: "SEO, the marketing funnel, and organic vs. paid strategy.",
    items: [
      { no: 1, title: "Digital Marketing Introduction" },
      { no: 2, title: "Digital Marketing Overview & SEO" },
      { no: 3, title: "Organic Marketing vs Paid Marketing" },
      { no: 4, title: "Marketing Funnel – TOFU, MOFU & BOFU" },
      { no: 5, title: "Marketing Funnel – Practical Understanding" },
      { no: 6, title: "Funnel Q&A & Assignment" },
    ],
  },
  {
    title: "Digital Tools & Identity",
    range: "Classes 7–10",
    summary: "Setting up a professional online presence and AI-assisted workflow.",
    items: [
      { no: 7, title: "ChatGPT, Claude & AI Project Files" },
      { no: 8, title: "Professional Gmail & Digital Identity" },
      { no: 9, title: "Facebook Profile Optimization" },
      { no: 10, title: "Facebook Page Creation & Optimization" },
    ],
  },
  {
    title: "Research & Analysis",
    range: "Classes 11–16",
    summary: "Competitor research, brand analysis and documenting findings professionally.",
    items: [
      { no: 11, title: "Google Docs & Google Sheets" },
      { no: 12, title: "Assignment & Practical Checking" },
      { no: 13, title: "Competitor Research" },
      { no: 14, title: "Meta Ad Library" },
      { no: 15, title: "Brand Analysis & Market Research" },
      { no: 16, title: "Assignment & Research Checking" },
    ],
  },
  {
    title: "Meta Business Suite & Ads",
    range: "Classes 17–23",
    summary: "Running a Facebook Page and live ad campaigns end to end.",
    items: [
      { no: 17, title: "Meta Business Suite Introduction" },
      { no: 18, title: "Meta Business Suite Inbox & Automation" },
      { no: 19, title: "Meta Business Suite Planner & Scheduling" },
      { no: 20, title: "Meta Business Suite Assignment" },
      { no: 21, title: "Facebook Ads – Campaign, Ad Set & Ad" },
      { no: 22, title: "Facebook Ads – Practical Setup" },
      { no: 23, title: "Facebook Ads Assignment" },
    ],
  },
  {
    title: "Freelancing Launch",
    range: "Class 24",
    summary: "Turning these skills into paid client work.",
    items: [{ no: 24, title: "Page Access, Client Hunting & Freelancing" }],
  },
];

export default function DigitalMarketingFreelancingPage() {
  return (
    <>
      <Head>
        <title>Digital Marketing & Freelancing | Level 1 Curriculum | As-Sa&apos;adah</title>
        <meta
          name="description"
          content="24-class Digital Marketing & Freelancing roadmap — SEO, marketing funnels, research, Meta Business Suite, Facebook Ads and freelancing."
        />
        <link rel="icon" href="/images.png" />
      </Head>

      <CourseDetailLayout
        icon={<FaBullhorn />}
        badge="Level 1 · Marketing Track"
        title="Digital Marketing & Freelancing"
        tagline="From marketing fundamentals to running live Facebook Ad campaigns and landing your first clients."
        heroImage="/courses/digital-marketing.jpg"
        stats={[
          { icon: <FaChalkboardTeacher />, label: "Instructor", value: "Muhammad Ibrahim" },
          { icon: <FaListOl />, label: "Classes", value: "24" },
          { icon: <FaLayerGroup />, label: "Phases", value: "5" },
          { icon: <FaClock />, label: "Outcome", value: "Live Campaigns" },
        ]}
        overviewEyebrow="Overview"
        overviewTitle="Marketing Skills That Lead to Paid Work"
        overviewParagraphs={[
          "Students start with SEO and the marketing funnel, then set up a professional digital identity before moving into real competitor research and brand analysis.",
          "The back half of the course is entirely hands-on: running a Facebook Page through Meta Business Suite, setting up live ad campaigns, and finally learning how to find and manage freelance clients under Muhammad Ibrahim.",
        ]}
        itemLabel="Class"
        phases={phases}
        pdfPath="/courses/pdfs/digital-marketing-freelancing-roadmap.pdf"
        applyFormUrl="https://forms.gle/BFadm5ZTHHpTtoWCA"
      />
    </>
  );
}
