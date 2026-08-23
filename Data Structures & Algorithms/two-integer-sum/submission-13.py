class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        difference_map = {}
        for index, value in enumerate(nums):
            diff = target - value
            if diff in difference_map:
                return [difference_map[diff], index]
            difference_map[value] = index
        return
