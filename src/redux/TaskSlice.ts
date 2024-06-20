import { createSlice } from "@reduxjs/toolkit";

export enum priority{
	low = "low",
	meduim = "medium",
	high = "high"
}

interface Task{
	header: String,
	desc: String,
	date: Date,
	length: Number,
	prio: priority
}

class NewTask implements Task{
	header: String;
	desc: String;
	date: Date;
	length: Number;
	prio: priority;
	constructor(header: String, desc: String, date: Date,length: Number, prio: priority){
		this.header = header;
		this.desc = desc;
		this.date = date;
		this.length = length;
		this.prio = prio;
	}
}


const initialValue = {
	tasklist:
	[
		new NewTask("Go To Doctor 2", "just go to the doctor", new Date("2023/2/2"), 3, priority.low),
		new NewTask("Go To Doctor", "just go to the doctor", new Date("2023/2/2"), 2, priority.high),
		new NewTask("Go To Doctor", "just go to the doctor", new Date("2023/1/5"), 5, priority.meduim)
	]
}

export const TaskSlice = createSlice({
	name: 'task',
	initialState: initialValue,
	reducers: {
		Add_Task: (state, action) => {
			const newTask: Task = new NewTask(action.payload.header, action.payload.desc, action.payload.date,
				action.payload.lenght,
				action.payload.prio);
			state.tasklist.push(newTask);
		}
	}
});

export const {Add_Task} = TaskSlice.actions;
export default TaskSlice.reducer;