import { Card, Container, Grid, Typography } from "@mui/material";
import { Email, LocationOn, Phone } from "@mui/icons-material";
import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us";
  }, []);
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
          CONTACT
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
          US
        </Typography>
      </div>
      <Container
        style={{
          padding: 20,
          marginTop: 20,
        }}
      >
        <Grid container style={{ marginTop: 30 }} spacing={2}>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            style={{
              padding: 12,
            }}
          >
            <Card style={{ padding: 20 }}>
              <img
                alt="Hereus"
                src="/logo512.png"
                style={{ width: 120, height: 120 }}
              />
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                }}
              >
                <Typography
                  variant="h4"
                  style={{
                    color: "#159ed9",
                    fontFamily: "Arial",
                    fontWeight: 600,
                    marginLeft: 15,
                  }}
                >
                  H
                </Typography>
                <Typography
                  variant="h4"
                  style={{
                    fontFamily: "Arial",
                    fontWeight: 600,
                  }}
                >
                  ereus
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#1473E6",
                  marginTop: 20,
                }}
              >
                <LocationOn />
                &nbsp;&nbsp;&nbsp;
                <span style={{ fontSize: 17, fontWeight: 500 }}>Address</span>
              </div>
              <Typography style={{ fontSize: 17 }}>
                South Kanan, Aizawl, Mizoram - 796009
              </Typography>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#1473E6",
                  marginTop: 20,
                }}
              >
                <Phone />
                &nbsp;&nbsp;&nbsp;
                <span style={{ fontSize: 17, fontWeight: 500 }}>Phone No.</span>
              </div>
              <Typography style={{ fontSize: 17 }}>
                +91-9612602728 / +91-8014125849
              </Typography>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  color: "#1473E6",
                  marginTop: 20,
                }}
              >
                <Email />
                &nbsp;&nbsp;&nbsp;
                <span style={{ fontSize: 17, fontWeight: 500 }}>Email</span>
              </div>
              <Typography style={{ fontSize: 17 }}>
                hereusmizo@gmail.com
              </Typography>
            </Card>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            lg={6}
            xl={6}
            style={{
              padding: 12,
            }}
          >
            <Card style={{ height: "100%" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.3936335503563!2d92.70820911538767!3d23.73333848459789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374deb9017cf903b%3A0xe9c4af857065b047!2sHereus!5e0!3m2!1sen!2sin!4v1662638296239!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                // style="border:0;"
                title="Hereus Office"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Contact;
