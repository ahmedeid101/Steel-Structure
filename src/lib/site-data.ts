// Single source of truth — edit these values to update the entire site.
// LinkedIn: https://www.linkedin.com/in/eslam-maher-732624289/

export const site = {
  name: "Eslam Maher",
  title: "Steel Structure Engineer",
  tagline: "Designing reliable steel structures from concept to construction.",
  summary:
    "Civil and structural engineer specializing in steel structures, industrial buildings, and on-site construction supervision. I combine analytical design with hands-on site experience to deliver safe, efficient, and code-compliant projects.",
  yearsExperience: 2,
  location: "Cairo, Egypt",
  email: "eslam.maher.eng@gmail.com",
  phone: "+20 100 000 0000",
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
    role: "Steel Structure Design Engineer",
    company: "Steel Works Engineering",
    period: "2023 — Present",
    location: "Cairo, Egypt",
    points: [
      "Lead structural design for industrial halls, warehouses, and PEB projects up to 60 m span.",
      "Performed analysis and member design using SAP2000, Tekla Structures, and STAAD.Pro.",
      "Coordinated with architects, MEP, and fabrication teams to optimize tonnage and constructability.",
    ],
  },
  {
    role: "Site Structural Engineer",
    company: "Orascom Construction",
    period: "2021 — 2023",
    location: "Egypt / GCC",
    points: [
      "Supervised erection of steel frames, trusses, and roof systems for industrial facilities.",
      "Managed daily QA/QC: bolt torque inspection, weld checks, and dimensional control.",
      "Resolved on-site clashes between fabricator drawings and field conditions.",
    ],
  },
  {
    role: "Junior Structural Engineer",
    company: "Hassan Allam Construction",
    period: "2020 — 2021",
    location: "Cairo, Egypt",
    points: [
      "Assisted senior engineers in concrete and steel design for mixed-use developments.",
      "Prepared RC detailing, BBS, and shop drawing reviews.",
      "Conducted site visits and material acceptance reports.",
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
    items: ["Steel Structures", "Connection Design", "PEB / MBS", "RC Design", "Seismic Analysis", "Wind & Crane Loads"],
  },
  {
    label: "Software",
    items: ["SAP2000", "Tekla Structures", "STAAD.Pro", "ETABS", "AutoCAD", "Revit", "Robot Structural"],
  },
  {
    label: "Site & Construction",
    items: ["Site Supervision", "QA / QC", "Erection Planning", "Shop Drawings", "Bolt & Weld Inspection"],
  },
  {
    label: "Codes & Standards",
    items: ["AISC 360", "Eurocode 3", "ASCE 7", "ECP 201/203", "AWS D1.1"],
  },
];

export const education = [
  {
    title: "B.Sc. in Civil Engineering",
    org: "Faculty of Engineering — Egyptian University",
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
