import mod from "astro/zod";


const experience = [
  {
    role: "Fullstack Engineer",
    company: "Veiligwerk",
    location: "Weesp",
    startDate: "June 2023",
    endDate: "Present",
    description: [
      "Working on a variety of software and infrastructure projects using python, React, Node and SQL to perform tasks such as migration scripts, API's, web applications and LLM agentic workflows.",
    ],
  },
  {
    role: "Embedded Analytics Consultant",
    company: "Biztory",
    location: "Amsterdam",
    startDate: "November 2021",
    endDate: "March 2023",
    description: [
      "Providing technical expertise to clients looking to embed Tableau in their existing portals.",
      "Supporting clients with Tableau Server installs and upgrades.",
      "Understanding how performance is driven in Tableau and helping clients identify the root cause of performance-related issues stemming from Tableau Desktop or Tableau Server.",
      "Working with the Tableau API's for both performance analysis and automation of tasks.",
      "Helping clients manage their users and content on Tableau Server.",
      "Providing support for Tableau Desktop technical issues.",
    ],
  },
  {
    role: "Crypto Content Writer & Market Analyst",
    company: "SonOfCrypto.com",
    location: "Amsterdam",
    startDate: "February 2021",
    endDate: "November 2021",
    description: [
      "Writing articles about relevant financial news in the crypto space and about price prediction.",
    ],
  },
  {
    role: "Mathematics Teacher for Engineering & Computer Science",
    company: "Study Group",
    location: "Amsterdam",
    startDate: "September 2018",
    endDate: "September 2021",
    description: [
      "Teaching algebra and calculus to international engineering and Computer Science students.",
    ],
  },
  {
    role: "Financial Account Manager",
    company: "Fundbox",
    location: "Tel-Aviv",
    startDate: "March 2017",
    endDate: "August 2017",
    description: [
      "Implementing procedures for collecting, analyzing, verifying, and reporting financial information from managed accounts and developing specific custom financial plans for clients.",
    ],
  },
  {
    role: "Financial analyst",
    company: "MIG Financial Services",
    location: "Tel-Aviv",
    startDate: "May 2016",
    endDate: "February 2017",
    description: [
      "Providing financial insight in Forex, stock and commodities markets for MIG clients.",
    ],
  },
  {
    role: "Team leader R&D Engineer",
    company: "HotClick",
    location: "Santiago de Chile",
    startDate: "January 2015",
    endDate: "April 2016",
    description: [
      "Researching, designing and developing of self-heating vacuum flask for Creative Business Cup award-winning high tech startup from University of Desarrollo in Chile.",
    ],
  },

];


const education = [
  {
    program: "Fullstack JavaScript Developer",
    institution: "Codaisseur, Amsterdam",
    startDate: "May 2020",
    endDate: "July 2020",
    description: [
      "Intensive fullstack JavaScript developer Bootcamp."
    ],
  },
  {
    program: "Executive Postgraduate in Strategic Sales & Management",
    institution: "Pontificia Universidad Catolica de Chile, Santiago de Chile",
    startDate: "April 2015",
    endDate: "December 2015",
    description: [
      "Postgraduate program focused on strategic sales techniques and management skills."
    ],
  },
  {
    program: "BSc Chemical Engineering",
    institution: "Universidad de Concepcion, Concepcion",
    startDate: "March 2009",
    endDate: "August 2014",
    description: [
      "Undergraduate program in chemical engineering with a focus on process engineering, materials science, and industrial chemistry."
    ],
  },

];

export  {experience};
export { education };
