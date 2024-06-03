import React from 'react'
import TaskList from './components/TaskList/TaskList';

function Home() {
  const items = [
    { id: 1, subheading: 'Subheading', text: 'Cras justo odio', badge: 14 },
    { id: 2, subheading: 'Subheading', text: 'Cras justo odio', badge: 14 },
    { id: 3, subheading: 'Subheading', text: 'Cras justo odio', badge: 14 },
  ];

  return (
    <main className='main-container'>
      <div className='main-title'>
      </div>
      <div className='main-cards'>
        <TaskList/>
      </div>
    </main>
  )
}

export default Home