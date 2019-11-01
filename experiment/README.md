# Aim:
## To find maximum profit gain.

# Theory:

In 0-1 Knapsack, items cannot be broken which means the thief should take the item as a whole or should leave it. This is reason behind calling it as 0-1 Knapsack.

Hence, in case of 0-1 Knapsack, the value of xi can be either 0 or 1, where other constraints remain the same.

0-1 Knapsack cannot be solved by Greedy approach. Greedy approach does not ensure an optimal solution. In many instances, Greedy approach may give an optimal solution.

The following examples will establish our statement.

# Example-1

Let us consider that the capacity of the knapsack is W = 25 and the items are as shown in the following table.

|Item	| A |	B |	C |	D |
|Profit|	24|	18|	18	10|
|Weight	|24|	10|	10|	7|

Without considering the profit per unit weight (pi/wi), if we apply Greedy approach to solve this problem, first item A will be selected as it will contribute maximum profit among all the elements.

After selecting item A, no more item will be selected. Hence, for this given set of items total profit is 24. Whereas, the optimal solution can be achieved by selecting items, B and C, where the total profit is 18 + 18 = 36.

# Example-2

Instead of selecting the items based on the overall benefit, in this example the items are selected based on ratio pi/wi. Let us consider that the capacity of the knapsack is W = 60 and the items are as shown in the following table.

|Item|	A|	B|	C|
|Price|	100|	280|	120|
|Weight|	10|	40|	20|
|Ratio|	10|	7|	6|

Using the Greedy approach, first item A is selected. Then, the next item B is chosen. Hence, the total profit is 100 + 280 = 380. However, the optimal solution of this instance can be achieved by selecting items, B and C, where the total profit is 280 + 120 = 400.

Hence, it can be concluded that Greedy approach may not give an optimal solution.

To solve 0-1 Knapsack, Dynamic Programming approach is required.


# PROCEDURE :
1. Get the number of items ,their weight and profit.
2. Find the ratio of profit and weight.
3. Find out the maximum ratio.
4. Arrange the weight in increasing order corresponding the ratio. 
5. Pick up the weight for maximum size of bag.
6. Calculate the maximum profit gain.


## Pre test<br>
<img src="images/prequiz1.png"><br>
### Bag maximum Weight 30. 

1.	What will be the profit gain in above problem?<br>
a. 194<br>
b. 90<br>
c. 200<br>
d. 197<br>

2.	Which weight will go first in bag? <br>
a. 8<br>
b. 5<br>
c. 1<br>
d. 6<br>

3.	Which of the weights will go into bag?<br>
a. 1,8,5<br>
b. 7,6,5<br>
c. 1,8,7<br>
d. All the Weights<br>

## Post test<br>
<img src="images/postquiz1.png"><br>
### Bag maximum Weight 30.

1. What will be the profit gain in above problem?<br>

 a. 170<br>
 b. 160<br>
 c. 290<br>
 d. none of these<br>
 
2.	Which weight will go first in bag? <br>

 a. 35<br>
 b. 7<br>
 c. 16<br>
 d. 1<br>
 
3.	Which of the weights will go into bag?<br>

 a. 35<br>
 b. 16,12<br>
 c. 1,7,16<br>
 d. all the weights<br>

 
 Reference :
1. https://google.com
2. https://youtube.com
3. https://github.com


