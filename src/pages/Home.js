import {
  WebOutlined,
  MobileFriendly,
  DesignServices,
  CastForEducation,
} from "@mui/icons-material";
import { Button, Container, Divider, Grid, Typography } from "@mui/material";
import React from "react";
const Banner = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundImage: "url(/masthead.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        backgroundPosition: "center center",
        // backgroundAttachment: "revert-layer",

        // background
        height: 400,
        width: "100%",
        alignItems: "center",
        borderBottom: "1px solid #ddd",
      }}
    >
      <div style={{ padding: 30, flex: 1.5, display: "flex" }}>
        <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Typography
            variant="h4"
            // fontWeight={800}
            style={{ fontWeight: "700", color: "#222" }}
          >
            Software & IT Solutions Firm
          </Typography>
          <Typography variant="h4" style={{ fontWeight: "700", color: "#222" }}>
            Inside Mizoram
          </Typography>
          <Typography style={{ marginTop: 10 }}>
            Hereus is a software development firm settled in Aizawl, Mizoram,
            India.
            <br />
            We offer different software platform such as Website/Webapp, Mobile
            Application, Desktop Application, etc.
            <br /> which are simple and easy to use for anyone.
          </Typography>
        </div>
        {/* <div
          style={{ flex: 1, display: "flex", flexDirection: "column" }}
        ></div> */}
      </div>
    </div>
  );
};
const Home = () => {
  const OUR_SERVICES = [
    {
      name: "Web Development",
      description: "Website, Web Apps & Progressive Web Apps",
      background: "#d1e9fc",
      color: "#061B64",
      icon: (
        <WebOutlined htmlColor="#061B64" style={{ width: 50, height: 50 }} />
      ),
    },
    {
      name: "Mobile Development",
      description: "Android & iOS Apps",
      background: "#D0F2FF",
      color: "#061B64",
      icon: (
        <MobileFriendly htmlColor="#061B64" style={{ width: 50, height: 50 }} />
      ),
    },
    {
      name: "UI/UX Design",
      description: "Creative, Friendly & Simple Interfaces Mock-ups",
      background: "#FFF7CD",
      color: "#7A4F01",
      icon: (
        <DesignServices htmlColor="#7A4F01" style={{ width: 50, height: 50 }} />
      ),
    },
    {
      name: "IT Consulting",
      description: "Consultancy Services related to I.T.",
      background: "#FFE7D9",
      color: "#7A0C2E",
      icon: (
        <CastForEducation
          htmlColor="#7A0C2E"
          style={{ width: 50, height: 50 }}
        />
      ),
    },
  ];
  const OUR_CLIENTS = [
    {
      name: "Mission Organic Mizoram",
      image: "mom",
    },
    {
      name: "Zomedplants",
      image: "zomedplants",
    },
    {
      name: "Mizoram English Literary Society",
      image: "miels",
    },
    {
      name: "Delta Sound",
      image: "deltasound",
    },
    {
      name: "Pachhunga University College",
      image: "puc",
    },
    {
      name: "Govt. T. Romana College",
      image: "trc",
    },
    {
      name: "Govt. Aizawl College",
      image: "gac",
    },
    {
      name: "Govt. Johnson College",
      image: "gjc",
    },
    {
      name: "Govt. J. Buana College",
      image: "jbc",
    },
    {
      name: "Lunglei Govt. College",
      image: "lgc",
    },
    {
      name: "Mizoram PHE Department",
      image: "phed",
    },
    {
      name: "RDS Five-A-Side Turf",
      image: "rds",
    },
  ];

  const renderServices = () => (
    <>
      <div
        style={{
          marginTop: 35,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography variant="h4" style={{ fontWeight: "bolder" }}>
          OUR
        </Typography>
        <Typography
          variant="h4"
          style={{
            fontWeight: "bolder",
            letterSpacing: 0.8,
            marginLeft: 10,
            color: "#1473E6",
          }}
        >
          SERVICES
        </Typography>
      </div>

      <Grid container style={{ marginTop: 20, marginBottom: 50 }}>
        {OUR_SERVICES.map((item) => {
          return (
            <Grid
              item
              key={item.name}
              xs={6}
              sm={6}
              md={3}
              lg={3}
              style={{ padding: 10 }}
            >
              <div
                style={{
                  height: "100%",
                  // width: "100%",
                  backgroundColor: item.background,
                  paddingLeft: 12,
                  paddingRight: 12,
                  paddingTop: 20,
                  paddingBottom: 10,
                  borderRadius: 8,
                  margin: 10,
                  boxShadow: `1px 1px 1px ${item.background}`,
                }}
              >
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {item.icon}
                </div>
                <Typography
                  align="center"
                  fontWeight={600}
                  style={{ letterSpacing: 1, color: item.color, marginTop: 10 }}
                >
                  {item.name}
                </Typography>
                <Typography
                  align="center"
                  // fontWeight={500}
                  style={{
                    letterSpacing: 1,
                    color: item.color,
                    marginTop: 3,
                    fontSize: 12,
                    opacity: 0.8,
                  }}
                >
                  {item.description}
                </Typography>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
  const renderClients = () => (
    <>
      <div
        style={{
          marginTop: 35,
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
            letterSpacing: 0.8,
            marginRight: 10,
            color: "#1473E6",
          }}
        >
          WHO
        </Typography>
        <Typography
          align="center"
          variant="h4"
          style={{ fontWeight: "bolder" }}
        >
          DO WE WORK WITH?
        </Typography>
      </div>

      <Grid
        container
        style={{ marginTop: 20, paddingBottom: 70, background: "#F9F9FA" }}
      >
        {OUR_CLIENTS.map((item) => {
          return (
            <Grid
              item
              key={item.name}
              xs={6}
              sm={6}
              md={3}
              lg={3}
              style={{ padding: 10 }}
            >
              <div
                style={{
                  height: "100%",
                  // width: "100%",
                  backgroundColor: "#fff",
                  boxShadow: "2px 4px 5px #ddd",
                  padding: 20,
                  borderRadius: 8,
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
                  fontWeight={500}
                  style={{
                    letterSpacing: 0.2,
                    color: item.color,
                    marginTop: 10,
                  }}
                >
                  {item.name}
                </Typography>
              </div>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
  return (
    <div style={{ flexGrow: 1, backgroundColor: "#F9F9FA" }}>
      <Container style={{ backgroundColor: "#F9F9FA" }}>
        <Banner />
        <Grid container style={{ background: "#fff" }}>
          <Grid item xs={12} sm={12} md={4} padding={5}>
            <div>
              <Typography
                style={{
                  // fontFamily: "Roboto",
                  fontWeight: 800,
                  marginBottom: 10,
                  color: "#777",
                }}
              >
                Colles ERP System
              </Typography>
              <Typography
                variant="h5"
                style={{
                  fontWeight: 700,
                }}
              >
                The Most Reliable And Complex Enterprise Resource Planning
                System for Educational Institutions
              </Typography>
              <img
                alt="Colles"
                src="/colles.png"
                style={{ width: 100, height: 100, marginTop: 20 }}
              />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={8} padding={5}>
            <div>
              <Typography
                variant="h6"
                style={{
                  textAlign: "justify",
                }}
              >
                Hereus developed{" "}
                <b style={{ color: "#1473E6" }}>`Colles ERP`</b> the most
                complex Enterprise Resource Planning System for any Educational
                Institutions (School, Colleges and Other Institutions).
              </Typography>
              <Typography
                variant="h6"
                style={{
                  textAlign: "justify",
                }}
              >
                <b style={{ color: "#1473E6" }}>`Colles ERP`</b> offers a
                complete and flexible Enterprise Resource Planning System which
                is accessible by Institutions' Staffs, Faculties/Teachers,
                Students and Parents. It offers complete features where the
                Institutions can manage their own Academic Data, Office Data,
                Routines, Attendances, Test Marks, Examinations, Results,
                Research & Academic Contributions, IQAC, RUSA, Extensions &
                Clubs, Cell & Committee Report and so on.
              </Typography>
              <Button
                component="a"
                target="_blank"
                href="https://colles.in/"
                variant="contained"
                size="large"
                color="primary"
                style={{
                  textTransform: "none",
                  fontWeight: 600,
                  borderRadius: 20,
                  marginTop: 30,
                  letterSpacing: 0.8,
                  textDecoration: "none",
                }}
              >
                Learn More
              </Button>
            </div>
          </Grid>
        </Grid>

        {renderServices()}
        <Divider style={{ marginTop: 10 }} variant="middle" />
        {renderClients()}
      </Container>
    </div>
  );
};

export default Home;
