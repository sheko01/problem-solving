// Last updated: 12/11/2025, 8:09:25 PM
1/**
2 * @param {number[]} nums
3 * @param {number} target
4 * @return {number}
5 */
6var searchInsert = function (nums, target) {
7    let max = nums.length-1 ;
8    let min = 0;
9    let i
10    while (min<=max) {
11       i =Math.floor((max + min) / 2);
12       console.log(i);
13    if (nums[i] === target) {
14        return i;
15                }
16       else if (nums[i] < target) {
17            min = i+1;
18        }
19        else if (nums[i] > target) {
20            max = i-1;
21        }
22    }
23        if(nums[i]>target){
24        return i;
25        
26    }else{
27        return i+1;
28    }
29}