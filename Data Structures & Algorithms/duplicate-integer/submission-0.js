class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const map=new Map();
        for(let i=0;i<nums.length;i++){
            map.set(nums[i],(map.get(nums[i])|| 0)+1);
        }
        for(const x of map){
            if(x[1]>1){
                return true
            }
        }
        return false
    }
}
