import { useEffect, useState } from 'react'


export default function ExercisesCRUD() {
    const EXER_API_URL = 'https://6525edb367cfb1e59ce7c147.mockapi.io/wk16fp/Exercises'

    const [exercises, setExercises] = useState([{}]);

    const [newDate, setNewDate] = useState('');
    const [newTrained, setNewTrained] = useState('');
    const [newTime, setNewTime] = useState('');
    const [newBurned, setNewBurned] = useState('');

    const [updateDate, setUpdatedDate] = useState('');
    const [updateTrained, setUpdatedTrained] = useState('');
    const [updateTime, setUpdatedTime] = useState('');
    const [updateBurned, setUpdatedBurned] = useState('');

    function getExercises() {
        fetch(EXER_API_URL)
        .then(data => data.json())
        .then(data => setExercises(data))
    }

    useEffect(() => {
        getExercises()
        console.log(exercises)
    }, []);

    function deleteExercises(id) {
        fetch(`${EXER_API_URL}/${id}`, {
            method: 'DELETE'
        }).then(() => getExercises())
    }

    function postNewExercise(e) {
        e.preventDefault();

        fetch(EXER_API_URL, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                date: newDate,
                trained: newTrained,
                time: newTime,
                calories: newBurned,
            })
        }).then(() => getExercises());
    }

    function updateExercises(e, exerciseObject) {
        e.preventDefault();
            //might have to change user to exercise. stay tuned...
        let updatedExerciseObject = {
            ...exerciseObject,
            date: updateDate,
            trained: updateTrained,
            time: updateTime,
            calories: updateBurned,
        }

        fetch(`${EXER_API_URL}/${exerciseObject.id}`, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedExerciseObject)
        }).then(() => getExercises());
    }

    return (
        <div className='exercises'>
            <form className='post'>
                <label>Date</label>
                <input onChange={(e) => setNewDate(e.target.value)}></input>

                <label>Trained</label>
                <input onChange={(e) => setNewTrained(e.target.value)}></input>
                
                <label>Time</label>
                <input onChange={(e) => setNewTime(e.target.value)}></input>

                <label>Calories Burned</label>
                <input onChange={(e) => setNewBurned(e.target.value)}></input>
                <button onClick={(e) => postNewExercise(e)}>Submit</button>
            </form>

            {exercises.map((exercise, index) => (
                <div className='userContainer' key={index}>
                    <div className='new-post'>
                        <h3>What You Trained:</h3>
                        Date: {exercise.date}<br></br>
                        Trained: {exercise.trained}<br></br>
                        Time: {exercise.time}<br></br>
                        Calories Burned: {exercise.calories}<br></br>
                        <button onClick={() => deleteExercises(exercise.id)}>Delete</button>
                    </div>
                    <form className='update'>
                        <h3>Update Exercise</h3>
                        <label>Update Date</label>
                        <input onChange={(e) => setUpdatedDate(e.target.value)}></input><br></br>

                        <label>Update Trained</label>
                        <input onChange={(e) => setUpdatedTrained(e.target.value)}></input><br></br>

                        <label>Update Time</label>
                        <input onChange={(e) => setUpdatedTime(e.target.value)}></input><br></br>

                        <label>Updated Calories</label>
                        <input onChange={(e) => setUpdatedBurned(e.target.value)}></input><br></br>
                        <button onClick={(e) => updateExercises(e, exercise)}>Update</button>
                    </form>
                </div>
            ))}
        </div>
    )

}