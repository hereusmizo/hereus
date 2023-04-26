import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const QUICK_LINKS = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Portfolio",
    link: "/portfolio",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Our Team",
    link: "/team",
  },
];
const LEGALS = [
  {
    name: "Terms & Conditions",
    link: "/terms-and-conditions",
  },
  {
    name: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    name: "Refund Policy",
    link: "/refund-policy",
  },
];
const SOCIAL_MEDIA = [
  {
    name: "Facebook",
    image: "/facebook.png",
    link: "https://www.facebook.com/hereusmizo",
  },
  {
    name: "Instagram",
    image: "/instagram.png",
    link: "https://www.instagram.com/hereus.in",
  },
];
const Footer = () => {
  const renderQuickLinks = () => (
    <div style={{ display: "flex", flexDirection: "column", marginTop: 10 }}>
      {QUICK_LINKS.map((item) => (
        <Typography
          key={item.name}
          component={Link}
          to={item.link}
          style={{ color: "#eee", marginBottom: 5, textDecoration: "none" }}
        >
          {item.name}
        </Typography>
      ))}
    </div>
  );
  const renderLegals = () => (
    <div style={{ display: "flex", flexDirection: "column", marginTop: 10 }}>
      {LEGALS.map((item) => (
        <Typography
          key={item.name}
          component={Link}
          to={item.link}
          style={{ color: "#eee", marginBottom: 5, textDecoration: "none" }}
        >
          {item.name}
        </Typography>
      ))}
    </div>
  );
  const renderSocialMedia = () => (
    <div style={{ display: "flex", marginTop: 10 }}>
      {SOCIAL_MEDIA.map((item) => (
        <a
          key={item.name}
          href={item.link}
          target="_blank"
          style={{ marginRight: 12 }}
        >
          <img alt={item.name} src={item.image} width={32} height={32} />
        </a>
      ))}
    </div>
  );
  return (
    <div
      style={{
        flexGrow: 1,
        height: 350,
        backgroundColor: "#1D262D",
        color: "#fff",
      }}
    >
      <Container style={{ paddingTop: 30 }}>
        <Grid container spacing={3}>
          <Grid item xs={6} sm={4}>
            <Typography style={{ fontWeight: "bolder" }}>
              QUICK LINKS
            </Typography>
            {renderQuickLinks()}
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography style={{ fontWeight: "bolder" }}>LEGAL</Typography>
            {renderLegals()}
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography style={{ fontWeight: "bolder" }}>
              SOCIAL MEDIA
            </Typography>
            {renderSocialMedia()}
          </Grid>
        </Grid>
      </Container>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 40 }}>
        <Typography>
          © Hereus. All rights reserved | {new Date().getFullYear()}
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
