import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	cacheComponents: true,
	partialPrefetching: true,
	devIndicators: false,

	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "api.telegram.org",
			},
		],
	},
};

export default nextConfig;