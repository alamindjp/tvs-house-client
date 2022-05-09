import React, { useEffect, useState } from 'react';

const useCollection = () => {
    const[collections, setCollections]=useState([]);
    useEffect(()=>{
        fetch('https://glacial-castle-51948.herokuapp.com/product')
        .then(res=>res.json())
        .then(data=>setCollections(data))
    },[])
    return [collections, setCollections]
};

export default useCollection;