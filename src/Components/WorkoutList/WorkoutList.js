import React from 'react'
import { Link } from 'react-router-dom'
import arrow from './WorkoutList-arrow.svg'
import checkmark from './checkmark.svg'
import './WorkoutList.css'

// const workouts = ['bench', 'squats']
const WorkoutList = ({ workouts, type }) => {
  return (
    <nav className="WorkoutList">
      {workouts.map((workout) => (
        <Link
          className={[
            'WorkoutList-link',
            workout.state === 'WORKOUT_DONE' ? 'workout_isDone' : null,
          ].join(' ')}
          key={workout.name}
          to={`${type}/${workout.name}`}
        >
          <span className="WorkoutList-link-text">{workout.name}</span>

          {workout.state === 'WORKOUT_DONE' ? (
            <div className="WorkoutList-link-icon">
              <img src={checkmark} alt="checkmark" />
            </div>
          ) : (
            <div className="WorkoutList-link-icon">
              <img src={arrow} alt="arrow" />
            </div>
          )}
        </Link>
      ))}
    </nav>
  )
}

export default WorkoutList
