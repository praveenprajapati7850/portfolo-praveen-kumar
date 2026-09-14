import { PortfolioData, ProjectItem, AchievementItem } from '../types';

export const defaultPortfolioData: PortfolioData = {
  personal: {
    name: 'Praveen Kumar',
    role: 'B.Tech + MBA (CSBS) · FinTech & Data Analytics',
    bio: 'Integrated B.Tech + MBA (Computer Science & Business Systems) student at Pondicherry University, passionate about combining technology, business, and FinTech to create real-world solutions. Aspire Leaders Program 2026 participant and Campus Ambassador for Paytm, Naukri.com, and PhysicsWallah. Skilled in Python, SQL, and C, with a strong interest in FinTech, data analytics, and financial technology.',
    email: 'praveenkumar78509@gmail.com',
    phone: '+91 7850909557',
    website: 'https://www.linkedin.com/in/praveen-kumar-907443384',
    location: 'Rajasthan & Pondicherry, India',
    avatarUrl: '/images/praveen-portrait.jpg?v=20260914',
    yearsExperience: 'Top 100',
    happyClients: '4+',
    projectsCompleted: '7 Verified Credentials',
    languages: ['Hindi (Native)', 'English (Professional)'],
    socials: {
      dribbble: 'https://www.linkedin.com/in/praveen-kumar-907443384',
      linkedin: 'https://www.linkedin.com/in/praveen-kumar-907443384',
      github: 'https://github.com/praveenprajapati7850',
      facebook: 'mailto:praveenkumar78509@gmail.com',
    },
  },
  experiences: [
    {
      id: 'exp-techfest',
      year: 'Jul 2026 – Techfest 2026-27',
      role: 'College Ambassador',
      company: 'Techfest, IIT Bombay',
      companyUrl: 'https://www.techfest.org',
      type: 'Official Ambassadorship',
      description:
        'Selected onboard as College Ambassador for Techfest, IIT Bombay – Asia\'s Largest Science and Technology Festival. Driving campus engagement, leading peers into the tech and creative ecosystem, and representing Pondicherry University.',
      isActive: true,
    },
    {
      id: 'exp-1',
      year: 'Aug 2026 – Sep 2026',
      role: 'Data Analytics Intern',
      company: 'AICTE – Edunet Foundation | VOIS for Tech Program',
      companyUrl: 'https://www.aicte-india.org',
      type: 'Internship',
      description:
        'Gaining hands-on experience in Python, Matplotlib, Jupyter, data analysis, and data visualization, with exposure to AI/LLM applications. Working on real-world datasets and an industry-mentored analytics project to develop practical data-driven problem-solving skills.',
      isActive: true,
    },
    {
      id: 'exp-2',
      year: 'Aug 2026 – Present',
      role: 'Campus Ambassador (Internship Program)',
      company: 'Aspire Institute',
      companyUrl: 'https://www.aspireinstitute.org',
      type: 'Global Leadership Program',
      description:
        'Promoting Aspire Outreach courses among peers through campus outreach and direct engagement. Creating awareness of course benefits and encouraging students to explore relevant learning and career opportunities.',
      isActive: true,
    },
    {
      id: 'exp-3',
      year: 'Jul 2026 – Present',
      role: 'Campus Ambassador',
      company: 'Paytm, India',
      companyUrl: 'https://paytm.com',
      type: 'FinTech Outreach',
      description:
        "Promote Paytm's fintech products and financial-literacy initiatives, driving brand awareness among campus peers.",
      isActive: false,
    },
    {
      id: 'exp-4',
      year: 'Apr 2026 – May 2026',
      role: 'Campus Ambassador (Marketing Training Program)',
      company: 'Tata Crucible, India',
      companyUrl: 'https://www.tatacrucible.com',
      type: 'Marketing & Outreach',
      description:
        'Spearheaded Tata Crucible campus outreach, referring 100+ students and conducting 5 sessions that increased awareness by 60%. Collaborated with university staff to promote events, driving a 40% increase in attendance.',
      isActive: false,
    },
    {
      id: 'exp-5',
      year: 'Nov 2025 – Present',
      role: 'Campus Ambassador',
      company: 'PhysicsWallah & Naukri.com',
      companyUrl: 'https://www.pw.live',
      type: 'Brand Relations',
      description:
        'Official PW Campus Ambassador (Reg: PW-CAP410). Promoting career and educational readiness platforms among university peers, recognized for leadership and peer guidance.',
      isActive: false,
    },
  ],
  education: [
    {
      id: 'edu-1',
      period: 'JUL 2025 – May 2030',
      degree: 'Integrated B.Tech + MBA in Computer Science & Business Systems (CSBS)',
      institution: 'Pondicherry University',
      description:
        'Rigorous interdisciplinary program blending computer algorithms, enterprise software engineering, financial modeling, and strategic business leadership.',
    },
    {
      id: 'edu-2',
      period: 'Jan 2026 – Apr 2026',
      degree: 'Aspire Leadership Program (Harvard Faculty–Offered, Fully Funded)',
      institution: 'Aspire Institute',
      description:
        'Selected for a fully funded leadership program founded by Harvard University faculty, collaborating and learning alongside international students while developing cross-cultural leadership and communication skills.',
    },
  ],
  skills: [
    {
      id: 'skill-1',
      name: 'Python & Pandas',
      icon: '/images/home/education-skill/python-icon.svg',
      rating: 3,
    },
    {
      id: 'skill-2',
      name: 'SQL & Database',
      icon: '/images/home/education-skill/sql-icon.svg',
      rating: 3,
    },
    {
      id: 'skill-3',
      name: 'Matplotlib & Power BI',
      icon: '/images/home/education-skill/powerbi-icon.svg',
      rating: 3,
    },
    {
      id: 'skill-4',
      name: 'FinTech & Analytics',
      icon: '/images/home/education-skill/fintech-icon.svg',
      rating: 4,
    },
    {
      id: 'skill-5',
      name: 'MATLAB & C Prog.',
      icon: '/images/home/education-skill/matlab-icon.svg',
      rating: 3,
    },
    {
      id: 'skill-6',
      name: 'AI/LLM Applications',
      icon: '/images/home/education-skill/ai-icon.svg',
      rating: 4,
    },
  ],
  projects: [
    {
      id: 'proj-techfest-iitb',
      title: 'College Ambassador Offer Letter',
      client: 'Techfest, IIT Bombay',
      category: 'Offer Letters',
      image: '/images/work/techfest-offer-letter.jpg',
      link: 'https://www.techfest.org',
      documentType: 'Official Offer Letter',
      issueDate: '1st July 2026 – Till Techfest 2026-27',
      credentialId: 'Techfest Office, SAC, IIT Bombay - 400076',
      signatories: 'Ansh Yadav & Mayank Mudgal (Overall Coordinators)',
      description:
        'Official Offer Letter welcoming Praveen Kumar onboard as College Ambassador for Techfest, IIT Bombay – Asia\'s Largest Science & Technology Festival. Empowered to drive campus engagement, foster innovation, and lead peers into tech and creative spheres, with access to certified courses and internship opportunities.',
      tags: ['Techfest IIT Bombay', 'College Ambassador', 'Asia\'s Largest Tech Fest', 'Offer Letter'],
      keyHighlights: [
        'Role: College Ambassador representing Pondicherry University',
        'Tenure: 1st July 2026 – Till Techfest 2026-27',
        'Official Coordinators: Ansh Yadav & Mayank Mudgal',
        'Benefits: Access to certified courses & performance-based internships',
      ],
    },
    {
      id: 'proj-isro-visit',
      title: 'ISRO National Space Day Quiz – Top 100 Winner & ISRO Visit',
      client: 'ISRO (Indian Space Research Organisation)',
      category: 'National Honors',
      image: '/images/work/isro-visit-delegation.png',
      link: 'https://www.isro.gov.in',
      documentType: 'National Award & Delegation Visit',
      issueDate: 'November 2025',
      credentialId: 'Top 100 Nationwide Merit Rank · ISRO Delegation',
      signatories: 'ISRO Space Day Quiz Committee & Outreach Wing',
      description:
        'Ranked among the Top 100 nationwide winners of the ISRO National Space Day Quiz out of thousands of student participants across India. Earned an exclusive invitation and official guided delegation visit to the Indian Space Research Organisation (ISRO) facility and launch complex, standing with fellow national winners before the full-scale PSLV and GSLV rocket models.',
      tags: ['ISRO', 'Space Day Quiz', 'Top 100 Winner', 'ISRO Space Centre Visit', 'National Honor', 'November 2025'],
      keyHighlights: [
        'Secured Top 100 nationwide rank in ISRO National Space Day Quiz (November 2025)',
        'Earned official delegation invitation to ISRO Space Centre & facilities',
        'Photographed with fellow national student delegates before iconic PSLV & GSLV launch monuments',
        'Explored satellite technology, rocket integration, and mission operations exhibits',
      ],
    },
    {
      id: 'proj-tata-crucible',
      title: 'Tata Crucible Campus Ambassador Certificate of Appreciation',
      client: 'Tata Crucible & Internshala',
      category: 'Ambassadorships',
      image: '/images/work/tata-crucible-ambassador.jpg',
      link: 'https://www.tatacrucible.com',
      documentType: 'Certificate of Appreciation',
      issueDate: 'Apr 2026 – May 2026',
      credentialId: 'Tata Crucible Campus Ambassador · Pondicherry University',
      signatories: 'Tata Crucible & Internshala Program Leadership',
      description:
        'Awarded to Praveen kumar from Pondicherry University for serving as Tata Crucible Campus Ambassador under the Tata Crucible Campus Ambassador Programme. Recognized for dedication, active student outreach, and leadership in driving quiz participation and campus engagement.',
      tags: ['Tata Crucible', 'Internshala', 'Campus Ambassador', 'Pondicherry University'],
      keyHighlights: [
        'Certified to Praveen kumar from Pondicherry University',
        'Served as Tata Crucible Campus Ambassador',
        'Recognized for exceptional campus outreach and student engagement',
        'Official joint initiative of Tata Crucible and Internshala',
      ],
    },
    {
      id: 'proj-vi-edunet-dataviz',
      title: 'Data Visualization Certification',
      client: 'Vodafone Idea Foundation & VOIS',
      category: 'Data & Analytics',
      image: '/images/Certificate_page-0001.jpg?v=20260914',
      link: '#contact',
      documentType: 'Certificate of Completion',
      issueDate: 'August 14, 2026',
      credentialId: 'VFLMS26_163709',
      signatories: 'Vodafone Idea Foundation, VOIS & Edunet Foundation',
      description:
        'Successfully completed professional Data Visualization training organized by Vodafone Idea Foundation, VOIS, and Edunet Foundation, mastering practical techniques in exploratory data analysis and insight visualization.',
      tags: ['Data Visualization', 'Vodafone Idea', 'VOIS', 'Edunet Foundation', 'Python & BI'],
      keyHighlights: [
        'Credential ID: VFLMS26_163709 with QR code validation',
        'Awarded official Course Completion Distinction seal',
        'Hands-on training in real-world data visualization workflows',
      ],
    },
    {
      id: 'proj-iitkgp-composit',
      title: 'Ideathon Finalist – COMPOSIT 31st Edition',
      client: 'IIT Kharagpur (SME)',
      category: 'Competitions',
      image: '/images/work/iit-kgp-ideathon.png',
      link: 'https://iitkgp.ac.in',
      documentType: 'Certificate of Participation (Finalist)',
      issueDate: '27th – 29th March 2026',
      credentialId: '31st Edition COMPOSIT · SME IIT Kharagpur',
      signatories: 'Prof. Sankha Mukherjee & Prof. Amlan Dutta (Faculty Advisors)',
      description:
        'Awarded for securing Finalist rank in the flagship Ideathon at the 31st Edition of COMPOSIT, organized by the Society of Metallurgical Engineers at IIT Kharagpur, demonstrating innovative thinking and high-impact problem-solving skills.',
      tags: ['IIT Kharagpur', 'Ideathon Finalist', 'COMPOSIT 2026', 'Innovation'],
      keyHighlights: [
        'Distinction: Finalist in Ideathon Competition',
        'Organized by: Society of Metallurgical Engineers, IIT Kharagpur',
        'Demonstrated innovative thinking and technology solutions',
        'Faculty Advisors: Prof. Sankha Mukherjee & Prof. Amlan Dutta',
      ],
    },
    {
      id: 'proj-aspire-leaders',
      title: '2026 Aspire Leaders Program Certificate',
      client: 'Aspire Institute (Founded by Harvard Faculty)',
      category: 'Global Leadership',
      image: '/images/work/aspire-leaders-certificate.jpg',
      link: 'https://www.aspireleaders.org',
      documentType: 'Certificate of Completion',
      issueDate: 'April 2026',
      credentialId: 'Aspire Leaders Program Graduate',
      signatories: 'Aspire Institute Academic Board',
      description:
        'Awards this certificate to Praveen kumar for successfully completing all modules of the 2026 Aspire Leaders Program. Affirms completion of 40 hours of rigorous coursework in leadership, social impact, critical thinking, and global community engagement.',
      tags: ['Aspire Institute', 'Harvard Faculty Founded', 'Global Leadership', '40 Hours Coursework'],
      keyHighlights: [
        'Presented to: Praveen kumar',
        'Program: 2026 Aspire Leaders Program (Founded by Harvard Faculty)',
        'Affirms completion of 40 hours of specialized leadership coursework',
        'Strengthened moral leadership, critical thinking, and social impact',
      ],
    },
    {
      id: 'proj-internshala-isp',
      title: 'Internshala Student Partner (ISP) Appointment Letter',
      client: 'Internshala (Scholiverse Educare Pvt. Ltd.)',
      category: 'Offer Letters',
      image: '/images/work/internshala-isp-letter.jpg',
      link: 'https://internshala.com',
      documentType: 'Official Appointment Letter',
      issueDate: '20/06/2026',
      credentialId: 'ISP Program · Scholiverse Educare Pvt. Ltd.',
      signatories: 'Himanshi Dwivedi (Senior Manager - Internshala)',
      description:
        'Official Welcome and Appointment letter selecting Praveen as an Internshala Student Partner (ISP). Empowered to lead campus career initiatives, promote internship opportunities, and guide college peers toward professional growth.',
      tags: ['Internshala', 'ISP Appointment', 'Student Partner', 'Offer Letter'],
      keyHighlights: [
        'Official appointment letter to Praveen',
        'Signed by Himanshi Dwivedi, Senior Manager - Internshala',
        'Annexure A detailing terms, performance incentives, and career empowerment role',
      ],
    },
    {
      id: 'proj-mastercard-cyber',
      title: 'Mastercard Cybersecurity Job Simulation',
      client: 'Mastercard (via Forage)',
      category: 'Fintech & Banking',
      image: '/images/work/mastercard-cybersecurity.jpg',
      link: 'https://www.theforage.com',
      documentType: 'Certificate of Completion',
      issueDate: 'May 30th, 2026',
      credentialId: 'CBh9BXJfnfHMWEz7J | User: 69eb6a0c7c2f6961f3a34b1f',
      signatories: 'Tom Brunskill (Co-Founder of Forage)',
      description:
        'Completed practical enterprise job simulation tasks with Mastercard via Forage, gaining verified expertise in designing corporate phishing email simulations and interpreting telemetry from phishing defense simulations.',
      tags: ['Mastercard', 'Cybersecurity', 'Job Simulation', 'Phishing Analysis', 'Forage'],
      keyHighlights: [
        'Enrolment Verification Code: CBh9BXJfnfHMWEz7J',
        'User Verification Code: 69eb6a0c7c2f6961f3a34b1f',
        'Practical Task: Design a phishing email simulation',
        'Practical Task: Interpret phishing simulation results',
      ],
    },
    {
      id: 'proj-pnc-banking',
      title: 'PNC Bank Financial Services & Banking Simulation',
      client: 'PNC Bank (via Forage)',
      category: 'Fintech & Banking',
      image: '/images/work/pnc-bank-financial-services.jpg',
      link: 'https://www.theforage.com',
      documentType: 'Certificate of Completion',
      issueDate: 'April 24th, 2026',
      credentialId: 'WLeRHqv8v9YfHDJbY | User: 69eb6a0c7c2f6961f3a34b1f',
      signatories: 'Tom Brunskill (Co-Founder of Forage)',
      description:
        'Completed practical enterprise job simulation in banking and financial services with PNC Bank via Forage, focusing on industry exploration, modern banking frameworks, and financial institutional operations.',
      tags: ['PNC Bank', 'Banking & Finance', 'Financial Services', 'Job Simulation', 'Forage'],
      keyHighlights: [
        'Enrolment Verification Code: WLeRHqv8v9YfHDJbY',
        'User Verification Code: 69eb6a0c7c2f6961f3a34b1f',
        'Practical Task: Exploring the financial services industry',
        'Practical Task: Banking in focus',
      ],
    },
    {
      id: 'proj-sebi-nism',
      title: 'SEBI Investor Awareness Test Certification',
      client: 'SEBI & NISM',
      category: 'Fintech & Banking',
      image: '/images/work/sebi-nism-certificate.png',
      link: 'https://www.sebi.gov.in',
      documentType: 'Certificate of Participation & Completion',
      issueDate: 'March 02, 2026',
      credentialId: 'NISM20260000378433-001',
      signatories: 'Shashikumar Valsakumar (Exec. Director, SEBI) & Yogita Jadhav (Registrar, NISM)',
      description:
        'Awarded for successfully passing the comprehensive SEBI Investor Awareness Test organized jointly by the Securities and Exchange Board of India (SEBI) and National Institute of Securities Markets (NISM), establishing certified competence in capital markets.',
      tags: ['SEBI', 'NISM', 'Securities Markets', 'Investor Awareness', 'FinTech'],
      keyHighlights: [
        'Enrollment Number: NISM20260000378433-001',
        'Conducted under regulatory capacity building initiative of SEBI',
        'Validates proficiency in securities markets & investor protection',
      ],
    },
    {
      id: 'proj-physicswallah-ca',
      title: 'PW Campus Ambassador Leadership Certificate',
      client: 'Physics Wallah (PW Ambassador)',
      category: 'Ambassadorships',
      image: '/images/work/physicswallah-ambassador.png',
      link: 'https://www.pw.live',
      documentType: 'Campus Ambassador Certificate',
      issueDate: '10 November 2025',
      credentialId: 'PW-CAP410',
      signatories: 'Mr. Balajee Singh (Head of Project)',
      description:
        'Officially presented in recognition of the PW Campus Ambassador\'s demonstrated leadership skills, proactive campus engagement, and ability to guide and inspire student peers across educational initiatives.',
      tags: ['Physics Wallah', 'PW Ambassador', 'Campus Leadership', 'Reg: PW-CAP410'],
      keyHighlights: [
        'Registration Number: PW-CAP410',
        'Presented by: Mr. Balajee Singh, Head of Project',
        'Acknowledges outstanding leadership and student mentorship',
      ],
    },
    {
      id: 'proj-aicte-data',
      title: 'AICTE Virtual Internship in Data Analytics',
      client: 'AICTE & EduSkills Foundation',
      category: 'Data & Analytics',
      image: '/images/work/aicte-edunet-internship.jpeg',
      link: 'https://internship.aicte-india.org',
      documentType: 'Virtual Internship Certificate',
      issueDate: '2025 / 2026',
      credentialId: 'AICTE-EduSkills-DA',
      signatories: 'AICTE & EduSkills Leadership',
      description:
        'Successfully completed the official AICTE-supported Virtual Internship in Data Analytics, building practical competencies in exploratory data analysis, business intelligence dashboards, and predictive metrics.',
      tags: ['AICTE', 'EduSkills', 'Data Analytics', 'Virtual Internship'],
      keyHighlights: [
        'Hands-on industry projects in data cleaning, EDA, and statistical visualization',
        'Recognized under AICTE Internship portal framework',
        'Applied Python, SQL, and analytical tools to real-world business datasets',
      ],
    },
  ],
  achievements: [
    {
      id: 'ach-isro',
      title: 'Top 100 Nationwide Winner & ISRO Delegation Visit',
      organization: 'Indian Space Research Organisation (ISRO)',
      year: 'November 2025',
      category: 'National Honors',
      badge: 'National Top 100 Rank',
      credentialId: 'ISRO-NSD-Top100',
      relatedProjectId: 'proj-isro-visit',
      image: '/images/work/isro-quiz-certificate.jpg',
      description:
        'Ranked in the top 100 nationwide winners across India in the ISRO National Space Day Quiz (November 2025). Selected for an official delegation tour of the ISRO Launch Complex and research facilities, witnessing rocket launch assemblies including PSLV and GSLV configurations.',
      highlights: [
        'National Top 100 Winner across thousands of participants across India (November 2025)',
        'Official invitation to ISRO launch vehicle facility & rocket assembly zones',
        'Directly interacted with ISRO scientists and mission specialists',
      ],
    },
    {
      id: 'ach-iitkgp',
      title: 'Finalist — Flagship Ideathon at COMPOSIT 2026',
      organization: 'IIT Kharagpur (Society of Metallurgical Engineers)',
      year: '2026',
      category: 'Competitions',
      badge: 'National Finalist',
      credentialId: 'COMPOSIT-31st-Finalist',
      relatedProjectId: 'proj-iitkgp-composit',
      image: '/images/work/iit-kgp-ideathon.png',
      description:
        'Selected as a Finalist in the flagship Ideathon at the 31st Edition of COMPOSIT, presenting innovative technology-driven solutions before IIT Kharagpur faculty and industry jury.',
      highlights: [
        'Selected among top teams from premier engineering colleges across India',
        'Presented innovative tech solution to IIT Kharagpur faculty evaluation panel',
        'Recognized for exceptional design thinking, problem-solving, and viability',
      ],
    },
    {
      id: 'ach-techfest',
      title: 'College Ambassador for Techfest, IIT Bombay',
      organization: 'Techfest, IIT Bombay',
      year: '2026 – 2027',
      category: 'Leadership & Ambassadorship',
      badge: 'Asia\'s Largest Tech Fest',
      credentialId: 'IITB-Techfest-Ambassador',
      relatedProjectId: 'proj-techfest-iitb',
      image: '/images/work/techfest-offer-letter.jpg',
      description:
        'Officially appointed as College Ambassador representing Pondicherry University for Techfest, IIT Bombay — Asia\'s Largest Science & Technology Festival. Spearheading student engagement, tech competitions, and regional outreach.',
      highlights: [
        'Official Offer Letter issued by Techfest SAC, IIT Bombay',
        'Leading university representation across technology workshops and competitions',
        'Exclusive access to IIT Bombay technical training and leadership summits',
      ],
    },
    {
      id: 'ach-aspire',
      title: 'Aspire Leaders Program 2026 Scholar',
      organization: 'Aspire Institute (Founded by Harvard University Faculty)',
      year: '2026',
      category: 'Leadership & Ambassadorship',
      badge: 'Harvard Faculty Founded',
      credentialId: 'Aspire-Leadership-2026',
      relatedProjectId: 'proj-aspire-leaders',
      image: '/images/work/aspire-leaders-certificate.jpg',
      description:
        'Selected for the prestigious, fully funded Aspire Leaders Program, collaborating with international peers and Harvard faculty in leadership, critical ethics, and social impact.',
      highlights: [
        'Highly competitive international selection across global applicants',
        'Curriculum mentored by Harvard University professors',
        'Trained in cross-cultural leadership, ethics, and professional strategy',
      ],
    },
    {
      id: 'ach-tata-crucible',
      title: 'Tata Crucible Campus Ambassador',
      organization: 'Tata Sons / Tata Crucible Campus Programme',
      year: '2025 – 2026',
      category: 'Leadership & Ambassadorship',
      badge: 'Tata Crucible Ambassador',
      credentialId: 'Tata-Crucible-CA',
      relatedProjectId: 'proj-tata-crucible',
      image: '/images/work/tata-crucible-ambassador.jpg',
      description:
        'Selected as official Campus Ambassador for India’s premier corporate and campus business quiz, spearheading youth outreach, quiz registrations, and university branding.',
      highlights: [
        'Earned official Certificate of Appreciation from Tata Crucible Leadership',
        'Represented Pondicherry University for India\'s flagship corporate quiz',
        'Demonstrated high student engagement and brand leadership',
      ],
    },
    {
      id: 'ach-rbse',
      title: 'Top 1% Academic Rank in State Board Examinations',
      organization: 'Rajasthan Board of Secondary Education (RBSE)',
      year: '2022',
      category: 'Academic Merit',
      badge: 'State Top 1% Rank',
      credentialId: 'RBSE-State-Merit',
      description:
        'Ranked in the top 1% across the entire state of Rajasthan in secondary board examinations, recognized for outstanding academic discipline, mathematical proficiency, and excellence.',
      highlights: [
        'State-level academic distinction awarded in Rajasthan',
        'Ranked in upper 99th percentile statewide',
        'Exemplary foundation in mathematics, analytical sciences, and languages',
      ],
    },
    {
      id: 'ach-isp',
      title: 'Internshala Student Partner (ISP) Appointment',
      organization: 'Internshala',
      year: '2026',
      category: 'Leadership & Ambassadorship',
      badge: 'Official Campus Lead',
      credentialId: 'ISP-Appointment-Letter',
      relatedProjectId: 'proj-internshala-isp',
      image: '/images/work/internshala-isp-letter.jpg',
      description:
        'Appointed as Internshala Student Partner (ISP), facilitating internship opportunities, skill training bootcamps, and career resources for university peers.',
      highlights: [
        'Official ISP appointment letter and verified leadership responsibilities',
        'Mentoring student community on internship pathways and technical upskilling',
        'Representing Pondicherry University in pan-India student partner network',
      ],
    },
    {
      id: 'ach-vois',
      title: 'Vodafone Idea & VOIS / Edunet Data Visualization Merit',
      organization: 'Vodafone Idea Foundation & VOIS',
      year: '2026',
      category: 'Industry Certifications',
      badge: 'Credential ID: VFLMS26_163709',
      credentialId: 'VFLMS26_163709',
      relatedProjectId: 'proj-vois-data-viz',
      image: '/images/Certificate_page-0001.jpg?v=20260914',
      description:
        'Completed practical industry program in Data Visualization & Analytics using modern visual analytics tools, data storytelling, and business metrics.',
      highlights: [
        'Verified corporate credential ID: VFLMS26_163709',
        'Mastered analytical dashboarding, exploratory data storytelling, and KPIs',
        'Validated by VOIS (Vodafone Intelligent Solutions) and EduNet',
      ],
    },
    {
      id: 'ach-aicte',
      title: 'AICTE Virtual Internship in Data Analytics',
      organization: 'AICTE & EduSkills Foundation',
      year: '2026',
      category: 'Industry Certifications',
      badge: 'Govt. of India / AICTE',
      credentialId: 'AICTE-EduSkills-DA',
      relatedProjectId: 'proj-aicte-data',
      image: '/images/work/aicte-edunet-internship.jpeg',
      description:
        'Successfully finished intensive virtual internship in Data Analytics sponsored by AICTE, mastering Python data pipelines, SQL queries, and visualization workflows.',
      highlights: [
        'Supported by All India Council for Technical Education (Govt. of India)',
        'Comprehensive real-world datasets in Pandas, SQL, and Power BI',
        'Official certificate of completion with verified credential ID',
      ],
    },
    {
      id: 'ach-sebi',
      title: 'SEBI & NISM Investor Awareness Certification',
      organization: 'National Institute of Securities Markets (NISM) & SEBI',
      year: '2026',
      category: 'Industry Certifications',
      badge: 'Cert: NISM20260000378433-001',
      credentialId: 'NISM20260000378433-001',
      relatedProjectId: 'proj-sebi-nism',
      image: '/images/work/sebi-nism-certificate.png',
      description:
        'Achieved certified recognition in Investor Awareness, covering Indian financial markets, regulatory frameworks, investor rights, and capital market dynamics.',
      highlights: [
        'Official NISM & SEBI financial literacy verification',
        'In-depth grounding in securities, risk assessment, and market mechanics',
        'Credential Certificate: NISM20260000378433-001',
      ],
    },
    {
      id: 'ach-mastercard',
      title: 'Mastercard Cybersecurity Job Simulation Merit',
      organization: 'Mastercard & Forage',
      year: '2026',
      category: 'Industry Certifications',
      badge: 'Forage Verified',
      credentialId: 'Mastercard-Cyber-Sim',
      relatedProjectId: 'proj-mastercard-cyber',
      image: '/images/work/mastercard-cybersecurity.jpg',
      description:
        'Simulated hands-on cybersecurity defense scenarios including security assessment, phishing incident response, and institutional information security protocols.',
      highlights: [
        'Issued by Mastercard via Forage job simulation platform',
        'Hands-on technical exercises in enterprise cyber hygiene and threat analysis',
        'Verified global industry credential',
      ],
    },
    {
      id: 'ach-pnc',
      title: 'PNC Bank Financial Services Job Simulation Merit',
      organization: 'PNC Bank & Forage',
      year: '2026',
      category: 'Industry Certifications',
      badge: 'Forage Verified',
      credentialId: 'PNC-Bank-Fin-Sim',
      relatedProjectId: 'proj-pnc-bank',
      image: '/images/work/pnc-bank-financial-services.jpg',
      description:
        'Completed practical financial analysis and commercial banking simulation evaluating consumer creditworthiness, loan portfolios, and risk mitigation.',
      highlights: [
        'Issued by PNC Bank via Forage virtual experience',
        'Direct practical application of financial ratios and underwriting metrics',
        'Verified global banking credential',
      ],
    },
    {
      id: 'ach-unstop',
      title: 'Unstop Prediction League Winner',
      organization: 'Unstop Competitive Forecasting',
      year: '2025',
      category: 'Competitions',
      badge: 'League Winner',
      description:
        'Emerged as contest winner in the Unstop Prediction League, applying statistical logic, trends forecasting, and strategic decision-making.',
      highlights: [
        'Secured winning rank in competitive nationwide league on Unstop',
        'Demonstrated quantitative forecasting and predictive modeling agility',
      ],
    },
  ],
};

const STORAGE_KEY = 'portfolio_data_praveen_v12';
const LEGACY_STORAGE_KEYS = [
  'portfolio_data_praveen_v11',
  'portfolio_data_praveen_v10',
  'portfolio_data_praveen_v9',
  'portfolio_data_praveen_v8',
  'portfolio_data_praveen_v7',
  'portfolio_data_praveen_v6',
  'portfolio_data_praveen_v5',
  'portfolio_data_praveen_v4',
  'portfolio_data_praveen_v3',
  'portfolio_data_praveen_v2',
  'portfolio_data_praveen',
  'praveen_portfolio_data',
];

export function getStoredPortfolioData(): PortfolioData {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(STORAGE_KEY);
      for (const legacyKey of LEGACY_STORAGE_KEYS) {
        localStorage.removeItem(legacyKey);
      }
    } catch {}
  }
  return defaultPortfolioData;
}

export function saveStoredPortfolioData(data: PortfolioData): void {
  // No-op to keep defaultPortfolioData as the single source of truth
}

export function resetStoredPortfolioData(): PortfolioData {
  if (typeof window !== 'undefined') {
    try {
      localStorage.removeItem(STORAGE_KEY);
      for (const legacyKey of LEGACY_STORAGE_KEYS) {
        localStorage.removeItem(legacyKey);
      }
    } catch {}
  }
  return defaultPortfolioData;
}
