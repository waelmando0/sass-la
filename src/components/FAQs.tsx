'use client';

import { Plus, Minus } from 'lucide-react';
import React, { useState, useRef } from 'react';

const items = [
	{
		question: 'What payment methods do you accept?',
		answer:
			'We accept all major credit cards, Paypal, and various other payment methods in your region.',
	},
	{
		question: 'How does the pricing work for teams?',
		answer:
			'Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.',
	},
	{
		question: 'Can I change my plan later?',
		answer:
			'Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.',
	},
	{
		question: 'Is my data secure?',
		answer:
			'Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.',
	},
];

const AccordionItem = ({
	question,
	answer,
}: {
	question: string;
	answer: string;
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const contentRef = useRef<HTMLDivElement>(null);

	return (
		<div className='py-7 border-b border-white/30'>
			<div
				className='flex items-center justify-between cursor-pointer '
				onClick={() => setIsOpen(!isOpen)}
				aria-expanded={isOpen}
			>
				<span className='text-lg font-bold text-left'>{question}</span>
				{isOpen ? <Minus /> : <Plus />}
			</div>
			<div
				ref={contentRef}
				style={{
					maxHeight:
						isOpen && contentRef.current
							? `${contentRef.current.scrollHeight}px`
							: '0px',
				}}
				className='overflow-hidden transition-max-height duration-500 ease-in-out'
			>
				<div className='mt-4 text-left'>{answer}</div>
			</div>
		</div>
	);
};

const FAQs = () => {
	return (
		<section className='bg-black text-white bg-gradient-to-b from-[#502CA8] to-black'>
			<div className='max-w-7xl mx-auto px-6 py-12 sm:py-[72px] text-center'>
				<div className='max-w-3xl mx-auto'>
					<h2 className='font-bold text-5xl sm:text-6xl tracking-tighter'>
						Frequently asked questions
					</h2>
					<div className='mt-8 sm:mt-12'>
						{items.map((item) => (
							<AccordionItem
								question={item.question}
								answer={item.answer}
								key={item.question}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default FAQs;
