Aim:
To find the average waiting time through first come first serve algorithm.

Theory:

CPU Scheduling:
Scheduling of processes/work is done to finish the work on time
There are many types of scheduling algorithms:
1. First Come First Serve(FCFS)
2. Shortest Job First(SJF)
3. Shortest Remaining Time First(SRTF)
4. Round Robin Scheduling
5. Priority Based scheduling (Non-Pre-emptive)
Non-Preemptive Scheduling:
Under non-preemptive scheduling, once the CPU has been allocated to a process, the process keeps the CPU until it releases the CPU either by terminating or by switching to the waiting state. This scheduling method is used by the Microsoft Windows 3.1 and by the Apple Macintosh operating systems. It is the only method that can be used on certain hardware platforms, because It does not require the special hardware(for example: a timer) needed for preemptive scheduling.
Preemptive Scheduling:
In this type of Scheduling, the tasks are usually assigned with priorities. At times it is necessary to run a certain task that has a higher priority before another task although it is running. Therefore, the running task is interrupted for some time and resumed later when the priority task has finished its execution.
About the Experiment:
Simplest scheduling algorithm that schedules according to arrival times of processes. First come first serve scheduling algorithm states that the process that requests the CPU first is allocated the CPU first. It is implemented by using the FIFO queue. When a process enters the ready queue, its PCB is linked onto the tail of the queue. When the CPU is free, it is allocated to the process at the head of the queue. The running process is then removed from the queue. FCFS is a non-pre-emptive scheduling algorithm.

FCFS is very simple - Just a FIFO queue, like customers waiting in line at the bank or the post office or at a copying machine. Unfortunately, however, FCFS can yield some very long average wait times, particularly if the first process to get there takes a long time. For example, consider the following three processes:
Turn around time=Completion Time – Arrival Time
Waiting Time = Turn Around Time – Burst Time


PROCEDURE :
1. Get the number of process,their arrival time and burst time.
2. Draw the Gantt chart using arrival time and burst time.
3. Calculate the completion time.
4. Calculate the Turn-around time using-----
Turn around time=Completion Time – Arrival Time
5. Calculate the Waiting time using-----
Waiting Time = Turn Around Time – Burst Time
6. Claculate the average waiting time.


Pre-Test :
What is the formula of turnaround time?

1. Turn around time=Waiting Time-Completion Time
2.Turn around time=Completion Time-Arrival Time
3. Turn around time=Waiting Time-Arrival Time

POST TEST :

1. Find the completion time for the job C ?<br>

 1. 8<br>
 2. 20<br>
 3. 13<br>
2. Find the turn around time for the job C ?<br>

 1. 11<br>
 2. 7<br>
 3. 14<br>
3. Find the average waiting time?<br>

 1. 5.8<br>
 2. 6.2<br>
 3. 6.8<br>
 
 Reference :
1. https://google.com
2. https://youtube.com
3. https://github.com


