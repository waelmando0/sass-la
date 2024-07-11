import Link from 'next/link';
import { useState } from 'react';
import './mobile-nav.css';
import { cn } from '@/src/lib/utils';

const MobileMenu = () => {
	const [active, setActive] = useState(false);

	return (
		<div className='flex sm:hidden' onClick={(e) => setActive(!active)}>
			<div className='border border-white border-opacity-30 h-10 w-10 rounded-lg cursor-pointer hover:bg-white hover:bg-opacity-10 transition-all flex items-center justify-center'>
				<button
					className={active ? 'l active z-30' : 'l'}
					aria-label='Toggle menu'
				>
					<span className='y'>Menu</span>
					<svg
						className={cn(
							'w-6 h-6 text-white fill-current',
							active ? 'text-black' : 'text-white'
						)}
						viewBox='0 0 24 24'
						xmlns='http://www.w3.org/2000/svg'
					>
						<rect y='4' width='24' height='2'></rect>
						<rect y='11' width='24' height='2'></rect>
						<rect y='18' width='24' height='2'></rect>
					</svg>
				</button>
			</div>
			{active && (
				<nav className='absolute left-0 pt-24 top-0 w-full h-screen pb-16 z-20 bg-[linear-gradient(to_bottom,rgb(252,_214,_255),rgb(41,_216,_255),rgb(255,_253,_128))]'>
					<ul className='grid gap-y-6 px-6'>
						<li>
							<Link
								href='/'
								className='flex py-4 text-black font-semibold text-sm tracking-wide border-b border-gray-500'
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href='/'
								className='flex py-4 text-black font-semibold text-sm tracking-wide border-b border-gray-500'
							>
								Features
							</Link>
						</li>
						<li>
							<Link
								href='/'
								className='flex py-4 text-black font-semibold text-sm tracking-wide border-b border-gray-500'
							>
								Updates
							</Link>
						</li>
						<li>
							<Link
								href='/'
								className='flex py-4 text-black font-semibold text-sm tracking-wide border-b border-gray-500'
							>
								Help
							</Link>
						</li>
						<li>
							<Link
								href='/'
								className='flex py-4 text-black font-semibold text-sm tracking-wide border-b border-gray-500'
							>
								Customers
							</Link>
						</li>
					</ul>
				</nav>
			)}
		</div>
	);
};

export default MobileMenu;
