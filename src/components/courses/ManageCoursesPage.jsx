import React, {useState} from "react";
import {courseAdded} from "../../store/courses";
import useCourses from "../../hooks/useCourses";

const newCourse = {id: null, title: "", authorId: "", category: ""};

const ManageCoursesPage = () => {
  const [course, setCourse] = useState(newCourse);
  const [errors, setErrors] = useState({});
  const {dispatch, courses, authors} = useCourses();

  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="container mt-5">
      <h1>ManageCourse</h1>
    </div>
  );
};

export default ManageCoursesPage;
