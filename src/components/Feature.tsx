'use client';
import React, { useEffect, useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

const Feature = ({
	title,
	description,
	icon,
}: {
	title: string;
	description: string;
	icon: React.ReactNode;
}) => {
	const offsetX = useMotionValue(-100);
	const offsetY = useMotionValue(-100);
	const maskImage = useMotionTemplate`radial-gradient(100px 100px at ${offsetX}px ${offsetY}px, black, transparent)`;

	const border = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const updateMousePosition = (e: MouseEvent) => {
			if (!border.current) return;

			const borderRect = border.current?.getBoundingClientRect();
			offsetX.set(e.x - borderRect?.x);
			offsetY.set(e.y - borderRect?.y);
		};

		// Add
		window.addEventListener('mousemove', updateMousePosition);

		// Remove
		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
		};
	}, [offsetX, offsetY]);

	return (
		<div className='border border-white/30 px-6 py-10 rounded-xl relative'>
			<motion.div
				className='absolute inset-0 border-2 border-purple-400 rounded-xl'
				style={{
					WebkitMaskImage: maskImage,
					maskImage: maskImage,
				}}
				ref={border}
			></motion.div>
			<div className='inline-flex h-14 w-14 bg-white text-black items-center justify-center rounded-lg'>
				{icon}
			</div>
			<h3 className='mt-4 font-bold'>{title}</h3>
			<p className='mt-2 text-white/70'>{description}</p>
		</div>
	);
};

export default Feature;
