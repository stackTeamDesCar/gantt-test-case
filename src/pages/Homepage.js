import React from "react";
import Grid from "../components/Grid";
import Scheduler from "../components/Scheduler";

function Homepage() {
  return (
    <div>
      <Scheduler />
      <div style={{ height: "50px" }} />
      <Grid />
    </div>
  );
}

export default Homepage;
