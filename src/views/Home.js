import React from "react";
// core components
import HomeHeader from "components/Headers/HomeHeader.js";
// index sections
import SectionPasos from "views/home_sections/SectionPasos";

function Index() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
      <HomeHeader />
      <div className="main">
        <SectionPasos />
      </div>
    </>
  );
}

export default Index;
