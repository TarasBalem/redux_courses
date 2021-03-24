import {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {getCourses} from "../store/courses";
import {getAuthors} from "../store/authors";

export default function useCourses() {
  const dispatch = useDispatch();
  const {courses, pages} = useSelector((state) => state.entities.courses);
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

  const renderCourses = !authors.length
    ? []
    : courses.map((course) => ({
        ...course,
        authorName: authors.find((a) => a.id === course.authorId).name,
      }));

  return {dispatch, courses: renderCourses, pages, authors};
}
