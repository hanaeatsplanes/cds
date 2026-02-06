export default `
Usage:
  cds <pin>                    - Change directory to the one associated with <pin>
  cds list                     - List all pins and their associated directories
  cds pin <pin> [directory]    - Pin [directory] (default: current working directory) to <pin>
  cds unpin <pin>              - Remove the pin association
  cds -h, --help, help                         - Show this help
`.trim();
