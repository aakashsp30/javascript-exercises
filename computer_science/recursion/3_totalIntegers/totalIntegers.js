const isObject = (value) => typeof value === "object" && value !== null;

const totalIntegers = function (obj) {
  let count = 0;

  if (!isObject(obj)) {
    return;
  }

  const values = Object.values(obj);

  for (const i of values) {
    if (Number.isInteger(i)) {
      count++;
    } else if (isObject(i)) {
      count += totalIntegers(i);
    }
  }

  return count;
};

// Do not edit below this line
module.exports = totalIntegers;
