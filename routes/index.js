
const express = require('express');
const router = express.Router();

const projects = [
  {
    slug: 'CampStay',
    title: 'CampStay',
    category: 'Full Stack Development',
    type: 'Full Stack Development',
    description:
      'A full-stack campground platform where users can discover, create and review camping locations.',
    image: '/images/campstay1.png',
    tags: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'EJS', 'Bootstrap', 'Passport.js', 'MapTiler', 'Cloudinary', 'Multer', 'Joi', 'Helmet','dotenv'],
    liveUrl: 'https://yelpcamp-murex-three.vercel.app/',
    githubUrl: '',
    overview:
      'CampStay is a community-driven campground discovery and review web application. Users can explore campgrounds on a searchable map, view location details and photos, and share their own listings and reviews. The application is server-rendered with EJS and includes user accounts, campground management, and interactive maps.',
    role: 'Full Stack Developer',
    features: [
      'Browse campground listings with photos, descriptions, locations, and nightly prices',
'Explore campgrounds using an interactive map with clustered location markers',
'View campground detail pages with image carousels, maps, and camper reviews',
'Register and log in with username-and-password authentication',
'Create, edit, and delete campground listings, with ownership-based permissions',
'Upload campground photos to Cloudinary',
'Add star-rated reviews and delete your own reviews',
'Validate submitted campground and review data, and show status messages to users.'
    ],
    process: [
      'Planned the page structure and user flows',
      'Built routes and server-side templates',
      'Connected the application to MongoDB',
      'Tested core features and responsive layouts'
    ],
    screens: [
      { title: 'Home Page', image: '/images/campstay1.png' },
      { title: 'Campground Details', image: '/images/campstay2.png' },
      { title: 'Create Listing', image: '/images/campstay3.png' }
    ],
    result:
      'A full-stack web application combining server-side rendering, database operations and authentication.'
  },
  {
    slug: 'step-money',
    title: 'Step Money',
    category: 'UI/UX Design',
    type: 'Mobile App',
    description:
      'A fitness rewards and payments app that encourages users to stay active and earn rewards.',
    image: '/images/sm1.jpg',
    tags: ['Figma', 'UI/UX', 'Mobile App','Design Principles','UI Components','Responsive Design'],
    liveUrl: '',
    githubUrl: '',
    overview:
      'Step Money is a fitness and rewards mobile app designed to motivate users to stay active by turning their daily steps into redeemable points and monetary rewards. The app combines activity tracking, goal setting, reward redemption, and wallet management in one interface, encouraging users to build healthier habits through a rewarding experience.',
    role: 'UI/UX Designer',
    features: [
   'Step Tracking & Progress: Monitor daily steps, track goal completion, and view progress through visual progress indicators'
  ,'Goal Setting: Set personalized step targets and time-based activity goals'
    ,'Progress Analytics: View weekly activity charts, daily step counts, distance covered, and historical progress'
  ,'Rewards System: Earn points through physical activity and redeem them for available rewards'
  ,'Digital Wallet: Track wallet balance, available points, transactions, and redemption history'
  ,'Withdrawals & Conversions: Convert eligible points into monetary value and manage withdrawals'
  ,'Reward Discovery: Browse available rewards, view point requirements, and explore reward details'
    ],
    process: [
      'Identified the main user needs',
      'Mapped the core user journey',
      'Created wireframes and interface designs',
      'Designed reusable components in Figma'
    ],
    screens: [
      { title: 'Dashboard', image: '/images/sm1.jpg' },
      { title: 'Activity Tracking', image: '/images/sm2.jpg' },
      { title: 'Rewards', image: '/images/sm3.jpg' },
      { title: 'Rewards', image: '/images/sm4.jpg' }
    ],
    result:
      'A mobile-first concept focused on clear activity tracking, accessible information and motivating rewards.'
  },
  {
    slug: 'PicsBay',
    title: 'PicsBay',
    category: 'Full Stack Development',
    type: 'Full Stack Development',
    description:
      'A responsive photo discovery platform with search, tags, categories and image download options.',
    image: '/images/picsbay1.png',
    tags: ['Node.js',
'Express.js'
,'EJS'
,'API'
,'HTML'
,'CSS'
,'JavaScript'
,'Bootstrap 5'
,'dotenv'],
    liveUrl: 'https://pics-bay-theta.vercel.app/',
    githubUrl: '',
    overview:
      'PicsBay is a responsive photo discovery and gallery web app. It connects to the Pixabay API so visitors can explore photos, search by topic, browse curated categories, and view individual photos with related tags and download links. The app is built with Node.js, Express, and EJS.',
    role: 'Full Stack Developer',
    features: [
      'Photo discovery: A randomized gallery on the home page',
'Photo search: Search Pixabay photos and explore related search suggestions',
'Topic collections: Browse categories and view photos for each topic',
'Photo detail pages: View individual photos, searchable tags, Pixabay attribution, and high-quality download links',
'Interactive gallery: Load more photos without reloading the page',
'Image controls: Zoom and drag-to-pan on photo detail pages',
'Theme selection: Light and dark themes, with the selected theme saved in the browser',
'Responsive design: Photo grids and layouts adapt to different screen sizes',
'Caching: Search results and image files are cached to reduce repeated requests.'
    ],
    process: [
      'Planned the gallery and search experience',
      'Built reusable image cards',
      'Integrated a photo API',
      'Improved the layout for mobile screens'
    ],
    screens: [
      { title: 'Homepage', image: '/images/picsbay1.png' },
      { title: 'Search Results', image: '/images/picsbay2.png' },
      { title: 'Image Details', image: '/images/picsbay3.png' }
    ],
    result:
      'A photo discovery interface that brings search, browsing and image viewing together.'
  },
  {
  slug: 'Taskflow',
  title: 'TaskFlow',
  category: 'Full Stack Development',
  type: 'Full Stack Development',
  description:
    'A task management application for organizing to-do lists, tracking progress, and staying focused.',
  image: '/images/taskflow.png',
  tags: ['React', 'Material UI', 'JavaScript', 'IndexedDB','CSS','Vite'],
  liveUrl: 'https://react-todo-list-project-flame.vercel.app/',
  githubUrl: '',
  overview:
    'TaskFlow helps users organize tasks into custom lists, mark items complete, and track their progress in a clean, focused interface. Lists and tasks are stored locally in the browser.',
  role: 'Full Stack Developer',
  features: [
    'Create and switch between custom task lists',
    'Choose an icon for each list',
    'Add, edit, complete, and delete tasks',
    'View completed tasks and overall list progress',
    'Toggle between light and dark themes',
    'Save lists and tasks in browser storage'
  ],
  process: [
    'Structured task lists and items for local storage',
    'Built the task management interface with React and Material UI',
    'Implemented list creation, task editing, and completion tracking',
    'Added progress summaries and a light/dark theme toggle',
    'Tested the list and task interaction flow'
  ],
  screens: [
    { title: 'TaskFlow Task Manager', image: '/images/taskflow.png' }
  ],
  result:
    'A polished, locally stored task manager demonstrating interactive React UI, task organization, and progress tracking.'
},
  {
  slug: 'TVfinder',
  title: 'TVFinder',
  category: 'Full Stack Development',
  type: 'Full Stack Development',
  description:
    'A TV show discovery app for searching shows and exploring their details, cast, and episodes.',
  image: '/images/tvfinder1.png',
  tags: ['Node.js', 'Express.js', 'EJS', 'Bootstrap', 'TVMaze API'],
  liveUrl: 'https://tv-finder-eta.vercel.app/',
  githubUrl: '',
  overview:
    'TVFinder uses the TVMaze API to help users discover popular shows, search for titles, and explore show information, cast, and episodes.',
  role: 'Full Stack Developer',
  features: [
    'Browse popular TV shows with ratings and genres',
    'Search for shows by title',
    'View show summaries, ratings, genres, and broadcast details',
    'Explore cast members and characters',
    'Browse episodes organized by season',
    'Switch between light and dark themes'
  ],
  process: [
    'Connected the app to the TVMaze API',
    'Built server-rendered pages with Express and EJS',
    'Implemented show search and detail routes',
    'Created interfaces for cast and season-organized episodes',
    'Styled the app with Bootstrap and custom CSS'
  ],
  screens: [
    { title: 'Popular Shows', image: '/images/tvfinder1.png' },
    { title: 'Show Details', image: '/images/tvfinder2.png' },
    { title: 'Search Results', image: '/images/tvfinder3.png' }
  ],
  result:
    'A TV discovery application that brings show search, details, cast, and episode browsing together in one interface.'
},
  {
  slug: 'vynk',
  title: 'Vynk',
  category: 'UI/UX Design',
  type: 'Mobile App',
  description:
    'A video calling app featuring voice and video calls, call history, contact management and user authentication.',
  image: '/images/vc1.jpg',
  tags: ['Figma', 'UI/UX', 'Mobile App', 'Prototyping'],
  liveUrl: '',
  githubUrl: '',
  overview:
    'Vynk is a video calling app focused on making digital communication simple and intuitive. It includes thoughtfully designed screens for voice and video calls, recent call history, contact management, profile settings, sign-in and OTP verification.',
  role: 'UI/UX Designer',
  features: [
    'Video Calling Interface: Intuitive call screen with accept, reject, mute, and end-call controls',
'Call History: Organized list of recent calls with contact details, timestamps, and call status',
'Contact Management: Contact avatars, online status indicators, and quick call actions',
'Profile Management: Clean profile screen with editable personal information and account settings',
'Sign-In & Authentication UI: User-friendly login screens for phone number, email, and username',
'OTP Verification: Simple and clear phone verification screen',
'Password Recovery: Forgot-password option and password strength indicator',
'Social Login Options: UI concepts for Google, Facebook, and Twitter sign-in',
'Consistent Design System: Unified colors, typography, spacing, buttons, icons, and input fields',
'User-Centered Experience: Clear visual hierarchy and straightforward navigation to improve usability'
  ],
  process: [
    'Identified the core user needs for a communication app',
    'Planned user flows for calling and authentication',
    'Designed mobile wireframes for key screens',
    'Created a consistent visual system with colors, typography and components',
    'Designed high-fidelity UI screens for calling, profiles and authentication',
    'Refined layouts to improve usability and visual consistency'
  ],
  screens: [
    { title: 'Incoming Call', image: '/images/vc1.jpg' },
    { title: 'Call History', image: '/images/vc2.jpg' },
    { title: 'User Profile', image: '/images/vc3.jpg' },
  ],
  result:
    'A modern communication app design concept with consistent visual styling, intuitive navigation and clearly organized calling and authentication flows.'
}
];

const experience = [
  {
    period: 'Jan 2024 – Apr 2025',
    title: 'UI/UX Designer & Design Intern',
    points: [
      'Designed responsive web and mobile interfaces in Figma.',
      'Created user flows, wireframes, mockups, high-fidelity designs and interactive prototypes.',
      'Collaborated with teammates and developers on design handoff and refinements.',
      'Maintained reusable components and improved usability across interfaces.'
    ]
  },
  {
    period: 'June 2023 – October 2023',
    title: 'Content Writer',
    company: 'OtakuKart (Remote)',
    points: [
      'Wrote 7–8 in-depth articles each month, averaging around 4,000 words, on anime, manga and pop culture.',
      'Applied SEO practices, including keyword research and tagging, to improve content visibility.',
      'Researched online sources and studies to produce original, informative articles for OtakuKart readers.'
    ]
  }
];

router.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
    projects,
    experience
  });
});

router.get('/projects', (req, res) => {
  res.render('projects/index', {
    title: 'Projects',
    projects
  });
});

router.get('/projects/:slug', (req, res, next) => {
  const project = projects.find(
    item => item.slug === req.params.slug
  );

  if (!project) {
    return next();
  }

  res.render('projects/detail', {
    title: project.title,
    project,
    projects
  });
});

module.exports = router;
