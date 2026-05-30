const contains = function (obj, item) {
  const values = Object.values(obj);

  if (values.includes(item)) {
    return true;
  }

  const nestedObjects = values.filter(
    (value) => typeof value === "object" && value !== null
  );

  return nestedObjects.some((nestedObject) => contains(nestedObject, item));
};

// Do not edit below this line
module.exports = contains;
