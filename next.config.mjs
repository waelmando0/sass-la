/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		reactCompiler: true,
		after: true,
		ppr: false,
	},
};

export default nextConfig;
