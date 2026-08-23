class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        # build occurence Map of first string
        occurence_map = {}
        for character in s:
            if character in occurence_map:
                occurence_map[character] = occurence_map[character] + 1
            else:
                occurence_map[character] = 1

        for character in t:
            if character not in occurence_map:
                return False
            else:
                occurence_map[character] -= 1
        for key, val in occurence_map.items():
            if val != 0:
                return False

        return True
        