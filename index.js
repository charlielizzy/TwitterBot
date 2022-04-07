import dotenv from 'dotenv'
dotenv.config();
import TwitterBot from "./classes/TwitterBot.js";


const runCode = async () => {
  const bot = new TwitterBot();
  const account = await bot.fetchTwitterAccount();
  console.log(account);
}


runCode()