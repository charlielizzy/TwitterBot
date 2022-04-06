import axios from 'axios';

export default class TwitterBot {
  constructor() {
    this.url = 'https://api.twitter.com/2';
  }

  async fetchTwitterAccount(username = 'BarackObama') {
    try {
      const response = await axios.get(`${this.url}/users/by/username/${username}?user.fields=location,public_metrics`, {
        headers: {
          'Authorization': `Bearer ${process.env.API_BEARER_TOKEN}`
        }
      })
      const user = response.data;
      return user;
    } catch (error) {
      throw new Error('Something went wrong');
    }
  }

  async fetchLikedTweetsByAccount(id) {
    try {
      const response = await axios.get(`${this.url}/users/${id}/liked_tweets?max_results=10&expansions=author_id&user.fields=withheld`, {
        headers: {
          'Authorization': `Bearer ${process.env.API_BEARER_TOKEN}`
        }
      })
      const tweets = response.data;
      return tweets;
    } catch (err) {
      console.log(err);
      throw new Error('Something went wrong');
    }
  }

  async fetchAccountById(id) {
    try {
      const response = await axios.get(`${this.url}/users/${id}`, {
        headers: {
          'Authorization': `Bearer ${process.env.API_BEARER_TOKEN}`
        }
      })
      const user = response.data;
      return user;
    } catch (error) {
      throw new Error('Something went wrong');
    }
  }

}



