const { exec } = require("child_process");

const ERROR_CODE = 1;

const x = () => 1;
const y = {};
const a = {
    ... y,
};

exec("./node_modules/.bin/eslint -c .eslintrc.json config/*.js test/*.js", (error, stdout, stderr) => {
    if (!error) {
        console.info("OK");
        return;
    }
    console.error("Error parsing ESLint config file or any js file breaks on the defined rules.");
    console.error("");
    console.error("Error message:");
    console.error(stderr || stdout);
    process.exit(ERROR_CODE);
});
