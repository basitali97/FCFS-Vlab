## Storyboard (Round 2)

Experiment 1: CPU Scheduling

### 1. Story Outline:

In the "First come first serve" scheduling algorithm, as the name suggests, the process which arrives first, gets executed first, or we
can say that the process which requests the CPU first, gets the CPU allocated first.
### 2. Story:

2.1	Set the Visual Stage Description:
1.	First Come First Serve, is just like FIFO(First in First out) Queue data structure, where the data element which is added to the 
queue first, is the one who leaves the queue first.
2.	This is used in Batch Systems.
3.	It's easy to understand and implement programmatically, using a Queue data structure, where a new process enters through the tail
of the queue, and the scheduler selects process from the head of the queue.
4.	A perfect real life example of FCFS scheduling is buying tickets at ticket counter.

2.2	Set User Objectives & Goals:
1.	Draw the Gantt -chart for given problem.
2.	 According to Gantt chart indexing find out completion time for each process
3.	Turn-around time 
4.	Waiting time 
5.	Response time 



<img src="images/story.png"/>
<br>


2.3 Equations/formulas:
Arrival Time: Time at which the process arrives in the ready queue.

Completion Time: Time at which process completes its execution.
Burst Time: Time required by a process for CPU execution.

Turn Around Time: Time Difference between completion time and arrival time.
Turn Around Time = Completion Time – Arrival Time

Waiting Time (W.T): Time Difference between turn-around time and burst time.
Waiting Time = Turn Around Time – Burst Time
<br>
FLOWCHART:<br>
<img src="images/flowchart.png"/>
MINDMAP:<br>
<img src="images/mindmap.png"/>


### 3. User objective goals
1. To study the CPU Scheduling.
2. To determine the average waiting time.


### 4. Challenges and Questions
<img src="storyboard/fcfsque.png"/>
##### 1.	Find the completion time for the job C ?
<br> <b> a) 8 </b> 
<br> b) 20 
<br> c) 13
<br> ANS:-B

##### 2.	Find the turn around time for the job C ?
<br> <b> a)	11  </b>
<br> b) 7
<br> c) 14
<br> ANS:-A

##### 3.Find the turn around time for the job C ?
<br> a) 5.6
<br> b)	6.2
<br> c) 6.8
<br> ANS:-C


### 6. Formulas and equations used :

Formulas:<br> 

Turn Around Time = Completion Time – Arrival Time
Waiting Time = Turn Around Time – Burst Time
Average Waiting time=(sum of waiting time of all process)/number of process 

### 7.Conclusion:
####  Study of CPU Scheduling has been done. Average waiting time has been calculated.
