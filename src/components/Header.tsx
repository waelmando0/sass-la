'use client';

import MenuNav from './nav/menu-nav';
import LogoImage from './nav/logo-image';
import Banner from './nav/Banner';
import MobileMenu from './nav/mobile.menu';

const Header = () => {
	return (
		<header className='relative z-40 w-full '>
			<Banner />
			<div className='bg-black '>
				<div className='max-w-7xl mx-auto px-6 py-4'>
					<div className='flex items-center justify-between'>
						{/* Logo */}
						<LogoImage />

						{/* BIGGER SCREENS */}
						<MenuNav />

						{/* Mobile Menu */}
						<MobileMenu />
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
