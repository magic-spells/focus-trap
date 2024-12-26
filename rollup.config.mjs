import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import serve from 'rollup-plugin-serve';
import copy from 'rollup-plugin-copy';
const dev = process.env.ROLLUP_WATCH;
export default [
	// ESM build
	{
		input: 'src/focus-trap.js',
		output: {
			file: 'dist/focus-trap.esm.js',
			format: 'es',
			sourcemap: true,
		},
		plugins: [resolve()],
	},
	// CommonJS build
	{
		input: 'src/focus-trap.js',
		output: {
			file: 'dist/focus-trap.cjs.js',
			format: 'cjs',
			sourcemap: true,
			exports: 'named', // Moved here
		},
		plugins: [resolve()],
	},
	// Minified IIFE for browsers
	{
		input: 'src/focus-trap.js',
		output: {
			file: 'dist/focus-trap.min.js',
			format: 'iife',
			name: 'FocusTrap',
			sourcemap: false,
		},
		plugins: [
			resolve(),
			terser({
				keep_classnames: true,
				format: {
					comments: false,
				},
			}),
		],
	},
	// Development build
	...(dev
		? [
				{
					input: 'src/focus-trap.js',
					output: {
						file: 'dist/focus-trap.esm.js',
						format: 'es',
						sourcemap: true,
					},
					plugins: [
						resolve(),
						serve({
							contentBase: ['dist', 'demo'],
							open: true,
							port: 3000,
						}),
						copy({
							targets: [
								{ src: 'dist/focus-trap.esm.js', dest: 'demo' },
								{ src: 'dist/focus-trap.esm.js.map', dest: 'demo' },
							],
							hook: 'writeBundle',
						}),
					],
				},
			]
		: []),
];
