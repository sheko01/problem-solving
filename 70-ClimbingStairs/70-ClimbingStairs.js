// Last updated: 1/1/2026, 10:32:25 PM
1/**
2 * @param {number} n
3 * @return {number}
4 */
5var climbStairs = function (n) {
6    //     if(n===1){
7    //         return 1;
8    //     }
9    //     if(n===2){
10    //         return 2;
11    //     }
12    // let arr=[1,1];
13    //     for(let i=2;i<=n;i++){
14    //         arr[i]=arr[i-1]+arr[i-2];
15    //     }
16    //     return arr[n];
17
18  return Math.round( (1 / Math.sqrt(5)) * (
19        (((1 + Math.sqrt(5)) / 2) ** (n + 1)) - 
20        (((1 - Math.sqrt(5)) / 2) ** (n + 1))
21    ));
22};