import axios from 'axios'

const baseUrl = 'https://api.themoviedb.org/3';
const ApiKey = '2748197bfe93f65dda4786ed5f52277a';

export const getAllTrending = async() =>{
    return await axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=2748197bfe93f65dda4786ed5f52277a');
}