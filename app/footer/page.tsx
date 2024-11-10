import React from 'react';
import '../styles/footer.css'; // Make sure to import the custom CSS

function Footer() {
  return (
    <div className="footer-container">
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-text">
            © 2024 terms | privacy — all rights reserved
          </p>
          <span className="social-links">
            <a className="social-link" href="https://www.facebook.com/share/nGRKQJTUNrPiDvm8/" target="_blank" rel="noopener noreferrer">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="social-icon"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a className="social-link" href="https://www.instagram.com/rahmaaan_official/profilecard/?igsh=ejAzbzI4NW12NzZw" target="_blank" rel="noopener noreferrer">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                className="social-icon"
                viewBox="0 0 24 24"
              >
                <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a className="social-link" href="https://www.linkedin.com/in/abdul-rahman-71b909216/" target="_blank" rel="noopener noreferrer">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={0}
                className="social-icon"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                />
                <circle cx={4} cy={4} r={2} stroke="none" />
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
