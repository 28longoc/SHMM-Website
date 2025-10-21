import React, { useState } from "react";
import "./App.css";
import logo from "./assets/Sage_Hill_Math_Meets.png"; // make sure this image exists

function App() {
  return (
    <div>
      <Header />
      <Home />
      <PastCompetitions />
      <PastWinners />
      <UpcomingCompetitions />
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
          <li><a href="#past-competitions" onClick={() => setMenuOpen(false)}>Past Competitions</a></li>
          <li><a href="#past-winners" onClick={() => setMenuOpen(false)}>Past Winners</a></li>
          <li><a href="#upcoming-competitions" onClick={() => setMenuOpen(false)}>Upcoming Competitions</a></li>
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
        <li>2024 Regional Math Challenge</li>
        <li>2023 State Math Championship</li>
        <li>2022 National Math Meet</li>
      </ul>
    </section>
  );
}

function PastWinners() {
  return (
    <section id="past-winners" className="section">
      <h2>Past Winners</h2>
      <ul>
        <li>2024 - Team Alpha</li>
        <li>2023 - Team Beta</li>
        <li>2022 - Team Gamma</li>
      </ul>
    </section>
  );
}

function UpcomingCompetitions() {
  return (
    <section id="upcoming-competitions" className="section">
      <h2>Upcoming Competitions</h2>
      <ul>
        <li>2025 Regional Math Challenge - March</li>
        <li>2025 State Math Championship - May</li>
        <li>2025 National Math Meet - August</li>
      </ul>
    </section>
  );
}

function Lectures() {
  return (
    <section id="lectures" className="section">
      <h2>Lectures</h2>
      <ul>
        <li>Introduction to Math Meet - Jan 15, 2025</li>
        <li>Advanced Programming - Feb 20, 2025</li>
        <li>Mechanical Design - Mar 10, 2025</li>
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
