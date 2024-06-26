Animates elements inside a {{# Animate}} block, by removing and adding the `animate` class.
Forked from appmill:animation-hooks to get rid of old jQuery, and also converted to TypeScript.

Tested for Meteor up to 2.15.

It is repackaged -- with SVG element support -- from Fabian Vogesteller's meteor-animation-hooks repo, located here:
https://github.com/frozeman/meteor-animation-helper



Installation
============

    $ meteor add advers:animation-hooks

Usage
=====

Wrap an element inside a template between {{#Animate}} and {{/Animate}} tags.
If the element has an 'animate' class, it will be animated on creation/destruction, according to your set css transitions and transformations:

	{{#Animate}}
		<circle class="shape animate" ... />
	{{/Animate}}

Your CSS declarations will then look like this:

	// add or remove the animate block, and declare your transition in the base (non "animate") css block:

	circle {
		transition: all 500ms 0ms ease-in;
	}
	circle.animate {
		transform: translate(-300px,-300px);  // position before animation begins.
	}