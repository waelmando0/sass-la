'use client';
import React from 'react';
import acmeLogo from '@/src/assets/images/acme.png';
import quantumLogo from '@/src/assets/images/quantum.png';
import echoLogo from '@/src/assets/images/echo.png';
import celestialLogo from '@/src/assets/images/celestial.png';
import pulseLogo from '@/src/assets/images/pulse.png';
import apexLogo from '@/src/assets/images/apex.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

const images = [
	{ id: 1, src: acmeLogo, alt: 'Acme Logo' },
	{ id: 2, src: quantumLogo, alt: 'Quantum Logo' },
	{ id: 3, src: echoLogo, alt: 'Echo Logo' },
	{ id: 4, src: celestialLogo, alt: 'Celestial Logo' },
	{ id: 5, src: pulseLogo, alt: 'Pulse Logo' },
	{ id: 6, src: apexLogo, alt: 'Apex Logo' },
];

const LogoTigger = () => {
	return (
		<section className='bg-black text-white'>
			<div className='max-w-md md:max-w-7xl mx-auto px-6 py-2 sm:py-8'>
				<h2 className='text-center text-xl sm:text-2xl text-white/70'>
					{`Trusted by the world's most innovative teams `}
				</h2>
				<div className='flex overflow-hidden mt-9 before:content-[`["\"]`] before:z-10 after:content-[`["\"]`] before:absolute after:absolute before:h-full after:h-full before:w-50 after:w-5 relative after:right-0 before:left-0 before:top-0 after:top-0 before:bg-[linear-gradient(to_right,#000,rgb(0,0,0,0))] after:bg-[linear-gradient(to_left,#000,rgb(0,0,0,0))]'>
					<motion.div
						transition={{
							duration: 10,
							ease: 'linear',
							repeat: Infinity,
						}}
						initial={{ translateX: 0 }}
						animate={{ translateX: '-50%' }}
						className='flex gap-16 flex-none pr-16'
					>
						{images.map((image) => (
							<Image
								src={image.src}
								alt={image.alt}
								key={image.id}
								className='flex-none w-auto h-8 '
							/>
						))}
						{images.map((image) => (
							<Image
								src={image.src}
								alt={image.alt}
								key={image.id}
								className='flex-none w-auto h-8'
							/>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default LogoTigger;
