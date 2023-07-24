export default function iterateThroughObject(reportWithIterator) {
  const allEmployees = [...reportWithIterator];
  return allEmployees.join(' | ');
}
