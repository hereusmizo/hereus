import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";

const Portfolio = () => {
  useEffect(() => {
    document.title = "Portfolio";
  }, []);

  const PORTFOLIOS = [
    {
      name: "Mission Organic Mizoram",
      image: "mom",
      type: "Website & Mobile",
      description:
        "An official website for Mission Organic Mizoram and an application where MOM Members and Service Providers can access and upload their products from mobile application to the Website. So, customers are able to make order of their products from the mobile application or website.",
    },
    {
      name: "Zomedplants",
      image: "zomedplants",
      type: "Website",
      description:
        "An official website for Zomedplants under State Medicinal Plants Board where all their Bulk and Retail Products are uploaded and can be order through the website.",
    },
    {
      name: "Mizoram English Literary Society",
      image: "miels",
      type: "Website",
      description:
        "An official website for Mizoram English Literary Society (MIELS). Authors can submit their registration form online and membership registration application is also available in the website. All the Journal Archive of MIELS are uploaded in their website and downloadable via website.",
    },
    {
      name: "Delta Sound",
      image: "deltasound",
      type: "Website",
      description:
        "An official website of Delta Sound which is the leading sound system rental in the North-East of India and also provides lighting system and video coverage. All thier Equipments are uploaded on their website.",
    },
    {
      name: "Pachhunga University College",
      image: "puc",
      type: "Web Application & Mobile Application",
      description:
        "An Enterprise Resource Planning System where all the staff of the college can access and manage their academic data, contributions, activities, notices, routine, online admission, online fee payments, etc. through this platform. A mobile application for Students and their Parents is also available.",
    },
    {
      name: "Govt. T. Romana College",
      image: "trc",
      type: "Web Application & Mobile Application",
      description:
        "An Enterprise Resource Planning System where all the staff of the college can access and manage their academic data, contributions, activities, notices, routine, online admission, online fee payments, etc. through this platform. A mobile application for Students and their Parents is also available.",
    },
    {
      name: "Govt. Aizawl College",
      image: "gac",
      type: "Web Application & Mobile Application",
      description:
        "An Enterprise Resource Planning System where all the staff of the college can access and manage their academic data, contributions, activities, notices, routine, online admission, online fee payments, etc. through this platform. A mobile application for Students and their Parents is also available.",
    },
    {
      name: "Govt. Johnson College",
      image: "gjc",
      type: "Web Application & Mobile Application",
      description:
        "An Enterprise Resource Planning System where all the staff of the college can access and manage their academic data, contributions, activities, notices, routine, online admission, online fee payments, etc. through this platform. A mobile application for Students and their Parents is also available.",
    },
    {
      name: "Govt. J. Buana College",
      image: "jbc",
      type: "Web Application & Mobile Application",
      description:
        "An Enterprise Resource Planning System where all the staff of the college can access and manage their academic data, contributions, activities, notices, routine, online admission, online fee payments, etc. through this platform. A mobile application for Students and their Parents is also available.",
    },
    {
      name: "Lunglei Govt. College",
      image: "lgc",
      type: "Web Application & Mobile Application",
      description:
        "An Enterprise Resource Planning System where all the staff of the college can access and manage their academic data, contributions, activities, notices, routine, online admission, online fee payments, etc. through this platform. A mobile application for Students and their Parents is also available.",
    },
    {
      name: "PHED Laboratory Management System",
      image: "phed",
      type: "Web Application",
      description:
        "This web application is a Laboratory Management System for PHE Department, Mizoram. It is platform where Laboratories can enter water sample details, generate sample result and report, analyse report, etc. Online Sample Result is also available from this application where customers are able to download their water sample result through online.",
    },
    {
      name: "RDS Five-A-Side Turf",
      image: "rds",
      type: "Web Application & Mobile Application",
      description:
        "An online futsal booking application where customers are able to find the free timeslot of the playground and can easily perform booking for their desired time. Web application is also available for the owner where they can receive booking, offline booking, refund, etc.",
    },
  ];

  return (
    <div style={{ flexGrow: 1, backgroundColor: "#F9F9FA", minHeight: 800 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography
          align="center"
          variant="h4"
          style={{
            fontWeight: "bolder",

            marginRight: 10,

            marginTop: 30,
          }}
        >
          OUR
        </Typography>
        <Typography
          align="center"
          variant="h4"
          style={{
            fontWeight: "bolder",

            marginTop: 30,
            color: "#1473E6",
          }}
        >
          PORTFOLIO
        </Typography>
      </div>
      <Container>
        <Grid
          container
          style={{ marginTop: 20, paddingBottom: 70, background: "#F9F9FA" }}
        >
          {PORTFOLIOS.map((item) => {
            return (
              <Grid
                item
                key={item.name}
                xs={12}
                sm={6}
                md={3}
                lg={3}
                xl={3}
                style={{ padding: 10 }}
              >
                <div
                  style={{
                    height: "100%",
                    // width: "100%",
                    backgroundColor: "#fff",
                    boxShadow: "2px 4px 5px #ddd",
                    padding: 20,
                    borderRadius: 5,
                    margin: 10,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <img
                      alt={item.name}
                      src={`/clients/${item.image}.png`}
                      style={{ width: 80, height: 80 }}
                    />
                  </div>
                  <Typography
                    align="center"
                    fontFamily="Roboto"
                    fontWeight={500}
                    style={{
                      // letterSpacing: 1,
                      color: item.color,
                      marginTop: 10,
                      fontSize: 14,
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    align="center"
                    style={{
                      color: "#888",
                      fontSize: 11,
                      fontStyle: "italic",
                    }}
                  >
                    {item.type}
                  </Typography>
                  <Typography
                    align="center"
                    style={{
                      color: "#888",
                      marginTop: 8,
                      fontSize: 11,
                    }}
                  >
                    {item.description}
                  </Typography>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Portfolio;
