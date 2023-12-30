import { useState } from "react";
import  SettingIcon  from "../Icons/SettingIcon";
import  LocationIcon   from "../Icons/LocationIcon";
import {
  Box,
  Typography,
  useTheme,
  Grid,
  Modal,
  IconButton,
  Button,
  MenuItem,
  Stack
} from "@mui/material";  
import { useTranslation } from "next-i18next";

const LanguageSelectModal = ({ page }) => {
  const { palette } = useTheme();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false); 
  const { i18n, t } = useTranslation();

  const handleSelect = (value) => {
 
  };

  const modalStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "20px",
    bgcolor: "transparent",
    border: "none",
    p: 2,
    width: { lg: 400, md: 400, sm: "100%", xs: "100%" },
  };
  return (
    <>

      {page === "landing" ?
        <IconButton 
        id={"languageButton"}
        sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", mt: 3, background: palette.neutral.inputBg, borderRadius: "5px", px: 2 }}
          onClick={handleOpen}>
          <LocationIcon />
          <Typography sx={{ ml: 1, mr: 5, fontSize: 14 }}>{t("regionlanguage")}</Typography>
        
            <Box
              key={"option.value"}
              component="img"
              alt={"option.label"}
              src={"option.icon"}
              sx={{ width: 28 }}
            /> 
        </IconButton> :
      <IconButton
      id={"languageButton"}
        onClick={handleOpen}
        sx={{
          height: 40,
          width: 44,
          ml: 0.5,
          background: palette.neutral.inputBg,
          borderRadius: "8px",
        }}
      >
        <SettingIcon sx={{ fontSize: "26px" }} />
      </IconButton>
    }



      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="Language Select"
        aria-describedby="Language Select Modal"
        slotProps={{
          backdrop: { style: { backgroundColor: "rgba(0,0,0,0.2)" } },
        }}
      >
        <Box sx={modalStyle}>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                p: 4,
                background: palette.background.modalBg,
                boxShadow: "0px 0px 50px rgba(0, 0, 0, 0.15)",
                backdropFilter: "blur(25px)",
                borderRadius: 5,
              }}
            >
              <Typography variant="h3" component="h3">
                {t("selectLanguage")}
              </Typography>

              <Stack spacing={0.75} sx={{ mt: 3 }}>
                
                  <MenuItem
                    key={`option.value`}
                    selected={true}
                    onClick={() => handleSelect(`option.value`)}
                  >
                    <Box
                      component="img"
                      alt={`option.label`}
                      src={`option.icon`}
                      sx={{ width: 28, mr: 2 }}
                    />
                    {`option.label`}
                  </MenuItem>
              
              </Stack>

              <Box
                sx={{
                  display: "flex",
                  height: 40,
                  justifyContent: "flex-end",
                  mt: 10,
                }}
              >
                <Button
                  sx={{
                    color: "white",
                    borderRadius: 2,
                    height: 42,
                    textTransform: "initial",
                    px: 5,
                    fontSize: 14,
                    fontWeight: 600,
                    background: palette.primary.dark,
                    "&:hover": { background: palette.primary.dark },
                  }}
                  onClick={handleClose}
                >
                   {t("languageModalclose")}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default LanguageSelectModal;
