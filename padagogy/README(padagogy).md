# Pedagogy (Round 1)

| Discipline  | INFORMATION TECHNOLOGY |
| ------------- | ------------- |
| Lab.  | CPU Scheduling  |
| Experiment  | First Come First Serve  |

# 1.1 FOCUS AREA:

#### CPU Scheduling 

# 1.2 About the Experiment:
CPU scheduling is a process which allows one process to use the CPU while the execution of another process is on hold(in waiting state) due to unavailability of any resource like I/O etc, thereby making full use of CPU. The aim of CPU scheduling is to make the system efficient, fast and fair.

## 1.3 Learning Objectives: 
|S.No.|	Learning Objective|	Cognitive Level |	Action Verb|
|-----|-------------------|-----------------|------------|
|1|	Identify the method of CPU scheduling  from manual |	Recall |	Identify |
|2| Describe the process , arrival time and burst time and apply the operation through simulator|	Understand|	Describe|
|3|	Predict the response time and waiting time through Gantt chart.|	Apply |	Predict|
|4|	Examine average turnaround time and average waiting time|	Analyse |	examine|
|4|	Conclude the completion time , turn-around time and  waiting time|	Evaluate |	Conclude|


#### 2. Instructional Strategy:<br>

#### 2.1 Instructional Strategy:<br>
<img src="images/story.jpg"><br>

#### 2.2 Assessment Method:<br>

#### Quiz will be taken for evaluation (Example given below)<br>

## Pre test<br>

1.	What is the formula of turnaround time?<br>
a.	TAT=WT-CT<br>
b. TAT=CT-AT<br>
c.  TAT=WT-AT<br>
d.  TAT=WT-BT<br>
2.	What is the formula of waiting time?<br>
a.	WT=TAT-CT<br>
b. WT=CT-AT<br>
c.  WT=AT-BT<br>
d.  WT=BT-CT<br>


## 2.3 Description of sections:<br>

In order to find the average Waiting time in first come first serve cpu scheduling process we have to find the completion time of each process and after that we have to find the turn around time and waiting time.<br>

Arrival Time: Time at which the process arrives in the ready queue.<br>

Completion Time: Time at which process completes its execution.<br>
Burst Time: Time required by a process for CPU execution.<br>

Turn Around Time: Time Difference between completion time and arrival time.<br>
Turn Around Time = Completion Time – Arrival Time<br>

Waiting Time (W.T): Time Difference between turn-around time and burst time.<br>
Waiting Time = Turn Around Time – Burst Time<br>

Result:<br>
waiting time of the given process is calculated.


## 3. Task & Assessment Questions<br>
|SrNo.|	Learning Objective to be met |Tasks to be performed by the students|Assessment questions aligned to the task|
|-----|------------------------------|-------------------------------------|-----------------------------------------|
|1|Identify the method of CPU scheduling  from manual| takes different arrival and burst time again | Find out the completion, waiting, turnaround time for each process |
|2|Examine average turnaround time and average waiting time | observe Gantt chart  | Analyze the waiting and response time  |


## 4. Simulator Interactions<br>

|What students will do?|What simulator will do?|Purpose of the task|
|----------------------|-----------------------|-------------------|
|Student will enter the arrival time and burst time.|Fetch the data and display Gantt chart.|For understanding CPU Scheduling |
|Student will have to observe the gantt chat. | Fetch the gantt chart and it will fill the completion time,turn around time and waiting time in table | understand the first Come first serve scheduling. |
|Student will click the given button for average waiting time.|Simulator show the calculated average waiting time.| To get the average waiting time in first come first serve scheduling. |
