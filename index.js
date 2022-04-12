import dotenv from "dotenv";
dotenv.config();
import TwitterBot from "./classes/TwitterBot.js";

const getAccount = async () => {
  const bot = new TwitterBot();
  const account = await bot.fetchTwitterAccount();
  console.log(account);
};

getAccount();

const getSingleTweet = async () => {
  const bot = new TwitterBot();
  const tweet = await bot.fetchSingleTweet();
  console.log(tweet);
};

getSingleTweet();

const getUserFromID = async () => {
  const bot = new TwitterBot();
  const user = await bot.fetchUserByID();
  console.log(user);
};

getUserFromID();

const getLikedTweets = async () => {
  const bot = new TwitterBot();
  const tweets = await bot.last10Likes();
  console.log(tweets);
};

getLikedTweets();

const getFollowing = async () => {
  const bot = new TwitterBot();
  const friends = await bot.fetchFollowing();
  console.log(friends);
};

getFollowing();

const postRetweet = async () => {
  const bot = new TwitterBot();
  const success = await bot.postRetweet();
  console.log(success);
};

postRetweet();

const postLike = async () => {
  const bot = new TwitterBot();
  const success = await bot.postLike();
  console.log(success);
};

postLike();

const postTweet = async () => {
  const bot = new TwitterBot();
  const success = await bot.postTweet();
  console.log(success);
};

postTweet();

const deleteTweet = async () => {
  const bot = new TwitterBot();
  const success = await bot.deleteTweet();
  console.log(success);
};

deleteTweet();

const deleteLike = async () => {
  const bot = new TwitterBot();
  const success = await bot.deleteLike();
  console.log(success);
};

deleteLike();

const deleteRetweet = async () => {
  const bot = new TwitterBot();
  const success = await bot.deleteRetweet();
  console.log(success);
};

deleteRetweet();
