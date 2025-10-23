import React, { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion, AnimatePresence, useInView } from "framer-motion";
import CountUp from "react-countup";
import { FaCode, FaUserTie, FaHandsHelping } from "react-icons/fa";

// Tooltip + Icon
const getCategoryIcon = (category) => {
  const baseStyle = "text-xl mr-2";
  const tooltipStyle =
    "absolute -top-10 left-1/2 -translate-x-1/2 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-20";

  switch (category) {
    case "Tech":
      return (
        <span className="relative group">
          <FaCode className={`text-sky-600 ${baseStyle}`} />
          <div className={tooltipStyle}>Technical Role</div>
        </span>
      );
    case "Leadership":
      return (
        <span className="relative group">
          <FaUserTie className={`text-purple-600 ${baseStyle}`} />
          <div className={tooltipStyle}>Leadership Role</div>
        </span>
      );
    case "Social":
      return (
        <span className="relative group">
          <FaHandsHelping className={`text-green-600 ${baseStyle}`} />
          <div className={tooltipStyle}>Social Initiative</div>
        </span>
      );
    default:
      return null;
  }
};

const positions = [
  {
    title: "Co-Founder, PDB NIT Agartala",
    category: "Leadership",
    description:
      "Founded a peer group to improve communication skills and led interactive sessions.",
    moreDetails:
      "As a co-founder, I initiated the creation of a platform for students to practice and enhance their public speaking, group discussion, and interview skills. I facilitated weekly sessions, led communication workshops, and brought in guest speakers to add value. These efforts helped 60+ members become more confident and articulate, which reflected in better academic presentations and placement preparation. I also introduced peer feedback loops to promote collaborative self-improvement.",
    year: "Mar 2023 - May 2025 · 2 yrs 3 mos",
    impact: [
      { icon: "👥", label: "Members Impacted", count: 60 },
      { icon: "📚", label: "Sessions Conducted", count: 25 },
      { icon: "🎤", label: "Peer Feedback Cycles", count: 10 },
    ],
  },
  {
    title: "Mentor, Junior Students",
    category: "Tech",
    description:
      "Guided juniors in DSA, full-stack web development, and time management.",
    moreDetails:
      "I regularly mentored junior batches on solving competitive programming problems, breaking down complex Data Structures & Algorithms, and building web projects using React, Node.js, and MongoDB. I helped students participate in contests and complete hands-on development tasks. Additionally, I conducted 1-on-1 and group mentoring sessions on balancing academic priorities with side projects, focusing on efficient planning, exam prep strategies, and mental wellness.",
    year: "Aug 2023 - May 2025 · 1 yr 9 mos",
    impact: [
      { icon: "📚", label: "DSA Sessions", count: 30 },
      { icon: "💼", label: "Teams Mentored", count: 10 },
      { icon: "🧠", label: "Weekly Mentorships", count: 40 },
    ],
  },
  {
    title: "Member, WeCan NIT Agartala",
    category: "Social",
    description:
      "Taught underprivileged children and supported parents with vocational skills.",
    moreDetails:
      "I was actively involved in teaching foundational subjects like math, science, and English to children in nearby villages using interactive storytelling, games, and visual aids. Beyond academics, we helped instill self-confidence and curiosity in the kids. I also participated in community outreach programs that helped parents gain skills like tailoring, handicrafts, and digital literacy. We collaborated with local NGOs to facilitate micro-financing and small-scale entrepreneurship training for sustainable livelihood support.",
    year: "Sept 2023 - Present · 10 mos",
    impact: [
      { icon: "🎓", label: "Kids Taught", count: 40 },
      { icon: "👨‍👩‍👧‍👦", label: "Village Programs", count: 3 },
      { icon: "🖠️", label: "Skill Workshops", count: 2 },
    ],
  },
];

const categories = ["All", "Tech", "Leadership", "Social"];

const Responsibility = () => {
  const [showDetails, setShowDetails] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true });

  const filteredPositions =
    selectedCategory === "All"
      ? positions
      : positions.filter((pos) => pos.category === selectedCategory);

  const toggleDetails = (index) => {
    setShowDetails(showDetails === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      id="responsibility"
      className="py-20 bg-gradient-to-b from-[#eef2ff] to-[#e0f2fe] text-slate-800 scroll-mt-32"
    >
      <h2
        className="text-4xl text-center font-bold text-sky-700 mb-12"
        data-aos="fade-up"
      >
        Positions of Responsibility
      </h2>

      {/* Category Tabs */}
      <div className="flex gap-3 overflow-x-auto no-scrollbar justify-center sm:flex-wrap mb-8 px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setShowDetails(null);
              setSelectedCategory(cat);
            }}
            className={`px-3 py-1 text-sm sm:text-base rounded-full font-medium border transition whitespace-nowrap
              ${selectedCategory === cat
                ? "bg-white text-sky-700 border-white shadow"
                : "bg-transparent text-slate-800 border-sky-300 hover:bg-sky-100"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Responsibility Cards */}
      <div className="container mx-auto mt-4 relative pl-6 border-l-4 border-sky-300 space-y-10 max-w-4xl">
        {filteredPositions.map((position, index) => (
          <motion.div
            key={index}
            className="relative bg-white text-slate-800 p-6 rounded-lg shadow-md ml-4 border-l-8 border-sky-600"
            data-aos="fade-up"
          >
            <div className="absolute -left-7 top-6 w-4 h-4 bg-white border-4 border-sky-600 rounded-full shadow"></div>

            <h3 className="text-xl font-semibold text-sky-700 mb-2 flex items-center">
              {getCategoryIcon(position.category)}
              {position.title}
            </h3>

            <p className="text-slate-700">{position.description}</p>

            {position.impact && (
              <div className="mt-3 flex flex-wrap gap-2">
                {position.impact.map((item, i) => (
                  <div
                    key={i}
                    className="bg-sky-100 text-sky-800 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1"
                  >
                    {item.icon}
                    <CountUp
                      start={isInView ? 0 : null}
                      end={isInView ? item.count : 0}
                      duration={2}
                    />
                    + <span className="ml-1">{item.label}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex justify-between items-center mt-4">
              <p className="text-slate-500 text-sm">{position.year}</p>
              <button
                className="text-sky-600 hover:underline text-sm"
                onClick={() => toggleDetails(index)}
              >
                {showDetails === index ? "Show Less" : "More Details"}
              </button>
            </div>

            <AnimatePresence>
              {showDetails === index && (
                <motion.div
                  className="mt-4 bg-slate-50 text-slate-700 p-4 rounded-md"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p>{position.moreDetails}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Responsibility;
