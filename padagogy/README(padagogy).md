# Pedagogy (Round 1)

| Discipline  | INFORMATION TECHNOLOGY |
| ------------- | ------------- |
| Lab.  | Solving Knapsack Problem With Dynamic Programming  |
| Experiment  | 0/1 Knapsack |

# 1.1 FOCUS AREA:

#### To gain the maximum profit using 0/1 knapsack greedy algorithm

# 1.2 About the Experiment:
Given weights and values of n items, put these items in a knapsack of capacity W to get the maximum total value in the knapsack. In other words, given two integer arrays val[0..n-1] and wt[0..n-1] which represent values and weights associated with n items respectively. Also given an integer W which represents knapsack capacity, find out the maximum value subset of val[] such that sum of the weights of this subset is smaller than or equal to W. You cannot break an item, either pick the complete item, or don’t pick it (0-1 property).

## 1.3 Learning Objectives: 
|S.No.|	Learning Objective|	Cognitive Level |	Action Verb|
|-----|-------------------|-----------------|------------|
|1|	Identify the method of knapsack method from manual |	Recall |	Identify |
|2| Describe the process , weight and profit and apply the operation through simulator|	Understand|	Describe|
|3|	Predict the ratio between profit and weight through the value input by the value |	Apply |	Predict|
|4|	Examine weight with increasing order of ratio and size of bag |	Analyse |	examine|
|4|	Conclude the profit with respect to the bag weight after taking weight |	Evaluate |	Conclude|


#### 2. Instructional Strategy:<br>

#### 2.1 Instructional Strategy:<br>
<img src="images/story.jpg"><br>

#### 2.2 Assessment Method:<br>

#### Quiz will be taken for evaluation (Example given below)<br>

## Pre test<br>
<img src="images/prequiz1.jpg"><br>
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

##Post test<br>
<img src="images/postquiz1.jpg"><br>
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


## 2.3 Description of sections:<br>

Let us consider that the capacity of the knapsack is W = 25 and the items are as shown in the following table.

| Item |	A	| B |	C	| D |
|------|---|---|---|---|
|Profit|	24 | 18 |	18	| 10 |
| Weight |	24	| 10	| 10	| 7 |

Without considering the profit per unit weight (pi/wi), if we apply Greedy approach to solve this problem, first item A will be selected as it will contribute maximum profit among all the elements.

After selecting item A, no more item will be selected. Hence, for this given set of items total profit is 24. Whereas, the optimal solution can be achieved by selecting items, B and C, where the total profit is 18 + 18 = 36.


## 3. Task & Assessment Questions<br>
|SrNo.|	Learning Objective to be met |Tasks to be performed by the students|Assessment questions aligned to the task|
|-----|------------------------------|-------------------------------------|-----------------------------------------|
|1|Identify the method of 0/1 knapsack | takes different weight and profit  | Find out the ratio of profit and weight and total profit gain |
|2|Examine increasing order of ration to lift the weight | observe the table   | Analyze the size of bag and weight lifted |


## 4. Simulator Interactions<br>

|What students will do?|What simulator will do?|Purpose of the task|
|----------------------|-----------------------|-------------------|
|Student will enter the weight and profit.|Fetch the data and display the ration between profit and weight.|For understanding 0/1 knapsack algorithm |
|Student will have to observe entire table and size of bag. | Fetch the ratio and according the table it will fill the bag using 0/1 knapsack algorithm | understand the 0/1 knapsack algorithm |
|Student will click the given button and find ratio.|Simulator show the calculated weight lifted .| To get the profit gain |
