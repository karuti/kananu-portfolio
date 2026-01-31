import { Logo } from "@once-ui-system/core";
const baseURL = "https://karuti.co.ke";
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
      I'm Joy, a seasoned Product Manager & Designer with a 6-year track record of fusing 
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
      
        Senior UX  Designer and product manager with 6+ years creating user-centered experiences for 
        B2B SaaS products serving 300+ enterprise clients across Africa and Vietnam. 
         <br />   
        <br />  
        Expert in transforming complex workflows into intuitive interfaces through behavioral science principles, 
        user research, and rapid prototyping. 
         <br /> 
        <br />    
        Led design systems implementation reducing development cycles by 25% and drove 75% improvement in 
        user adoption through data-informed design decisions grounded in behavioral economics. 
         <br />
            <br />     
        Proven track record managing design teams across multiple countries and collaborating with 
        engineering and product to deliver industry-leading experiences that balance user needs with business goals.


          <br />   
        <br /> 

      <b>KEY DESIGN ACHIEVEMENTS</b>

<li> <b>User Experience Impact:</b> Increased CRM user adoption from 17% to 75% through comprehensive UX research, 
  behavioral psychology-informed design patterns,and iterative prototyping across 50+ screens serving 300+ enterprise users</li>
<li> <b>Design Systems Excellence:</b> Built and scaled modular design system with 20+ reusable components achieving 100% team adoption, reducing mobile development iteration cycles by 25% (8 days → 6 days) and ensuring cohesive experiences across iOS, Android, and web platforms
</li>
<li> <b>Behavioral Science Application:</b> Applied behavioral economics frameworks to e-commerce UX achieving 45-60% engagement rates (2-3x industry benchmark) and 
173% revenue growth through strategic nudges, friction reduction, and user journey optimization
</li>
<li> <b>Cross-Functional Design Leadership:</b> Collaborated with product and engineering teams across 3 countries (Mexico, France, Senegal) to deliver complex features on time while maintaining high craft standards and design consistency across product suite

</li>
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
        role: "Product Manager (Design-Led Product Development)",
        achievements: [
           <>
           <b>User Experience & Design Strategy</b>
          </>,
          <>
           Drive user-centered product development for B2B SaaS platform using design thinking methodologies and behavioral science principles to balance user needs, technical constraints, and business objectives across multi-platform experiences (iOS, Android, web)

          </>,
          <>
           Design and prototype complex interaction patterns for enterprise features including multi-dimensional territory management hierarchies, customer validation workflows, and data visualization systems, conducting rapid iteration cycles based on user feedback and behavioral insights


          </>,
            <>
Architected modular design framework enabling scalable customization for enterprise clients while maintaining cohesive self-service experiences for 91% SMB customer base, leveraging behavioral economics to reduce decision fatigue and cognitive load

          </>,
             <>
Lead user research initiatives including contextual inquiries with field sales teams, uncovering workflow pain points and cognitive barriers that informed strategic product direction across Field Visibility, CRM, and Sales Enablement features
          </>,
           <>
           <b>Cross-Functional Collaboration & Design Systems</b>
          </>,
             <>
Collaborate closely with engineering team of 9 (2 mobile, 7 web/backend) to define interaction specifications, UI patterns, and design-to-development handoff processes, maintaining 80%+ on-time delivery rate while upholding design quality standards

          </>,
            <>
Facilitate design critique sessions and discovery workshops with cross-functional stakeholders, translating business requirements into elegant user experiences through wireframing, prototyping, and iterative refinement

          </>,
              <>
Established design QA process integrating usability heuristics and accessibility standards, catching critical issues before production and preventing negative user impact across 300+ enterprise accounts

          </>,
           <>
Track and optimize design KPIs including user activation rates (addressing 62.5% non-activation through behavioral interventions), feature adoption metrics, and engagement patterns using analytics tools, driving data-informed iteration

          </>,
            <>
           <b>Market Research & User-Centered Design</b>
          </>,
   <>
          Owned end-to-end UX for new African market launch including user research, interaction design, usability testing, and post-launch optimization resulting in 300+ enterprise user activation in Q1

          </>,
           <>
Conducted competitive analysis and heuristic evaluations to inform product positioning and identify differentiation opportunities, translating insights into actionable design improvements

          </>,
             <>
Created comprehensive user personas, journey maps, and empathy maps based on field research with sales representatives across diverse African markets, improving team alignment on user needs and motivations

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
           <b>Interaction Design & Prototyping</b>
          </>,
          <>
            Designed end-to-end user experiences for major product features from concept through launch, creating detailed wireframes, interactive prototypes, and high-fidelity mockups that balanced user needs with technical constraints

          </>,
          <>
Pioneered rapid prototyping workflows enabling quick validation of interaction patterns and micro-interactions before development, reducing costly rework and accelerating time-to-market
          </>,
            <>
Crafted intuitive navigation systems and information architectures for complex B2B workflows, conducting card sorting exercises and tree testing to validate IA decisions with actual users
          </>,
          
           
             <>
           <b>Design Systems & Team Leadership</b>
          </>,
            <>
Built comprehensive Unio Design System in Figma with 20+ reusable components, interaction patterns, and design tokens, achieving 100% adoption across mobile product team and establishing design standards for product suite

          </>,
              <>
Mentored team of 4 UX designers on interaction design principles, user research methodologies, and collaborative design processes, fostering culture of craft excellence and user advocacy


          </>,
             <>
Standardized design-to-development handoff processes including component specifications, interaction states, and responsive behaviors, reducing design-developer friction and implementation errors by 25%


          </>,
             <>
           <b>User Research & Usability Testing
</b>
          </>,
            <>
Led usability testing sessions with enterprise users that uncovered navigation bottlenecks and workflow inefficiencies, directly informing UI updates that improved task completion rates and user satisfaction scores


          </>,
            <>
Conducted competitive analysis and heuristic evaluations identifying market gaps and usability best practices, synthesizing findings into actionable design recommendations added to product roadmap


          </>,
           <>
Developed user personas and customer journey maps based on 25+ stakeholder interviews, improving cross-functional team alignment and informing feature prioritization decisions


          </>,
        ],
        images: [],
      },
       {
        company: "FieldPro by Optimetriks",
        timeframe: "Jun 2020 - Nov 2021",
        role: "Product Designer",
        achievements: [
         
          <>
Designed and shipped user-centered B2B SaaS features from concept to production using iterative design process involving sketching, wireframing, prototyping, and usability testing with target users

          </>,
          <>
Collaborated closely with cross-functional teams across product management, engineering, and marketing to define requirements, align on delivery timelines, and ensure design feasibility


          </>,
            <>
Conducted foundational user research including contextual inquiries and user interviews, developing personas and journey maps that established shared understanding of user needs across organization

          </>,
             <>
Built initial design system and UI component library in Figma, establishing visual design standards and interaction patterns that formed foundation for product design consistency
          </>,
         
             <>
Drove measurable improvements in user engagement metrics through data-informed design decisions, analyzing user behavior patterns and iterating based on quantitative and qualitative feedback

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
        company: "EMK",
        timeframe: "March - Sep 2025",
        role: "UX Consultant",
        achievements: [
         
          <>
Applied behavioral economics principles to design customer journey optimization systems for e-commerce platform, creating mobile-first experiences achieving 45-60% engagement rates (2-3x industry benchmark) through strategic friction reduction and choice architecture

          </>,
          <>
Conducted market research and user behavior analysis identifying cognitive barriers and decision-making patterns, designing behavioral interventions that increased conversion rates and generated 173% revenue growth


          </>,
            <>
Designed culturally-relevant experiences optimized for East African market, leveraging behavioral science insights on loss aversion, social proof, and default effects to drive automated revenue generation

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

export { person, social, newsletter, home, about, blog, work,baseURL  };