Package.describe({
    name: "advers:animation-hooks",
    summary: "Helpers for animation hooks, including SVG",
    version: "0.2.0"
});

Package.onUse(function (api) {
	api.use('typescript');

	api.use('underscore', 'client');
	api.use('templating', 'client');
	api.use('jquery', 'client');
	api.addFiles('svgClass.js', 'client');
	api.addFiles('animation-hooks.html', 'client');
	api.addFiles('animation-hooks.ts', 'client');
});

Package.onTest(function (api) {
    api.use('tinytest');
    api.use('advers:animation-hooks', 'client');
    api.addFiles('animation-hooks-tests.js', 'client');
});