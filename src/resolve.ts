import fs from "node:fs";
import * as path from "node:path";

// TODO: add tag resolve
export default function(input: string) {
	if (input.startsWith("~")) {
		// biome-ignore lint/complexity/useLiteralKeys: TS4111
		input = input.replace(/^~/, process.env["HOME"] || "");
	}

	const abs = path.resolve(process.cwd(), input);

	try {
		return fs.realpathSync(abs);
	} catch {
		return abs;
	}
}