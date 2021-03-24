import React, {lazy, Suspense} from "react";
import {Router} from "@reach/router";
import Header from "./components/common/Header";
import HomePage from "./components/home/HomePage";
import Spinner from "./components/common/Spinner";

const CoursesPage = lazy(() => import("./components/courses/CoursesPage"));
const ManageCoursesPage = lazy(() =>
  import("./components/courses/ManageCoursesPage")
);
const AboutPage = lazy(() => import("./components/about/AboutPage"));
const PageNotFound = lazy(() => import("./components/common/PageNotFound"));

const App = () => {
  return (
    <div className="container">
      <Suspense fallback={<Spinner />}>
        <Header />
        <Router>
          <HomePage path="/" />
          <CoursesPage path="courses" />
          <ManageCoursesPage path="/course/:slug" />
          <AboutPage path="about" />
          <PageNotFound default />
        </Router>
      </Suspense>
    </div>
  );
};

export default App;
