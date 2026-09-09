import Head from "next/head";
import Layout from "../components/Layout";
import { createContext, useContext, useEffect, useState, useCallback } from "react";
import jsPDF from "jspdf";
import styles from "../styles/Apply.module.css";
import supabase from "../lib/supabaseClient";

function dataUrlToBlob(dataUrl) {
  const [header, base64] = dataUrl.split(",");
  const mimeMatch = header.match(/data:(.*);base64/);
  const mime = mimeMatch ? mimeMatch[1] : "application/octet-stream";
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) bytes[i] = binary.charCodeAt(i);
  return new Blob([bytes], { type: mime });
}

async function uploadDataUrlToSupabase(bucket, path, dataUrl) {
  const blob = dataUrlToBlob(dataUrl);
  const { error } = await supabase.storage.from(bucket).upload(path, blob, {
    contentType: blob.type,
    upsert: false,
  });
  if (error) throw error;
  const { data } = supabase.storage.from(bucket).getPublicUrl(path);
  return data.publicUrl;
}



const steps = [
  { key: "personal", title: "Personal Details", subtitle: "Basic information" },
  { key: "academic", title: "Academic Details", subtitle: "Madrasah & Education" },
  { key: "short1", title: "Short Answers", subtitle: "Questions 1–3" },
  { key: "short2", title: "Short Answers", subtitle: "Questions 4–6" },
  { key: "scholarship", title: "Merit Scholarship", subtitle: "Questions 1–4" },
  { key: "review", title: "Review & Submit", subtitle: "Confirm details" },
];

const YesNo = [
  { value: "", label: "Select…" },
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const Proficiency = [
  { value: "", label: "Select level…" },
  { value: "basic", label: "Basic" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

const Years = [
  { value: "", label: "Select year…" },
  ...Array.from({ length: 16 }, (_, index) => {
    const year = 2010 + index;
    return { value: String(year), label: String(year) };
  }),
];

const Grades = [
  { value: "", label: "Select grade…" },
  { value: "mumtaz", label: "Mumtaz" },
  { value: "jayyid-jiddan", label: "Jayyid Jiddan" },
  { value: "jayyid", label: "Jayyid" },
  { value: "maqbool", label: "Maqbool" },
  { value: "rasib", label: "Rasib" },
];

const Degrees = [
  { value: "", label: "Select degree…" },
  { value: "matric", label: "Matric" },
  { value: "fa", label: "FA" },
  { value: "ba", label: "BA" },
  { value: "ma", label: "MA" },
  { value: "phd", label: "PhD" },
];

const ComputerCourses = [
  { value: "", label: "Select course…" },
  { value: "ms-word", label: "MS Word" },
  { value: "ms-excel", label: "MS Excel" },
  { value: "ms-powerpoint", label: "MS PowerPoint" },
  { value: "ms-office", label: "MS Office Suite" },
  { value: "email-usage", label: "Email & Internet" },
  { value: "typing", label: "Typing Skills" },
  { value: "graphics", label: "Graphic Designing Basics" },
  { value: "web-browsing", label: "Web Browsing" },
  { value: "social-media", label: "Social Media Management" },
  { value: "custom", label: "Custom / Other" },
];

const LOGO_ASSET_PATH = "/as-sa-adah-logo.png";
const LETTERHEAD_ASSET_PATH = "/letterhead.jpg";
const PDF_CENTER_HEADING = ["As-Sa'adah IT Boot Camp Batch-2", "Admission Form"];
const PDF_FIRST_PAGE_START_Y = 195;
const PDF_OTHER_PAGE_START_Y = 170;
const PDF_TOTAL_PAGES = 7;
const STORAGE_UPLOAD_ENABLED = process.env.NEXT_PUBLIC_ENABLE_STORAGE_UPLOAD === "true";
const PDF_STORAGE_UPLOAD_ENABLED = process.env.NEXT_PUBLIC_ENABLE_PDF_STORAGE_UPLOAD === "true";
const EMAILJS_ENDPOINT = "https://api.emailjs.com/api/v1.0/email/send";
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_8wunae4";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_vk3rzrj";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "Gd2ZR9Y2yjEtEXUR3";
const ADMISSIONS_CONTACT_EMAIL = process.env.NEXT_PUBLIC_ADMISSIONS_CONTACT_EMAIL || "assaadahcontact525@gmail.com";
const ADMISSIONS_CONTACT_PHONE = process.env.NEXT_PUBLIC_ADMISSIONS_CONTACT_PHONE || "+92 312 2221280";
const INSTITUTE_ADDRESS =
  process.env.NEXT_PUBLIC_INSTITUTE_ADDRESS ||
  "As-Sa'adah, Q634+452, Chaman Zar Hill, Islamabad, Pakistan";
const ADMISSION_RULES = [
  {
    heading: "Eligibility Criteria for Admission",
    points: [
      "Hold a complete Aalim (Dars-e-Nizami) degree and certificate from an accredited Madrassah.",
      "Demonstrate proficiency in either Arabic or English, in both speech and writing.",
      "Meet the institute's mental aptitude (IQ) standard as determined through the interview or test.",
      "Possess basic computer literacy, including Microsoft Office and Internet usage.",
      "Own a personal laptop suitable for coursework.",
      "Maintain Shari'ah-compliant appearance in beard, dress, and overall presentation."
    ]
  },
  {
    heading: "Adherence to Prayers and Daily Routines",
    points: [
      "Offer all five daily prayers in congregation from the Takbeer Ula; absences without a valid Shari'ah excuse trigger disciplinary action.",
      "Keep consistent Tilawat, prescribed Adhkar/Awrad, and attend the post-Fajr and post-Maghrib activities.",
      "Follow the complete daily schedule covering classes, study hours, meals, and rest; violations count as discipline breaches."
    ]
  },
  {
    heading: "Academic Regulations",
    points: [
      "Pay the non-refundable PKR 5,000 admission fee upon arrival.",
      "Maintain academic performance; serious lapses can lead to expulsion and payment of full monthly accommodation and meal costs.",
      "Outside employment or activities are prohibited.",
      "Applicants must be under 30 years of age at the time of application.",
      "An honorary Certificate of Merit may be awarded monthly based on outstanding performance.",
      "Maintain at least 90% attendance and submit prior written notice (Naazim) for an excused absence.",
      "All examinations and assignments are compulsory; failure may cancel admission.",
      "Complete every academic task within the assigned deadlines."
    ]
  },
  {
    heading: "Hostel & Administrative Regulations",
    points: [
      "Safeguard institute property; damages result in fines.",
      "Follow hostel arrival/departure timings, guest policies, and obtain permission before any absence.",
      "Carry and display the student identity card at all times."
    ]
  },
  {
    heading: "Moral and Disciplinary Regulations",
    points: [
      "Mobile phones are prohibited during classes, prayers, and recitation sessions; violations lead to confiscation.",
      "Show respect toward teachers, administration, and peers; misconduct or abusive language is unacceptable.",
      "Political or sectarian activities are strictly forbidden.",
      "Possessing or using intoxicants results in immediate expulsion.",
      "Any physical, verbal, or psychological harassment or violence is an unforgivable offense."
    ]
  },
  {
    heading: "Student's Affidavit - Core Principles",
    points: [
      "Students affirm adherence to Islamic principles, including regular Salah and Tilawat.",
      "They are committed to Khatm-e-Nubuwwat and will not join any movement opposing it.",
      "They agree to follow all institute rules, schedules, and directives.",
      "They accept that any violation can result in expulsion."
    ]
  }
];

const valueOrDash = (value) => {
  if (value === null || value === undefined) return "—";
  const stringValue = typeof value === "string" ? value : String(value);
  const trimmed = stringValue.trim();
  return trimmed.length ? trimmed : "—";
};

const formatDateValue = (value) => {
  if (!value) return "—";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return valueOrDash(value);
  }
  return parsed.toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" });
};

const getOptionLabel = (options, selected) => {
  if (!selected) return "—";
  const match = options.find((option) => option.value === selected);
  return match ? match.label : valueOrDash(selected);
};

const getImageFormat = (source) => {
  if (!source) return "PNG";
  const lowered = source.toLowerCase();
  if (lowered.includes("image/png")) return "PNG";
  if (lowered.includes("image/jpeg") || lowered.includes("image/jpg")) return "JPEG";
  if (lowered.includes("image/webp")) return "WEBP";
  return "PNG";
};

const buildFileName = (studentName) => {
  const slug = studentName
    ? studentName
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "")
    : "applicant";
  return `As-Sa'adah-Admission-${slug || "applicant"}.pdf`;
};

const Marital = [
  { value: "", label: "Select status…" },
  { value: "single", label: "Single" },
  { value: "married", label: "Married" },
];

const FormLockContext = createContext(false);

const initial = {
  personal: {
    studentName: "",
    fatherName: "",
    dob: "",
    cnic: "",
    permAddress: "",
    currAddress: "",
    phone: "",
    emergency: "",
    email: "",
    marital: "",
    photo: null,
    photoLink: "",
  },
  academic: {
    madrasaName: "",
    yearAlim: "",
    gradeAlim: "",
    highestDegree: "",
    degreeYear: "",
    degreeMarks: "",
    arabicLevel: "",
    englishLevel: "",
    computerBasic: "",
    computerCourse: "",
    otherCourses: "",
  },
  short1: {
    q1_intro: "",
    q2_books: "",
    q3_careerIntent: "",
  },
  short2: {
    q4_postMadrasa: "",
    q5_challenges: "",
    q6_whyJoin: "",
  },
  scholarship: {
    q17_performance: "",
    q18_competitions: "",
    q19_publications: "",
    q20_whyDeserving: "",
    acceptTerms: false,
  },
};

const PERSONAL_REQUIRED_FIELDS = ["studentName", "fatherName", "dob", "phone", "email", "marital"];

const hasNonEmptyValue = (value) => {
  if (typeof value === "string") {
    return value.trim().length > 0;
  }
  return Boolean(value);
};

const Stepper = ({ current }) => {
  const progress = steps.length > 1 ? Math.min(100, ((current + 1) / steps.length) * 100) : 100;
  return (
    <div className={styles.stepper}>
      <div className={styles.stepperNodes}>
        {steps.map((step, index) => {
          const state = index < current ? "done" : index === current ? "active" : "idle";
          return (
            <span
              key={step.key}
              className={[
                styles.stepDot,
                state === "done" && styles.stepDotDone,
                state === "active" && styles.stepDotActive,
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {index + 1}
            </span>
          );
        })}
      </div>
      <div className={styles.stepperTrack}>
        <div className={styles.stepperProgress} style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
};

const StepHeader = ({ index }) => (
  <div className={styles.cardHeader}>
    <h2 className={styles.cardTitle}>{steps[index].title}</h2>
  </div>
);

const StepCard = ({ index, children }) => (
  <section className={styles.stepCard}>
    {typeof index === "number" && <StepHeader index={index} />}
    {children}
  </section>
);

const Label = ({ children }) => <div className={styles.fieldLabel}>{children}</div>;

const useLock = () => useContext(FormLockContext);

const Input = ({ label, hint, disabled, allowWhenLocked = false, type = "text", ...props }) => {
  const locked = useLock();
  return ( 
    <label className={styles.field}>
      {label && <Label>{label}</Label>}
      <input
        className={styles.control}
        disabled={(locked && !allowWhenLocked) || disabled}
        type={type}
        {...props}
      />
      {hint && <div className={styles.hint}>{hint}</div>}
    </label>
  );
};

const Select = ({ label, options, disabled, ...props }) => {
  const locked = useLock();
  return (
    <label className={styles.field}>
      {label && <Label>{label}</Label>}
      <select className={styles.control} disabled={locked || disabled} {...props}>
        {options.map((option) => (
          <option data-aos="fade-up" key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

const Textarea = ({ label, rows = 4, disabled, ...props }) => {
  const locked = useLock();
  return (
    <label className={styles.field}>
      {label && <Label>{label}</Label>}
      <textarea rows={rows} className={styles.control} disabled={locked || disabled} {...props} />
    </label>
  );
};

const UploadPhoto = ({ photo, onChange }) => {
  const locked = useLock();
  const handleFile = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert("Photo must be under 5MB.");
      return;
    }
    const reader = new FileReader();
    reader.onloadend = () => onChange(reader.result);
    reader.readAsDataURL(file);
  };
  return (
    <div className={styles.photoUpload}>
      <div className={styles.photoFrame}>
        {photo ? <img src={photo} alt="Uploaded passport" /> : <span>Upload photo</span>}
        <input type="file" accept="image/*" onChange={handleFile} disabled={locked} />
      </div>
    </div>
  );
};

export default function MultiStepAdmissionForm() {

  const [data, setData] = useState(initial);
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submittedKeys, setSubmittedKeys] = useState({ emails: [], ids: [] });
  const [locked, setLocked] = useState(false);
  const [lockMessage, setLockMessage] = useState("");
  const [showThankYou, setShowThankYou] = useState(false);
  const [logoDataUrl, setLogoDataUrl] = useState("");
  const [letterheadDataUrl, setLetterheadDataUrl] = useState("");

  const setSection = (key, patch) => {
    setData((prev) => ({ ...prev, [key]: { ...prev[key], ...patch } }));
  };

  const loadLogo = useCallback(async () => {
    if (logoDataUrl || typeof window === "undefined") return logoDataUrl;
    try {
      const response = await fetch(LOGO_ASSET_PATH);
      if (!response.ok) {
        throw new Error(`Unexpected response ${response.status}`);
      }
      const blob = await response.blob();
      const dataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result?.toString() ?? "");
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      if (dataUrl) {
        setLogoDataUrl(dataUrl);
      }
      return dataUrl;
    } catch (error) {
      console.error("Unable to preload the As-Sa'adah logo", error);
      return "";
    }
  }, [logoDataUrl, setLogoDataUrl]);

  const loadLetterhead = useCallback(async () => {
    if (letterheadDataUrl || typeof window === "undefined") return letterheadDataUrl;
    try {
      const response = await fetch(LETTERHEAD_ASSET_PATH);
      if (!response.ok) {
        throw new Error(`Unexpected response ${response.status}`);
      }
      const blob = await response.blob();
      const dataUrl = await new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result?.toString() ?? "");
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
      if (dataUrl) {
        setLetterheadDataUrl(dataUrl);
      }
      return dataUrl;
    } catch (error) {
      console.error("Unable to preload the As-Sa'adah letterhead", error);
      return "";
    }
  }, [letterheadDataUrl, setLetterheadDataUrl]);

  useEffect(() => {
    loadLogo();
    loadLetterhead();
  }, [loadLogo, loadLetterhead]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.localStorage.getItem("submittedApplications");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setSubmittedKeys({
          emails: Array.isArray(parsed.emails) ? parsed.emails : [],
          ids: Array.isArray(parsed.ids) ? parsed.ids : [],
        });
      } catch {
        setSubmittedKeys({ emails: [], ids: [] });
      }
    }
  }, []);

  useEffect(() => {
    const email = data.personal.email?.trim().toLowerCase();
    const cnic = data.personal.cnic?.trim();
    if (email && submittedKeys.emails.includes(email)) {
      setLocked(true);
      setLockMessage("An application has already been submitted with this email address.");
      return;
    }
    if (cnic && submittedKeys.ids.includes(cnic)) {
      setLocked(true);
      setLockMessage("An application has already been submitted with this ID card number.");
      return;
    }
    setLocked(false);
    setLockMessage("");
  }, [data.personal.email, data.personal.cnic, submittedKeys]);

  useEffect(() => {
    if (data.academic.computerBasic !== "yes" && data.academic.computerCourse) {
      setSection("academic", { computerCourse: "" });
    }
  }, [data.academic.computerBasic]);

  const buildAdmissionPdf = useCallback(async () => {
    if (typeof window === "undefined") return null;
    const [resolvedLogo, resolvedLetterhead] = await Promise.all([
      logoDataUrl || loadLogo(),
      letterheadDataUrl || loadLetterhead(),
    ]);
    const doc = new jsPDF({ unit: "pt", format: "a4", compress: false });
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    const marginX = 48;
    const marginBottom = 72;
    const contentWidth = pageWidth - marginX * 2;
    let pageIndex = 0;

    const defaultStartY = PDF_OTHER_PAGE_START_Y;

    const maskLegacyHeaderText = () => {
      const horizontalPadding = marginX + 120;
      const maskWidth = Math.max(120, pageWidth - horizontalPadding * 2);
      const maskHeight = 70;
      const maskY = 70;
      doc.setFillColor(255, 255, 255);
      doc.rect(horizontalPadding, maskY, maskWidth, maskHeight, "F");
    };

    const paintLetterhead = () => {
      let painted = false;
      if (resolvedLetterhead) {
        try {
          doc.addImage(
            resolvedLetterhead,
            getImageFormat(resolvedLetterhead),
            0,
            0,
            pageWidth,
            pageHeight,
            undefined,
              "SLOW"
            );
          painted = true;
          maskLegacyHeaderText();
        } catch (error) {
          console.error("Unable to render the As-Sa'adah letterhead", error);
        }
      }
      if (!painted) {
        doc.setFillColor(248, 248, 248);
        doc.rect(0, 0, pageWidth, pageHeight, "F");
        if (resolvedLogo) {
          try {
            doc.addImage(
              resolvedLogo,
              getImageFormat(resolvedLogo),
              marginX,
              34,
              80,
              52,
              undefined,
              "SLOW"
            );
            doc.addImage(
              resolvedLogo,
              getImageFormat(resolvedLogo),
              pageWidth - marginX - 80,
              34,
              80,
              52,
              undefined,
              "SLOW"
            );
          } catch (error) {
            console.error("Unable to render fallback logos on the letterhead", error);
          }
        }
      }
    };

    const drawCenterHeading = () => {
      const logoWidth = 90;
      const safePadding = marginX + logoWidth + 16;
      const maxHeadingWidth = Math.max(pageWidth - safePadding * 2, 220);
      const headingWidth = Math.min(400, maxHeadingWidth);
      const headingX = pageWidth / 2 - headingWidth / 2;
      const headingY = 84;
      const headingLines = Array.isArray(PDF_CENTER_HEADING) ? PDF_CENTER_HEADING : [PDF_CENTER_HEADING];
      const blockHeight = 52 + (headingLines.length - 1) * 14;
      doc.setFillColor(255, 255, 255);
      doc.rect(headingX, headingY - 28, headingWidth, blockHeight, "F");
      doc.setFont("helvetica", "bold");
      doc.setFontSize(15);
      doc.setTextColor(26, 71, 42);
      headingLines.forEach((line, index) => {
        const lineY = headingY + index * 16;
        const fontSize = index === 0 ? 15 : 13;
        doc.setFontSize(fontSize);
        doc.text(line, pageWidth / 2, lineY, { align: "center" });
      });
      doc.setTextColor(0);
    };

    const drawHeader = () => {
      doc.setFont("helvetica", "normal");
      doc.setFontSize(9);
      doc.setTextColor(110);
      doc.text(`Page ${pageIndex} of ${PDF_TOTAL_PAGES}`, pageWidth - marginX, pageHeight - 24, { align: "right" });
      doc.setTextColor(0);
    };

    const startPage = (title, subtitle) => {
      pageIndex += 1;
      if (pageIndex > 1) {
        doc.addPage();
      }
      paintLetterhead();
      drawCenterHeading();
      drawHeader();
      const startY = pageIndex === 1 ? PDF_FIRST_PAGE_START_Y : defaultStartY;
      let cursor = startY;
      doc.setFont("helvetica", "bold");
      doc.setFontSize(20);
      doc.text(title, marginX, cursor);
      cursor += 10;
      if (subtitle) {
        doc.setFont("helvetica", "normal");
        doc.setFontSize(12);
        doc.setTextColor(100);
        doc.text(subtitle, marginX, cursor + 20);
        doc.setTextColor(0);
        cursor += 40;
      } else {
        cursor += 26;
      }
      return cursor;
    };

    const renderFieldBlocks = (entries, startY, meta = {}) => {
      let cursor = startY;
      const continuationTitle = meta.title ? `${meta.title} (continued)` : "Continued";
      const continuationSubtitle = meta.subtitle ?? null;
      entries.forEach(({ label, value }) => {
        const blockPaddingX = 18;
        const blockPaddingY = 18;
        const textValue = valueOrDash(value);
        const textLines = doc.splitTextToSize(textValue, contentWidth - blockPaddingX * 2);
        const blockHeight = Math.max(60, textLines.length * 15 + 30);
        const requiredSpace = blockHeight + 12;
        if (cursor + requiredSpace > pageHeight - marginBottom) {
          cursor = startPage(continuationTitle, continuationSubtitle);
        }
        doc.setFillColor(255, 255, 255);
        doc.setDrawColor(223);
        doc.roundedRect(marginX, cursor, contentWidth, blockHeight, 10, 10, "FD");
        doc.setFont("times", "bold");
        doc.setFontSize(11);
        doc.setTextColor(90);
        doc.text(label, marginX + blockPaddingX, cursor + blockPaddingY);
        doc.setFont("times", "normal");
        doc.setFontSize(12);
        doc.setTextColor(20);
        doc.text(textLines, marginX + blockPaddingX, cursor + blockPaddingY + 20);
        cursor += blockHeight + 12;
      });
      doc.setTextColor(0);
      return cursor;
    };

    const renderPhotoPreview = () => {
      const frameWidth = 150;
      const frameHeight = 180;
      const frameX = pageWidth - marginX - frameWidth;
      const frameY = 140;
      doc.setFillColor(255, 255, 255);
      doc.setDrawColor(200);
      doc.roundedRect(frameX, frameY, frameWidth, frameHeight, 12, 12, "FD");
      if (data.personal.photo) {
        try {
          const props = doc.getImageProperties(data.personal.photo);
          const ratio =
            props && props.width && props.height ? props.width / props.height : (frameWidth - 24) / (frameHeight - 24);
          let renderWidth = frameWidth - 24;
          let renderHeight = renderWidth / ratio;
          if (renderHeight > frameHeight - 24) {
            renderHeight = frameHeight - 24;
            renderWidth = renderHeight * ratio;
          }
          const renderX = frameX + (frameWidth - renderWidth) / 2;
          const renderY = frameY + (frameHeight - renderHeight) / 2;
          doc.addImage(
            data.personal.photo,
            getImageFormat(data.personal.photo),
            renderX,
            renderY,
            renderWidth,
            renderHeight,
            undefined,
            "SLOW"
          );
        } catch (error) {
          console.error("Unable to render the applicant photo in the PDF", error);
          doc.setFont("helvetica", "italic");
          doc.setFontSize(11);
          doc.text("Photo could not be rendered", frameX + frameWidth / 2, frameY + frameHeight / 2, {
            align: "center",
          });
          doc.setFont("helvetica", "normal");
        }
      } else {
        doc.setFont("helvetica", "italic");
        doc.setFontSize(11);
        doc.text("Passport photo not uploaded", frameX + frameWidth / 2, frameY + frameHeight / 2, {
          align: "center",
        });
        doc.setFont("helvetica", "normal");
      }
      doc.setFontSize(10);
      doc.setTextColor(120);
      doc.text("Uploaded Passport Photo", frameX + frameWidth / 2, frameY + frameHeight + 15, { align: "center" });
      doc.setTextColor(0);
      return frameY + frameHeight;
    };

    const renderRulesPage = (sections, sectionLabel, startIndex = 0) => {
      const title = sectionLabel ? `Admission Rules – ${sectionLabel}` : "Admission Rules & Eligibility";
      let cursor = startPage(title, null);
      cursor = Math.min(cursor, 170);
      const cardPaddingX = 18;
      const cardPaddingY = 18;
      const bulletLineHeight = 14;
      const bulletSpacing = 6;
      const innerWidth = contentWidth - cardPaddingX * 2 - 12;
      sections.forEach((section, index) => {
        const numbering = startIndex + index + 1;
        const headingText = `${numbering}. ${section.heading}`;
        const bulletBlocks = section.points.map((point) => doc.splitTextToSize(point, innerWidth));
        const headingHeight = 18;
        const bulletsHeight =
          bulletBlocks.reduce((total, lines) => total + lines.length * bulletLineHeight + bulletSpacing, 0) - bulletSpacing;
        const cardHeight = cardPaddingY * 2 + headingHeight + Math.max(0, bulletsHeight);
        doc.setFillColor(247, 250, 247);
        doc.setDrawColor(208, 229, 216);
        doc.roundedRect(marginX, cursor, contentWidth, cardHeight, 14, 14, "FD");
        let innerY = cursor + cardPaddingY + 12;
        doc.setFont("helvetica", "bold");
        doc.setFontSize(13);
        doc.setTextColor(26, 71, 42);
        doc.text(headingText, marginX + cardPaddingX, innerY);
        innerY += headingHeight;
        doc.setFont("helvetica", "normal");
        doc.setFontSize(11);
        doc.setTextColor(40);
        bulletBlocks.forEach((lines) => {
          const bulletX = marginX + cardPaddingX;
          const textX = bulletX + 9;
          const bulletY = innerY - 4;
          doc.setFillColor(26, 71, 42);
          doc.circle(bulletX, bulletY, 1.6, "F");
          doc.text(lines, textX, innerY);
          innerY += lines.length * bulletLineHeight + bulletSpacing;
        });
        cursor += cardHeight + 16;
      });
      doc.setTextColor(0);
      return cursor;
    };

    const personalEntries = [
      { label: "Student Name", value: data.personal.studentName },
      { label: "Father / Guardian Name", value: data.personal.fatherName },
      { label: "Uploaded Passport Photo", value: data.personal.photo ? "Photo uploaded" : "No file chosen" },
      { label: "Date of Birth", value: formatDateValue(data.personal.dob) },
      { label: "CNIC / B-Form", value: data.personal.cnic },
      { label: "Permanent Address / District", value: data.personal.permAddress },
      { label: "Current Address / District", value: data.personal.currAddress },
      { label: "Personal Phone / WhatsApp", value: data.personal.phone },
      { label: "Emergency Contact", value: data.personal.emergency },
      { label: "Email Address", value: data.personal.email },
      { label: "Marital Status", value: getOptionLabel(Marital, data.personal.marital) },
    ];

    const academicEntries = [
      { label: "Name & Address of Previous Madrasah", value: data.academic.madrasaName },
      { label: "Year of Shahadat-ul-Alamiyyah", value: getOptionLabel(Years, data.academic.yearAlim) },
      { label: "Marks & Grade in Shahadat-ul-Alamiyyah", value: getOptionLabel(Grades, data.academic.gradeAlim) },
      { label: "Highest Degree (School/College/University)", value: getOptionLabel(Degrees, data.academic.highestDegree) },
      { label: "Year of Degree Completion", value: data.academic.degreeYear },
      { label: "Marks / Grade Achieved", value: data.academic.degreeMarks },
      { label: "Proficiency in Arabic", value: getOptionLabel(Proficiency, data.academic.arabicLevel) },
      { label: "Proficiency in English", value: getOptionLabel(Proficiency, data.academic.englishLevel) },
      { label: "Basic Computer Knowledge", value: getOptionLabel(YesNo, data.academic.computerBasic) },
      { label: "Computer Course Studied", value: getOptionLabel(ComputerCourses, data.academic.computerCourse) },
      { label: "Other Courses Completed (IT / Digital skills)", value: data.academic.otherCourses },
    ];

    const shortOneEntries = [
      { label: "1) Introduce yourself briefly.", value: data.short1.q1_intro },
      {
        label: "2) Write the names of any three books you liked and read, along with the reasons for your preference.",
        value: data.short1.q2_books,
      },
      {
        label: "3) Do you intend to pursue a career in IT on a full-time or part-time basis?",
        value: data.short1.q3_careerIntent,
      },
    ];

    const shortTwoEntries = [
      {
        label: "4) What have been your activities and engagements since graduating from the Madrassa?",
        value: data.short2.q4_postMadrasa,
      },
      {
        label: "5) What kind of challenges have you faced in your academic journey, and how did you solve them?",
        value: data.short2.q5_challenges,
      },
      {
        label: "6) Why do you wish to join the As-Sa'adah program?",
        value: data.short2.q6_whyJoin,
      },
    ];

    const scholarshipEntries = [
      {
        label: "1) Describe your academic performance and highlight any notable achievements.",
        value: data.scholarship.q17_performance,
      },
      {
        label: "2) Have you participated in any international competitions? If yes, provide details.",
        value: data.scholarship.q18_competitions,
      },
      {
        label: "3) Have you authored any essays, articles, or research papers? If yes, provide details.",
        value: data.scholarship.q19_publications,
      },
      {
        label: "4) Why do you believe you are the most deserving candidate for this merit-based scholarship?",
        value: data.scholarship.q20_whyDeserving,
      },
    ];

    let cursor = startPage("Personal Details", "Information captured in Step 1");
    const photoBottom = renderPhotoPreview();
    cursor = Math.max(cursor, photoBottom + 30);
    renderFieldBlocks(personalEntries, cursor, {
      title: "Personal Details",
      subtitle: "Information captured in Step 1",
    });

    cursor = startPage("Academic Details", "Educational background supplied in Step 2");
    renderFieldBlocks(academicEntries, cursor, {
      title: "Academic Details",
      subtitle: "Educational background supplied in Step 2",
    });

    cursor = startPage("Short Answers – Part 1", "Narrative responses for questions 1–3");
    renderFieldBlocks(shortOneEntries, cursor, {
      title: "Short Answers – Part 1",
      subtitle: "Narrative responses for questions 1–3",
    });

    cursor = startPage("Short Answers – Part 2", "Narrative responses for questions 4–6");
    renderFieldBlocks(shortTwoEntries, cursor, {
      title: "Short Answers – Part 2",
      subtitle: "Narrative responses for questions 4–6",
    });

    cursor = startPage("Merit Scholarship Responses", "Detailed answers for questions 1–4");
    renderFieldBlocks(scholarshipEntries, cursor, {
      title: "Merit Scholarship Responses",
      subtitle: "Detailed answers for questions 17–20",
    });

    renderRulesPage(ADMISSION_RULES.slice(0, 3), "Eligibility & Academics", 0);
    const signatureAnchor = renderRulesPage(ADMISSION_RULES.slice(3), "Conduct & Affidavit", 3);
    doc.setDrawColor(200);
    const signatureLineY = Math.min(pageHeight - 90, signatureAnchor + 20);
    doc.line(marginX, signatureLineY, marginX + 220, signatureLineY);
    doc.line(pageWidth - marginX - 220, signatureLineY, pageWidth - marginX, signatureLineY);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.text("Applicant Signature", marginX, signatureLineY + 15);
    doc.text("Admissions Officer", pageWidth - marginX - 220, signatureLineY + 15);
    doc.setTextColor(120);
    doc.setFontSize(9);
    doc.text(
      "This PDF is auto-generated upon submission to maintain a professional, auditable record of your admission form.",
      marginX,
      signatureLineY + 40
    );
    doc.setTextColor(0);

    const fileName = buildFileName(data.personal.studentName);
    return { doc, fileName };
  }, [data, loadLetterhead, loadLogo, letterheadDataUrl, logoDataUrl]);

  const downloadAdmissionPdf = useCallback(async () => {
    const result = await buildAdmissionPdf();
    if (!result) return null;
    const { doc, fileName } = result;
    const dataUrl = doc.output("datauristring");
    const base64 = dataUrl.split(",")[1] ?? "";
    const approximateBytes = Math.round((base64.length * 3) / 4);
    doc.save(fileName);
    return { dataUrl, fileName, base64, approximateBytes };
  }, [buildAdmissionPdf]);

  const sendEmailJsSubmission = useCallback(async (templateParams) => {
    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      console.warn("EmailJS configuration missing. Skipping EmailJS dispatch.");
      return false;
    }
    try {
      const response = await fetch(EMAILJS_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          service_id: EMAILJS_SERVICE_ID,
          template_id: EMAILJS_TEMPLATE_ID,
          user_id: EMAILJS_PUBLIC_KEY,
          template_params: templateParams,
        }),
      });
      if (!response.ok) {
        const errorText = await response.text().catch(() => "Unknown EmailJS error");
        console.error(
          "EmailJS rejected the admission form submission",
          response.status,
          response.statusText,
          errorText
        );
        return false;
      }
      console.log("Admission form forwarded to EmailJS successfully.");
      return true;
    } catch (error) {
      console.error("Unable to forward admission form to EmailJS", error);
      return false;
    }
  }, []);

  const reviewShort1 = {
    introduction: data.short1.q1_intro,
    favorite_books: data.short1.q2_books,
    career_intent: data.short1.q3_careerIntent,
  };

  const reviewShort2 = {
    post_madrasa_activities: data.short2.q4_postMadrasa,
    academic_challenges: data.short2.q5_challenges,
    why_join: data.short2.q6_whyJoin,
  };

  const isPersonalStepComplete = PERSONAL_REQUIRED_FIELDS.every((field) =>
    hasNonEmptyValue(data.personal[field])
  );

  const handleNext = () => {
    if (step === 0 && !isPersonalStepComplete) {
      return;
    }
    if (step < steps.length - 1) {
      setStep((prev) => prev + 1);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (locked) return;

    if (!data.scholarship.acceptTerms) {
      if (step !== steps.length - 1) {
        setStep(steps.length - 1);
      }
      return;
    }
    const normalizedEmail = data.personal.email?.trim().toLowerCase();
    const normalizedCnic = data.personal.cnic?.trim();
    if (typeof window !== "undefined") {
      const next = {
        emails: submittedKeys.emails.slice(),
        ids: submittedKeys.ids.slice(),
      };
      if (normalizedEmail && !next.emails.includes(normalizedEmail)) {
        next.emails.push(normalizedEmail);
      }
      if (normalizedCnic && !next.ids.includes(normalizedCnic)) {
        next.ids.push(normalizedCnic);
      }
      setSubmittedKeys(next);
      window.localStorage.setItem("submittedApplications", JSON.stringify(next));
    }
    let thankYouDisplayed = false;
    const openThankYouModal = () => {
      if (!thankYouDisplayed) {
        setSubmitted(true);
        setShowThankYou(true);
        thankYouDisplayed = true;
      }
    };
    openThankYouModal();

    let admissionPdfPayload = null;
    let admissionPdfStorageMetadata = null;
    try {
      admissionPdfPayload = await downloadAdmissionPdf();
      if (admissionPdfPayload) {
        console.log(
          "Admission PDF prepared",
          admissionPdfPayload.fileName,
          `${admissionPdfPayload.approximateBytes} bytes`
        );
      }
    } catch (error) {
      console.error("Unable to export the admission form PDF", error);
    }
    if (admissionPdfPayload && PDF_STORAGE_UPLOAD_ENABLED) {
      try {
        const pdfDataUrl = admissionPdfPayload.dataUrl || (admissionPdfPayload.base64
          ? `data:application/pdf;base64,${admissionPdfPayload.base64}`
          : null);
        if (pdfDataUrl) {
          const pdfPath = `${Date.now()}-${admissionPdfPayload.fileName || "admission-form.pdf"}`;
          const downloadURL = await uploadDataUrlToSupabase("admission-pdfs", pdfPath, pdfDataUrl);
          admissionPdfStorageMetadata = {
            downloadURL,
            storagePath: pdfPath,
          };
          console.log("Admission PDF uploaded successfully:", downloadURL);
        }
      } catch (uploadError) {
        console.error("Unable to upload the admission form PDF:", uploadError);
      }
    } else if (admissionPdfPayload && !PDF_STORAGE_UPLOAD_ENABLED) {
      console.info(
        "PDF storage upload disabled. Set NEXT_PUBLIC_ENABLE_PDF_STORAGE_UPLOAD=true to email downloadable links."
      );
    }

    const submissionTimestamp = new Date();
    const submissionTimestampIso = submissionTimestamp.toISOString();
    const submissionTimestampDisplay = submissionTimestamp.toLocaleString(undefined, {
      dateStyle: "medium",
      timeStyle: "short",
    });

    // Save to Supabase
    try {
      const sanitizedPhotoLink = data.personal.photoLink?.trim();
      let photoURL = sanitizedPhotoLink || null;

      // Upload image to Supabase Storage only when explicitly enabled
      if (!photoURL && STORAGE_UPLOAD_ENABLED && data.personal.photo) {
        try {
          const fileName = `${Date.now()}-${data.personal.studentName || "applicant"}.jpg`;
          photoURL = await uploadDataUrlToSupabase("admission-photos", fileName, data.personal.photo);
          console.log("Image uploaded successfully: ", photoURL);
        } catch (uploadError) {
          console.error("Error uploading image: ", uploadError);
        }
      } else if (!photoURL && data.personal.photo && !STORAGE_UPLOAD_ENABLED) {
        console.info("Storage upload disabled. Provide an external photo link to store it with the form.");
      }

      // Save form data to Supabase in a well-structured format
      const { data: insertedRow, error: insertError } = await supabase
        .from("admission_forms")
        .insert({
        // Personal Information (Step 0)
        personal: {
          studentName: data.personal.studentName,
          fatherName: data.personal.fatherName,
          dateOfBirth: data.personal.dob,
          cnic: data.personal.cnic,
          permanentAddress: data.personal.permAddress,
          currentAddress: data.personal.currAddress,
          phone: data.personal.phone,
          emergencyContact: data.personal.emergency,
          email: data.personal.email,
          maritalStatus: data.personal.marital,
          photoURL: photoURL,
        },
        // Academic Information (Step 1)
        academic: {
          madrasaName: data.academic.madrasaName,
          yearOfAlim: data.academic.yearAlim,
          gradeInAlim: data.academic.gradeAlim,
          highestDegree: data.academic.highestDegree,
          degreeYear: data.academic.degreeYear,
          degreeMarks: data.academic.degreeMarks,
          arabicProficiency: data.academic.arabicLevel,
          englishProficiency: data.academic.englishLevel,
          computerKnowledge: data.academic.computerBasic,
          computerCourse: data.academic.computerCourse,
          otherCourses: data.academic.otherCourses,
        },
        // Short Answers (Steps 2 & 3)
        short_answers: {
          introduction: data.short1.q1_intro,
          favoriteBooks: data.short1.q2_books,
          careerIntent: data.short1.q3_careerIntent,
          postMadrasaActivities: data.short2.q4_postMadrasa,
          academicChallenges: data.short2.q5_challenges,
          whyJoin: data.short2.q6_whyJoin,
        },
        // Scholarship Information (Step 4)
        scholarship: {
          academicPerformance: data.scholarship.q17_performance,
          competitions: data.scholarship.q18_competitions,
          publications: data.scholarship.q19_publications,
          whyDeserving: data.scholarship.q20_whyDeserving,
          termsAccepted: data.scholarship.acceptTerms,
        },
        // Metadata
        submitted_at: submissionTimestampIso,
        student_name: data.personal.studentName,
        father_name: data.personal.fatherName,
        email: data.personal.email,
        phone: data.personal.phone,
        admission_pdf_link:
          admissionPdfPayload?.dataUrl ?? (admissionPdfPayload?.base64 ? `data:application/pdf;base64,${admissionPdfPayload.base64}` : null),
        admission_pdf_file_name: admissionPdfPayload?.fileName || null,
        admission_pdf_bytes: admissionPdfPayload?.approximateBytes || null,
        admission_pdf_download_url: admissionPdfStorageMetadata?.downloadURL || null,
        admission_pdf_storage_path: admissionPdfStorageMetadata?.storagePath || null,
        })
        .select()
        .single();
      if (insertError) throw insertError;
      console.log("Row written with ID: ", insertedRow.id);
      const emailJsTemplateParams = {
        submission_id: insertedRow.id,
        submission_timestamp: submissionTimestampDisplay,
        submission_iso_timestamp: submissionTimestampIso,
        submission_date: submissionTimestampDisplay,
        firestore_path: `admission_forms/${insertedRow.id}`,
        student_name: valueOrDash(data.personal.studentName),
        father_name: valueOrDash(data.personal.fatherName),
        date_of_birth: formatDateValue(data.personal.dob),
        national_id: valueOrDash(data.personal.cnic),
        permanent_address: valueOrDash(data.personal.permAddress),
        current_address: valueOrDash(data.personal.currAddress),
        phone_number: valueOrDash(data.personal.phone),
        emergency_contact: valueOrDash(data.personal.emergency),
        email_address: valueOrDash(data.personal.email),
        marital_status: getOptionLabel(Marital, data.personal.marital),
        photo_url: photoURL || "",
        madrassa_name: valueOrDash(data.academic.madrasaName),
        year_alim_completed: valueOrDash(data.academic.yearAlim),
        alim_grade: getOptionLabel(Grades, data.academic.gradeAlim),
        highest_degree: getOptionLabel(Degrees, data.academic.highestDegree),
        degree_year: valueOrDash(data.academic.degreeYear),
        degree_marks: valueOrDash(data.academic.degreeMarks),
        arabic_proficiency: getOptionLabel(Proficiency, data.academic.arabicLevel),
        english_proficiency: getOptionLabel(Proficiency, data.academic.englishLevel),
        computer_basic: getOptionLabel(YesNo, data.academic.computerBasic),
        computer_course: getOptionLabel(ComputerCourses, data.academic.computerCourse),
        other_courses: valueOrDash(data.academic.otherCourses),
        short_q1_intro: valueOrDash(data.short1.q1_intro),
        short_q2_books: valueOrDash(data.short1.q2_books),
        short_q3_career: valueOrDash(data.short1.q3_careerIntent),
        short_q4_post_madrasa: valueOrDash(data.short2.q4_postMadrasa),
        short_q5_challenges: valueOrDash(data.short2.q5_challenges),
        short_q6_why_join: valueOrDash(data.short2.q6_whyJoin),
        scholarship_q17_performance: valueOrDash(data.scholarship.q17_performance),
        scholarship_q18_competitions: valueOrDash(data.scholarship.q18_competitions),
        scholarship_q19_publications: valueOrDash(data.scholarship.q19_publications),
        scholarship_q20_deserving: valueOrDash(data.scholarship.q20_whyDeserving),
        scholarship_terms_accepted: data.scholarship.acceptTerms ? "Yes" : "No",
        pdf_download_url: admissionPdfStorageMetadata?.downloadURL || "",
        pdf_file_name: admissionPdfPayload?.fileName || "",
        pdf_storage_path: admissionPdfStorageMetadata?.storagePath || "",
        pdf_size_bytes: admissionPdfPayload?.approximateBytes || "",
        institute_address: INSTITUTE_ADDRESS,
        admissions_contact_email: ADMISSIONS_CONTACT_EMAIL,
        admissions_contact_phone: ADMISSIONS_CONTACT_PHONE,
      };
      await sendEmailJsSubmission(emailJsTemplateParams);
    } catch (e) {
      console.error("Error adding document: ", e);
      if (thankYouDisplayed) {
        setSubmitted(false);
        setShowThankYou(false);
      }
    }
    
    console.log("SUBMITTED_DATA", data);
  };

  const handleCloseModal = () => {
    setShowThankYou(false);
    setSubmitted(false);
  };

  return (
  <>
    <Head>
      <title>Apply for Admission | As-Sa'adah IT Boot Camp</title>
      <meta name="description" content="Apply for admission to As-Sa'adah IT Boot Camp Batch-2. Complete the official admission form online." />
      <link rel="icon" href="/images.png" />
    </Head>
      <Layout>
        <main className={styles.page}>
          <div className={styles.shell}>
            <FormLockContext.Provider value={locked}>
              <Stepper current={step} />

              <form onSubmit={handleSubmit} className={styles.form}>
              {step === 0 && (
                <StepCard index={0}>
                  {locked && <div className={styles.lockNotice}>{lockMessage}</div>}
                  <div className={styles.topRow}>
                    <div className={styles.topRowFields}>
                      <div>
                        <Input
                          label="Student Name"
                          value={data.personal.studentName}
                          onChange={(e) => setSection("personal", { studentName: e.target.value })}
                        />
                      </div>
                      <div>
                        <Input
                          label="Father / Guardian Name"
                          value={data.personal.fatherName}
                          onChange={(e) => setSection("personal", { fatherName: e.target.value })}
                        />
                      </div>
                    </div>
                    <div className={styles.photoColumn}>
                      <UploadPhoto
                        photo={data.personal.photo}
                        onChange={(photo) => setSection("personal", { photo })}
                      />
                    </div>
                  </div>
                  <div className={styles.grid}>
                    <div>
                      <Input
                        type="date"
                        label="Date of Birth"
                        value={data.personal.dob}
                        onChange={(e) => setSection("personal", { dob: e.target.value })}
                      />
                    </div>
                    <Input
                      label="CNIC / B-Form"
                      value={data.personal.cnic}
                      onChange={(e) => setSection("personal", { cnic: e.target.value })}
                      allowWhenLocked
                    />
                    <Input
                      label="Permanent Address / District"
                      value={data.personal.permAddress}
                      onChange={(e) => setSection("personal", { permAddress: e.target.value })}
                    />
                    <Input
                      label="Current Address / District"
                      value={data.personal.currAddress}
                      onChange={(e) => setSection("personal", { currAddress: e.target.value })}
                    />
                    <div>
                      <Input
                        label="Personal Phone / WhatsApp"
                        value={data.personal.phone}
                        onChange={(e) => setSection("personal", { phone: e.target.value })}
                      />
                    </div>
                    <Input
                      label="Emergency Contact"
                      value={data.personal.emergency}
                      onChange={(e) => setSection("personal", { emergency: e.target.value })}
                    />
                    <Input
                      type="url"
                      label="Photo Link (optional)"
                      value={data.personal.photoLink}
                      onChange={(e) => setSection("personal", { photoLink: e.target.value })}
                      hint="Paste an externally hosted photo URL if you cannot upload a file."
                    />
                    <div>
                      <Input
                        type="email"
                        label="Email Address"
                        value={data.personal.email}
                        onChange={(e) => setSection("personal", { email: e.target.value })}
                        allowWhenLocked
                      />
                    </div>
                    <div>
                      <Select
                        label="Marital Status"
                        value={data.personal.marital}
                        onChange={(e) => setSection("personal", { marital: e.target.value })}
                        options={Marital}
                      />
                    </div>
                  </div>
                </StepCard>
              )}

              {step === 1 && (
                <StepCard index={1}>
                  <div className={styles.grid}>
                    <Input
                      label="Name & Address of Previous Madrasah"
                      value={data.academic.madrasaName}
                      onChange={(e) => setSection("academic", { madrasaName: e.target.value })}
                    />
                    <Select
                      label="Year of Shahadat-ul-Alamiyyah"
                      value={data.academic.yearAlim}
                      onChange={(e) => setSection("academic", { yearAlim: e.target.value })}
                      options={Years}
                    />
                    <Select
                      label="Marks & Grade in Shahadat-ul-Alamiyyah"
                      value={data.academic.gradeAlim}
                      onChange={(e) => setSection("academic", { gradeAlim: e.target.value })}
                      options={Grades}
                    />
                    <Select
                      label="Highest Degree (School/College/University)"
                      value={data.academic.highestDegree}
                      onChange={(e) => setSection("academic", { highestDegree: e.target.value })}
                      options={Degrees}
                    />
                    <Input
                      label="Year of Degree Completion"
                      type="number"
                      value={data.academic.degreeYear}
                      onChange={(e) => setSection("academic", { degreeYear: e.target.value })}
                    />
                    <Input
                      label="Marks / Grade Achieved"
                      value={data.academic.degreeMarks}
                      onChange={(e) => setSection("academic", { degreeMarks: e.target.value })}
                    />
                    <Select
                      label="Proficiency in Arabic"
                      value={data.academic.arabicLevel}
                      onChange={(e) => setSection("academic", { arabicLevel: e.target.value })}
                      options={Proficiency}
                    />
                    <Select
                      label="Proficiency in English"
                      value={data.academic.englishLevel}
                      onChange={(e) => setSection("academic", { englishLevel: e.target.value })}
                      options={Proficiency}
                    />
                    <Select
                      label="Basic Computer Knowledge"
                      value={data.academic.computerBasic}
                      onChange={(e) => setSection("academic", { computerBasic: e.target.value })}
                      options={YesNo}
                    />
                    {data.academic.computerBasic === "yes" && (
                      <Select
                        label="Computer Course Studied"
                        value={data.academic.computerCourse}
                        onChange={(e) => setSection("academic", { computerCourse: e.target.value })}
                        options={ComputerCourses}
                      />
                    )}
                    <Textarea
                      label="Other Courses Completed (IT / Digital skills)"
                      rows={4}
                      value={data.academic.otherCourses}
                      onChange={(e) => setSection("academic", { otherCourses: e.target.value })}
                    />
                  </div>
                </StepCard>
              )}

              {step === 2 && (
                <StepCard index={2}>
                  <div className={styles.questionList}>
                    <div className={styles.questionItem}>
                      <Textarea
                        label="1) Introduce yourself briefly."
                        rows={5}
                        value={data.short1.q1_intro}
                        onChange={(e) => setSection("short1", { q1_intro: e.target.value })}
                      />
                    </div>
                    <div className={styles.questionItem}>
                      <Textarea
                        label="2) Write the names of any three books you liked and read, along with the reasons for your preference."
                        rows={5}
                        value={data.short1.q2_books}
                        onChange={(e) => setSection("short1", { q2_books: e.target.value })}
                      />
                    </div>
                    <div className={styles.questionItem}>
                      <Textarea
                        label="3) Do you intend to pursue a career in IT on a full-time or part-time basis?"
                        rows={4}
                        value={data.short1.q3_careerIntent}
                        onChange={(e) => setSection("short1", { q3_careerIntent: e.target.value })}
                      />
                    </div>
                  </div>
                </StepCard>
              )}

              {step === 3 && (
                <StepCard index={3}>
                  <div className={styles.questionList}>
                    <div className={styles.questionItem}>
                      <Textarea
                        label="4) What have been your activities and engagements since graduating from the Madrassa?"
                        rows={4}
                        value={data.short2.q4_postMadrasa}
                        onChange={(e) => setSection("short2", { q4_postMadrasa: e.target.value })}
                      />
                    </div>
                    <div className={styles.questionItem}>
                      <Textarea
                        label="5) What kind of challenges have you faced in your academic journey, and how did you solve them?"
                        rows={5}
                        value={data.short2.q5_challenges}
                        onChange={(e) => setSection("short2", { q5_challenges: e.target.value })}
                      />
                    </div>
                    <div className={styles.questionItem}>
                      <Textarea
                        label="6) Why do you wish to join the As-Sa'adah program?"
                        rows={4}
                        value={data.short2.q6_whyJoin}
                        onChange={(e) => setSection("short2", { q6_whyJoin: e.target.value })}
                      />
                    </div>
                  </div>
                </StepCard>
              )}

              {step === 4 && (
                <StepCard index={4}>
                  <div className={styles.questionList}>
                    <div className={styles.questionItem}>
                      <Textarea
                        label="1) Describe your academic performance and highlight any notable achievements."
                        rows={5}
                        value={data.scholarship.q17_performance}
                        onChange={(e) => setSection("scholarship", { q17_performance: e.target.value })}
                      />
                    </div>
                    <div className={styles.questionItem}>
                      <Textarea
                        label="2) Have you participated in any international competitions? If yes, provide details."
                        rows={5}
                        value={data.scholarship.q18_competitions}
                        onChange={(e) => setSection("scholarship", { q18_competitions: e.target.value })}
                      />
                    </div>
                    <div className={styles.questionItem}>
                      <Textarea
                        label="3) Have you authored any essays, articles, or research papers? If yes, provide details."
                        rows={5}
                        value={data.scholarship.q19_publications}
                        onChange={(e) => setSection("scholarship", { q19_publications: e.target.value })}
                      />
                    </div>
                    <div className={styles.questionItem}>
                      <Textarea
                        label="4) Why do you believe you are the most deserving candidate for this merit-based scholarship?"
                        rows={5}
                        value={data.scholarship.q20_whyDeserving}
                        onChange={(e) => setSection("scholarship", { q20_whyDeserving: e.target.value })}
                      />
                    </div>
                  </div>
                </StepCard>
              )}

              {step === 5 && (
                <StepCard index={5}>
                  <p className={styles.reviewIntro}>
                    Please verify all details below. You can go back to any step to make corrections before sending in your application.
                  </p>
                  <div className={styles.reviewGrid}>
                    <ReviewCard title="Personal Details" obj={data.personal} />
                    <ReviewCard title="Academic Details" obj={data.academic} />
                    <ReviewCard title="Short Answers (1–3)" obj={reviewShort1} />
                    <ReviewCard title="Short Answers (4–6)" obj={reviewShort2} />
                    <ReviewCard title="Merit Scholarship (1–4)" obj={data.scholarship} />
                  </div>
                  <label className={styles.confirmRow}>
                    <input
                      type="checkbox"
                      checked={data.scholarship.acceptTerms || false}
                      onChange={(e) => {
                        const checked = e.target.checked;
                        setSection("scholarship", { acceptTerms: checked });
                      }}
                    />
                    <span>I confirm that all information provided above is accurate.</span>
                  </label>
                </StepCard>
              )}

                <div className={styles.actions}>
                  <button
                    type="button"
                    onClick={handleBack}
                    disabled={step === 0 || locked}
                    className={styles.secondaryButton}
                  >
                    Back
                  </button>

                  {step < steps.length - 1 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className={styles.primaryButton}
                      disabled={locked || (step === 0 && !isPersonalStepComplete)}
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className={styles.primaryButton}
                      disabled={submitted || locked || !data.scholarship.acceptTerms}
                    >
                      {submitted ? "Submitted" : "Submit"}
                    </button>
                  )}
                </div>
              </form>

              {showThankYou && (
                <div className={styles.modalOverlay}>
                  <div className={styles.modalCard}>
                    <h3>Thank you for your submission!</h3>
                    <p>We have received your application. Our team will review your details and reach out soon.</p>

                    <div className={styles.modalPaymentBox}>
                      <h4>Next Step: Submit the Cooperative Fund</h4>
                      <p>
                        To reserve your seat, the next step is to submit the cooperative fund for
                        the two-month introductory course: <strong>PKR 5,000</strong>.
                      </p>

                      <h5>Bank Transfer</h5>
                      <ul>
                        <li><strong>Bank:</strong> Faysal Bank</li>
                        <li><strong>Account Name:</strong> AS-SA-ADAH INTERNATIONAL</li>
                        <li><strong>IBAN:</strong> PK34FAYS3483301000003457</li>
                      </ul>

                      <h5>Easypaisa / JazzCash</h5>
                      <ul>
                        <li><strong>Account Title:</strong> MUNEER AHMED ALVI</li>
                        <li><strong>Number:</strong> 0321 8823953</li>
                      </ul>

                      <p className={styles.modalPaymentNote}>
                        After submitting the cooperative fund, please send the transaction receipt
                        (screenshot) to {ADMISSIONS_CONTACT_PHONE} (WhatsApp) or {ADMISSIONS_CONTACT_EMAIL}
                        {" "}so your registration can be completed and you can be added to the final class group.
                      </p>
                    </div>

                    <button type="button" onClick={handleCloseModal}>
                      Close
                    </button>
                  </div>
                </div>
              )}
            </FormLockContext.Provider>
          </div>
        </main>
      </Layout>
    </>
  );
}

function ReviewCard({ title, obj }) {
  return (
    <div className={styles.reviewCard}>
      <div className={styles.reviewTitle}>{title}</div>
      <dl className={styles.reviewList}>
        {Object.entries(obj).map(([key, value]) => {
          if (key === "photo") return null;
          return (
            <div key={key} className={styles.reviewItem}>
              <dt className={styles.reviewKey}>{key.replaceAll("_", " ")}</dt>
              <dd className={styles.reviewValue}>{String(value || "—")}</dd>
            </div>
          );
        })}
      </dl>
    </div>
  );
}
