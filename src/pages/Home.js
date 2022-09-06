import { Typography } from "@mui/material";
import React from "react";
const Banner = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundImage: "url(/banner.jpg)",
        backgroundRepeat: "no-repeat",

        // background
        height: 400,
        width: "100%",
        alignItems: "center",
      }}
    >
      <div style={{ padding: 30, flex: 1, display: "flex" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Typography variant="h3" fontWeight={800}>
            Software & IT Solutions Firm
          </Typography>
          <Typography variant="h3" fontWeight={800}>
            Inside Mizoram
          </Typography>
          <Typography style={{ marginTop: 12 }}>
            Hereus is a software development firm settled in Aizawl, Mizoram,
            India. We offer different software platform such as Website/Webapp,
            Mobile Application, Desktop Application, etc. which is simple and
            easy to use for anyone.
          </Typography>
        </div>
        <div
          style={{ flex: 2, display: "flex", flexDirection: "column" }}
        ></div>
      </div>
    </div>
  );
};
const Home = () => {
  return (
    <div style={{ flexGrow: 1 }}>
      <Banner />
      <div style={{ marginTop: 20 }}>
        <Typography
          variant="h4"
          align="center"
          style={{ fontWeight: "bolder" }}
        >
          What we can do for you
        </Typography>
      </div>
    </div>
  );
};

export default Home;
