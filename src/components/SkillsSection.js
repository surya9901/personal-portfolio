import React from 'react';
import { motion } from 'framer-motion';

const SkillsSection = ({ skill, progress }) => {
	const variants = {
		initial: {
			width: 0
		},
		animate: {
			width: progress,
			transition: {
				delay: 2,
				duration: 5,
				type: 'tween',
			/* 	dampness: 10,
				stiffness: 100 */
			}
		}
	};

	return (
		<div className='SkillsSection'>
			<div className='skills-container'>
				<h5 className='skill-title'>{skill}</h5>
				<div className='skill-bar'>
					<p className='skill-text'>{progress}</p>
					<div className='skill-progress'>
						<div className='progress'>
							<motion.div
								className='inner-progress'
								style={{ width: progress }}
								variants={variants}
								initial='initial'
								animate='animate'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SkillsSection;
