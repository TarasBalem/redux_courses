import React from "react";
import {Link} from "@reach/router";
import useCourses from "../../hooks/useCourses";

import CoursesList from "./CoursesList";

const CoursesPage = () => {
  const {courses} = useCourses();

  return (
    <div className="container mt-5">
      <h1>Courses page</h1>
      <Link to="/course/new" className="btn btn-primary btn-lg my-3">
        Add Course
      </Link>
      <CoursesList courses={courses} />
    </div>
  );
};

export default CoursesPage;
