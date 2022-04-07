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

}



