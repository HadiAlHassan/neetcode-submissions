class Solution:
    def isPalindrome(self, s: str) -> bool:
        string = s.lower()
        i = 0
        j = len(string)-1
        while i < j:
            while i < j and not string[i].isalnum():
                print(string[i])
                i+=1
            while j > i and not string[j].isalnum():
                print(string[j])
                j-=1

            if string[i] != string[j]:
                return False
            else: 
                i+=1
                j-=1

        return True
        