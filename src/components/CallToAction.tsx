import React from 'react';
import { Button } from './ui/button';
import helixImage from '../assets/images/helix2.png';
import emojiStar from '../assets/images/emojistar.png';
import Image from 'next/image';

const CallToAction = () => {
	return (
		<section className='bg-black text-white'>
			<div className='max-w-7xl mx-auto px-6 py-12 sm:py-[72px] text-center'>
				<div className='relative'>
					<Image
						src={helixImage}
						alt=''
						className='hidden lg:block absolute lg:top-6 lg:left-[calc(100%-300px)]'
						height='200'
						width='200'
					/>
					<Image
						src={emojiStar}
						alt=''
						className='hidden lg:block absolute lg:-top-[90px] lg:right-[calc(100%-320px)]'
						height='200'
						width='200'
					/>
				</div>
				<div className='max-w-xl mx-auto'>
					<h2 className='font-bold text-5xl sm:text-6xl tracking-tighter'>
						Get instant access
					</h2>
					<p className='mt-4 sm:text-xl text-white/70'>
						Celebrate the joy accomplishment with an app designed to track your
						progress and motivate your efforts.
					</p>
				</div>
				<form className='mt-10 flex items-center justify-center gap-2.5 flex-col sm:flex-row max-w-md mx-auto'>
					<input
						type='email'
						placeholder='your@email.com'
						className='h-12 bg-white/20 rounded-lg px-5 placeholder:text-[#9CA3AF] sm:flex-1 w-full sm:w-auto'
					/>
					<Button
						variant='secondary'
						size='lg'
						className='w-full sm:w-auto font-semibold'
					>
						Get access
					</Button>
				</form>
			</div>
		</section>
	);
};

export default CallToAction;
