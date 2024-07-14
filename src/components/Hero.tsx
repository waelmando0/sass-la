'use client';

import Link from 'next/link';
import React from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';
import cursorImage from '../assets/images/cursor.png';
import messageImage from '../assets/images/message.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Hero = () => {
	return (
		<section className='bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#A46EDB_82%)] py-[72px] relative overflow-clip'>
			<div className='absolute h-[300px] w-[750px] sm:w-[1890px] sm:h-[768px] md:w-[1200px] md:h-[350px] lg:w-[2400px] lg:h-[500px] xl:h-[300px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_80%,#9560EB)] top-[calc(100%-103px)]'></div>
			<div className='container sm:max-w-2xl text-center z-20 relative'>
				<div className='flex items-center justify-center'>
					<Link
						href='/'
						className='inline-flex gap-2 border py-1 px-2 rounded-lg border-white/40'
					>
						<span className='bg-[linear-gradient(to_right,#F87AFF,#FB93D0,#FFDD99,#C3F0B2,#2FD8FE)]  text-transparent bg-clip-text [-webkit-background-clip:text]'>
							Version 2.0 is here
						</span>
						<span className='flex items-center gap-1'>
							<span>Read More</span>
							<ArrowRight className='w-4 h-4' />
						</span>
					</Link>
				</div>
				<div className='relative '>
					<h1 className='text-6xl sm:text-8xl font-bold tracking-tighter mt-8'>
						One Task <br />
						at a time
					</h1>
					<motion.div
						className='absolute -left-3 top-[70px] hidden sm:block'
						drag
						dragSnapToOrigin
					>
						<Image
							src={cursorImage}
							alt='Cursor Icon'
							height='150'
							width='150'
							draggable='false'
						/>
					</motion.div>
					<motion.div
						className='absolute left-[480px] bottom-[180] hidden sm:block'
						drag
						dragSnapToOrigin
					>
						<Image
							src={messageImage}
							alt='message Icon'
							height='150'
							width='150'
							draggable='false'
						/>
					</motion.div>
					<p className='text-base sm:text-xl mt-8 max-w-sm sm:max-w-md mx-auto'>
						Celebrate the joy of accomplishment with an app designed to track
						your gress, motivate your efforts, and celebrate your successes.
					</p>
					<Button variant='secondary' size='lg' className='mt-6 font-bold'>
						Get for free
					</Button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
