class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
       if(s.length == 1) return true;
    s = s.toLowerCase();
    console.log(s);
    let i = 0; 
    let j = s.length -1;
    while(i<j){
        while (i < j && !/[a-z0-9]/i.test(s[i])) i++;
        while (i < j && !/[a-z0-9]/i.test(s[j])) j--;
        
        if(s[i] != s[j]) {console.log(s[i],s[j]) ; return false;}
        i++;
        j--;
    }
    return true;
    }
}
