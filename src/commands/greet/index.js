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
 * @returns {void} This function registers the command directly with the program and does not return a command instance.
 *
 * @example
 * // Title: Register the 'greet' command
 * (async () => {
 *   const { Command } = await import('commander');
 *   const program = new Command();
 *   register(program, {}, 'greet');
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
      thisCommand.resolvedName = actionArgs[0] !== undefined ? actionArgs[0] : defaultConfig.name;
    })
    .action(async (nameFromCommander, optionsFromCommander, commandInstance) => {
      // Commander passes original name and options here, we will ignore them
      await action(
        commandInstance.resolvedName,
        commandInstance.resolvedOptions,
        dependencies,
        commandInstance,
      );
    });
}
