const consoleArguments: string[] = process.argv.splice(2);
const consoleArgument: string = consoleArguments[0];
let random: number;

if (consoleArguments.length > 1) {
    console.error('Too many arguments');
    process.exit(-1);
} else if (consoleArgument === undefined || consoleArgument === '-l') {
    random = Math.floor(Math.random() * 11);
} else if (consoleArgument === '-h') {
    random = Math.floor(Math.random() * 1001);
} else {
    console.error(`Unknown argument "${consoleArguments[0]}"`);
    process.exit(-1);
}

console.log(random);
