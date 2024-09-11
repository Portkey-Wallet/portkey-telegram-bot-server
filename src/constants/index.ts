import { TELEGRAM_BOT_TOKEN } from '../secrets';
import { TNetworkType } from '../types';

const networkType = (process.env.BUILD_ENV! as TNetworkType) ?? 'testnet';

const BOT_TOKEN_ONLINE =
  networkType === 'mainnet'
    ? process.env.TELEGRAM_BOT_TOKEN_MAINNET!
    : process.env.TELEGRAM_BOT_TOKEN_TESTNET!;

const BOT_TOKEN = process.env.IS_LOCAL ? TELEGRAM_BOT_TOKEN : BOT_TOKEN_ONLINE;

const configMap = {
  mainnet: {
    BOT_TOKEN: BOT_TOKEN,
    SERVICE_URL: 'https://tgbot.portkey.finance',
    PLAY_URL: 'https://tgbot.portkey.finance',
    HAMSTER: 'https://t.me/HamsterWoodsBot',
    E_TRANSFER: 'https://t.me/ETransferOfficial_bot',
    AWAKEN_SWAP: 'https://t.me/AwakenSwap_Bot',
    VOTIGRAM: 'https://t.me/VotigramBot'
  },
  testnet: {
    BOT_TOKEN: BOT_TOKEN,
    SERVICE_URL: 'https://test-tgbot.portkey.finance',
    PLAY_URL: 'https://test-tgbot.portkey.finance',

    HAMSTER: 'https://t.me/HamsterWoodsTestBot',
    E_TRANSFER: 'https://t.me/ETransferTest_bot',
    AWAKEN_SWAP: 'https://t.me/AwakenSwap_Test_Bot',
    VOTIGRAM: 'https://t.me/monkeyTmrwDevBot'
  }
};

export const CONFIG = configMap[networkType];
