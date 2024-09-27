'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { insights } from '../constants';
import { staggerContainer } from '../utils/motion';
import { InsightCard, TitleText, TypingText } from '../components';
import Link from 'next/link';

const Insights = () => (
	<section
		className={`${styles.paddings} relative z-10`}
		id="Projects">
		<motion.div
			variants={staggerContainer}
			initial="hidden"
			whileInView="show"
			viewport={{ once: false, amount: 0.25 }}
			className={`${styles.innerWidth} mx-auto flex flex-col`}>
			<TypingText
				title="| Projects"
				textStyles="text-center"
			/>
			<TitleText
				title={<>Visit our collaboration with several clients</>}
				textStyles="text-center"
			/>
			<div className="mt-[50px] flex flex-col gap-[30px]">
				{insights.map((item, index) => (
					<InsightCard
						key={`insight-${index}`}
						{...item}
						index={index + 1}
					/>
				))}
			</div>
		</motion.div>
	</section>
);

export default Insights;
