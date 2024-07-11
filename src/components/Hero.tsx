import Link from 'next/link';
import React from 'react';
import { Button } from '../components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
	return (
		<section>
			<div className='bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#A46EDB_82%)]'>
				<div className='py-12'>
					<div className='container sm:max-w-3xl text-center'>
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
						<h1 className='text-7xl font-bold tracking-tighter  mt-8'>
							One Task at a time
						</h1>
						<p className='text-xl mt-6'>
							Celebrate the joy of accomplishment with an app designed to track
							your gress, motivate your efforts, and celebrate your successes.
						</p>
						<Button variant='secondary' size='lg' className='mt-4'>
							Get for free
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
