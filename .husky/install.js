// Skip Husky install in CI
if (
	process.env.APP_MODE === 'production' ||
	process.env.NODE_ENV === 'production' ||
	process.env.CI === 'true'
) {
	console.log('CI mode, skipping Husky install');
	process.exit(0);
}
const husky = (await import('husky')).default;
console.log(husky());
