import { useEffect, useState } from "react";
import Link from "next/link";
import supabase from "../lib/supabaseClient";

const FALLBACK_COURSES = [
  {
    image: "/courses/ui-ux-design.jpg",
    title: "UI/UX Design & Figma",
    org: "Abdul Rehman",
    info: "Portfolio Projects",
    path: "/courses/ui-ux-design-figma",
  },
  {
    image: "/courses/python-development.jpg",
    title: "Python, VS Code & GitHub",
    org: "Syed Ahmed Kabir Hashmi",
    info: "GitHub Capstone",
    path: "/courses/python-vscode-github",
  },
  {
    image: "/courses/english-language.jpg",
    title: "Executive English Language",
    org: "Syed Hasnain Pasha",
    info: "Real-World Fluency",
    path: "/courses/executive-english-language",
  },
  {
    image: "/courses/digital-marketing.jpg",
    title: "Digital Marketing & Freelancing",
    org: "Muhammad Ibrahim",
    info: "Live Campaigns",
    path: "/courses/digital-marketing-freelancing",
  },
];

export default function CoursesSection() {
  const [courses, setCourses] = useState(FALLBACK_COURSES);

  useEffect(() => {
    supabase
      .from("homepage_courses")
      .select("*")
      .order("display_order", { ascending: true })
      .then(({ data, error }) => {
        if (error || !data || data.length === 0) return;
        setCourses(data);
      });
  }, []);

  // duplicated once so the CSS loop animation is seamless
  const loopCourses = [...courses, ...courses];
  const itemWidthVw = 100 / courses.length;

  return (
    <section className="courses-section">
      <div className="container">
        <p className="eyebrow">Level 1 Curriculum</p>
        <h2>Our Courses</h2>
      </div>

      <div className="owl-carousel courses-carousel">
        <div className="owl-stage">
          {loopCourses.map((course, index) => (
            <div className="owl-item" key={`${course.id || course.title}-${index}`}>
              <div className="courses-item position-relative">
                <img className="img-fluid" src={course.image} alt={course.title} />
                <div className="courses-text">
                  <h4 className="text-center text-white px-3">{course.title}</h4>

                  <div className="border-top w-100 mt-3">
                    <div className="d-flex justify-content-between p-4">
                      <span className="text-white">{course.org}</span>
                      <span className="text-white">{course.info}</span>
                    </div>
                  </div>

                  <div className="courses-detail">
                    <div className="w-100 bg-white text-center p-4">
                      <Link href={course.path} className="btn btn-primary">
                        Course Detail
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .courses-section {
          padding: 0;
          background: #ffffff;
          overflow: hidden;
        }

        .container {
          max-width: 1140px;
          margin: 0 auto;
          padding: 0 20px;
          text-align: center;
        }

        .eyebrow {
          color: #2f855a;
          font-weight: 700;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin: 0 0 0.75rem;
        }

        h2 {
          font-size: 2.4rem;
          font-weight: 800;
          margin: 0 0 3rem;
          color: #1a472a;
          font-family: "Montserrat", sans-serif;
        }

        .courses-carousel {
          width: 100vw;
          position: relative;
          left: 50%;
          right: 50%;
          margin-left: -50vw;
          margin-right: -50vw;
          overflow: hidden;
        }

        .owl-stage {
          display: flex;
          gap: 0;
          width: max-content;
          animation: scroll-loop 40s linear infinite;
          padding: 0;
        }

        .owl-stage:hover {
          animation-play-state: paused;
        }

        /* track holds 2 copies of the N courses (2N x [100/N]vw = 200vw);
           -50% always lands exactly on the start of the 2nd copy, so the loop never jumps */
        @keyframes scroll-loop {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .owl-item {
          flex: 0 0 ${itemWidthVw}vw;
        }

        .courses-item {
          overflow: hidden;
          box-shadow: inset -1px 0 0 rgba(255, 255, 255, 0.25);
        }

        .courses-item img {
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          display: block;
        }

        .courses-text {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.85) 40%, rgba(0, 0, 0, 0.05));
          padding-top: 2.5rem;
        }

        .courses-text h4 {
          margin: 0 0 0.5rem;
          font-size: 1.1rem;
          font-weight: 700;
          line-height: 1.4;
          font-family: "Montserrat", sans-serif;
        }

        .courses-detail {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: max-height 0.35s ease, opacity 0.35s ease;
        }

        .courses-item:hover .courses-detail {
          max-height: 100px;
          opacity: 1;
        }

        .border-top {
          border-top: 1px solid rgba(255, 255, 255, 0.3) !important;
        }

        .w-100 {
          width: 100%;
        }

        .mt-3 {
          margin-top: 1rem;
        }

        .p-4 {
          padding: 1.25rem;
        }

        .px-3 {
          padding-left: 1rem;
          padding-right: 1rem;
        }

        .d-flex {
          display: flex;
        }

        .justify-content-between {
          justify-content: space-between;
        }

        .text-center {
          text-align: center;
        }

        .text-white {
          color: #ffffff;
          font-size: 0.85rem;
        }

        .position-relative {
          position: relative;
        }

        .bg-white {
          background: #1a472a;
        }

        :global(.btn.btn-primary) {
          display: inline-block;
          background: #ffffff;
          color: #1a472a;
          padding: 0.6rem 1.75rem;
          border-radius: 30px;
          font-weight: 600;
          font-size: 0.9rem;
          text-decoration: none;
          transition: background 0.3s ease, color 0.3s ease;
        }

        :global(.btn.btn-primary:hover) {
          background: #2f855a;
          color: #ffffff;
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 1.9rem;
          }

          .courses-text h4 {
            font-size: 0.8rem;
          }

          .courses-detail .p-4 {
            padding: 0.5rem;
          }

          .btn.btn-primary {
            padding: 0.4rem 0.75rem;
            font-size: 0.7rem;
          }
        }
      `}</style>
    </section>
  );
}
