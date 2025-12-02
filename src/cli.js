#!/usr/bin/env node

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
