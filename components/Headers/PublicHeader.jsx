import { useState } from "react";
import { useTranslation } from "next-i18next";
import {
  Box,
  IconButton,
  Typography,
  MenuItem,
  useMediaQuery,
  CircularProgress
} from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import { useRouter } from 'next/router';
import HomeIcon from "../components/icons/HomeIcon";
import SendIcon from "../components/icons/SendIcon";
import DocumentIcon from "../components/icons/DocumentIcon";
import BuyIcon from "../components/icons/BuyIcon";
import GameIcon from "../components/icons/GameIcon";
import { LoadingButton } from "@mui/lab";

const PublicHeader = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const navigate = useRouter();

  const { t } = useTranslation();
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)"); 

  const background = "#171D25";


  if (isNonMobileScreens) {
    return (
      <FlexBetween p="1.5rem" backgroundColor={"transparent"}>

        <Box sx={{ width: 50 }}>
          <Box component="img" alt="Fundprio Logo" onClick={() => {}}   sx={{ cursor: "pointer", width: 30 }} />
        </Box>

        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <FlexBetween gap="2rem" padding="0.1rem 5rem">
            <MenuItem component={Link} to='/' onClick={() => { }}>
              <HomeIcon /> <Typography sx={{ ml: 1.5, fontSize: 14 }}>{t("home")}</Typography>
            </MenuItem>
            <MenuItem component={Link} to='/'  onClick={() => { }}>
              <GameIcon /> <Typography sx={{ ml: 1.5, fontSize: 14 }}>{t("howitworks")}</Typography>
            </MenuItem>
            <MenuItem component={Link} to='/'  onClick={() => { }}>
              <BuyIcon /> <Typography sx={{ ml: 1.5, fontSize: 14 }}>{t("pricing")}</Typography>
            </MenuItem>
            <MenuItem component={Link} to='/'  onClick={() => { }}>
              <DocumentIcon /> <Typography sx={{ ml: 1.5, fontSize: 14 }}>{t("blog")}</Typography>
            </MenuItem>
            <MenuItem component={Link} to='/'  onClick={() => { }}>
              <SendIcon /> <Typography sx={{ ml: 1.5, fontSize: 14 }}>{t("contact")}</Typography>
            </MenuItem>
          </FlexBetween>
        </Box>

        <Box>
          <LoadingButton sx={{ borderRadius: "6px", height: 45, width: 157, textTransform: "initial", px: 3, fontSize: 15, fontWeight: 800, background: "#ffffff", '&:hover': { background: "#ffffff" }, color: "#131927" }}  loadingIndicator={<CircularProgress color="primary" size="1rem" />} id={"launchAppButton"}>{t("launchappbutton")}</LoadingButton>
        </Box>

      </FlexBetween>

    );
  }
  else {
    return (
      <FlexBetween padding="1.5rem" backgroundColor={"transparent"}>
        <FlexBetween>
          <Box component="img" alt="Fundprio Logo" onClick={() => {}}  
            sx={{
              cursor: "pointer",
              width: 30
            }}
          />
        </FlexBetween>
        <FlexBetween>
          <IconButton onClick={() => setIsMobileMenuToggled((prev) => !prev)} sx={{ width: 50, height: 50 }}>
            <Menu sx={{ width: 30, height: 30 }} />
          </IconButton>
        </FlexBetween>


        {!isNonMobileScreens && isMobileMenuToggled && (
          <Box
            position="fixed"
            right="0"
            bottom="0"
            height="100%"
            zIndex="10"
            maxWidth="500px"
            minWidth="300px"
            backgroundColor={background}
          >
            <Box display="flex" justifyContent="flex-end" p="1rem">
              <IconButton onClick={() => setIsMobileMenuToggled((prev) => !prev)}>
                <Close />
              </IconButton>
            </Box>
            <FlexBetween
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              gap="3rem"
            >
              <MenuItem component={Link} to='/' >
                <HomeIcon /> <Typography sx={{ ml: 1.5, fontSize: 14 }}>{t("home")}</Typography>
              </MenuItem>
              <MenuItem component={Link} to='/' >
                <GameIcon /> <Typography sx={{ ml: 1.5, fontSize: 14 }}>{t("howitworks")}</Typography>
              </MenuItem>
              <MenuItem component={Link} to='/' >
                <BuyIcon /> <Typography sx={{ ml: 1.5, fontSize: 14 }}>{t("pricing")}</Typography>
              </MenuItem>
              <MenuItem component={Link} to='/' >
                <DocumentIcon /> <Typography sx={{ ml: 1.5, fontSize: 14 }}>{t("blog")}</Typography>
              </MenuItem>
              <MenuItem component={Link} to='/' >
                <SendIcon /> <Typography sx={{ ml: 1.5, fontSize: 14 }}>{t("contact")}</Typography>
              </MenuItem>

              <LoadingButton sx={{ borderRadius: "6px", height: 45, width: 157, textTransform: "initial", px: 3, fontSize: 15, fontWeight: 800, background: "#ffffff", '&:hover': { background: "#ffffff" }, color: "#131927" }} onClick={()=>{}} loadingIndicator={<CircularProgress color="primary" size="1rem" />}>{t("launchappbutton")}</LoadingButton>
            </FlexBetween>
          </Box>
        )}
      </FlexBetween>
    );
  }

};
export default PublicHeader;
