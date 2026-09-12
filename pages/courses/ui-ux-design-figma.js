import Head from "next/head";
import CourseDetailLayout from "../../components/CourseDetailLayout";
import { FaPaintBrush, FaChalkboardTeacher, FaLayerGroup, FaListOl, FaClock } from "react-icons/fa";

const phases = [
  {
    title: "UI/UX Fundamentals & Figma Basics",
    range: "Classes 1–6",
    summary: "Core design thinking and the Figma toolkit, from frames to components.",
    items: [
      { no: 1, title: "Introduction to UI/UX Design", bullets: ["Difference Between UI & UX", "Design Process", "Introduction to Figma"] },
      { no: 2, title: "Figma Interface", bullets: ["Frames, Shapes & Text", "Images & Basic Tools"] },
      { no: 3, title: "Auto Layout", bullets: ["Constraints", "Grids & Alignment"] },
      { no: 4, title: "Typography", bullets: ["Color Theory", "Design Principles"] },
      { no: 5, title: "Components", bullets: ["Variants", "Assets & Plugins"] },
      { no: 6, title: "Practical Assignment", bullets: ["Social Media Post Design"] },
    ],
  },
  {
    title: "Graphic Design Essentials",
    range: "Classes 7–10",
    summary: "Applying design fundamentals to real marketing and branding assets.",
    items: [
      { no: 7, title: "Professional Social Media Post Design", bullets: [] },
      { no: 8, title: "Poster & Banner Design", bullets: [] },
      { no: 9, title: "Logo Design Fundamentals", bullets: ["Brand Identity Basics"] },
      { no: 10, title: "Mockups", bullets: ["Graphic Design Project", "Assignment Review"] },
    ],
  },
  {
    title: "Mobile App UI Design",
    range: "Classes 11–16",
    summary: "Designing complete, interactive mobile app screens end to end.",
    items: [
      { no: 11, title: "Mobile UI Principles", bullets: ["Design Guidelines"] },
      { no: 12, title: "Splash Screen", bullets: ["Login & Sign-Up Screens"] },
      { no: 13, title: "Home Screen Design", bullets: ["Navigation Bar"] },
      { no: 14, title: "Product/Service Detail Screen", bullets: ["Profile & Settings Screens"] },
      { no: 15, title: "Prototyping", bullets: ["Smart Animate", "Interactive Flow"] },
      { no: 16, title: "Complete Mobile App Design Project", bullets: [] },
    ],
  },
  {
    title: "Website UI Design",
    range: "Classes 17–24",
    summary: "From wireframes to a fully responsive, presentation-ready website.",
    items: [
      { no: 17, title: "Website Structure", bullets: ["Wireframing", "Layout Planning"] },
      { no: 18, title: "Hero Section Design", bullets: ["Navigation Bar"] },
      { no: 19, title: "About, Services & Features Sections", bullets: [] },
      { no: 20, title: "Testimonials", bullets: ["Pricing", "Footer Design"] },
      { no: 21, title: "Responsive Web Design", bullets: ["Auto Layout for Websites"] },
      { no: 22, title: "Complete Landing Page Design", bullets: [] },
      { no: 23, title: "Complete Website Project", bullets: ["Design Review & Improvements"] },
      { no: 24, title: "Final Project Presentation", bullets: ["Portfolio Review", "Feedback & Course Completion"] },
    ],
  },
];

export default function UiUxDesignFigmaPage() {
  return (
    <>
      <Head>
        <title>UI/UX Design & Figma | Level 1 Curriculum | As-Sa&apos;adah</title>
        <meta
          name="description"
          content="Full UI/UX Design & Figma curriculum — 24 classes across Figma basics, graphic design, mobile app UI and website UI design."
        />
        <link rel="icon" href="/images.png" />
      </Head>

      <CourseDetailLayout
        icon={<FaPaintBrush />}
        badge="Level 1 · Design Track"
        title="UI/UX Design & Figma"
        tagline="From Figma fundamentals to complete, portfolio-ready UI/UX projects."
        heroImage="/courses/ui-ux-design.jpg"
        stats={[
          { icon: <FaChalkboardTeacher />, label: "Instructor", value: "Abdul Rehman" },
          { icon: <FaListOl />, label: "Classes", value: "24" },
          { icon: <FaLayerGroup />, label: "Phases", value: "4" },
          { icon: <FaClock />, label: "Outcome", value: "Portfolio Projects" },
        ]}
        overviewEyebrow="Overview"
        overviewTitle="Design Thinking, Then Real Portfolio Work"
        overviewParagraphs={[
          "This course takes students from the very basics of UI/UX theory into hands-on Figma work — frames, auto layout, components and design systems — before moving into real design briefs.",
          "By the end, students have designed complete graphic assets, a full mobile app, and a responsive website, presented as portfolio-ready projects under Abdul Rehman's guidance.",
        ]}
        itemLabel="Class"
        phases={phases}
        pdfPath="/courses/pdfs/ui-ux-design-figma-curriculum.pdf"
        applyFormUrl="https://forms.gle/BFadm5ZTHHpTtoWCA"
      />
    </>
  );
}
