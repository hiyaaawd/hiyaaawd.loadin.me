import adapter from '@sveltejs/adapter-static'; // Change this line

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html' // Best for DigitalOcean static sites
		})
	}
};

export default config;
