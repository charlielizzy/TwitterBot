import TwitterBot from "../classes/TwitterBot.js";
import axios from "axios";
import { OBAMA_DATA, OBAMA_TWEETS, EMMA_DATA } from "../mocks/twitterBot.js";

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
    axios.get.mockResolvedValue(OBAMA_TWEETS);
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

describe("TwitterBot API last10Likes method", () => {
  it("shoud return emma radacanus last 10 liked tweets when we input ID", async () => {
    axios.get.mockResolvedValue(EMMA_DATA);
    const user = await new TwitterBot().last10Likes();
    expect(user.data).toEqual("tweet");
  });
  it("should throw an error if the API call fails", async () => {
    axios.get.mockRejectedValue(new Error());
    const bot = new TwitterBot();
    await expect(bot.last10Likes()).rejects.toThrow(
      "Something went wrong when fetching liked tweets"
    );
  });
});

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

describe("TwitterBot API postRetweet method", () => {
  it("should return retweeted as true", async () => {
    axios.get.mockResolvedValue(OBAMA_TWEETS);
    const success = await new TwitterBot().postRetweet();
    expect(data.retweeted).toEqual(true);
  });
  it("should throw an error if the API call fails", async () => {
    axios.get.mockRejectedValue(new Error());
    const bot = new TwitterBot();
    await expect(bot.postRetweet()).rejects.toThrow("Cannot retweet");
  });
});

describe("TwitterBot API postLike method", () => {
  it("should return liked as true", async () => {
    axios.get.mockResolvedValue(OBAMA_TWEETS);
    const success = await new TwitterBot().postRetweet();
    expect(success.data.liked).toEqual(true);
  });
  it("should throw an error if the API call fails", async () => {
    axios.get.mockRejectedValue(new Error());
    const bot = new TwitterBot();
    await expect(bot.postLike()).rejects.toThrow("Cannot like");
  });
});

describe("TwitterBot API postTweet method", () => {
  it("should return a value for id", async () => {
    axios.get.mockResolvedValue(MY_TWEETS);
    const success = await new TwitterBot().postTweet();
    expect(success.data.id).not.toBeNull();
  });
  it("should throw an error if the API call fails", async () => {
    axios.get.mockRejectedValue(new Error());
    const bot = new TwitterBot();
    await expect(bot.postTweet()).rejects.toThrow("Cannot post tweet");
  });
});

describe("TwitterBot API deleteTweet method", () => {
  it("should return deleted as true", async () => {
    axios.get.mockResolvedValue(MY_TWEETS);
    const success = await new TwitterBot().deleteTweet();
    expect(success.data.deleted).toEqual(true);
  });
  it("should throw an error if the API call fails", async () => {
    axios.get.mockRejectedValue(new Error());
    const bot = new TwitterBot();
    await expect(bot.deleteTweet()).rejects.toThrow("Cannot delete tweet");
  });
});

describe("TwitterBot API deleteLike method", () => {
  it("should return liked as false", async () => {
    axios.get.mockResolvedValue(OBAMA_TWEETS);
    const success = await new TwitterBot().deleteLike();
    expect(success.data.liked).toEqual(false);
  });
  it("should throw an error if the API call fails", async () => {
    axios.get.mockRejectedValue(new Error());
    const bot = new TwitterBot();
    await expect(bot.deleteLike()).rejects.toThrow("Cannot remove like");
  });
});

describe("TwitterBot API deleteRetweet method", () => {
  it("should return retweeted as false", async () => {
    axios.get.mockResolvedValue(OBAMA_TWEETS);
    const success = await new TwitterBot().deleteRetweet();
    expect(success.data.retweeted).toEqual(false);
  });
  it("should throw an error if the API call fails", async () => {
    axios.get.mockRejectedValue(new Error());
    const bot = new TwitterBot();
    await expect(bot.deleteRetweet()).rejects.toThrow("Cannot remove retweet");
  });
});
