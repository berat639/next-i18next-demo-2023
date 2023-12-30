import React, { useEffect, useRef, useState } from "react"; 
import Row from "./Styling/Row"
import  FlexBetween from "./Styling/FlexBetween";
import Link from 'next/link';
import { useTranslation } from "next-i18next";
import {
  Box,
  Divider,
  IconButton,
  Typography,
  MenuItem,
  Grid
} from "@mui/material"; 
import LanguageSelectModal from './Modals/LanguageSelectModal'
import { Facebook, Instagram, Twitter, LinkedIn, Feed } from "@mui/icons-material"; 

const Footer = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <Row sx={{ p: { xs: "0.5rem 1.25rem", sm: "1rem 10%", md: "1rem 10%", lg: "1rem 10%" } }} backgroundColor={"transparent"}>
      <Divider width="100%" />

      <Grid container sx={{ my: 3 }}>

        <Grid item xs={6} sm={6} md={4} lg={4}>
          <Typography sx={{ fontSize: 24, fontWeight: 700, ml: 2, my: 2 }}>
            {t("footerMenuTitle1")}
          </Typography>
          <MenuItem component={Link} href={"/"} onClick={() => { }}>
            {t("footerMenuTitle1Sub1")}
          </MenuItem>
          <MenuItem component={Link} href={"/"} onClick={() => { }}>
            {t("footerMenuTitle1Sub2")}
          </MenuItem>
          <MenuItem component={Link} href={"/"} onClick={() => { }}>
            {t("footerMenuTitle1Sub3")}
          </MenuItem>
          <MenuItem component={Link} href={"/"} onClick={() => { }}>
            {t("footerMenuTitle1Sub4")}
          </MenuItem>
        </Grid>
        <Grid item xs={6} sm={6} md={4} lg={4}>
          <Typography sx={{ fontSize: 24, fontWeight: 700, ml: 2, my: 2 }}>
            {t("footerMenuTitle2")}
          </Typography>
          <MenuItem component={Link} href={"/"} onClick={() => { }}>
            {t("footerMenuTitle2Sub1")}
          </MenuItem>
          {/* <MenuItem component={Link} to={"/Contact"}>
            {t("footerMenuTitle2Sub2")}
          </MenuItem> */}
         <MenuItem component={Link} href={"/"} onClick={() => { }}>
            {t("footerMenuTitle2Sub3")}
          </MenuItem>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Box mt={"2rem"} ml={"1.25rem"}>
            <Box sx={{ display: "flex", justifyContent: { xs: "flex-start", sm: "flex-start", md: "flex-end", lg: "flex-end" }, mt: 3, alignItems: "center" }}>
              <Box component="img" alt="Fundprio Image Text" src={process.env.REACT_APP_CDN_URL + "images/fundprio/fundprioText-dark.png"} />
            </Box>

            <Box xs={10} sx={{ sm: { mt: 5 }, display: "flex", justifyContent: { xs: "flex-start", sm: "flex-start", md: "flex-end", lg: "flex-end" }, alignItems: "center" }}>
              <LanguageSelectModal page={"landing"} />
            </Box>

            <Box sx={{ display: "flex", justifyContent: { xs: "flex-start", sm: "flex-start", md: "flex-end", lg: "flex-end" }, mb: 2, height: { xs: 80, lg: 120 }, alignItems: "flex-end" }}>

              <IconButton id={"socialMediaButton"} onClick={() => {  }}>
                <a
                  href="https://www.facebook.com/FundprioAI/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: "white", height: 21 }}
                >
                  <Facebook /> {/* Assuming you have imported the FacebookIcon */}
                </a>
              </IconButton>

              <IconButton id={"socialMediaButton"} onClick={() => {   }}>
                <a
                  href="https://twitter.com/fundprio"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: "white", height: 21 }}
                >
                  <Twitter /> {/* Assuming you have imported the FacebookIcon */}
                </a>
              </IconButton>

              <IconButton id={"socialMediaButton"} onClick={() => {  }}>
                <a
                  href="https://www.instagram.com/fundprio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: "white", height: 21 }}
                >
                  <Instagram /> {/* Assuming you have imported the FacebookIcon */}
                </a>
              </IconButton>

              <IconButton id={"socialMediaButton"} onClick={() => {   }}>
                <a
                  href="https://www.linkedin.com/showcase/fundprio"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: "white", height: 21 }}
                >
                  <LinkedIn /> {/* Assuming you have imported the FacebookIcon */}
                </a>
              </IconButton>

              <IconButton id={"socialMediaButton"} onClick={() => {   }}>
                <a
                  href="https://medium.com/@fundprio"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ textDecoration: 'none', color: "white", height: 21 }}
                >
                  <Feed /> {/* Assuming you have imported the FacebookIcon */}
                </a>
              </IconButton>
            </Box>

            <Box sx={{ display: "flex", justifyContent: { xs: "flex-start", sm: "flex-start", md: "flex-end", lg: "flex-end" } }}>      
              <Typography sx={{ fontSize: 14, fontWeight: 400, mr:1 }}>
                v{process.env.REACT_APP_VERSION}
              </Typography>
              <Typography sx={{ fontSize: 14, fontWeight: 700 }}>
                &copy; {currentYear} Fundprio. {t("allRightsReserved")}
              </Typography>
            </Box>
          </Box>

        </Grid>
      </Grid>

    </Row >
  );
};

export default Footer;
