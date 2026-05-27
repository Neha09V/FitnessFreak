"use client";

import React from "react";
import "./about.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      {/* HERO */}
      <div className="hero">
        <h1>Build discipline. Not just workouts.</h1>

        <p>
          Fitness Freak helps you understand your lifestyle patterns — sleep,
          movement, energy, nutrition, and consistency — so improvement becomes
          automatic, not forced.
        </p>

        <div className="hero-badge">
          Small habits today → visible transformation tomorrow
        </div>
      </div>

      {/* VALUE GRID */}
      <div className="grid">
        <div className="card">
          <h2>Progress is invisible at first</h2>
          <p>
            Real change happens slowly. This app helps you see what your effort
            is actually building over time.
          </p>
        </div>

        <div className="card">
          <h2>Discipline over motivation</h2>
          <p>
            Motivation is temporary. Systems are permanent. We help you stay
            consistent even on low-energy days.
          </p>
        </div>

        <div className="card">
          <h2>Clarity in your lifestyle</h2>
          <p>
            Sleep, steps, hydration, workouts — everything connects. You finally
            see the full picture of your body.
          </p>
        </div>
      </div>

      {/* INSIGHT STRIP */}
      <div className="mini-insight">
        <h3>Why this feels different</h3>
        <p>
          Most fitness apps push intensity. This one focuses on identity —
          becoming someone who doesn’t quit easily.
        </p>
      </div>

      {/* TECH STACK */}
      <div className="tech">
        <h3>Built with a modern stack</h3>

        <div className="tech-items">
          <span>Next.js</span>
          <span>MongoDB</span>
          <span>Node.js</span>
          <span>Express</span>
          <span>JWT Auth</span>
        </div>
      </div>

      {/* FINAL QUOTE */}
      <div className="quote">
        “You don’t rise to motivation. You fall to your systems.”
      </div>

      {/* FOOTER MICRO TEXT */}
      <div className="footer-note">
        Built for consistency, not perfection.
      </div>
    </div>
  );
};

export default AboutPage;