import Head from "next/head";
import Layout from "../components/Layout";
import About from "../components/About";
import Education from "../components/Education";
import ProblemSection from "../components/ProblemSection";
import CoursesSection from "../components/CoursesSection";
import StructureSection from "../components/StructureSection";
import LearnSection from "../components/LearnSection";
import FeeStructure from "../components/FeeStructure";
import { SelectionPhilosophySection } from "../components/SelectionPhilosophySection";
import EligibilitySection from "../components/EligibilitySection";
import ApplyNowSection from "../components/ApplyNowSection";
//import CheckSection from "../components/CheckSection";
import YouTubeSection from "../components/YouTubeSection";
import ImpactStories from "../components/ImpactStories";
import FounderMessage from "../components/FounderMessage";

export default function Home() {
  return (
    <>
      <Head>
        <title>As-Sa'adah - Religious Empowerment Program</title>
        <meta
          name="description"
          content="As-Sa'adah is a comprehensive Islamic welfare organization providing education, healthcare, poverty alleviation, spiritual development, and emergency relief based on Islamic principles."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Layout>
        {/* Section 1 - Hero */}
        <Education />

        <About />

        {/* Section 2 - The Problem */}
        <ProblemSection />

        {/* Section 2.5 - Our Courses */}
        <CoursesSection />

        {/* Section 3 - The Structure */}
        <StructureSection />

        {/* Section 4 - Learning outcomes */}
        <LearnSection />

        {/* Section 6 - Fee */}
        <FeeStructure />

        {/* Section 5 - Selection Philosophy */}
        <SelectionPhilosophySection />
        

        {/* Section 7 - Who Should Apply */}
        <EligibilitySection />

        <ApplyNowSection />


      
        {/* Section 4 - Leadership */}
        <div id="leadership">
          <FounderMessage />
        </div>

        {/* Section 5 - Impact */}
        <div id="impact">
          <ImpactStories />
        </div>

        {/* Section 6 - Media */}
        <YouTubeSection />
      </Layout>
    </>
  );
}
