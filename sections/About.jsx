'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
	<section
		className={`${styles.paddings} relative z-10`}
		id="About">
		<div className="gradient-02 z-0" />
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
			<TypingText
				title="| About Partam Studio"
				textStyles="text-center"
			/>

			<motion.p
				variants={fadeIn('up', 'tween', 0.2, 1)}
				className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
				<span className="font-extrabold text-white">Partam Studio</span> is a new future for your business in development for more consistent profits which is located in <span className="font-extrabold text-white">UNM Parang Tambung</span>{' '}
				by using leading platforms <span className="font-extrabold text-white">Web Development | UI UX | Graphic Design </span> which easily connects your various clients throughout the world to{' '}
				<span className="font-extrabold text-white">explore</span> ease of doing business using technology
			</motion.p>

			<motion.img
				variants={fadeIn('up', 'tween', 0.3, 1)}
				src="/arrow-down.svg"
				alt="arrow down"
				className="w-[18px] h-[28px] object-contain mt-[28px]"
			/>
		</motion.div>
	</section>
);

export default About;
