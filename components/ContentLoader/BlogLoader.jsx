import React from "react";
import ContentLoader from "react-content-loader";
import { Grid, useTheme } from "@mui/material";

const LoaderItem = (props) => {
  return (
    <Grid
      container
      sx={{
        height: 400,
        borderRadius: "8px",
        width:"100%",
        py: 1,
        px: 2,
        background: props.palette.background.cardBg,
        my: 2,
        cursor: "pointer",
        ":hover": { backgroundColor: "rgba(255,255,255,0.05)" }
      }}
    >
      <ContentLoader
        speed={2}
        height={400}
        backgroundColor={props.palette.neutral.loaderBackground}
        foregroundColor={props.palette.neutral.inputBg}
        {...props}
      >
        <rect x="0" y="10" rx="2" ry="2" width="100%" height="50" />
        <rect x="0" y="70" rx="2" ry="2" width="100%" height="200" />
        <rect x="0" y="290" rx="2" ry="2" width="50%" height="30" />
      </ContentLoader>
    </Grid>
  );
};

const BlogLoader = (props) => {
  const { palette } = useTheme();
  return (
    <Grid container spacing={4}  sx={{ my: 3 }}>
      <Grid item xs={12} sm={6} md={4} ><LoaderItem palette={palette} /></Grid>
      <Grid item xs={12} sm={6} md={4} ><LoaderItem palette={palette} /></Grid>
      <Grid item xs={12} sm={6} md={4} ><LoaderItem palette={palette} /></Grid>
    </Grid>
  );
};

export default BlogLoader;
