import { animate, motion, scale, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import "../styles/Section3Three.css";
import ScrollAnchor from "./ScrollAnchor";

export default function Section3Three({ setCurrentSection }) {
  const [isCurrent, setIsCurrent] = useState(false);
  const [currentPanel, setCurrentPanel] = useState(0);

  const [skillTextVisible, setSkillTextVisible] = useState(false);
  const [sectionThreeContainerVisible, setSectionThreeContainerVisible] =
    useState(false);
  const [textSkill, setTextSkill] = useState(false);

  return (
    <>
      {/* anchor */}
      <motion.div
        onViewportEnter={() => {
          setSkillTextVisible(true);
          setSectionThreeContainerVisible(false);
          setTextSkill(false);
        }}>
        <ScrollAnchor
          setIsCurrent={setIsCurrent}
          setCurrentSection={setCurrentSection}
          sectionNumber={2}
          anchorname={"scroll_anchor"}
          idName={"projects"}
        />
      </motion.div>

      {/* SKILLS TEXT */}
      <div className="position-sticky text" style={{ top: 0 }}>
        <div className="textCon">
          <motion.h1
            className="skills-text "
            layout
            initial={{ visibility: "hidden" }}
            animate={{
              opacity: skillTextVisible ? 1 : 0,
              scale: textSkill ? 4 : 1,
              visibility: skillTextVisible && "visible",
              transitionEnd: skillTextVisible == false && {
                visibility: "hidden",
                zIndex: -10,
              },
            }}
            transition={{
              scale: { duration: 0.3 },
              opacity: 0.5,
              zIndex: 1,
              visibility: 0.5,
            }}>
            PROJECTS
          </motion.h1>
        </div>
      </div>

      {/* section three */}
      <motion.div
        id="skills"
        viewport={{ margin: "0% 0% -10% 0%" }}
        className="section_three container-fluid "
        initial={{ y: 0, filter: "blur(10px)", opacity: 0 }}
        animate={{
          opacity: sectionThreeContainerVisible ? 1 : 0,
          filter: sectionThreeContainerVisible ? "blur(0px)" : "blur(10px)",
          zIndex: sectionThreeContainerVisible ? 1 : -10,
        }}
        transition={{
          opacity: { duration: 0.3 },
          y: { duration: 0.3 },
          filter: { duration: 0.3 },
        }}>
        <div className="">
          <div className="section_three_container container p-0 d-flex flex-column flex-sm-column flex-md-row justify-content-center align-items-center gap-2">
            {projectsList.map((item) => {
              return (
                <CardItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  descriptions={item.description}
                  tags={item.tags}
                  currentPanel={currentPanel}
                  setCurrentPanel={setCurrentPanel}
                />
              );
            })}
          </div>
        </div>
      </motion.div>

      {/* PAGE TITLE */}
      <div
        style={{
          position: "relative",
          top: "0%",
          zIndex: -10,
          color: "white",
          opacity: 0.15,
        }}>
        <div
          id="projects"
          style={{
            position: "absolute",
            height: "100vh",
            right: "10%",
          }}>
          <h1
            style={{
              position: "relative",
              top: "10%",
              writingMode: "sideways-lr",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "end",
            }}>
            PROJECTS//
          </h1>
        </div>
      </div>

      {/* anchor */}
      <motion.div
        className="basis1"
        onViewportEnter={() => {
          setSkillTextVisible(false);
          setSectionThreeContainerVisible(true);
          // scale
          setTextSkill(true);
        }}
        onViewportLeave={() => {
          setSectionThreeContainerVisible(false);
        }}
        viewport={{ margin: "0% 0px -1px 0%" }}>
        <ScrollAnchor
          setIsCurrent={setIsCurrent}
          setCurrentSection={setCurrentSection}
          sectionNumber={2}
          anchorname={"scroll_anchor"}
        />
      </motion.div>

      <div
        style={{
          height: "100vh",
          position: "sticky",
          top: 0,
          zIndex: -1,
        }}></div>
    </>
  );
}

let CardItem = ({
  id,
  title,
  descriptions,
  tags,
  currentPanel,
  setCurrentPanel,
}) => {
  // let bgColor = id % 2 == 0 ? "black" : "var(--main-theme-color2)";
  let border = "solid 1px #ffffff24";

  return (
    <motion.div
      className={`skill-item-panel ${id === currentPanel && "active"}`}
      style={{ border }}
      onClick={() => setCurrentPanel(id)}>
      <motion.div
        className={`item-title `}
        layout
        transition={{ duration: 0.3 }}>
        <h3 className=" m-md-0">{title}</h3>
      </motion.div>
      <div className=" d-flex flex-column py-3 px-2 pe-3 inside-info">
        <motion.div
          className=" info-list d-flex flex-column justify-content-start  "
          initial={{ opacity: 0 }}
          animate={{
            opacity: id == currentPanel ? 1 : 0,
          }}
          transition={{ left: 0.3 }}>
          <h1 className=" mb-md-5">{title}</h1>
          <div className="">
            <div className=" d-flex justify-content-center justify-content-md-start">
              <div className=" mb-3 mb-md-4 d-flex flex-wrap flex-md-nowrap gap-3 tags-lists">
                {tags.map((tag, index) => {
                  return (
                    <div
                      key={index}
                      className=" border  p-1 px-md-2 px-lg-3 py-lg-1 flex-grow-1 text-center fw-bold tags">
                      {tag}
                    </div>
                  );
                })}
              </div>
            </div>
            {descriptions.map((info, i) => {
              return (
                <div key={i}>
                  <p>• {info} </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const projectsList = [
  {
    id: 0,
    title: "Coffee Bean Defect Detection System (Thesis Project)",
    description: [
      "Developed a localhost-based web application for real-time detection of coffee bean defects using YOLOv11 and a controlled imaging setup.",
      "Built a full-stack system with Django, enabling users and administrators to analyze,visualize, and manage detection results.",
      "Implemented a computer vision pipeline with image segmentation, classification of 10+ defect types, and integration of camera-based hardware for batch analysis",
    ],
    tags: ["HTML", "CSS", "PYTHON", "DJANGO", "SQLITE", "OpenCV"],
  },
  {
    id: 1,
    title: "Location-Based Car Services Finder",
    description: [
      "Built a web application on a local server (XAMPP) using PHP (backend), JavaScript (frontend interactivity), HTML/CSS (UI), and MySQL/MSSQL for database management.",
      "Integrated Google Maps API to enable drivers to locate nearby car-related stores such as repair shops, dealerships, and parts suppliers.",
      "Implemented dynamic features including user authentication, CRUD operations, and interactive map-based navigation.",
    ],
    tags: ["HTML", "CSS", "PHP", "JAVASCRIPT", "MSSQL"],
  },
  {
    id: 2,
    title: "Recipe Finder (Food API Integration)",
    description: [
      "Built a client-side web application using JavaScript, HTML, and CSS for recipe search and meal planning",
      "Integrated a public Food API to fetch and display recipes dynamically based on user queries.",
    ],
    tags: ["HTML", "CSS", "BOOTSTRAP", "JAVASCRIPT", "API"],
  },
  {
    id: 3,
    title: "Fitness Activity Recognition",
    description: [
      "Created a computer vision system using Google Mediapipe to detect and count certain workout activities.",
      "Implemented pose estimation and motion tracking algorithms to accurately classify exercise repetitions through camera input.",
      "Built an interactive interface with live video feedback to support fitness tracking and performance monitoring.",
    ],
    tags: ["PYTHON", "OpenCV", "MEDIAPIPE"],
  },
];
