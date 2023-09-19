const fs = require('fs');

/**
 * a function that counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */
const countStudents = (dataPath) => new Promise((resolve, reject) => {
  fs.readFile(dataPath, 'utf-8', (err, data) => {
    if (err) {
      reject(new Error("Cannot load the database"));
    } else {
      const lines = data.trim().split('\n');
      const studentGroups = {};

      const dbFieldNames = lines[0].split(',');
      const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

      for (const line of lines.slice(1)) {
        const studentRecord = line.split(',');
	const studentpropValues = studentRecord.slice(0, studentRecord.length - 1);
	const field = studentRecord[studnetRecord.length - 1];
	if (!studentGroups[field]) {
	  studentGroups[fields] =[];
	}

	const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
	studentGroups[field].push(Object.fromEntries(studentEntries));
      }

      const totalStudents = Object.values(studentGroups).reduce((pre, cur) => pre + cur.length, 0);
      console.log(`Number of students: ${totalStudents}`);

      for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
	console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
      }

      resolve(totalStudents);
    }
  });
});

module.exports = countStudents;
