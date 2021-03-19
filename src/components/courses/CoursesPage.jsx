import React, {useState} from "react";

const initialCourse = {
  title: "",
};

const CoursesPage = () => {
  const [course, setCourse] = useState(initialCourse);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setCourse((v) => ({...v, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(course);
  };

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
    </div>
  );
};

export default CoursesPage;
