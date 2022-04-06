import dotenv from 'dotenv'
dotenv.config();
import TwitterBot from "./classes/TwitterBot.js";


const bot = new TwitterBot();
const account = await bot.fetchTwitterAccount('EmmaRaducanu');
const { id } = account.data
const tweets = await bot.fetchLikedTweetsByAccount(id);
console.log(tweets.data);

tweets.data.forEach(async (tweet, index) => {
  const user = await bot.fetchAccountById(tweet.author_id);
  console.log(user);
})