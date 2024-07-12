import Link from 'next/link';
import React from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';
import cursorImage from '../assets/images/cursor.png';
import messageImage from '../assets/images/message.png';
import Image from 'next/image';

const Hero = () => {
	return (
		<section className='bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#A46EDB_82%)] py-[64px] sm:py-8 relative overflow-clip'>
			<div className='absolute h-[375px] w-[750px] sm:w-[1536px] sm:h-[768px] lg:w-[2400px] lg:h-[500px] rounded-[100%] bg-black left-1/2 -translate-x-1/2 border border-[#B48CDE] bg-[radial-gradient(closest-side,#000_80%,#9560EB)] top-[calc(100%-94px)]'></div>

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
					<h1 className='text-6xl sm:text-8xl font-bold tracking-tighter  mt-8'>
						One Task <br />
						at a time
					</h1>
					<Image
						src={cursorImage}
						alt='Cursor Icon'
						className='absolute left-0 top-[80px] hidden sm:block'
						height='150'
						width='150'
					/>
					<Image
						src={messageImage}
						alt='message Icon'
						className='absolute left-[476px] bottom-[160] hidden sm:block'
						height='150'
						width='150'
					/>
					<p className='text-base sm:text-[18px] mt-8 max-w-sm sm:max-w-md mx-auto leading-6'>
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
