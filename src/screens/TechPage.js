import React from 'react';
import Technologies from '../components/Technology';
import Title from '../components/Title';
import SkillsSection from '../components/SkillsSection';
import { motion } from 'framer-motion';
import { fadeInUp, stagger } from '../utils/animation';

const TechPage = () => {
	return (
		<div className='skills-margin'>
			<div className='b-title'>
				<Title title={'Developer Skills'} span={'Developer Skills'} />
			</div>
			<motion.div className='BlogsPage' variants={stagger} initial='hidden' animate='show'>
				{Technologies.map((blog) => {
					return (
						<motion.div
							className='blog'
							key={blog.id}
							variants={fadeInUp}
							
						>
							<div className='blog-content'>
								<img src={blog.image} alt='' />
								<a href={blog.link} className='blog-link'>
									{blog.title}
								</a>
								{/* 	<p className='blog-time'>
									{' '}
									Experiencing from : {blog.month} {blog.year}
								</p> */}
							</div>
							<div className='skillsContainer-tech'>
								<SkillsSection progress={blog.progress} />
							</div>
						</motion.div>
					);
				})}
			</motion.div>
		</div>
	);
};

export default TechPage;
