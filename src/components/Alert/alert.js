import * as React from 'react';
import { Alert, Stack } from '@mui/material';

export default function DescriptionAlerts() {
  return (
    <Stack>
      <Alert severity='error'>
        Ой, что то пошло не так! Мы уже отправили фиксиков для решения проблемы,
        попробуйте перезагрузить страницу!
      </Alert>
    </Stack>
  );
}
