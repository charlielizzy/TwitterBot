import dotenv from "dotenv";
dotenv.config();
import TwitterBot from "./classes/TwitterBot.js";

const getAccount = async () => {
  const bot = new TwitterBot();
  const account = await bot.fetchTwitterAccount();
  console.log(account);
};

// getAccount();

const getSingleTweet = async () => {
  const bot = new TwitterBot();
  const tweet = await bot.fetchSingleTweet();
  console.log(tweet);
};

// getSingleTweet();

const getUserFromID = async () => {
  const bot = new TwitterBot();
  const user = await bot.fetchUserByID();
  console.log(user);
};

// getUserFromID();

const getLikedTweets = async () => {
  const bot = new TwitterBot();
  const tweets = await bot.last10Likes();
  console.log(tweets);
};

// getLikedTweets();

const getFriends = async () => {
  const bot = new TwitterBot();
  const friends = await bot.fetchFriends();
  console.log(friends);
};

// getFriends();
