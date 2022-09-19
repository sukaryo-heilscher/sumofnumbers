function sumFor(list) {
  let result = 0;
  for (let i = 0; i < list.length; i++) {
    result += list[i];
  }
  return result;
}

function sumWhile(list) {
  let result = 0;
  let i = 0;
  while (i < list.length) {
    result += list[i];
    i++;
  }
  return result;
}

function sumRecurse(list, i, cur) {
  if (i < list.length) {
    return sumRecurse(list, i + 1, cur + list[i]);
  }
  return cur;
}

function sumRecursion(list) {
  return sumRecurse(list, 0, 0);
}

function sumTheSimpleWay(list) {
  return _.reduce(list, (memo, num) => memo + num, 0);
}

const nums = [42, 13, 1, -7];
console.log(sumFor(nums));
console.log(sumWhile(nums));
console.log(sumRecursion(nums));
console.log(sumTheSimpleWay(nums));