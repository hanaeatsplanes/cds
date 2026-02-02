import help from "./help.ts";

const args = process.argv.slice(2);

const arg0 = args[0]
if (!arg0 || arg0 === "help") {
	console.log(`echo "${help}"`)
} else {

}