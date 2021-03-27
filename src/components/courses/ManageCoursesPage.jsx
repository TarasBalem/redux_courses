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
  const [saving, setSaving] = useState(false);

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
    setErrors((prev) => ({...prev, [name]: ""}));
  };

  const formIsValid = () => {
    const {title, authorId, category} = course;
    const errors = {};
    if (!title) errors.title = "Title cannot be blank";
    if (!authorId) errors.authorId = "Author id cannot be blank";
    if (!category) errors.category = "Category cannot be blank";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formIsValid()) return;
    setSaving(true);
    dispatch(saveCourse(course))
      .then(() => {
        toast.success("course saved");
        setRedirect(true);
      })
      .catch((err) => {
        setErrors({onSave: err.message});
        setSaving(false);
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
          saving={saving}
        />
      </div>
    </div>
  );
};

export default ManageCoursesPage;
