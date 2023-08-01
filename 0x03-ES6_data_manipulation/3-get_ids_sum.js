const getStudentIdsSum = (students) => {
  return students.reduce((obj, x) => obj + x.id, 0);
};

export default getStudentIdsSum;
