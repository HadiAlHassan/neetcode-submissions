class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        index_1 = 0
        index_2 = len(numbers) - 1
        while index_1 <= index_2:
            int_sum = numbers[index_1] + numbers[index_2]
            if (int_sum == target):
                return [index_1 +1, index_2+1]
            elif (int_sum > target):
                index_2 -=1
            else:
                index_1 +=1
        return 




        