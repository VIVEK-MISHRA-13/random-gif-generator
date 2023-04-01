import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
const useGif = (tag) =>{
    const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
    const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    const randUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const [gif,setGif] = useState('');
    const [loading,setLoading] = useState('false');
    
   

    async function fetchData(){
        setLoading(true);
       

       const {data} = await axios.get(tag ? tagUrl : randUrl );
       const imageSource = data.data.images.downsized_large.url;

    //    console.log(imageSource);
       setGif(imageSource);
       setLoading(false);

    }

    useEffect(()=>{
        fetchData();
    },[])

    return{gif,loading,fetchData};
}
export default useGif;