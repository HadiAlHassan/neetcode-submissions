class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let wordCountMap = new Map();
        for (const char of s){
            const hasCount = wordCountMap.get(char);
            if (hasCount){
                wordCountMap.set(char, hasCount+1);
            }
            else{wordCountMap.set(char,1);}
        }
        for(const char of t){
            if(!wordCountMap.get(char)) return false;
            const Count = wordCountMap.get(char);
            wordCountMap.set(char,Count-1);

        }

        for(const [char, count] of wordCountMap){
            if (count !== 0){return false;}
        }
        return true;
    }
}
