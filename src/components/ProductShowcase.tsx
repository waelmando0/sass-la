'use client';
import Image from 'next/image';
import { useRef } from 'react';
import AppScreen from '../assets/images/app-screen.png';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProductShowcase = () => {
	const appImage = useRef<HTMLImageElement>(null);
	const { scrollYProgress } = useScroll({
		target: appImage,
		offset: ['start end', 'end end'],
	});
	const rotateX = useTransform(scrollYProgress, [0, 1], [15, 0]);
	const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

	return (
		<section className='bg-black text-white bg-gradient-to-b from-black to-[#502CA8]'>
			<div className='max-w-7xl mx-auto px-6 py-12 sm:py-[72px] text-center'>
				<div className='flex flex-col items-center justify-center'>
					<div className='max-w-xl mx-auto'>
						<h2 className='font-bold text-5xl sm:text-6xl tracking-tighter'>
							Intuitive interface
						</h2>
						<p className='mt-4 sm:text-xl text-white/70'>
							Celebrate the joy of accomplishment with an app designed to track
							your progress
						</p>
					</div>
					<motion.div
						style={{
							opacity: opacity,
							rotateX: rotateX,
							transformPerspective: '800px',
						}}
					>
						<Image
							src={AppScreen}
							alt='The product screenshot'
							className='mt-14'
							ref={appImage}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default ProductShowcase;
