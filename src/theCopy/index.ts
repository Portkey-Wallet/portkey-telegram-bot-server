import { CONFIG } from '../constants';

interface IMessageType {
  text?: string;
  title?: string;
  link?: string;
}
const getStartMessageList = (): IMessageType[] => [
  {
    text: 'Portkey is an account abstraction (AA) wallet, your gateway from Web2 to Web3—offering all the benefits of Web3 without the usual complexities.'
  },
  {
    text: '<b>Effortless Web2 Experience</b>:\nSign up and log in with just one tap, and explore the full potential of Web3 through a wide array of dApps.'
  },
  {
    text: '<b>Enhanced Security</b>:\nSafeguard accounts and assets through social recovery mechanism.'
  },
  {
    text: '<b>No Seed Phrases yet Enhanced Security</b>:\nCreate your wallet without the hassle of seed phrases or mnemonics, and protect your assets with social recovery.'
  },
  {
    text: '<b>Zero Transaction Worries</b>:\nEnjoy seamless transactions with user-friendly mechanisms that cover fees at no extra cost.'
  },
  {
    text: `<b>Rich Interaction</b>:\nImmerse yourself in the world of Web3 dApps—featuring games, DEXes, bridges, and so much more!`
  },
  {
    text: `Tap "Open Portkey Wallet" and unlock a new world of possibilities.`
  }
];

export const getStartText = (): string => {
  return getStartMessageList().reduce((pre, cur) => {
    let message = Object.values(cur).reduce((pre, cur) => `${pre}\n${cur}`, '');
    message += '\n';
    return (pre += message);
  }, '');
};

const getHelpMessageList = (): IMessageType[] => [
  {
    title: '<b>🎥 Help Center</b>',
    text: `Whether you're experiencing issues with Portkey or want to dive deeper into its technology, the <a href="https://doc.portkey.finance/help">Portkey Help Center</a> is here to assist you. Discover step-by-step guides for wallet setup, in-depth articles on account abstraction, and a variety of other topics tailored to your interests!`
  },
  {
    title: '<b>📬 Issues & Suggestions</b>',
    text: 'Portkey is keen to know your opinions and wishes to optimise the user experience. If you encounter issues or have suggestions for the team, please feel free to share with us!\nLink: https://forms.gle/CqzdzCcKGE4fo3oe6'
  },
  {
    title: '<b>📢 Community</b>',
    text: `Join Portkey communities and follow X to never miss out on the latest!\nChat: <a href="https://t.me/Portkey_Official_Group">https://t.me/Portkey_Official_Group</a>\nX: <a href="https://x.com/Portkey_DID">https://x.com/Portkey_DID</a>\nDiscord: <a href="https://discord.gg/EUBq3rHQhr">https://discord.gg/EUBq3rHQhr</a>`
  }
];

export const getHelpMessageText = (): string => {
  return getHelpMessageList().reduce((pre, cur) => {
    let message = Object.values(cur).reduce((pre, cur) => `${pre}\n${cur}`, '');
    message += '\n';
    return (pre += message);
  }, '');
};

export const playMessageList = [
  {
    text: 'Through Portkey wallet, you can unlock a world of exciting dApps with just one tap. '
  },
  {
    title: '<b>🐹 P2E game—Hamster Woods 🐹</b>',
    text: `Play Web3 casual game for free and win valuable on-chain tokens and NFTs.\n<a href="${CONFIG.HAMSTER}">Play to Earn</a>.`
  },
  {
    title: '<b>🔀 Cross-chain—ETransfer</b>',
    text: `Universal gateway to seamless crypto transfers across popular networks.\n<a href="${CONFIG.E_TRANSFER}">Try Now</a>`
  },
  {
    title: '<b>💰 Trade crypto—AwakenSwap</b>',
    text: `Decentralised exchange for token swapping, liquidity providing, and arbitraging.\n<a href="${CONFIG.AWAKEN_SWAP}">Trade Cryptos</a>`
  },
  {
    title: '<b>🎯 Voting tool—Votigram</b>',
    text: `Cast your vote where your voice truly matters.\n<a href="${CONFIG.VOTIGRAM}">Try Now</a>`
  }
];

export const getPlayMessageText = (): string => {
  return playMessageList.reduce((pre, cur) => {
    let message = Object.values(cur).reduce((pre, cur) => `${pre}\n${cur}`, '');
    message += '\n';
    return (pre += message);
  }, '');
};
