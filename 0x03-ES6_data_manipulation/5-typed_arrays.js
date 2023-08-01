const createInt8TypedArray = (length, position, value) => {
  const a = new ArrayBuffer(length);
  const v = new DataView(a);

  try {
    v.setInt8(position, value);
  } catch (err) {
    throw Error('Position outside range');
  }
  return v;
}

export default createInt8TypedArray;
