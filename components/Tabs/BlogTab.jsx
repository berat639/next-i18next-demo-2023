import * as React from "react";
import PropTypes from "prop-types";
import { useMediaQuery, Tabs, Tab, Typography, Box, useTheme } from "@mui/material";
import { BlogCardsPanel, BlogLoader } from "components";
import { useTranslation } from "next-i18next";
import blogService from "services/blogService";
 

export default function BlogTab({ contentHeight, buttonSize }) {
    const { t } = useTranslation(); 
  
    return (
        <Box
            sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                mb: 45
            }}
        >
            
           
          
               
       
           
          
        </Box>
    );
}
