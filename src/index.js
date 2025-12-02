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
 *   const program = await createProgram();
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
    .option('-D, --debug', 'enable debug logging')
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
