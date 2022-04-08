import TwitterBot from "../classes/TwitterBot.js";
import axios from "axios";
import { OBAMA_DATA, TWEET_DATA, EMMA_DATA } from "../mocks/twitterBot.js";

jest.mock("axios");

describe("TwitterBot API fetchTwitterAccount method", () => {
  it("should return barack obama information", async () => {
    axios.get.mockResolvedValue(OBAMA_DATA);
    const account = await new TwitterBot().fetchTwitterAccount();
    expect(account.name).toEqual("Barack Obama");
  });

  it("should throw an error if the API call fails", async () => {
    axios.get.mockRejectedValue(new Error());
    const bot = new TwitterBot();
    await expect(bot.fetchTwitterAccount()).rejects.toThrow(
      "Something went wrong"
    );
  });
});

describe("TwitterBot API fetchSingleTweet method", () => {
  it("should return single barack obama tweet as json object", async () => {
    axios.get.mockResolvedValue(TWEET_DATA);
    const tweet = await new TwitterBot().fetchSingleTweet();
    console.log(tweet);
    expect(tweet.id).toEqual("1512159547842048011");
  });

  it("should throw an error if the API call fails", async () => {
    axios.get.mockRejectedValue(new Error());
    const bot = new TwitterBot();
    await expect(bot.fetchSingleTweet()).rejects.toThrow(
      "Something went wrong when fetching tweet"
    );
  });
});

describe("TwitterBot API fetchUserByID method", () => {
  it("should return barack obama data when we input ID", async () => {
    axios.get.mockResolvedValue(OBAMA_DATA);
    const user = await new TwitterBot().fetchUserByID();
    expect(user.location).toEqual("Washington, DC");
  });

  it("should throw an error if the API call fails", async () => {
    axios.get.mockRejectedValue(new Error());
    const bot = new TwitterBot();
    await expect(bot.fetchUserByID()).rejects.toThrow(
      "Something went wrong when fetching data from ID"
    );
  });
});

// describe("TwitterBot API last10Likes method", () => {
//   it("shoud return emma radacanus last 10 liked tweets when we input ID", async () => {
//     axios.get.mockResolvedValue(EMMA_DATA);
//     const user = await new TwitterBot().last10Likes();
//     expect(user.data).toEqual("tweet");
//   });
//   it("should throw an error if the API call fails", async () => {
//     axios.get.mockRejectedValue(new Error());
//     const bot = new TwitterBot();
//     await expect(bot.last10Likes()).rejects.toThrow(
//       "Something went wrong when fetching liked tweets"
//     );
//   });
// });
describe("TwitterBot API returnFriends method", () => {
  it("should return barack obama friends", async () => {
    axios.get.mockResolvedValue(OBAMA_DATA);
    const user = await new TwitterBot().returnFriends();
    expect(user.friends).toEqual(75);
  });
  it("should throw an error if the API call fails", async () => {
    axios.get.mockRejectedValue(new Error());
    const bot = new TwitterBot();
    await expect(bot.returnFriends()).rejects.toThrow(
      "Something went wrong when fetching friends list"
    );
  });
});
