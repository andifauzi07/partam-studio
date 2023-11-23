'use client';

import { motion } from 'framer-motion';
import { navItem } from '../constants';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import Image from 'next/image';

const Navbar = () => (
	<motion.nav
		variants={navVariants}
		initial="hidden"
		whileInView="show"
		className={`${styles.xPaddings} py-4 relative`}>
		<div className="absolute w-[50%] inset-0 gradient-01" />
		<div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}>
			{/* <img
				src="/search.svg"
				alt="search"
				className="w-[24px] h-[24px] object-contain"
			/> */}
			{/* <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">Partam Studio</h2> */}
			<Image
				src="/logo.png"
				alt="icon"
				width={80}
				height={80}
				className="object-contain"
			/>
			<img
				src="/menu.svg"
				alt="menu"
				className="w-[24px] h-[24px] object-contain"
			/>
		</div>
	</motion.nav>
);

export default Navbar;
