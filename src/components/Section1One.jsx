import selfPhoto from "../assets/1000023665.jpg";
import "../styles/Section1One.css";
import { motion } from "motion/react";
import { useState, useRef } from "react";
import ScrollAnchor from "./ScrollAnchor";

export default function Section1One({ setCurrentSection }) {
  const [isCurrent, setIsCurrent] = useState(false);
  const [secondPart, setSecondPart] = useState(true);

  return (
    <>
      {/* HIDING BASIS */}
      <motion.div
        className="position-absolute"
        style={{ height: "200vh", zIndex: -1000, top: 0 }}
        onViewportLeave={() => {
          setIsCurrent(false);
        }}
        viewport={{
          margin: "-50% 0px -50% 0px",
        }}></motion.div>

      {/* ANCHOR */}
      <motion.div
        onViewportEnter={() => {
          setSecondPart(true);
        }}
        viewport={{
          margin: "0px 0px -50px 0px",
        }}>
        <ScrollAnchor
          setIsCurrent={setIsCurrent}
          setCurrentSection={setCurrentSection}
          sectionNumber={0}
          anchorname={"scroll_anchor"}
          basis={true}
        />
      </motion.div>

      {/* SECTION CONTENT */}
      <motion.div
        className=" d-flex  section_one container-md section-main-container position-sticky top-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: isCurrent ? 1 : 0,
          visibility: isCurrent && "visible",
          transitionEnd: { visibility: isCurrent == false && "hidden" },
        }}
        transition={{ duration: 0.3 }}>
        {/* CONTAINER */}
        <div className="section_one_container position-sticky top-0 ">
          {/* PROFILE IMAGE */}
          <div
            className="profile-image container-fluid d-flex justify-content-end align-items-start align-items-md-end justify-content-md-start "
            style={{ height: "100vh" }}>
            <div
              className=" profile-image-main-container d-flex align-items-end "
              style={{ width: "50%" }}>
              <motion.div
                className="profile-image-container"
                initial={false}
                animate={{ width: secondPart ? "100%" : "60%" }}
                transition={{ duration: 0.5 }}>
                <img
                  className="img-fluid"
                  src={selfPhoto}
                  alt=""
                  style={{ opacity: 0.8 }}
                />
              </motion.div>
            </div>
          </div>

          {/* PROFILE TITLES */}
          <div className="container-fluid d-flex align-items-start position-absolute top-0 intro-text">
            <motion.div
              className=" position-relative d-flex align-items-end  justify-content-center justify-content-md-start align-items-md-start profile-names"
              initial={false}
              animate={{
                left: secondPart ? "40%" : "0%",
              }}
              transition={{ duration: 0.5 }}
              style={{
                width: "50%",
              }}>
              <div
                className=" px-3 profile-titles d-flex flex-column justify-content-end"
                style={{ height: "70%" }}>
                <h1>
                  JANSEL <br /> PINGUEL
                </h1>
                <h2>Computer Engineer</h2>
              </div>
            </motion.div>
          </div>

          {/* INTRO DESCRIPTION */}
          <motion.div
            className="intro-description container-fluid d-flex align-items-end justify-content-center justify-content-md-start position-absolute top-0"
            animate={{
              left: secondPart ? "50%" : "0%",
              opacity: secondPart ? 1 : 0,
            }}
            transition={{ duration: 0.5 }}
            style={{
              height: "100%",
              width: "100%",
              zIndex: -1,
            }}>
            <div
              className="description text-center text-md-start"
              style={{
                width: "50%",
                marginBottom: "20px",
              }}>
              A Computer Engineer with a passion for technology. I have
              knowledge in both software development and IT, and I continuously
              strive to learn and build solutions that enhance my skills.
            </div>
          </motion.div>

          {/* ABOUT ME */}
          <motion.div
            className="container-fluid position-absolute top-0 d-flex justify-content-center justify-content-md-end align-items-start align-items-md-start overflow-y-auto  about-me"
            initial={false}
            animate={{
              opacity: secondPart ? 0 : 1,
              y: secondPart ? "150%" : 0,
              zIndex: secondPart ? -2 : 100,
              // transitionEnd: { zIndex: secondPart ? -2 : 100 },
            }}
            transition={{
              delay: 0.5,
              y: { delay: secondPart ? 0 : 0.5, duration: 0.8 },
            }}>
            <div
              className="about-me-content pe-md-4"
              style={{
                width: "49%",
              }}>
              <div className="about-me-space" style={{ height: "50vh" }}></div>
              {/* ABOUT ME */}
              <div className="about-info pb-3 pb-md-5 about-info-border-bottom">
                <h1 className=" mb-5">ABOUT ME</h1>
                <p className=" ms-4 " style={{ lineHeight: 2 }}>
                  I’m Jansel Pinguel, a Computer Engineering graduate passionate
                  about exploring different areas of technology. My background
                  includes software development, IT support, and system-related
                  tasks, giving me a well-rounded foundation in the tech field.
                  I enjoy developing applications, troubleshooting technical
                  issues, and working on projects that push me to learn new
                  tools and technologies. I’m driven by curiosity and a
                  commitment to continuous improvement.
                </p>
              </div>
              {/* EDUCATION */}
              <div className="about-info about-info-border-bottom py-4 py-md-5">
                <h2 className=" mb-4">EDUCATION</h2>
                <p className=" ms-4" style={{ lineHeight: 2 }}>
                  BS Computer Engineering •{" "}
                  <span>
                    <i>Software Engineering</i>
                  </span>
                  <br />
                  <span>De La Salle University – Dasmariñas</span>
                </p>
              </div>
              {/* INTERESTS */}
              <div
                className="about-info about-info-border-bottom py-4 py-md-5"
                style={{ lineHeight: 2 }}>
                <h2 className="mb-4">INTERESTS</h2>
                <p className="ms-4" style={{}}>
                  Web Development <br /> Software Engineering <br />{" "}
                  Troubleshoot <br /> Hardware <br /> Software
                </p>
              </div>
              {/* EXPERIENCE */}
              <div className="about-info  py-4 py-md-5">
                <h2 className=" mb-4">EXPERIENCE</h2>
                <h3 className="mb-3 ms-2">Technical Support Intern</h3>
                <p className=" ms-4" style={{ lineHeight: 2 }}>
                  Provided IT support by troubleshooting servers and devices,
                  resolving common technical issues, and performing system
                  reformatting, OS installation, and BitLocker setup.
                  Collaborated with team members to maintain efficient
                  operations.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* ANCHOR */}
      <motion.div
        onViewportEnter={() => {
          setSecondPart(false);
        }}
        viewport={{
          // margin: "0px 0px -10px 0px",
          margin: "0px 0px -40px 0px",
        }}>
        <ScrollAnchor
          setIsCurrent={setIsCurrent}
          setCurrentSection={setCurrentSection}
          sectionNumber={0}
          anchorname={"scroll_anchor"}
          basis={true}
        />
      </motion.div>

      {/* PAGE TITLE */}
      <div
        id="about"
        style={{
          position: "relative",
          // top: "0%",
          // right: "10%",
          zIndex: -10,
          color: "white",
          opacity: 0.15,
        }}>
        <div style={{ position: "absolute", right: "10%", height: "100vh" }}>
          <h1
            style={{
              writingMode: "sideways-lr",
              fontSize: "1.5rem",
              fontWeight: "bold",
              position: "relative",
              top: "10%",
            }}>
            ABOUT//
          </h1>
        </div>
      </div>

      {/* CONTAINER */}
      <motion.div
        className=""
        style={{
          height: "100vh",
          zIndex: -1,
        }}></motion.div>
    </>
  );
}
