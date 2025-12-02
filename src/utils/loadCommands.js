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
