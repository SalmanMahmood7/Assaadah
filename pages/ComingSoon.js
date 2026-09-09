// pages/bootcamp.js
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function BootcampComingSoon() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <Head>
        <title>Bootcamp</title>
      </Head>

      <div className="coming-soon-page">
        {/* Background Image */}
        <div className="background-image"></div>

        {/* Black overlay with "flashlight" effect */}
        <div
          className="spotlight"
          style={{
            WebkitMaskImage: `radial-gradient(circle 180px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 180px)`,
            maskImage: `radial-gradient(circle 180px at ${mousePos.x}px ${mousePos.y}px, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 180px)`,
          }}
        ></div>

        {/* Content */}
        <div className="content">
          <h1>Coming Soon...</h1>
          <Link href="/courses" className="back-link">
            ← Back to Courses
          </Link>
        </div>

        <style jsx>{`
          .coming-soon-page {
            position: relative;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: default;
          }

          .background-image {
            position: absolute;
            inset: 0;
            background: url('/student-laptop.webp') center/cover no-repeat;
            z-index: 1;
          }

          /* Black overlay with soft flashlight effect */
          .spotlight {
            position: absolute;
            inset: 0;
            background-color: black;
            pointer-events: none;
            z-index: 2;
            transition: mask-image 0.05s ease, -webkit-mask-image 0.05s ease;
          }

          .content {
            position: relative;
            z-index: 3;
            text-align: center;
            color: #ffffff;
          }

          .content h1 {
            font-size: 4rem;
            margin-bottom: 1rem;
          }

          .content p {
            font-size: 1.5rem;
            margin-bottom: 2rem;
          }

          .back-link {
            display: inline-block;
            padding: 0.75rem 1.5rem;
            border: 2px solid #ffffff;
            border-radius: 50px;
            color: #ffffff;
            text-decoration: none;
            font-weight: 600;
            transition: all 0.3s ease;
          }

          .back-link:hover {
            background-color: #ffffff;
            color: #000000;
          }

          @media (max-width: 768px) {
            .content h1 {
              font-size: 3rem;
            }
            .content p {
              font-size: 1.2rem;
            }
          }
        `}</style>
      </div>
    </>
  );
}
