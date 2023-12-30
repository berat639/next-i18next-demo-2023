import { useState } from "react";
import Cookies from "js-cookie"; 
import { useTranslation } from 'next-i18next';
import { alpha } from "@mui/material/styles";
import { Box, MenuItem, Stack, IconButton, Popover } from "@mui/material"; 

// ----------------------------------------------------------------------

export default function LanguagePopover() {
  const [open, setOpen] = useState(null); 
  const { i18n } = useTranslation();

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  const handleSelect = (value) => {
    
     
    setOpen(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          padding: 0,
          width: 44,
          height: 44,
          ...(open && {
            bgcolor: (theme) =>
              alpha(
                theme.palette.primary.main,
                theme.palette.action.focusOpacity
              ),
          }),
        }}
      >
        <img src={selectedLanguage.icon} alt={selectedLanguage.label} />
      </IconButton>
      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        PaperProps={{
          sx: {
            p: 1,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            "& .MuiMenuItem-root": {
              px: 1,
              typography: "body2",
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Stack spacing={0.75}>
         
           
         
        </Stack>
      </Popover>
    </>
  );
}
