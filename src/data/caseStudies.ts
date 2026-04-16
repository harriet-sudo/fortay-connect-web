export interface CaseStudy {
  slug: string;
  client: string;
  industry: string;
  partner: string;
  date: string;
  headline: string;
  summary: string;
  tags: string[];
  about: string;
  challenge: string;
  solution: string;
  results: string;
  testimonial?: string;
  testimonialAuthor?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "your-world-recruitment-avaya",
    client: "Your World Recruitment",
    industry: "Recruitment / Healthcare Staffing",
    partner: "Avaya Cloud Office",
    date: "7 June 2023",
    headline: "Your World Recruitment Drives Global Improvements with Avaya Cloud Office",
    summary: "A global healthcare staffing organisation modernised its contact centre with Avaya Cloud Office, enabling remote-first operations and improving agent performance across international markets.",
    tags: ["Contact Centre", "Avaya", "RingCentral", "Cloud Migration"],
    about: "Your World Recruitment is a global staffing organisation providing careers to experienced healthcare professionals worldwide. Operating across multiple countries, they place thousands of healthcare specialists into critical roles each year.",
    challenge: "Your World Recruitment was managing a dispersed workforce across international markets using a fragmented, on-premise telephony setup. Agents struggled with poor visibility of call data, inconsistent communication tools, and limited ability to collaborate across borders. Leadership needed a cloud-based solution that would scale globally without increasing operational complexity.",
    solution: "Fortay Connect worked with Your World Recruitment to deploy Avaya Cloud Office, a unified cloud communications platform built on RingCentral's infrastructure. The solution consolidated voice, messaging and video into a single platform accessible from any device or location. Agents gained real-time performance dashboards, supervisors gained queue visibility, and the IT team reduced its management overhead significantly.",
    results: "Following deployment, Your World Recruitment saw measurable improvements in agent productivity and management reporting. Global teams could now collaborate seamlessly, call quality improved across regions, and the organisation gained the operational resilience needed to support continued international growth.",
    testimonial: undefined,
    testimonialAuthor: undefined,
  },
  {
    slug: "garden-court-chambers-avaya",
    client: "Garden Court Chambers",
    industry: "Legal / Barristers' Chambers",
    partner: "Avaya",
    date: "16 May 2021",
    headline: "Winning Communications for Garden Court Chambers' Barristers",
    summary: "London's largest barristers' chambers replaced an ageing on-premise phone system with a modern, flexible Avaya solution, improving responsiveness for clients and reducing administrative overhead for clerks.",
    tags: ["Unified Communications", "Avaya", "Legal"],
    about: "Founded in 1974, Garden Court Chambers is the largest barristers' chambers in London. With leading barristers and expert QCs providing legal advice across a range of complex practice areas, the chambers handles some of the most sensitive and high-profile cases in the UK.",
    challenge: "Garden Court Chambers was operating on an outdated on-premise telephony system that struggled to meet the demands of a modern legal practice. Barristers needed reliable, flexible communications that could handle the chambers' complex call-routing requirements, including out-of-hours and urgent client contact. The existing system lacked resilience and provided no capability for remote working.",
    solution: "Fortay Connect recommended and deployed an Avaya IP Office solution, providing the chambers with a modern, feature-rich communications platform. The solution included intelligent call routing, voicemail-to-email, and the ability for barristers and clerks to handle calls from any device. The deployment was structured to minimise disruption to the chambers' ongoing casework.",
    results: "Garden Court Chambers now benefits from a resilient, professional communications setup that supports flexible working for both clerks and barristers. Client calls are routed accurately and efficiently, out-of-hours contact is handled professionally, and the clerking team has greater control over communications management.",
    testimonial: undefined,
    testimonialAuthor: undefined,
  },
  {
    slug: "esi-technologies-gotoconnect",
    client: "ESI Technologies",
    industry: "Engineering / Life Sciences",
    partner: "GoToConnect",
    date: "6 January 2021",
    headline: "Total Transformation in Communications for ESI Technologies",
    summary: "A leading engineering and process equipment supplier replaced its legacy PBX with GoToConnect, achieving a fully cloud-based unified communications environment that supports international collaboration.",
    tags: ["Unified Communications", "GoToConnect", "Cloud Migration"],
    about: "Established in 1919, ESI Technologies is a leading supplier of process equipment and engineering solutions for the biotech, pharmaceutical, chemical, food and beverage industries. With offices across Europe, the company supports mission-critical production environments for some of the world's leading manufacturers.",
    challenge: "ESI Technologies was running ageing on-premise PBX infrastructure that required costly maintenance and failed to support cross-border collaboration. Remote working was limited, international calling costs were high, and the system offered no integration with the company's broader digital tools. A move to cloud communications was identified as business-critical.",
    solution: "Fortay Connect designed and delivered a GoToConnect deployment for ESI Technologies, migrating the entire business onto a cloud-based unified communications platform. The solution provided a single system for voice, video, and messaging, accessible from desktop and mobile. Number porting was managed by Fortay Connect, ensuring a seamless transition with no disruption to inbound call handling.",
    results: "ESI Technologies completed its move to cloud communications and immediately saw reductions in international call costs and IT maintenance overheads. Teams across Ireland and the UK could now collaborate on a single platform, with consistent call quality and full mobile working capability. The business was well positioned for further international growth.",
    testimonial: undefined,
    testimonialAuthor: undefined,
  },
  {
    slug: "paragon-law-gotoconnect",
    client: "Paragon Law",
    industry: "Legal / Immigration Law",
    partner: "GoToConnect",
    date: "21 January 2020",
    headline: "Paragon Law Selects GoToConnect",
    summary: "A specialist immigration law firm rapidly deployed GoToConnect during the Covid-19 pandemic, replacing a traditional office phone system with a fully integrated cloud solution for voice, video and collaboration.",
    tags: ["GoToConnect", "Legal", "Video", "Remote Working"],
    about: "Paragon Law is a niche immigration law firm, with specialisations in corporate and personal immigration, asylum and human rights. Founded in the UK in 2003, the firm is based in Nottingham with a global client base and associate offices in the US and Nigeria.",
    challenge: "When Covid-19 hit, Paragon Law had to fast-track its plans to implement remote working. The company had always used a traditional office phone system, which meant phones had to be diverted to mobiles when staff worked from home. The system could only facilitate basic conference calls and had no capability for video calls or document sharing. Group CEO Thal Vasishta explains: \"We recognised that the physical office could be a thing of the past. But in our business, it's important to have face-to-face conversations with clients, who may be vulnerable or in difficult situations. Security is also very important, and we were concerned about the risks of using some of the freely available video-calling software.\"",
    solution: "Paragon Law needed an integrated videoconferencing and phone system. Fortay Connect arranged a discovery session with GoTo, demonstrating how GoToConnect could solve the firm's problems. Just two days later, the order was placed. GoToMeeting was set up within days to address the pressing need for secure online meetings. GoToConnect, the unified, cloud-based phone solution, went live within a month. Because GoTo is a cloud-based SaaS solution, Paragon Law moved to a single monthly per-user fee, replacing the capital costs and variable charges of their previous system. The monthly fee includes phone, videoconferencing, all calls, support, maintenance and software updates.",
    results: "GoToMeeting and GoToConnect had an immediate impact. Teams could work from anywhere on any device. Videoconferencing was integrated into the software, enabling multiple people to connect easily regardless of location. The firm also moved to delivering client seminars via videoconference, and subsequently adopted GoToWebinar to elevate the professionalism of its online events.",
    testimonial: "We had a detailed look at all the phone and video-calling systems available and GoTo was the best by a country mile. It's had a huge impact on the way we collaborate as a team and the service we can offer to clients. It means that when we think about growth now, we don't have to think in terms of larger offices, since all our people can work and connect easily from anywhere.",
    testimonialAuthor: "Thal Vasishta, Group CEO, Paragon Law",
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find(cs => cs.slug === slug);
