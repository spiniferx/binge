import axios from 'axios'

// const baseUrl = 'https://api.themoviedb.org/3';
// const ApiKey = '2748197bfe93f65dda4786ed5f52277a';

export const getAllTrending = async() =>{
    let data = {};
    await //axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=2748197bfe93f65dda4786ed5f52277a');
    axios.get('https://api.themoviedb.org/3/trending/all/day?api_key=2748197bfe93f65dda4786ed5f52277a')
    .then((response) => {
    data = response.data;
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  });
   console.log(data,"movie ka data");
   return data;

}