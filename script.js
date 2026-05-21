// ======================================
// PORTFOLIO WEBSITE SYSTEM CORE
// ======================================

console.log("Smitha Angeline Solomon - Systems Core Loaded");

// ======================================
// 1. DYNAMIC DATABASE CORE (LOCALSTORAGE)
// ======================================

function initDatabase() {
  // 1.1 Projects Table
  if (!localStorage.getItem('portfolio_projects')) {
    const defaultProjects = [
      {
        title: "Smart Cuffless Blood Pressure Estimator",
        desc: "Biomedical sensing system using ECG and PPG signals for Pulse Transit Time based blood pressure estimation. Built with precision hardware filters for biosignal integrity.",
        tech: "Arduino, MAX30102, AD8232, C++",
        github: "https://github.com/Smitha-Angeline2000/ECG-Monitor",
        category: "Biomedical",
        year: "2025",
        image: "images/project1.jpeg"
      },
      {
        title: "Digital Twin of a Refrigerator with a Continuous Monitoring Dashboard",
        desc: "Digital twin application with firebase database and AI interference. Provides automated diagnostics, predictive maintenance alerts, and ambient climate tracking.",
        tech: "HTML, CSS, JavaScript, Firebase, OpenAI API, Electronics",
        github: "https://github.com/Smitha-Angeline2000/fridge-digital-twin",
        category: "IoT / Embedded",
        year: "2025",
        image: "images/project2.jpg"
      },
      {
        title: "Remote Photoplethysmography System using a Webcam",
        desc: "Contactless heart rate monitoring system using a webcam for remote photoplethysmography signal acquisition and processing. Implements custom color-channel filtering and peak detection.",
        tech: "Python, OpenCV, Signal Processing, NumPy",
        github: "https://github.com/Smitha-Angeline2000/r_ppg",
        category: "Signal Processing",
        year: "2025",
        image: "images/project3.jpeg"
      },
      {
        title: "Embedded Systems Mini Projects",
        desc: "Hardware-focused embedded systems experiments and implementation projects, including sensor calibration protocols and serial interface handlers.",
        tech: "Arduino, C Programming, Proteus, SPI/I2C",
        github: "https://github.com/Smitha-Angeline2000/embedded-systems",
        category: "Embedded Systems",
        year: "2026",
        image: "images/project4.png"
      }
    ];
    localStorage.setItem('portfolio_projects', JSON.stringify(defaultProjects));
  }
  
  // 1.2 Competitions Table
  if (!localStorage.getItem('portfolio_competitions')) {
    const defaultCompetitions = [
      {
        title: "Java Hackathon by SENSE Department",
        year: "2026",
        month: "April",
        achievement: "Top 20",
        desc: "Description placeholder. Edit this details in the admin portal.",
        image: "images/competition.jpg"
      },
      {
        title: "Aerion Hackathon",
        year: "2026",
        month: "March",
        achievement: "Represented VIT",
        desc: "Description placeholder. Edit this details in the admin portal.",
        image: "images/competition.jpg"
      },
      {
        title: "InnoHack",
        year: "2026",
        month: "January",
        achievement: "Made it to round 2",
        desc: "Description placeholder. Edit this details in the admin portal.",
        image: "images/competition.jpg"
      },
      {
        title: "Sense Hack 2025",
        year: "2025",
        month: "December",
        achievement: "Made it to round 2",
        desc: "Description placeholder. Edit this details in the admin portal.",
        image: "images/competition.jpg"
      },
      {
        title: "404: Cure not Found",
        year: "2025",
        month: "September",
        achievement: "Won the Ideathon",
        desc: "Description placeholder. Edit this details in the admin portal.",
        image: "images/competition.jpg"
      },
      {
        title: "Think Her Series Ideathon",
        year: "2025",
        month: "September",
        achievement: "Won under She Cares Track",
        desc: "Description placeholder. Edit this details in the admin portal.",
        image: "images/competition.jpg"
      },
      {
        title: "IAC Hackathon",
        year: "2025",
        month: "September",
        achievement: "Won 2nd",
        desc: "Description placeholder. Edit this details in the admin portal.",
        image: "images/competition.jpg"
      }
    ];
    localStorage.setItem('portfolio_competitions', JSON.stringify(defaultCompetitions));
  }

  // 1.3 Profile & Bio Details Table
  if (!localStorage.getItem('portfolio_profile')) {
    const defaultProfile = {
      name: "Smitha Angeline Solomon",
      role: "Biomedical Engineering Student",
      bio_hero: "Electronics and Communication Engineering student specializing in Biomedical Engineering with interests in embedded systems, medical devices, biosignal processing, healthcare technology, and intelligent biomedical systems.",
      profile_image: "images/profile.jpg",
      resume_pdf: "assets/resume.pdf",
      bio_summary_title: "Engineering at the Intersection of Electronics and Healthcare",
      bio_summary_1: "I am currently pursuing a B.Tech in Electronics and Communication Engineering with a specialization in Biomedical Engineering at VIT. My interests lie in embedded systems, biomedical instrumentation, healthcare technology, biosignal processing, and intelligent medical systems.",
      bio_summary_2: "I am actively building strong foundations in electronics, programming, digital systems, hardware-software integration, and interdisciplinary engineering while exploring projects that combine technology with real-world healthcare applications.",
      bio_about_1: "I am currently pursuing a B.Tech in Electronics and Communication Engineering with a specialization in Biomedical Engineering at Vellore Institute of Technology (VIT). My academic and research pathway lies at the precise intersection of advanced hardware development and intelligent healthcare solutions.",
      bio_about_2: "With a deep interest in microcontroller systems, sensor physics, and biomedical instrumentation, I build practical electronics that can acquire, filter, and process physiological signals like ECG and PPG in real-time. My project portfolio highlights my technical focus on cuffless blood pressure estimation systems, continuous climate diagnostic IoT digital twins, and contact-free heart rate webcams using advanced OpenCV signal analysis.",
      bio_about_3: "Beyond technical coding and hardware debugging, I enjoy collaborating in dynamic engineering environments. Participating in national hackathons and ideathons has allowed me to apply rapid prototyping systems to solve practical clinical challenges, earning high achievements under the \"She Cares\" track and multiple clinical design milestones.",
      competencies: "Biosignal Acquisition, Embedded Systems, Microcontroller Interfacing, OpenCV & NumPy Processing",
      stats_cgpa: "8.30",
      stats_class_12: "80.2%",
      stats_class_10: "90.6%"
    };
    localStorage.setItem('portfolio_profile', JSON.stringify(defaultProfile));
  }

  // 1.4 Dynamic Skills Table
  if (!localStorage.getItem('portfolio_skills')) {
    const defaultSkills = [
      {
        category: "Programming",
        type: "list",
        items: ["Python", "C Programming", "Verilog HDL", "MATLAB", "Embedded C", "Arduino Programming", "HTML5 & CSS3", "JavaScript (ES6+)"]
      },
      {
        category: "Hardware & Electronics",
        type: "list",
        items: ["Embedded Systems", "Arduino Platforms", "Sensor Integration", "Circuit Prototyping", "Digital Electronics", "PCB Design (KiCAD)", "UART/SPI/I2C Protocols", "ece specialist", "adept with microcontrollers", "Firmware Design", "Device Prototyping"]
      },
      {
        category: "Biomedical Engineering",
        type: "list",
        items: ["Biomedical Sensors", "Biosignal Acquisition", "Operational Amplifiers & Filters", "Pulse Transit Time Concepts", "Healthcare Technology", "Biomedical Instrumentation", "Clinical Safety Standards (IEC 60601)", "biomed specialist", "Wearable Biosensors", "Analog Front-Ends", "ECG/PPG Calibration"]
      },
      {
        category: "Technical Tools",
        type: "list",
        items: ["LabVIEW", "Git & GitHub Version Control", "Proteus Design Suite", "VS Code", "Arduino IDE", "MATLAB / Simulink"]
      },
      {
        category: "Engineering Skills",
        type: "list",
        items: ["Problem Solving", "Technical Documentation", "Project-Based Learning", "Research-Oriented Thinking", "System-Level Analysis", "Rapid Prototyping", "Design of Experiments", "Can do any work given", "Mixed-Signal Processing"]
      },
      {
        category: "Areas of Growth",
        type: "list",
        items: ["Embedded AI Systems", "Advanced Biomedical Devices", "Signal Processing Algorithms", "Healthcare Automation", "Biosensors & Bio-nanotechnology", "Advanced Embedded RTOS", "3D Printing & CAD Design"]
      },
      {
        category: "Software Engineering & Architecture",
        type: "list",
        items: ["Object-Oriented Design [Edit Me]", "MVC Frameworks [Edit Me]", "API Design & Integration [Edit Me]", "Unit Testing [Edit Me]", "Performance Optimization [Edit Me]"]
      },
      {
        category: "Embedded Systems & IoT Projects",
        type: "list",
        items: ["Real-time Operating Systems (RTOS) [Edit Me]", "Low-Power Sensing Modes [Edit Me]", "MQTT / HTTP Protocols [Edit Me]", "ESP32 platforms [Edit Me]", "Device Drivers Development [Edit Me]"]
      },
      {
        category: "Practical Learning",
        type: "text",
        desc: "Focused on learning through hands-on projects, rigorous physical experimentation, active troubleshooting, and real-world engineering application."
      },
      {
        category: "Interdisciplinary Engineering",
        type: "text",
        desc: "Deeply interested in bridging the gap between hardware, software, biomedical engineering, and human-centered clinical systems."
      },
      {
        category: "Continuous Improvement",
        type: "text",
        desc: "Consistently working toward stronger technical execution depth, algorithmic problem-solving capabilities, and hardware-software system integration."
      },
      {
        category: "Innovation & Prototyping",
        type: "text",
        desc: "Believing in bridging the gap between theoretical calculations and real physical circuit behaviors through continuous prototyping and iteration."
      },
      {
        category: "Future Healthcare Prototyping Focus [Edit Me]",
        type: "text",
        desc: "Actively studying non-invasive diagnostics, smart optical glucose monitors, and low-power telemetry modules for ambulatory environments. [Click edit in admin to change this text]"
      },
      {
        category: "Open Source Hardware Collaboration [Edit Me]",
        type: "text",
        desc: "Committed to building accessible, reproducible medical instruments using open design principles and collaborative repository standards. [Click edit in admin to change this text]"
      }
    ];
    localStorage.setItem('portfolio_skills', JSON.stringify(defaultSkills));
  }

  // 1.5 Dynamic Extracurriculars Table
  if (!localStorage.getItem('portfolio_extracurriculars')) {
    const defaultExtracurriculars = [
      {
        section: "leadership",
        title: "Leadership & Collaboration",
        desc: "Motivated by leadership opportunities involving technical collaboration, engineering teamwork, project execution, and student-driven innovation initiatives."
      },
      {
        section: "leadership",
        title: "Technical Communities",
        desc: "Actively engaging in academic forums, technical clubs, biomedical innovation spaces, and collaborative coding peer groups."
      },
      {
        section: "leadership",
        title: "Hackathon Team Captaincy",
        desc: "Led interdisciplinary student teams at national-level hackathons, organizing tasks, setting timelines, and coordinating software/hardware integration under strict deadlines."
      },
      {
        section: "leadership",
        title: "Team captaining",
        desc: "Led interdisciplinary sports and technical teams, fostering cooperation, setting performance benchmarks, and driving groups toward common goals."
      },
      {
        section: "leadership",
        title: "JC for 6 clubs",
        desc: "Served as Junior Coordinator across six active university clubs, balancing logistics, managing student engagement, and coordinating across departments."
      },
      {
        section: "leadership",
        title: "Lead teams",
        desc: "Managed diverse teams in academic and hackathon settings, matching tasks to individual developer strengths and resolving technical bottlenecks."
      },
      {
        section: "leadership",
        title: "Lead projects",
        desc: "Directed multiple engineering and software projects from requirements definition to hardware soldering and final dashboard deployment."
      },
      {
        section: "leadership",
        title: "VIT Department Volunteer",
        desc: "Assisting SENSE department faculties during technical events, coordinating participant entries, and managing hardware equipment logistics."
      },
      {
        section: "leadership",
        title: "Biomedical Engineering Club Representative [Edit Me]",
        desc: "Organizing student workshops, guest lectures, and lab demonstrations to raise awareness of emerging medical imaging and device standards. [Edit this in admin]"
      },
      {
        section: "leadership",
        title: "Peer Review Panel Lead [Edit Me]",
        desc: "Moderating group design reviews for senior capstone systems and hardware layout blueprints within student engineering cohorts. [Edit this in admin]"
      },
      {
        section: "communication",
        title: "Technical Communication",
        desc: "Articulating complex engineering ideas clearly through rigorous documentation, visual slide presentations, and collaborative technical discussions."
      },
      {
        section: "communication",
        title: "Hosted Events",
        desc: "Organized and hosted major campus events, technical symposiums, and guest lectures, managing audience engagement and speaker relations."
      },
      {
        section: "communication",
        title: "Did documentation",
        desc: "Created comprehensive technical documentation, laboratory logs, and project wikis to ensure reproducible research and code readability."
      },
      {
        section: "communication",
        title: "Peer Mentorship",
        desc: "Enjoys helping fellow classmates debug Arduino code, optimize circuit layout designs, and explaining biomedical concepts during collaborative study reviews."
      },
      {
        section: "communication",
        title: "GitHub Documentation Writing",
        desc: "Drafting clean, structured READMEs and documentation for ECE projects to make complex biosignal systems accessible and reproducible for fellow student developers."
      },
      {
        section: "communication",
        title: "Scientific Blog Contributor [Edit Me]",
        desc: "Drafting educational posts explaining physiological measurements, analog filter behaviors, and operational amplifier design concepts. [Edit this in admin]"
      },
      {
        section: "communication",
        title: "Interactive Project Presentations [Edit Me]",
        desc: "Delivering dynamic, hardware-in-the-loop demonstrations at university open-houses and technical symposiums to diverse public audiences. [Edit this in admin]"
      },
      {
        section: "interests",
        title: "Biomedical & Healthcare Innovation",
        desc: "Consistently exploring the cutting-edge intersection of medical sciences, analog hardware, and intelligent software diagnostic systems."
      },
      {
        section: "interests",
        title: "DIY Electronics & Soldering",
        desc: "Building small electronic gadgets, soldering custom prototyping boards, and exploring micro-embedded systems in free time."
      },
      {
        section: "interests",
        title: "Scientific Literature Tracking",
        desc: "Reading recent IEEE Transactions publications on wearable health monitoring devices, cuffless BP estimation methodologies, and non-invasive sensors."
      },
      {
        section: "interests",
        title: "3D Printing & Structural Prototyping [Edit Me]",
        desc: "Designing and printing custom mechanical enclosures, sensor mounts, and ergonomic chassis structures for wearable biosensors in free time. [Edit this in admin]"
      },
      {
        section: "interests",
        title: "Biomedical Ethics & Patient Privacy [Edit Me]",
        desc: "Studying HIPAA regulations, medical data encryption methods, and biosafety rules governing clinical trial designs. [Edit this in admin]"
      },
      {
        section: "interests",
        title: "House Captain - during school",
        desc: "Served as House Captain during secondary school, coordinating athletic events, student assemblies, and inter-house scholastic competitions."
      }
    ];
    localStorage.setItem('portfolio_extracurriculars', JSON.stringify(defaultExtracurriculars));
  }

  // 1.6 Dynamic Experiences Table (for about.html)
  if (!localStorage.getItem('portfolio_experiences')) {
    const defaultExperiences = [
      {
        title: "Biomedical Hardware Developer",
        subtitle: "VIT ECE Projects",
        duration: "2025 - Present",
        desc: "Designed and debugged cuffless blood pressure systems integrating MAX30102 PPG and AD8232 ECG analog front-ends. Programmed microcontrollers in C++ for serial data transmission, active analog filtering calibration, and dynamic pulse calculation.",
        points: "Implemented hardware-level bandpass filters to isolate physiological frequency bands.|Validated calculations utilizing open-source scientific Python packages (NumPy, SciPy)."
      },
      {
        title: "IoT Systems Prototyper",
        subtitle: "VIT ECE Projects",
        duration: "2025",
        desc: "Created and deployed an environmental digital twin of a refrigerator with smart sensors and a remote dashboard. Linked the embedded system to Firebase Realtime Database and integrated OpenAI diagnostics.",
        points: "Connected HTML5 frontend dashboards with dynamic database listeners.|Presented functional IoT prototypes to engineering faculties at VIT, receiving positive technical evaluations."
      },
      {
        title: "Clinical Innovation Leader",
        subtitle: "National Level Events",
        duration: "2025 - Present",
        desc: "Participated in 7 national-level hackathons and ideathons, leading hardware-design subdivisions to research and brainstorm healthcare engineering requirements.",
        points: "Won 2nd place in the IAC Hackathon (September 2025).|Earned track honors in \"She Cares\" under the Think Her Series Ideathon (September 2025)."
      }
    ];
    localStorage.setItem('portfolio_experiences', JSON.stringify(defaultExperiences));
  }

  // 1.7 Dynamic Research Focus & VIT Coursework Tables (for academics.html)
  if (!localStorage.getItem('portfolio_research_focus')) {
    const defaultResearch = [
      {
        title: "Embedded Diagnostics",
        icon: "fa-solid fa-microchip",
        desc: "Exploring ultra-low-power healthcare sensors, non-invasive bio-interfaces, and predictive maintenance diagnostics models for active clinical environments."
      },
      {
        title: "Biosignal Calibration",
        icon: "fa-solid fa-wave-square",
        desc: "Investigating automated calibrations of digital filters and real-time noise attenuation protocols in high-noise, contactless sensing conditions."
      },
      {
        title: "Patient Safety Design",
        icon: "fa-solid fa-chart-line",
        desc: "Focusing on galvanic isolation, safety architectures for high-gain medical amplifiers, and regulatory specifications for wearable medical telemetry."
      }
    ];
    localStorage.setItem('portfolio_research_focus', JSON.stringify(defaultResearch));
  }

  if (!localStorage.getItem('portfolio_coursework')) {
    const defaultCoursework = [
      {
        title: "Biosignal Processing",
        icon: "fa-solid fa-wave-square",
        desc: "Study of continuous-time EKG, EMG, and EEG filtering, frequency spectrum analysis, and baseline wander correction algorithms."
      },
      {
        title: "Microcontroller Interfacing",
        icon: "fa-solid fa-microchip",
        desc: "Practical design with Arduino and STM boards, assembly/C programming, SPI, I2C, and serial transmission protocols."
      },
      {
        title: "Medical Instrumentation",
        icon: "fa-solid fa-stethoscope",
        desc: "Analysis of instrumentation amplifiers, active isolation circuits, biosensor transducers, and clinical safety standards."
      },
      {
        title: "Human Anatomy",
        icon: "fa-solid fa-heart-pulse",
        desc: "Introductory review of cardiovascular, nervous, and muscle cell electrophysiology, and organ function dynamics."
      }
    ];
    localStorage.setItem('portfolio_coursework', JSON.stringify(defaultCoursework));
  }

  // 1.8 Dynamic Academics Ratings (for academics.html circular gauges)
  if (!localStorage.getItem('portfolio_academics')) {
    const defaultAcademics = [
      {
        category: "COLLEGE (VIT)",
        title: "B.Tech in ECE",
        desc: "Pursuing specialization in Biomedical Engineering. Built systems for biosignal acquisition and hardware diagnostic models.",
        score: "8.30",
        max: "10",
        label: "/ 10 CGPA",
        color: "#22d3ee"
      },
      {
        category: "HIGHER SECONDARY",
        title: "Class 12th Board",
        desc: "Graduated with a strong academic background in Physics, Chemistry, Mathematics, and Biology (PCMB).",
        score: "80.2",
        max: "100",
        label: "% Overall PCMB",
        color: "#3b82f6"
      },
      {
        category: "SECONDARY EDUCATION",
        title: "Class 10th Board",
        desc: "Built foundational critical thinking, mathematical competencies, and academic discipline during secondary school.",
        score: "90.6",
        max: "100",
        label: "% High Honors",
        color: "#a78bfa"
      }
    ];
    localStorage.setItem('portfolio_academics', JSON.stringify(defaultAcademics));
  }

  // 1.8 Safe database migrations for newly added placeholders
  if (localStorage.getItem('portfolio_skills')) {
    try {
      const currentSkills = JSON.parse(localStorage.getItem('portfolio_skills'));
      
      const reqCategories = [
        {
          category: "Software Engineering & Architecture",
          type: "list",
          items: ["Object-Oriented Design [Edit Me]", "MVC Frameworks [Edit Me]", "API Design & Integration [Edit Me]", "Unit Testing [Edit Me]", "Performance Optimization [Edit Me]"]
        },
        {
          category: "Embedded Systems & IoT Projects",
          type: "list",
          items: ["Real-time Operating Systems (RTOS) [Edit Me]", "Low-Power Sensing Modes [Edit Me]", "MQTT / HTTP Protocols [Edit Me]", "ESP32 platforms [Edit Me]", "Device Drivers Development [Edit Me]"]
        },
        {
          category: "Future Healthcare Prototyping Focus [Edit Me]",
          type: "text",
          desc: "Actively studying non-invasive diagnostics, smart optical glucose monitors, and low-power telemetry modules for ambulatory environments. [Click edit in admin to change this text]"
        },
        {
          category: "Open Source Hardware Collaboration [Edit Me]",
          type: "text",
          desc: "Committed to building accessible, reproducible medical instruments using open design principles and collaborative repository standards. [Click edit in admin to change this text]"
        }
      ];

      reqCategories.forEach(req => {
        if (!currentSkills.some(s => s.category === req.category)) {
          currentSkills.push(req);
        }
      });

      // Merge new specific items into existing lists
      const biomedGroup = currentSkills.find(s => s.category === "Biomedical Engineering");
      if (biomedGroup && biomedGroup.items) {
        const newItems = ["biomed specialist", "Wearable Biosensors", "Analog Front-Ends", "ECG/PPG Calibration"];
        newItems.forEach(item => {
          if (!biomedGroup.items.includes(item)) biomedGroup.items.push(item);
        });
      }

      const hwGroup = currentSkills.find(s => s.category === "Hardware & Electronics");
      if (hwGroup && hwGroup.items) {
        const newItems = ["ece specialist", "adept with microcontrollers", "Firmware Design", "Device Prototyping"];
        newItems.forEach(item => {
          if (!hwGroup.items.includes(item)) hwGroup.items.push(item);
        });
      }

      const engGroup = currentSkills.find(s => s.category === "Engineering Skills");
      if (engGroup && engGroup.items) {
        const newItems = ["Can do any work given", "Mixed-Signal Processing"];
        newItems.forEach(item => {
          if (!engGroup.items.includes(item)) engGroup.items.push(item);
        });
      }

      localStorage.setItem('portfolio_skills', JSON.stringify(currentSkills));
    } catch(e) {}
  }

  if (localStorage.getItem('portfolio_extracurriculars')) {
    try {
      const currentEC = JSON.parse(localStorage.getItem('portfolio_extracurriculars'));
      
      const newItems = [
        {
          section: "leadership",
          title: "Biomedical Engineering Club Representative [Edit Me]",
          desc: "Organizing student workshops, guest lectures, and lab demonstrations to raise awareness of emerging medical imaging and device standards. [Edit this in admin]"
        },
        {
          section: "leadership",
          title: "Peer Review Panel Lead [Edit Me]",
          desc: "Moderating group design reviews for senior capstone systems and hardware layout blueprints within student engineering cohorts. [Edit this in admin]"
        },
        {
          section: "leadership",
          title: "Team captaining",
          desc: "Led interdisciplinary sports and technical teams, fostering cooperation, setting performance benchmarks, and driving groups toward common goals."
        },
        {
          section: "leadership",
          title: "JC for 6 clubs",
          desc: "Served as Junior Coordinator across six active university clubs, balancing logistics, managing student engagement, and coordinating across departments."
        },
        {
          section: "leadership",
          title: "Lead teams",
          desc: "Managed diverse teams in academic and hackathon settings, matching tasks to individual developer strengths and resolving technical bottlenecks."
        },
        {
          section: "leadership",
          title: "Lead projects",
          desc: "Directed multiple engineering and software projects from requirements definition to hardware soldering and final dashboard deployment."
        },
        {
          section: "communication",
          title: "Scientific Blog Contributor [Edit Me]",
          desc: "Drafting educational posts explaining physiological measurements, analog filter behaviors, and operational amplifier design concepts. [Edit this in admin]"
        },
        {
          section: "communication",
          title: "Interactive Project Presentations [Edit Me]",
          desc: "Delivering dynamic, hardware-in-the-loop demonstrations at university open-houses and technical symposiums to diverse public audiences. [Edit this in admin]"
        },
        {
          section: "communication",
          title: "Hosted Events",
          desc: "Organized and hosted major campus events, technical symposiums, and guest lectures, managing audience engagement and speaker relations."
        },
        {
          section: "communication",
          title: "Did documentation",
          desc: "Created comprehensive technical documentation, laboratory logs, and project wikis to ensure reproducible research and code readability."
        },
        {
          section: "interests",
          title: "3D Printing & Structural Prototyping [Edit Me]",
          desc: "Designing and printing custom mechanical enclosures, sensor mounts, and ergonomic chassis structures for wearable biosensors in free time. [Edit this in admin]"
        },
        {
          section: "interests",
          title: "Biomedical Ethics & Patient Privacy [Edit Me]",
          desc: "Studying HIPAA regulations, medical data encryption methods, and biosafety rules governing clinical trial designs. [Edit this in admin]"
        },
        {
          section: "interests",
          title: "House Captain - during school",
          desc: "Served as House Captain during secondary school, coordinating athletic events, student assemblies, and inter-house scholastic competitions."
        }
      ];

      newItems.forEach(item => {
        if (!currentEC.some(e => e.title === item.title)) {
          const hcIdx = currentEC.findIndex(e => e.title === "House Captain - during school");
          if (hcIdx !== -1) {
            currentEC.splice(hcIdx, 0, item);
          } else {
            currentEC.push(item);
          }
        }
      });

      // Ensure House Captain - during school is indeed at the absolute bottom
      const hcIdx = currentEC.findIndex(e => e.title === "House Captain - during school");
      if (hcIdx !== -1 && hcIdx !== currentEC.length - 1) {
        const hcItem = currentEC.splice(hcIdx, 1)[0];
        currentEC.push(hcItem);
      }

      localStorage.setItem('portfolio_extracurriculars', JSON.stringify(currentEC));
    } catch(e) {}
  }
}

// Data getter helper scripts
function getProjects() { return JSON.parse(localStorage.getItem('portfolio_projects') || "[]"); }
function getCompetitions() { return JSON.parse(localStorage.getItem('portfolio_competitions') || "[]"); }
function getProfile() { return JSON.parse(localStorage.getItem('portfolio_profile') || "{}"); }
function getSkills() { return JSON.parse(localStorage.getItem('portfolio_skills') || "[]"); }
function getExtracurriculars() { return JSON.parse(localStorage.getItem('portfolio_extracurriculars') || "[]"); }
function getExperiences() { return JSON.parse(localStorage.getItem('portfolio_experiences') || "[]"); }
function getResearchFocus() { return JSON.parse(localStorage.getItem('portfolio_research_focus') || "[]"); }
function getCoursework() { return JSON.parse(localStorage.getItem('portfolio_coursework') || "[]"); }
function getAcademics() { return JSON.parse(localStorage.getItem('portfolio_academics') || "[]"); }

// Initialize immediately
initDatabase();

// ======================================
// 2. PAGE INITIALIZER & PRELOADER SYSTEM
// ======================================

window.addEventListener('DOMContentLoaded', () => {
  const profile = getProfile();
  
  // Custom Dynamic Header/Logo Name globally
  const logoDiv = document.querySelector(".logo");
  if (logoDiv && profile.name) {
    logoDiv.textContent = profile.name.split(" ")[0]; // Just use first name e.g. "Smitha"
  }

  // Preloader Logic (Run once per browser session on Home page)
  const isHome = window.location.pathname.endsWith("index.html") || 
                 window.location.pathname.endsWith("/") || 
                 window.location.pathname === "";
                 
  const preloader = document.getElementById("preloader");
  const preloaderName = document.querySelector(".loader-name");
  
  if (preloader) {
    if (profile.name && preloaderName) {
      preloaderName.textContent = profile.name;
    }
    
    if (isHome && !sessionStorage.getItem("preloader_shown")) {
      // First time loading home in this session
      setTimeout(() => {
        preloader.classList.add("fade-out");
        sessionStorage.setItem("preloader_shown", "true");
        setTimeout(() => preloader.remove(), 800);
      }, 2500);
    } else {
      // Already shown, or not home page, remove immediately to avoid blocking
      preloader.style.display = "none";
      preloader.remove();
    }
  }

  // Active Navbar Highlight
  const navLinks = document.querySelectorAll("nav ul li a");
  let currentPage = window.location.pathname.split("/").pop();
  if (currentPage === "" || currentPage === undefined) {
    currentPage = "index.html";
  }
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.style.color = "#22d3ee";
      link.style.fontWeight = "bold";
    }
  });

  // Mobile/Universal Navbar Drawer Toggle
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("nav ul");
  
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      menuToggle.classList.toggle("open");
    });

    // Close when clicking a link
    navMenu.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuToggle.classList.remove("open");
      });
    });
  }

  // Back To Top Button
  const scrollButton = document.getElementById("scrollTopBtn") || document.createElement("button");
  if (!document.getElementById("scrollTopBtn")) {
    scrollButton.innerText = "↑";
    scrollButton.id = "scrollTopBtn";
    document.body.appendChild(scrollButton);
  }
  
  scrollButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollButton.style.display = "block";
    } else {
      scrollButton.style.display = "none";
    }
  });

  // Hero Typing Effect (Preserved & Dynamic)
  const heroTitle = document.querySelector(".hero-text h2");
  if (heroTitle) {
    const text = profile.role || "Biomedical Engineering Student";
    heroTitle.textContent = "";
    let index = 0;
    
    function typeEffect() {
      if (index < text.length) {
        heroTitle.textContent += text[index];
        index++;
        setTimeout(typeEffect, 75);
      }
    }
    typeEffect();
  }

  // Profile Glow Follow Effect (Preserved & Refined)
  const heroImage = document.querySelector(".hero-image");
  const glow = document.querySelector(".profile-glow");
  
  if (heroImage && glow) {
    heroImage.addEventListener("mousemove", (e) => {
      const rect = heroImage.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const moveX = (x - rect.width / 2) * 0.15;
      const moveY = (y - rect.height / 2) * 0.15;
      glow.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
    
    heroImage.addEventListener("mouseleave", () => {
      glow.style.transform = `translate(0px, 0px)`;
    });
  }

  // Dynamic Spacing and Formspree Submit for Contact Form
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  
  if (form && status) {
    form.addEventListener("submit", async function(e) {
      e.preventDefault();
      const data = new FormData(form);
      status.innerHTML = "Sending...";
      status.style.color = "#60a5fa";
      
      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: data,
          headers: { 'Accept': 'application/json' }
        });
        
        if (response.ok) {
          status.innerHTML = "Message sent successfully. Redirecting...";
          status.style.color = "#10b981";
          form.reset();
          setTimeout(() => {
            window.location.href = "thanks.html";
          }, 1000);
        } else {
          status.innerHTML = "Something went wrong.";
          status.style.color = "#ef4444";
        }
      } catch(error) {
        status.innerHTML = "Network error. Please try again.";
        status.style.color = "#ef4444";
      }
    });
  }

  // Dynamic Content Rendering & Components
  renderDynamicPageContent();
});

// ======================================
// 3. DYNAMIC CONTENT RENDERING ENGINE
// ======================================

function renderDynamicPageContent() {
  const profile = getProfile();
  
  // 3.1 DYNAMIC HERO & BIO TEXTS ACROSS PAGES
  // Index elements
  const indexName = document.querySelector(".hero-text h1");
  if (indexName && profile.name) indexName.textContent = profile.name;
  
  const indexBioHero = document.querySelector(".hero-text p");
  if (indexBioHero && profile.bio_hero) indexBioHero.textContent = profile.bio_hero;
  
  const indexImage = document.querySelector(".hero-image img");
  if (indexImage && profile.profile_image) indexImage.src = profile.profile_image;
  
  const indexSummaryTitle = document.querySelector(".homepage-summary h2");
  if (indexSummaryTitle && profile.bio_summary_title) indexSummaryTitle.textContent = profile.bio_summary_title;
  
  const summaryDiv = document.querySelector(".homepage-container");
  if (summaryDiv && profile.bio_summary_1) {
    const paragraphs = summaryDiv.querySelectorAll("p");
    if (paragraphs.length >= 2) {
      paragraphs[0].textContent = profile.bio_summary_1;
      paragraphs[1].textContent = profile.bio_summary_2 || "";
    }
  }
  
  // Global CV Links
  const cvLinks = document.querySelectorAll('a[href="assets/resume.pdf"]');
  if (cvLinks.length > 0 && profile.resume_pdf) {
    cvLinks.forEach(link => {
      link.href = profile.resume_pdf;
    });
  }

  // Stats Counters
  const projectsCountLabel = document.getElementById("stats-projects-count");
  if (projectsCountLabel) {
    projectsCountLabel.textContent = `${getProjects().length}+`;
  }
  
  const compsCountLabel = document.getElementById("stats-competitions-count");
  if (compsCountLabel) {
    compsCountLabel.textContent = `${getCompetitions().length}+`;
  }
  
  const cgpaLabels = document.querySelectorAll(".quick-academic-card .quick-score, .stat-card .stat-number");
  if (cgpaLabels.length > 0 && profile.stats_cgpa) {
    cgpaLabels.forEach(label => {
      if (label.parentElement.classList.contains("quick-academic-card") && label.previousElementSibling.textContent === "CGPA") {
        label.textContent = profile.stats_cgpa;
      } else if (label.nextElementSibling && label.nextElementSibling.textContent.includes("CGPA")) {
        label.textContent = profile.stats_cgpa;
      }
    });
  }
  
  const boardsLabels = document.querySelectorAll(".quick-academic-card .quick-score");
  if (boardsLabels.length > 0) {
    boardsLabels.forEach(label => {
      const parent = label.parentElement;
      const h3Text = parent.querySelector("h3").textContent;
      if (h3Text.includes("12") && profile.stats_class_12) {
        label.textContent = profile.stats_class_12;
      } else if (h3Text.includes("10") && profile.stats_class_10) {
        label.textContent = profile.stats_class_10;
      }
    });
  }

  // 3.1.1 HOMEPAGE FOCUS AREAS
  const interestsContainer = document.getElementById("homepage-interests-container");
  if (interestsContainer) {
    const allSkills = getSkills();
    const listSkills = allSkills.filter(s => s.type === "list");
    if (listSkills.length > 0) {
      interestsContainer.innerHTML = "";
      listSkills.forEach(skillGroup => {
        const pill = document.createElement("div");
        pill.className = "interest-pill";
        pill.textContent = skillGroup.category;
        interestsContainer.appendChild(pill);
      });
    }
  }

  // 3.2 INDEX FEATURED PROJECTS
  const featuredContainer = document.getElementById("featured-projects-container");
  if (featuredContainer) {
    const projects = getProjects();
    featuredContainer.innerHTML = "";
    
    // Render first 2 projects
    projects.slice(0, 2).forEach((proj, idx) => {
      const card = document.createElement("div");
      card.className = "featured-card card reveal-left";
      card.innerHTML = `
        <img src="${proj.image}" alt="${escapeHTML(proj.title)}">
        <h3>${escapeHTML(proj.title)}</h3>
        <p>${escapeHTML(proj.desc.length > 120 ? proj.desc.substring(0, 120) + "..." : proj.desc)}</p>
        <a href="${escapeHTML(proj.github)}" target="_blank" class="featured-btn">
          <i class="fa-brands fa-github"></i> View Project
        </a>
      `;
      featuredContainer.appendChild(card);
    });
  }
  
  // 3.3 ALL PROJECTS PAGE RENDERER
  const projectsContainer = document.getElementById("projects-container");
  if (projectsContainer) {
    const projects = getProjects();
    projectsContainer.innerHTML = "";
    
    projects.forEach((proj, idx) => {
      const card = document.createElement("div");
      card.className = "project-card reveal";
      card.innerHTML = `
        <img src="${proj.image}" alt="${escapeHTML(proj.title)}" class="project-image">
        <h3>${escapeHTML(proj.title)}</h3>
        <p>${escapeHTML(proj.desc)}</p>
        <br>
        <p><strong>Technologies:</strong> ${escapeHTML(proj.tech)}</p>
        <br>
        <div class="project-links">
          <a href="${escapeHTML(proj.github)}" target="_blank" class="github-btn">
            <span class="github-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8 0C3.58 0 0 3.58 0 8a8 8 0 0 0 5.47 7.59c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2 .37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.65 7.65 0 0 1 2-.27c.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </span>
            GitHub Repo
          </a>
        </div>
      `;
      projectsContainer.appendChild(card);
    });
    
    // Draw/Refresh Dynamic SVG Project Graph
    renderProjectTrajectoryGraph();
  }
  
  // 3.4 COMPETITIONS TIMELINE RENDERER
  const compTimeline = document.getElementById("competitions-timeline");
  const compDetails = document.getElementById("competitions-details");
  if (compTimeline && compDetails) {
    const competitions = getCompetitions();
    compTimeline.innerHTML = `<div class="timeline-line"></div>`;
    compDetails.innerHTML = "";
    
    competitions.forEach((comp, idx) => {
      // 1. Render timeline node card
      const node = document.createElement("div");
      const isLeft = idx % 2 === 0;
      node.className = `timeline-node ${isLeft ? 'left' : 'right'} reveal`;
      node.innerHTML = `
        <div class="timeline-dot"></div>
        <div class="timeline-card">
          <img src="${comp.image}" alt="${escapeHTML(comp.title)}">
          <div class="timeline-content">
            <span class="timeline-year">${escapeHTML(comp.month)} ${escapeHTML(comp.year)}</span>
            <h3>${escapeHTML(comp.title)}</h3>
            <p>${escapeHTML(comp.achievement)}</p>
            <a href="#competition-${idx}" class="timeline-btn">See Details</a>
          </div>
        </div>
      `;
      compTimeline.appendChild(node);
      
      // 2. Render detail summary card
      const detailCard = document.createElement("div");
      detailCard.className = `competition-detail-card reveal-${isLeft ? 'left' : 'right'}`;
      detailCard.id = `competition-${idx}`;
      detailCard.innerHTML = `
        <div class="detail-top">
          <span>${escapeHTML(comp.title)}</span>
          <span>${escapeHTML(comp.month)} ${escapeHTML(comp.year)}</span>
        </div>
        <h2>${escapeHTML(comp.title)} — ${escapeHTML(comp.achievement)}</h2>
        <p>${escapeHTML(comp.desc)}</p>
        <div class="tech-stack" style="margin-top: 20px;">
          <span>Hackathon Event</span>
          <span>Technical Innovation</span>
          <span>Collaboration</span>
        </div>
        <div class="gallery-scroll">
          <img src="images/competition.jpg" alt="Gallery 1">
          <img src="images/competition.jpg" alt="Gallery 2">
        </div>
      `;
      compDetails.appendChild(detailCard);
    });
  }

  // 3.5 ABOUT PAGE RENDERER
  const aboutLeft = document.querySelector(".about-left");
  if (aboutLeft) {
    aboutLeft.innerHTML = `
      <div class="section-tag" style="margin-bottom: 20px; display: inline-block;">BIOGRAPHY</div>
      <h2 style="font-size: 32px; color: #93c5fd; margin-bottom: 25px; font-weight: 600;">${escapeHTML(profile.name)}</h2>
      <p style="font-size: 17px; color: #cbd5e1; margin-bottom: 20px; line-height: 1.8;">${escapeHTML(profile.bio_about_1)}</p>
      <p style="font-size: 17px; color: #cbd5e1; margin-bottom: 20px; line-height: 1.8;">${escapeHTML(profile.bio_about_2)}</p>
      <p style="font-size: 17px; color: #cbd5e1; margin-bottom: 30px; line-height: 1.8;">${escapeHTML(profile.bio_about_3)}</p>
      <a href="${escapeHTML(profile.resume_pdf)}" download class="btn">
        <i class="fa-solid fa-file-arrow-down"></i> Download Resume
      </a>
    `;
    
    // VIT Academics side card
    const aboutRight = document.querySelector(".about-right");
    if (aboutRight) {
      const skillsArray = profile.competencies ? profile.competencies.split(",").map(s => s.trim()) : [];
      let skillsSpan = "";
      skillsArray.forEach(sk => {
        skillsSpan += `<span style="background: rgba(34, 211, 238, 0.1); border: 1px solid rgba(34, 211, 238, 0.2); padding: 5px 10px; border-radius: 20px; font-size: 12px; color: #22d3ee;">${escapeHTML(sk)}</span> `;
      });
      
      aboutRight.innerHTML = `
        <h3 style="margin-bottom: 20px; font-size: 22px; color: #60a5fa;"><i class="fa-solid fa-graduation-cap"></i> VIT Academics</h3>
        <p style="font-size: 15px; margin-bottom: 15px;"><strong>Degree:</strong> B.Tech in Electronics & Communication Engineering</p>
        <p style="font-size: 15px; margin-bottom: 15px;"><strong>Specialization:</strong> Biomedical Engineering</p>
        <p style="font-size: 15px; margin-bottom: 15px;"><strong>Institution:</strong> Vellore Institute of Technology, Vellore</p>
        <p style="font-size: 15px; margin-bottom: 25px;"><strong>Current CGPA:</strong> ${escapeHTML(profile.stats_cgpa)} / 10.0</p>
        <div style="border-top: 1px solid rgba(59, 130, 246, 0.15); padding-top: 20px;">
          <h4 style="color: #a78bfa; margin-bottom: 12px; font-size: 16px;">Core Competencies</h4>
          <div class="tech-stack" style="display: flex; flex-wrap: wrap; gap: 8px;">
            ${skillsSpan}
          </div>
        </div>
      `;
    }

    // Experience logs
    const expContainer = document.querySelector(".experience-section .card-container");
    if (expContainer) {
      const experiences = getExperiences();
      expContainer.innerHTML = "";
      
      experiences.forEach((exp, idx) => {
        let ptsLi = "";
        const points = exp.points ? exp.points.split("|").map(p => p.trim()) : [];
        points.forEach(pt => {
          if (pt) {
            ptsLi += `<li style="margin-bottom: 8px;">${escapeHTML(pt)}</li>`;
          }
        });
        
        const card = document.createElement("div");
        card.className = "card";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
        card.style.display = "flex";
        card.style.flexDirection = "column";
        card.style.gap = "15px";
        
        card.innerHTML = `
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(96, 165, 250, 0.1); padding-bottom: 12px; flex-wrap: wrap; gap: 10px;">
            <h3 style="margin-bottom: 0; font-size: 20px;">
              <i class="fa-solid ${idx % 3 === 0 ? 'fa-laptop-code' : (idx % 3 === 1 ? 'fa-network-wired' : 'fa-trophy')}" style="color: ${idx % 3 === 0 ? '#22d3ee' : (idx % 3 === 1 ? '#3b82f6' : '#a78bfa')}; margin-right: 8px;"></i>
              ${escapeHTML(exp.title)}
            </h3>
            <span style="background: rgba(37, 99, 235, 0.2); color: #60a5fa; border: 1px solid rgba(37, 99, 235, 0.4); padding: 4px 12px; border-radius: 20px; font-size: 13px; font-weight: 600;">${escapeHTML(exp.duration)}</span>
          </div>
          <p style="margin-bottom: 10px;">${escapeHTML(exp.desc)}</p>
          <ul style="padding-left: 20px; color: #cbd5e1; list-style-type: square;">
            ${ptsLi}
          </ul>
        `;
        expContainer.appendChild(card);
      });
    }
  }

  // 3.6 ACADEMICS PAGE RENDERER
  const academicsContainer = document.querySelector("#academics .card-container");
  if (academicsContainer) {
    const academicsList = getAcademics();
    academicsContainer.innerHTML = "";
    
    academicsList.forEach((acad, idx) => {
      const scoreNum = parseFloat(acad.score);
      const maxNum = parseFloat(acad.max);
      const strokeOffset = 314 * (1 - scoreNum / maxNum);
      const hexColor = acad.color || "#22d3ee";
      const filterId = `neon-glow-${idx}`;
      
      const card = document.createElement("div");
      card.className = "card";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
      card.style.display = "flex";
      card.style.flexDirection = "column";
      card.style.justify = "space-between";
      card.style.border = `1px solid rgba(${hexToRgb(hexColor)}, 0.2)`;
      
      card.innerHTML = `
        <div>
          <div class="academic-top" style="background: rgba(${hexToRgb(hexColor)}, 0.1); color: ${hexColor}; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600; display: inline-block; margin-bottom: 20px;">${escapeHTML(acad.category)}</div>
          <h3 style="color: #93c5fd; font-size: 22px; margin-bottom: 15px;">${escapeHTML(acad.title)}</h3>
          <p style="font-size: 14.5px; color: #cbd5e1; line-height: 1.7; margin-bottom: 20px;">${escapeHTML(acad.desc)}</p>
        </div>
        <div class="radial-container" style="position: relative; width: 160px; height: 160px; margin: 25px auto 10px; overflow: visible !important;">
          <svg width="160" height="160" viewBox="0 0 160 160" style="transform: rotate(-90deg); overflow: visible !important;">
            <defs>
              <filter id="${filterId}" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="6" result="blur"></feGaussianBlur>
                <feMerge>
                  <feMergeNode in="blur"></feMergeNode>
                  <feMergeNode in="SourceGraphic"></feMergeNode>
                </feMerge>
              </filter>
            </defs>
            <circle cx="80" cy="80" r="50" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="8"></circle>
            <circle cx="80" cy="80" r="50" fill="none" stroke="${hexColor}" stroke-width="8" stroke-dasharray="314" stroke-dashoffset="${strokeOffset}" style="filter: url(#${filterId}); transition: stroke-dashoffset 1s ease-in-out;"></circle>
          </svg>
          <div style="position: absolute; top: 0; left: 0; display: flex; flex-direction: column; align-items: center; justify-content: center; width: 160px; height: 160px;">
            <span style="font-size: 24px; font-weight: 700; color: ${hexColor};">${escapeHTML(acad.score)}</span>
            <span style="font-size: 11px; color: #94a3b8; text-align: center; max-width: 120px;">${escapeHTML(acad.label)}</span>
          </div>
        </div>
      `;
      academicsContainer.appendChild(card);
    });
    
    // Research Focus Lists
    const researchContainer = document.querySelector(".academic-container, .reveal-left .card-container");
    if (researchContainer && !researchContainer.parentElement.classList.contains("coursework-section")) {
      const research = getResearchFocus();
      researchContainer.innerHTML = "";
      
      research.forEach((res) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
        card.innerHTML = `
          <h3 style="color: #22d3ee; font-size: 20px; margin-bottom: 15px;"><i class="${escapeHTML(res.icon || 'fa-solid fa-microchip')}" style="margin-right: 8px;"></i> ${escapeHTML(res.title)}</h3>
          <p style="font-size: 14.5px; color: #cbd5e1; line-height: 1.7;">${escapeHTML(res.desc)}</p>
        `;
        researchContainer.appendChild(card);
      });
    }

    // VIT Coursework Lists
    const courseworkContainer = document.querySelector(".coursework-section .card-container");
    if (courseworkContainer) {
      const coursework = getCoursework();
      courseworkContainer.innerHTML = "";
      
      coursework.forEach((course) => {
        const card = document.createElement("div");
        card.className = "card";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
        card.style.padding = "25px";
        card.style.textAlign = "center";
        card.style.border = "1px solid rgba(34, 211, 238, 0.1)";
        card.innerHTML = `
          <i class="${escapeHTML(course.icon || 'fa-solid fa-book')}" style="font-size: 32px; color: #22d3ee; margin-bottom: 15px;"></i>
          <h4 style="margin-bottom: 10px; font-size: 18px;">${escapeHTML(course.title)}</h4>
          <p style="font-size: 14px; color: #cbd5e1;">${escapeHTML(course.desc)}</p>
        `;
        courseworkContainer.appendChild(card);
      });
    }
  }

  // 3.7 DYNAMIC SKILLS PAGE (BUBBLES & PHILOSOPHY)
  const skillsContainer = document.getElementById("skills-list-container");
  if (skillsContainer) {
    const allSkills = getSkills();
    skillsContainer.innerHTML = "";
    
    // Filter out philosophy elements from categories
    const listSkills = allSkills.filter(s => s.type === "list");
    
    listSkills.forEach((skillGroup, idx) => {
      const card = document.createElement("div");
      card.className = "card reveal";
      card.innerHTML = `
        <h3>${escapeHTML(skillGroup.category)}</h3>
        <div class="skills-bubbles">
          ${skillGroup.items.map(item => `<span class="skill-bubble">${escapeHTML(item)}</span>`).join('')}
        </div>
      `;
      skillsContainer.appendChild(card);
    });

    // Learning Philosophy section
    const philosophyContainer = document.getElementById("philosophy-container");
    if (philosophyContainer) {
      philosophyContainer.innerHTML = "";
      const textSkills = allSkills.filter(s => s.type === "text");
      
      textSkills.forEach((pGroup) => {
        const card = document.createElement("div");
        card.className = "card reveal";
        card.innerHTML = `
          <h3>${escapeHTML(pGroup.category)}</h3>
          <p>${escapeHTML(pGroup.desc)}</p>
        `;
        philosophyContainer.appendChild(card);
      });
    }
  }

  // 3.8 DYNAMIC EXTRACURRICULARS PAGE
  const leadershipContainer = document.getElementById("extracurriculars-leadership-container");
  const commContainer = document.getElementById("extracurriculars-comm-container");
  const ecInterestsContainer = document.getElementById("extracurriculars-interests-container");
  
  if (leadershipContainer || commContainer || ecInterestsContainer) {
    const ecList = getExtracurriculars();
    
    if (leadershipContainer) leadershipContainer.innerHTML = "";
    if (commContainer) commContainer.innerHTML = "";
    if (ecInterestsContainer) ecInterestsContainer.innerHTML = "";
    
    ecList.forEach((ec) => {
      const card = document.createElement("div");
      card.className = "card reveal";
      card.innerHTML = `
        <h3>${escapeHTML(ec.title)}</h3>
        <p>${escapeHTML(ec.desc)}</p>
      `;
      
      if (ec.section === "leadership" && leadershipContainer) {
        leadershipContainer.appendChild(card);
      } else if (ec.section === "communication" && commContainer) {
        commContainer.appendChild(card);
      } else if (ec.section === "interests" && ecInterestsContainer) {
        ecInterestsContainer.appendChild(card);
      }
    });
  }

  // Trigger scroll reveals after dynamic drawing
  setTimeout(revealOnScroll, 100);
}

// ======================================
// 4. DYNAMIC SVG PROJECT TRAJECTORY GRAPH
// ======================================

function renderProjectTrajectoryGraph() {
  const svg = document.getElementById("project-trajectory-graph");
  if (!svg) return;
  
  const projects = getProjects();
  const count = projects.length;
  svg.innerHTML = ""; // Clear
  
  if (count === 0) {
    svg.innerHTML = `<text x="400" y="100" fill="#cbd5e1" font-size="16" text-anchor="middle">No projects added yet.</text>`;
    return;
  }
  
  // Calculate dynamic dimensions
  const paddingX = 70;
  const width = svg.clientWidth || 800;
  const height = 200;
  const stepX = (width - paddingX * 2) / Math.max(1, count - 1);
  
  let points = [];
  projects.forEach((proj, idx) => {
    const x = paddingX + idx * stepX;
    // Oscillating y-axis for high-end biomedical signal visualization wave representation
    const y = 60 + (idx % 2 === 0 ? 30 : 90);
    points.push({ x, y, title: proj.title, index: idx + 1, category: proj.category });
  });
  
  // Create gradient defs
  let defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
  defs.innerHTML = `
    <linearGradient id="traj-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#2563eb" stop-opacity="0.8" />
      <stop offset="50%" stop-color="#22d3ee" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#a78bfa" stop-opacity="0.8" />
    </linearGradient>
  `;
  svg.appendChild(defs);
  
  // Draw bottom baseline
  let baseLine = document.createElementNS("http://www.w3.org/2000/svg", "line");
  baseLine.setAttribute("x1", paddingX - 20);
  baseLine.setAttribute("y1", 160);
  baseLine.setAttribute("x2", width - paddingX + 20);
  baseLine.setAttribute("y2", 160);
  baseLine.setAttribute("stroke", "rgba(96, 165, 250, 0.15)");
  baseLine.setAttribute("stroke-width", "2");
  baseLine.setAttribute("stroke-dasharray", "5,5");
  svg.appendChild(baseLine);
  
  // Build curve path
  let pathD = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    // Cubic bezier curves to represent complex physiological wave patterns
    const cpX1 = points[i-1].x + stepX / 2;
    const cpY1 = points[i-1].y;
    const cpX2 = points[i].x - stepX / 2;
    const cpY2 = points[i].y;
    pathD += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${points[i].x} ${points[i].y}`;
  }
  
  let path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", pathD);
  path.setAttribute("fill", "none");
  path.setAttribute("stroke", "url(#traj-gradient)");
  path.setAttribute("stroke-width", "4");
  path.setAttribute("filter", "drop-shadow(0 0 8px rgba(34, 211, 238, 0.6))");
  svg.appendChild(path);
  
  // Draw nodes
  points.forEach((pt) => {
    // Outer pulsator
    let pulse = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    pulse.setAttribute("cx", pt.x);
    pulse.setAttribute("cy", pt.y);
    pulse.setAttribute("r", "11");
    pulse.setAttribute("fill", "rgba(34, 211, 238, 0.15)");
    svg.appendChild(pulse);
    
    // Core node
    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", pt.x);
    circle.setAttribute("cy", pt.y);
    circle.setAttribute("r", "6");
    circle.setAttribute("fill", "#22d3ee");
    circle.setAttribute("stroke", "#050816");
    circle.setAttribute("stroke-width", "2");
    circle.style.cursor = "pointer";
    circle.style.transition = "all 0.3s";
    
    circle.addEventListener("mouseenter", () => {
      circle.setAttribute("r", "8");
      pulse.setAttribute("r", "16");
      pulse.setAttribute("fill", "rgba(167, 139, 250, 0.3)");
    });
    
    circle.addEventListener("mouseleave", () => {
      circle.setAttribute("r", "6");
      pulse.setAttribute("r", "11");
      pulse.setAttribute("fill", "rgba(34, 211, 238, 0.15)");
    });
    
    svg.appendChild(circle);
    
    // Axis Label
    let label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", pt.x);
    label.setAttribute("y", 185);
    label.setAttribute("fill", "#60a5fa");
    label.setAttribute("font-size", "11");
    label.setAttribute("font-weight", "600");
    label.setAttribute("text-anchor", "middle");
    label.textContent = `P${pt.index}`;
    svg.appendChild(label);
    
    // Tooltip Text
    let titleText = document.createElementNS("http://www.w3.org/2000/svg", "text");
    titleText.setAttribute("x", pt.x);
    titleText.setAttribute("y", pt.y - 18);
    titleText.setAttribute("fill", "#cbd5e1");
    titleText.setAttribute("font-size", "9.5");
    titleText.setAttribute("text-anchor", "middle");
    titleText.setAttribute("font-weight", "400");
    const shortT = pt.title.length > 14 ? pt.title.substring(0, 14) + "..." : pt.title;
    titleText.textContent = shortT;
    svg.appendChild(titleText);
  });
}

// ======================================
// 5. SCROLL REVEAL INTEGRITY (Preserved)
// ======================================

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right, .reveal-scale");
  
  elements.forEach((element) => {
    const revealTop = element.getBoundingClientRect().top;
    const revealPoint = 80;
    
    if (revealTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);

// Hex to RGB parser helper
function hexToRgb(hex) {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex.split('').map(char => char + char).join('');
  }
  const num = parseInt(hex, 16);
  const r = (num >> 16) & 255;
  const g = (num >> 8) & 255;
  const b = num & 255;
  return `${r}, ${g}, ${b}`;
}

// Helper escape function to keep dynamic rendering secure
function escapeHTML(str) {
  if (!str) return "";
  return str.replace(/[&<>'"]/g, 
    tag => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&#39;',
      '"': '&quot;'
    }[tag] || tag)
  );
}