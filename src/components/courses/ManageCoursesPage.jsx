import React, {useState, useEffect} from "react";
import {Redirect, useParams} from "@reach/router";
import {courseAdded} from "../../store/courses";
import useCourses from "../../hooks/useCourses";
import CourseForm from "./CourseForm";

const newCourse = {id: null, title: "", authorId: "", category: ""};

const ManageCoursesPage = () => {
  const [course, setCourse] = useState(newCourse);
  const [errors, setErrors] = useState({});
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
    console.log(course);
  };

  return (
    <div className="container mt-5">
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
