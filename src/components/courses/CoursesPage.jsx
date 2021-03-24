import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {courseAdded, getCourses} from "../../store/courses";
import {getAuthors} from "../../store/authors";
import CoursesList from "./CoursesList";

const initialCourse = {
  title: "",
};

const CoursesPage = () => {
  const [course, setCourse] = useState(initialCourse);

  const dispatch = useDispatch();
  const {courses} = useSelector((state) => state.entities.courses);
  const {authors} = useSelector((state) => state.entities.authors);

  useEffect(() => {
    if (courses.length === 0) {
      dispatch(getCourses());
    }
  }, [courses.length, dispatch]);

  useEffect(() => {
    if (authors.length === 0) {
      dispatch(getAuthors());
    }
  }, [authors.length, dispatch]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setCourse((v) => ({...v, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(courseAdded(course));
    setCourse(initialCourse);
  };

  const renderCourses = !authors.length
    ? []
    : courses.map((course) => ({
        ...course,
        authorName: authors.find((a) => a.id === course.authorId).name,
      }));

  return (
    <div className="container mt-5">
      <h1>Courses page</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4">
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input
                value={course.title}
                onChange={handleChange}
                name="title"
                id="title"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Add Course</button>
            </div>
          </div>
        </div>
      </form>
      <CoursesList courses={renderCourses} />
    </div>
  );
};

export default CoursesPage;
