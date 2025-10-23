import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

const Achievements = () => {
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

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
    <section
      id="achievements"
      className="py-20 bg-gradient-to-b from-[#eef2ff] to-[#e0f2fe] text-slate-800 scroll-mt-32"
    >
      <h2 className="text-4xl text-center font-bold text-sky-700 mb-12" data-aos="fade-up">
        Achievements
      </h2>

      <div className="container mx-auto">
        <Slider {...settings}>
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md border border-sky-100 cursor-pointer hover:shadow-xl hover:border-sky-400 hover:bg-sky-50 transition duration-300 ease-in-out transform hover:scale-105 mx-4 mb-6"
              onClick={() => toggleExpand(index)}
              data-aos="fade-up"
            >
              <div className="flex items-center gap-2 mb-2">
                {achievement.icon && (
                  <img src={achievement.icon} alt="Platform Logo" className="w-6 h-6" />
                )}
                <h3 className="text-xl font-semibold text-sky-700 hover:text-sky-800 transition duration-200">
                  {achievement.title}
                </h3>
              </div>

              <p className="text-slate-700">
                {expanded === index
                  ? achievement.description
                  : `${achievement.description.split(' ').slice(0, 10).join(' ')}...`}
              </p>

              {expanded === index && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:underline mt-4 inline-block transition duration-200"
                >
                  Profile Link
                </a>
              )}

              <p className="text-sm text-slate-500 mt-1">{achievement.date}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Achievements;
