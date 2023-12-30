import React from 'react';
import { CircularProgress } from '@mui/material';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "transparent",
  p: 0,
  m:0
};

const PublicLoading = () => {
  return (
    <CircularProgress sx={style} />
  )
}

export default PublicLoading