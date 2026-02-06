import help from "./help.ts";
import resolve from "./resolve.ts";
import shellFunc from "./shellFunc.ts";

const args = process.argv.slice(2);
const arg0 = args[0];

switch (arg0) {
	case "--":
		console.log(`P${args.slice(1).join(" ")}`);
		break;
	case "help":
	case "--help":
	case "-h":
		console.log(`E"${help}"`);
		break;
	case "--shell-func":
		console.log(shellFunc);
		break;
	default:
		console.log(`P${resolve(arg0 || "~")}`);
}
