import getListStudents from './0-get_list_students.js';

const getListStudentIds = (students) => {
  if (!Array.isArray(students)) {
    return [];
  }

  return students.map(students => students.id);
};

export default getListStudentsIds;
