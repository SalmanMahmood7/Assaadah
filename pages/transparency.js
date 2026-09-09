import Head from "next/head";
import Layout from "../components/Layout";
import LegalPage from "../components/LegalPage";

const transparencySections = [
  {
    id: "3.1",
    title: "Institutional Overview & Philosophy of Accountability",
    paragraphs: [
      "As-sa'adah was founded in 2015 as a holistic Islamic welfare and educational initiative. Under the leadership of our Directors and the guidance of our Patronage (including Molana Abdul Quddoos Muhammadi and Molana Munir Ahmad Alvi), we operate on the Quranic imperative of trust (Amanah) and transparent public accountability (Muhasabah).",
      "This Transparency Report outlines our operational structure, financial allocations, admissions metrics, and graduate outcomes to provide students, donors, partners, and the broader Ummah with verifiable visibility into our work."
    ]
  },
  {
    id: "3.2",
    title: "Operational & Partnership Architecture",
    items: [
      {
        label: "As-sa'adah Foundation",
        text: "Responsible for institutional governance, ideological direction, scholarship underwriting, philanthropic outreach, and community welfare."
      },
      {
        label: "Prepreneurship Pvt Ltd",
        text: "Serves as the executive implementing partner, providing technical curriculum oversight, enterprise-grade engineering training, LMS administration, and mentorship coordination."
      },
      {
        label: "Dual Oversight",
        text: "This separation ensures educational rigor and operational efficiency while maintaining philanthropic integrity and ethical adherence."
      }
    ]
  },
  {
    id: "3.3",
    title: "Admissions & Student Selection Metrics",
    description:
      "We maintain a strict performance-based advancement model to ensure that educational opportunity translates into genuine capability:",
    items: [
      {
        label: "Cohort Selection Philosophy",
        text: "Admission into Level 1 (Online Preparatory Phase) is open to qualifying seminary graduates. Advancement to Level 2 (Physical Residential Bootcamp) is strictly competitive and merit-based."
      },
      {
        label: "Advancement Criteria",
        subList: [
          "40% Daily Submission & Homework Consistency",
          "30% Analytical & Python Coding Benchmark Scores",
          "20% Attendance & Punctuality",
          "10% Collaborative Soft Skills & Peer Conduct"
        ]
      },
      {
        label: "Affirmative Equity",
        text: "No regional, seminary affiliation, or demographic quotas are applied. Selection is audited blindly based on objective performance benchmarks."
      }
    ]
  },
  {
    id: "3.4",
    title: "Financial Model & Resource Allocation",
    description:
      "As-sa'adah operates as a blended-impact institution combining accessible preparatory fees with fully funded philanthropic bootcamps:",
    levels: [
      {
        title: "1. Online Preparatory Phase (Level 1)",
        subItems: [
          { label: "Fee", text: "Rs. 5,000/month." },
          {
            label: "Fee Purpose",
            text: "Defrays recurring server, LMS licensing, cloud lab environments, and direct teaching assistant stipends."
          },
          {
            label: "Scholarship Provision",
            text: "Over 40% of Level 1 students receive partial or complete fee waivers based on verified economic need."
          }
        ]
      },
      {
        title: "2. Physical Residential Bootcamp (Level 2)",
        subItems: [
          {
            label: "Student Cost",
            text: "100% Fully Funded (Zero tuition, zero housing costs for admitted students)."
          },
          {
            label: "Funding Source",
            text: "Financed through As-sa'adah Foundation welfare endowments, institutional donors, and corporate social responsibility (CSR) grants."
          }
        ]
      },
      {
        title: "3. Institutional Fund Allocation Breakdown",
        subItems: [
          {
            label: "60% Program Delivery & Technical Instruction",
            text: "Faculty honoraria, engineering mentors, lab hardware, and LMS infrastructure."
          },
          {
            label: "25% Student Welfare & Residential Support",
            text: "Accommodations, high-speed connectivity, and student stipends for the physical bootcamp."
          },
          {
            label: "10% Curriculum R&D & Incubation (Ilm to Impact)",
            text: "Startup advisory, venture mentorship, and industry guest lectures."
          },
          {
            label: "5% Administrative & Compliance Overhead",
            text: "Legal, auditing, reporting, and statutory regulatory filings."
          }
        ]
      }
    ]
  },
  {
    id: "3.5",
    title: "Academic Rigor & AI Ethics Auditing",
    items: [
      {
        label: "Assessment Transparency",
        text: "Grading criteria, rubrics, and project guidelines are published openly to students on the LMS prior to assignment launches."
      },
      {
        label: "AI Evaluation Protocol",
        text: "Student code submissions undergo automated syntax and originality checks to ensure students master core foundational logic rather than relying on unvetted generative AI shortcuts."
      },
      {
        label: "Faculty Review",
        text: "All Level 2 candidate selections are ratified by a joint academic committee comprising seminary scholars and senior IT industry engineers."
      }
    ]
  },
  {
    id: "3.6",
    title: "Graduate Outcomes & Socio-Economic Impact",
    description: "We track graduate progress post-bootcamp to assess program efficacy:",
    items: [
      {
        label: "Career Trajectories",
        text: "Graduates have transitioned into roles including Full-Stack Web Development, VR/360° Interactive Media Engineering, UI/UX Design, and Digital Media Management."
      },
      {
        label: "Economic Independence",
        text: "Alumni have successfully secured remote employment, software house positions, and freelance contracts, with several launching early-stage startups under the Ilm to Impact Council."
      },
      {
        label: "Cultural & Community Contribution",
        text: "Scholars trained in digital literacy are actively leveraging modern technology to produce high-impact, authentic digital Islamic content and scholarly resources for global audiences."
      }
    ]
  },
  {
    id: "3.7",
    title: "Feedback, Audits, and Grievance Redressal",
    description: "We maintain an open-door policy for continuous improvement:",
    items: [
      {
        label: "Independent Inquiries",
        text: "For questions regarding our financial disclosures, scholarship funds, or governance, write directly to: transparency@as-saadah.com."
      },
      {
        label: "Student Grievances",
        text: "An anonymous feedback mechanism is integrated into the student LMS to address concerns regarding grading fairness or mentor conduct."
      },
      {
        label: "Official Contact",
        text: "As-sa'adah Center, Q634+452, Chaman Zar Hill, Islamabad, Pakistan | Phone: +92 312 2221280"
      }
    ]
  }
];

export default function TransparencyReport() {
  return (
    <>
      <Head>
        <title>Transparency Report | As-Sa&apos;adah</title>
        <meta
          name="description"
          content="As-Sa'adah's Transparency Report covering institutional structure, admissions metrics, financial allocation, academic rigor, graduate outcomes, and grievance redressal."
        />
      </Head>
      <Layout>
        <LegalPage
          eyebrow="Accountability"
          title="Transparency Report"
          subtitle="Our operational structure, financial allocations, admissions metrics, and graduate outcomes."
          dateBadges={["Published: September 2026", "Reporting Cycle: 2025–2026 Academic & Welfare Review"]}
          sections={transparencySections}
        />
      </Layout>
    </>
  );
}
