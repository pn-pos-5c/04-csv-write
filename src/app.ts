const consoleArguments: string[] = process.argv.splice(2);
let revenue: number;
let count: number = 1000;

if (consoleArguments.length > 1) {
    console.error('Too many arguments');
    process.exit(-1);
} else if (consoleArguments.length === 1 && consoleArguments[0] === undefined) {

} else if (consoleArguments[0] === undefined || consoleArguments.includes('-l')) {
    revenue = Math.floor(Math.random() * 11);
} else if (consoleArguments.includes('-h')) {
    revenue = Math.floor(Math.random() * 1001);
} else {
    console.error(`Unknown argument "${consoleArguments[0]}"`);
    process.exit(-1);
}

if (consoleArguments.includes('-n')) {

}

if (consoleArguments[0] === undefined) {
    revenue = Math.floor(Math.random() * 11);
} else {

}

for (let i = 0; i < consoleArguments.length; i++) {
    if (consoleArguments[i] === '-h') {
        revenue = Math.floor(Math.random() * 1001);
    } else if (consoleArguments[i] === '-n') {

    } else if (consoleArguments[i] === '-l') {
        revenue = Math.floor(Math.random() * 11);
    }
}

console.log(revenue);
