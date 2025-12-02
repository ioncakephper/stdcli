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
 *   const mockDependencies = { config: {} };
 *   await action('customValue', { myOption: true }, mockDependencies, mockCommand);
 *   // Expected custom logic execution based on 'customValue' and 'myOption: true'
 * })();
 */
export default async function action(resolvedArg = 'defaultValue', resolvedOptions, dependencies, command) {
  console.log(`Executing 'mycommand' with:`);
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
