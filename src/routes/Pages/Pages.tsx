import { Route, Routes } from 'react-router-dom';

import Box from '@mui/material/Box';

import ProtectedRoute from '@/components/ProtectedRoute';

import routes from '..';
import { getPageHeight } from './utils';

function Pages() {
  return (
    <Box sx={{ height: (theme) => getPageHeight(theme) }}>
      <Routes>
        {Object.values(routes).map(({ path, component: Component, needAuthentication }) => {
          return needAuthentication ? (
            <Route
              key={path}
              path={path}
              element={
                <ProtectedRoute>
                  <Component />
                </ProtectedRoute>
              }
            />
          ) : (
            <Route key={path} path={path} element={<Component />} />
          );
        })}
      </Routes>
    </Box>
  );
}

export default Pages;
