import React from 'react';
import { PersonalInfo } from '../types';

interface ResumeDocumentProps {
  personal?: PersonalInfo;
  id?: string;
  isExportMode?: boolean;
}

export const ResumeDocument: React.FC<ResumeDocumentProps> = ({
  personal,
  id = 'resume-export-sheet',
  isExportMode = false,
}) => {
  return (
    <div
      id={id}
      className="resume-document-container mx-auto font-sans text-neutral-900 leading-normal"
    >
      {/* ========================================================================= */}
      {/* PAGE 1: FULL A4 SIZED — ZERO BLANK SPACE */}
      {/* ========================================================================= */}
      <div
        className={`resume-page bg-white p-7 sm:p-9 md:p-10 mx-auto box-border ${
          isExportMode ? '' : 'shadow-md border border-neutral-200 rounded-sm mb-6'
        }`}
        style={{
          width: '794px',
          maxWidth: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* ATS Standard Header: Name & Contact Details */}
        <div className="text-center pb-2.5 border-b-2 border-neutral-950">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight uppercase text-neutral-950 mb-1 font-sans">
            PRAVEEN KUMAR
          </h1>
          <p className="text-xs sm:text-[13px] font-semibold text-neutral-800 tracking-wide mb-1.5">
            Integrated B.Tech + MBA (CSBS) &bull; FinTech &amp; Data Analytics Specialist
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-xs text-neutral-800 font-medium">
            <a href="mailto:praveenkumar78509@gmail.com" className="hover:text-[#fe4300]">
              praveenkumar78509@gmail.com
            </a>
            <span className="text-neutral-400">&bull;</span>
            <a href="tel:+917850909557" className="hover:text-[#fe4300]">
              +91 7850909557
            </a>
            <span className="text-neutral-400">&bull;</span>
            <span>Rajasthan, India</span>
            <span className="text-neutral-400">&bull;</span>
            <a
              href="https://www.linkedin.com/in/praveen-kumar-907443384"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fe4300] underline"
            >
              LinkedIn: in/praveen-kumar-907443384
            </a>
            <span className="text-neutral-400">&bull;</span>
            <a
              href="https://github.com/praveenprajapati7850"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fe4300] underline"
            >
              GitHub: github.com/praveenprajapati7850
            </a>
          </div>
        </div>

        {/* Section 1: Professional Summary */}
        <div className="pt-3">
          <h2 className="text-xs sm:text-[12.5px] font-bold tracking-wider uppercase text-neutral-950 border-b border-neutral-950 pb-0.5 mb-1.5">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-neutral-800 text-xs sm:text-[12px] leading-relaxed text-justify">
            Analytical, high-performing Integrated B.Tech + MBA (Computer Science &amp; Business Systems) scholar at Pondicherry University, fusing deep competencies in Financial Technology (FinTech), Data Analytics, and predictive modeling with corporate outreach leadership. Selected Vidyadhan Scholar and international fellow of the Harvard faculty-founded Aspire Leaders Program 2026. Proficient in Python, SQL, C, and modern business intelligence suites, with extensive hands-on experience designing automated data analytics pipelines, modeling equity risk metrics, and directing large-scale youth campaigns across India for institutions including Techfest IIT Bombay, Paytm, Tata Crucible, and PhysicsWallah.
          </p>
        </div>

        {/* Section 2: Education */}
        <div className="pt-3">
          <h2 className="text-xs sm:text-[12.5px] font-bold tracking-wider uppercase text-neutral-950 border-b border-neutral-950 pb-0.5 mb-1.5">
            EDUCATION &amp; ACADEMIC BACKGROUND
          </h2>

          <div className="space-y-2 text-xs sm:text-[12px]">
            <div className="break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-neutral-950">
                <span>Pondicherry University (A Central University of India)</span>
                <span className="font-semibold text-neutral-700 text-xs">Jul 2025 – May 2030</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between text-neutral-800 italic text-[11.5px] sm:text-xs">
                <span>Integrated Bachelor of Technology (B.Tech) + MBA in Computer Science &amp; Business Systems (CSBS)</span>
                <span className="text-neutral-600 not-italic">Puducherry, India</span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-0.5 text-neutral-700 space-y-0.5 text-[11.5px] sm:text-[12px]">
                <li>
                  <strong className="text-neutral-900">Specialized Curriculum:</strong> Relational Database Management Systems (RDBMS), Data Structures &amp; Algorithms, Financial Technology (FinTech), Managerial Economics, Corporate Finance, Business Analytics, and Quantitative Modeling.
                </li>
                <li>
                  <strong className="text-neutral-900">Academic Focus:</strong> Computational intelligence and algorithm-driven financial applications to modernize credit assessment and investment analysis.
                </li>
              </ul>
            </div>

            <div className="break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-neutral-950">
                <span>Aspire Institute (Founded by Harvard University Faculty)</span>
                <span className="font-semibold text-neutral-700 text-xs">Jan 2026 – Apr 2026</span>
              </div>
              <div className="text-neutral-800 italic text-[11.5px] sm:text-xs">
                <span>Aspire Leaders Program — Global Leadership &amp; Social Impact Fellowship (Fully Funded)</span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-0.5 text-neutral-700 space-y-0.5 text-[11.5px] sm:text-[12px]">
                <li>
                  Selected for prestigious international leadership cohort from thousands of applicants across 100+ countries.
                </li>
                <li>
                  Completed 40+ hours of interactive coursework in ethical leadership, systemic problem solving, and cross-cultural communication.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 3: Technical & FinTech Projects */}
        <div className="pt-3">
          <h2 className="text-xs sm:text-[12.5px] font-bold tracking-wider uppercase text-neutral-950 border-b border-neutral-950 pb-0.5 mb-1.5">
            TECHNICAL &amp; ANALYTICAL PROJECTS
          </h2>

          <div className="space-y-2 text-xs sm:text-[12px]">
            <div className="break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-neutral-950">
                <span>Financial Market Prediction &amp; Quantitative Risk Model</span>
                <span className="font-normal text-neutral-600 italic text-[11px]">
                  [Python, Pandas, NumPy, Scikit-Learn, Matplotlib]
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-0.5 text-neutral-700 space-y-0.5 text-[11.5px] sm:text-[12px]">
                <li>
                  Constructed quantitative forecasting pipeline evaluating equity price volatility, momentum metrics, and historical market behavior.
                </li>
                <li>
                  Implemented feature engineering and regression algorithms to forecast price direction with backtested validation and risk reporting.
                </li>
              </ul>
            </div>

            <div className="break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-neutral-950">
                <span>VOIS Business Intelligence &amp; Customer Analytics Dashboard</span>
                <span className="font-normal text-neutral-600 italic text-[11px]">
                  [Python, EDA, Jupyter Notebook, Seaborn, Power BI]
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-0.5 text-neutral-700 space-y-0.5 text-[11.5px] sm:text-[12px]">
                <li>
                  Built interactive exploratory data pipelines analyzing telecom customer behavioral patterns, usage cohorts, and retention factors.
                </li>
                <li>
                  Synthesized high-impact visual dashboards providing actionable recommendations for churn reduction and customer satisfaction.
                </li>
              </ul>
            </div>

            <div className="break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-neutral-950">
                <span>Relational Enterprise Database &amp; University Management Schema</span>
                <span className="font-normal text-neutral-600 italic text-[11px]">
                  [SQL, PostgreSQL, Relational Schema Architecture, C]
                </span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-0.5 text-neutral-700 space-y-0.5 text-[11.5px] sm:text-[12px]">
                <li>
                  Architected normalized 3NF database schema handling student academic records, course prerequisites, and financial ledger billing.
                </li>
                <li>
                  Authored optimized multi-table JOIN queries, indexing strategies, and stored procedures ensuring ACID transaction compliance.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4: Professional Experience & Leadership */}
        <div className="pt-3">
          <h2 className="text-xs sm:text-[12.5px] font-bold tracking-wider uppercase text-neutral-950 border-b border-neutral-950 pb-0.5 mb-1.5">
            PROFESSIONAL EXPERIENCE &amp; LEADERSHIP
          </h2>

          <div className="space-y-2 text-xs sm:text-[12px]">
            {/* Exp 1 */}
            <div className="break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-neutral-950">
                <div>
                  <span>College Ambassador</span>
                  <span className="font-normal text-neutral-700"> | Techfest, IIT Bombay</span>
                </div>
                <span className="font-semibold text-neutral-700 text-xs">Jul 2026 – 2027</span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-0.5 text-neutral-700 space-y-0.5 text-[11.5px] sm:text-[12px]">
                <li>
                  Appointed official student ambassador representing Pondicherry University for Asia&apos;s Largest Science and Technology Festival at IIT Bombay.
                </li>
                <li>
                  Spearheading university-wide campaign initiatives, organizing outreach drives, and facilitating technical workshops and national hackathons.
                </li>
              </ul>
            </div>

            {/* Exp 2 */}
            <div className="break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-neutral-950">
                <div>
                  <span>Data Analytics Intern</span>
                  <span className="font-normal text-neutral-700"> | AICTE – Edunet Foundation | VOIS for Tech Program</span>
                </div>
                <span className="font-semibold text-neutral-700 text-xs">Aug 2026 – Sep 2026</span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-0.5 text-neutral-700 space-y-0.5 text-[11.5px] sm:text-[12px]">
                <li>
                  Engineered end-to-end exploratory data analysis (EDA) workflows using Python, Pandas, Matplotlib, and Seaborn across structured datasets.
                </li>
                <li>
                  Formulated statistical modeling techniques and automated reporting dashboards to extract actionable business insights under corporate mentorship.
                </li>
              </ul>
            </div>

            {/* Exp 3 */}
            <div className="break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-neutral-950">
                <div>
                  <span>Campus Ambassador (Internship Program)</span>
                  <span className="font-normal text-neutral-700"> | Aspire Institute</span>
                </div>
                <span className="font-semibold text-neutral-700 text-xs">Aug 2026 – Present</span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-0.5 text-neutral-700 space-y-0.5 text-[11.5px] sm:text-[12px]">
                <li>
                  Organized campus-wide awareness sessions on leadership fellowships, mentoring applicants and expanding active student engagement by 45%.
                </li>
              </ul>
            </div>

            {/* Exp 4 */}
            <div className="break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-neutral-950">
                <div>
                  <span>Campus Ambassador</span>
                  <span className="font-normal text-neutral-700"> | Paytm, India</span>
                </div>
                <span className="font-semibold text-neutral-700 text-xs">Jul 2026 – Present</span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-0.5 text-neutral-700 space-y-0.5 text-[11.5px] sm:text-[12px]">
                <li>
                  Led digital financial literacy and FinTech adoption initiatives across campus, educating 500+ students on contactless payments and UPI.
                </li>
              </ul>
            </div>

            {/* Exp 5 */}
            <div className="break-inside-avoid">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between font-bold text-neutral-950">
                <div>
                  <span>Campus Ambassador (Marketing Training Program)</span>
                  <span className="font-normal text-neutral-700"> | Tata Crucible, India</span>
                </div>
                <span className="font-semibold text-neutral-700 text-xs">Apr 2026 – May 2026</span>
              </div>
              <ul className="list-disc list-outside ml-4 mt-0.5 text-neutral-700 space-y-0.5 text-[11.5px] sm:text-[12px]">
                <li>
                  Spearheaded digital promotional outreach for India&apos;s flagship corporate quiz, recruiting 100+ qualified participants and achieving 60% growth.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Page 1 Footer Note */}
        <div className="pt-3 border-t border-neutral-300 flex items-center justify-between text-[11px] text-neutral-500 mt-3">
          <span>Praveen Kumar — Curriculum Vitae (ATS-Compliant)</span>
          <span>Page 1 of 2</span>
        </div>
      </div>

      {/* Explicit A4 Page Break */}
      <div className="html2pdf__page-break" style={{ pageBreakBefore: 'always', breakBefore: 'page' }} />

      {/* ========================================================================= */}
      {/* PAGE 2: FULL A4 SIZED — ZERO BLANK SPACE */}
      {/* ========================================================================= */}
      <div
        className={`resume-page bg-white p-7 sm:p-9 md:p-10 mx-auto box-border ${
          isExportMode ? '' : 'shadow-md border border-neutral-200 rounded-sm'
        }`}
        style={{
          width: '794px',
          maxWidth: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* Top Page 2 Header for ATS continuity */}
        <div className="pb-2 border-b-2 border-neutral-950 flex items-center justify-between text-xs text-neutral-800 mb-2.5">
          <span className="font-bold text-neutral-950 uppercase tracking-wider text-xs">
            PRAVEEN KUMAR — CURRICULUM VITAE
          </span>
          <span className="text-neutral-600 font-medium">
            praveenkumar78509@gmail.com &bull; +91 7850909557 &bull; Pondicherry University
          </span>
        </div>

        {/* Section 5: Technical & Professional Competencies */}
        <div>
          <h2 className="text-xs sm:text-[12.5px] font-bold tracking-wider uppercase text-neutral-950 border-b border-neutral-950 pb-0.5 mb-1.5">
            TECHNICAL &amp; PROFESSIONAL COMPETENCIES
          </h2>

          <div className="space-y-1 text-xs sm:text-[12px] text-neutral-800">
            <p className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Programming &amp; Scripting:</strong> Python (Pandas, NumPy, Scikit-Learn), SQL (PostgreSQL, MySQL), C Language, Git, GitHub, Linux Shell/Bash
            </p>
            <p className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Data Analytics &amp; Visualization:</strong> Exploratory Data Analysis (EDA), Matplotlib, Seaborn, Power BI, Jupyter Notebooks, Advanced Excel Modeling
            </p>
            <p className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">FinTech &amp; Quantitative Modeling:</strong> Financial Technology Architecture, Quantitative Analysis, Equity Valuation, Algorithmic Forecasting, Risk Metrics
            </p>
            <p className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Database &amp; Systems Engineering:</strong> Relational Database Design (RDBMS), Normalization (3NF), Query Optimization, Indexing, Transactional Integrity
            </p>
            <p className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Business Development &amp; Growth:</strong> Digital Campaign Execution, Brand Advocacy, Strategic Outreach, Campus Community Building, Event Coordination
            </p>
            <p className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Core Professional Attributes:</strong> Cross-Cultural Leadership, Analytical Problem Solving, Executive Public Speaking, Team Mentorship, Corporate Ethics
            </p>
            <p className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Language Proficiencies:</strong> English (Professional Working Proficiency), Hindi (Native Fluency)
            </p>
          </div>
        </div>

        {/* Section 6: Honors & Prestigious Recognitions */}
        <div className="pt-3">
          <h2 className="text-xs sm:text-[12.5px] font-bold tracking-wider uppercase text-neutral-950 border-b border-neutral-950 pb-0.5 mb-1.5">
            HONORS &amp; PRESTIGIOUS RECOGNITIONS
          </h2>

          <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-[12px] text-neutral-800">
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Top 100 Nationwide Winner — ISRO National Space Day Quiz (November 2025):</strong> Ranked in the top 100 nationwide among tens of thousands of competitors; selected for exclusive official delegation visit to ISRO facilities and space launch complex.
            </li>
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Finalist — IIT Kharagpur COMPOSIT 2026 Ideathon:</strong> Selected as national pitch finalist presenting technology innovations evaluated directly by IIT Kharagpur engineering faculty and industry evaluators.
            </li>
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Official College Ambassador — Techfest, IIT Bombay 2026–27:</strong> Chosen to represent Pondicherry University for Asia&apos;s Largest Science and Technology Festival, driving outreach and workshops across collegiate networks.
            </li>
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Vidyadhan Scholar — Sarojini Damodaran Foundation:</strong> Awarded prestigious merit-based scholarship by the Sarojini Damodaran Foundation recognizing academic excellence, strong scholastic leadership, and character.
            </li>
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Selected Scholar — Aspire Leaders Program 2026:</strong> Awarded fully funded global fellowship founded by Harvard University faculty, collaborating with top-tier international student leaders on systemic community projects.
            </li>
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Top 1% Academic Merit Standing — RBSE:</strong> Ranked in the top 1st percentile across Rajasthan Board of Secondary Education examinations, recognized for academic excellence.
            </li>
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Winner — Unstop Prediction League:</strong> Secured 1st place applying statistical modeling, competitive forecasting algorithms, and predictive analytics in national data challenge.
            </li>
          </ul>
        </div>

        {/* Section 7: Verified Certifications & Professional Credentials */}
        <div className="pt-3">
          <h2 className="text-xs sm:text-[12.5px] font-bold tracking-wider uppercase text-neutral-950 border-b border-neutral-950 pb-0.5 mb-1.5">
            VERIFIED CERTIFICATIONS &amp; PROFESSIONAL CREDENTIALS
          </h2>

          <ul className="list-disc list-outside ml-4 space-y-0.5 text-[11.5px] sm:text-[11.8px] text-neutral-800">
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Techfest, IIT Bombay 2026–27</strong> — Official College Ambassador Appointment Letter (Asia&apos;s Largest Tech Festival).
            </li>
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">ISRO National Space Day Quiz (November 2025)</strong> — Top 100 Nationwide Winner &amp; Space Centre Delegation Visit.
            </li>
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Tata Crucible &amp; Internshala</strong> — Campus Ambassador Certificate of Appreciation (Pondicherry University).
            </li>
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">IIT Kharagpur COMPOSIT 2026</strong> — Ideathon Finalist Award (Society of Metallurgical Engineers, IIT KGP).
            </li>
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Vodafone Idea Foundation &amp; VOIS</strong> — Data Visualization Certification (Credential ID: VFLMS26_163709).
            </li>
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Aspire Institute (Harvard Faculty–Founded)</strong> — 2026 Aspire Leaders Program Certificate (40 Hours Coursework).
            </li>
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Vidyadhan Scholarship Award</strong> — Sarojini Damodaran Foundation (SDF Merit Scholar).
            </li>
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Internshala</strong> — Official Internshala Student Partner (ISP) Appointment Credential.
            </li>
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">AICTE &amp; EduSkills</strong> — Virtual Internship in Data Analytics (Python, SQL &amp; Business Intelligence).
            </li>
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">SEBI &amp; NISM</strong> — Investor Awareness Test Certification (Enrollment No: NISM20260000378433-001).
            </li>
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Physics Wallah</strong> — PW Campus Ambassador Leadership Certificate (Registration No: PW-CAP410).
            </li>
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Mastercard (via Forage)</strong> — Cybersecurity Job Simulation Certificate (Code: CBh9BXJfnfHMWEz7J).
            </li>
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">PNC Bank (via Forage)</strong> — Financial Services &amp; Banking Simulation Certificate (Code: WLeRHqv8v9YfHDJbY).
            </li>
          </ul>
        </div>

        {/* Section 8: Extracurricular Leadership & Community Initiatives */}
        <div className="pt-3">
          <h2 className="text-xs sm:text-[12.5px] font-bold tracking-wider uppercase text-neutral-950 border-b border-neutral-950 pb-0.5 mb-1.5">
            CO-CURRICULAR LEADERSHIP &amp; COMMUNITY INITIATIVES
          </h2>

          <ul className="list-disc list-outside ml-4 space-y-1 text-xs sm:text-[12px] text-neutral-800">
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Student Academic &amp; Technical Peer Mentor:</strong> Conducted structured peer-learning sessions for 120+ students, mentoring on Data Structures, Relational DBMS concepts, and Python problem solving.
            </li>
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Youth Leadership &amp; Financial Inclusion Advocate:</strong> Conducted interactive awareness workshops for undergraduate peers on financial technology, digital payment security, and responsible investment habits across college hostels.
            </li>
            <li className="break-inside-avoid">
              <strong className="font-bold text-neutral-950">Campus Ambassador Community Lead:</strong> Coordinated cross-institutional student ambassador meetups, mentoring junior cohorts on public speaking, event organization, and professional brand management.
            </li>
          </ul>
        </div>

        {/* Page 2 Footer Note */}
        <div className="pt-3 border-t border-neutral-300 flex items-center justify-between text-[11px] text-neutral-500 mt-3">
          <span>Praveen Kumar — Curriculum Vitae (ATS-Compliant)</span>
          <span>Page 2 of 2</span>
        </div>
      </div>
    </div>
  );
};
