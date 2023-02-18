import React from "react";
import ResourceDashBoard from "../../components/resourceComp/ResourceDashBoard";
import ResourceLandingPage from "../../components/resourceComp/ResourceLandingPage";

function ResourceHomePage() {
  return (
    <main className="flex ">
      <ResourceDashBoard />
      <ResourceLandingPage />
    </main>
  );
}

export default ResourceHomePage;
