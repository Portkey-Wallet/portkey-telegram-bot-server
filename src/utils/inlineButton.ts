import TelegramBot from 'node-telegram-bot-api';

export const TELEGRAM_GROUP_LINK = 'https://t.me/Portkey_Official_Group';
export const X_GROUP_LINK = 'https://x.com/Portkey_DID';

export const DISCORD_GROUP_LINK = 'https://discord.gg/EUBq3rHQhr';

export const getSocialMediaBtn = ({
  playLink
}: {
  playLink: string;
}): TelegramBot.InlineKeyboardButton[][] => [
  [
    {
      text: '🌀 Open Portkey Wallet',
      web_app: {
        url: playLink
      }
    }
  ],
  [
    {
      text: 'Join Community',
      url: TELEGRAM_GROUP_LINK
    }
  ],
  [
    {
      text: 'Follow X',
      url: X_GROUP_LINK
    }
  ],
  [
    {
      text: 'Join Discord',
      url: DISCORD_GROUP_LINK
    }
  ]
];
