import Head from "next/head";
import Layout from "../components/Layout";
import LegalPage from "../components/LegalPage";

const privacySections = [
  {
    id: "1.1",
    title: "Introduction and Scope",
    paragraphs: [
      `As-sa'adah Foundation ("As-sa'adah", "we", "our", or "us"), in operational collaboration with our execution partner Prepreneurship Pvt Ltd, is committed to safeguarding your privacy and treating your personal data with utmost trust (Amanah) and responsibility. This Privacy Policy governs the collection, processing, storage, and protection of information obtained through our official website (https://as-saadah.com), Learning Management System (LMS), student onboarding funnels, and communication channels.`
    ]
  },
  {
    id: "1.2",
    title: "Information We Collect",
    description:
      "We collect personal information necessary to deliver educational programs, evaluate applications, and maintain administrative records:",
    items: [
      {
        label: "Applicant Demographics (Step 1)",
        text: "Full legal name, father's/guardian's name, age/date of birth, gender, residential city, contact email, WhatsApp/mobile phone number, and religious seminary (Madrasah / Dars-e-Nizami) educational background."
      },
      {
        label: "Academic & Intent Assessment Data (Step 2)",
        text: "Statements of intent, learning goals, daily commitment availability, educational achievements, and analytical/logical assessments."
      },
      {
        label: "Enrollment & Transactional Data (Step 3)",
        text: "Payment verification receipts for the Online Preparatory Phase (Rs. 5,000/month fee), scholarship application records (including declared financial need and merit verification), and transaction identifiers."
      },
      {
        label: "Academic Performance & LMS Telemetry",
        text: "Attendance logs, lecture progress, programming assignment submissions, code repositories, quiz scores, peer collaboration logs, and instructor evaluations."
      },
      {
        label: "Technical & Usage Information",
        text: "IP addresses, browser types, operating systems, referring URLs, device identifiers, and session timestamps."
      }
    ]
  },
  {
    id: "1.3",
    title: "Legal Basis and Ethical Standards for Data Processing",
    description:
      "We process personal data in strict compliance with the Prevention of Electronic Crimes Act, 2016 (PECA) of the Islamic Republic of Pakistan and applicable data protection regulations. Grounded in Islamic ethical principles, we treat all personal data as a sacred trust (Amanah). Processing is conducted based on:",
    numbered: [
      {
        label: "Contractual Necessity",
        text: "Delivering educational coursework, grading, and certification."
      },
      {
        label: "Explicit Consent",
        text: "Provided by applicants during the 3-step registration process."
      },
      {
        label: "Legitimate Operational Interest",
        text: "Performance-based evaluation for admission into fully funded residential bootcamps and job placement pipelines."
      }
    ]
  },
  {
    id: "1.4",
    title: "Purpose of Data Utilization",
    description: "Your data is used solely for the following purposes:",
    items: [
      { text: "Evaluating and processing student admissions through our 3-step funnel." },
      { text: "Providing secure access to our digital LMS and course repositories." },
      { text: "Conducting rigorous, objective evaluation for advancement to the Fully Funded Physical Bootcamp." },
      { text: "Communicating administrative announcements, schedule updates, and academic notifications via email and WhatsApp." },
      { text: "Verifying fee transactions and awarding merit/need-based scholarships." },
      { text: "Connecting qualified graduates with industry employers or incubation resources via the Ilm to Impact Startup Council." }
    ]
  },
  {
    id: "1.5",
    title: "Data Sharing and Third-Party Disclosures",
    description:
      "We do not sell, rent, monetize, or commercialize your personal information under any circumstances. Data is shared only with trusted operational entities strictly on a need-to-know basis:",
    items: [
      {
        label: "Prepreneurship Pvt Ltd",
        text: "As the official execution partner managing curriculum delivery, logistics, and technical instruction."
      },
      {
        label: "Infrastructure & Platform Providers",
        text: "Cloud server providers, secure LMS hosting platforms, and banking/payment processing partners."
      },
      {
        label: "Prospective Employers & Hiring Partners",
        text: "Shared exclusively with the graduate's explicit prior written consent following completion of Level 2/Bootcamp."
      },
      {
        label: "Legal Authorities",
        text: "Disclosed only when strictly required by enforceable court orders or statutory mandates under Pakistani law."
      }
    ]
  },
  {
    id: "1.6",
    title: "Data Security and Retention",
    description:
      "We enforce administrative, technical, and physical security measures, including SSL/TLS encryption, role-based access restrictions, and secure database auditing.",
    items: [
      {
        label: "Applicant Data",
        text: "Retained for the duration of the admissions cycle; unselected applications are archived or anonymized within 12 months."
      },
      {
        label: "Enrolled Student & Alumni Records",
        text: "Transcripts, certificates, and core project portfolios are retained indefinitely to verify alumni credentials."
      },
      {
        label: "Financial Receipts",
        text: "Retained for statutory audit and taxation compliance as required by Pakistani corporate and non-profit law."
      }
    ]
  },
  {
    id: "1.7",
    title: "User Rights",
    description: "Subject to applicable law, you have the right to:",
    items: [
      { text: "Access the personal data held in your student profile." },
      { text: "Request rectification of inaccurate or outdated information." },
      { text: "Request deletion of your applicant records (provided there are no overriding legal or certification retention requirements)." },
      { text: "Withdraw consent for optional communications at any time." }
    ]
  },
  {
    id: "1.8",
    title: "Contact and Inquiries",
    description:
      "For privacy requests, data access, or inquiries, please contact our Data Compliance Desk:",
    items: [
      { label: "Email", text: "privacy@as-saadah.com / info@as-saadah.com" },
      { label: "Phone / WhatsApp", text: "+92 312 2221280" },
      { label: "Physical Address", text: "As-sa'adah Center, Q634+452, Chaman Zar Hill, Islamabad, Pakistan." }
    ]
  }
];

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy | As-Sa&apos;adah</title>
        <meta
          name="description"
          content="Read the As-Sa'adah Foundation Privacy Policy covering data collection, usage, sharing, security, retention, and user rights."
        />
      </Head>
      <Layout>
        <LegalPage
          eyebrow="Legal"
          title="Privacy Policy"
          subtitle="How As-Sa'adah collects, uses, and protects your personal information."
          dateBadges={["Effective Date: May 1, 2025", "Last Updated: September 3, 2026"]}
          sections={privacySections}
        />
      </Layout>
    </>
  );
}
