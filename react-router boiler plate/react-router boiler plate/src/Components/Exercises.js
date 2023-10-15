import React from 'react';
import ExercisesForm from './ExercisesForm';
import background from './images/pngtree-dark-gym-with-equipments-picture-image_2773570.png'
import './Exercises.css'

export default function Exercises() {
	return (
		<div style={{
            backgroundImage: `url(${background})`,
			backgroundSize: 'cover',
			height: '100vh'
        }}>
			<ExercisesForm />
		</div>
	)
}