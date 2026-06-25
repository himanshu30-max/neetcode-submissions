class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map=new Map();
        for(let i=0;i<nums.length;i++){
            map.set(nums[i],(map.get(nums[i])|| 0)+1)
        }
        let ans=[];
        for(const x of map){
            if(ans[x[1]]!=undefined){
                ans[x[1]].push(x[0])
            }else{
                 ans[x[1]]=[x[0]] 
            }
        }
        return ans.flat().slice(-k)
    }
}
