import React, { useState, useEffect } from 'react';
import Slider from 'react-slick'; // react-slick carousel
import AOS from 'aos';
import 'aos/dist/aos.css';

/**
 * @constant achievements
 * @description An array of achievement objects to be displayed in the carousel.
 */
const achievements = [
  {
    title: 'Knight at LeetCode',
    description:
      'Max rating 1898: Ranked in the top 5 percent worldwide, solved 1000+ coding questions, and secured a global ranking of 1375 (top 1 percent) in a LeetCode Biweekly contest 117.',
    link: 'https://leetcode.com/u/Winter_Soldier_2002/',
    date: '2023',
    icon: '/assets/leetcode-logo.svg',
  },
  {
    title: 'Codeforces Specialist',
    description: 'Max 1408: Rated Global Rank 1112 in Round 918, solved 130+ problems.',
    link: 'https://codeforces.com/profile/Lucifer204?mobile=false',
    date: '2023',
    icon: '/assets/codeforces-logo.svg',
  },
  {
    title: 'Codechef 3* coder',
    description: 'Max rating 1607, ranked 125 out of 50k in Contest Starter 128.',
    link: 'https://www.codechef.com/users/rjalgo',
    date: '2024',
    icon: '/assets/codechef-logo.svg',
  },
  {
    title: 'GFG 4* coder',
    description:
      'Solved 450+ problems and ranked in the top 75 among 4k students in the institute.',
    link: 'https://www.geeksforgeeks.org/user/rjalgorithmyatras/',
    date: '2025',
    icon: '/assets/gfg-logo.jpeg',
  },
  {
    title: 'Top 5% JEE Mains ',
    description:
      'Achieved a top 5 percentile in JEE Mains, standing out among 1.4 million participants nationwide, JEE Advanced qualified, and ranked in the top 2% in WBJEE among 1.5 lakh students.',
    link: '#',
    date: '2021',
    icon: '/assets/flag.svg',
  },
];

/**
 * Renders the Achievements section using a 'react-slick' carousel.
 * Cards expand on click to show more details.
 */
const Achievements = () => {
  // State to manage which card is currently expanded
  const [expanded, setExpanded] = useState(null);

  // Initialize AOS on component mount
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Toggles the expanded state of a card by its index
  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  /**
   * @constant settings
   * @description Configuration object for the react-slick carousel.
   */
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    // Section Container: Added dark mode gradient and text
    <section
      id="achievements"
      className="py-20 bg-gradient-to-b from-[#eef2ff] to-[#e0f2fe] dark:from-slate-900 dark:to-slate-900 text-slate-800 dark:text-slate-300 scroll-mt-32"
    >
      {/* Section Title: Added dark mode text color */}
      <h2 className="text-4xl text-center font-bold text-sky-700 dark:text-sky-400 mb-12" data-aos="fade-up">
        Achievements
      </h2>

      <div className="container mx-auto">
        <Slider {...settings}>
          {achievements.map((achievement, index) => (
            // Achievement Card: Added dark mode background, border, and hover states
            <div
              key={index}
              className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md border border-sky-100 dark:border-slate-700 cursor-pointer hover:shadow-xl hover:border-sky-400 dark:hover:border-sky-600 hover:bg-sky-50 dark:hover:bg-slate-700 transition duration-300 ease-in-out transform hover:scale-105 mx-4 mb-6"
              onClick={() => toggleExpand(index)}
              data-aos="fade-up"
            >
              <div className="flex items-center gap-2 mb-2">
                {achievement.icon && (
                  <img src={achievement.icon} alt="Platform Logo" className="w-6 h-6" />
                )}
                {/* Card Title: Added dark mode text color */}
                <h3 className="text-xl font-semibold text-sky-700 dark:text-sky-400 hover:text-sky-800 transition duration-200">
                  {achievement.title}
                </h3>
              </div>

              {/* Description: Added dark mode text color */}
              <p className="text-slate-700 dark:text-slate-400">
                {expanded === index
                  ? achievement.description
                  : `${achievement.description.split(' ').slice(0, 10).join(' ')}...`}
              </p>

              {/* Profile Link: Added dark mode text color */}
              {expanded === index && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 dark:text-sky-400 hover:underline mt-4 inline-block transition duration-200"
                >
                  Profile Link
                </a>
              )}

              {/* Date: Added dark mode text color */}
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{achievement.date}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Achievements;