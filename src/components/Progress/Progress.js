import * as React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function Progress() {
  const stop = useSelector((state) => state.apiReducer.stop);
  let progress = null;
  if (!stop) {
    progress = (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    );
    return progress;
  }
}

export default Progress;
