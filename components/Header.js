import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import ApplyLevelGate from './ApplyLevelGate';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [logoSrc, setLogoSrc] = useState('/logo.png');
  const [isApplyGateOpen, setIsApplyGateOpen] = useState(false);
  const router = useRouter();

  const handleNavClick = (e, section) => {
    e.preventDefault();

    const pathMap = {
      instructors: '/about-us#instructors',
    };

    if (section === 'instructors' && router.pathname === '/about-us') {
      const target = document.getElementById('instructors');
      if (target) {
        const headerHeight = 80;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    } else {
      router.push(pathMap[section]);
    }

    setIsMobileMenuOpen(false);
  };

  const isInstructorsActive = router.asPath.includes('#instructors');
  const isAboutActive = router.pathname === '/about-us' && !isInstructorsActive;
  const isActive = (path) => router.pathname === path;
  const navClass = (active) => `nav-item ${active ? 'active' : ''}`;
  const mobileNavClass = (active) => `mobile-nav-item ${active ? 'active' : ''}`;

  return (
    <header className="new-transparent-header">
      <div className="nav-container">
        <div className="nav-content">
          {/* Logo */}
          <div className="logo-section">
            <Link href="/">
              <Image
                src={logoSrc}
                alt="As-Sa'adah"
                width={100}
                height={50}
                className="logo"
                onError={() =>
                  setLogoSrc(
                    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgwIiBoZWlnaHQ9IjYwIiB2aWV3Qm94PSIwIDAgMTgwIDYwIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxODAiIGhlaWdodD0iNjAiIGZpbGw9IiNmM2Y0ZjYiLz48dGV4dCB4PSI5MCIgeT0iMzYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZvbnQtc2l6ZT0iMTgiIGZpbGw9IiM3Nzc3NzciPkxPR088L3RleHQ+PC9zdmc+'
                  )
                }
                priority
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className="nav-links">
            <Link href="/about-us" className={navClass(isAboutActive)}>
              About Us
            </Link>
            <Link href="/leadership" className={navClass(isActive('/leadership'))}>Team</Link>
            <a href="/about-us#instructors" className={navClass(isInstructorsActive)} onClick={(e) => handleNavClick(e, 'instructors')}>
              Instructors
            </a>
            <Link href="/courses" className={navClass(isActive('/courses'))}>Courses</Link>
            <Link href="/careers" className={navClass(isActive('/careers'))}>Careers</Link>
            <Link href="/contact" className={navClass(isActive('/contact'))}>Contact Us</Link>
          </nav>

          {/* Apply Button */}
          <div className="apply-section">
            <button type="button" className="apply-btn" onClick={() => setIsApplyGateOpen(true)}>
              Apply Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <Link href="/about-us" className={mobileNavClass(isAboutActive)} onClick={() => setIsMobileMenuOpen(false)}>
            About Us
          </Link>
          <Link href="/leadership" className={mobileNavClass(isActive('/leadership'))} onClick={() => setIsMobileMenuOpen(false)}>Team</Link>
          <a href="/about-us#instructors" className={mobileNavClass(isInstructorsActive)} onClick={(e) => handleNavClick(e, 'instructors')}>
            Instructors
          </a>
          <Link href="/courses" className={mobileNavClass(isActive('/courses'))} onClick={() => setIsMobileMenuOpen(false)}>Courses</Link>
          <Link href="/careers" className={mobileNavClass(isActive('/careers'))} onClick={() => setIsMobileMenuOpen(false)}>Careers</Link>
          <Link href="/contact" className={mobileNavClass(isActive('/contact'))} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
          <button
            type="button"
            className="mobile-donate-btn"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsApplyGateOpen(true);
            }}
          >
            Apply Now
          </button>
        </div>
      </div>

      <ApplyLevelGate isOpen={isApplyGateOpen} onClose={() => setIsApplyGateOpen(false)} />

      {/* CSS stays the same */}
      <style jsx>{`
        /* --- Header Styles --- */
        .new-transparent-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          background: white;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }

        .logo-section {
          flex-shrink: 0;
        }

        .logo {
          height: 50px;
          width: auto;
          transition: transform 0.3s ease;
        }

        .logo:hover {
          transform: scale(1.05);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 1.8rem;
          flex: 1;
          justify-content: center;
          flex-wrap: wrap;
        }

        :global(.nav-item) {
          font-family: 'Poppins', sans-serif !important;
          color: #000000 !important;
          text-decoration: none !important;
          font-weight: 500 !important;
          font-style: normal !important;
          padding: 8px 14px !important;
          border-radius: 25px !important;
          transition: all 0.3s ease !important;
          font-size: 0.95rem !important;
          line-height: 1.4 !important;
          white-space: nowrap !important;
          display: inline-block;
        }

        :global(.nav-item:hover),
        :global(.nav-item.active) {
          background: linear-gradient(135deg, #1a472a, #22543d) !important;
          color: white !important;
          transform: translateY(-2px);
          box-shadow: 0 4px 15px rgba(26, 71, 42, 0.3);
        }

        .apply-section {
          flex-shrink: 0;
        }

        .apply-btn {
          background: linear-gradient(135deg, #1a472a, #22543d);
          color: white;
          padding: 12px 24px;
          border-radius: 25px;
          border: none;
          cursor: pointer;
          font-family: inherit;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          box-shadow: 0 4px 15px rgba(26, 71, 42, 0.3);
        }

        .apply-btn:hover {
          background: linear-gradient(135deg, #22543d, #2f855a);
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(26, 71, 42, 0.4);
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          color: black;
          cursor: pointer;
          padding: 8px;
          border-radius: 4px;
          transition: background 0.3s ease;
        }

        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
          padding: 20px;
          transform: translateY(-20px);
          opacity: 0;
          transition: all 0.3s ease;
        }

        .mobile-menu.open {
          display: block;
          opacity: 1;
          transform: translateY(0);
        }

        :global(.mobile-nav-item) {
          font-family: 'Poppins', sans-serif !important;
          display: block !important;
          padding: 12px 0 !important;
          color: #000000 !important;
          text-decoration: none !important;
          font-weight: 500 !important;
          font-size: 0.95rem !important;
          font-style: normal !important;
          line-height: 1.4 !important;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1) !important;
          transition: all 0.3s ease !important;
        }

        :global(.mobile-nav-item:hover),
        :global(.mobile-nav-item.active) {
          color: #1a472a !important;
          padding-left: 10px;
          background: linear-gradient(90deg, rgba(26, 71, 42, 0.1), transparent);
        }

        .mobile-donate-btn {
          display: block;
          width: 100%;
          background: linear-gradient(135deg, #1a472a, #22543d);
          color: white;
          padding: 12px 0;
          border-radius: 25px;
          border: none;
          cursor: pointer;
          font-family: inherit;
          font-size: 1rem;
          text-decoration: none;
          font-weight: 600;
          text-align: center;
          margin-top: 15px;
          transition: all 0.3s ease;
        }

        .mobile-donate-btn:hover {
          background: linear-gradient(135deg, #22543d, #2f855a);
          transform: scale(1.02);
          box-shadow: 0 4px 15px rgba(26, 71, 42, 0.3);
        }

        @media (max-width: 1024px) {
          .nav-links {
            display: none;
          }
          .mobile-toggle {
            display: block;
          }
        }

        @media (max-width: 768px) {
          .nav-content {
            justify-content: space-between;
          }
          .logo-section {
            flex-shrink: 0;
          }
        }
      `}</style>
    </header>
  );
}
