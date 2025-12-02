/**
 * Action handler for the 'greet' command.
 * This function processes the `name` argument and `options` (like `exclamation`)
 * to construct and log a personalized greeting message to the console.
 *
 * @param {string} [name='World'] The name to greet. Defaults to 'World' if not provided.
 * @param {object} options An object containing options passed to the command, e.g., `{ exclamation: true }`.
 * @param {object} [dependencies={}] An optional object containing dependencies that might be used by the action.
 * @param {import('commander').Command} command The Commander.js command instance that triggered this action.
 * @returns {Promise<void>} A promise that resolves when the action is complete.
 *
 * @example
 * // Title: Greet with default name
 * (async () => {
 *   const mockCommand = { name: 'greet', opts: () => ({}) };
 *   const mockOptions = {};
 *   await action(undefined, mockOptions, {}, mockCommand);
 *   // Expected output: "Hello, World!"
 * })();
 *
 * @example
 * // Title: Greet a specific name with exclamation
 * (async () => {
 *   const mockCommand = { name: 'greet', opts: () => ({}) };
 *   const mockOptions = { exclamation: true };
 *   await action('Alice', mockOptions, {}, mockCommand);
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
