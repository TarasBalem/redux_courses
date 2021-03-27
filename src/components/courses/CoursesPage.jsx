import React, {useState} from "react";
import {Link} from "@reach/router";
import {useSelector} from "react-redux";
import ReactPaginate from "react-paginate";
import useCourses from "../../hooks/useCourses";
import CoursesList from "./CoursesList";
import Spinner from "../common/Spinner";
import {getCourses} from "../../store/courses";

const CoursesPage = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const {courses, pages, dispatch} = useCourses();
  const {loading} = useSelector((state) => state.apiStatus);

  const onPageChange = (data) => {
    const newPage = data.selected + 1;
    setCurrentPage(data.selected);
    dispatch(getCourses(newPage));
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="container mt-5">
      <h1>Courses page</h1>
      <Link to="/course/new" className="btn btn-primary btn-lg my-3">
        Add Course
      </Link>
      {courses.length ? (
        <>
          <CoursesList courses={courses} />
          <ReactPaginate
            pageCount={pages}
            forcePage={currentPage}
            containerClassName="pagination"
            activeClassName="active"
            onPageChange={onPageChange}
            disableInitialCallback={true}
          />
        </>
      ) : null}
    </div>
  );
};

export default CoursesPage;
