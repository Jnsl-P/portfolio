import "../styles/Content.css";

import PageTrack from "../components/PageTrack";
import NavigationBar from "../components/NavigationBar";
import Section1One from "../components/Section1One";
import Section2Two from "../components/Section2Two";
import Section3Three from "../components/Section3Three";
import Section4Four from "../components/Section4Four";

import { useState } from "react";

export default function MainPage() {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <>
      <PageTrack currentSection={currentSection} />
      <div className=" d-flex flex-column flex-md-row">
        <NavigationBar />
        <div className="content">
          <Section1One setCurrentSection={setCurrentSection} />
          <Section2Two setCurrentSection={setCurrentSection} />
          <Section3Three setCurrentSection={setCurrentSection} />
          <Section4Four setCurrentSection={setCurrentSection} />
        </div>
      </div>
    </>
  );
}
