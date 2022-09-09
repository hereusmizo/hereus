import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";

const Team = () => {
  useEffect(() => {
    document.title = "Our Team";
  }, []);

  const TEAMS = [
    {
      name: "Lalchhandama",
      photo: "/team/Lalchhandama.jpg",
      designation: "Chief Executive Officer",
    },
    {
      name: "Freddie Lalawmpuia Sailo",
      photo: "/team/Freddie.jpg",
      designation: "Co-Founder",
    },
    {
      name: "Stephen Lalzahawma",
      photo: "/team/Stephen Lalzahawma.jpg",
      designation: "Project Manager",
    },
    {
      name: "Jacob Lalmalsawma",
      photo: "/team/Jacob Lalmalsawma.JPG",
      designation: "Project Manager",
    },
  ];

  return (
    <div style={{ flexGrow: 1, backgroundColor: "#fff", minHeight: 800 }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Typography
          align="center"
          variant="h3"
          style={{
            fontFamily: "Impact",
            letterSpacing: 0.8,
            marginRight: 10,

            marginTop: 30,
          }}
        >
          OUR
        </Typography>
        <Typography
          align="center"
          variant="h3"
          style={{
            fontFamily: "Impact",
            letterSpacing: 0.8,
            marginTop: 30,
            color: "#1473E6",
          }}
        >
          TEAM
        </Typography>
      </div>
      <Container>
        <Grid container spacing={4} style={{ marginTop: 20, marginBottom: 20 }}>
          {TEAMS.map((item) => {
            return (
              <Grid
                key={item.name}
                item
                xs={12}
                sm={6}
                md={3}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  alt="Lalchhandama"
                  src={item.photo}
                  style={{
                    width: 200,
                    objectFit: "contain",
                    borderRadius: 5,
                    boxShadow: "0px 4px 10px #aaa",
                  }}
                />
                <Typography
                  align="center"
                  style={{
                    marginTop: 20,
                    fontWeight: 600,
                    fontSize: 18,
                    color: "#0b2653",
                    letterSpacing: 0.2,
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  align="center"
                  style={{ marginTop: 5, color: "#444" }}
                >
                  {item.designation}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default Team;
