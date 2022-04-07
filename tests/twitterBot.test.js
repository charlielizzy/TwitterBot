import TwitterBot from '../classes/TwitterBot.js';
import axios from 'axios';
import { OBAMA_DATA } from '../mocks/twitterBot.js';

jest.mock("axios")

describe('TwitterBot API fetchTwitterAccount method', () => {
  it.only('should return barack obama information', async () => {
    axios.get.mockResolvedValue(OBAMA_DATA);
    const account = await new TwitterBot().fetchTwitterAccount();
    expect(account.name).toEqual('Barack Obama');
  })

  it('should throw an error if the API call fails', async () => {
    axios.get.mockRejectedValue(new Error());
    const bot = new TwitterBot();
    await expect(bot.fetchTwitterAccount()).rejects.toThrow("Something went wrong");
  })
})

