import axios from 'axios';

const KEY = 'AIzaSyBb-X3HuoGqDjW8JZY0-2Ac4XBpswCVWYU';
// Variable written in all caps indicates that it should NOT be changed. 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: { 
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY    
    }
});