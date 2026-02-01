export default `
cds is just cd, but with shorthands! You can 'pin' certain directories using 'tags', and then quickly jump to them later.

cds "replaces" cd

Usage:
  cds <tag>						       	- Change directory to the one associated with <tag>
	cds -l             					- List all tags and their associated directories
	cds pin <tag> [directory]   - Pin [directory] (default: current working directory) to <tag>
	cds unpin <tag> 						- Remove the tag association
	cds help										- Show this help
	cds lang    								- View all languages available for cds
	cds lang set <language> 		- Set the language for cds messages
`.trim()