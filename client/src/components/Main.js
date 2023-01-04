import React, { useRef } from 'react'
import { Link } from 'react-router-dom';
import '../styles/Main.css'

const Main = () => {
    const inputRef = useRef(null);

  return (
    <div className='container'>
        <h1 className='title text-light'>Quiz Application</h1>

        <ol>
            <li>Each question has a difficulty defined between 1–10.</li>
            <li>The quiz starts for everyone at difficulty level 5.</li>
            <li>For every correct answer, the next question should be at the current level + 1 difficulty.</li>
            <li>For every incorrect answer, the next question should be at the current level - 1 difficulty -1.</li>
        </ol>

        <form id='form'>
            <input ref={inputRef} className='userid' type='text' placeholder="Username*" />
        </form>

        <div className='start'>
            <Link className='btn' to={'quiz'}>Start Quiz</Link>
        </div>
    </div>
  )
}

export default Main