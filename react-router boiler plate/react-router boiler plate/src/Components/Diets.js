import React from 'react';
import DietsForm from './DietsForm';
import background from './images/dietspage.jpg'
import './Diets.css'

export default function Diets() {
	return (
		<div style={{
            backgroundImage: `url(${background})`,
			backgroundSize: 'cover',
			height: '100vh'
        }}>
			<DietsForm />
		</div>
	)
}