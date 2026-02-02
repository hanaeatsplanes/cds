export default `
Usage:
	cds <pin>[/path]							- Change directory to the one associated with <pin>
  cds list 											- List all pins and their associated directories
  cds pin <tag> [directory]   	- Pin [directory] (default: current working directory) to <tag>
  cds unpin <tag>								- Remove the pin association
  cds                   				- Show this help
`.trim()