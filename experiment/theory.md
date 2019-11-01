
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
