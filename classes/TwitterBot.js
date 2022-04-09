import axios from "axios";

export default class TwitterBot {
  constructor() {
    this.url = "https://api.twitter.com/2";
  }

  async fetchTwitterAccount(username = "BarackObama") {
    try {
      const response = await axios.get(
        `${this.url}/users/by/username/${username}?user.fields=location,public_metrics`,
        {
          headers: {
            Authorization: `Bearer ${process.env.API_BEARER_TOKEN}`,
          },
        }
      );
      const user = response.data;
      return user;
    } catch (error) {
      throw new Error("Something went wrong");
    }
  }

  async fetchSingleTweet(id = "1512159547842048011") {
    try {
      const response = await axios.get(`${this.url}/tweets/${id}`, {
        headers: {
          Authorization: `Bearer ${process.env.API_BEARER_TOKEN}`,
        },
      });
      const tweet = response.data;
      return tweet;
    } catch (error) {
      throw new Error("Something went wrong when fetching tweet");
    }
  }

  async fetchUserByID(id = "813286") {
    try {
      const response = await axios.get(`${this.url}/users/${id}`, {
        headers: {
          Authorization: `Bearer ${process.env.API_BEARER_TOKEN}`,
        },
      });
      const user = response.data;
      return user;
    } catch (error) {
      throw new Error("Something went wrong when fetching data from ID");
    }
  }
  // function works but test doesn't meta
  async last10Likes(id = "1197994613665083394") {
    try {
      const response = await axios.get(
        `${this.url}/users/${id}/liked_tweets?max_results=10`,
        {
          headers: {
            Authorization: `Bearer ${process.env.API_BEARER_TOKEN}`,
          },
        }
      );
      const tweets = response.data;
      return tweets;
    } catch (error) {
      throw new Error("Something went wrong when fetching liked tweets");
    }
  }

  // function doesn't work but test does url
  async fetchFriends(id = "813286") {
    try {
      const response = await axios.get(`${this.url}/users/`, {
        headers: {
          Authorization: `Bearer ${process.env.API_BEARER_TOKEN}`,
        },
      });
      const friends = response.data;
      return friends;
    } catch (error) {
      throw new Error("Something went wrong when fetching friends list");
    }
  }

  //not sure how to get response of retweeted = true / post tweet data
  async postRetweet(userid = "1216634215", tweetid = "1512159547842048011") {
    try {
      const response = await axios.post(
        `${this.url}/users/${userid}/retweets`,
        { tweet_id: `${tweetid}` },
        {
          headers: {
            Authorization: `Bearer ${process.env.API_BEARER_TOKEN}`,
          },
        }
      );
      const success = response.data;
      return success;
    } catch (error) {
      throw new Error("Cannot retweet");
    }
  }

  //same as above
  async postLike(userid = "1216634215", tweetid = "1512159547842048011") {
    try {
      const response = await axios.post(
        `${this.url}/users/${userid}/likes`,
        { tweet_id: `${tweetid}` },
        {
          headers: {
            Authorization: `Bearer ${process.env.API_BEARER_TOKEN}`,
          },
        }
      );
      const success = response.data;
      return success;
    } catch (error) {
      throw new Error("Cannot like");
    }
  }

  //same as above
  async postTweet(userid = "1216634215") {
    try {
      const response = await axios.post(
        `${this.url}/tweets`,
        { text: "hello world" },
        {
          headers: {
            Authorization: `Bearer ${process.env.API_BEARER_TOKEN}`,
          },
        }
      );
      const success = response.data;
      return success;
    } catch (error) {
      throw new Error("Cannot post tweet");
    }
  }

  //same as above
  async deleteTweet(tweetid = "1512739256074125316") {
    try {
      const response = await axios.delete(`${this.url}/tweets`, {
        headers: {
          Authorization: `Bearer ${process.env.API_BEARER_TOKEN}`,
        },
      });
      const success = response.data;
      return success;
    } catch (error) {
      throw new Error("Cannot delete tweet");
    }
  }

  //same as above
  async deleteLike(userid = "1216634215", tweetid = "1512159547842048011") {
    try {
      const response = await axios.delete(
        `${this.url}/users/${userid}/likes${tweetid}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.API_BEARER_TOKEN}`,
          },
        }
      );
      const success = response.data;
      return success;
    } catch (error) {
      throw new Error("Cannot remove like");
    }
  }

  //same as above
  async deleteRetweet(
    userid = "1216634215",
    source_tweetid = "1512159547842048011"
  ) {
    try {
      const response = await axios.delete(
        `${this.url}/users/${userid}/retweets/${source_tweetid}`,
        {
          headers: { Authorization: `Bearer ${process.env.API_BEARER_TOKEN}` },
        }
      );
      const success = response.data;
      return success;
    } catch (error) {
      throw new Error("Cannot remove retweet");
    }
  }
}
