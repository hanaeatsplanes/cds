# AGENTS.md - CDS CLI

## Build & Commands
- **Build**: `bun build . --compile --outfile bin/cds-cli`
- **Lint**: `bun lint` (check + format) or `bun lint:fix` (fix issues)
- **Check**: `bun check` (biome checks) / `bun check:fix`
- **Format**: `bun format` or `bun format:fix`
- **CI**: `biome check . --error-on-warnings`

## Architecture
Simple CLI tool for directory shortcuts. Entry point: `src/main.ts`
- **main.ts**: CLI arg routing (help, shell-func, resolve, defaults to resolve)
- **resolve.ts**: Path resolution (~, relative→absolute, symlink resolution)
- **help.ts**: Help text
- **shellFunc.ts**: Bash function for `cds` shell alias

Output protocol: stdout prefixed with "P" (path) or "E" (echo), parsed by shell function.

## Code Style & Conventions
- **TypeScript**: Strict mode enabled, ESNext target, bundler resolution
- **Formatting**: Biome (2-space indent implicit via biome.json)
- **Imports**: ES modules, explicit file extensions (.ts)
- **Default exports**: All utility modules export `default` function/string
- **Unused/null checks**: `noUnusedLocals`, `noUnusedParameters`, strict null checks enabled
- **Linting suppressions**: Use `// biome-ignore lint/rule: reason` comments
- **No semicolons** (Biome default)
