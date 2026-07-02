export interface PreviewTeamMember {
  name: string;
  title: string;
}

export interface PreviewReview {
  author: string;
  text: string;
}

export interface PreviewBusiness {
  id: number;
  name: string;
  categories: string[];
  rating: number;
  reviewCount: number;
  phone: string;
  location: string;
  servingArea: string;
  imageUrl: string;
  rank?: number;
  about: string;
  team: PreviewTeamMember[];
  reviews: PreviewReview[];
}

export const previewBusinesses: PreviewBusiness[] = [
  {
    id: 1,
    name: "Mile High Hearing & Balance Center",
    categories: ["Hearing Aids", "Diagnostic Evaluations"],
    rating: 5.0,
    reviewCount: 312,
    phone: "(303) 555-0142",
    location: "Denver, CO",
    servingArea: "Denver, CO · Cherry Creek",
    imageUrl: "https://images.unsplash.com/photo-1622902046580-2b47f47f5471?w=400&h=400&fit=crop&q=80",
    about:
      "a leading audiology practice in Denver specializing in comprehensive hearing evaluations, advanced hearing aid fittings, and personalized hearing care at their Cherry Creek clinic.",
    team: [
      { name: "Dr. Marcus Reyes, Au.D.", title: "Lead Audiologist · 18 Years Experience" },
      { name: "Priya Nair, Au.D., CCC-A", title: "Pediatric Audiology Specialist" },
    ],
    reviews: [
      { author: "Sandra K.", text: "My father's hearing improved dramatically after just a few weeks with his new hearing aids. Exceptional care and genuine compassion." },
      { author: "James L.", text: "Finally found a team that took my hearing loss seriously. Their program changed my quality of life." },
    ],
  },
  {
    id: 2,
    name: "Denver Hearing & Tinnitus Clinic",
    categories: ["Tinnitus Management", "Hearing Aids"],
    rating: 4.9,
    reviewCount: 287,
    phone: "(303) 555-0388",
    location: "Denver, CO",
    servingArea: "Denver, CO · Capitol Hill",
    imageUrl: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&q=80",
    rank: 1,
    about:
      "a patient-focused audiology practice offering tinnitus management, custom hearing aid fittings, and personalized hearing care plans for patients of all ages.",
    team: [
      { name: "Elena Torres, Au.D.", title: "Owner & Clinical Director" },
      { name: "David Kim, Au.D.", title: "Tinnitus Management Specialist" },
    ],
    reviews: [
      { author: "Michelle P.", text: "They gave me a complete tinnitus management plan and finally explained my triggers. My quality of sleep has improved so much." },
      { author: "Robert A.", text: "Professional, thorough, and genuinely caring. My hearing aid fitting was handled seamlessly." },
    ],
  },
  {
    id: 3,
    name: "Front Range Balance & Hearing Institute",
    categories: ["Balance Disorders", "Diagnostic Evaluations"],
    rating: 4.9,
    reviewCount: 198,
    phone: "(303) 555-0210",
    location: "Denver, CO",
    servingArea: "Denver, CO · Highlands",
    imageUrl: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&q=80",
    rank: 2,
    about:
      "a specialized audiology practice focusing on balance disorder testing, vestibular rehabilitation, and comprehensive diagnostic evaluations for patients of every age.",
    team: [
      { name: "Dr. Amara Osei, Au.D.", title: "Vestibular & Balance Specialist" },
      { name: "Nathan Brooks, Au.D.", title: "Diagnostic Audiology Specialist" },
    ],
    reviews: [
      { author: "Patricia W.", text: "They identified my balance disorder and got me on the right therapy fast. Life-changing results." },
      { author: "Carlos M.", text: "Outstanding care for my mother's dizziness and balance issues. The team is thorough and truly goes above and beyond." },
    ],
  },
  {
    id: 4,
    name: "Little Ears Pediatric Audiology",
    categories: ["Pediatric Audiology", "Cochlear Implants"],
    rating: 4.8,
    reviewCount: 174,
    phone: "(303) 555-0455",
    location: "Denver, CO",
    servingArea: "Denver, CO · Wash Park",
    imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&q=80",
    rank: 3,
    about:
      "a pediatric audiology practice dedicated to children with hearing loss, cochlear implant candidacy and care, and early intervention services — providing compassionate, family-centered care.",
    team: [
      { name: "Sofia Ramirez, Au.D., CCC-A", title: "Pediatric Audiology Specialist" },
      { name: "Liam Chen, Au.D.", title: "Cochlear Implant Coordinator" },
    ],
    reviews: [
      { author: "Angela T.", text: "They made my 7-year-old feel completely at ease. His hearing loss is so much better managed now." },
      { author: "Derek F.", text: "The pediatric team is phenomenal — patient, kind, and incredibly knowledgeable about cochlear implants." },
    ],
  },
];
