import axios from 'axios';

const KEY = 'AIzaSyBrLcZFdt4ShUikEns5G9vHUiVCcx69Cvw';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
