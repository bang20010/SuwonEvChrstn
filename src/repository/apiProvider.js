import React, { useState, useEffect } from 'react';

const ApiProvider = () => {
   const [posts, setPosts] = useState([]);
   const url = 'http://apis.data.go.kr/3740000/suwonEvChrstn/getdatalist?';
   const encodingKey = 'fz5Hm9lLf6rINuNGkSXXWbyxKNTGyJh8sbloH5kVc91wa3vIuSP%2FpvDXp8K1ycamW1k6TLsiAuV0pS3cwwW1YQ%3D%3D';
   const decodingKey = 'fz5Hm9lLf6rINuNGkSXXWbyxKNTGyJh8sbloH5kVc91wa3vIuSP/pvDXp8K1ycamW1k6TLsiAuV0pS3cwwW1YQ==';
   const numOfRows = 10;
   const type = 'json';

   useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, [])
}
