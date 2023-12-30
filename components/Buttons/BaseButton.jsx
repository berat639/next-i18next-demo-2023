import React from "react";
import { useTheme  } from "@mui/material";
import LoadingButton from '@mui/lab/LoadingButton';

function BaseButton(props) {
  const { palette } = useTheme();
  return (
    <LoadingButton
      fullWidth
      type={props.type}
      loading={props.loading}
      sx={{
        m: "2rem 0",
        p: "0.5rem 1rem",
        backgroundColor: palette.primary.main,
        textTransform:"none",
        color: "#fff",
        fontSize:15,
        fontWeight:600,
        "&:hover":{
            backgroundColor:"#0004D1",
            boxShadow:"0px 1px 2px rgba(16, 24, 40, 0.05)"
        }
      }}
    >
      {props.text}
    </LoadingButton>
  );
}

export default BaseButton;
