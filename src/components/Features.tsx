import React from 'react';
import { Banana, Goal, GlobeLock } from 'lucide-react';

const features = [
	{
		title: 'Integration Ecosystem',
		description:
			'Enhance your productivity by connecting with your tools, keeping your essentials in one place. ',
		icon: <Banana />,
	},
	{
		title: 'Goal Setting and Tracking',
		description:
			'Define and track your gaol, breaking down objectives into achievable tasks to keep your targets in sight.',
		icon: <Goal />,
	},
	{
		title: 'Secure Data Encryption',
		description:
			'With end-to-end encryption, your data is securely stored and protected from unauthorized access.',
		icon: <GlobeLock />,
	},
];

const Features = () => {
	return (
		<section className='bg-black text-white'>
			<div className='max-w-7xl mx-auto px-4 pt-[72px] text-center'>
				<div className='max-w-xl mx-auto'>
					<h2 className='font-bold text-5xl sm:text-6xl tracking-tighter'>
						Everything you need
					</h2>
					<p className='mt-4 sm:text-xl text-white/70'>
						Enjoy customizable lists, team work tools, and smart tracking all in
						one place. Set tasks, get reminders, and see your progress simply
						and quickly.
					</p>
				</div>
				<div className='flex flex-col sm:flex-row gap-4 mt-8 sm:mt-16'>
					{features.map((feature) => (
						<div
							key={feature.title}
							className='border border-white/30 px-5 py-10 rounded-xl sm:flex-1'
						>
							<div className='inline-flex h-14 w-14 bg-white text-black items-center justify-center rounded-lg'>
								{feature.icon}
							</div>
							<h3 className='mt-4 font-bold'>{feature.title}</h3>
							<p className='mt-2 text-white/70'>{feature.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Features;
