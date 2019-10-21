THEORY :
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
