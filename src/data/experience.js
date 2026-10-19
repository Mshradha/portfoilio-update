// Roles, dates and titles follow the master résumé.

export const experience = [
  {
    id: 'contentstack',
    company: 'Contentstack',
    title: 'Software Engineer I',
    start: 'Nov 2024',
    end: 'Aug 2026',
    location: 'Pune, India',
    summary:
      'Built and maintained Marketplace apps that connect Contentstack to digital asset management and video platforms, and the shared foundations those apps are built on.',
    highlights: [
      'Engineered a Video Boilerplate framework from scratch, standardising React component architecture, REST API integration patterns and build tooling conventions. New video app setup time dropped by 40%.',
      'Integrated frontend apps with third-party platforms including Brightcove, Brandfolder and Frontify, handling authentication, Redux state and asynchronous data.',
      'Built an AI-assisted workflow in which Claude takes a Jira ticket, investigates the UI issue in the live app, applies a fix, raises a pull request and reviews it, cutting back-and-forth between engineering and QA.',
      'Automated open-source readiness (CRA to Vite migration, security scanning, launch preparation), reducing the time to open-source an app from 4–5 days to 1 day.',
      'Set up AI-assisted Playwright E2E test generation that updates tests after every feature or fix.',
      'Applied WCAG 2.1 AA practices (ARIA roles, keyboard navigation, focus management, screen reader testing) across Marketplace apps, and mentored junior developers through code review.',
    ],
    stack: ['React', 'TypeScript', 'Redux', 'REST APIs', 'Playwright', 'Cypress', 'AWS S3 & CloudFront'],
  },
  {
    id: 'buyofuel',
    company: 'Buyofuel',
    companyNote: 'Buyo India Pvt. Ltd.',
    title: 'Full-Stack Web Developer (MERN)',
    start: 'Nov 2022',
    end: 'Oct 2024',
    location: 'Remote',
    summary:
      'Shipped product features end to end, from React and React Native screens to the Node.js and MongoDB APIs behind them.',
    highlights: [
      'Built My Quotes, My Offers and Dispatch for web (React) and mobile (React Native), including real-time transit status on Dispatch.',
      'Developed Node.js and Express REST APIs on MongoDB to support core business workflows.',
      'Built an automated lead generation system for the telecom and marketing teams.',
      'Implemented language localisation end to end, using Context API and Redux on the frontend and structured content models on the backend.',
      'Revamped the payment workflow with Ant Design, improving accessibility and the multi-step checkout experience.',
    ],
    stack: ['React', 'React Native', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Ant Design'],
  },
];

export const education = [
  { id: 'masai', course: 'Full Stack Web Development', institution: 'Masai School', period: '2021 – 2022' },
  { id: 'mtech', course: 'M.Tech, Electrical Power Systems', institution: 'Government College of Engineering, Karad', period: '2019 – 2021' },
  { id: 'be', course: 'B.E., Electrical Engineering', institution: 'DMIETR, Wardha', period: '2016 – 2019' },
];
