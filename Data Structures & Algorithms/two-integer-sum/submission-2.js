class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    let array = new Map();
    for(let index = 0; index < nums.length; index++){
        array[nums[index]] = index;
    }

    for(let i = 0; i < nums.length; i++){
        const elem1 = nums[i];
        const elem2 = target - elem1;
        if(array[elem2] && (i != array[elem2])) return [i,array[elem2]];
    }

    return [];
}
}

