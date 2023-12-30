import React from "react";
import { BlogCard } from "components";
import { Grid } from "@mui/material";

function BlogCardsPanel(props) {
  return (
    <Grid container spacing={4} sx={{ my: 3 }}>
      {props.blogs.map(function (object, i) {
        return (
          <Grid item xs={12} sm={6} md={4} key={i}>       
              <BlogCard obj={object} idx={i} />{" "}         
          </Grid>
        );
      })}
    </Grid>
  );
}

export default BlogCardsPanel;
