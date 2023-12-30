import React from "react";
import { Typography, Box } from "@mui/material";  
import { useTranslation } from "next-i18next"; 
import CommonMethods from "utils/CommonMethods";

const BlogCard = (props) => {
  const { t } = useTranslation(["public"]);
  
  var textColor = "";
  var bgColor = "";

  if (props.idx % 3 === 0) {
    bgColor = "#4A4EFF";
    textColor = "white";
  }
  else if (props.idx % 3 === 1) {
    bgColor = "#34D8BD";
    textColor = "black";
  }
  else if (props.idx % 3 === 2) {
    bgColor = "rgba(255, 255, 255, 0.1)";
    textColor = "white";
  }

  return (
    <Box sx={{ width: "100%", mb: 4, height: 430, borderRadius: 2, background: bgColor }}>
      <Box sx={{ width: "100%", height: 62 }}>
        <Typography component="h5" variant="h5" sx={{ p: 2, color: textColor }}># {props.obj.category !== null && props.obj.category.categoryName}</Typography>
      </Box>
      {
        props.obj.image !== null && props.obj.image !== "" ?
          <Box component="img" src={props.obj.image} sx={{ width: "100%;", height: 220 }} />
          :
          <Box sx={{ width: "100%", height: 220, background: "rgba(255, 255, 255, 0.1)" }}>
          </Box>
      }

      <Typography component="h5" variant="h5" sx={{ p: 2, fontWeight: 600, color: textColor }}> {props.obj.title}</Typography>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
        <Link
          to={`/blog/${CommonMethods.ToSeoUrl(props.obj.title)}/${props.obj.blogPostId}`}
          style={{
            color: textColor,
            textDecoration: 'none', // Remove underlines from the link
            fontWeight: 600,
            background: 'rgba(255, 255, 255, 0.1)',
            padding: '8px 20px', // Adjust padding as needed
            borderRadius: 2,
            display: 'inline-block', // Ensure the link takes the size of its content
          }}
        >
          {t('blogReadButton')}
        </Link>
      </Box>
    </Box>
  );
};

export default BlogCard;
