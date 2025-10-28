import React, { useState } from "react";
import "./App.css";
import logo from "./assets/Sage_Hill_Math_Meets.png"; // make sure this image exists

function App() {
  return (
    <div>
      <Header />
      <Home />
      <UpcomingSHMMCompetitions />
      <UpcomingCompetitions />
      <PastCompetitions />
      <PastWinners />
      <Lectures />
      <Footer />
    </div>
  );
}

// Header / Navigation
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Sage Hill Math Meet</h1>

        {/* Hamburger Button */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        <ul>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#upcoming-shmm-competitions" onClick={() => setMenuOpen(false)}>Upcoming SHMM Competitions</a></li>
          <li><a href="#upcoming-competitions" onClick={() => setMenuOpen(false)}>Upcoming Competitions</a></li>
          <li><a href="#past-competitions" onClick={() => setMenuOpen(false)}>Past Competitions</a></li>
          <li><a href="#past-winners" onClick={() => setMenuOpen(false)}>Past Winners</a></li>
          <li><a href="#lectures" onClick={() => setMenuOpen(false)}>Lectures</a></li>
        </ul>
      </nav>
    </header>
  );
}

// Sections
function Home() {
  return (
    <section id="home" className="section">
      <h2>Welcome to Sage Hill Math Meet</h2>
      <p>We are a dedicated team passionate about math. Explore competitions, winners, and lectures!</p>
    </section>
  );
}

function PastCompetitions() {
  return (
    <section id="past-competitions" className="section">
      <h2>Past Competitions</h2>
      <ul>
        <li>
          <a
            href="https://docs.google.com/presentation/d/1cIEtXIV1p_w4oScTnXRfPBocH9INIdZn-_yfxEDJUwU/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            2025 Countdown 1
          </a>
        </li>
        <li>2025 Exam 2 (N/A)</li>
        <li>
          <a
            href="https://docs.google.com/document/d/1jCCoS0NZyRMXEyOR1s3wLz6fdhZR9UuZFxTpRkfQxsY/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
          >
            2025 Exam 1
          </a>
        </li>
        <li>
          <iframe
            src="public\SHMM_P1_Solutions (1).pdf"  
            width="100%"
            height="600px"
            style={{ border: "1px solid #ccc" }}
            title="Past Competition PDF"
          ></iframe>
        </li>
      </ul>
    </section>
  );
}

function PastWinners() {
  return (
    <section id="past-winners" className="section">
      <h2>Past Winners</h2>
      <ul>
        <li>2025 Countdown 1: Melissa and Raymond</li>
        <li>2025 Exam 2: N/A</li>
        <li>2025 Exam 1: Kammen</li>
      </ul>
    </section>
  );
}

function UpcomingSHMMCompetitions() {
  return (
    <section id="upcoming-shmm-competitions" className="section">
      <h2>Upcoming SHMM Competitions</h2>
      <ul>
        <li>2025 Mock AMC 10</li>
      </ul>
    </section>
  );
}

function UpcomingCompetitions() {
  return (
    <section id="upcoming-competitions" className="section">
      <h2>Upcoming Competitions</h2>
      <ul>
        <li>2025 AMC 10/12</li>
      </ul>
    </section>
  );
}

function Lectures() {
  return (
    <section id="lectures" className="section">
      <h2>Lectures</h2>
      <ul>
        <li>Coming Soon</li>
      </ul>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2025 Sage Hill Math Meet. All rights reserved.</p>
    </footer>
  );
}

export default App;
