import React, {useState, useEffect} from "react";
import {useSelector} from "react-redux";
import {Redirect, useParams} from "@reach/router";
import {toast} from "react-toastify";
import {saveCourse} from "../../store/courses";
import useCourses from "../../hooks/useCourses";
import CourseForm from "./CourseForm";
import Spinner from "../common/Spinner";

const newCourse = {id: null, title: "", authorId: "", category: ""};

const ManageCoursesPage = () => {
  const [course, setCourse] = useState(newCourse);
  const [errors, setErrors] = useState({});
  const [redirect, setRedirect] = useState(false);

  const {loading} = useSelector((state) => state.apiStatus);
  const {dispatch, courses, authors} = useCourses();

  const {slug} = useParams();

  useEffect(() => {
    const course =
      slug !== "new" && courses.length
        ? courses.find((c) => c.slug === slug)
        : newCourse;
    if (course) {
      setCourse(course);
    } else {
      setCourse(newCourse);
    }
  }, [courses, slug]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setCourse((prev) => ({
      ...prev,
      [name]: name === "authorId" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(saveCourse(course)).then(() => {
      toast.success("course saved");
      setRedirect(true);
    });
  };

  return (
    <div className="container mt-5">
      {loading > 0 && <Spinner />}
      {redirect && <Redirect to="/courses" noThrow />}
      <div className="row">
        <CourseForm
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          course={course}
          authors={authors}
          errors={errors}
          saving={false}
        />
      </div>
    </div>
  );
};

export default ManageCoursesPage;
