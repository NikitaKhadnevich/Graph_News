/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignInContainer from 'pages/SignIn/SignInContainer';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import AnonymousRoute from 'components/AnonymousRoute/AnonymousRoute';
import NewsContainer from 'pages/News/NewsContainer';
import Loader from 'components/Loader';
import { PATHS } from 'constants/routes';
import { LOADER } from 'constants/loaderTypes';

const App: React.FC = () => (
  <Suspense fallback={<Loader color="primary" type={LOADER.page} />}>
    <BrowserRouter basename={PATHS.home}>
      <Routes>
        <Route path="/" element={<PrivateRoute />}>
          <Route path={PATHS.news} element={<NewsContainer />} />
        </Route>
        <Route
          path={PATHS.signIn}
          element={
            <AnonymousRoute>
              <SignInContainer />
            </AnonymousRoute>
          }
        />
        <Route
          path="*"
          element={
            <AnonymousRoute>
              <SignInContainer />
            </AnonymousRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  </Suspense>
);

export default App;
