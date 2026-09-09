import Head from "next/head";
import Layout from "../components/Layout";
import LegalPage from "../components/LegalPage";

const termsSections = [
  {
    id: "2.1",
    title: "Agreement to Terms",
    paragraphs: [
      `By visiting https://as-saadah.com, submitting an application through our registration funnel, or enrolling in any As-sa'adah educational track, you enter into a legally binding agreement with As-sa'adah Foundation and Prepreneurship Pvt Ltd. If you do not agree to these Terms, you must discontinue use of the website and services immediately.`
    ]
  },
  {
    id: "2.2",
    title: "Program Scope & Admissions Philosophy",
    items: [
      {
        label: "Target Audience",
        text: "Our programs are specifically designed for Madaris (Dars-e-Nizami) graduates, religious scholars, and motivated learners committed to mastering modern technical, digital, and leadership skills."
      },
      {
        label: "Integrity of Information",
        text: "Applicants warrant that all educational credentials, background details, and contact information provided during the 3-step application funnel are authentic and accurate. Providing fraudulent information will result in immediate disqualification without refund."
      },
      {
        label: "Non-Discriminatory Merit Policy",
        text: "Admissions, evaluations, and scholarships are administered strictly on personal merit, performance, and commitment, without regard to school of thought, ethnic origin, or geographic background."
      }
    ]
  },
  {
    id: "2.3",
    title: "Educational Structure & Performance-Based Progression Model",
    levels: [
      {
        title: "Level 1 (Online Preparatory Phase)",
        subItems: [
          {
            label: "Duration",
            text: "2 months of structured online learning covering Logical Thinking, Python Programming Fundamentals, Data Handling, Debugging Mindset, Responsible AI Usage, and Team Collaboration."
          },
          {
            label: "Time Commitment",
            text: "Students are required to dedicate 2–3 hours daily with strict punctuality."
          },
          {
            label: "Fee",
            text: "Rs. 5,000 per month (unless awarded a partial or full scholarship)."
          }
        ]
      },
      {
        title: "Level 2 (Fully Funded Physical Bootcamp)",
        subItems: [
          {
            label: "Strict Advancement Clause",
            text: "Enrollment in or completion of Level 1 does NOT guarantee selection for Level 2 (Physical Bootcamp). Progression is strictly competitive and performance-driven, evaluated solely on consistency, homework submission rates, test scores, discipline, and logical clarity. Public seat quotas are not disclosed."
          },
          {
            text: "Selection for Level 2 includes 100% funding covering tuition, mentoring, and physical infrastructure."
          }
        ]
      },
      {
        title: "Level 3 (Ilm to Impact Incubation & Placement)",
        subItems: [
          {
            text: "Top graduates may be invited into the Ilm to Impact Startup Council or recommended through our professional placement pathways. Participation in these tracks requires ongoing adherence to institutional codes of conduct."
          }
        ]
      }
    ]
  },
  {
    id: "2.4",
    title: "Financial Policies, Scholarships, and Refunds",
    items: [
      {
        label: "Tuition Fees",
        text: "Preparatory phase fees must be settled prior to course commencement or in accordance with prescribed installment deadlines."
      },
      {
        label: "Refund Policy",
        text: "Due to limited cohort capacity and immediate allocation of LMS and mentor resources, Level 1 tuition fees are non-refundable once the cohort commences."
      },
      {
        label: "Scholarships",
        text: "Scholarships awarded on merit or financial need are conditional. The Foundation reserves the right to revoke scholarship status if a recipient falls below minimum attendance (90%) or fails to submit required project milestones."
      }
    ]
  },
  {
    id: "2.5",
    title: "Academic Integrity & Responsible AI Policy",
    items: [
      {
        label: "Original Work",
        text: "Students must submit their own original code and project solutions. Plagiarism or unauthorized copying of peer submissions will lead to immediate disciplinary review."
      },
      {
        label: "Ethical & Responsible AI",
        text: "While students are taught to leverage modern AI tools effectively, uncredited submission of auto-generated code where independent problem-solving is being tested is strictly prohibited. AI must serve as an assistant, not a replacement for fundamental mastery."
      },
      {
        label: "Code of Ethics",
        text: "Students must embody Islamic moral character (Akhlaq), treating faculty, staff, mentors, and peers with mutual respect. Harassment, sectarian debate, defamatory speech, or disruptions on official communication platforms (WhatsApp, Slack, Zoom, LMS) will result in immediate termination of enrollment."
      }
    ]
  },
  {
    id: "2.6",
    title: "Intellectual Property Rights",
    items: [
      {
        label: "Foundation Materials",
        text: "All course curricula, lecture slides, video recordings, coding problem sets, logos, trademarks, and documentation published on as-saadah.com and its LMS are the exclusive intellectual property of As-sa'adah Foundation and Prepreneurship Pvt Ltd. Reproduction, public distribution, or resale without prior written permission is strictly prohibited."
      },
      {
        label: "Student Inventions & Code",
        text: "Students retain intellectual property ownership of original software applications and projects developed during their training, subject to fair educational display rights granted to As-sa'adah for portfolio showcases. Inventions developed under the Ilm to Impact incubator may be subject to separate partnership agreements."
      }
    ]
  },
  {
    id: "2.7",
    title: "Disclaimers and Limitation of Liability",
    items: [
      {
        label: "No Guarantee of Employment",
        text: "As-sa'adah provides training, capability development, portfolio preparation, and network facilitation. We do not guarantee specific salaries, employment contracts, or venture funding. Professional success remains dependent on individual capability and market conditions."
      },
      {
        label: "Service Availability",
        text: "While we strive for uninterrupted service, As-sa'adah is not liable for temporary platform downtime, internet disruptions, or third-party tool outages."
      },
      {
        label: "Limitation",
        text: "To the maximum extent permitted by Pakistani law, As-sa'adah Foundation and Prepreneurship Pvt Ltd shall not be liable for any indirect, incidental, or consequential damages resulting from course participation."
      }
    ]
  },
  {
    id: "2.8",
    title: "Governing Law & Dispute Resolution",
    paragraphs: [
      "These Terms of Service are governed by and construed in accordance with the substantive laws of the Islamic Republic of Pakistan. Any dispute arising out of or in connection with these Terms shall be resolved amicably through mutual consultation; failing which, the courts located in Islamabad, Pakistan shall possess exclusive jurisdiction."
    ]
  }
];

export default function TermsOfService() {
  return (
    <>
      <Head>
        <title>Terms of Service | As-Sa&apos;adah</title>
        <meta
          name="description"
          content="Read the As-Sa'adah Foundation Terms of Service covering admissions, program structure, financial policies, academic integrity, intellectual property, and liability."
        />
      </Head>
      <Layout>
        <LegalPage
          eyebrow="Legal"
          title="Terms of Service"
          subtitle="The agreement governing your use of As-Sa'adah's website and educational programs."
          dateBadges={["Effective Date: September 1, 2026", "Last Updated: September 3, 2026"]}
          sections={termsSections}
        />
      </Layout>
    </>
  );
}
