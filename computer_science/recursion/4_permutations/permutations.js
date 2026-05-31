const permutations = function (arr, index = 0, results = []) {
  if (index == arr.length) {
    results.push([...arr]);
    return results;
  }

  for (let i = index; i < arr.length; i++) {
    [arr[index], arr[i]] = [arr[i], arr[index]];
    permutations(arr, index + 1, results);
    [arr[index], arr[i]] = [arr[i], arr[index]];
  }
  return results;
};

// Do not edit below this line
module.exports = permutations;
