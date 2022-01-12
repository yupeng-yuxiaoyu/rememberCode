var permute = function (nums) {
  if (nums.length === 1) return [nums];
  var res = [];
  for (var i = 0; i < nums.length; i++) {
    var res1 = permute(nums.slice(0, i).concat(nums.slice(i + 1, nums.length)));
    res1.forEach((item) => {
      res.push([nums[i]].concat(item));
    })
  }
  return res;
};
console.log(permute([1, 2, 3]));