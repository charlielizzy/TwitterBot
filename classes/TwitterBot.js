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
        header: {
          Authorization: `Bearer ${process.env.API_BEARER_TOKEN}`,
        },
      });
      const friends = response.data;
      return friends;
    } catch (error) {
      throw new Error("Something went wrong when fetching friends list");
    }
  }
}
