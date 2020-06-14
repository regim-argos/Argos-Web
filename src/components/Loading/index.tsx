import React from 'react';

import { CircularProgress } from '@material-ui/core';
import { LoadingContainer } from './styles';

export default function Loading({ loading }: { loading: boolean }) {
  return (
    <LoadingContainer open={loading}>
      <CircularProgress color="inherit" />
    </LoadingContainer>
  );
}
