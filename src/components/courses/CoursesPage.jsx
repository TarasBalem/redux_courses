import React from "react";
import {Link} from "@reach/router";
import {useSelector} from "react-redux";
import useCourses from "../../hooks/useCourses";
import CoursesList from "./CoursesList";
import Spinner from "../common/Spinner";

const CoursesPage = () => {
  const {courses} = useCourses();
  const {loading} = useSelector((state) => state.apiStatus);

  if (loading) {
    return <Spinner />;
  }

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
