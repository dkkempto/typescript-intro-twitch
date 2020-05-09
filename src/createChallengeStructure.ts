import * as fs from 'fs';
import * as path from 'path';

interface Example {
  input: any,
  output: any
}

interface Challenge {
  title: string,
  description: string,
  examples?: Example[],
}

const challenges: Challenge[] = [
  {
    title: "print-message",
    description: "prints a message to the console",
  },
  {
    title: "greet",
    description: "greets the user based on user input",
  },
  {
    title: "add-5",
    description: "adds 5 to any number",
  },
  {
    title: "merge-collection",
    description: "merges two lists/arrays together",
  },
  {
    title: "count-to-5",
    description: "counts to 5",
  },
  {
    title: "count-to-10-by-2",
    description: "counts to 10 by 2s",
  },
  {
    title: "largest-in-collection",
    description: "returns the largest number in a list/array",
  },
  {
    title: "reverse-word",
    description: "reverses any word",
  },
  {
    title: "reverse-sentence",
    description: "reverses any sentence",
  },
  {
    title: "random-hex-color-code",
    description: "returns a random hex color code",
  },
  {
    title: "sentence-frame-numbers",
    description: "returns any sentence in a frame of #s",
  },
  {
    title: "is-even-odd",
    description: "returns whether a number is even or odd",
  },
  {
    title: "convert-num",
    description: "takes in any number and converts each digit into a 1 or 0. 1 if it's above 5, 0 if it's below 6",
  },
  {
    title: "math-eval",
    description: "takes in two numbers and an operator, then returns the mathematically evaluated answer", //Type Unions
  },
  {
    title: "median",
    description: "finds the median of a list/array of numbers",
  },
  {
    title: "num-to-digits",
    description: "creates a list/array of digits from a large number",
  },
  {
    title: "guess-num",
    description: "takes in a number and lets the user guess that number until they get it right",
  },
  {
    title: "is-palindrome",
    description: "checks to see if a word is a palindrome",
  },
  {
    title: "alphabetize",
    description: "alphabetizes the characters of any string",
  },
  {
    title: "fizz-buzz",
    description: "for number 1-100, returns \"Fizz\" if the number is divisible by 5, \"Buzz\" if divisible by 3, and \"FizzBuzz\" if divisible by 5 and 3",
  },
  {
    title: "convert-to-pig-latin",
    description: "translates any string into pig latin",
  },
  {
    title: "zip",
    description: "zips two lists/ arrays together so that the elements alternate",
  },
  {
    title: "sum-object",
    description: "sums all values in a dictionary/object",
  },
  {
    title: "rotate",
    description: "rotates the elements of a list/array a given amount of times",
  },
  {
    title: "convert-to-morse-code",
    description: "translates any string into morse code",
  },
  {
    title: "sum-by-comma-clusters",
    description: "sums a large number based on it's comma separated parts",
    examples: [
      {
        input: "1,001",
        output: 2,
      }
    ]
  },
  {
    title: "hangman",
    description: "create a hangman game",
  },
  {
    title: "sum-list",
    description: "sums all numbers in a list",
  },
  {
    title: "fibonacci",
    description: "lists the numbers in the fibonacci sequence up to X",
  },
  {
    title: "is-prime",
    description: "returns whether or not a number is prime",
  }
]

const mkdir = async(dir: string) => new Promise((resolve, _) => fs.mkdir(dir, resolve));

const writeFile = async(p: string, data: string) => new Promise((resolve, _) => fs.writeFile(p, data, resolve));

const basicTsConfig = {
  compilerOptions: {
    module: "CommonJS",
    noImplicitAny: true,
    removeComments: true,
    preserveConstEnums: true,
    outDir: "dist",
    sourceMap: true
  },
  include: ["src/**/*"],
  exclude: ["node_modules", "**/*.spec.ts"]
}

const basicPackageJson = {
  version: "1.0.0",
  description: "",
  main: "index.js",
  scripts: {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  author: "",
  license: "ISC",
  devDependencies: {
    "@types/node": "^13.13.5"
  }
}

const titleToFunctionName = (title: string) : string => {
  return title.split('-').reduce((acc, curr) => acc + curr[0].toUpperCase() + curr.slice(1));
}

const getFileTemplate = (challenge: Challenge) : string => {
  
  const descLine = ` Write a function that ${challenge.description} `;
  const numEqualSigns = descLine.length;
  const equalSigns = '='.repeat(numEqualSigns);

  return `/*
* #${equalSigns}#
* |${descLine}| 
* #${equalSigns}#
*/

function ${titleToFunctionName(challenge.title)}() {
  //TODO: Implement the function here
}
 `;
}

const defaultGitIgnore = `
node_modules
dist
`

const createChallengeDirectory = async(challenge: Challenge) => {
  console.log(challenge);
  const challengesDir = 'challenges';
  const challengeDir = path.join(challengesDir, challenge.title);
  const srcDir = path.join(challengeDir, 'src');
  const tsConfigFilePath = path.join(challengeDir, 'tsconfig.json');
  const packageJsonFilePath = path.join(challengeDir, 'package.json');
  const gitIgnoreFilePath = path.join(challengeDir, '.gitignore')
  const mainTsFilePath = path.join(srcDir, 'index.ts');

  const packageJson = {
    name: challenge.title,
    ...basicPackageJson,
  };


  if(!fs.existsSync(challengeDir)) await mkdir(challengeDir);
  if(!fs.existsSync(srcDir)) await mkdir(srcDir);

  await writeFile(tsConfigFilePath, JSON.stringify(basicTsConfig, null, 2));
  await writeFile(packageJsonFilePath, JSON.stringify(packageJson, null, 2));
  await writeFile(gitIgnoreFilePath, defaultGitIgnore);
  await writeFile(mainTsFilePath, getFileTemplate(challenge));
}

(async() => {
  for(let challenge of challenges) {
    await createChallengeDirectory(challenge);
  }
})()