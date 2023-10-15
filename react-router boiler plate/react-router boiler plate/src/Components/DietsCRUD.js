import {useState, useEffect} from 'react'


export default function DietsCRUD() {
    const DIETS_API_URL = 'https://6525edb367cfb1e59ce7c147.mockapi.io/wk16fp/Diets'

    const [diets, setDiets] = useState([{}]);

    const [newDate, setNewDate] = useState('');
    const [newFood, setNewFood] = useState('');
    const [newConsumed, setNewConsumed] = useState('');

    const [updateDate, setUpdatedDate] = useState('');
    const [updateFood, setUpdatedFood] = useState('');
    const [updateConsumed, setUpdatedConsumed] = useState('');
    
    function getDiets() {
        fetch(DIETS_API_URL)
        .then(data => data.json())
        .then(data => setDiets(data))
    }

    useEffect(() => {
        getDiets()
        console.log(diets)
    }, []);

    function deleteDiets(id) {
        fetch(`${DIETS_API_URL}/${id}`, {
            method: 'DELETE'
        }).then(() => getDiets())
    }

    function postNewDiet(e) {
        e.preventDefault();

        fetch(DIETS_API_URL, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                date: newDate,
                ate: newFood,
                calories: newConsumed,
            })
        }).then(() => getDiets());
    }

    function updateDiets(e, dietObject) {
        e.preventDefault();
            
        let updatedDietObject = {
            ...dietObject,
            date: updateDate,
            ate: updateFood,
            calories: updateConsumed,
        }

        fetch(`${DIETS_API_URL}/${dietObject.id}`, {
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(updatedDietObject)
        }).then(() => getDiets());
    }

    return (
        <div className='diets'>
            <form className='post'>
                <label>Day</label>
                <input onChange={(e) => setNewDate(e.target.value)}></input>

                <label>Ate</label>
                <input onChange={(e) => setNewFood(e.target.value)}></input>
                
                <label>Calories Consumed</label>
                <input onChange={(e) => setNewConsumed(e.target.value)}></input>
                <button onClick={(e) => postNewDiet(e)}>Submit</button>
            
            </form>

            {diets.map((diet, index) => (
                <div className='userContainer' key={index}>
                    <div className='new-post'>
                        <h3>What You Ate:</h3>
                        Date: {diet.date}<br></br>
                        Ate: {diet.ate}<br></br>
                        Calories Consumed: {diet.calories}<br></br>
                        <button onClick={() => deleteDiets(diet.id)}>Delete</button>
                    </div>
                    <form className='update'>
                        <h3>Update Diet</h3>
                        <label>Update Date</label>
                        <input onChange={(e) => setUpdatedDate(e.target.value)}></input><br></br>
                
                        <label>Update Food</label>
                        <input onChange={(e) => setUpdatedFood(e.target.value)}></input><br></br>
                
                        <label>Updated Calories</label>
                        <input onChange={(e) => setUpdatedConsumed(e.target.value)}></input><br></br>
                        <button onClick={(e) => updateDiets(e, diet)}>Update</button>
                    </form>
                </div>
            ))}
        </div>
    )
}