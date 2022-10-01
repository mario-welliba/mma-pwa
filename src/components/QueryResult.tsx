import React from 'react';

import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

import { ApolloError } from '@apollo/client';

type QueryResultProps = {
  children?: React.ReactNode;
  loading: boolean;
  error?: ApolloError;
  data: unknown;
};

const QueryResult = ({ loading, error, data, children }: QueryResultProps) => {
  if (loading) {
    return (
      <>
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      </>
    );
  }

  if (error) {
    console.log(error);
    return (
      <>
        <div>An error occurred</div>
      </>
    );
  }

  if (data) {
    return <>{children}</>;
  }

  return (
    <>
      <div>Nothing... </div>
    </>
  );
};

export default QueryResult;
