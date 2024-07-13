import Image from 'next/image';
import React from 'react';
import AppScreen from '../assets/images/app-screen.png';

const ProductShowcase = () => {
	return (
		<section className='bg-black text-white bg-gradient-to-b from-black to-[#502CA8] sm:py-[72px]'>
			<div className='max-w-7xl mx-auto px-4 pt-[72px] text-center'>
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
					<Image
						src={AppScreen}
						alt='The product screenshot'
						className='mt-14'
					/>
				</div>
			</div>
		</section>
	);
};

export default ProductShowcase;
