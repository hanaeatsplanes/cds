import help from "./help.ts";
import resolve from "./resolve.ts";

const args = process.argv.slice(2);

const arg0 = args[0];
if (arg0 === "help" || arg0 === "--help" || arg0 === "-h") {
	console.log(`E"${help}"`);
}

console.log(`P${resolve(arg0 || "~")}`);