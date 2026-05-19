// Single source of truth — edit these values to update the entire site.
// LinkedIn: https://www.linkedin.com/in/eslam-maher-732624289/

export const site = {
  name: "Eslam Maher",
  title: "Steel Structure Engineer",
  tagline: "Designing reliable steel structures from concept to construction.",
  summary:
    "Civil and structural engineer specializing in steel structures, industrial buildings, and on-site construction supervision. I combine analytical design with hands-on site experience to deliver safe, efficient, and code-compliant projects.",
  yearsExperience: 3,
  location: "Cairo, Egypt",
  email: "eslmaher123@gmail.com",
  phone: "+201115297010",
  linkedin: "https://www.linkedin.com/in/eslam-maher-732624289/",
  cvUrl: "/Eslam-Maher-Salama-Ramadan-CV.pdf",
};

export const strengths = [
  "Steel structure design & detailing per AISC and Eurocode 3",
  "Industrial halls, warehouses, pre-engineered buildings (PEB)",
  "Connection design, base plates, and anchor bolts",
  "Site supervision, erection, and quality control",
  "Shop drawing review and as-built coordination",
  "Load analysis: wind, seismic, crane, and dynamic",
];

export const experience = [
  {
    role: "Structural Engineer — Steel Detailer BIM Engineer",
    company: "Adwa' Versay Construction",
    period: "Jul 2024 — Present",
    location: "Al Kharj, Riyadh, Saudi Arabia",
    points: [
      "Working on Al Kharj Entertainment Complex Project with Hassan Allam Construction, including Administration Offices and warehouses.",
      "Performing steel structure design, detailing, and BIM coordination for industrial and commercial facilities.",
    ],
  },
  {
    role: "Steel Technical Office Engineer",
    company: "Advanced International Trade Company (AITCO)",
    period: "Apr 2024 — Jun 2024",
    location: "Riyadh, Saudi Arabia",
    points: [
      "Steel Technical Office Engineer at steel fabrication, handling steel structure design and detailing.",
      "Coordinated shop drawings, material take-offs, and fabrication documentation.",
    ],
  },
  {
    role: "Technical Office Engineer — Steel Fabrication & QC",
    company: "Engineering Building Firm (EBF)",
    period: "Oct 2023 — Mar 2024",
    location: "Cairo, Egypt",
    points: [
      "Steel Structure Engineer for steel design and detailing.",
      "Managed quality control processes for steel fabrication and ensured compliance with project specifications.",
    ],
  },
];

import warehouse from "@/assets/project-warehouse.jpg";
import bridge from "@/assets/project-bridge.jpg";
import tower from "@/assets/project-tower.jpg";

export const projects = [
  {
    title: "Industrial Steel Hall — 48 m Clear Span",
    description:
      "Design and detailing of a heavy-duty manufacturing hall with overhead crane (20-ton). Optimized truss geometry reduced steel tonnage by 12%.",
    tags: ["SAP2000", "Tekla", "AISC 360", "Crane Load"],
    image: warehouse,
  },
  {
    title: "Pedestrian Steel Bridge",
    description:
      "Lattice truss footbridge spanning 32 m. Performed dynamic analysis for pedestrian comfort and designed bolted splice connections.",
    tags: ["STAAD.Pro", "Eurocode 3", "Dynamic Analysis"],
    image: bridge,
  },
  {
    title: "High-Rise Composite Frame",
    description:
      "Site supervision for the erection of a 14-story composite steel-concrete tower, coordinating fabrication, delivery, and installation.",
    tags: ["Site Supervision", "Composite Design", "QA/QC"],
    image: tower,
  },
  {
    title: "Pre-Engineered Warehouse Complex",
    description:
      "Series of three PEB warehouses (total 18,000 m²) with mezzanine floors and built-up sections. Delivered shop drawings and erection sequence.",
    tags: ["PEB", "MBS", "Shop Drawings"],
    image: warehouse,
  },
  {
    title: "Oil & Gas Pipe Rack",
    description:
      "Structural design of a multi-tier pipe rack including thermal, wind, and seismic loads. Detailed moment and braced connections.",
    tags: ["SAP2000", "Pipe Rack", "Seismic"],
    image: bridge,
  },
  {
    title: "Stadium Roof Retrofit",
    description:
      "Structural assessment and reinforcement design for an existing stadium steel roof, including connection upgrades and corrosion repair.",
    tags: ["Retrofit", "Inspection", "Repair Design"],
    image: tower,
  },
];

export const skillGroups = [
  {
    label: "Structural Design",
    items: [
      "Steel Structures",
      "Connection Design",
      "PEB / MBS",
      "RC Design",
      "Seismic Analysis",
      "Wind & Crane Loads",
    ],
  },
  {
    label: "Software",
    items: [
      "SAP2000",
      "Tekla Structures",
      "STAAD.Pro",
      "ETABS",
      "AutoCAD",
      "Revit",
      "Robot Structural",
    ],
  },
  {
    label: "Site & Construction",
    items: [
      "Site Supervision",
      "QA / QC",
      "Erection Planning",
      "Shop Drawings",
      "Bolt & Weld Inspection",
    ],
  },
  {
    label: "Codes & Standards",
    items: ["AISC 360", "Eurocode 3", "ASCE 7", "ECP 201/203", "AWS D1.1"],
  },
];

export const education = [
  {
    title: "B.Sc. in Civil Engineering",
    org: "Faculty of Engineering — Al-Azhar University",
    period: "2016 — 2020",
    note: "Structural Engineering track. Graduation project: Steel Industrial Building Design.",
  },
];

export const certifications = [
  { title: "Steel Structures Design — AISC 360", org: "Professional Course" },
  { title: "Tekla Structures — Advanced Modeling", org: "Authorized Training Center" },
  { title: "PMP Foundations", org: "Project Management Institute" },
  { title: "OSHA Construction Safety", org: "Occupational Safety Training" },
];
