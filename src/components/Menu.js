import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../utils/animation';

const Menu = ({ menuItems }) => {
	return (
		<motion.div className='portfolios' variants={stagger} initial='hidden' animate='show'>
			{menuItems.map((item) => {
				return (
					<motion.div className='portfolio' key={item.id} variants={fadeInUp}>
						<div className='image-data'>
							<img src={item.image} alt='' />
							<ul className='hover-items'>
								<li>
									<a href={item.deploy} rel='noreferrer' target='_blank'>
										<FontAwesomeIcon icon={faServer} />
									</a>

									<a href={item.repo} rel='noreferrer' target='_blank'>
										<FontAwesomeIcon icon={faGithub} />
									</a>
								</li>
							</ul>
						</div>
						<h5>
							<a href={item.deploy} rel='noreferrer' target='_blank'>
								{' '}
								{item.title}
							</a>
						</h5>
						<p>{item.description}</p>
					</motion.div>
				);
			})}
		</motion.div>
	);
};

export default Menu;
