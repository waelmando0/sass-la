import React from 'react';
import Logo from '../../assets/images/logosaas.png';
import Image from 'next/image';

const LogoImage = () => {
	return (
		<div className='relative'>
			<div className='absolute w-full top-2 bottom-0  bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD98,#C2F0B1,#2FD8FE)] blur-md'></div>
			<Image src={Logo} alt='logo icon' className='relative h-12 w-12' />
		</div>
	);
};

export default LogoImage;
