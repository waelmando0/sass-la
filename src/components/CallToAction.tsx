'use client';
import { useRef } from 'react';
import { Button } from './ui/button';
import helixImage from '../assets/images/helix2.png';
import emojiStar from '../assets/images/emojistar.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const CallToAction = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: containerRef,
		offset: ['start end', 'end end'],
	});

	const translateY = useTransform(scrollYProgress, [0, 1], [40, -40]);

	return (
		<section className='bg-black text-white relative' ref={containerRef}>
			<div className='max-w-7xl mx-auto px-6 py-12 sm:py-[72px] text-center'>
				<div className='max-w-xl mx-auto relative'>
					<motion.div
						style={{
							translateY,
						}}
					>
						<Image
							src={helixImage}
							alt='icon'
							className='hidden lg:block absolute top-24 left-[calc(100%+26px)]'
							height='200'
							width='200'
						/>
					</motion.div>
					<motion.div
						style={{
							translateY,
						}}
					>
						<Image
							src={emojiStar}
							alt='icon'
							className='hidden lg:block absolute -top-[50px] right-[calc(100%+24px)]'
							height='200'
							width='200'
						/>
					</motion.div>
				</div>
				<div className='max-w-xl mx-auto'>
					<h2 className='font-bold text-5xl sm:text-6xl tracking-tighter'>
						Get instant access
					</h2>
					<p className='mt-4 sm:text-xl text-white/70'>
						Celebrate the joy of accomplishment with an app designed to track
						your progress and motivate your efforts.
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
