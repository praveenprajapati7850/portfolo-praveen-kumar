/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import {
  getStoredPortfolioData,
} from './data/portfolioData';
import { PortfolioData, ProjectItem } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ContactBar } from './components/ContactBar';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { EducationSkillsSection } from './components/EducationSkillsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { GitHubProjectsSection } from './components/GitHubProjectsSection';
import { WorksSection } from './components/WorksSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { AskPraveenAIModal } from './components/AskPraveenAIModal';
import { ResumeModal } from './components/ResumeModal';
import { ResumeDocument } from './components/ResumeDocument';

export default function App() {
  const [portfolioData] = useState<PortfolioData>(() =>
    getStoredPortfolioData()
  );
  const [isResumeModalOpen, setIsResumeModalOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // Enforce pure white theme and clear any legacy dark mode state
  useEffect(() => {
    document.documentElement.classList.remove('dark');
    document.documentElement.style.backgroundColor = '#ffffff';
    document.body.style.backgroundColor = '#ffffff';
    try {
      localStorage.removeItem('theme_dark');
      Object.keys(localStorage).forEach((key) => {
        if (key.startsWith('portfolio_data_') || key.startsWith('praveen_portfolio_')) {
          localStorage.removeItem(key);
        }
      });
    } catch (e) {
      // ignore
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-neutral-950">
      {/* Top Navigation */}
      <Navbar
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        userName={portfolioData.personal.name}
      />

      {/* Main Content Sections */}
      <main id="main-content">
        {/* Hero Section */}
        <HeroSection
          personal={portfolioData.personal}
        />

        {/* Contact Links Bar */}
        <ContactBar personal={portfolioData.personal} />

        {/* Section 01: About Me */}
        <AboutSection personal={portfolioData.personal} />

        {/* Section 02: Experience */}
        <ExperienceSection experiences={portfolioData.experiences} />

        {/* Section 03: Education & Skills */}
        <EducationSkillsSection
          education={portfolioData.education}
          skills={portfolioData.skills}
        />

        {/* Section 04: Key Honors & Achievements */}
        <AchievementsSection
          achievements={portfolioData.achievements || []}
          projects={portfolioData.projects}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Section 05: GitHub Projects & Code Analytics */}
        <GitHubProjectsSection
          githubUrl={portfolioData.personal.socials.github}
          userName={portfolioData.personal.name}
        />

        {/* Section 06: Verified Credentials & Offer Letters */}
        <WorksSection
          projects={portfolioData.projects}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* Section 07: Contact Me */}
        <ContactSection personal={portfolioData.personal} />
      </main>

      {/* Footer */}
      <Footer userName={`${portfolioData.personal.name} Portfolio`} />

      {/* Interactive Project Preview Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Interactive Ask Praveen AI Floating Assistant */}
      <AskPraveenAIModal personal={portfolioData.personal} />

      {/* Official Resume Viewer & Downloader Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
        personal={portfolioData.personal}
      />

      {/* Offscreen exact-size (794px = 210mm A4) Resume DOM for instant high-resolution PDF generation */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          left: '-9999px',
          top: 0,
          width: '794px',
          zIndex: -1,
          pointerEvents: 'none',
          opacity: 0,
        }}
      >
        <ResumeDocument
          id="resume-export-sheet"
          personal={portfolioData.personal}
          isExportMode={true}
        />
      </div>
    </div>
  );
}
