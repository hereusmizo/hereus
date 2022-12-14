import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Typography,
  Button,
  Drawer,
  List,
  ListItemText,
  ListItem,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import Footer from "./Footer";
const MENUS = [
  {
    name: "Home",
    route: "/",
  },
  {
    name: "Portfolio",
    route: "/portfolio",
  },
  {
    name: "Contact",
    route: "/contact",
  },
  {
    name: "Our Team",
    route: "/team",
  },
];
const Wrapper = ({ children }) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation().pathname;

  const renderDrawer = () => {
    return (
      <Drawer
        ModalProps={{
          keepMounted: true,
        }}
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        // onOpen={() => setOpenDrawer(true)
        style={{ width: 200 }}
      >
        <div style={{ width: 200 }} />
        <List
          dense
          style={{
            background: "#1473E6",
            flexGrow: 1,
            paddingTop: 20,
            height: "100%",
          }}
        >
          {MENUS.map((item) => (
            <ListItem
              key={item.route}
              style={{
                backgroundColor:
                  item.route === "/"
                    ? location === "/" && "#fff"
                    : location.includes(item.route) && "#fff",
                borderTopLeftRadius: 18,
                borderBottomLeftRadius: 18,
              }}
              button
              onClick={() => {
                setOpenDrawer(false);
              }}
              component={Link}
              to={item.route}
            >
              <ListItemText
                primary={
                  <Typography
                    style={{
                      fontWeight: 600,
                      color:
                        item.route === "/"
                          ? location === "/"
                            ? "#222"
                            : "#fff"
                          : location.includes(item.route)
                          ? "#222"
                          : "#fff",
                    }}
                  >
                    {item.name}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    );
  };

  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        style={{
          paddingTop: 8,
          paddingBottom: 8,
          zIndex: 2,
          backgroundColor: "#fff",
        }}
      >
        <Toolbar variant="dense">
          <IconButton
            edge="start"
            color="primary"
            aria-label="open drawer"
            sx={{
              display: { sm: "none" },
            }}
            onClick={(e) => {
              setOpenDrawer(true);
            }}
          >
            <MenuIcon />
          </IconButton>
          <Container style={{ display: "flex", alignItems: "center" }}>
            <img alt="Hereus" src="/logo512.png" width={45} height={45} />
            <Typography
              style={{
                fontSize: 22,
                color: "#000",
                fontWeight: 600,
                marginLeft: 8,
              }}
            >
              Hereus
            </Typography>
            <div
              style={{
                flexGrow: 1,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              {MENUS.map((item) => {
                return (
                  <Button
                    sx={{
                      display: { xs: "none", md: "block" },
                    }}
                    component={Link}
                    to={item.route}
                    key={item.name}
                    color="warning"
                    style={{
                      textTransform: "none",
                      textDecorationColor: "#000",
                      textDecorationLine: "none",
                      marginLeft: 5,
                    }}
                  >
                    <Typography
                      variant="body1"
                      align={"center"}
                      style={{ fontWeight: 500, fontFamily: "Roboto" }}
                    >
                      {item.name}
                    </Typography>
                  </Button>
                );
              })}
            </div>
          </Container>
        </Toolbar>
      </AppBar>
      {renderDrawer()}
      <div style={{ marginTop: 65, minHeight: 800 }}>{children}</div>
      <Footer />
    </div>
  );
};

export default Wrapper;
