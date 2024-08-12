import React from 'react';
import { Box } from '@mui/material';

const NonTargetedAdBanner = () => {
  return (
    <Box sx={{ width: '100%', height: '90px', backgroundColor: '#f0f0f0', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '10px 0', border: '1px solid #ddd' }}>
      <p>Advertisement</p>
      {/* Inserire qui il codice pubblicitario non mirato */}
    </Box>
  );
};

export default NonTargetedAdBanner;