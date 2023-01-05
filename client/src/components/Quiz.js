import React from 'react'
import Questions from './Questions';

const Quiz = () => {

  // Prev button handler
  function onPrev(){
    console.log("on prev");
  }

  // Next button handler
  function onNext(){
    console.log("on next");
  }

  return (
    <div className='container'>
      <h1 className='title text-light'>Quiz Application</h1>

      {/* display questions */}
      <Questions />

      <div className='grid'>
        <button className='btn prev' onClick={onPrev}>Prev</button>
        <button className='btn next' onClick={onNext}>Next</button>
      </div>
    </div>
  )
}

export default Quiz