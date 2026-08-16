/* =====================================
   UniGuide AI — Application Logic
   ===================================== */

/* ---------- Data ---------- */

// Qualification data sourced from the official UniZulu 2026 undergraduate
// faculty handbooks (FCAL, FEDU, FHSS, FSAE). Includes every BSc double-major
// combination, BCom/BAdmin specialisation, and standalone programme found in
// those handbooks. Programme details can change after a handbook's
// publication — always confirm current APS cutoffs and requirements with
// the official UniZulu prospectus or registrar before applying.
// "combination" reflects the major/subject pairing a degree is built around.
// "status" flags programmes the handbook marks as having no new intake.
const QUALIFICATIONS = [
  {
    id: "bsc-applied-mathematics-computer-science",
    title: "BSc (Applied Mathematics & Computer Science)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC01"],
    combination: "Applied Mathematics & Computer Science",
    subjects: ["Mathematics (Level 5/60%)", "English (Level 4/50%)", "Physical Science or Info Technology (Level 4/50%)"],
    careers: ["Quantitative Analyst", "Operations Researcher", "Software Developer"]
  },
  {
    id: "bsc-applied-mathematics-hydrology",
    title: "BSc (Applied Mathematics & Hydrology)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC02"],
    combination: "Applied Mathematics & Hydrology",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 5/60%)", "Physical Science (Level 4/50%)"],
    careers: ["Quantitative Analyst", "Operations Researcher", "Hydrologist"]
  },
  {
    id: "bsc-applied-mathematics-mathematics",
    title: "BSc (Applied Mathematics & Mathematics)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC03"],
    combination: "Applied Mathematics & Mathematics",
    subjects: ["Mathematics (Level 5/60%)", "English (Level 4/50%)", "Physical Science or Info Technology or Life Sciences (Level 4/50%)"],
    careers: ["Quantitative Analyst", "Operations Researcher", "Mathematician"]
  },
  {
    id: "bsc-applied-mathematics-physics",
    title: "BSc (Applied Mathematics & Physics)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC04"],
    combination: "Applied Mathematics & Physics",
    subjects: ["Mathematics (Level 5/60%)", "English (Level 4/50%)", "Physical Science (Level 4/50%)"],
    careers: ["Quantitative Analyst", "Operations Researcher", "Physicist"]
  },
  {
    id: "bsc-applied-mathematics-statistics",
    title: "BSc (Applied Mathematics & Statistics)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC05"],
    combination: "Applied Mathematics & Statistics",
    subjects: ["Mathematics (Level 5/60%)", "English (Level 4/50%)", "Physical Science or Info Technology or Life Sciences (Level 4/50%)"],
    careers: ["Quantitative Analyst", "Operations Researcher", "Statistician"]
  },
  {
    id: "bsc-biochemistry-botany",
    title: "BSc (Biochemistry & Botany)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC06"],
    combination: "Biochemistry & Botany",
    subjects: ["Mathematics (Level 4/50%)", "English (Level 4/50%)", "Life Sciences (Level 4/50%)"],
    careers: ["Biochemist", "Research Scientist", "Botanist"]
  },
  {
    id: "bsc-biochemistry-chemistry",
    title: "BSc (Biochemistry & Chemistry)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC07"],
    combination: "Biochemistry & Chemistry",
    subjects: ["Mathematics (Level 5/60%)", "English (Level 4/50%)", "Physical Science (Level 4/50%)", "Life Sciences (Level 4/50%)"],
    careers: ["Biochemist", "Research Scientist", "Chemist"]
  },
  {
    id: "bsc-biochemistry-human-movement-science",
    title: "BSc (Biochemistry & Human Movement Science)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC08"],
    combination: "Biochemistry & Human Movement Science",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 4/50%)", "Physical Science (Level 4/50%)", "Life Sciences (Level 4/50%)"],
    careers: ["Biochemist", "Research Scientist", "Biokineticist (postgrad required)"]
  },
  {
    id: "bsc-biochemistry-microbiology",
    title: "BSc (Biochemistry & Microbiology)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC09"],
    combination: "Biochemistry & Microbiology",
    subjects: ["Mathematics (Level 4/50%)", "Life Sciences (Level 4/50%)", "English (Level 4/50%)"],
    careers: ["Biochemist", "Research Scientist", "Microbiologist"]
  },
  {
    id: "bsc-biochemistry-zoology",
    title: "BSc (Biochemistry & Zoology)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC10"],
    combination: "Biochemistry & Zoology",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 4/50%)", "Life Sciences (Level 4/50%)"],
    careers: ["Biochemist", "Research Scientist", "Zoologist"]
  },
  {
    id: "bsc-botany-geography",
    title: "BSc (Botany & Geography)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC11"],
    combination: "Botany & Geography",
    subjects: ["Mathematics (Level 4/50%)", "English (Level 4/50%)", "Life Sciences (Level 4/50%)", "Geography (Level 4/50%)"],
    careers: ["Botanist", "Plant Scientist", "GIS Analyst"]
  },
  {
    id: "bsc-botany-hydrology",
    title: "BSc (Botany & Hydrology)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC12"],
    combination: "Botany & Hydrology",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 4/50%)", "Physical Science (Level 4/50%)", "Life Sciences (Level 4/50%)"],
    careers: ["Botanist", "Plant Scientist", "Hydrologist"]
  },
  {
    id: "bsc-botany-microbiology",
    title: "BSc (Botany & Microbiology)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC13"],
    combination: "Botany & Microbiology",
    subjects: ["Mathematics (Level 4/50%)", "English (Level 4/50%)", "Life Sciences (Level 4/50%)"],
    careers: ["Botanist", "Plant Scientist", "Microbiologist"]
  },
  {
    id: "bsc-botany-zoology",
    title: "BSc (Botany & Zoology)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC14"],
    combination: "Botany & Zoology",
    subjects: ["Mathematics (Level 4/50%)", "English (Level 4/50%)", "Life Sciences (Level 4/50%)"],
    careers: ["Botanist", "Plant Scientist", "Zoologist"]
  },
  {
    id: "bsc-chemistry-computer-science",
    title: "BSc (Chemistry & Computer Science)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC15"],
    combination: "Chemistry & Computer Science",
    subjects: ["Mathematics (Level 5/60%)", "English (Level 4/50%)", "Physical Science (Level 4/50%)"],
    careers: ["Chemist", "Laboratory Analyst", "Software Developer"]
  },
  {
    id: "bsc-chemistry-hydrology",
    title: "BSc (Chemistry & Hydrology)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC16"],
    combination: "Chemistry & Hydrology",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 5/60%)", "Physical Science (Level 4/50%)"],
    careers: ["Chemist", "Laboratory Analyst", "Hydrologist"]
  },
  {
    id: "bsc-chemistry-mathematics",
    title: "BSc (Chemistry & Mathematics)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC17"],
    combination: "Chemistry & Mathematics",
    subjects: ["Mathematics (Level 5/60%)", "English (Level 4/50%)", "Physical Science (Level 4/50%)"],
    careers: ["Chemist", "Laboratory Analyst", "Mathematician"]
  },
  {
    id: "bsc-chemistry-physics",
    title: "BSc (Chemistry & Physics)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC18"],
    combination: "Chemistry & Physics",
    subjects: ["Mathematics (Level 5/60%)", "English (Level 4/50%)", "Physical Science (Level 4/50%)"],
    careers: ["Chemist", "Laboratory Analyst", "Physicist"]
  },
  {
    id: "bsc-chemistry-zoology",
    title: "BSc (Chemistry & Zoology)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC19"],
    combination: "Chemistry & Zoology",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 5/60%)", "Physical Science (Level 4/50%)", "Life Sciences (Level 4/50%)"],
    careers: ["Chemist", "Laboratory Analyst", "Zoologist"]
  },
  {
    id: "bsc-computer-science-hydrology",
    title: "BSc (Computer Science & Hydrology)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC20"],
    combination: "Computer Science & Hydrology",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 5/60%)", "Physical Science (Level 4/50%)"],
    careers: ["Software Developer", "Systems Analyst", "Hydrologist"]
  },
  {
    id: "bsc-computer-science-mathematics",
    title: "BSc (Computer Science & Mathematics)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC21"],
    combination: "Computer Science & Mathematics",
    subjects: ["Mathematics (Level 5/60%)", "English (Level 4/50%)", "Physical Science (Level 4/50%)"],
    careers: ["Software Developer", "Systems Analyst", "Mathematician"]
  },
  {
    id: "bsc-computer-science-physics",
    title: "BSc (Computer Science & Physics)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC22"],
    combination: "Computer Science & Physics",
    subjects: ["Mathematics (Level 5/60%)", "English (Level 4/50%)", "Physical Science (Level 4/50%)"],
    careers: ["Software Developer", "Systems Analyst", "Physicist"]
  },
  {
    id: "bsc-computer-science-statistics",
    title: "BSc (Computer Science & Statistics)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC23"],
    combination: "Computer Science & Statistics",
    subjects: ["Mathematics (Level 5/60%)", "English (Level 4/50%)", "Physical Science Or (Level 4/50%)"],
    careers: ["Software Developer", "Systems Analyst", "Statistician"]
  },
  {
    id: "bsc-geography-hydrology",
    title: "BSc (Geography & Hydrology)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC24"],
    combination: "Geography & Hydrology",
    subjects: ["English (Level 4/50%)", "Geography (Level 4/50%)", "Physical Science (Level 4/50%)"],
    careers: ["GIS Analyst", "Urban & Environmental Planner", "Hydrologist"]
  },
  {
    id: "bsc-geography-physics",
    title: "BSc (Geography & Physics)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC25"],
    combination: "Geography & Physics",
    subjects: ["English (Level 4/50%)", "Geography (Level 4/50%)", "Mathematics (Level 5/60%)", "Physical Science (Level 4/50%)"],
    careers: ["GIS Analyst", "Urban & Environmental Planner", "Physicist"]
  },
  {
    id: "bsc-geography-statistics",
    title: "BSc (Geography & Statistics)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC26"],
    combination: "Geography & Statistics",
    subjects: ["English (Level 4/50%)", "Geography (Level 4/50%)", "Mathematics (Level 5/60%)", "Physical Science (Level 4/50%)"],
    careers: ["GIS Analyst", "Urban & Environmental Planner", "Statistician"]
  },
  {
    id: "bsc-geography-zoology",
    title: "BSc (Geography & Zoology)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC27"],
    combination: "Geography & Zoology",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 4/50%)", "Life Sciences (Level 4/50%)"],
    careers: ["GIS Analyst", "Urban & Environmental Planner", "Zoologist"]
  },
  {
    id: "bsc-human-movement-science-physics",
    title: "BSc (Human Movement Science & Physics)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC28"],
    combination: "Human Movement Science & Physics",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 5/60%)", "Physical Science (Level 4/50%)", "Life Sciences (Level 4/50%)"],
    careers: ["Biokineticist (postgrad required)", "Sports Scientist", "Physicist"]
  },
  {
    id: "bsc-hydrology-microbiology",
    title: "BSc (Hydrology & Microbiology)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC30"],
    combination: "Hydrology & Microbiology",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 4/50%)", "Physical Science (Level 4/50%)", "Life Sciences (Level 4/50%)"],
    careers: ["Hydrologist", "Water Resource Scientist", "Microbiologist"]
  },
  {
    id: "bsc-hydrology-physics",
    title: "BSc (Hydrology & Physics)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC31"],
    combination: "Hydrology & Physics",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 5/60%)", "Physical Science (Level 4/50%)"],
    careers: ["Hydrologist", "Water Resource Scientist", "Physicist"]
  },
  {
    id: "bsc-hydrology-statistics",
    title: "BSc (Hydrology & Statistics)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC32"],
    combination: "Hydrology & Statistics",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 5/60%)", "Physical Science (Level 4/50%)"],
    careers: ["Hydrologist", "Water Resource Scientist", "Statistician"]
  },
  {
    id: "bsc-hydrology-zoology",
    title: "BSc (Hydrology & Zoology)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC33"],
    combination: "Hydrology & Zoology",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 4/50%)", "Physical Science (Level 4/50%)", "Life Sciences (Level 4/50%)"],
    careers: ["Hydrologist", "Water Resource Scientist", "Zoologist"]
  },
  {
    id: "bsc-mathematics-physics",
    title: "BSc (Mathematics & Physics)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC34"],
    combination: "Mathematics & Physics",
    subjects: ["Mathematics (Level 5/60%)", "English (Level 4/50%)", "Physical Science (Level 4/50%)"],
    careers: ["Mathematician", "Actuarial Analyst", "Physicist"]
  },
  {
    id: "bsc-mathematics-statistics",
    title: "BSc (Mathematics & Statistics)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC35"],
    combination: "Mathematics & Statistics",
    subjects: ["Mathematics (Level 5/60%)", "English (Level 4/50%)", "Physical Science or Info Technology or Life Sciences (Level 4/50%)"],
    careers: ["Mathematician", "Actuarial Analyst", "Statistician"]
  },
  {
    id: "bsc-microbiology-zoology",
    title: "BSc (Microbiology & Zoology)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC36"],
    combination: "Microbiology & Zoology",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 4/50%)", "Life Sciences (Level 4/50%)"],
    careers: ["Microbiologist", "Lab Technologist", "Zoologist"]
  },
  {
    id: "bsc-microbiology-human-movement-science",
    title: "BSc (Microbiology & Human Movement Science)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science", "4BSC37"],
    combination: "Microbiology & Human Movement Science",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 4/50%)", "Physical Science (Level 4/50%)", "Life Sciences (Level 4/50%)"],
    careers: ["Microbiologist", "Lab Technologist", "Biokineticist (postgrad required)"]
  },
  {
    id: "bsc-agric-agronomy",
    title: "BSc Agriculture (Agronomy)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "4 Years",
    campus: "KwaDlangezwa",
    tags: ["Science"],
    combination: "Agriculture \u2014 Plant Sciences (Agronomy)",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 4/50%)", "Agricultural Science or Life Sciences (Level 4/50%)"],
    careers: ["Agronomist", "Agricultural Scientist", "Farm Manager"]
  },
  {
    id: "bsc-agric-animal-science",
    title: "BSc Agriculture (Animal Science)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "4 Years",
    campus: "KwaDlangezwa",
    tags: ["Science"],
    combination: "Agriculture \u2014 Animal Science",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 4/50%)", "Agricultural Science or Life Sciences (Level 4/50%)"],
    careers: ["Animal Scientist", "Livestock Production Manager", "Agricultural Extension Officer"]
  },
  {
    id: "bsc-agric-agribusiness",
    title: "BSc Agriculture (Agribusiness)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "4 Years",
    campus: "KwaDlangezwa",
    tags: ["Science"],
    combination: "Agriculture \u2014 Agribusiness & Management",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 4/50%)", "Agricultural Science or Life Sciences (Level 4/50%)"],
    careers: ["Agribusiness Manager", "Agricultural Economist", "Farm Business Consultant"]
  },
  {
    id: "beng-electrical",
    title: "Bachelor of Engineering (Electrical Engineering)",
    faculty: "Science, Agriculture & Engineering",
    aps: 30,
    duration: "4 Years",
    campus: "KwaDlangezwa",
    tags: ["Science"],
    subjects: ["English (Level 4/50%)", "Mathematics (Level 5/65%)", "Physical Sciences (Level 5/60%)"],
    careers: ["Electrical Engineer", "Control Systems Engineer", "Power Systems Engineer"]
  },
  {
    id: "beng-mechanical",
    title: "Bachelor of Engineering (Mechanical Engineering)",
    faculty: "Science, Agriculture & Engineering",
    aps: 30,
    duration: "4 Years",
    campus: "KwaDlangezwa",
    tags: ["Science"],
    subjects: ["English (Level 4/50%)", "Mathematics (Level 5/65%)", "Physical Sciences (Level 5/60%)"],
    careers: ["Mechanical Engineer", "Design Engineer", "Maintenance Engineer"]
  },
  {
    id: "beng-mechatronic",
    title: "Bachelor of Engineering (Mechatronic Engineering)",
    faculty: "Science, Agriculture & Engineering",
    aps: 30,
    duration: "4 Years",
    campus: "KwaDlangezwa",
    tags: ["Science"],
    subjects: ["English (Level 4/50%)", "Mathematics (Level 5/65%)", "Physical Sciences (Level 5/60%)"],
    careers: ["Mechatronics Engineer", "Robotics Engineer", "Automation Engineer"]
  },
  {
    id: "beng-electrical-computer",
    title: "Bachelor of Engineering (Electrical Engineering & Computer Engineering)",
    faculty: "Science, Agriculture & Engineering",
    aps: 30,
    duration: "4 Years",
    campus: "KwaDlangezwa",
    tags: ["Science"],
    combination: "Electrical Engineering & Computer Engineering",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 5/65%)", "Physical Sciences (Level 5/60%)"],
    careers: ["Computer Engineer", "Embedded Systems Engineer", "Electrical Engineer"]
  },
  {
    id: "bcons-sci-extension-rural",
    title: "Bachelor of Consumer Science (Extension & Rural Development)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "4 Years",
    campus: "KwaDlangezwa",
    tags: ["Science"],
    subjects: ["English (Level 4/50%)", "Life Sciences or Agricultural Science (Level 4/50%)"],
    careers: ["Rural Development Officer", "Extension Officer", "Community Development Practitioner"]
  },
  {
    id: "bcons-sci-hospitality",
    title: "Bachelor of Consumer Science (Hospitality & Tourism)",
    faculty: "Science, Agriculture & Engineering",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science"],
    subjects: ["English (Level 4/50%)"],
    careers: ["Hospitality Manager", "Tourism Officer", "Events Coordinator"]
  },
  {
    id: "bsc-nursing",
    title: "Bachelor of Nursing (General Nursing & Midwifery)",
    faculty: "Science, Agriculture & Engineering",
    aps: 30,
    duration: "4 Years",
    campus: "KwaDlangezwa",
    tags: ["Science"],
    subjects: ["English (Level 4/50%)", "Life Sciences (Level 4/50%)", "Mathematics (Level 4/50%) or Maths Literacy (Level 6/70%)"],
    careers: ["Registered Nurse", "Midwife", "Clinical Nurse Practitioner"]
  },
  {
    id: "dip-sport-exercise",
    title: "Diploma in Sport & Exercise Technology",
    faculty: "Science, Agriculture & Engineering",
    aps: 26,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science"],
    subjects: ["English (Level 3/40%) or Home Language (Level 4/50%)"],
    careers: ["Sports Technologist", "Fitness Coach", "Wellness Coordinator"]
  },
  {
    id: "dip-hospitality-mgmt",
    title: "Diploma in Hospitality Management",
    faculty: "Science, Agriculture & Engineering",
    aps: 26,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Science"],
    subjects: ["English (Level 4/50%)"],
    careers: ["Hospitality Supervisor", "Front Office Manager", "Food & Beverage Coordinator"]
  },
  {
    id: "higher-cert-accountancy",
    title: "Higher Certificate (Accountancy)",
    faculty: "Commerce, Administration & Law",
    aps: 22,
    duration: "1 Year",
    campus: "Richards Bay",
    tags: ["Commerce"],
    subjects: ["English (Level 3/40%)", "Mathematics (Level 3/40%) or Maths Literacy (Level 4/50%)"],
    careers: ["Bookkeeper", "Accounts Clerk", "Junior Accountant"]
  },
  {
    id: "higher-cert-marketing",
    title: "Higher Certificate (Marketing)",
    faculty: "Commerce, Administration & Law",
    aps: 22,
    duration: "1 Year",
    campus: "Richards Bay",
    tags: ["Commerce"],
    subjects: ["English (Level 3/40%)", "Mathematics (Level 3/40%) or Maths Literacy (Level 4/50%)"],
    careers: ["Marketing Assistant", "Sales Coordinator"]
  },
  {
    id: "dip-logistics-mgmt",
    title: "Diploma (Logistics Management)",
    faculty: "Commerce, Administration & Law",
    aps: 24,
    duration: "3 Years",
    campus: "Richards Bay",
    tags: ["Commerce"],
    subjects: ["English (Level 3/40%)", "Mathematics (Level 3/40%) or Maths Literacy (Level 4/50%)"],
    careers: ["Logistics Coordinator", "Supply Chain Officer"]
  },
  {
    id: "dip-management-cooperatives",
    title: "Diploma (Management of Co-operatives)",
    faculty: "Commerce, Administration & Law",
    aps: 24,
    duration: "3 Years",
    campus: "Richards Bay",
    tags: ["Commerce"],
    subjects: ["English (Level 3/40%)", "Mathematics (Level 3/40%) or Maths Literacy (Level 4/50%)"],
    careers: ["Co-operative Manager", "Community Enterprise Officer"]
  },
  {
    id: "dip-transport-mgmt",
    title: "Diploma (Transport Management)",
    faculty: "Commerce, Administration & Law",
    aps: 24,
    duration: "3 Years",
    campus: "Richards Bay",
    tags: ["Commerce"],
    subjects: ["English (Level 3/40%)", "Mathematics (Level 3/40%) or Maths Literacy (Level 4/50%)"],
    careers: ["Transport Manager", "Fleet Coordinator"]
  },
  {
    id: "bcom-general",
    title: "Bachelor of Commerce",
    faculty: "Commerce, Administration & Law",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Commerce"],
    subjects: ["English (Level 4/50%)", "Mathematics (Level 3/40%) or Maths Literacy (Level 6/70%)"],
    careers: ["Business Analyst", "Commerce Graduate \u2014 General"]
  },
  {
    id: "bcom-accounting",
    title: "BCom (Accounting)",
    faculty: "Commerce, Administration & Law",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Commerce"],
    subjects: ["English (Level 4/50%)", "Mathematics (Level 4/50%)"],
    careers: ["Accountant", "Auditor", "Financial Manager"]
  },
  {
    id: "bcom-accounting-science",
    title: "BCom (Accounting Science)",
    faculty: "Commerce, Administration & Law",
    aps: 28,
    duration: "4 Years",
    campus: "KwaDlangezwa",
    tags: ["Commerce"],
    subjects: ["English (Level 4/50%)", "Mathematics (Level 4/50%)"],
    careers: ["Chartered Accountant (CA) Track", "Financial Manager"]
  },
  {
    id: "bcom-mis",
    title: "BCom (Management Information Systems)",
    faculty: "Commerce, Administration & Law",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Commerce"],
    subjects: ["English (Level 4/50%)", "Mathematics (Level 4/50%)"],
    careers: ["IT Business Analyst", "Systems Analyst"]
  },
  {
    id: "badmin-general",
    title: "Bachelor of Administration",
    faculty: "Commerce, Administration & Law",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Commerce"],
    subjects: ["English (Level 4/50%)", "Mathematics (Level 3/40%) or Maths Literacy (Level 6/70%)"],
    careers: ["Public Administrator", "Municipal Officer"]
  },
  {
    id: "llb",
    title: "Bachelor of Laws (LLB)",
    faculty: "Commerce, Administration & Law",
    aps: 30,
    duration: "4 Years",
    campus: "KwaDlangezwa",
    tags: ["Commerce"],
    subjects: ["English (Level 4/50%)", "Mathematics (Level 3/40%) or Maths Literacy (Level 6/70%)"],
    careers: ["Attorney", "Advocate", "Legal Advisor"]
  },
  {
    id: "bcom-accounting-economics",
    title: "BCom (Accounting & Economics)",
    faculty: "Commerce, Administration & Law",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Commerce"],
    combination: "Accounting & Economics",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 4/50%)"],
    careers: ["Accounting Specialist", "Economics Specialist", "Commerce Graduate"]
  },
  {
    id: "bcom-business-management-accounting",
    title: "BCom (Business Management & Accounting)",
    faculty: "Commerce, Administration & Law",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Commerce"],
    combination: "Business Management & Accounting",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 4/50%)"],
    careers: ["Business Management Specialist", "Accounting Specialist", "Commerce Graduate"]
  },
  {
    id: "bcom-business-management-economics",
    title: "BCom (Business Management & Economics)",
    faculty: "Commerce, Administration & Law",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Commerce"],
    combination: "Business Management & Economics",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 3/40%) or Maths Literacy (Level 6/70%)"],
    careers: ["Business Management Specialist", "Economics Specialist", "Commerce Graduate"]
  },
  {
    id: "bcom-business-management-insurance",
    title: "BCom (Business Management & Insurance)",
    faculty: "Commerce, Administration & Law",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Commerce"],
    combination: "Business Management & Insurance",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 3/40%) or Maths Literacy (Level 6/70%)"],
    careers: ["Business Management Specialist", "Insurance Specialist", "Commerce Graduate"]
  },
  {
    id: "bcom-banking-insurance",
    title: "BCom (Banking & Insurance)",
    faculty: "Commerce, Administration & Law",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Commerce"],
    combination: "Banking & Insurance",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 3/40%) or Maths Literacy (Level 6/70%)"],
    careers: ["Banking Specialist", "Insurance Specialist", "Commerce Graduate"]
  },
  {
    id: "bcom-banking-business-management",
    title: "BCom (Banking & Business Management)",
    faculty: "Commerce, Administration & Law",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Commerce"],
    combination: "Banking & Business Management",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 3/40%) or Maths Literacy (Level 6/70%)"],
    careers: ["Banking Specialist", "Business Management Specialist", "Commerce Graduate"]
  },
  {
    id: "bcom-economics-banking",
    title: "BCom (Economics & Banking)",
    faculty: "Commerce, Administration & Law",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Commerce"],
    combination: "Economics & Banking",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 3/40%) or Maths Literacy (Level 6/70%)"],
    careers: ["Economics Specialist", "Banking Specialist", "Commerce Graduate"]
  },
  {
    id: "bcom-economics-insurance",
    title: "BCom (Economics & Insurance)",
    faculty: "Commerce, Administration & Law",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Commerce"],
    combination: "Economics & Insurance",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 3/40%) or Maths Literacy (Level 6/70%)"],
    careers: ["Economics Specialist", "Insurance Specialist", "Commerce Graduate"]
  },
  {
    id: "bcom-economics-human-resources-management",
    title: "BCom (Economics & Human Resources Management)",
    faculty: "Commerce, Administration & Law",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Commerce"],
    combination: "Economics & Human Resources Management",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 3/40%) or Maths Literacy (Level 6/70%)"],
    careers: ["Economics Specialist", "Human Resources Management Specialist", "Commerce Graduate"]
  },
  {
    id: "bcom-human-resources-management-business-management",
    title: "BCom (Human Resources Management & Business Management)",
    faculty: "Commerce, Administration & Law",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Commerce"],
    combination: "Human Resources Management & Business Management",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 3/40%) or Maths Literacy (Level 6/70%)"],
    careers: ["Human Resources Management Specialist", "Business Management Specialist", "Commerce Graduate"]
  },
  {
    id: "badmin-public-administration-human-resources",
    title: "BAdmin (Public Administration & Human Resources)",
    faculty: "Commerce, Administration & Law",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Commerce"],
    combination: "Public Administration & Human Resources",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 3/40%) or Maths Literacy (Level 6/70%)"],
    careers: ["Public Sector Administrator", "Human Resources Officer", "Policy Analyst"]
  },
  {
    id: "badmin-public-administration-political-science",
    title: "BAdmin (Public Administration & Political Science)",
    faculty: "Commerce, Administration & Law",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Commerce"],
    combination: "Public Administration & Political Science",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 3/40%) or Maths Literacy (Level 6/70%)"],
    careers: ["Public Sector Administrator", "Political Science Officer", "Policy Analyst"]
  },
  {
    id: "badmin-public-administration-economics",
    title: "BAdmin (Public Administration & Economics)",
    faculty: "Commerce, Administration & Law",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Commerce"],
    combination: "Public Administration & Economics",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 3/40%) or Maths Literacy (Level 6/70%)"],
    careers: ["Public Sector Administrator", "Economics Officer", "Policy Analyst"]
  },
  {
    id: "badmin-public-administration-business-management",
    title: "BAdmin (Public Administration & Business Management)",
    faculty: "Commerce, Administration & Law",
    aps: 28,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Commerce"],
    combination: "Public Administration & Business Management",
    subjects: ["English (Level 4/50%)", "Mathematics (Level 3/40%) or Maths Literacy (Level 6/70%)"],
    careers: ["Public Sector Administrator", "Business Management Officer", "Policy Analyst"]
  },
  {
    id: "bed-foundation-phase",
    title: "BEd Foundation Phase Teaching",
    faculty: "Education",
    aps: 26,
    duration: "4 Years",
    campus: "KwaDlangezwa (Main)",
    tags: ["Education"],
    subjects: ["IsiZulu Home Language (Level 4/50%)", "English FAL (Level 4/50%)", "Mathematics (Level 3/40%) or Maths Literacy (Level 4/50%)"],
    careers: ["Foundation Phase Teacher", "Early Childhood Curriculum Developer"]
  },
  {
    id: "bed-intermediate-lang-mste",
    title: "BEd Intermediate Phase Teaching (Language & MSTE)",
    faculty: "Education",
    aps: 26,
    duration: "4 Years",
    campus: "KwaDlangezwa (Main)",
    tags: ["Education"],
    combination: "Language & Mathematics, Science, Technology Education (MSTE)",
    status: "No new intake as of 2026",
    subjects: ["IsiZulu Home Language (Level 4/50%)", "English FAL (Level 4/50%)", "Mathematics or Physical Science (Level 3\u20134/40\u201350%)"],
    careers: ["Intermediate Phase Teacher", "School Curriculum Coordinator"]
  },
  {
    id: "bed-intermediate-lang-humanities",
    title: "BEd Intermediate Phase Teaching (Language & Humanities)",
    faculty: "Education",
    aps: 26,
    duration: "4 Years",
    campus: "KwaDlangezwa (Main)",
    tags: ["Education"],
    combination: "Language & Humanities (Geography & History)",
    status: "No new intake as of 2026",
    subjects: ["IsiZulu Home Language (Level 4/50%)", "English FAL (Level 4/50%)", "Geography (Level 4/50%)", "History (Level 4/50%)"],
    careers: ["Intermediate Phase Teacher", "Humanities Subject Coordinator"]
  },
  {
    id: "bed-senior-fet-nst",
    title: "BEd Senior Phase & FET Teaching (Natural Science & Technology)",
    faculty: "Education",
    aps: 26,
    duration: "4 Years",
    campus: "KwaDlangezwa (Main)",
    tags: ["Education"],
    combination: "Natural Science & Technology teaching specialisation",
    status: "No new intake as of 2026",
    subjects: ["English (Level 4/50%)", "Mathematics or Physical Sciences (Level 4/50%)"],
    careers: ["High School Science Teacher", "Subject Head"]
  },
  {
    id: "bed-senior-fet-hsse",
    title: "BEd Senior Phase & FET Teaching (Humanities & Social Science)",
    faculty: "Education",
    aps: 26,
    duration: "4 Years",
    campus: "KwaDlangezwa (Main)",
    tags: ["Education"],
    combination: "Humanities & Social Science Education specialisation",
    status: "No new intake as of 2026",
    subjects: ["English (Level 4/50%)", "A Humanities subject (Level 4/50%)"],
    careers: ["High School Humanities Teacher", "Curriculum Advisor"]
  },
  {
    id: "bed-senior-fet-ems",
    title: "BEd Senior Phase & FET Teaching (Economics & Management Sciences)",
    faculty: "Education",
    aps: 26,
    duration: "4 Years",
    campus: "KwaDlangezwa (Main)",
    tags: ["Education"],
    combination: "Economics & Management Sciences (EMS) teaching specialisation",
    status: "No new intake as of 2026",
    subjects: ["English (Level 4/50%)", "Mathematics or Accounting (Level 4/50%)"],
    careers: ["High School EMS/Business Studies Teacher", "Subject Head"]
  },
  {
    id: "ba-development-studies",
    title: "BA in Development Studies",
    faculty: "Humanities & Social Sciences",
    aps: 26,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    subjects: ["English (Level 4/50%)", "One recognised NSC subject from the designated list (Level 4/50%)"],
    careers: ["Development Practitioner", "NGO Programme Officer"]
  },
  {
    id: "ba-intercultural-communication",
    title: "Bachelor of Arts in Intercultural Communication",
    faculty: "Humanities & Social Sciences",
    aps: 26,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    subjects: ["English (Level 4/50%)", "One recognised NSC subject from the designated list (Level 4/50%)"],
    careers: ["Communications Officer", "Public Relations Practitioner"]
  },
  {
    id: "ba-drama-theatre-performance",
    title: "Bachelor of Arts in Drama, Theatre and Performance",
    faculty: "Humanities & Social Sciences",
    aps: 26,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    subjects: ["English (Level 4/50%)", "One recognised NSC subject from the designated list (Level 4/50%)"],
    careers: ["Actor", "Theatre Director", "Arts Educator"]
  },
  {
    id: "ba-correctional-studies",
    title: "BA in Correctional Studies",
    faculty: "Humanities & Social Sciences",
    aps: 26,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    subjects: ["English (Level 4/50%)", "One recognised NSC subject from the designated list (Level 4/50%)"],
    careers: ["Correctional Services Officer", "Criminal Justice Practitioner"]
  },
  {
    id: "ba-environmental-planning-dev",
    title: "BA Environmental Planning and Development",
    faculty: "Humanities & Social Sciences",
    aps: 26,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    subjects: ["English (Level 4/50%)", "One recognised NSC subject from the designated list (Level 4/50%)"],
    careers: ["Urban & Regional Planner", "Environmental Planner"]
  },
  {
    id: "ba-information-science",
    title: "Bachelor of Arts in Information Science",
    faculty: "Humanities & Social Sciences",
    aps: 26,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    subjects: ["English (Level 4/50%)", "One recognised NSC subject from the designated list (Level 4/50%)"],
    careers: ["Information Officer", "Records Manager"]
  },
  {
    id: "b-library-information-science",
    title: "Bachelor of Library and Information Science",
    faculty: "Humanities & Social Sciences",
    aps: 26,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    subjects: ["English (Level 4/50%)", "One recognised NSC subject from the designated list (Level 4/50%)"],
    careers: ["Librarian", "Archivist"]
  },
  {
    id: "bss-political-international-studies",
    title: "Bachelor of Social Science in Political & International Studies",
    faculty: "Humanities & Social Sciences",
    aps: 26,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    subjects: ["English (Level 4/50%)", "One recognised NSC subject from the designated list (Level 4/50%)"],
    careers: ["Policy Analyst", "Diplomat / Foreign Service Officer"]
  },
  {
    id: "ba-psychology",
    title: "Bachelor of Arts in Psychology",
    faculty: "Humanities & Social Sciences",
    aps: 26,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    subjects: ["English (Level 4/50%)", "One recognised NSC subject from the designated list (Level 4/50%)"],
    careers: ["Counsellor", "HR Officer", "Researcher (registered Psychologist needs postgrad)"]
  },
  {
    id: "b-tourism-studies",
    title: "Bachelor of Tourism Studies",
    faculty: "Humanities & Social Sciences",
    aps: 26,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    subjects: ["English (Level 4/50%)", "One recognised NSC subject from the designated list (Level 4/50%)"],
    careers: ["Tourism Officer", "Destination Marketer"]
  },
  {
    id: "b-social-work",
    title: "Bachelor of Social Work",
    faculty: "Humanities & Social Sciences",
    aps: 26,
    duration: "4 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    subjects: ["English (Level 4/50%)", "One recognised NSC subject from the designated list (Level 4/50%)"],
    careers: ["Social Worker", "Community Development Officer"]
  },
  {
    id: "ba-sociology",
    title: "Bachelor of Arts in Sociology",
    faculty: "Humanities & Social Sciences",
    aps: 26,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    subjects: ["English (Level 4/50%)", "One recognised NSC subject from the designated list (Level 4/50%)"],
    careers: ["Researcher", "Community Liaison Officer"]
  },
  {
    id: "ba-industrial-sociology",
    title: "Bachelor of Arts in Industrial Sociology",
    faculty: "Humanities & Social Sciences",
    aps: 26,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    subjects: ["English (Level 4/50%)", "One recognised NSC subject from the designated list (Level 4/50%)"],
    careers: ["HR Officer", "Labour Relations Officer"]
  },
  {
    id: "dip-public-relations-mgmt",
    title: "Diploma in Public Relations Management",
    faculty: "Humanities & Social Sciences",
    aps: 24,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    subjects: ["English (Level 4/50%)", "One recognised NSC subject from the designated list (Level 4/50%)"],
    careers: ["PR Officer", "Communications Assistant"]
  },
  {
    id: "dip-media-studies",
    title: "Diploma in Media Studies",
    faculty: "Humanities & Social Sciences",
    aps: 24,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    subjects: ["English (Level 4/50%)", "One recognised NSC subject from the designated list (Level 4/50%)"],
    careers: ["Media Assistant", "Content Producer"]
  },
  {
    id: "dip-tourism-mgmt",
    title: "Diploma in Tourism Management",
    faculty: "Humanities & Social Sciences",
    aps: 24,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    subjects: ["English (Level 4/50%)", "One recognised NSC subject from the designated list (Level 4/50%)"],
    careers: ["Tourism Officer", "Travel Consultant"]
  },
  {
    id: "ba-anthropology-history",
    title: "BA (Anthropology & History)",
    faculty: "Humanities & Social Sciences",
    aps: 26,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    combination: "Anthropology & History",
    subjects: ["English (Level 4/50%)", "One recognised NSC subject from the designated list (Level 4/50%)"],
    careers: ["Anthropology-related roles", "History-related roles", "Researcher"]
  },
  {
    id: "ba-linguistics-english",
    title: "BA (Linguistics & English)",
    faculty: "Humanities & Social Sciences",
    aps: 26,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    combination: "Linguistics & English",
    subjects: ["English (Level 4/50%)", "One recognised NSC subject from the designated list (Level 4/50%)"],
    careers: ["Linguistics-related roles", "English-related roles", "Researcher"]
  },
  {
    id: "ba-geography-history",
    title: "BA (Geography & History)",
    faculty: "Humanities & Social Sciences",
    aps: 26,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    combination: "Geography & History",
    subjects: ["English (Level 4/50%)", "One recognised NSC subject from the designated list (Level 4/50%)"],
    careers: ["Geography-related roles", "History-related roles", "Researcher"]
  },
  {
    id: "ba-geography-tourism",
    title: "BA (Geography & Tourism)",
    faculty: "Humanities & Social Sciences",
    aps: 26,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    combination: "Geography & Tourism",
    subjects: ["English (Level 4/50%)", "One recognised NSC subject from the designated list (Level 4/50%)"],
    careers: ["Geography-related roles", "Tourism-related roles", "Researcher"]
  },
  {
    id: "ba-history-isizulu",
    title: "BA (History & IsiZulu)",
    faculty: "Humanities & Social Sciences",
    aps: 26,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    combination: "History & IsiZulu",
    subjects: ["English (Level 4/50%)", "One recognised NSC subject from the designated list (Level 4/50%)"],
    careers: ["History-related roles", "IsiZulu-related roles", "Researcher"]
  },
  {
    id: "ba-philosophy-psychology",
    title: "BA (Philosophy & Psychology)",
    faculty: "Humanities & Social Sciences",
    aps: 26,
    duration: "3 Years",
    campus: "KwaDlangezwa",
    tags: ["Humanities"],
    combination: "Philosophy & Psychology",
    subjects: ["English (Level 4/50%)", "One recognised NSC subject from the designated list (Level 4/50%)"],
    careers: ["Philosophy-related roles", "Psychology-related roles", "Researcher"]
  },
];
const FACULTIES = [
  "Science, Agriculture & Engineering",
  "Commerce, Administration & Law",
  "Education",
  "Humanities & Social Sciences"
];


// Each option scores directly against a qualification ID from the real
// UniZulu catalog above. With 101 qualifications, the quiz can't
// meaningfully distinguish between every one of them in 10 questions —
// so it scores against a curated set of ~22 representative "anchor"
// programmes spanning all four faculties, then shows the top match plus
// runners-up. Browse the full 101-programme catalog directly via the
// Qualifications, Faculties, or APS Calculator pages.
const QUIZ_QUESTIONS = [
  {
    q: "Which activity sounds most like you?",
    options: [
      { text: "Solving puzzles or fixing things", id: "bsc-computer-science-mathematics" },
      { text: "Managing money or a small project", id: "bcom-accounting" },
      { text: "Helping and teaching others", id: "bed-foundation-phase" },
      { text: "Understanding people and society", id: "ba-psychology" },
      { text: "Caring for people's health", id: "bsc-nursing" }
    ]
  },
  {
    q: "Pick a subject you enjoy most.",
    options: [
      { text: "Computer Applications / Statistics", id: "bsc-computer-science-statistics" },
      { text: "Economics / Business Studies", id: "bcom-general" },
      { text: "Languages, especially teaching them to younger learners", id: "bed-intermediate-lang-humanities" },
      { text: "Life Orientation and understanding people", id: "b-social-work" },
      { text: "Physical Education", id: "dip-sport-exercise" }
    ]
  },
  {
    q: "Which school subject do you consistently get your best marks in?",
    options: [
      { text: "Agricultural Sciences or Life Sciences", id: "bsc-agric-agronomy" },
      { text: "English, especially debating or argument", id: "llb" },
      { text: "Mathematics or Physical Sciences — and you enjoy explaining them", id: "bed-senior-fet-nst" },
      { text: "English or another language, especially writing", id: "ba-intercultural-communication" },
      { text: "Life Sciences, especially anatomy or biology topics", id: "bsc-agric-animal-science" }
    ]
  },
  {
    q: "What kind of impact do you want your career to have?",
    options: [
      { text: "Design or build electrical/electronic systems", id: "beng-electrical" },
      { text: "Help businesses manage their finances responsibly", id: "bcom-accounting" },
      { text: "Shape how young children learn to read and count", id: "bed-foundation-phase" },
      { text: "Support communities and fight for social justice", id: "b-social-work" },
      { text: "Help people perform better physically and stay healthy", id: "dip-sport-exercise" }
    ]
  },
  {
    q: "Which work environment appeals to you most?",
    options: [
      { text: "A lab or behind a computer, building things", id: "bsc-biochemistry-microbiology" },
      { text: "An office analysing markets and public policy", id: "bss-political-international-studies" },
      { text: "A classroom with 9–12 year olds", id: "bed-intermediate-lang-humanities" },
      { text: "A counselling room or research setting", id: "ba-psychology" },
      { text: "A hospital ward or clinic", id: "bsc-nursing" }
    ]
  },
  {
    q: "How do you prefer to solve problems?",
    options: [
      { text: "Troubleshoot systems logically until it works", id: "bcom-mis" },
      { text: "Build an argument and back it with evidence", id: "llb" },
      { text: "Break a hard concept into simple steps for someone", id: "bed-senior-fet-nst" },
      { text: "Find the right words to explain it clearly", id: "ba-intercultural-communication" },
      { text: "Take direct, practical action to fix it", id: "bsc-nursing" }
    ]
  },
  {
    q: "Pick a task you'd enjoy on a random Tuesday.",
    options: [
      { text: "Working with crops, soil, or livestock", id: "bsc-agric-agronomy" },
      { text: "Balancing a budget or analysing figures", id: "badmin-general" },
      { text: "Planning a lesson and marking homework", id: "bed-foundation-phase" },
      { text: "Interviewing people about their experiences", id: "ba-sociology" },
      { text: "Coordinating a busy hotel or event", id: "bcons-sci-hospitality" }
    ]
  },
  {
    q: "What's your strongest skill, honestly?",
    options: [
      { text: "Numbers and statistical thinking", id: "bsc-computer-science-statistics" },
      { text: "Spotting patterns in economic or business trends", id: "bcom-general" },
      { text: "Patience with younger learners", id: "bed-intermediate-lang-humanities" },
      { text: "Understanding why people think and act the way they do", id: "ba-psychology" },
      { text: "Physical discipline and coaching others", id: "dip-sport-exercise" }
    ]
  },
  {
    q: "What matters most to you in a future career?",
    options: [
      { text: "Innovation and technical problem-solving", id: "beng-electrical" },
      { text: "Upholding justice and fairness", id: "llb" },
      { text: "Making tough subjects click for teenagers", id: "bed-senior-fet-nst" },
      { text: "Telling stories and shaping how people communicate", id: "ba-intercultural-communication" },
      { text: "Directly saving or improving lives", id: "bsc-nursing" }
    ]
  },
  {
    q: "If you could shadow someone for a day, who would it be?",
    options: [
      { text: "A software developer or IT systems analyst", id: "bsc-computer-science-mathematics" },
      { text: "An accountant or auditor", id: "higher-cert-accountancy" },
      { text: "A primary school teacher", id: "bed-foundation-phase" },
      { text: "A social worker or community leader", id: "b-social-work" },
      { text: "An agricultural scientist working with livestock", id: "bsc-agric-animal-science" }
    ]
  }
];

// Grade % -> APS points, official UniZulu APS scale (from the 2026 faculty
// handbooks): 8 bands, 6 counted subjects (Life Orientation excluded).
function pointsForPercent(pct) {
  if (pct >= 90) return 8;
  if (pct >= 80) return 7;
  if (pct >= 70) return 6;
  if (pct >= 60) return 5;
  if (pct >= 50) return 4;
  if (pct >= 40) return 3;
  if (pct >= 30) return 2;
  return 1;
}

/* ---------- Persistent state (localStorage, scoped per logged-in user) ---------- */

let currentUsername = null;

function storageKeyFor(username) {
  return `uniguide_state_v1_${username}`;
}

function loadState(username) {
  try {
    const raw = localStorage.getItem(storageKeyFor(username));
    if (!raw) throw new Error("no state");
    return JSON.parse(raw);
  } catch (e) {
    return {
      theme: "light",
      chats: 0,
      apsCalculations: 0,
      recommendations: 0,
      savedCourses: [],
      lastAps: null,
      apsHistory: []
    };
  }
}

function saveState() {
  if (!currentUsername) return;
  localStorage.setItem(storageKeyFor(currentUsername), JSON.stringify(state));
}

let state = loadState("guest");

/* ---------- Navigation ---------- */

const PAGES = ["home", "chat", "aps", "qualifications", "faculties", "quiz", "dashboard", "saved", "settings"];

function showPage(pageId) {
  PAGES.forEach((id) => {
    const el = document.getElementById(`page-${id}`);
    if (el) el.classList.toggle("active", id === pageId);
  });

  document.querySelectorAll(".sidebar li[data-page]").forEach((li) => {
    li.classList.toggle("active", li.dataset.page === pageId);
  });

  if (pageId === "dashboard") renderDashboard();
  if (pageId === "qualifications") renderQualifications();
  if (pageId === "faculties") renderFaculties();
  if (pageId === "saved") renderSaved();
  if (pageId === "quiz") renderQuiz();
}

function initNav() {
  document.querySelectorAll(".sidebar li[data-page]").forEach((li) => {
    li.addEventListener("click", () => {
      showPage(li.dataset.page);
      closeSidebar();
    });
  });

  document.querySelectorAll("[data-goto]").forEach((btn) => {
    btn.addEventListener("click", () => showPage(btn.dataset.goto));
  });

  const menuToggle = document.getElementById("menuToggle");
  const backdrop = document.getElementById("sidebarBackdrop");
  if (menuToggle) menuToggle.addEventListener("click", openSidebar);
  if (backdrop) backdrop.addEventListener("click", closeSidebar);
}

function openSidebar() {
  document.querySelector(".sidebar").classList.add("open");
  document.getElementById("sidebarBackdrop").classList.add("active");
}

function closeSidebar() {
  document.querySelector(".sidebar").classList.remove("open");
  document.getElementById("sidebarBackdrop").classList.remove("active");
}

/* ---------- Theme ---------- */

function applyTheme() {
  document.body.classList.toggle("dark", state.theme === "dark");
  const btn = document.getElementById("themeBtn");
  if (btn) btn.innerHTML = state.theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
}

function initTheme() {
  applyTheme();
  document.getElementById("themeBtn").addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    saveState();
    applyTheme();
  });
}

/* ---------- Chat ---------- */

function addMessage(role, html) {
  const chatArea = document.getElementById("chatArea");
  const wrap = document.createElement("div");
  wrap.className = role === "user" ? "user-message" : "bot-message";

  if (role === "bot") {
    wrap.innerHTML = `<div class="bot-avatar">🤖</div><div class="message">${html}</div>`;
  } else {
    wrap.innerHTML = `<div class="message">${html}</div>`;
  }

  chatArea.appendChild(wrap);
  chatArea.scrollTop = chatArea.scrollHeight;
}

function showTyping() {
  const chatArea = document.getElementById("chatArea");
  const typing = document.createElement("div");
  typing.className = "typing";
  typing.id = "typingIndicator";
  typing.innerHTML = "<span></span><span></span><span></span>";
  chatArea.appendChild(typing);
  chatArea.scrollTop = chatArea.scrollHeight;
}

function hideTyping() {
  const el = document.getElementById("typingIndicator");
  if (el) el.remove();
}

function findQualificationsMentioned(text) {
  const lower = text.toLowerCase();
  return QUALIFICATIONS.filter((q) => lower.includes(q.title.toLowerCase()));
}

function botReply(userText) {
  const lower = userText.toLowerCase();

  if (lower.includes("aps") && (lower.includes("calc") || lower.includes("score") || lower.includes("what is"))) {
    return `The Admission Point Score (APS) adds up points from your best subjects, where each subject's percentage maps to a score out of 7. Head to the <strong>APS Calculator</strong> page and I'll work it out with you.`;
  }

  if (lower.includes("recommend") || lower.includes("qualification") || lower.includes("course") || lower.includes("degree")) {
    return `I can suggest qualifications based on your APS and interests. Try the <strong>APS Calculator</strong> first, or take the <strong>Career Quiz</strong> if you're not sure what field suits you yet.`;
  }

  if (lower.includes("faculty") || lower.includes("faculties")) {
    return `UniZulu has four faculties: ${FACULTIES.join(", ")}. There are 101 undergraduate programmes across them, including double-major combinations. Check the <strong>Faculties</strong> page for details on each.`;
  }

  if (lower.includes("career") || lower.includes("job")) {
    return `Take the <strong>Career Quiz</strong> — 10 quick questions that match your answers to a specific degree, not just a faculty.`;
  }

  if (lower.includes("requirement") || lower.includes("admission")) {
    const matches = findQualificationsMentioned(userText);
    if (matches.length) {
      const q = matches[0];
      return `${q.title} needs an APS of ${q.aps}+ and typically requires: ${q.subjects.join(", ")}.`;
    }
    return `Admission requirements vary by qualification — each one has a minimum APS and required subjects. Ask me about a specific qualification, e.g. "requirements for BSc Computer Science".`;
  }

  if (lower.includes("hello") || lower.includes("hi") || lower.includes("hey")) {
    return `Hello 👋 What would you like to do — calculate your APS, get a recommendation, or explore faculties?`;
  }

  return `I can help with APS calculations, qualification recommendations, admission requirements, and faculty info. Try asking something like "what qualifications can I get with an APS of 30?"`;
}

function handleSend() {
  const input = document.getElementById("userInput");
  const text = input.value.trim();
  if (!text) return;

  addMessage("user", `<p>${escapeHtml(text)}</p>`);
  input.value = "";

  state.chats += 1;
  saveState();

  showTyping();
  setTimeout(() => {
    hideTyping();
    addMessage("bot", `<p>${botReply(text)}</p>`);
  }, 600 + Math.random() * 500);
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function initChat() {
  document.getElementById("sendBtn").addEventListener("click", handleSend);
  document.getElementById("userInput").addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSend();
  });

  document.getElementById("newChatBtn").addEventListener("click", () => {
    const chatArea = document.getElementById("chatArea");
    chatArea.innerHTML = "";
    addMessage("bot", `<h3>New Chat</h3><p>Hi again 👋 What would you like to do?</p>`);
    showPage("chat");
    document.getElementById("userInput").focus();
  });

  document.getElementById("clearChat").addEventListener("click", () => {
    const chatArea = document.getElementById("chatArea");
    chatArea.innerHTML = "";
    addMessage("bot", `<h3>Welcome to UniGuide AI</h3><p>Chat cleared. What would you like to do next?</p>`);
  });

  document.getElementById("downloadReport").addEventListener("click", downloadReport);

  document.querySelectorAll(".quick-actions button[data-goto]").forEach((btn) => {
    btn.addEventListener("click", () => showPage(btn.dataset.goto));
  });
}

/* ---------- Voice input / output ---------- */

function initVoice() {
  const voiceBtn = document.getElementById("voiceBtn");
  const speakBtn = document.getElementById("speakBtn");
  const input = document.getElementById("userInput");

  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  if (SpeechRecognition) {
    const recognition = new SpeechRecognition();
    recognition.lang = "en-ZA";
    recognition.interimResults = false;

    voiceBtn.addEventListener("click", () => {
      voiceBtn.classList.add("listening");
      recognition.start();
    });

    recognition.addEventListener("result", (e) => {
      input.value = e.results[0][0].transcript;
    });

    recognition.addEventListener("end", () => voiceBtn.classList.remove("listening"));
    recognition.addEventListener("error", () => voiceBtn.classList.remove("listening"));
  } else {
    voiceBtn.addEventListener("click", () => {
      alert("Voice input isn't supported in this browser. Try Chrome or Edge.");
    });
  }

  if ("speechSynthesis" in window) {
    speakBtn.addEventListener("click", () => {
      const messages = document.querySelectorAll(".bot-message .message");
      if (!messages.length) return;
      const last = messages[messages.length - 1].textContent;
      const utter = new SpeechSynthesisUtterance(last);
      utter.lang = "en-ZA";
      speechSynthesis.speak(utter);
    });
  } else {
    speakBtn.addEventListener("click", () => {
      alert("Text-to-speech isn't supported in this browser.");
    });
  }
}

/* ---------- Report download ---------- */

function downloadReport() {
  const lines = [];
  lines.push("UniGuide AI — Session Report");
  lines.push(`Generated: ${new Date().toLocaleString()}`);
  lines.push("");
  lines.push(`Last APS Score: ${state.lastAps ?? "Not calculated yet"}`);
  lines.push(`Total Chats: ${state.chats}`);
  lines.push(`APS Calculations: ${state.apsCalculations}`);
  lines.push(`Recommendations Viewed: ${state.recommendations}`);
  lines.push("");
  lines.push("Saved Courses:");
  if (state.savedCourses.length) {
    state.savedCourses.forEach((id) => {
      const q = QUALIFICATIONS.find((x) => x.id === id);
      if (q) lines.push(`- ${q.title} (APS ${q.aps}, ${q.campus})`);
    });
  } else {
    lines.push("- None yet");
  }

  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "uniguide-report.txt";
  a.click();
  URL.revokeObjectURL(url);
}

/* ---------- APS Calculator ---------- */

function initApsCalculator() {
  const form = document.getElementById("apsForm");
  const rowsContainer = document.getElementById("apsRows");

  // Official UniZulu APS counts the best 6 subjects; Life Orientation is
  // explicitly excluded from the calculation per the faculty handbooks.
  const defaultSubjects = ["Home Language", "First Additional Language", "Mathematics", "Subject 4", "Subject 5", "Subject 6"];

  defaultSubjects.forEach((name) => addApsRow(rowsContainer, name, false));

  document.getElementById("addApsRow").addEventListener("click", () => {
    addApsRow(rowsContainer, `Subject ${rowsContainer.children.length + 1}`, false);
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    calculateAps(rowsContainer);
  });
}

function addApsRow(container, name, locked) {
  const row = document.createElement("div");
  row.className = "aps-row";
  row.innerHTML = `
    <input type="text" class="subject-name" value="${escapeHtml(name)}" ${locked ? "" : ""}>
    <input type="number" class="subject-pct" min="0" max="100" placeholder="%" required>
    ${locked ? "" : '<button type="button" class="remove-row" title="Remove subject">&times;</button>'}
  `;
  container.appendChild(row);

  const removeBtn = row.querySelector(".remove-row");
  if (removeBtn) {
    removeBtn.addEventListener("click", () => row.remove());
  }
}

function calculateAps(container) {
  const rows = Array.from(container.querySelectorAll(".aps-row"));
  let total = 0;
  let valid = true;

  rows.forEach((row) => {
    const pctInput = row.querySelector(".subject-pct");
    const pct = parseFloat(pctInput.value);
    if (isNaN(pct) || pct < 0 || pct > 100) {
      valid = false;
      pctInput.classList.add("invalid");
    } else {
      pctInput.classList.remove("invalid");
      total += pointsForPercent(pct);
    }
  });

  if (!valid) {
    document.getElementById("apsResult").textContent = "Please enter a valid percentage (0–100) for every subject.";
    return;
  }

  state.lastAps = total;
  state.apsCalculations += 1;
  state.apsHistory.push({ score: total, date: new Date().toISOString() });
  saveState();

  document.getElementById("apsResult").innerHTML = `
    <div class="aps-score">${total}</div>
    <div class="aps-label">Your APS score</div>
  `;

  renderApsHomeCard();
  renderApsQualificationMatches(total);
}

function renderApsHomeCard() {
  const el = document.getElementById("homeApsScore");
  if (el) el.textContent = state.lastAps ?? "--";
  const fill = document.getElementById("homeApsFill");
  if (fill) fill.style.width = state.lastAps ? `${Math.min(100, (state.lastAps / 48) * 100)}%` : "0%";
  renderHomeRecommendation();
}

function renderHomeRecommendation() {
  const container = document.getElementById("homeRecommendation");
  if (!container) return;

  let pick;
  if (state.lastAps != null) {
    const eligible = QUALIFICATIONS.filter((q) => q.aps <= state.lastAps).sort((a, b) => b.aps - a.aps);
    pick = eligible[0];
  }
  if (!pick) pick = QUALIFICATIONS[0];

  container.innerHTML = `
    <div class="course-card">
      <div class="course-title">${pick.title}</div>
      <div class="course-info"><span>APS: ${pick.aps}</span><span>${pick.duration}</span></div>
      <div class="course-tags">${pick.tags.map((t) => `<div class="tag">${t}</div>`).join("")}</div>
      <button class="apply-btn view-btn" data-id="${pick.id}">View Details</button>
    </div>
  `;
  container.querySelector(".view-btn").addEventListener("click", () => showQualificationDetail(pick.id));
}

function renderApsQualificationMatches(aps) {
  const container = document.getElementById("apsMatches");
  if (!container) return;

  const eligible = QUALIFICATIONS.filter((q) => q.aps <= aps).sort((a, b) => b.aps - a.aps);

  if (!eligible.length) {
    container.innerHTML = `<p>No qualifications match this APS yet in our sample list — check the full UniZulu prospectus for more options.</p>`;
    return;
  }

  container.innerHTML = eligible.map(qualificationCardHtml).join("");
  attachCourseCardHandlers(container);
}

/* ---------- Qualifications & recommendation ---------- */

function qualificationCardHtml(q) {
  const saved = state.savedCourses.includes(q.id);
  return `
    <div class="course-card" data-id="${q.id}">
      ${q.status ? `<div class="status-badge"><i class="fa-solid fa-triangle-exclamation"></i> ${q.status}</div>` : ""}
      <div class="course-title">${q.title}</div>
      <div class="course-info">
        <span>APS: ${q.aps}</span>
        <span>${q.duration}</span>
      </div>
      ${q.combination ? `<div class="combination-line"><i class="fa-solid fa-layer-group"></i> ${q.combination}</div>` : ""}
      <div class="course-tags">
        ${q.tags.map((t) => `<div class="tag">${t}</div>`).join("")}
      </div>
      <div class="course-card-buttons">
        <button class="apply-btn view-btn" data-id="${q.id}">View Details</button>
        <button class="save-btn" data-id="${q.id}">${saved ? "★ Saved" : "☆ Save"}</button>
      </div>
    </div>
  `;
}

function attachCourseCardHandlers(container) {
  container.querySelectorAll(".view-btn").forEach((btn) => {
    btn.addEventListener("click", () => showQualificationDetail(btn.dataset.id));
  });
  container.querySelectorAll(".save-btn").forEach((btn) => {
    btn.addEventListener("click", () => toggleSaved(btn.dataset.id));
  });
}

function toggleSaved(id) {
  const idx = state.savedCourses.indexOf(id);
  if (idx === -1) state.savedCourses.push(id);
  else state.savedCourses.splice(idx, 1);
  saveState();
  renderQualifications();
  renderSaved();
  const apsMatches = document.getElementById("apsMatches");
  if (apsMatches && state.lastAps != null) renderApsQualificationMatches(state.lastAps);
}

function showQualificationDetail(id) {
  const q = QUALIFICATIONS.find((x) => x.id === id);
  if (!q) return;

  state.recommendations += 1;
  saveState();

  const modal = document.getElementById("detailModal");
  document.getElementById("detailModalBody").innerHTML = `
    <h2>${q.title}</h2>
    ${q.status ? `<div class="status-badge"><i class="fa-solid fa-triangle-exclamation"></i> ${q.status}</div>` : ""}
    <p><strong>Faculty:</strong> ${q.faculty}</p>
    ${q.combination ? `<p><strong>Course combination:</strong> ${q.combination}</p>` : ""}
    <p><strong>Campus:</strong> ${q.campus}</p>
    <p><strong>Duration:</strong> ${q.duration}</p>
    <p><strong>Minimum APS:</strong> ${q.aps}</p>
    <p><strong>Key subjects:</strong> ${q.subjects.join(", ")}</p>
    <p><strong>Career paths:</strong> ${q.careers.join(", ")}</p>
  `;
  modal.classList.add("active");
}

function initModal() {
  document.getElementById("detailModalClose").addEventListener("click", () => {
    document.getElementById("detailModal").classList.remove("active");
  });
  document.getElementById("detailModal").addEventListener("click", (e) => {
    if (e.target.id === "detailModal") e.target.classList.remove("active");
  });
}

function renderQualifications() {
  const container = document.getElementById("qualificationsList");
  if (!container) return;
  container.innerHTML = QUALIFICATIONS.map(qualificationCardHtml).join("");
  attachCourseCardHandlers(container);
}

function renderSaved() {
  const container = document.getElementById("savedList");
  if (!container) return;
  const saved = QUALIFICATIONS.filter((q) => state.savedCourses.includes(q.id));
  if (!saved.length) {
    container.innerHTML = `<p>You haven't saved any qualifications yet. Browse <button class="link-btn" data-goto="qualifications">Qualifications</button> and tap Save.</p>`;
    container.querySelector("[data-goto]").addEventListener("click", (e) => showPage(e.target.dataset.goto));
    return;
  }
  container.innerHTML = saved.map(qualificationCardHtml).join("");
  attachCourseCardHandlers(container);
}

/* ---------- Faculties ---------- */

function renderFaculties() {
  const container = document.getElementById("facultiesList");
  if (!container) return;
  container.innerHTML = FACULTIES.map((f) => {
    const count = QUALIFICATIONS.filter((q) => q.faculty === f).length;
    return `<div class="faculty" data-faculty="${f}">${f}<br><small>${count} qualification${count === 1 ? "" : "s"}</small></div>`;
  }).join("");

  container.querySelectorAll(".faculty").forEach((el) => {
    el.addEventListener("click", () => {
      showPage("qualifications");
      const container2 = document.getElementById("qualificationsList");
      const filtered = QUALIFICATIONS.filter((q) => q.faculty === el.dataset.faculty);
      container2.innerHTML = filtered.length
        ? filtered.map(qualificationCardHtml).join("")
        : `<p>No sample qualifications listed for this faculty yet.</p>`;
      attachCourseCardHandlers(container2);
    });
  });
}

/* ---------- Career Quiz ---------- */

let quizIndex = 0;
let quizScores = {};

function renderQuiz() {
  quizIndex = 0;
  quizScores = {};
  QUALIFICATIONS.forEach((q) => (quizScores[q.id] = 0));
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const container = document.getElementById("quizContainer");
  if (quizIndex >= QUIZ_QUESTIONS.length) {
    renderQuizResult(container);
    return;
  }

  const question = QUIZ_QUESTIONS[quizIndex];
  container.innerHTML = `
    <div class="quiz-progress">Question ${quizIndex + 1} of ${QUIZ_QUESTIONS.length}</div>
    <h3>${question.q}</h3>
    <div class="quiz-options">
      ${question.options.map((opt, i) => `<button class="quiz-option" data-i="${i}">${opt.text}</button>`).join("")}
    </div>
  `;

  container.querySelectorAll(".quiz-option").forEach((btn) => {
    btn.addEventListener("click", () => {
      const opt = question.options[parseInt(btn.dataset.i, 10)];
      quizScores[opt.id] += 1;
      quizIndex += 1;
      renderQuizQuestion();
    });
  });
}

function renderQuizResult(container) {
  const ranked = Object.entries(quizScores).sort((a, b) => b[1] - a[1]);
  const totalAnswered = QUIZ_QUESTIONS.length;
  const topId = ranked[0][0];
  const top = QUALIFICATIONS.find((q) => q.id === topId);
  const runnersUp = ranked.slice(1, 3).map(([id]) => QUALIFICATIONS.find((q) => q.id === id)).filter(Boolean);
  const matchPct = Math.round((ranked[0][1] / totalAnswered) * 100);

  state.recommendations += 1;
  saveState();

  container.innerHTML = `
    <div class="quiz-top-match">
      <span class="quiz-match-pct">${matchPct}% match</span>
      <h3>Your best-fit degree: ${top.title}</h3>
      <p>${top.faculty} · APS ${top.aps}+ · ${top.duration}</p>
    </div>
    <div class="course-grid" id="quizMatches"></div>
    ${runnersUp.length ? `
      <h3 class="quiz-runners-heading">Also worth considering</h3>
      <div class="course-grid" id="quizRunnersUp"></div>
    ` : ""}
    <button class="apply-btn" id="retakeQuiz">Retake Quiz</button>
  `;

  const matchesEl = document.getElementById("quizMatches");
  matchesEl.innerHTML = qualificationCardHtml(top);
  attachCourseCardHandlers(matchesEl);

  if (runnersUp.length) {
    const runnersEl = document.getElementById("quizRunnersUp");
    runnersEl.innerHTML = runnersUp.map(qualificationCardHtml).join("");
    attachCourseCardHandlers(runnersEl);
  }

  document.getElementById("retakeQuiz").addEventListener("click", renderQuiz);
}

/* ---------- Dashboard ---------- */

function renderDashboard() {
  document.getElementById("dashChats").textContent = state.chats;
  document.getElementById("dashAps").textContent = state.apsCalculations;
  document.getElementById("dashRecs").textContent = state.recommendations;
  document.getElementById("dashSaved").textContent = state.savedCourses.length;
  document.getElementById("dashLastAps").textContent = state.lastAps ?? "--";
}

/* ---------- Settings ---------- */

function initSettings() {
  const resetBtn = document.getElementById("resetData");
  if (!resetBtn) return;
  resetBtn.addEventListener("click", () => {
    if (confirm("This clears all saved APS scores, saved courses, and stats. Continue?")) {
      localStorage.removeItem(storageKeyFor(currentUsername));
      state = loadState(currentUsername);
      applyTheme();
      renderDashboard();
      renderSaved();
      renderApsHomeCard();
    }
  });
}

/* ---------- Auth ----------
   NOTE: This is a client-side-only demo login. Passwords are hashed
   (SHA-256) before being stored in this browser's localStorage, but
   there is no real server verifying anything — it's meant to gate
   casual access, not to protect real accounts. For genuine secure
   auth (real students, real passwords), use a real backend/auth
   provider instead. */

const USERS_KEY = "uniguide_users_v1";
const SESSION_KEY = "uniguide_session_v1";

function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || {};
  } catch (e) {
    return {};
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

async function hashPassword(password) {
  const enc = new TextEncoder().encode(password);
  const buf = await crypto.subtle.digest("SHA-256", enc);
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, "0")).join("");
}

function getSession() {
  return localStorage.getItem(SESSION_KEY);
}

function setSession(username) {
  localStorage.setItem(SESSION_KEY, username);
}

function clearSession() {
  localStorage.removeItem(SESSION_KEY);
}

function showAuthError(message) {
  const el = document.getElementById("authError");
  el.textContent = message;
  el.style.display = message ? "block" : "none";
}

function initAuth() {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");
  const tabLogin = document.getElementById("tabLogin");
  const tabSignup = document.getElementById("tabSignup");
  const logoutBtn = document.getElementById("logoutBtn");

  tabLogin.addEventListener("click", () => switchAuthTab("login"));
  tabSignup.addEventListener("click", () => switchAuthTab("signup"));

  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    showAuthError("");
    const username = document.getElementById("loginUsername").value.trim().toLowerCase();
    const password = document.getElementById("loginPassword").value;

    const users = loadUsers();
    if (!users[username]) {
      showAuthError("No account found with that username.");
      return;
    }
    const hashed = await hashPassword(password);
    if (users[username].password !== hashed) {
      showAuthError("Incorrect password.");
      return;
    }
    setSession(username);
    enterApp(username);
  });

  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    showAuthError("");
    const name = document.getElementById("signupName").value.trim();
    const username = document.getElementById("signupUsername").value.trim().toLowerCase();
    const password = document.getElementById("signupPassword").value;

    if (!name || !username || !password) {
      showAuthError("Please fill in every field.");
      return;
    }
    if (password.length < 6) {
      showAuthError("Password must be at least 6 characters.");
      return;
    }

    const users = loadUsers();
    if (users[username]) {
      showAuthError("That username is already taken.");
      return;
    }

    users[username] = { name, password: await hashPassword(password) };
    saveUsers(users);
    setSession(username);
    enterApp(username);
  });

  logoutBtn.addEventListener("click", () => {
    clearSession();
    location.reload();
  });
}

function switchAuthTab(tab) {
  document.getElementById("tabLogin").classList.toggle("active", tab === "login");
  document.getElementById("tabSignup").classList.toggle("active", tab === "signup");
  document.getElementById("loginForm").classList.toggle("active", tab === "login");
  document.getElementById("signupForm").classList.toggle("active", tab === "signup");
  showAuthError("");
}

function enterApp(username) {
  const users = loadUsers();
  const displayName = users[username]?.name || username;

  currentUsername = username;
  state = loadState(username);

  document.getElementById("authScreen").classList.remove("active");
  document.querySelector(".app").style.display = "flex";
  document.getElementById("currentUserName").textContent = displayName;

  initApp();
}

/* ---------- Init ---------- */

function initApp() {
  initNav();
  initTheme();
  initChat();
  initVoice();
  initApsCalculator();
  initModal();
  initSettings();

  renderApsHomeCard();
  renderQualifications();
  renderFaculties();
  renderDashboard();
  renderSaved();

  showPage("home");
}

document.addEventListener("DOMContentLoaded", () => {
  initAuth();

  const session = getSession();
  const users = loadUsers();

  if (session && users[session]) {
    currentUsername = session;
    state = loadState(session);
    document.getElementById("authScreen").classList.remove("active");
    document.querySelector(".app").style.display = "flex";
    document.getElementById("currentUserName").textContent = users[session].name || session;
    initApp();
  } else {
    document.getElementById("authScreen").classList.add("active");
    document.querySelector(".app").style.display = "none";
  }
});
