import { realpathSync } from "node:fs";
import { resolve } from "node:path";

// TODO: add tag resolve
export default function(input: string) {
	if (input.startsWith("~")) {
		// biome-ignore lint/complexity/useLiteralKeys: TS4111
		input = input.replace(/^~/, process.env["HOME"] || "");
	}

	const abs = resolve(process.cwd(), input);

	try {
		return realpathSync(abs);
	} catch {
		return abs;
	}
}