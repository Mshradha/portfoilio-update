import scratchEditor from '../assets/images/projects/scratch-editor.webp';
import myHours from '../assets/images/projects/myhours.webp';
import revv from '../assets/images/projects/revv.webp';
import bathBody from '../assets/images/projects/bath-body-works.webp';
import tomtop from '../assets/images/projects/tomtop.webp';
import sephora from '../assets/images/projects/sephora.webp';

/*
 * Case studies. Every claim here comes from the master résumé, the old
 * portfolio content, or the public Brandfolder repository. Optional
 * sections (decisions, challenges, lessons) are only rendered when present,
 * so leave them out rather than padding them.
 *
 * `visual` picks a diagram from ProjectVisual. These are illustrations,
 * not screenshots, and are labelled as such on the page.
 */
export const caseStudies = [
  {
    slug: 'video-boilerplate',
    title: 'Video Boilerplate',
    category: 'Developer tooling',
    org: 'Contentstack',
    visual: 'boilerplate',
    summary:
      'A reusable foundation for Contentstack’s video Marketplace apps: one component architecture, one way to call platform APIs, and multi-configuration support built in.',
    highlight: '40% faster setup for new video apps',
    tags: ['React', 'REST APIs', 'Component architecture', 'Build tooling'],
    overview:
      'Contentstack’s Marketplace includes apps that bring video platforms such as Brightcove, JW Player and Vimeo into the CMS. I built a boilerplate from scratch for these apps, so each new integration starts from a consistent, working structure instead of an empty repository.',
    problem:
      'Every video integration needs the same building blocks: an app configuration screen, a way for editors to browse and pick videos, calls to the platform’s REST API, and a build setup. When each app builds these separately, it re-solves the same problems and drifts away from the others, so new apps are slower to start and the set as a whole is harder to maintain.',
    role:
      'I designed and built the boilerplate, defined the conventions it encodes, and worked on its multi-configuration support.',
    approach: [
      'Standardised the React component architecture so every video app is organised the same way. An engineer who knows one app can find their way around the next.',
      'Defined REST API integration patterns for video platforms, so platform-specific code always lives in a predictable place.',
      'Set build tooling conventions once, so new apps inherit a working setup instead of each configuring its own.',
      'Added multi-configuration support, so one installation can hold more than one platform configuration instead of being tied to a single account.',
    ],
    decisions: [
      {
        title: 'A shared foundation instead of copying the last app',
        body: 'Copying the previous app saves time once and costs time on every later change. A boilerplate with explicit conventions makes the consistent path the easy one.',
      },
      {
        title: 'Configuration belongs in the foundation',
        body: 'With multi-configuration support in the shared layer, individual apps don’t each have to add it later.',
      },
    ],
    outcome: [
      'New video applications take 40% less time to set up.',
      'The team has a reusable, scalable frontend foundation for video integrations.',
    ],
    stack: ['React', 'REST APIs', 'Component architecture', 'Build tooling', 'Multi-configuration'],
  },
  {
    slug: 'video-integrations',
    title: 'Video Platform Integrations',
    category: 'Marketplace apps',
    org: 'Contentstack',
    visual: 'video',
    platforms: ['Brightcove', 'JW Player', 'Vimeo'],
    summary:
      'Marketplace apps that let editors find and attach videos from Brightcove, JW Player and Vimeo without leaving a Contentstack entry.',
    tags: ['React', 'Redux', 'REST APIs', 'Accessibility'],
    overview:
      'These apps connect Contentstack to video platforms, so editors can work with video inside the CMS instead of copying IDs between browser tabs.',
    problem:
      'Editors manage video in one product and content in another. Each video platform has its own API and authentication, and the integration has to hide those differences from the editor.',
    role:
      'I worked on the video integrations: frontend development, REST API integration with each platform, state management, accessibility and testing.',
    approach: [
      'Built on the shared Video Boilerplate, so each integration could focus on platform-specific work instead of app structure.',
      'Integrated the React frontend with each platform’s REST API, handling authentication and asynchronous data.',
      'Managed app state with Redux to keep selection and loading behaviour predictable.',
      'Applied WCAG 2.1 AA practices, including ARIA roles, keyboard navigation and focus management.',
    ],
    challenges: [
      {
        challenge: 'Three platforms, three different APIs.',
        solution:
          'The boilerplate’s integration patterns kept platform-specific code contained, so the overall app structure stayed the same across integrations.',
      },
    ],
    stack: ['React', 'Redux', 'REST APIs', 'Playwright', 'Cypress', 'WCAG 2.1 AA'],
  },
  {
    slug: 'dam-integrations',
    title: 'DAM Integrations',
    category: 'Marketplace apps',
    org: 'Contentstack',
    visual: 'dam',
    platforms: ['Frontify', 'Brandfolder', 'Cloudinary'],
    summary:
      'Apps that bring approved brand assets from Frontify, Brandfolder and Cloudinary into Contentstack fields and rich text. The Brandfolder app is open source.',
    tags: ['React', 'TypeScript', 'Vite', 'Playwright'],
    overview:
      'Digital asset management (DAM) platforms hold an organisation’s approved images and files. These apps connect them to Contentstack, so editors can pick the right asset without leaving the entry they are editing.',
    problem:
      'Without an integration, editors download assets from the DAM and re-upload them to the CMS, and the link to the source asset is lost. The apps have to fit into several places in the editor: configuration, entry fields, a full-page picker, and the rich text editor.',
    role:
      'I worked on DAM integrations including Frontify, Brandfolder and Cloudinary, integrating the frontend with each platform. I am a contributor to the open-source Brandfolder app.',
    approach: [
      'The Brandfolder app has four extension points: App Configuration, a Custom Field with card and list views, a full-page Selector, and a JSON Rich Text Editor plugin.',
      'It is built with React and TypeScript on Vite, using Contentstack’s Venus component library so the app looks and feels native to the CMS.',
      'Key flows are covered by Playwright end-to-end tests.',
      'For each platform, I handled authentication, Redux state and asynchronous data when integrating with its API.',
    ],
    decisions: [
      {
        title: 'Use the CMS’s own components',
        body: 'Building the UI with the CMS’s design system keeps the integration consistent with the rest of the editor and leaves less custom UI to maintain.',
      },
    ],
    links: [
      { label: 'Brandfolder app on GitHub', href: 'https://github.com/contentstack/marketplace-brandfolder-app' },
    ],
    stack: ['React', 'TypeScript', 'Vite', 'Venus components', 'Redux', 'Playwright'],
  },
  {
    slug: 'ai-workflows',
    title: 'AI-Assisted Engineering Workflows',
    category: 'Developer experience',
    org: 'Contentstack',
    visual: 'ai',
    summary:
      'Agentic workflows with Claude that take a Jira ticket to a reviewed pull request, keep Playwright tests up to date, and prepare apps for open-source release.',
    highlight: 'Open-source prep cut from 4–5 days to 1',
    tags: ['Claude', 'Playwright', 'Vite', 'Automation'],
    overview:
      'Alongside product work, I built workflows that hand repetitive engineering loops to AI agents: reproducing and fixing UI issues, writing end-to-end tests, and preparing apps for public release.',
    problem:
      'UI issues went back and forth between QA and engineering before a fix landed. E2E tests needed updating after every change. Preparing an app for an open-source launch meant days of manual migration and security review.',
    role: 'I designed and built these workflows.',
    approach: [
      'Jira ticket to pull request: given a ticket, Claude gathers the issue details, uses the Claude Chrome extension to investigate it in the live app, applies a fix, pushes a branch, opens a pull request, reviews it, and iterates if needed.',
      'E2E test generation: Playwright tests are created or updated automatically after every feature release or bug fix.',
      'Open-source readiness: an automated workflow migrates apps from Create React App to Vite, scans for and removes security issues, and prepares the app for public launch.',
    ],
    outcome: [
      'Less back-and-forth between engineering and QA on UI issues.',
      'Time to open-source an application dropped from 4–5 days to 1 day.',
      'E2E coverage stays above 90% without writing tests by hand.',
    ],
    stack: ['Claude', 'Claude Chrome extension', 'Playwright', 'Vite', 'Jira', 'GitHub'],
  },
  {
    slug: 'buyofuel-product',
    title: 'Quotes, Offers & Dispatch',
    category: 'Product engineering',
    org: 'Buyofuel',
    visual: 'product',
    summary:
      'Full-stack features for web and mobile: managing quotes and offers, tracking dispatches in real time, and the Node.js APIs behind them.',
    highlight: '15% increase in user engagement',
    tags: ['React', 'React Native', 'Node.js', 'MongoDB'],
    overview:
      'At Buyofuel I built product features end to end, across a React web app, a React Native mobile app, and Node.js services.',
    problem:
      'Users needed to manage quotes and offers and follow their dispatches in transit, on both web and mobile.',
    role:
      'I developed the My Quotes, My Offers and Dispatch experiences and their backend APIs. I also built a lead generation system, the localisation feature, and a revamped payment flow.',
    approach: [
      'Built each feature for web (React) and mobile (React Native), both consuming the same REST APIs with authentication and authorisation.',
      'Developed Node.js and Express APIs on MongoDB, with structured data models and query design for core business workflows.',
      'Added real-time transit status to Dispatch, and connected map components to location APIs for address tracking.',
      'Implemented localisation with Context API and Redux, backed by structured content models.',
      'Revamped the multi-step payment flow with Ant Design, with accessibility improvements and cross-browser testing.',
    ],
    outcome: [
      'User engagement with the Quotes, Offers and Dispatch experiences rose by 15%.',
      'Lead generation automation made the telecom and marketing teams’ workflow 30% more efficient.',
      'Localisation made multi-language content delivery 25% more efficient.',
    ],
    stack: ['React', 'React Native', 'Node.js', 'Express', 'MongoDB', 'Redux', 'Context API', 'Ant Design'],
  },
];

// Earlier training and personal projects, with their real screenshots and links.
export const earlierBuilds = [
  {
    id: 'scratch',
    title: 'Scratch-style visual editor',
    description:
      'A visual programming editor inspired by Scratch, with multiple sprites, motion animations and collision detection.',
    tags: ['React', 'JavaScript', 'CSS'],
    image: scratchEditor,
    imageSize: [1440, 762],
    code: 'https://github.com/Mshradha/juspay-assignment',
    demo: 'https://juspay-assignment-cyan.vercel.app/',
  },
  {
    id: 'myhours',
    title: 'MyHours clone',
    description:
      'A time-tracking app built by a team of five in five days. I built the per-project timer page and the How it works page.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Chakra UI'],
    image: myHours,
    imageSize: [1440, 622],
    code: 'https://github.com/Mshradha/bouncy-donkey-4696',
    demo: 'https://myhours.vercel.app/',
  },
  {
    id: 'revv',
    title: 'Revv clone',
    description:
      'A car rental app built by a team of six in six days, with search, filters, booking and payment. I built the homepage.',
    tags: ['React', 'Redux', 'Chakra UI'],
    image: revv,
    imageSize: [1440, 680],
    code: 'https://github.com/Mshradha/assorted-bulb-9592',
    demo: 'https://assorted-bulb-9592.netlify.app/',
  },
  {
    id: 'bath-body',
    title: 'Bath & Body Works clone',
    description: 'A storefront clone with the full journey from browsing to payment, including sign-up and login.',
    tags: ['JavaScript', 'Bootstrap', 'HTML', 'CSS'],
    image: bathBody,
    imageSize: [1200, 519],
    code: 'https://github.com/Mshradha/ProjectUnit3-Bath-Body.git',
  },
  {
    id: 'tomtop',
    title: 'Tomtop clone',
    description: 'A responsive storefront rebuilt in HTML and CSS, with login.',
    tags: ['JavaScript', 'Bootstrap', 'HTML', 'CSS'],
    image: tomtop,
    imageSize: [1200, 526],
    code: 'https://github.com/Mshradha/construct-week',
  },
  {
    id: 'sephora',
    title: 'Sephora landing page',
    description: 'A shopping landing page with transitions, sliders, video, and login and sign-up screens.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: sephora,
    imageSize: [1200, 512],
    code: 'https://github.com/Mshradha/sephora.git',
  },
];

export const getCaseStudy = (slug) => caseStudies.find((study) => study.slug === slug);
