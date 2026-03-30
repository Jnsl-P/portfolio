import "../styles/pageTrack.css";
import { easeInOut, motion } from "motion/react";

export default function PageTrack({ currentSection }) {
  return (
    <>
      {/* PAGE TRACK */}
      <motion.div className=" gap-3 gap-lg-4 pages_container ">
        {[...Array(4)].map((_, index) => (
          <motion.div
            className={`page`}
            key={index}
            layout
            animate={{
              backgroundColor:
                currentSection === index
                  ? "rgb(255, 255, 255)"
                  : "rgba(255, 255, 255, 0.075)",
              padding: currentSection === index ? "2px" : "0px",
            }}
            // This applies to ALL property changes, both entering and leaving the "active" state
            transition={{ duration: 0.5, ease: easeInOut }}></motion.div>
        ))}
      </motion.div>
    </>
  );
}
