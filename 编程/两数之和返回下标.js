var twoSum = function(nums, target) {
  const comp = {};
  for(let i=0; i<nums.length; i++){
      if(comp[target - nums[i] ]>=0){
          return [ comp[target - nums[i] ] , i]
      }
      comp[nums[i]] = i
  }
};