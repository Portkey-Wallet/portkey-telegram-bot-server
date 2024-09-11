import { bot } from './bot';

import { onCallbackQuery, onPlayCommand, onStartCommand, onHelpCommand } from './command';
import { startNodeServer } from './server/server';

async function botServer(): Promise<void> {
  bot.onText(/\/start/, onStartCommand);

  bot.onText(/\/play/, onPlayCommand);
  bot.onText(/\/help/, onHelpCommand);

  bot.on('callback_query', onCallbackQuery);
}

async function main(): Promise<void> {
  startNodeServer();
  botServer();
}

main();
