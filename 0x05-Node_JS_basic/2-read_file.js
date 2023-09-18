const fs = require('fs');

/**
 * a function that counts the number of students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */
const countStudents = (data) => {
  try {
    if (!fs.existsSync(data) || !fs.statSync(data).isFile()) {
      throw new Error('Cannot load the database');
    }
    
    const fileLines = fs.readFileSync(data, 'utf-8').trim().split('\n');
    const studentGroup = {};

    const [dbFieldNames, ...dataRows] = fileLines.map((line) => line.split(','));
    const studentPropNames = dbFieldNames.slice(0, -1);

    dataRows.forEach((studentRecord) => {
      const [field, ...studentPropValues] = studentRecord;
      if (!studentGroups[field]) {
        studentGroup[field] = [];
      }
      const student = Object.fromEntries(studentPropNames.map((propName, idx) => [propName, studentPropValue[idx]]));
      studentGroups[field].push(student);
    });

    const totalStudents = Object.values(studentGroups).reduce((pre, cur) => pre + cur.length, 0);
    console.log(`Number of students: ${totalStudents}`);

    for (const [field, group] of Object.entries(studentGroups)) {
      const studentNames = group.map((student) => student.firstname).join(',');
      console.log(`Number of students in ${field}: ${group.length}. List: ${studentnames}`);
    }
  } catch (err) {
    console.error(err.message)
  }
};

module.exports = countStudents;
