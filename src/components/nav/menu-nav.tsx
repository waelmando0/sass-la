import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { cn } from '@/src/lib/utils';
import { Button } from '../ui/button';

interface MenuLink {
	route: string;
	label: string;
	active: React.ReactNode;
}

const MenuNav = () => {
	const pathname = usePathname();

	const links: MenuLink[] = [
		{ route: '/', label: 'About', active: pathname === `/` },
		{ route: '/features', label: 'Features', active: pathname === `/features` },
		{ route: '/updates', label: 'Updates', active: pathname === `/updates` },
		{ route: '/help', label: 'Help', active: pathname === `/help` },
		{
			route: '/customers',
			label: 'Customers',
			active: pathname === `/Customers`,
		},
	];

	return (
		<nav className='hidden sm:flex items-center'>
			<ul className='flex items-center gap-6'>
				{links.map((item) => (
					<li key={item.route}>
						<Link
							href={item.route}
							className={cn(
								'text-white text-opacity-60 hover:text-opacity-100 transition',
								item.active ? 'text-opacity-100' : 'text-opacity-60'
							)}
						>
							<span>{item.label}</span>
						</Link>
					</li>
				))}
				<Button variant='secondary' size='sm' className='font-semibold'>
					Free Trial
				</Button>
			</ul>
		</nav>
	);
};

export default MenuNav;
