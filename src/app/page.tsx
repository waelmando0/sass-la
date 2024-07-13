import FAQs from '../components/FAQs';
import Features from '../components/Features';
import Hero from '../components/Hero';
import LogoTigger from '../components/LogoTigger';
import ProductShowcase from '../components/ProductShowcase';

const page = () => {
	return (
		<>
			<Hero />
			<LogoTigger />
			<Features />
			<ProductShowcase />
			<FAQs />
		</>
	);
};

export default page;
