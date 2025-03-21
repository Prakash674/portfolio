export const navItems = [
  { name: 'About', link: '#about' },
  { name: 'Projects', link: '#projects' },
  { name: 'Testimonials', link: '#testimonials' },
  { name: 'Contact', link: '#contact' },
];

export const gridItems = [
  {
    id: 1,
    title: 'I prioritize client collaboration, fostering open communication ',
    description: '',
    className: 'lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]',
    imgClassName: 'w-full h-full',
    titleClassName: 'justify-end',
    img: '/b1.svg',
    spareImg: '',
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '',
    spareImg: '',
  },
  {
    id: 3,
    title: 'My tech stack',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-2',
    imgClassName: '',
    titleClassName: 'justify-center',
    img: '',
    spareImg: '',
  },
  {
    id: 4,
    title: 'Tech enthusiast with a passion for development.',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-start',
    img: '/grid.svg',
    spareImg: '/b4.svg',
  },

  {
    id: 5,
    title: 'Currently building a Carbon Emission calculator',
    description: 'The Inside Scoop',
    className: 'md:col-span-3 md:row-span-2',
    imgClassName: 'absolute right-0 bottom-0 md:w-96 w-60',
    titleClassName: 'justify-center md:justify-start lg:justify-center',
    img: '/b5.svg',
    spareImg: '/grid.svg',
  },
  {
    id: 6,
    title: 'Do you want to start a project together?',
    description: '',
    className: 'lg:col-span-2 md:col-span-3 md:row-span-1',
    imgClassName: '',
    titleClassName: 'justify-center md:max-w-full max-w-60 text-center',
    img: '',
    spareImg: '',
  },
];

export const projects = [
  {
    id: 1,
    title: 'onion-Layer',
    des: 'Onion Layer is a decentralized application that allows users to buy presale tokens.',
    img: './onionlayer.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/fm.svg'],
    link: 'https://onion-layer.vercel.app/',
  },
  {
    id: 2,
    title: 'Climate Mitigate - Carbon Emission Calculator',
    des: 'A web app that calculates your carbon footprint and suggests ways to reduce it. Built with React, Tailwind CSS, and Chart.js.',
    img: '/Climate-Mitigate.png',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/stream.svg', '/c.svg'],
    link: 'https://cm-v2.onrender.com/login',
  },
  {
    id: 3,
    title: 'Green Origin',
    des: `From Farm to Fork - Traceability Made Easy
Discover a new level of transparency and efficiency for agriculture in Mauritius. Our platform leverages blockchain technology to provide real-time traceability from farm to fork, ensuring the authenticity and quality of your produce. Whether you're a farmer, distributor, or retailer, our tool connects all players in the supply chain, enhancing trust and simplifying compliance. Join us in making our local agricultural supply chain more transparent and accessible to everyone.`,
    img: './green-Origin.png',
    iconLists: ['/re.svg', '/tail.svg', '/ts.svg', '/three.svg', '/c.svg'],
    link: 'https://www.greenorigin.org/',
  },
  {
    id: 4,
    title: 'Animated Apple Iphone 3D Website',
    des: 'Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..',
    img: '/p4.svg',
    iconLists: ['/next.svg', '/tail.svg', '/ts.svg', '/three.svg', '/gsap.svg'],
    link: 'https://github.com/adrianhajdin/iphone',
  },
];

export const testimonials = [
  {
    quote:
      'Working with [Your Name] was a game-changer for our business. He took our outdated website and turned it into a sleek, high-performing platform. The responsiveness and smooth user experience have significantly boosted our conversions. Highly recommended!',
    name: 'James Carter',
    title: 'Founder of Carter Consulting',
  },
  {
    quote:
      'I needed a custom e-commerce website, and [Your Name] delivered beyond my expectations. From seamless API integration to pixel-perfect UI, every detail was handled with care. The site is fast, mobile-friendly, and exactly what I envisioned. Will definitely hire again!',
    name: 'Sarah Thompson',
    title: 'E-commerce Store Owner',
  },
  {
    quote:
      'From the very first meeting, [Your Name] understood our vision and executed it flawlessly. His knowledge of React and Node.js is outstanding. Our internal dashboard is now much more efficient, saving us hours of manual work every week!',
    name: 'David Nguyen',
    title: 'CEO of TechNova Solutions',
  },
  {
    quote:
      'I had a tight deadline for a marketing campaign, and [Your Name] delivered the landing page ahead of schedule! The animations, responsiveness, and speed optimization were spot on. If you need a web developer who truly understands business needs, look no further!',
    name: 'Lisa Rodriguez',
    title: 'Marketing Director at BrightMedia',
  },
  {
    quote:
      "We were struggling with our fintech platform's UI/UX, but [Your Name] completely transformed it. His expertise in frontend development and API integration made everything seamless. Now, our users love the experience, and engagement has increased dramatically!",
    name: 'Ahmed Ali',
    title: 'Startup Founder, FinTechX',
  },
];

export const companies = [
  {
    id: 1,
    name: 'cloudinary',
    img: '/cloud.svg',
    nameImg: '/cloudName.svg',
  },
  {
    id: 2,
    name: 'appwrite',
    img: '/app.svg',
    nameImg: '/appName.svg',
  },
  {
    id: 3,
    name: 'HOSTINGER',
    img: '/host.svg',
    nameImg: '/hostName.svg',
  },
  {
    id: 4,
    name: 'stream',
    img: '/s.svg',
    nameImg: '/streamName.svg',
  },
  {
    id: 5,
    name: 'docker.',
    img: '/dock.svg',
    nameImg: '/dockerName.svg',
  },
];

export const workExperience = [
  {
    id: 1,
    title: 'Associate Software Developer',
    desc: 'Developed and maintained user-facing features using modern frontend technologies.',
    className: 'md:col-span-2',
    thumbnail: '/exp1.svg',
  },
  {
    id: 2,
    title: 'Web 3 Developer',
    desc: 'Building Dapp for a decentralized application that allows users to buy presale tokens.',
    className: 'md:col-span-2', // change to md:col-span-2
    thumbnail: '/exp2.svg',
  },
  // {
  //   id: 3,
  //   title: 'Freelance App Dev Project',
  //   desc: 'Led the dev of a mobile app for a client, from initial concept to deployment on app stores.',
  //   className: 'md:col-span-2', // change to md:col-span-2
  //   thumbnail: '/exp3.svg',
  // },
  // {
  //   id: 4,
  //   title: 'Lead Frontend Developer',
  //   desc: 'Developed and maintained user-facing features using modern frontend technologies.',
  //   className: 'md:col-span-2',
  //   thumbnail: '/exp4.svg',
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: '/git.svg',
    link: 'https://github.com/Prakash674',
  },
  {
    id: 2,
    img: '/twit.svg',
    link: 'https://x.com/PrakashK95439',
  },
  {
    id: 3,
    img: '/link.svg',
    link: 'https://www.linkedin.com/in/prakashk9572/',
  },
];
