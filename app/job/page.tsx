"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Poppins } from "next/font/google";
import { MapPin, Clock, ChevronDown, ChevronUp, Search } from "lucide-react";
import Logo from "../components/icons/Logo";
import CreateAccountIcons from "../components/icons/CreateAccountIcons";
import FooterSection from "../components/sections/FooterSection";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700", "800"],
});

type Job = {
    id: number;
    title: string;
    company: string;
    location: string;
    type: "Full Time" | "Part Time" | "Remote" | "Internship";
    category: string;
    salary: string;
    shortDesc: string;
    responsibilities: string[];
    requirements: string[];
    benefits: string[];
    image: string;
};

const jobs: Job[] = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "TechNova",
        location: "Beirut",
        type: "Full Time",
        category: "Development",
        salary: "$1200 - $1800",
        shortDesc: "Build responsive user interfaces using React and modern frontend tools.",
        responsibilities: [
            "Develop responsive pages and reusable UI components.",
            "Work with designers to match the required UI.",
            "Integrate APIs and handle frontend state.",
        ],
        requirements: [
            "Good knowledge of React and JavaScript.",
            "Experience with Tailwind CSS.",
            "Basic understanding of API integration.",
        ],
        benefits: [
            "Flexible working hours.",
            "Career growth opportunities.",
            "Supportive team environment.",
        ],
        image: "/images/job1.jpg",
    },
    {
        id: 2,
        title: "UI/UX Designer",
        company: "Pixel Studio",
        location: "Dubai",
        type: "Part Time",
        category: "Design",
        salary: "$900 - $1300",
        shortDesc: "Design modern and user-friendly interfaces for web and mobile products.",
        responsibilities: [
            "Create wireframes and UI screens.",
            "Improve user journeys and usability.",
            "Collaborate with frontend developers.",
        ],
        requirements: [
            "Experience with Figma or Adobe XD.",
            "Strong understanding of visual hierarchy.",
            "Portfolio with real UI/UX work.",
        ],
        benefits: [
            "Creative environment.",
            "Hybrid flexibility.",
            "Interesting product challenges.",
        ],
        image: "/images/job2.jpg",
    },
    {
        id: 3,
        title: "Backend Engineer",
        company: "DevCore",
        location: "Remote",
        type: "Remote",
        category: "Development",
        salary: "$1500 - $2200",
        shortDesc: "Build secure APIs and scalable backend services for growing products.",
        responsibilities: [
            "Develop and maintain backend APIs.",
            "Optimize database queries and performance.",
            "Implement authentication and security logic.",
        ],
        requirements: [
            "Experience with Node.js, Laravel, or similar backend frameworks.",
            "Strong SQL/database skills.",
            "Understanding of REST APIs.",
        ],
        benefits: [
            "Remote-friendly culture.",
            "Learning budget.",
            "Performance bonuses.",
        ],
        image: "/images/job3.png",
    },
    {
        id: 4,
        title: "Marketing Specialist",
        company: "BrandWave",
        location: "London",
        type: "Full Time",
        category: "Marketing",
        salary: "$1000 - $1600",
        shortDesc: "Plan campaigns, manage digital channels, and grow brand reach.",
        responsibilities: [
            "Create and monitor marketing campaigns.",
            "Manage social media and content schedules.",
            "Analyze campaign performance.",
        ],
        requirements: [
            "Knowledge of digital marketing basics.",
            "Good communication skills.",
            "Experience with content planning.",
        ],
        benefits: [
            "Team bonuses.",
            "Skill development workshops.",
            "Friendly culture.",
        ],
        image: "/images/job4.jpg",
    },
    {
        id: 5,
        title: "Data Analyst Intern",
        company: "Insight Labs",
        location: "Beirut",
        type: "Internship",
        category: "Data",
        salary: "$400 - $700",
        shortDesc: "Support reporting and dashboard creation using business data.",
        responsibilities: [
            "Clean and organize datasets.",
            "Prepare weekly reports.",
            "Help build simple dashboards.",
        ],
        requirements: [
            "Basic Excel or spreadsheet skills.",
            "Interest in analytics and reporting.",
            "Good attention to detail.",
        ],
        benefits: [
            "Internship certificate.",
            "Mentorship support.",
            "Hands-on learning.",
        ],
        image: "/images/job1.jpg",
    },
    {
        id: 6,
        title: "Product Manager",
        company: "Xpeed Tech",
        location: "Remote",
        type: "Full Time",
        category: "Management",
        salary: "$1800 - $2500",
        shortDesc: "Lead product planning, prioritization, and cross-team coordination.",
        responsibilities: [
            "Define product goals and roadmaps.",
            "Coordinate with design and engineering.",
            "Track priorities and delivery timelines.",
        ],
        requirements: [
            "Strong communication skills.",
            "Experience with product planning.",
            "Ability to manage priorities clearly.",
        ],
        benefits: [
            "Remote setup.",
            "Leadership opportunities.",
            "Fast-paced team.",
        ],
        image: "/images/job2.jpg",
    },
];

const faqs = [
    {
        question: "How do I apply for a job?",
        answer: "Click on 'Apply Now' and follow the application steps provided by the company."
    },
    {
        question: "Can I apply for multiple jobs?",
        answer: "Yes, you can apply to as many jobs as you want based on your qualifications."
    },
    {
        question: "Are remote jobs available?",
        answer: "Yes, use the 'Remote' filter to find jobs that allow remote work."
    },
    {
        question: "How do I filter jobs effectively?",
        answer: "Use location, job type, and category filters to narrow down your search."
    },
    {
        question: "Do I need an account to apply?",
        answer: "In most cases yes, creating an account helps track your applications."
    }
];

export default function JobPage() {
    const [search, setSearch] = useState("");
    const [location, setLocation] = useState("All");
    const [type, setType] = useState("All");
    const [category, setCategory] = useState("All");
    const [openJobId, setOpenJobId] = useState<number | null>(null);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);
    const pathname = usePathname();

    const locations = ["All", "Beirut", "Dubai", "London", "Remote"];
    const types = ["All", "Full Time", "Part Time", "Remote", "Internship"];
    const categories = ["All", "Development", "Design", "Marketing", "Data", "Management"];

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Job", href: "/job" },
        { name: "About Us", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    const filteredJobs = useMemo(() => {
        return jobs.filter((job) => {
            const matchesSearch =
                job.title.toLowerCase().includes(search.toLowerCase()) ||
                job.company.toLowerCase().includes(search.toLowerCase()) ||
                job.shortDesc.toLowerCase().includes(search.toLowerCase());

            const matchesLocation = location === "All" || job.location === location;
            const matchesType = type === "All" || job.type === type;
            const matchesCategory = category === "All" || job.category === category;

            return matchesSearch && matchesLocation && matchesType && matchesCategory;
        });
    }, [search, location, type, category]);

    return (
        <main className="min-h-screen flex flex-col bg-[#17c58b]">
            <div className="flex-1 flex flex-col">
                <section className="w-full bg-[#f3f3f3] ">
                    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12 pt-12 md:pt-16 pb-20">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="shrink-0">
                                <Logo />
                            </Link>

                            <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-[#1f2937]">
                                {navLinks.map((item) => {
                                    const isActive = pathname === item.href;

                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={`relative transition ${
                                                isActive ? "text-black" : "text-[#1f2937] hover:text-black"
                                            }`}
                                        >
                                            {item.name}
                                            <span
                                                className={`absolute left-1/2 -translate-x-1/2 -bottom-[9px] h-[2px] rounded-full bg-[#17c58b] transition-all duration-300 ${
                                                    isActive ? "w-5" : "w-0"
                                                }`}
                                            />
                                        </Link>
                                    );
                                })}
                            </nav>

                            <div className="hidden md:flex items-center gap-6">
                                <Link
                                    href="/sign-in"
                                    className="cursor-pointer text-sm font-medium text-[#1f2937] hover:text-[#85A32B] transition"
                                >
                                    Sign In
                                </Link>

                                <Link
                                    href="/sign-up"
                                    className="cursor-pointer hover:bg-[#f4f9ef] flex items-center gap-2 rounded-[18px] bg-white px-6 py-[14px] text-sm font-medium text-black border border-[#e5e7eb] shadow-[0_8px_20px_rgba(0,0,0,0.06)] transition"
                                >
                                    <CreateAccountIcons className="w-5 h-5 text-[#17c58b]" />
                                    <span>Create Account</span>
                                </Link>
                            </div>

                            <button className="rounded-lg bg-[#17c58b] px-3 py-2 text-lg leading-none text-white md:hidden">
                                ☰
                            </button>
                        </div>

                        <div className="pt-14 md:pt-20 text-center">
                            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-black">
                                Find Your Dream Job
                            </h1>

                            <p className="mt-5 text-sm md:text-base leading-8 max-w-2xl mx-auto text-[#6b7280]">
                                Explore opportunities that match your skills. Search, filter, and open each job to view detailed responsibilities, requirements, and benefits.
                            </p>
                        </div>

                        <div className="mt-10 bg-white rounded-[18px] p-4 md:p-5 shadow-sm">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">

                                <div>
                                    <label className="text-xs text-gray-500 mb-1 block">Search</label>
                                    <div className="flex items-center gap-2 bg-[#f3f3f3] px-4 h-12 rounded-xl">
                                        <Search className="w-4 h-4 text-[#6b7280]" />
                                        <input
                                            type="text"
                                            placeholder="Job title or keyword"
                                            value={search}
                                            onChange={(e) => setSearch(e.target.value)}
                                            className="w-full bg-transparent text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#17c58b] focus:border-transparent focus:ring-2 focus:ring-[#17c58b] focus:border-transparent placeholder:text-[#6b7280]"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-xs text-gray-500 mb-1 block">Location</label>
                                    <select
                                        value={location}
                                        onChange={(e) => setLocation(e.target.value)}
                                        className="w-full appearance-none bg-[#f3f3f3] px-4 h-12 rounded-xl text-sm font-medium text-black border border-transparent focus:border-[#17c58b] focus:ring-2 focus:ring-[#17c58b]/30 outline-none transition cursor-pointer hover:bg-[#ececec]"
                                    >
                                        {locations.map((item) => (
                                            <option key={item} value={item}>{item}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="text-xs text-gray-500 mb-1 block">Job Type</label>
                                    <select
                                        value={type}
                                        onChange={(e) => setType(e.target.value)}
                                        className="w-full appearance-none bg-[#f3f3f3] px-4 h-12 rounded-xl text-sm font-medium text-black border border-transparent focus:border-[#17c58b] focus:ring-2 focus:ring-[#17c58b]/30 outline-none transition cursor-pointer hover:bg-[#ececec]"
                                    >
                                        {types.map((item) => (
                                            <option key={item} value={item}>{item}</option>
                                        ))}
                                    </select>
                                </div>

                                <div>
                                    <label className="text-xs text-gray-500 mb-1 block">Category</label>
                                    <select
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                        className="w-full appearance-none bg-[#f3f3f3] px-4 h-12 rounded-xl text-sm font-medium text-black border border-transparent focus:border-[#17c58b] focus:ring-2 focus:ring-[#17c58b]/30 outline-none transition cursor-pointer hover:bg-[#ececec]"
                                    >
                                        {categories.map((item) => (
                                            <option key={item} value={item}>{item}</option>
                                        ))}
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full bg-white py-16 md:py-10 pb-10 md:pb-10">
                    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">
                        <div className="flex items-center justify-between gap-4 flex-wrap">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-semibold text-black">
                                    Available Jobs
                                </h2>
                                <p className="mt-2 text-sm text-[#6b7280]">
                                    {filteredJobs.length} jobs found
                                </p>
                            </div>
                        </div>

                        <div className="mt-10 space-y-5">
                            {filteredJobs.map((job) => {
                                const isOpen = openJobId === job.id;

                                return (
                                    <div
                                        key={job.id}
                                        className="bg-[#f9f9f9] rounded-2xl border border-[#eeeeee] overflow-hidden"
                                    >
                                        <div className="p-5 md:p-6">
                                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-5">
                                                <div className="flex items-start gap-4">
                                                    <div className="w-[93px] h-[93px] rounded-[47px] overflow-hidden bg-[#d60b0b] shrink-0">
                                                        <img
                                                            src={job.image}
                                                            alt={job.title}
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>

                                                    <div>
                                                        <h3 className="text-xl font-semibold text-black">
                                                            {job.title}
                                                        </h3>

                                                        <p className="mt-1 text-sm font-medium text-[#6b7280]">
                                                            {job.company}
                                                        </p>

                                                        <p className="mt-3 text-sm text-[#8b93a7] max-w-2xl">
                                                            {job.shortDesc}
                                                        </p>

                                                        <div className="flex flex-wrap items-center gap-3 mt-4 text-xs text-[#6b7280]">
                                                            <span className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-[10px]">
                                                                <MapPin className="w-3.5 h-3.5 text-gray-500" />
                                                                {job.location}
                                                            </span>

                                                            <span className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-[10px]">
                                                                <Clock className="w-3.5 h-3.5 text-gray-500" />
                                                                {job.type}
                                                            </span>

                                                            <span className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-[10px]">
                                                                {job.category}
                                                            </span>

                                                            <span className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-[10px]">
                                                                {job.salary}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="flex flex-col md:items-end gap-3">
                                                    <button className="cursor-pointer border border-[#17c58b] text-[#17c58b] px-6 py-2 rounded-lg text-sm font-medium hover:bg-[#17c58b] hover:text-white transition">
                                                        Apply Now
                                                    </button>

                                                    <button
                                                        onClick={() => setOpenJobId(isOpen ? null : job.id)}
                                                        className="cursor-pointer flex items-center gap-2 text-sm font-medium text-black"
                                                    >
                                                        {isOpen ? "Hide Details" : "View Details"}
                                                        {isOpen ? (
                                                            <ChevronUp className="w-4 h-4" />
                                                        ) : (
                                                            <ChevronDown className="w-4 h-4" />
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        {isOpen && (
                                            <div className="border-t border-[#ececec] bg-white px-5 md:px-6 py-6">
                                                <div className="grid md:grid-cols-3 gap-6">
                                                    <div>
                                                        <h4 className="text-base font-semibold text-black">
                                                            Responsibilities
                                                        </h4>
                                                        <ul className="mt-3 space-y-2 text-sm text-[#6b7280]">
                                                            {job.responsibilities.map((item, idx) => (
                                                                <li key={idx}>• {item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div>
                                                        <h4 className="text-base font-semibold text-black">
                                                            Requirements
                                                        </h4>
                                                        <ul className="mt-3 space-y-2 text-sm text-[#6b7280]">
                                                            {job.requirements.map((item, idx) => (
                                                                <li key={idx}>• {item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    <div>
                                                        <h4 className="text-base font-semibold text-black">
                                                            Benefits
                                                        </h4>
                                                        <ul className="mt-3 space-y-2 text-sm text-[#6b7280]">
                                                            {job.benefits.map((item, idx) => (
                                                                <li key={idx}>• {item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="w-full bg-white pt-16 pb-50 md:pb-50">
                    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-12">

                        <h2 className="text-2xl md:text-3xl font-semibold text-black text-center">
                            Frequently Asked Questions
                        </h2>

                        <div className="mt-10 space-y-4">

                            {faqs.map((faq, index) => {
                                const isOpen = openFAQ === index;

                                return (
                                    <div
                                        key={index}
                                        onClick={() => setOpenFAQ(isOpen ? null : index)}
                                        className="border border-gray-200 hover:bg-[#f3f3f3] rounded-xl overflow-hidden bg-[#f9f9f9] cursor-pointer transition"
                                    >
                                        <div className="w-full flex items-center justify-between px-5 py-4 text-left">
                                            <span className="text-sm md:text-base font-medium text-black">
                                                {faq.question}
                                            </span>

                                            <span className="text-xl">
                                                {isOpen ? "−" : "+"}
                                            </span>
                                        </div>

                                        {isOpen && (
                                            <div className="px-5 pb-4 text-sm text-gray-600">
                                                {faq.answer}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}

                        </div>
                    </div>
                </section>

                <FooterSection />
            </div>
        </main>
    );
}