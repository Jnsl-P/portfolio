import { motion } from "motion/react";
import { useContext } from "react";

export default function ScrollAnchor({
  setIsCurrent,
  setCurrentSection,
  sectionNumber,
  anchorname,
  basis,
}) {
  function state(currentState) {
    setIsCurrent(currentState);
    if (currentState == true) {
      setCurrentSection(sectionNumber);
    }
  }

  return (
    <motion.div
      className="scroll_anchor"
      onViewportEnter={() => {
        state(true);
      }}
      onViewportLeave={() => {
        basis ? null : setIsCurrent(false);
      }}
      viewport={{
        margin: "0% 0px -50% 0px",
      }}></motion.div>
  );
}
