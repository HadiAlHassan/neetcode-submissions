class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
searchBooleanRes(nums, target){
   let start = 0;
    let end = nums.length-1;
    let mid;

    while(start <= end){
        mid = parseInt((start+end)/2);
        if(nums[mid] === target) return true;
        else if (nums[mid] > target) { end = mid-1;}
        else start = mid+1;
    }
    return false;
}
searchMatrix(matrix, target) {
    let numRows = matrix.length;
    let startRow = 0;
    let endRow = numRows-1;
    let middleRow;

    while(startRow <= endRow){
        //get the middle row
        middleRow = parseInt((startRow+endRow)/2);
        //Check if Element should be in Current Row, if yes, run Binary Search on the Row -> return result.
        if(target>= matrix[middleRow][0] && target <= matrix[middleRow][matrix[middleRow].length-1]){return this.searchBooleanRes(matrix[middleRow],target);}
        //Not on this row, check if "should be" in prev rows or Next
        //Target should be in Prev Row
        if(matrix[middleRow][0] > target){endRow = middleRow -1}
        else if(matrix[middleRow][matrix[middleRow].length - 1] < target){startRow = middleRow + 1}
    }
    //Search efforts did not pan out.
    return false;

}

}