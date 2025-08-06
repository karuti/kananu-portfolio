import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Joy",
  lastName: "Karuti",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Product Manager",
  avatar: "/images/profile.jpg",
  email: "mskaruti@gmail.com",
  location: "Africa/Nairobi", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
   {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/karuti-joy/",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/karuti",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Innovating with Intention</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">EB2B Retailers App</strong></>,
    href: "/work/projects/eb2b-retailers-app",
  },
  subline: (
    <>
      I'm Joy, a seasoned Product Manager & Designer with a 5-year track record of fusing 
design and strategy to craft user-centric, impactful products.

      <br />
        <br /> 
       I'm currently channeling my creativity into creating delightful experiences at FieldPro by Optimetriks.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/mskaruti/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Driven Product Manager with over 5 years experience leading the development of B2B SaaS products across iOS, 
        Android, and Web platforms. 

          <br />   
        <br /> 

        Demonstrated success in managing remote cross-functional teams, launching self-service trials that increased qualified leads by 10%, and reducing mobile development time through the implementation of scalable design systems. 
        Oversaw delivery of customer-facing features across multiple markets, supported by user research and data-driven roadmaps.   
        <br />   
        <br /> 

        Looking to transfer these skills into a remote-focused product management role that values user-centric design, cross-functional collaboration, and measurable business impact.

      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "FieldPro by Optimetriks",
        timeframe: "May 2023 - Present",
        role: "Product Manager",
        achievements: [
          <>
            Delivered a fully localized eB2B mobile app for Turkiye market, enabling a successful launch with over 300 active users in the first quarter.

          </>,
          <>
           Coordinated a remote, cross-functional team of designers, engineers, and business stakeholders across three countries to execute roadmap deliverables.

          </>,
            <>
          Conducted 25+ user interviews and competitive analyses to inform strategic feature prioritization, reducing support tickets by improving UX flow.

          </>,
             <>
         Facilitated discovery workshops to align customer pain points with product opportunities, leading to development of two high-impact features.
          </>,
             <>
         Defined API specifications in collaboration with engineering, ensuring seamless integration of backend services and consistent user experience across platforms.

          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/Cover8.png",
            alt: "FieldPro",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "FieldPro by Optimetriks",
        timeframe: "2020- 2023",
        role: "Lead Product Designer",
        achievements: [
          <>
            Mentored and developed a team of 4 UX designers, resulting in improved design output and reduced design-to-development handover issues.
          </>,
          <>
            Implemented a modular design system for mobile development that cut developer iteration cycles from 8 days to 6, increasing sprint delivery efficiency

          </>,
            <>
           Led redesign of the company’s flagship dashboard, decreasing average user task completion time from 4 minutes to under 2 minutes.
          </>,
            <>
           Produced over 50 high-fidelity mockups in Figma to standardize the design process and improve consistency across the product suite.

          </>,
            <>
           Collaborated remotely with marketing and development teams to deliver design assets and content for feature releases and client demos.

          </>,
             <>
           Initiated usability testing sessions that uncovered critical navigation issues, informing UI updates that improved customer satisfaction.

          </>,
             <>
           Partnered with product managers to define user stories and design wireframes aligned to business requirements.

          </>,
              <>
           Delivered detailed design documentation and interactive prototypes that accelerated stakeholder buy-in and reduced rework in development cycles.


          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
       {
        name: "Reforge",
        description: <>Product Management.</>,
      },
      {
        name: "University of Suffolk",
        description: <>Masters in Business Administration.</>,
      },
      {
        name: "Multimedia University",
        description: <>Bachelors in Software Engineering.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Skills",
    skills: [
      {
        title: "Product",
        description: <>Product Management,Market Analysis, API Integration, Roadmap Planning, 
         Feature Launches, Cross-Functional Collaboration, Mobile Development, B2B SaaS, Product Strategy, Data Analysis, </>,
        // optional: leave the array empty if you don't want to display images
        images: [
        
        ],
      },
      {
        title: "Design",
        description: <> UX Design, User Research,Design Systems,Usability Testing</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
       {
        title: "React / Next.js/ Gatsby.js",
        description: <> Building next gen apps with Next.js and others frameworks.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
       {
        title: "Figma",
        description: <> Able to prototype, micro interation, wireframes and low fidelity prototype in Figma.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

export { person, social, newsletter, home, about, blog, work };