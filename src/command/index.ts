import TelegramBot from 'node-telegram-bot-api';
import { bot } from '../bot';
import { getHelpMessageText, getPlayMessageText, getStartText } from '../theCopy';
import { getSocialMediaBtn } from '../utils/inlineButton';
import { CONFIG } from '../constants';

export const onStartCommand = async (msg: TelegramBot.Message): Promise<void> => {
  const chatId = msg.chat.id;
  // await bot.sendMessage(chatId, 'Welcome to Portkey!');

  await bot.sendPhoto(
    chatId,
    'https://raw.githubusercontent.com/Portkey-Wallet/portkey-telegram-bot-server/master/portkey-banner.png',
    {
      caption: getStartText(),
      parse_mode: 'HTML',
      reply_markup: {
        inline_keyboard: [...getSocialMediaBtn({ playLink: CONFIG.PLAY_URL })]
      }
    }
  );
};
export const onPlayCommand = async (msg: TelegramBot.Message): Promise<void> => {
  onPlayMessage(msg);
};

export const onHelpCommand = async (msg: TelegramBot.Message): Promise<void> => {
  onHelpMessage(msg);
};

export const onCallbackQuery = async (callbackQuery: TelegramBot.CallbackQuery): Promise<void> => {
  const message = callbackQuery.message;
  if (!message) return;
  const category = callbackQuery.data;
  let response = '';
  let parseMode: TelegramBot.ParseMode = 'Markdown';
  let disableWebPagePreview = true;

  switch (category) {
    case 'How to Earn':
      // response = getText({});
      parseMode = 'HTML';
      break;
  }

  if (!response) return;

  bot.sendMessage(message.chat.id, response, {
    parse_mode: parseMode,
    disable_web_page_preview: disableWebPagePreview,
    reply_markup: {
      inline_keyboard: getSocialMediaBtn({ playLink: CONFIG.PLAY_URL })
    }
  });
};

const onHelpMessage = async (msg: TelegramBot.Message): Promise<void> => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, getHelpMessageText(), {
    parse_mode: 'HTML',
    disable_web_page_preview: true
  });
};

const onPlayMessage = async (msg: TelegramBot.Message): Promise<void> => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, getPlayMessageText(), {
    parse_mode: 'HTML',
    disable_web_page_preview: true
  });
};
