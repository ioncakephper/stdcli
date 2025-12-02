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
  const defaultConfigPath = resolve(
    fileURLToPath(new URL('../..', import.meta.url)),
    'config',
    'default.json',
  );
  try {
    const defaultConfigFileContent = await fs.readFile(defaultConfigPath, 'utf8');
    finalConfig = JSON.parse(defaultConfigFileContent);
  } catch (error) {
    if (error.code === 'ENOENT') {
      // Default config file does not exist, start with empty object
      finalConfig = {};
    } else {
      console.warn(
        `Warning: Could not read default configuration file: ${defaultConfigPath}`,
        error.message,
      );
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
      console.error(
        `Error: Could not load configuration from specified path: ${configPath}`,
        error.message,
      );
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
