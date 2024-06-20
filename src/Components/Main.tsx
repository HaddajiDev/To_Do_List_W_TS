import React from 'react'
import { useSelector } from 'react-redux';
import { Add_Task, priority } from '../redux/TaskSlice';
import { useDispatch } from 'react-redux';

function Main() {

	const tasks: any = useSelector((state: any) => state.task.tasklist);
	
	const task = {
		header: "String",
		desc: "String",
		date: "Date",
		length: 2,
		prio: priority.high
	}

	const dispatch = useDispatch();
  return (
	<>
	<div className="container page-todo bootstrap snippets bootdeys">
<div className="col-sm-7 tasks">
	<div className="task-list">
		<h1>Tasks</h1>

{/* high */}
		<div className="priority high last"><span>high priority</span></div>	
		{tasks.map((el: any) => {
        if (el.prio === 'high') {
          return (
            <div className="task high">
              <div className="desc">
                <div className="title">{el.header}</div>
                <div>{el.desc}</div>
              </div>
              <div className="time">
                <div className="date">{el.date.toString().split(":")[0].replace("00", "")}</div> {/* Format the date */}
                <div>{el.length} day</div>
              </div>
            </div>
          );
        }
        return null;
      })}		
		
{/* Meduim */}
		<div className="priority medium"><span>medium priority</span></div>

		{tasks.map((el: any) => {
        if (el.prio === 'medium') {
          return (
            <div className="task medium">
              <div className="desc">
                <div className="title">{el.header}</div>
                <div>{el.desc}</div>
              </div>
              <div className="time">
                <div className="date">{el.date.toString().split(":")[0].replace("00", "")}</div> {/* Format the date */}
                <div>{el.length} day</div>
              </div>
            </div>
          );
        }
        return null;
      })}

		<div className="priority low"><span>low priority</span></div>
{/* LOW */}
		
		{tasks.map((el: any) => {
        if (el.prio === 'low') {
          return (
            <div className="task low">
              <div className="desc">
                <div className="title">{el.header}</div>
                <div>{el.desc}</div>
              </div>
              <div className="time">
                <div className="date">{el.date.toString().split(":")[0].replace("00", "")}</div> {/* Format the date */}
                <div>{el.length} day</div>
              </div>
            </div>
          );
        }
        return null;
      })}
		<div className="clearfix"></div>		
	</div>		
	</div>
	</div>
	  <button onClick={() => dispatch(Add_Task(task))}>
		Add Task
	  </button>
	</>
  );
}

export default Main;