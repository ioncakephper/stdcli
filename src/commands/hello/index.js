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
 *   // program now has a 'hello' command
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
