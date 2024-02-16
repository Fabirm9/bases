const axios = require('axios')



const httpClient = {
    get: async(url) =>{
        // const res = await fetch(url);
        // return await res.json();
        const {data} = await axios.get(url)
        //console.log(data);
        return data;

    },

    post: async() =>{},

};


module.exports= { httpClient }