export interface ExperienceData {
  title: string;
  company: string;
  location: string;
  duration: string;
  responsibilities: string[];
}

export const experienceData: ExperienceData[] = [
  {
    title: "Software Engineer",
    company: "Revmatics, Inc.",
    location: "Lehi, Utah",
    duration: "May 2025 – Sept 2025",
    responsibilities: [
      "Developed, tested, and deployed website features in preparation for app demos and releases",
      "Collaborated closely with Product and Design teams to make UX/UI decisions"
    ]
  },
  {
    title: "Front-End Engineering Intern",
    company: "Nerd United",
    location: "Lehi, Utah",
    duration: "May 2023 – Aug 2023",
    responsibilities: [
      "Developed and deployed website features (wallet creation, checkout/card, payments) for an interface with 25k+ users that generated $20m+ in revenue",
      "Worked in an Agile scrum team – Jira, Github, AWS"
    ]
  },
  {
    title: "Quality Assurance Intern",
    company: "Nerd United",
    location: "Lehi, Utah",
    duration: "May 2022 – Aug 2022",
    responsibilities: [
      "Automated testing using JavaScript and Python and coordinated with a scrum team to prepare for product releases",
      "Extensively tested new and existing website features"
    ]
  },
  {
    title: "Lab Support Representative",
    company: "USU College of Electrical and Computer Engineering",
    location: "Logan, Utah",
    duration: "Mar 2022 – May 2025",
    responsibilities: [
      "Managed store website updates and ran the store using Computer and Electrical Engineering knowledge",
      "Facilitated labs and projects with professors and grad students"
    ]
  }
];
