import axios from 'axios';
const KEY = 'AIzaSyDlxMOTlSOL2KnPSPMQusDNTY4D3XM_O2A';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})