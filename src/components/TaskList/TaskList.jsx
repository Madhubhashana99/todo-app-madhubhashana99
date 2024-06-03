import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTasks } from '../../redux/taskSlice';
import { priorityhigh, prioritylow, prioritymedium } from '../../assets';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import './tasklist.css';

function TaskList() {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);
  const taskStatus = useSelector((state) => state.tasks.status);

  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 8;

  useEffect(() => {
    if (taskStatus === 'idle') {
      dispatch(fetchTasks());
    }
  }, [taskStatus, dispatch]);

  const priorityIcons = {
    HIGH: priorityhigh,
    MEDIUM: prioritymedium,
    LOW: prioritylow,
  };

  // Pagination logic
  const indexOfLastTask = currentPage * tasksPerPage;
  const indexOfFirstTask = indexOfLastTask - tasksPerPage;
  const currentTasks = tasks.slice(indexOfFirstTask, indexOfLastTask);

  const totalPages = Math.ceil(tasks.length / tasksPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const taskElements = currentTasks.map((task) => (
    <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
      <div>
        <img src={priorityIcons[task.priority]} alt={`${task.priority} priority Icon`} className="task-icon" /> {task.todo}
      </div>
      <span className={`badge ${task.completed ? 'bg-success' : 'bg-secondary'} ${task.completed ? 'opacity-75' : ''}`}>
        {task.completed ? 'Done' : 'New'}
      </span>
    </li>
  ));

  return (
    <div className="container tasks-list">
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Tasks
        </li>
        {taskElements}
        <li className="list-group-item d-flex justify-content-center align-items-center">
          <nav aria-label="Page navigation example">
            <ul className="pagination mb-0">
              <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                <a className="page-link" href="#!" aria-label="Previous" onClick={() => paginate(currentPage - 1)}>
                <BsChevronLeft aria-hidden="true" />
                </a>
              </li>
              {Array.from({ length: totalPages }, (_, index) => (
                <li key={index + 1} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <a className="page-link" href="#!" onClick={() => paginate(index + 1)}>
                    {index + 1}
                  </a>
                </li>
              ))}
              <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                <a className="page-link" href="#!" aria-label="Next" onClick={() => paginate(currentPage + 1)}>
                <BsChevronRight aria-hidden="true" />
                </a>
              </li>
            </ul>
          </nav>
        </li>
      </ul>
    </div>
  );
}

export default TaskList;
