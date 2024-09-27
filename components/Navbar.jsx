'use client';

import { motion } from 'framer-motion';
import { navItems } from '../constants';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
	return (
		<motion.nav
			variants={navVariants}
			initial="hidden"
			whileInView="show"
			className={`${styles.xPaddings} py-4 fixed z-40 mx-auto w-full`}>
			<div className="absolute w-[50%] inset-0 gradient-01" />
			<div className={`${styles.innerWidth} mx-auto flex justify-between items-center gap-8`}>
				<Image
					src="/icon.png"
					alt="icon"
					width={80}
					height={80}
					className="object-contain"
				/>
				{/* {navItems.map((item, index) => {
					return (
						<Link
							href={item.href}
							key={index}
							className={`z-10 text-white`}>
							{item.name}
						</Link>
					);
				})} */}
			</div>
		</motion.nav>
	);
};

export default Navbar;
