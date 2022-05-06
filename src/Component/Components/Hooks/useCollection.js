import React, { useEffect, useState } from 'react';

const useCollection = () => {
    const[collections, setCollections]=useState([]);
    useEffect(()=>{
        fetch('fake.json')
        .then(res=>res.json())
        .then(data=>setCollections(data))
    },[])
    return [collections, setCollections]
};

export default useCollection;