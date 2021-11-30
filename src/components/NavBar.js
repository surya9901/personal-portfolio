import React from 'react';
import avatar from '../images/avatar.png';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<div className='NavBar'>
			<nav className='nav'>
				{' '}
				<div className='my-image'>
					<img src={avatar} alt='MyImage' />
					<h3 style={{ paddingBottom: 20, color: '#037fff' }}>Ramachandran S</h3>
				</div>
				<ul className='nav-items'>
					<li className='nav-item'>
						<NavLink to='/ramportfolio' exact activeClassName='active'>
							Home
						</NavLink>
					</li>

					<li className='nav-item'>
						<NavLink to='/about' exact activeClassName='active'>
							About
						</NavLink>
					</li>
					<li className='nav-item'>
						<NavLink to='/portfolios' exact activeClassName='active'>
							Portfolios
						</NavLink>
					</li>

					<li className='nav-item'>
						<NavLink to='/work' exact activeClassName='active'>
							Skills
						</NavLink>
					</li>

					<li className='nav-item'>
						<NavLink to='/contact' exact activeClassName='active'>
							Contact
						</NavLink>
					</li>
				</ul>{' '}
				<footer className='footer'>
					<p>@2021 Nov Updated</p>
				</footer>
			</nav>
		</div>
	);
};

export default NavBar;
