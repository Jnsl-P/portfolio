import { motion, useScroll } from "motion/react";
import { useRef, useState, Fragment } from "react";
import "../styles/Section2Two.css";
import ScrollAnchor from "./ScrollAnchor";

export default function Section2Two({ setCurrentSection }) {
  const [isCurrent, setIsCurrent] = useState(false);
  const [test, setTest] = useState(null);
  const [test2, setTest2] = useState(false);

  return (
    <>
      {/* anchor */}
      <motion.div
        id="skills"
        className="basis"
        viewport={{ margin: "0% 0% -10px 0%" }}
        onViewportEnter={() => {
          setTest(0);
        }}
        onViewportLeave={() => {
          setTest(null);
        }}>
        <ScrollAnchor
          setIsCurrent={setIsCurrent}
          setCurrentSection={setCurrentSection}
          sectionNumber={1}
          anchorname={"scroll_anchor"}
        />
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
          style={{
            position: "absolute",
            height: "600vh",
            right: "10%",
          }}>
          <h1
            style={{
              position: "sticky",
              top: "10%",
              writingMode: "sideways-lr",
              fontSize: "1.5rem",
              fontWeight: "bold",
              textAlign: "end",
            }}>
            SKILLS//
          </h1>
        </div>
      </div>

      {/* CONTENT */}
      {skills_items.map((item) => {
        return (
          <Fragment key={item.id}>
            {/* ANCHOR */}
            {
              <motion.div
                className="basis"
                viewport={{ margin: "0% 0% -10px 0%" }}
                onViewportEnter={() => {
                  setTest(item.id);
                  setTest2(false);
                }}
                onViewportLeave={() => {
                  if (item.id == 5) {
                    if (isCurrent == false) {
                      setTest2(true);
                    }
                  }
                }}>
                <ScrollAnchor
                  setIsCurrent={setIsCurrent}
                  setCurrentSection={setCurrentSection}
                  sectionNumber={1}
                  anchorname={"scroll_anchor"}
                  basis={true}
                />
              </motion.div>
            }

            {/* DATA */}
            <motion.div
              className={`skill${item.id + 1} section_two d-flex flex-column justify-content-center align-items-center`}
              initial={false}
              animate={{
                opacity: !isCurrent ? 0 : 1,
                visibility: !isCurrent ? "hidden" : "visible",
                zIndex: !isCurrent ? -1 : 1,
              }}
              transition={{ duration: 0.3 }}
              style={{
                fontSize: "3rem",
              }}>
              {/* CARD CONTAINER */}
              <motion.div
                className={`section_two_container mx-0 p-0 d-flex justify-content-center align-items-center overflow-hidden card-container ${item.id != 0 && "skill-separate"}`}>
                {/* NUMBER */}
                <div className=" overflow-hidden skill-number text-end">
                  <motion.div
                    className=" d-inline-block "
                    initial={{ x: "100%" }}
                    animate={{ x: test == item.id ? "30%" : "100%" }}
                    transition={{ x: { duration: 0.5 } }}
                    style={
                      {
                        // width: "160px",
                        // visibility: test == item.id ? "visible" : "hidden",
                      }
                    }>
                    {item.id + 1}
                  </motion.div>
                </div>

                {/* DIVIDER */}
                <motion.div
                  className="skills-divider"
                  style={{
                    width: "1px",
                    background: item.id == 0 && "white",
                  }}></motion.div>

                {/* DESCRIPTION */}
                <div className=" text-nowrap overflow-hidden skill-description d-inline-block">
                  <motion.div
                    className="px-3 px-md-5 d-flex flex-column gap-4"
                    initial={{ x: "-200%" }}
                    animate={{
                      x: test == item.id ? "0%" : "-200%",
                    }}
                    transition={{ x: { duration: 0.5 } }}>
                    <h1 className=" mb-4 mb-md-5 ">{item.title}</h1>
                    <ul className="description-list list-unstyled">
                      {item.description.map((desc, index) => {
                        return <li key={index}>{desc}</li>;
                      })}
                    </ul>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </Fragment>
        );
      })}
      <motion.div
        onViewportEnter={() => {
          setIsCurrent(false);
          setTest(null);
        }}
        viewport={{ margin: "0px 0px -10px 0px" }}></motion.div>
    </>
  );
}

const skills_items = [
  {
    id: 0,
    title: "FRONT END DEVELOPMENT",
    description: [
      "HTML / CSS / Bootstrap",
      "Responsive Web Design",
      "Javascript / jQuery",
      "React",
    ],
  },
  {
    id: 1,
    title: "BACK END DEVELOPMENT",
    description: ["Django Framework", "RESTful API", "Python", "PHP"],
  },
  {
    id: 2,
    title: "DATABASE",
    description: [
      "SQL / MySQL / MSSQL",
      "Data Handling",
      "SQLite",
      // "React",
    ],
  },
  {
    id: 3,
    title: "IT SUPPORT",
    description: [
      "Network Troubleshooting",
      "Hardware Diagnostics",
      "Software Installation",
      "Device Reimaging",
      // "BitLocker Encryption",
    ],
  },
  {
    id: 4,
    title: "COMPUTER VISION",
    description: [
      "YOLOv11 Object Detection",
      "Google Mediapipe",
      "Image Processing",
      "OpenCV",
    ],
  },
  {
    id: 5,
    title: "OTHER TECHNOLOGIES",
    description: ["XAMPP / Local Servers", "Computer Networks", "Java"],
  },
];
