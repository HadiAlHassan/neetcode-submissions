class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        occurences = {}
        for num in nums:
            if num not in occurences:
                occurences[num] = 1
            else:
                if occurences[num] >= 1:
                    return True

        return False
        