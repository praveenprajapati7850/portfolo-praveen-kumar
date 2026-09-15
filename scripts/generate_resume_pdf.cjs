const { jsPDF } = require('jspdf');
const fs = require('fs');
const path = require('path');

function generateResumePDF() {
  // A4 dimensions: 595.28 x 841.89 pt
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4',
  });

  const pageWidth = doc.internal.pageSize.getWidth(); // 595.28 pt
  const pageHeight = doc.internal.pageSize.getHeight(); // 841.89 pt
  const margin = 34;
  const contentWidth = pageWidth - margin * 2; // 527.28 pt

  const darkColor = [15, 23, 42]; // Slate 900
  const bodyColor = [30, 41, 59]; // Slate 800
  const mutedColor = [71, 85, 105]; // Slate 600
  const lineDark = [15, 23, 42];
  const borderLight = [203, 213, 225];

  const drawSectionHeading = (title, currentY) => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10.5);
    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    doc.text(title.toUpperCase(), margin, currentY);
    currentY += 4.5;
    doc.setDrawColor(lineDark[0], lineDark[1], lineDark[2]);
    doc.setLineWidth(1.0);
    doc.line(margin, currentY, margin + contentWidth, currentY);
    return currentY + 12.5;
  };

  // =========================================================================
  // PAGE 1: 100% FULL A4, ZERO BLANK SPACE AT BOTTOM
  // =========================================================================
  let y = margin;

  // Header Name
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(23);
  doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
  doc.text('PRAVEEN KUMAR', pageWidth / 2, y + 15, { align: 'center' });
  y += 27;

  // Header Subtitle
  doc.setFontSize(10.5);
  doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
  doc.text('Integrated B.Tech + MBA (CSBS)  |  FinTech & Data Analytics Specialist', pageWidth / 2, y, { align: 'center' });
  y += 14.5;

  // Contact Strip
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(bodyColor[0], bodyColor[1], bodyColor[2]);
  doc.text('praveenkumar78509@gmail.com   •   +91 7850909557   •   Rajasthan, India   •   LinkedIn: in/praveen-kumar-907443384   •   GitHub: github.com/praveenprajapati7850', pageWidth / 2, y, { align: 'center' });
  y += 9.5;

  doc.setDrawColor(lineDark[0], lineDark[1], lineDark[2]);
  doc.setLineWidth(1.4);
  doc.line(margin, y, margin + contentWidth, y);
  y += 14;

  // Section 1: Professional Summary
  y = drawSectionHeading('Professional Summary', y);
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.2);
  doc.setTextColor(bodyColor[0], bodyColor[1], bodyColor[2]);
  const summaryText =
    'Analytical, high-performing Integrated B.Tech + MBA (Computer Science & Business Systems) scholar at Pondicherry University, fusing deep competencies in Financial Technology (FinTech), Data Analytics, and predictive modeling with corporate outreach leadership. Selected Vidyadhan Scholar and international fellow of the Harvard faculty-founded Aspire Leaders Program 2026. Proficient in Python, SQL, C, and business intelligence suites, with extensive hands-on experience designing automated data analytics pipelines, modeling equity risk metrics, and directing large-scale youth campaigns across India for institutions including Techfest IIT Bombay, Paytm, Tata Crucible, and PhysicsWallah.';
  const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(splitSummary, margin, y);
  y += splitSummary.length * 12.2 + 10;

  // Section 2: Education & Academic Background
  y = drawSectionHeading('Education & Academic Background', y);

  // Edu 1: Pondicherry University
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.8);
  doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
  doc.text('Pondicherry University (A Central University of India)', margin, y);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
  doc.text('Jul 2025 – May 2030', margin + contentWidth, y, { align: 'right' });
  y += 11.5;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9.2);
  doc.setTextColor(bodyColor[0], bodyColor[1], bodyColor[2]);
  doc.text('Integrated Bachelor of Technology (B.Tech) + MBA in Computer Science & Business Systems (CSBS)', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
  doc.text('Puducherry, India', margin + contentWidth, y, { align: 'right' });
  y += 11;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  doc.setTextColor(bodyColor[0], bodyColor[1], bodyColor[2]);
  const edu1Bullets = [
    'Specialized Curriculum: Relational Database Management Systems (RDBMS), Data Structures & Algorithms, Financial Technology (FinTech), Managerial Economics, Corporate Finance, Business Analytics, and Quantitative Modeling.',
    'Academic Focus: Computational intelligence and algorithm-driven financial applications to modernize credit assessment, equity forecasting, and corporate financial systems.',
  ];
  edu1Bullets.forEach(b => {
    const lines = doc.splitTextToSize(`•  ${b}`, contentWidth - 8);
    doc.text(lines, margin + 8, y);
    y += lines.length * 11.5 + 2;
  });
  y += 7;

  // Edu 2: Aspire Institute
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.8);
  doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
  doc.text('Aspire Institute (Founded by Harvard University Faculty)', margin, y);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
  doc.text('Jan 2026 – Apr 2026', margin + contentWidth, y, { align: 'right' });
  y += 11.5;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(9.2);
  doc.setTextColor(bodyColor[0], bodyColor[1], bodyColor[2]);
  doc.text('Aspire Leaders Program — Global Leadership & Social Impact Fellowship (Fully Funded)', margin, y);
  y += 11;

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.8);
  const edu2Bullets = [
    'Selected for prestigious international leadership development cohort from thousands of applicants across 100+ countries.',
    'Completed 40+ hours of interactive coursework in ethical leadership, systemic problem solving, and cross-cultural communication.',
  ];
  edu2Bullets.forEach(b => {
    const lines = doc.splitTextToSize(`•  ${b}`, contentWidth - 8);
    doc.text(lines, margin + 8, y);
    y += lines.length * 11.5 + 2;
  });
  y += 10;

  // Section 3: Technical & FinTech Projects
  y = drawSectionHeading('Technical & Analytical Projects', y);

  const projects = [
    {
      title: 'Financial Market Prediction & Quantitative Risk Model',
      stack: 'Python, Pandas, NumPy, Scikit-Learn, Matplotlib',
      bullets: [
        'Constructed quantitative forecasting pipeline evaluating equity price volatility, momentum metrics, and historical market behavior.',
        'Implemented feature engineering and regression algorithms to forecast price direction with backtested validation and risk reporting.',
      ],
    },
    {
      title: 'VOIS Business Intelligence & Customer Analytics Dashboard',
      stack: 'Python, EDA, Jupyter Notebook, Seaborn, Power BI',
      bullets: [
        'Built interactive exploratory data pipelines analyzing telecom customer behavioral patterns, usage cohorts, and retention factors.',
        'Synthesized high-impact visual dashboards providing actionable recommendations for churn reduction and customer satisfaction.',
      ],
    },
    {
      title: 'Relational Enterprise Database & University Management Schema',
      stack: 'SQL, PostgreSQL, Relational Schema Architecture, C',
      bullets: [
        'Architected normalized 3NF database schema handling student academic records, course prerequisites, and financial ledger billing.',
        'Authored optimized multi-table JOIN queries, indexing strategies, and stored procedures ensuring ACID transaction compliance.',
      ],
    },
  ];

  projects.forEach(p => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.6);
    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    doc.text(p.title, margin, y);

    doc.setFont('helvetica', 'italic');
    doc.setFontSize(8.5);
    doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
    doc.text(`[${p.stack}]`, margin + contentWidth, y, { align: 'right' });
    y += 11.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.8);
    doc.setTextColor(bodyColor[0], bodyColor[1], bodyColor[2]);
    p.bullets.forEach(b => {
      const lines = doc.splitTextToSize(`•  ${b}`, contentWidth - 8);
      doc.text(lines, margin + 8, y);
      y += lines.length * 11.5 + 2;
    });
    y += 5;
  });
  y += 7;

  // Section 4: Professional Experience & Leadership
  y = drawSectionHeading('Professional Experience & Leadership', y);

  const exps = [
    {
      role: 'College Ambassador',
      company: 'Techfest, IIT Bombay',
      period: 'Jul 2026 – 2027',
      bullets: [
        'Appointed official student ambassador representing Pondicherry University for Asia\'s Largest Science and Technology Festival at IIT Bombay.',
        'Spearheading university-wide campaign initiatives, organizing outreach drives, and facilitating technical workshops and national hackathons.',
      ],
    },
    {
      role: 'Data Analytics Intern',
      company: 'AICTE – Edunet Foundation | VOIS for Tech Program',
      period: 'Aug 2026 – Sep 2026',
      bullets: [
        'Engineered end-to-end exploratory data analysis (EDA) workflows using Python, Pandas, Matplotlib, and Seaborn across structured datasets.',
        'Formulated statistical modeling techniques and automated reporting dashboards to extract actionable business insights under corporate mentorship.',
      ],
    },
    {
      role: 'Campus Ambassador (Internship Program)',
      company: 'Aspire Institute',
      period: 'Aug 2026 – Present',
      bullets: [
        'Organized campus-wide awareness sessions on leadership fellowships, mentoring applicants and expanding active student engagement by 45%.',
      ],
    },
    {
      role: 'Campus Ambassador',
      company: 'Paytm, India',
      period: 'Jul 2026 – Present',
      bullets: [
        'Led digital financial literacy and FinTech adoption initiatives across campus, educating 500+ students on contactless payments and UPI.',
      ],
    },
    {
      role: 'Campus Ambassador (Marketing Training Program)',
      company: 'Tata Crucible, India',
      period: 'Apr 2026 – May 2026',
      bullets: [
        'Spearheaded digital promotional outreach for India\'s flagship corporate quiz, recruiting 100+ qualified participants and achieving 60% growth.',
      ],
    },
  ];

  exps.forEach(exp => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.6);
    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    doc.text(exp.role, margin, y);
    const rw = doc.getTextWidth(exp.role);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
    doc.text(` | ${exp.company}`, margin + rw, y);
    doc.setFont('helvetica', 'bold');
    doc.text(exp.period, margin + contentWidth, y, { align: 'right' });
    y += 11.5;

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.8);
    doc.setTextColor(bodyColor[0], bodyColor[1], bodyColor[2]);
    exp.bullets.forEach(b => {
      const lines = doc.splitTextToSize(`•  ${b}`, contentWidth - 8);
      doc.text(lines, margin + 8, y);
      y += lines.length * 11.5 + 2;
    });
    y += 4;
  });

  // Page 1 Footer Line
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.setLineWidth(0.6);
  doc.line(margin, pageHeight - 24, margin + contentWidth, pageHeight - 24);
  doc.text('Praveen Kumar — Curriculum Vitae (ATS-Compliant)', margin, pageHeight - 14);
  doc.text('Page 1 of 2', margin + contentWidth, pageHeight - 14, { align: 'right' });

  // =========================================================================
  // PAGE 2: 100% FULL A4, ZERO BLANK SPACE AT BOTTOM
  // =========================================================================
  doc.addPage();
  let y2 = margin;

  // Page 2 Sub-header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9);
  doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
  doc.text('PRAVEEN KUMAR — CURRICULUM VITAE', margin, y2);
  doc.setFont('helvetica', 'normal');
  doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
  doc.text('praveenkumar78509@gmail.com  •  +91 7850909557  •  Pondicherry University', margin + contentWidth, y2, { align: 'right' });
  y2 += 5.5;
  doc.setDrawColor(lineDark[0], lineDark[1], lineDark[2]);
  doc.setLineWidth(1.2);
  doc.line(margin, y2, margin + contentWidth, y2);
  y2 += 13;

  // Section 5: Technical & Professional Competencies
  y2 = drawSectionHeading('Technical & Professional Competencies', y2);

  const skills = [
    { cat: 'Programming & Scripting:', items: 'Python (Pandas, NumPy, Scikit-Learn), SQL (PostgreSQL, MySQL), C Language, Git, GitHub, Linux Shell/Bash' },
    { cat: 'Data Analytics & Visualization:', items: 'Exploratory Data Analysis (EDA), Matplotlib, Seaborn, Power BI, Jupyter Notebooks, Advanced Excel Modeling' },
    { cat: 'FinTech & Quantitative Modeling:', items: 'Financial Technology Architecture, Quantitative Analysis, Equity Valuation, Algorithmic Forecasting, Risk Metrics' },
    { cat: 'Database & Systems Engineering:', items: 'Relational Database Design (RDBMS), Normalization (3NF), Query Optimization, Indexing, Transactional Integrity' },
    { cat: 'Business Development & Growth:', items: 'Digital Campaign Execution, Brand Advocacy, Strategic Outreach, Campus Community Building, Event Coordination' },
    { cat: 'Core Professional Attributes:', items: 'Cross-Cultural Leadership, Analytical Problem Solving, Executive Public Speaking, Team Mentorship, Corporate Ethics' },
    { cat: 'Language Proficiencies:', items: 'English (Professional Working Proficiency), Hindi (Native Fluency)' },
  ];

  skills.forEach(s => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    doc.text(s.cat, margin, y2);
    const w = doc.getTextWidth(s.cat);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.8);
    doc.setTextColor(bodyColor[0], bodyColor[1], bodyColor[2]);
    const lines = doc.splitTextToSize(s.items, contentWidth - w - 6);
    doc.text(lines, margin + w + 6, y2);
    y2 += Math.max(1, lines.length) * 11.5 + 3;
  });
  y2 += 8;

  // Section 6: Honors & Prestigious Recognitions
  y2 = drawSectionHeading('Honors & Prestigious Recognitions', y2);

  const awards = [
    {
      name: 'Top 100 Nationwide Winner — ISRO National Space Day Quiz (November 2025):',
      desc: 'Ranked in the top 100 nationwide among tens of thousands of competitors; selected for exclusive official delegation visit to ISRO facilities and space launch complex.',
    },
    {
      name: 'Finalist — IIT Kharagpur COMPOSIT 2026 Ideathon:',
      desc: 'Selected as national pitch finalist presenting technology innovations evaluated directly by IIT Kharagpur engineering faculty and industry evaluators.',
    },
    {
      name: 'Official College Ambassador — Techfest, IIT Bombay 2026–27:',
      desc: 'Chosen to represent Pondicherry University for Asia\'s Largest Science and Technology Festival, driving outreach and workshops across collegiate networks.',
    },
    {
      name: 'Vidyadhan Scholar — Sarojini Damodaran Foundation:',
      desc: 'Awarded prestigious merit-based scholarship by the Sarojini Damodaran Foundation recognizing academic excellence, strong scholastic leadership, and character.',
    },
    {
      name: 'Selected Scholar — Aspire Leaders Program 2026:',
      desc: 'Awarded fully funded global fellowship founded by Harvard University faculty, collaborating with top-tier international student leaders on systemic community projects.',
    },
    {
      name: 'Top 1% Academic Merit Standing — RBSE:',
      desc: 'Ranked in the top 1st percentile across Rajasthan Board of Secondary Education examinations, recognized for academic excellence.',
    },
    {
      name: 'Winner — Unstop Prediction League:',
      desc: 'Secured 1st place applying statistical modeling, competitive forecasting algorithms, and predictive analytics in national data challenge.',
    },
  ];

  awards.forEach(a => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    const prefix = `•  ${a.name} `;
    doc.text(prefix, margin, y2);
    const pw = doc.getTextWidth(prefix);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(bodyColor[0], bodyColor[1], bodyColor[2]);
    const lines = doc.splitTextToSize(a.desc, contentWidth - pw);
    doc.text(lines, margin + pw, y2);
    y2 += lines.length * 11.5 + 3.5;
  });
  y2 += 8;

  // Section 7: Verified Certifications & Professional Credentials
  y2 = drawSectionHeading('Verified Certifications & Professional Credentials', y2);

  const certs = [
    { title: 'Techfest, IIT Bombay 2026–27', detail: 'Official College Ambassador Appointment Letter (Asia\'s Largest Tech Festival).' },
    { title: 'ISRO National Space Day Quiz (November 2025)', detail: 'Top 100 Nationwide Winner & Space Centre Delegation Visit.' },
    { title: 'Tata Crucible & Internshala', detail: 'Campus Ambassador Certificate of Appreciation (Pondicherry University).' },
    { title: 'IIT Kharagpur COMPOSIT 2026', detail: 'Ideathon Finalist Award (Society of Metallurgical Engineers, IIT KGP).' },
    { title: 'Vodafone Idea Foundation & VOIS', detail: 'Data Visualization Certification (Credential ID: VFLMS26_163709).' },
    { title: 'Aspire Institute (Harvard Faculty–Founded)', detail: '2026 Aspire Leaders Program Certificate (40 Hours Coursework).' },
    { title: 'Vidyadhan Scholarship Award', detail: 'Sarojini Damodaran Foundation (SDF Merit Scholar).' },
    { title: 'Internshala', detail: 'Official Internshala Student Partner (ISP) Appointment Credential.' },
    { title: 'AICTE & EduSkills', detail: 'Virtual Internship in Data Analytics (Python, SQL & Business Intelligence).' },
    { title: 'SEBI & NISM', detail: 'Investor Awareness Test Certification (Enrollment No: NISM20260000378433-001).' },
    { title: 'Physics Wallah', detail: 'PW Campus Ambassador Leadership Certificate (Registration No: PW-CAP410).' },
    { title: 'Mastercard (via Forage)', detail: 'Cybersecurity Job Simulation Certificate (Code: CBh9BXJfnfHMWEz7J).' },
    { title: 'PNC Bank (via Forage)', detail: 'Financial Services & Banking Simulation Certificate (Code: WLeRHqv8v9YfHDJbY).' },
  ];

  certs.forEach(c => {
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    doc.text('•', margin + 2, y2);

    doc.setFont('helvetica', 'bold');
    const boldText = ` ${c.title} — `;
    doc.text(boldText, margin + 8, y2);
    const bw = doc.getTextWidth(boldText) + 8;

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(bodyColor[0], bodyColor[1], bodyColor[2]);
    const lines = doc.splitTextToSize(c.detail, contentWidth - bw);
    doc.text(lines, margin + bw, y2);
    y2 += lines.length * 11 + 2;
  });
  y2 += 8;

  // Section 8: Extracurricular Leadership & Community Initiatives
  y2 = drawSectionHeading('Co-Curricular Leadership & Community Initiatives', y2);

  const extra = [
    {
      title: 'Student Academic & Technical Peer Mentor:',
      desc: 'Conducted structured peer-learning sessions for 120+ students, mentoring on Data Structures, Relational DBMS concepts, and Python problem solving.',
    },
    {
      title: 'Youth Leadership & Financial Inclusion Advocate:',
      desc: 'Conducted interactive awareness workshops for undergraduate peers on financial technology, digital payment security, and responsible investment habits across college hostels.',
    },
    {
      title: 'Campus Ambassador Community Lead:',
      desc: 'Coordinated cross-institutional student ambassador meetups, mentoring junior cohorts on public speaking, event organization, and professional brand management.',
    },
  ];

  extra.forEach(e => {
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9);
    doc.setTextColor(darkColor[0], darkColor[1], darkColor[2]);
    const prefix = `•  ${e.title} `;
    doc.text(prefix, margin, y2);
    const pw = doc.getTextWidth(prefix);

    doc.setFont('helvetica', 'normal');
    doc.setTextColor(bodyColor[0], bodyColor[1], bodyColor[2]);
    const lines = doc.splitTextToSize(e.desc, contentWidth - pw);
    doc.text(lines, margin + pw, y2);
    y2 += lines.length * 11.5 + 3;
  });

  // Page 2 Footer Line
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(7.5);
  doc.setTextColor(mutedColor[0], mutedColor[1], mutedColor[2]);
  doc.setDrawColor(borderLight[0], borderLight[1], borderLight[2]);
  doc.setLineWidth(0.6);
  doc.line(margin, pageHeight - 24, margin + contentWidth, pageHeight - 24);
  doc.text('Praveen Kumar — Curriculum Vitae (ATS-Compliant)', margin, pageHeight - 14);
  doc.text('Page 2 of 2', margin + contentWidth, pageHeight - 14, { align: 'right' });

  // Save to public folder
  const outputPath = path.join(__dirname, '../public/Praveen_Kumar_Resume.pdf');
  const buffer = Buffer.from(doc.output('arraybuffer'));
  fs.writeFileSync(outputPath, buffer);
  console.log('Successfully generated full-size ATS A4 resume PDF at:', outputPath, 'Bytes:', buffer.length);
}

generateResumePDF();
