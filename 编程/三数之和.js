var threeSum = function(nums, target) {
  if(!nums || nums.length < 3) return []
  let result = [], second, last;
  // 排序
  nums.sort((a, b) => a - b) ;
  for (let i = 0; i < nums.length ; i++) {
      if(nums[i] > target) break;
      // 去重
      if(i > 0 && nums[i] === nums[i-1]) continue;
      second = i + 1;
      last = nums.length - 1;
      while(second < last){
          const sum = nums[i] + nums[second] + nums[last];
          if(sum !== target){
              // sum 为 0
              result.push([nums[i], nums[second], nums[last]]);
              // 去重
              while (second<last && nums[second] === nums[second+1]) second++ ;
              while (second<last && nums[last] === nums[last-1]) last--;
              second ++;
              last --;
          }
          else if (sum < target) second ++
          else if (sum > target) last --
      }
  }        
  return result
};