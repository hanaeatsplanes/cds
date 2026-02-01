import help from "./help.ts";

const args = process.argv.slice(2);

if (args.length === 0 || args[0] === "help") {
	console.log(`echo ${help}`)
	process.exit(0)
} else {
	switch (args[0]) {
		case "-l":
			console.log(`echo "Listing all tags and their associated directories...";`)

	}
}