const getListStudentIds = (list) => {
  if (!Array.isArray(list)) {
    return [];
  }

  return list.map((obj) => obj.id);
};

export default getListStudentsIds;
