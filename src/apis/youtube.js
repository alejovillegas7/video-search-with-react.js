import axios from 'axios';

const KEY='AIzaSyCpKSo-QZeZP2ckR6y6s2ADkzOZywKDsvE';

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults : '5',
        key:KEY
    }
});