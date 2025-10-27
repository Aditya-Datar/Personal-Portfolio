const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#',
  title: 'Aditya Datar',
}

const aboutMe = {
  name: 'Aditya Datar', // Used for alt text on the image
  picture: 'img.jpg',
  role: 'Software Engineer & Cloud Architect',
  description: [
    // updated: expanded for stronger impact and leadership tone
    "I'm pursuing my Master's in Computer Science at the University of Southern California, specializing in scalable systems and intelligent automation. I focus on designing resilient architectures that bridge software performance and real-world impact.",
    "At HSBC, I modernized enterprise-grade payment infrastructure using Java, Spring Boot, React and AWS, improving reliability and reducing latency. I’m passionate about engineering excellence, innovation, and mentoring high-performing teams."
  ],

  technicalSkills: [
    // Skills curated from all verified resumes  high-frequency only.
    // These appear consistently across your uploaded resumes and are prioritized for ATS/AI scanners.

    // Programming Languages
    'Java',
    'Python',
    'JavaScript',
    'TypeScript',
    'C++',
    'SQL',

    // Frameworks & Libraries
    'Spring Boot',
    'Django',
    'React',
    'Node.js', // kept because appears in multiple resumes and project descriptions

    // Cloud & DevOps
    'AWS (EC2, S3, Lambda, RDS)', // grouped for cleaner ATS matching
    'Docker',
    'CI/CD', // general term used across resumes
    'Git',
    'Microservices',

    // Databases & Storage
    'MySQL',
    'MongoDB',

    // Concepts & Core CS
    'Object-Oriented Design (OOD)',
    'System Design',
    'Distributed Systems',
    'REST APIs',
    'Data Structures & Algorithms',

    // AI & Data (high-frequency mentions)
    'Machine Learning',
    'Computer Vision',

    // Methodologies & Practices
    'Agile',
    // 'SDLC',
    'Automation',
    // 'Unit Testing',

    // Soft & Professional Skills
    // 'Leadership',
    // 'Problem Solving',
    // 'Collaboration',
    // 'Technical Communication'
  ]
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Aditya Datar',
  role: '',
  roles: [
    'Software Engineer',
    'Full Stack Developer',
    'Cloud & DevOps Engineer',
    'AI & Data Systems Developer',
    'Research Innovator in IoT and Blockchain', // reflects your patents & IEEE publication
  ],
  picture: 'image.png',

  description:
    '',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://www.linkedin.com/in/aditya-datar-5b6675204/',
    github: 'https://github.com/Aditya-Datar',
  },
}

const projects = [
  // {
  //   name: 'Modern Core System Migration (HSBC)',
  //   description:
  //     'Migrated legacy banking systems to Java Spring Boot microservices, improving uptime and maintainability while processing millions of secure transactions daily.',
  //   stack: ['Java', 'Spring Boot', 'React', 'AWS', 'Microservices'],
  //   sourceCode: 'https://github.com/Aditya-Datar',
  //   livePreview: '#',
  // },
  // {
  //   name: 'Workforce Management Tool (WMT)  HSBC',
  //   description:
  //     'Developed resource allocation modules and dashboards to enhance workforce efficiency, automating reporting and cutting manual coordination time by 30%.',
  //   stack: ['Java', 'Spring Boot', 'Postgres', 'React'],
  //   sourceCode: 'https://github.com/Aditya-Datar',
  //   livePreview: '#',
  // },
  {
    name: 'OCR-Based Allergen Detection System',
    description:
      'Developed an OCR and computer vision pipeline that scans product labels to detect allergens and flag unsafe items. Integrated NLP for ingredient parsing, cutting review time by 40% and improving detection reliability for users with allergies.',
    stack: ['Python', 'Computer Vision', 'Machine Learning', 'MongoDB'],
    sourceCode: 'https://github.com/Aditya-Datar',
    livePreview: '#',
  },
  {
    name: 'CBDC Aid Distribution System (Prototype & Patent)',
    description:
      'Patented a Blockchain-based digital crypto wallet for secure digital currency transfers to farmers, integrating biometric authentication and automated transaction flows.',
    stack: ['Python', 'Flask', 'Blockchain', 'Flutter Flow', 'Firebase'],
    sourceCode: 'https://github.com/Aditya-Datar',
    livePreview: '#',
  },
  {
    name: 'Smart Beehive System (IoT & Data Collection)',
    description:
      'Engineered and Patented an IoT monitoring solution using LoRa for remote beehives, ensuring encrypted data transfer and earning multiple patents and IEEE publication.',
    stack: ['LoRa', 'Embedded C', 'Python', 'Data Analytics'],
    sourceCode: 'https://github.com/Aditya-Datar',
    livePreview: '#',
  },
  {
    name: 'Internship Management Portal',
    description:
      'Architected a full-stack portal using Django REST and React for managing internship assignments and evaluations. Enabled coordinators to track 200+ students, auto-generate reports, and streamline feedback cycles across departments.',
    stack: ['Django', 'React', 'MySQL', 'REST APIs'],
    sourceCode: 'https://github.com/Aditya-Datar',
    livePreview: '#',
  },
  // {
  //   name: 'Cloud Security Monitoring (Checkred Internship)',
  //   description:
  //     'Automated AWS configuration audits with Python and Boto3, detecting compliance gaps across cloud accounts and improving security review turnaround time.',
  //   stack: ['Python', 'AWS', 'Boto3'],
  //   sourceCode: 'https://github.com/Aditya-Datar',
  //   livePreview: '#',
  // },
  // {
  //   name: 'Full Stack Intern  Unisight',
  //   description:
  //     'Developed responsive web applications using Django, HTML, CSS and JavaScript, collaborating with international clients to deliver business-ready tools.',
  //   stack: ['Django', 'JavaScript', 'HTML', 'CSS'],
  //   sourceCode: 'https://github.com/Aditya-Datar',
  //   livePreview: '#',
  // },
  {
    name: 'Hydroponic Farming Seed Growth System (Design Patent)',
    description:
      'Invented and filed a design patent for an automated hydroponic seed growth system enhancing irrigation precision and nutrient control. The model improved yield efficiency by 25% and demonstrated scalable applications in sustainable agriculture.',
    stack: ['Design', 'Agritech Concepts'],
    sourceCode: 'https://github.com/Aditya-Datar',
    livePreview: '#',
  },
  // {
  //   name: 'Smart Beekeeping Publication (IEEE / Scopus)',
  //   description:
  //     'Published IEEE paper on LoRa-based Smart Beekeeping, proposing secure data algorithms for remote monitoring and advancing IoT research adoption.',
  //   stack: ['IoT', 'LoRa', 'Data Analytics'],
  //   sourceCode: 'https://ieeexplore.ieee.org/document/9711901/authors',
  //   livePreview: '#',
  // },
  // {
  //   name: 'Crypto Wallet for Farmers (Patent)',
  //   description:
  //     'Patented a digital wallet enabling CBDC transactions via biometric and QR authentication, empowering farmers with transparent financial accessibility.',
  //   stack: ['Blockchain', 'Raspberry Pi', 'Python'],
  //   sourceCode: '#',
  //   livePreview: '#',
  // }
]



const skills = [
  // Skills curated from all verified resumes  high-frequency only.
  // Kept concise and ATS-friendly; duplicates removed and normalized.

  // Programming Languages
  'Java',
  'Python',
  'JavaScript',
  'TypeScript',
  'C++',
  'SQL',

  // Frameworks & Libraries
  'Spring Boot',
  'Django',
  'React',
  'Node.js',

  // Cloud & DevOps
  'AWS (EC2, S3, Lambda, RDS)',
  'Docker',
  'CI/CD',
  'Git',
  'Microservices',

  // Databases & Storage
  'MySQL',
  'MongoDB',

  // Concepts & Core CS
  'Object-Oriented Design (OOD)',
  'System Design',
  'Distributed Systems',
  'REST APIs',
  'Data Structures',
  'Algorithms',

  // AI & Data
  'Machine Learning',
  'Computer Vision',

  // Methodologies & Practices
  'Agile',
  'SDLC',
  'Automation',
  // 'Unit Testing',

  // Soft & Professional Skills
  'Leadership',
  'Problem Solving',
  'Collaboration',
  'Technical Communication'
]

const infoCards = [
  {
    icon: '🎓',
    label: 'Education',
    value: 'USC MS in Computer Science (MSCS)', // updated: corrected degree label
  },
  // {
  //   icon: '📊',
  //   label: 'GPA',
  //   value: '3.9/4.0',
  // },
  {
    icon: '🚀',
    label: 'Professional Experience',
    value: 'Software Engineer  HSBC (Aug 2023 - Jul 2025)', // updated: clearer experience summary
  },
]

const footer = {
  name: 'Aditya Anand Datar',
  tagline: "Building scalable solutions for tomorrow's challenges",
  quickLinks: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about-me' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ],
  socialLinks: [
    { name: 'Email', href: 'mailto:datara@usc.edu' }, // updated: real contact preserved
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-datar-5b6675204' },
    { name: 'GitHub', href: 'https://www.github.com/Aditya-Datar' },
  ],
  copyright: '© 2025 Aditya Anand Datar. All rights reserved.',
  credit: '',
}

const contact = {
  title: "Let's Connect",
  subtitle: "Have a project in mind? Let's work together to build something amazing.",
  description: "I'm always interested in hearing about new opportunities and interesting projects. Whether you have a question or just want to say hi, feel free to reach out!",
  info: [
    { icon: '📍', text: 'Los Angeles, CA' },
    { icon: '🎓', text: 'USC MS in Computer Science' }, // updated: consistent with aboutMe
    { icon: '💼', text: 'Open to Opportunities' },
  ],
  social: [
    { icon: '✉', name: 'Email', href: 'mailto:datara@usc.edu' },
    { icon: '🔗', name: 'LinkedIn', href: 'https://www.linkedin.com/in/aditya-datar-5b6675204' },
    { icon: '🐙', name: 'GitHub', href: 'https://www.github.com/Aditya-Datar' },
  ],
}

export { header, about, projects, skills, contact, aboutMe, infoCards, footer }