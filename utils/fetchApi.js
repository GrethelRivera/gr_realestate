import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'



export const fetchApi = async (url) => {
    const response = await axios.get((url), {
headers: {
    'X-RapidAPI-Key': '7fd47c404fmsh1b14701720b3036p14b754jsn191668200fd2',
    'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  }
    })
}