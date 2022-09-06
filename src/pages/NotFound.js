import { Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img alt="404 Not Found" src="/404.jpg" style={{ height: 450 }} />
      <Button
        size="large"
        variant="contained"
        color="success"
        component={Link}
        to={`/`}
        style={{
          textDecoration: "none",
          textTransform: "none",
          borderRadius: 20,
          fontWeight: 500,
        }}
      >
        Go to Homepage
      </Button>
    </div>
  );
};

export default NotFound;
