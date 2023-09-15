import * as React from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

function Progress() {
  const loading = useSelector((state) => state.apiReducer.loading);
  const error = useSelector((state) => state.apiReducer.error);
  let progress = null;
  if (loading && error === false) {
    progress = (
      <Box sx={{ width: '100%' }}>
        <LinearProgress />
      </Box>
    );
    return progress;
  }
}

export default Progress;
