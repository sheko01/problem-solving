// Last updated: 1/22/2026, 3:52:15 PM
1/**
2 * @param {number[]} prices
3 * @return {number}
4 */
5var maxProfit = function (prices) {
6    //n^2
7    // let max = 0;
8    // for (let i = 0; i < prices.length; i++) {
9    //     for (let y = i+1; y < prices.length; y++) {
10    //         let profit = prices[y] - prices[i];
11    //         // console.log(profit);
12    //         max = Math.max(max, profit);
13
14    //     }
15    // }
16    //     return max;
17    let i = 0;
18    let j = 1
19    let max = 0;
20    while (j < prices.length) {
21        if (prices[i] < prices[j]) {
22            let profit = prices[j] - prices[i];
23            max = Math.max(max, profit);
24        }
25        else {  
26            i=j;
27        }
28        j++;
29    }
30    return max
31};