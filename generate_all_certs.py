import os

certs = {}

# 1. Mastercard Cybersecurity
certs['mastercard-cybersecurity.svg'] = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;display=swap');
      .sans { font-family: 'Plus Jakarta Sans', system-ui, sans-serif; }
    </style>
  </defs>

  <!-- Background -->
  <rect width="1200" height="800" fill="#ffffff"/>
  
  <!-- Mastercard Logo -->
  <g transform="translate(80, 70)">
    <circle cx="35" cy="35" r="30" fill="#eb001b"/>
    <circle cx="75" cy="35" r="30" fill="#f79e1b" opacity="0.88"/>
    <text x="55" y="85" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#111">mastercard</text>
  </g>

  <!-- Top Right Forage Header Ribbon -->
  <path d="M 850 0 L 1200 0 L 1200 210 L 970 210 Z" fill="#e11938"/>
  <g transform="translate(900, 45)">
    <!-- Forage Logo icon -->
    <path d="M 15 5 L 35 25 L 20 40 L 40 45 L 25 60 L 5 40 Z" fill="#ffffff"/>
    <text x="50" y="42" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" letter-spacing="-0.5">Forage</text>
    <text x="40" y="85" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="13.5" font-weight="600" opacity="0.95">Inspiring and</text>
    <text x="40" y="103" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="13.5" font-weight="600" opacity="0.95">empowering</text>
    <text x="40" y="121" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="13.5" font-weight="600" opacity="0.95">future professionals</text>
  </g>

  <!-- Candidate Name -->
  <text x="80" y="325" fill="#111827" font-family="'Plus Jakarta Sans', sans-serif" font-size="44" font-weight="800">Praveen Kumar</text>

  <!-- Course Title -->
  <text x="80" y="380" fill="#1f2937" font-family="'Plus Jakarta Sans', sans-serif" font-size="36" font-weight="800">Cybersecurity Job Simulation</text>

  <!-- Certificate Type -->
  <text x="80" y="440" fill="#4b5563" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="500">Certificate of Completion</text>
  <text x="80" y="475" fill="#6b7280" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" font-weight="500">May 30th, 2026</text>

  <!-- Tasks Section -->
  <text x="80" y="580" fill="#374151" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="600">Over the period of May 2026, Praveen Kumar has completed practical tasks in:</text>
  <text x="80" y="612" fill="#4b5563" font-family="'Plus Jakarta Sans', sans-serif" font-size="13.5">Design a phishing email simulation</text>
  <text x="80" y="634" fill="#4b5563" font-family="'Plus Jakarta Sans', sans-serif" font-size="13.5">Interpret phishing simulation results</text>

  <!-- Signature -->
  <g transform="translate(950, 600)">
    <path d="M 20 30 Q 50 5 80 35 T 140 25" stroke="#1f2937" stroke-width="1.8" fill="none"/>
    <path d="M 50 15 L 75 45" stroke="#1f2937" stroke-width="1.5" fill="none"/>
    <text x="80" y="65" text-anchor="middle" fill="#1f2937" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700">Tom Brunskill</text>
    <text x="80" y="85" text-anchor="middle" fill="#6b7280" font-family="'Plus Jakarta Sans', sans-serif" font-size="13">Co-Founder of Forage</text>
  </g>

  <!-- Bottom Verification Footer -->
  <line x1="80" y1="740" x2="1120" y2="740" stroke="#e5e7eb" stroke-width="1"/>
  <text x="80" y="765" fill="#9ca3af" font-family="'Plus Jakarta Sans', sans-serif" font-size="12">Enrolment Verification Code CBh9BXJfnfHMWEz7J  |  User Verification Code 69eb6a0c7c2f6961f3a34b1f  |  Issued by Forage</text>
</svg>
"""

# 2. IIT Kharagpur COMPOSIT 2026
certs['iit-kgp-composit.svg'] = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 850" width="1200" height="850">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800&amp;family=Plus+Jakarta+Sans:wght@400;500;600;700&amp;display=swap');
    </style>
  </defs>

  <rect width="1200" height="850" fill="#ffffff"/>

  <!-- Corner Geometric Accents (Top Left & Bottom Right) -->
  <polygon points="0,0 220,0 0,350" fill="#981b1e"/>
  <polygon points="0,0 120,0 0,190" fill="#b91c1c"/>
  <polygon points="1200,850 980,850 1200,500" fill="#981b1e"/>
  <polygon points="1200,850 1080,850 1200,660" fill="#b91c1c"/>

  <!-- Fine corner border lines -->
  <g stroke="#981b1e" stroke-width="1.8" fill="none">
    <path d="M 30 750 L 30 820 L 100 820"/>
    <path d="M 45 765 L 45 805 L 85 805"/>
    <path d="M 60 780 L 60 790 L 70 790"/>
    <path d="M 1170 100 L 1170 30 L 1100 30"/>
    <path d="M 1155 85 L 1155 45 L 1115 45"/>
    <path d="M 1140 70 L 1140 60 L 1130 60"/>
  </g>

  <!-- Left Logo: COMPOSIT Gear -->
  <g transform="translate(200, 120)">
    <circle cx="50" cy="50" r="40" fill="none" stroke="#262626" stroke-width="6"/>
    <circle cx="50" cy="50" r="22" fill="#262626"/>
    <circle cx="50" cy="50" r="10" fill="#ffffff"/>
    <text x="50" y="115" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" letter-spacing="2" fill="#262626">COMPOSIT</text>
    <text x="50" y="128" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9" letter-spacing="1.5" fill="#737373">IIT KHARAGPUR</text>
  </g>

  <!-- Right Logo: SME Gear -->
  <g transform="translate(900, 120)">
    <circle cx="50" cy="50" r="42" fill="none" stroke="#262626" stroke-width="6" stroke-dasharray="10,4"/>
    <text x="50" y="58" text-anchor="middle" font-family="'Cinzel', serif" font-size="22" font-weight="800" fill="#262626">SME</text>
    <text x="50" y="70" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="700" fill="#262626">IIT KGP</text>
  </g>

  <!-- Center Heading -->
  <text x="600" y="180" text-anchor="middle" font-family="'Cinzel', serif" font-size="44" font-weight="800" fill="#171717" letter-spacing="4">CERTIFICATE</text>
  <text x="600" y="225" text-anchor="middle" font-family="'Cinzel', serif" font-size="24" font-weight="700" fill="#981b1e" letter-spacing="6">OF PARTICIPATION</text>

  <!-- Decorative Separator -->
  <g transform="translate(600, 260)">
    <line x1="-120" y1="0" x2="120" y2="0" stroke="#737373" stroke-width="1"/>
    <circle cx="0" cy="0" r="4" fill="#981b1e"/>
  </g>

  <!-- Certificate Body -->
  <text x="600" y="340" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="500" fill="#404040">This is to certify that</text>

  <text x="600" y="415" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="38" font-weight="800" fill="#0f172a">Praveen Kumar</text>
  <line x1="250" y1="435" x2="950" y2="435" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Narrative Description -->
  <text x="600" y="495" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="500" fill="#334155" line-height="1.8">
    <tspan x="600" dy="0">Was a <tspan font-weight="800" fill="#0f172a">Finalist</tspan> in the <tspan font-weight="800" fill="#0f172a">Ideathon</tspan> at the 31st Edition of COMPOSIT, organized by the</tspan>
    <tspan x="600" dy="32">Society of Metallurgical Engineers, IIT Kharagpur, held from 27th March to 29th March</tspan>
    <tspan x="600" dy="32">2026, demonstrating innovative thinking and problem-solving skills.</tspan>
  </text>

  <!-- Signatures -->
  <!-- Left: Prof. Sankha Mukherjee -->
  <g transform="translate(360, 670)">
    <path d="M -50 20 Q -20 -10 20 20 T 60 15" stroke="#0f172a" stroke-width="2" fill="none"/>
    <line x1="-90" y1="35" x2="90" y2="35" stroke="#94a3b8" stroke-width="1"/>
    <text x="0" y="58" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" fill="#0f172a">Prof. Sankha Mukherjee</text>
    <text x="0" y="78" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#64748b">Faculty Advisor,</text>
    <text x="0" y="94" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#64748b">Society of Metallurgical Engineers,</text>
    <text x="0" y="110" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#64748b">IIT Kharagpur.</text>
  </g>

  <!-- Right: Prof. Amlan Dutta -->
  <g transform="translate(840, 670)">
    <path d="M -40 25 Q -10 -5 25 25 T 50 15" stroke="#0f172a" stroke-width="2" fill="none"/>
    <line x1="-90" y1="35" x2="90" y2="35" stroke="#94a3b8" stroke-width="1"/>
    <text x="0" y="58" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700" fill="#0f172a">Prof. Amlan Dutta</text>
    <text x="0" y="78" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#64748b">Faculty Advisor,</text>
    <text x="0" y="94" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#64748b">Society of Metallurgical Engineers,</text>
    <text x="0" y="110" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" fill="#64748b">IIT Kharagpur.</text>
  </g>
</svg>
"""

# 3. SEBI & NISM - Investor Awareness Test
certs['sebi-nism-investor-awareness.svg'] = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&amp;family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;display=swap');
    </style>
  </defs>

  <rect width="1200" height="800" fill="#ffffff"/>

  <!-- Forest Green Border -->
  <rect x="25" y="25" width="1150" height="750" fill="none" stroke="#165b4c" stroke-width="3" rx="4"/>
  <rect x="33" y="33" width="1134" height="734" fill="none" stroke="#165b4c" stroke-width="1" rx="2"/>

  <!-- Left Header: SEBI Logo -->
  <g transform="translate(100, 80)">
    <rect x="0" y="5" width="85" height="42" fill="#0c4a6e" rx="4"/>
    <text x="42" y="36" text-anchor="middle" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="26" font-weight="800" letter-spacing="2">SEBI</text>
    <text x="100" y="25" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700">भारतीय प्रतिभूति और विनिमय बोर्ड</text>
    <text x="100" y="44" fill="#475569" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="600">Securities and Exchange Board of India</text>
  </g>

  <!-- Divider between logos -->
  <line x1="570" y1="85" x2="570" y2="135" stroke="#cbd5e1" stroke-width="1.5"/>

  <!-- Right Header: NISM Logo -->
  <g transform="translate(600, 80)">
    <text x="0" y="38" fill="#165b4c" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" letter-spacing="1">NISM</text>
    <text x="120" y="25" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-size="13.5" font-weight="700">National Institute of</text>
    <text x="120" y="41" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-size="13.5" font-weight="700">Securities Markets</text>
    <text x="120" y="57" fill="#64748b" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5">A Capacity Building Initiative of SEBI</text>
  </g>

  <!-- Calligraphic Heading -->
  <text x="600" y="255" text-anchor="middle" font-family="'Alex Brush', cursive" font-size="62" fill="#165b4c">Certificate of Participation</text>

  <!-- Awarded to -->
  <text x="600" y="315" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" font-weight="500" fill="#334155">is awarded to</text>

  <!-- Candidate Name -->
  <text x="600" y="380" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="40" font-weight="800" fill="#0f172a">Praveen Kumar</text>

  <!-- Enrollment Number -->
  <text x="600" y="440" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="600" fill="#475569">Enrollment Number : <tspan font-weight="700" fill="#0f172a">NISM20260000378433-001</tspan></text>

  <!-- Purpose Text -->
  <text x="600" y="505" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="17" font-weight="500" fill="#475569">For Successfully Completing the</text>
  <text x="600" y="550" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="30" font-weight="800" fill="#0f4c3a">SEBI Investor Awareness Test</text>
  <text x="600" y="595" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="600" fill="#475569">on  <tspan font-weight="700" fill="#0f172a">March 02, 2026</tspan></text>

  <!-- Signatures -->
  <!-- Left: Shashikumar Valsakumar -->
  <g transform="translate(240, 675)">
    <path d="M -40 20 Q -10 -5 20 20 T 50 15" stroke="#165b4c" stroke-width="2" fill="none"/>
    <text x="0" y="42" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#0f172a">Shashikumar Valsakumar</text>
    <text x="0" y="58" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#64748b">Executive Director</text>
    <text x="0" y="72" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#64748b">Securities and Exchange Board of India</text>
  </g>

  <!-- Right: Yogita Jadhav -->
  <g transform="translate(960, 675)">
    <path d="M -30 20 Q 0 -10 30 20 T 60 15" stroke="#165b4c" stroke-width="2" fill="none"/>
    <text x="0" y="42" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="700" fill="#0f172a">Yogita Jadhav</text>
    <text x="0" y="58" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#64748b">Registrar</text>
    <text x="0" y="72" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" fill="#64748b">National Institute of Securities Markets</text>
  </g>
</svg>
"""

# 4. Physics Wallah - Campus Ambassador
certs['physicswallah-campus-ambassador.svg'] = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&amp;display=swap');
    </style>
  </defs>

  <rect width="1200" height="800" fill="#ffffff"/>

  <!-- Geometric Maroon Ribbon Background on Corners -->
  <polygon points="0,0 260,0 0,450" fill="#1e1e24"/>
  <polygon points="0,0 180,0 0,320" fill="#881326"/>
  <polygon points="1200,800 940,800 1200,350" fill="#1e1e24"/>
  <polygon points="1200,800 1020,800 1200,480" fill="#881326"/>

  <!-- Top Left: PW Brand -->
  <g transform="translate(270, 65)">
    <circle cx="35" cy="35" r="28" fill="#111827"/>
    <text x="35" y="43" text-anchor="middle" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="20" font-weight="900">PW</text>
    <text x="75" y="30" fill="#111827" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="900">PHYSICS</text>
    <text x="75" y="48" fill="#111827" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="900">WALLAH</text>
    <line x1="165" y1="15" x2="165" y2="55" stroke="#cbd5e1" stroke-width="1.5"/>
    <text x="180" y="43" fill="#111827" font-family="'Plus Jakarta Sans', sans-serif" font-size="22" font-weight="700">Ambassador</text>
  </g>

  <!-- Top Right: Reg No -->
  <text x="1100" y="80" text-anchor="end" fill="#64748b" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="600">Reg No: <tspan font-weight="700" fill="#111827">PW-CAP410</tspan></text>

  <!-- Title Banner -->
  <g transform="translate(600, 240)">
    <line x1="-380" y1="-45" x2="380" y2="-45" stroke="#e2e8f0" stroke-width="1"/>
    <text x="0" y="0" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="44" font-weight="900" fill="#991b1b" letter-spacing="1">CAMPUS AMBASSADOR CERTIFICATE</text>
    <line x1="-380" y1="25" x2="380" y2="25" stroke="#e2e8f0" stroke-width="1"/>
  </g>

  <!-- Proudly Presented To -->
  <text x="600" y="360" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="600" fill="#475569">Proudly Presented To:</text>

  <!-- Name -->
  <text x="600" y="435" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="48" font-weight="800" fill="#111827">praveen Kumar</text>
  <line x1="280" y1="460" x2="920" y2="460" stroke="#cbd5e1" stroke-width="1.5" stroke-dasharray="6,6"/>

  <!-- Recognition Text -->
  <text x="600" y="525" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="500" fill="#334155">
    <tspan x="600" dy="0">This Certificate recognizes the <tspan font-weight="700" fill="#111827">PW Campus Ambassador's</tspan></tspan>
    <tspan x="600" dy="28">leadership skills and their ability to guide and inspire their peers.</tspan>
  </text>

  <!-- Signatures / Footer -->
  <g transform="translate(360, 680)">
    <line x1="-90" y1="0" x2="90" y2="0" stroke="#111827" stroke-width="1.5"/>
    <text x="0" y="24" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="800" fill="#111827">MR. BALAJEE SINGH</text>
    <text x="0" y="42" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#64748b">HEAD OF PROJECT</text>
  </g>

  <g transform="translate(840, 680)">
    <line x1="-90" y1="0" x2="90" y2="0" stroke="#111827" stroke-width="1.5"/>
    <text x="0" y="24" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="800" fill="#111827">10 November 2025</text>
    <text x="0" y="42" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="600" fill="#64748b">DATE</text>
  </g>
</svg>
"""

# 5. PNC Bank - Financial Services & Banking
certs['pnc-bank-financial-services.svg'] = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 800" width="1200" height="800">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;display=swap');
    </style>
  </defs>

  <rect width="1200" height="800" fill="#ffffff"/>

  <!-- PNC Bank Logo -->
  <g transform="translate(80, 75)">
    <circle cx="28" cy="28" r="24" fill="#ff5e00"/>
    <polygon points="20,18 38,28 20,38" fill="#ffffff"/>
    <text x="65" y="37" font-family="'Plus Jakarta Sans', sans-serif" font-size="28" font-weight="800" fill="#002d62">PNC BANK</text>
  </g>

  <!-- Top Right Forage Header Ribbon -->
  <path d="M 850 0 L 1200 0 L 1200 210 L 970 210 Z" fill="#e11938"/>
  <g transform="translate(900, 45)">
    <path d="M 15 5 L 35 25 L 20 40 L 40 45 L 25 60 L 5 40 Z" fill="#ffffff"/>
    <text x="50" y="42" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" letter-spacing="-0.5">Forage</text>
    <text x="40" y="85" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="13.5" font-weight="600" opacity="0.95">Inspiring and</text>
    <text x="40" y="103" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="13.5" font-weight="600" opacity="0.95">empowering</text>
    <text x="40" y="121" fill="#ffffff" font-family="'Plus Jakarta Sans', sans-serif" font-size="13.5" font-weight="600" opacity="0.95">future professionals</text>
  </g>

  <!-- Candidate Name -->
  <text x="80" y="325" fill="#111827" font-family="'Plus Jakarta Sans', sans-serif" font-size="44" font-weight="800">Praveen Kumar</text>

  <!-- Course Title -->
  <text x="80" y="380" fill="#1f2937" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800">Overview of Financial Services and Banking</text>
  <text x="80" y="420" fill="#1f2937" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800">Job Simulation</text>

  <!-- Certificate Type -->
  <text x="80" y="475" fill="#4b5563" font-family="'Plus Jakarta Sans', sans-serif" font-size="24" font-weight="500">Certificate of Completion</text>
  <text x="80" y="508" fill="#6b7280" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" font-weight="500">April 24th, 2026</text>

  <!-- Tasks Section -->
  <text x="80" y="595" fill="#374151" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="600">Over the period of April 2026, Praveen Kumar has completed practical tasks in:</text>
  <text x="80" y="626" fill="#4b5563" font-family="'Plus Jakarta Sans', sans-serif" font-size="13.5">Exploring the financial services industry</text>
  <text x="80" y="648" fill="#4b5563" font-family="'Plus Jakarta Sans', sans-serif" font-size="13.5">Banking in focus</text>

  <!-- Signature -->
  <g transform="translate(950, 600)">
    <path d="M 20 30 Q 50 5 80 35 T 140 25" stroke="#1f2937" stroke-width="1.8" fill="none"/>
    <path d="M 50 15 L 75 45" stroke="#1f2937" stroke-width="1.5" fill="none"/>
    <text x="80" y="65" text-anchor="middle" fill="#1f2937" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="700">Tom Brunskill</text>
    <text x="80" y="85" text-anchor="middle" fill="#6b7280" font-family="'Plus Jakarta Sans', sans-serif" font-size="13">Co-Founder of Forage</text>
  </g>

  <!-- Bottom Verification Footer -->
  <line x1="80" y1="740" x2="1120" y2="740" stroke="#e5e7eb" stroke-width="1"/>
  <text x="80" y="765" fill="#9ca3af" font-family="'Plus Jakarta Sans', sans-serif" font-size="12">Enrolment Verification Code WLeRHqv8v9YfHDJbY  |  User Verification Code 69eb6a0c7c2f6961f3a34b1f  |  Issued by Forage</text>
</svg>
"""

# 6. Vodafone Idea Foundation (VI) & VOIS - Data Visualization
certs['vi-edunet-data-visualization.svg'] = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 840" width="1200" height="840">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&amp;family=Plus+Jakarta+Sans:wght@400;500;600;700;800&amp;display=swap');
    </style>
  </defs>

  <rect width="1200" height="840" fill="#ffffff"/>

  <!-- Red Border Frame -->
  <rect x="25" y="25" width="1150" height="790" fill="none" stroke="#e11938" stroke-width="10"/>
  <rect x="36" y="36" width="1128" height="768" fill="none" stroke="#e5e7eb" stroke-width="1.5"/>

  <!-- Top Logos Row -->
  <!-- Left: VI Vodafone Idea Foundation -->
  <g transform="translate(100, 75)">
    <text x="0" y="45" fill="#e11938" font-family="'Plus Jakarta Sans', sans-serif" font-size="44" font-weight="900" letter-spacing="-1">VI</text>
    <circle cx="56" cy="48" r="6" fill="#f59e0b"/>
    <text x="0" y="78" fill="#e11938" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700">Vodafone Idea Foundation</text>
  </g>

  <!-- Center: VOIS -->
  <text x="600" y="115" text-anchor="middle" fill="#0f172a" font-family="'Plus Jakarta Sans', sans-serif" font-size="48" font-weight="800" letter-spacing="4">VOIS</text>

  <!-- Right: Edunet Foundation -->
  <g transform="translate(900, 75)">
    <text x="0" y="45" fill="#1e3a8a" font-family="'Plus Jakarta Sans', sans-serif" font-size="40" font-weight="800">edunet</text>
    <circle cx="145" cy="18" r="4" fill="#f97316"/>
    <text x="75" y="65" fill="#64748b" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="600">foundation</text>
  </g>

  <!-- Certificate Title -->
  <text x="600" y="270" text-anchor="middle" font-family="'Cinzel', serif" font-size="44" font-weight="700" fill="#1e293b">Certificate of Completion</text>

  <!-- Presented to -->
  <text x="600" y="335" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="500" fill="#64748b">Presented to</text>

  <!-- Candidate Name -->
  <text x="600" y="405" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="38" font-weight="800" fill="#e11938">Praveen Kumar</text>
  <line x1="320" y1="430" x2="880" y2="430" stroke="#e11938" stroke-width="3"/>

  <!-- Completion Details -->
  <text x="600" y="485" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="19" font-weight="500" fill="#334155">For the successful completion of</text>

  <text x="600" y="545" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="#0f172a">Data Visualization</text>

  <text x="600" y="595" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="16" font-weight="600" fill="#475569">Issued on  <tspan font-weight="700" fill="#0f172a">August 14, 2026</tspan></text>

  <text x="600" y="635" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="15" font-weight="600" fill="#64748b">ID: <tspan font-weight="700" fill="#0f172a">VFLMS26_163709</tspan></text>

  <!-- Bottom Left: QR Code Mockup -->
  <g transform="translate(100, 640)">
    <rect width="110" height="110" fill="#ffffff" stroke="#1e293b" stroke-width="2"/>
    <!-- QR Finder patterns -->
    <rect x="10" y="10" width="30" height="30" fill="#1e293b"/>
    <rect x="16" y="16" width="18" height="18" fill="#ffffff"/>
    <rect x="20" y="20" width="10" height="10" fill="#1e293b"/>

    <rect x="70" y="10" width="30" height="30" fill="#1e293b"/>
    <rect x="76" y="16" width="18" height="18" fill="#ffffff"/>
    <rect x="80" y="20" width="10" height="10" fill="#1e293b"/>

    <rect x="10" y="70" width="30" height="30" fill="#1e293b"/>
    <rect x="16" y="76" width="18" height="18" fill="#ffffff"/>
    <rect x="20" y="80" width="10" height="10" fill="#1e293b"/>

    <!-- QR Data points -->
    <rect x="48" y="15" width="6" height="6" fill="#1e293b"/>
    <rect x="58" y="25" width="6" height="6" fill="#1e293b"/>
    <rect x="48" y="35" width="6" height="6" fill="#1e293b"/>
    <rect x="50" y="55" width="8" height="8" fill="#1e293b"/>
    <rect x="70" y="65" width="6" height="6" fill="#1e293b"/>
    <rect x="85" y="75" width="8" height="8" fill="#1e293b"/>
    <rect x="75" y="85" width="6" height="6" fill="#1e293b"/>
  </g>

  <!-- Bottom Right: Rosette Course Completion Badge -->
  <g transform="translate(1000, 680)">
    <!-- Rosette ribbon tails -->
    <polygon points="-25,45 -35,80 -15,70 5,80 -5,45" fill="#e11938"/>
    <polygon points="5,45 -5,80 15,70 35,80 25,45" fill="#e11938"/>
    <!-- Rosette scalloped seal -->
    <circle cx="0" cy="15" r="50" fill="#e11938"/>
    <circle cx="0" cy="15" r="42" fill="none" stroke="#ffffff" stroke-width="2" stroke-dasharray="4,2"/>
    <circle cx="0" cy="15" r="38" fill="#ffffff"/>
    <text x="0" y="5" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="800" fill="#e11938">COURSE</text>
    <text x="0" y="18" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="900" fill="#e11938">★</text>
    <text x="0" y="28" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="800" fill="#e11938">COMPLETION</text>
  </g>
</svg>
"""

os.makedirs('public/images/work', exist_ok=True)
for filename, content in certs.items():
    path = os.path.join('public/images/work', filename)
    with open(path, 'w') as f:
        f.write(content)
    print(f"Created {path}")

