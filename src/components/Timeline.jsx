// src/components/Timeline.jsx
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaGraduationCap,
  FaUsers,
  FaProjectDiagram,
  FaChalkboardTeacher,
} from "react-icons/fa";

const Timeline = () => {
  return (
    <VerticalTimeline lineColor="#ffffff">
      {/* B.Tech - NIT Agartala */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2021 - 2025"
        iconStyle={{ background: "#3b82f6", color: "#fff" }}
        icon={<FaGraduationCap />}
      >
        <h3 className="text-lg font-bold text-blue-600">B.Tech - NIT Agartala</h3>
        <p className="text-gray-700">Electrical Engg | CGPA: 8.32</p>
      </VerticalTimelineElement>

      {/* Full Stack Projects */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2022 - Present"
        iconStyle={{ background: "#22c55e", color: "#fff" }}
        icon={<FaProjectDiagram />}
      >
        <h3 className="text-lg font-bold text-green-600">DSA & Full Stack Projects</h3>
        <p className="text-gray-700">Chatify, PasteApp, more</p>
      </VerticalTimelineElement>

      {/* Co-Founder - PDB */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023 - 2025"
        iconStyle={{ background: "#8b5cf6", color: "#fff" }}
        icon={<FaUsers />}
      >
        <h3 className="text-lg font-bold text-purple-600">Co-Founder - PDB</h3>
        <p className="text-gray-700">Led peer learning & sessions</p>
      </VerticalTimelineElement>

      {/* Mentor - Juniors */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2022 - 2025"
        iconStyle={{ background: "#facc15", color: "#fff" }}
        icon={<FaChalkboardTeacher />}
      >
        <h3 className="text-lg font-bold text-yellow-600">Mentor - Juniors</h3>
        <p className="text-gray-700">DSA & Web Dev guidance</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
