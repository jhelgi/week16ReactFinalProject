import React from 'react';
import background from './images/homepage.jpg'
import './Home.css'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default function Home() {
	return (
		<div style={{
            backgroundImage: `url(${background})`,
			backgroundSize: 'cover',
			height: '100vh'
        }}>
			<div>
				<h1>Welcome</h1>
				<p>
					Having trouble tracking your work-outs, or remembering what you ate during the day?
					 Let us help you with that! Start tracking your diets and exercises today! 
					 Just click one of the links above to get started!
				</p>
					
			</div>
		</div>
	)
	
}
