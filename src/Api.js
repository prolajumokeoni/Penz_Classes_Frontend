const url = 'http://localhost:3000/api/v1/courses';

const getCourses = async () => {
  const request = await fetch(url);
  const result = await request.json();
  return result;
};

const addCourse = async (course) => {
  const response = await fetch('http://localhost:3000/api/v1/courses', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      instructor_name: course.instructor,
      title: course.title,
      description: course.description,
      image: course.image,
    }),
  });
  return response.json();
};

const fetchReserveCourses = async () => {
  const url = 'http://localhost:3000/api/v1/reservations';
  const response = await fetch(url);
  const result = await response.json();
  return result;
};
const reserveCourse = async (course) => {
  const request = await fetch('http://localhost:3000/api/v1/reservations', {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user_id: course.user,
      course_id: course.courseId,
      start_date: course.date,
    }),
  });

  const result = await request.json();
  let message = '';
  if (request.status === 201) {
    message = result.success;
  } else {
    message = result.error;
  }
  return message;
};

const deleteCourse = async (courseId) => {
  const request = await fetch(`${url}/${courseId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const result = await request.json();
  return result;
};
export {
  getCourses, reserveCourse, fetchReserveCourses, deleteCourse, addCourse,
};
