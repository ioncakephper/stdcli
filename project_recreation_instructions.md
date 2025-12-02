I need to recreate the `stdcli` project from scratch. Here's a comprehensive set of instructions that, when executed from an empty directory (which will become the project's root folder), will set up the entire project, including all files, dependencies, and configurations developed during this session.

Once the project is created, please replace all instances of `stdcli` with the actual name of the parent folder where this project is created. This replacement should occur in `package.json` for fields like `name`, `repository`, `bugs`, and `homepage`.

---

**Step 1: Initialize the project and create core files.**

```bash
npm init -y
```

```text
# Replace the content of package.json with the following:
{
  "name": "stdcli",
  "version": "1.0.0",
  "main": "src/index.js",
  "bin": {
    "stdcli": "src/cli.js"
  },
  "type": "module",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "lint": "eslint . --fix",
    "format": "prettier --write . \"**/*.{js,json,cjs,mjs,md,html,yml}\"",
    "start": "node src/cli.js"
  },
  "keywords": [
    "cli",
    "command-line",
    "automation",
    "developer-tools",
    "productivity",
    "scaffolding",
    "generator"
  ],
  "author": "Ion Gireada <shytiger@yahoo.com>",
  "license": "MIT",
  "description": "A command-line interface for streamlining repetitive tasks and boosting developer productivity.",
  "repository": {
    "type": "git",
    "url": "https://github.com/ioncakephper/stdcli.git"
  },
  "bugs": {
    "url": "https://github.com/ioncakephper/stdcli/issues"
  },
  "homepage": "https://github.com/ioncakephper/stdcli#readme"
}
**Important:** After the `package.json` file is created, manually edit the `package.json` content as follows to use a placeholder for the project name:
*   Change `"name": "stdcli"` to `"name": "{{PROJECT_NAME}}"`
*   Change `"bin": { "stdcli": "src/cli.js" }` to `"bin": { "{{PROJECT_NAME}}": "src/cli.js" }`
*   Change `"repository": { "type": "git", "url": "https://github.com/ioncakephper/stdcli.git" }` to `"repository": { "type": "git", "url": "https://github.com/ioncakephper/{{PROJECT_NAME}}.git" }`
*   Change `"bugs": { "url": "https://github.com/ioncakephper/stdcli/issues" }` to `"bugs": { "url": "https://github.com/ioncakephper/{{PROJECT_NAME}}/issues" }`
*   Change `"homepage": "https://github.com/ioncakephper/stdcli#readme"` to `"homepage": "https://github.com/ioncakephper/{{PROJECT_NAME}}#readme"
*   Remember to replace `{{PROJECT_NAME}}` with the actual parent folder name after the project creation.

```bash
# Create tasks.md
```

```text
- [x] **Project Initialization & Metadata**
  - [x] Update `package.json`:
    - [x] Add a concise and informative `description`.
    - [x] Add relevant `keywords` for discoverability.
    - [x] Set `license` to "MIT" and create `LICENSE` file with the current year and "Ion Gireada" as the author.
    - [x] Set `author` field by asking the user for their name and email.
    - [x] Create `repository`, `bugs`, and `homepage` entries for the GitHub repository `ioncakephper/stdcli`.
- [x] **Development Tooling & Automation**
    - [x] Set up linting and formatting:
        - [x] Install `eslint`, `eslint-config-prettier`, `eslint-plugin-prettier`, and `eslint-config-prettier`.
        - [x] Create `.eslintrc.json` and `.prettierrc.json` configuration files.
        - [x] Add `lint` and `format` scripts to `package.json`.
        - [x] Verify that `npm run lint` and `npm run format` run without errors.
    - [x] create .gitignore file with standard content for Node.
    - [ ] Set up unit testing framework (e.g., Jest).
    - [ ] Add a test script to `package.json`.
    - [ ] Write a basic test for the "Hello, stdcli!" command.
    - [ ] Implement configuration file support (e.g., using `cosmiconfig` or a simple JSON file).
    - [ ] Add a command to view current configurations.
    - [x] Add a 'start' script to `package.json` that runs `node src/cli.js`.
- [ ] **Core CLI Implementation**
    - [ ] Implement core CLI structure with `src/cli.js` (shebang, `commander.js`), `src/index.js` (exported `run` function), and update `package.json` accordingly.
    - [ ] Implement subcommands (e.g., `stdcli create <type>`).
    - [ ] Add option parsing for commands (e.g., `stdcli command --option value`).
    - [ ] Implement robust error handling for CLI commands.
    - [ ] Provide clear and concise user feedback for command execution.

- [x] **Community & Contribution Guidelines**
  - [x] Create `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md` with standard contributing guidelines and a code of conduct.
  - [x] Update `README.md` to include "Contributing" and "License" sections with links to the corresponding files.
- [x] **General Instructions**
    - [x] Regularly review and update `README.md` to meet high standards of clarity, completeness, and comprehensiveness.
- [ ] **Deployment & Maintenance**
    - [ ] Prepare the project for npm publication (e.g., `package.json` fields).
    - [ ] Choose between using `.npmignore` or `package.files` for npm publications
    - [ ] Document the release process.
    - [ ] Set up continuous integration (CI) for automated testing and deployment.
    - [ ] Plan for future updates and versioning.
```

```bash
# Create LICENSE file
```

```text
MIT License

Copyright (c) 2025 Ion Gireada

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

```bash
# Create CODE_OF_CONDUCT.md
```

```text
# Contributor Covenant Code of Conduct

## Our Pledge

We as members, contributors, and leaders pledge to make participation in our
community a harassment-free experience for everyone, regardless of age, body
size, visible or invisible disability, ethnicity, sex characteristics, gender
identity and expression, level of experience, education, socio-economic status,
nationality, personal appearance, race, religion, or sexual identity
and orientation.

We pledge to act and interact in ways that contribute to an open, welcoming,
diverse, inclusive, and healthy community.

## Our Standards

Examples of behavior that contributes to a positive environment for our
community include:

*   Demonstrating empathy and kindness toward other people
*   Being respectful of differing opinions, viewpoints, and experiences
*   Giving and gracefully accepting constructive feedback
*   Accepting responsibility and apologizing to those affected by our mistakes,
    and learning from the experience
*   Focusing on what is best not just for us as individuals, but for the
    overall community

Examples of unacceptable behavior include:

*   The use of sexualized language or imagery, and sexual attention or
    advances of any kind
*   Trolling, insulting or derogatory comments, and personal or political attacks
*   Public or private harassment
*   Publishing others' private information, such as a physical or email
    address, without their explicit permission
*   Other conduct which could reasonably be considered inappropriate in a
    professional setting

## Enforcement Responsibilities

Community leaders are responsible for clarifying and enforcing our standards of
acceptable behavior and will take appropriate and fair corrective action in
response to any behavior that they deem inappropriate, threatening, offensive,
or harmful.

Community leaders have the right and responsibility to remove, edit, or reject
comments, commits, code, wiki edits, issues, and other contributions that are
not aligned to this Code of Conduct, and will communicate reasons for moderation
decisions when appropriate.

## Scope

This Code of Conduct applies within all community spaces, and also applies when
an individual is officially representing the community in public spaces. 
Examples of representing our community include using an official e-mail address,
posting via an official social media account, or acting as an appointed
representative at an online or offline event.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be
reported to the community leaders responsible for enforcement at
[INSERT CONTACT METHOD].
All complaints will be reviewed and investigated promptly and fairly.

All community leaders are obligated to respect the privacy and security of the
reporter of any incident.

## Enforcement Guidelines

Community leaders will follow these Community Impact Guidelines in determining
the consequences for any action they deem in violation of this Code of Conduct:

### 1. Correction

**Community Impact**: Use of inappropriate language or other behavior deemed
unprofessional or unwelcome in the community.

**Consequence**: A private, written warning from community leaders, providing
clarity around the nature of the violation and an explanation of why the
behavior was inappropriate. A public apology may be requested.

### 2. Warning

**Community Impact**: A violation through a single incident or series
of actions.

**Consequence**: A warning with consequences for continued behavior. No
interaction with the involved people, including unsolicited interaction with
those enforcing the Code of Conduct, for a specified period of time. This
includes avoiding interaction in community spaces as well as external channels
like social media. Violating these terms may lead to a temporary or
permanent ban.

### 3. Temporary Ban

**Community Impact**: A serious violation of community standards, including
sustained inappropriate behavior.

**Consequence**: A temporary ban from any sort of interaction or public
communication with the community for a specified period of time. No public or
private interaction with the involved people during this sanctioned period.
Violating these terms may lead to a permanent ban.

### 4. Permanent Ban

**Community Impact**: Demonstrating a pattern of violation of community
standards, including sustained inappropriate behavior, harassment of an
individual, or aggression toward or disparagement of classes of individuals.

**Consequence**: A permanent ban from any sort of permanent interaction within
the community.

## Attribution

This Code of Conduct is adapted from the [Contributor Covenant][homepage],
version 2.1, available at
[https://www.contributor-covenant.org/version/2/1/code_of_conduct.html][v2.1].

[homepage]: https://www.contributor-covenant.org
[v2.1]: https://www.contributor-covenant.org/version/2/1/code_of_conduct.html
```

```bash
# Create CONTRIBUTING.md
```

```text
# Contributing to stdcli

We welcome contributions to `stdcli`! Whether you're fixing a bug, adding a new feature, improving documentation, or suggesting enhancements, your input is valuable.

Please take a moment to review this document to ensure a smooth and effective contribution process.

## Code of Conduct

Please note that this project is released with a [Contributor Covenant Code of Conduct](CODE_OF_CONDUCT.md). By participating in this project, you agree to abide by its terms.

## How to Contribute

### 1. Fork the Repository

First, fork the `stdcli` repository to your GitHub account.

### 2. Clone Your Fork

Clone your forked repository to your local machine:

```bash
git clone https://github.com/YOUR_USERNAME/stdcli.git
cd stdcli
```

### 3. Create a New Branch

Create a new branch for your feature or bug fix:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b bugfix/issue-description
```

### 4. Set Up Your Development Environment

Install the project dependencies:

```bash
npm install
```

### 5. Make Your Changes

*   **Code Style**: Adhere to the existing code style. The project uses ESLint and Prettier.
    *   You can automatically format your code: `npm run format`
    *   You can check for linting errors: `npm run lint`
*   **Tests**: If you're adding new features or fixing bugs, please include appropriate tests.
*   **Documentation**: Update relevant documentation (e.g., README.md, JSDoc comments for new functions) for any changes you make.
*   **JSDoc**: Ensure all new functions and updated functions have comprehensive JSDoc comments, including `@example` tags with titles.

### 6. Test Your Changes

Run the project's tests to ensure your changes haven't introduced any regressions:

```bash
npm test
```

### 7. Commit Your Changes

Commit your changes with a clear and descriptive commit message. Follow conventional commit guidelines if applicable.

```bash
git commit -m "feat: Add new feature"
# or
git commit -m "fix: Fix bug in X"
```

### 8. Push Your Changes

Push your new branch to your forked repository:

```bash
git push origin feature/your-feature-name
```

### 9. Create a Pull Request

1.  Go to the `stdcli` repository on GitHub.
2.  You should see a prompt to create a new pull request from your recently pushed branch.
3.  Fill out the pull request template, providing a clear description of your changes, why they are necessary, and any relevant information.
4.  Submit the pull request.

## Code Review Process

Maintainers will review your pull request. They may provide feedback or ask for changes. Please be responsive to comments and be prepared to iterate on your submission.

## Reporting Bugs

If you find a bug, please open an issue on the [GitHub Issues](https://github.com/ioncakephper/stdcli/issues) page. Provide as much detail as possible, including:
*   Steps to reproduce the bug.
*   Expected behavior.
*   Actual behavior.
*   Your environment (OS, Node.js version, etc.).

## Suggesting Enhancements

If you have an idea for a new feature or an improvement, please open an issue to discuss it first. This helps ensure that your contribution aligns with the project's goals.

Thank you for contributing to `stdcli`!
```

```bash
# Create .prettierrc.json
```

```text
{
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100
}
```

```bash
# Create eslint.config.js
```

```text
import globals from 'globals';

export default [
  {
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.browser,
      },
    },
    rules: {
      indent: ['error', 2],
      'linebreak-style': ['error', 'unix'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },
];
```

```bash
# Create .gitignore
```

```text
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Diagnostic reports (https://nodejs.org/api/report.html)
.report/

# Runtime data
*.cjs
*.mjs
*.d.ts
*.tsbuildinfo
*.func
*.js.map

# Miscellaneous
.DS_Store
.env
.env.local
.env.development.local
.env.test.local
.env.production.local
.editorconfig
.npmrc
.yarnrc
.yarn/
.vscode/
.idea/

# Dependencies
node_modules/
/jspm_packages/

# TypeScript cache
*.tsbuildinfo

# Optional npm cache directory
.npm/

# Optional eslint cache
.eslintcache

# Optional stylelint cache
.stylelintcache

# Caching for JavaScript tooling
# Next.js build output
.next/

# Nuxt.js build output
.nuxt/

# VuePress build output
.vuepress/dist/

# Docusaurus build output
build/

# Serverless directories
.serverless/

# FuseBox cache
.fusebox/

# yarn lock
yarn.lock

# parcel-bundler cache (https://parceljs.org/)
.cache
.parcel-cache

# tsc-watch compiler cache
.tsc-watch/

# Build results
dist/
```

**Step 2: Install project dependencies.**

```bash
npm install eslint eslint-config-prettier eslint-plugin-prettier prettier globals jest commander cosmiconfig
```

**Step 3: Create source directories and files.**

```bash
mkdir src src/utils src/commands src/commands/hello src/commands/greet docs config
```

```bash
# Create src/cli.js
```

```text
/**
 * @file This is the main entry point for the stdcli command-line interface.
 * It sets up the execution environment, invokes the core `run` function,
 * and handles any errors that occur during the CLI's operation,
 * ensuring a consistent exit behavior.
 *
 * @example
 * // Title: Run the CLI with no arguments to display general help
 * node src/cli.js
 *
 * @example
 * // Title: Run a specific command, e.g., 'hello'
 * node src/cli.js hello
 */
#!/usr/bin/env node

import { run } from './index.js';
import { CommanderError } from 'commander';

run(process.argv).catch((err) => {
  if (err instanceof CommanderError) {
    process.exit(err.exitCode);
  } else {
    console.error(err);
    process.exit(1);
  }
});
```

```bash
# Create src/index.js
```

```text
import { Command } from 'commander';
import { getMetaData } from 'commander-pkg-meta';
import fs from 'node:fs/promises';
import { loadCommands } from './utils/loadCommands.js';
import { loadConfiguration } from './utils/configLoader.js';

/**
 * Asynchronously reads and parses the project's `package.json` file.
 * This function is crucial for retrieving project metadata such as name, description, and version,
 * which are used to configure the Commander.js program.
 *
 * @returns {Promise<object>} A promise that resolves to the parsed content of `package.json`.
 *
 * @example
 * // Title: Get and log package.json contents
 * (async () => {
 *   const pkg = await getPackageJson();
 *   console.log(`Project Name: ${pkg.name}, Version: ${pkg.version}`);
 * })();
 */
async function getPackageJson() {
  const packageJsonPath = new URL('../package.json', import.meta.url);
  const packageJsonContent = await fs.readFile(packageJsonPath, 'utf8');
  return JSON.parse(packageJsonContent);
}

/**
 * Asynchronously initializes and configures the Commander.js CLI program.
 * This involves setting up the program's name, description, and version from `package.json`,
 * defining global options, configuring help output, dynamically loading commands from the `commands` directory,
 * and setting up an exit override for robust error handling.
 *
 * @returns {Promise<import('commander').Command>} A promise that resolves to the configured Commander.js program instance.
 *
 * @example
 * // Title: Create and display the CLI program's help
 * (async () => {
 *   const program = new Command();
 *   program.outputHelp();
 * })();
 */
async function createProgram() {
  const program = new Command();
  const packageJson = await getPackageJson();
  const metaData = getMetaData(packageJson);

  program.name(metaData.name).description(metaData.description).version(metaData.version);

  program
    .option('-v, --verbose', 'enable verbose logging')
    .option('-d, --debug', 'enable debug logging')
    .option('-q, --quiet', 'suppress all output')
    .option('-c, --config <path>', 'path to configuration file');

  program.configureHelp({
    sortSubcommands: true,
    sortOptions: true,
    showGlobalOptions: true,
  });

  const dependencies = {};
  dependencies.config = await loadConfiguration(program, packageJson);
  await loadCommands(program, new URL('./commands', import.meta.url), dependencies);

  // If no subcommand is specified, display help
  program.action(() => {
    if (program.args.length === 0) {
      program.help();
    }
  });

  // Override the default exit behavior to allow the calling script (cli.js) to handle exiting
  program.exitOverride();

  return program;
}

/**
 * The main asynchronous execution function for the CLI.
 * It creates the Commander.js program, loads all defined commands,
 * and then parses the provided command-line arguments to execute the appropriate action.
 *
 * @param {string[]} args Command-line arguments, typically `process.argv`.
 * @returns {Promise<void>} A promise that resolves when the command has been parsed and executed, or rejects if an error occurs.
 *
 * @example
 * // Title: Run the CLI with current process arguments
 * run(process.argv);
 *
 * @example
 * // Title: Run the CLI with custom arguments
 * run(['node', 'cli.js', 'hello', '--name', 'World']);
 */
async function run(args) {
  const program = await createProgram();
  await program.parseAsync(args);
}

export { run };
```

```bash
# Create src/utils/loadCommands.js
```

```text
import { readdir, access } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

/**
 * Dynamically loads commands from a specified directory and registers them with the Commander program.
 * Each command is expected to reside in its own folder, containing an 'index.js' for command definition
 * and an 'action.js' for the command's action handler.
 *
 * @param {import('commander').Command} program The Commander.js program instance.
 * @param {string | URL} cmdPath The absolute path or URL to the directory to scan for commands.
 * @param {object} [dependencies={}] An optional object containing dependencies to be injected into command actions.
 *
 * @example
 * // Title: Load commands from a specified directory
 * (async () => {
 *   const program = new Command();
 *   const dependencies = { config: { /* ... * / } };
 *   await loadCommands(program, new URL('./commands', import.meta.url), dependencies);
 *   // program now has 'hello' command registered
 * })();
 */
async function loadCommands(program, cmdPath, dependencies = {}) {
  const actualCmdPath = cmdPath instanceof URL ? fileURLToPath(cmdPath) : cmdPath;
  try {
    const entries = await readdir(actualCmdPath, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const fullPath = resolve(actualCmdPath, entry.name);
        const commandName = entry.name; // Use folder name as potential command name

        const indexPath = resolve(fullPath, 'index.js');
        const actionPath = resolve(fullPath, 'action.js');

        // Check if both index.js and action.js exist
        const hasIndex = await fileExists(indexPath);
        const hasAction = await fileExists(actionPath);

        if (hasIndex && hasAction) {
          // Dynamically import the command definition and action handler
          // Note: import() expects a file URL, so convert path back to URL if necessary for dynamic import
          const commandDefinitionModule = await import(pathToFileURL(indexPath));
          const actionHandlerModule = await import(pathToFileURL(actionPath));

          const defineCommand = commandDefinitionModule.default;
          const handleAction = actionHandlerModule.default;

          if (typeof defineCommand === 'function' && typeof handleAction === 'function') {
            const commandInstance = await defineCommand(program, dependencies, commandName);
            // Ensure the command was correctly defined. The action is expected to be defined within the command's index.js.
            if (!commandInstance) {
              console.warn(
                `Command definition in ${indexPath} did not return a Commander command instance.`, 
              );
            }
          } else {
            console.warn(
              `Skipping command '${commandName}': index.js or action.js in ${fullPath} does not export a default function.`, 
            );
          }
        } else {
          // If not a command folder, recursively scan subdirectories
          await loadCommands(program, fullPath, dependencies);
        }
      }
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.warn(`Command directory not found: ${actualCmdPath}`);
    } else {
      console.error(`Error loading commands from ${actualCmdPath}:`, error);
    }
  }
}

/**
 * Checks if a file exists at the given path.
 * This asynchronous function uses `fs.promises.access` to determine the existence of a file,
 * returning `true` if the file is found and accessible, and `false` otherwise.
 *
 * @param {string | URL} filePath The path to the file to check. Can be a string path or a URL.
 * @returns {Promise<boolean>} A promise that resolves to `true` if the file exists, `false` otherwise.
 *
 * @example
 * // Title: Check if a specific file exists
 * (async () => {
 *   const exists = await fileExists('./src/cli.js');
 *   console.log(`src/cli.js exists: ${exists}`); // true or false
 * })();
 */
async function fileExists(filePath) {
  const actualFilePath = filePath instanceof URL ? fileURLToPath(filePath) : filePath;
  try {
    // fs.promises.access is more appropriate for checking existence
    await access(actualFilePath);
    return true;
  } catch (error) {
    if (error.code === 'ENOENT') {
      return false;
    }
    throw error; // Re-throw other errors
  }
}

export { loadCommands };
```

```bash
# Create src/utils/configLoader.js
```

```text
import { cosmiconfig } from 'cosmiconfig';
import fs from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Asynchronously loads configuration for the CLI, cascading from a default file
 * and then a user-defined or discovered configuration file.
 *
 * The configuration search hierarchy is as follows:
 * 1. An optional default configuration from `config/default.json` within the package.
 *    If `config/default.json` does not exist, an empty object is used as base.
 * 2. A configuration file explicitly specified via the `--config <path>` CLI option.
 * 3. A configuration file discovered by `cosmiconfig` (e.g., `.stdclirc`, `stdcli.config.js`)
 *    using the package name as the module name.
 *
 * The loaded configuration is a merged object, with later stages overriding earlier ones.
 *
 * @param {import('commander').Command} program The Commander.js program instance, used to retrieve CLI options.
 * @param {object} packageJson The parsed `package.json` content, used to determine the `moduleName` for `cosmiconfig`.
 * @returns {Promise<object>} A promise that resolves to the final merged configuration object.
 *
 * @example
 * // Title: Load configuration with a Commander program and package.json
 * (async () => {
 *   const { Command } = await import('commander');
 *   const program = new Command();
 *   program.option('-c, --config <path>', 'path to configuration file');
 *   program.parse(['node', 'cli.js', '-c', './custom.config.json'], { from: 'user' });
 *
 *   const packageJson = { name: 'stdcli', version: '1.0.0' }; // Mock package.json
 *   const config = await loadConfiguration(program, packageJson);
 *   console.log('Loaded Configuration:', config);
 * })();
 *
 * @example
 * // Title: Load configuration without a custom path
 * (async () => {
 *   const { Command } = await import('commander');
 *   const program = new Command();
 *   program.option('-c, --config <path>', 'path to configuration file');
 *   program.parse(['node', 'cli.js'], { from: 'user' }); // No custom config path
 *
 *   const packageJson = { name: 'stdcli', version: '1.0.0' }; // Mock package.json
 *   const config = await loadConfiguration(program, packageJson);
 *   console.log('Loaded Configuration:', config);
 * })();
 */
export async function loadConfiguration(program, packageJson) {
  let finalConfig = {};

  // 1. Load default configuration from config/default.json
  const defaultConfigPath = resolve(fileURLToPath(new URL('../..', import.meta.url)), 'config', 'default.json');
  try {
    const defaultConfigFileContent = await fs.readFile(defaultConfigPath, 'utf8');
    finalConfig = JSON.parse(defaultConfigFileContent);
  } catch (error) {
    if (error.code === 'ENOENT') {
      // Default config file does not exist, start with empty object
      finalConfig = {};
    } else {
      console.warn(`Warning: Could not read default configuration file: ${defaultConfigPath}`, error.message);
    }
  }

  // 2. Load configuration using cosmiconfig
  const moduleName = packageJson.name;
  const explorer = cosmiconfig(moduleName);

  let result;
  const configPath = program.opts().config; // Get value of --config option

  if (configPath) {
    // If --config is specified, load that specific file
    try {
      result = await explorer.load(configPath);
    } catch (error) {
      console.error(`Error: Could not load configuration from specified path: ${configPath}`, error.message);
      // Depending on desired behavior, might want to exit here or proceed with partial config
    }
  } else {
    // Otherwise, search for configuration files
    result = await explorer.search();
  }

  if (result && result.config) {
    finalConfig = { ...finalConfig, ...result.config };
  }

  return finalConfig;
}
```

```bash
# Create src/commands/hello/index.js
```

```text
import action from './action.js';

/**
 * Defines the 'hello' command for the Commander program.
 * This function registers the 'hello' command, sets its description, and links it to the
 * corresponding action handler defined in `action.js`.
 *
 * @param {import('commander').Command} program The Commander.js program instance.
 * @param {object} [dependencies={}] An optional object containing dependencies to be injected into the command's action.
 * @param {string} commandName The name of the command (e.g., 'hello').
 * @returns {import('commander').Command} The configured Commander.js command instance.
 *
 * @example
 * // Title: Register the 'hello' command with a Commander program
 * (async () => {
 *   const { Command } = await import('commander');
 *   const program = new Command();
 *   await register(program, {}, 'hello');
 *   // program now has a 'hello' command registered
 * })();
 */
export default async function register(program, dependencies = {}, commandName) {
  return program
    .command(commandName)
    .description('Says hello')
    .hook('preAction', (thisCommand) => {
      const defaultConfig = dependencies.config[commandName] || {};
      const commandLineOptions = thisCommand.opts();
      thisCommand.resolvedOptions = { ...defaultConfig, ...commandLineOptions };
    })
    .action(async (optionsFromCommander, commandInstance) => {
      await action(commandInstance.resolvedOptions, dependencies, commandInstance);
    });
}
```

```bash
# Create src/commands/hello/action.js
```

```text
/**
 * Action handler for the 'hello' command.
 * This function is executed when the 'hello' command is invoked,
 * logging a simple greeting to the console.
 *
 * @param {object} resolvedOptions An object containing all resolved options (merged from config and command-line).
 * @param {object} [dependencies={}] An optional object containing dependencies that might be used by the action.
 * @param {import('commander').Command} command The Commander.js command instance that triggered this action.
 * @returns {Promise<void>} A promise that resolves when the action is complete.
 *
 * @example
 * // Title: Execute the 'hello' action
 * (async () => {
 *   const mockCommand = { name: 'hello', opts: () => ({}) };
 *   const mockDependencies = { /* any mock deps * / };
 *   await action({}, mockDependencies, mockCommand); // No specific options for hello
 *   // Expected output: "Hello!"
 * })();
 */
export default async function action(resolvedOptions, dependencies = {}, command) {
  console.log('Hello!');
}
```

```bash
# Create src/commands/greet/index.js
```

```text
import action from './action.js';

/**
 * Defines the 'greet' command for the Commander program.
 * This function registers the 'greet' command, sets its description,
 * defines its argument (`[name]`), its options (`--exclamation`),
 * and links it to the corresponding action handler defined in `action.js`.
 *
 * @param {import('commander').Command} program The Commander.js program instance.
 * @param {object} [dependencies={}] An optional object containing dependencies to be injected into the command's action.
 * @param {string} commandName The name of the command (e.g., 'greet').
 * @returns {import('commander').Command} The configured Commander.js command instance.
 *
 * @example
 * // Title: Register the 'greet' command
 * // (within src/index.js or loadCommands.js)
 * (async () => {
 *   const { Command } = await import('commander');
 *   const program = new Command();
 *   const dependencies = { config: { greet: { name: 'CommanderUser', exclamation: true } } };
 *   await register(program, dependencies, 'greet');
 *   // 'program' now has a 'greet' command available
 * })();
 *
 * @example
 * // Title: Invoke the 'greet' command with a name
 * // Assuming 'greet' command is registered:
 * // stdcli greet World
 * // Expected output: Hello, World!
 *
 * @example
 * // Title: Invoke the 'greet' command with a name and exclamation
 * // Assuming 'greet' command is registered:
 * // stdcli greet Alice --exclamation
 * // Expected output: Hello, Alice!!!
 */
export default async function register(program, dependencies = {}, commandName) {
  return program
    .command(commandName)
    .description('Says hello')
    .argument('[name]', 'name to greet')
    .option('-e, --exclamation', 'add exclamation mark')
    .hook('preAction', (thisCommand, actionArgs) => {
      const defaultConfig = dependencies.config[commandName] || {};
      const commandLineOptions = thisCommand.opts();

      thisCommand.resolvedOptions = { ...defaultConfig, ...commandLineOptions };

      // Resolve 'name' argument: command-line > config default
      thisCommand.resolvedName = actionArgs[0] !== undefined
        ? actionArgs[0]
        : defaultConfig.name;
    })
    .action(async (nameFromCommander, optionsFromCommander, commandInstance) => {
      await action(
        commandInstance.resolvedName,
        commandInstance.resolvedOptions,
        dependencies,
        commandInstance
      );
    });
}
```

```bash
# Create src/commands/greet/action.js
```

```text
/**
 * Action handler for the 'greet' command.
 * This function processes the `resolvedName` argument and `resolvedOptions` (like `exclamation`)
 * to construct and log a personalized greeting message to the console.
 *
 * @param {string} [resolvedName='World'] The resolved name to greet. Defaults to 'World' if not provided by config or CLI.
 * @param {object} resolvedOptions An object containing all resolved options (merged from config and command-line).
 * @param {object} [dependencies={}] An optional object containing dependencies that might be used by the action.
 * @param {import('commander').Command} command The Commander.js command instance that triggered this action.
 * @returns {Promise<void>} A promise that resolves when the action is complete.
 *
 * @example
 * // Title: Greet with default name
 * (async () => {
 *   const mockCommand = { name: 'greet', opts: () => ({}) };
 *   const mockDependencies = { /* any mock deps * / };
 *   await action(undefined, {}, mockDependencies, mockCommand); // No name, no options
 *   // Expected output: "Hello, World!"
 * })();
 *
 * @example
 * // Title: Greet a specific name with exclamation
 * (async () => {
 *   const mockCommand = { name: 'greet', opts: () => ({}) };
 *   const mockDependencies = { /* any mock deps * / };
 *   await action('Alice', { exclamation: true }, mockDependencies, mockCommand);
 *   // Expected output: "Hello, Alice!!!"
 * })();
 */
export default async function action(resolvedName, resolvedOptions, dependencies, command) {
  const nameToGreet = resolvedName !== undefined ? resolvedName : 'World';
  const exclamation = resolvedOptions.exclamation;

  console.log('Command:', command);
  console.log('Dependencies:', dependencies);
  console.log('Resolved Name:', nameToGreet);
  console.log('Resolved Options:', resolvedOptions);

  let greeting = `Hello, ${nameToGreet}`;
  if (exclamation) {
    greeting += '!!!';
  }
  console.log(greeting);
}
```

```bash
# Create config/default.json
```

```text
{}
```

```bash
# Create docs/creating-commands.md
```

```text
# Creating New Commands in `stdcli`

This document outlines the process for adding new commands to the `stdcli` command-line interface, detailing the required file structure, content for `index.js` and `action.js`, and explaining the usage of Commander.js's `.hook('preAction', ...)` method for cascade configuration.

## Prerequisites

Before creating a new command, ensure you have a basic understanding of:
*   Node.js and asynchronous programming (`async/await`).
*   Commander.js for building command-line interfaces.
*   JSDoc for documenting JavaScript code.

## Command Structure

Each command in `stdcli` resides in its own dedicated folder within `src/commands/`. This folder typically contains at least two files:
*   `index.js`: Defines the command, its arguments, options, and hooks using Commander.js.
*   `action.js`: Contains the core business logic executed when the command is invoked.

**Example Folder Structure for a `mycommand` command:**

```
stdcli/
├── src/
│   └── commands/
│       └── mycommand/
│           ├── index.js
│           └── action.js
├── config/
│   └── default.json (optional: for global defaults)
└── .mycommandrc.json (optional: for command-specific defaults via cosmiconfig)
```

## `index.js` - Command Definition

The `index.js` file is responsible for registering the command with the main Commander.js program. It defines the command's name, description, arguments, options, and crucially, sets up the `preAction` hook for cascade configuration.

**Key Points:**
*   It must export a `default async function register(program, dependencies = {}, commandName)`.
*   This `register` function should `return` the Commander.js command instance it creates.
*   Arguments are defined using `.argument()`.
*   Options are defined using `.option()`.
*   The `.hook('preAction', ...)` method is used for processing configuration and command-line inputs.

**Example (`src/commands/mycommand/index.js`):**

```javascript
import action from './action.js';

/**
 * Defines the 'mycommand' command for the Commander program.
 * This function registers the 'mycommand' command, sets its description,
 * defines its arguments and options, and links it to the corresponding action handler defined in `action.js`.
 * It also uses a preAction hook for cascade configuration of arguments and options.
 *
 * @param {import('commander').Command} program The Commander.js program instance.
 * @param {object} [dependencies={}] An optional object containing dependencies (like config) to be injected into the command's action.
 * @param {string} commandName The name of the command (e.g., 'mycommand').
 * @returns {import('commander').Command} The configured Commander.js command instance.
 *
 * @example
 * // Title: Register the 'mycommand' command
 * // (within src/index.js or loadCommands.js)
 * (async () => {
 *   const { Command } = await import('commander');
 *   const program = new Command();
 *   const dependencies = { config: { mycommand: { defaultArg: 'default', myOption: true } } };
 *   await register(program, dependencies, 'mycommand');
 *   // 'program' now has a 'mycommand' command available
 * })();
 */
export default async function register(program, dependencies = {}, commandName) {
  return program
    .command(commandName)
    .description('A sample command')
    .argument('[optionalArg]', 'An optional argument')
    .option('-o, --my-option', 'A boolean option')
    .hook('preAction', (thisCommand, actionArgs) => {
      const defaultConfig = dependencies.config[commandName] || {};
      const commandLineOptions = thisCommand.opts();

      // Merge options: command-line values override config defaults
      thisCommand.resolvedOptions = { ...defaultConfig, ...commandLineOptions };

      // Resolve argument: command-line value overrides config default
      thisCommand.resolvedArg = actionArgs[0] !== undefined
        ? actionArgs[0]
        : defaultConfig.optionalArg;
    })
    .action(async (optionalArgFromCommander, optionsFromCommander, commandInstance) => {
      // Pass resolved values from preAction to the actual action handler
      await action(
        commandInstance.resolvedArg,
        commandInstance.resolvedOptions,
        dependencies,
        commandInstance
      );
    });
}
```

## `action.js` - Command Logic

The `action.js` file contains the actual code that performs the command's task. It receives the resolved arguments and options, along with global dependencies and the Commander.js command instance.

**Key Points:**
*   It must export a `default async function action(...)`.
*   The function signature should expect `resolvedArgs`, `resolvedOptions`, `dependencies`, and the Commander `command` instance.
*   Default values for arguments (like `'World'` for `greet`) should be handled here if they are not provided by either config or command line.

**Example (`src/commands/mycommand/action.js`):**

```javascript
/**
 * Action handler for the 'mycommand' command.
 * This function processes the resolved argument and options to perform the command's logic.
 *
 * @param {string} [resolvedArg='defaultValue'] The resolved value of the optional argument.
 * @param {object} resolvedOptions An object containing all resolved options (merged from config and command-line).
 * @param {object} [dependencies={}] An optional object containing global dependencies (e.g., config).
 * @param {import('commander').Command} command The Commander.js command instance that triggered this action.
 * @returns {Promise<void>} A promise that resolves when the action is complete.
 *
 * @example
 * // Title: Execute 'mycommand' with resolved values
 * (async () => {
 *   const mockCommand = { name: 'mycommand', opts: () => ({}), resolvedOptions: { myOption: true } };
 *   const mockDependencies = { /* any mock deps * / };
 *   await action('customValue', { myOption: true }, mockDependencies, mockCommand);
 *   // Expected custom logic execution based on 'customValue' and 'myOption: true'
 * })();
 */
export default async function action(resolvedArg = 'defaultValue', resolvedOptions, dependencies, command) {
  console.log(`Executing 'mycommand' with:`)
  console.log(`  Argument: ${resolvedArg}`);
  console.log(`  Options:`, resolvedOptions);
  console.log(`  Dependencies:`, dependencies);
  // Implement your command's core logic here
}
```

## Understanding the `.hook('preAction', ...)` Method

The `.hook('preAction', ...)` method is a powerful feature of Commander.js that allows you to execute logic *before* the main command `action` handler is called. In `stdcli`, it's primarily used for implementing **cascade configuration**.

**Purpose:**
*   To intercept the command execution flow before the main action runs.
*   To process and merge configuration settings with command-line inputs.
*   To prepare "resolved" arguments and options for the `action` handler, ensuring it receives a consistent, final set of inputs.

**Cascade Configuration Logic:**
The `preAction` hook integrates `stdcli`'s cascaded configuration system, which works as follows:
1.  **Default Configuration**: Values from `dependencies.config[commandName]` (loaded from `config/default.json` and `.stdclirc`-like files via `cosmiconfig`) serve as the base defaults.
2.  **Command-Line Overrides**: Values explicitly provided via command-line arguments or options (e.g., `stdcli mycommand --my-option`) override the default configuration.

**Parameters to `preAction`:**
The `preAction` callback receives two main parameters:
*   `thisCommand`: This is the Commander.js command instance itself (e.g., the `mycommand` instance). You can use `thisCommand.opts()` to get options parsed from the command line.
*   `actionArgs`: This is an array containing the arguments provided to the command on the command line.

**Storing Resolved Values:**
Since the `preAction` hook cannot directly modify the arguments passed to the `action` handler, a common pattern in `stdcli` is to:
1.  Compute the final, resolved values for arguments and options within `preAction`.
2.  Attach these resolved values as properties directly onto the `thisCommand` instance (e.g., `thisCommand.resolvedArg`, `thisCommand.resolvedOptions`).
3.  The main `action` handler then retrieves these values from the `commandInstance` parameter it receives.

This pattern ensures that the `action.js` files always work with pre-processed, merged inputs, simplifying their logic.

## Testing Your New Command

After creating your new command, you can test it using the `npm start` script:

*   To run your command with default values:
    ```bash
    npm start mycommand
    ```
*   To provide an argument:
    ```bash
    npm start mycommand "my-value"
    ```
*   To use an option:
    ```bash
    npm start mycommand --my-option
    ```
*   To get help for your command:
    ```bash
    npm start mycommand --help
    ```

---

After all files are created and `npm install` is run, ensure that the `package.json` file is updated to replace `stdcli` with the actual name of the root project folder as mentioned in Step 1.
