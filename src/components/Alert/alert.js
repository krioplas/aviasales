import * as React from 'react';
import { Alert, Stack } from '@mui/material';

export default function DescriptionAlerts(props) {
  return (
    <Stack>
      <Alert severity='error'>
        This is an error: <strong>{props.data}</strong>
      </Alert>
    </Stack>
  );
}
