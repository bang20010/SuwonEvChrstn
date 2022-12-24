import React, { useState, useEffect } from 'react';

const ApiProvider = () => {
   const [posts, setPosts] = useState([]);
   const url : String = 'http://apis.data.go.kr/3740000/suwonEvChrstn/getdatalist?';
   const encodingKey : String = 'fz5Hm9lLf6rINuNGkSXXWbyxKNTGyJh8sbloH5kVc91wa3vIuSP%2FpvDXp8K1ycamW1k6TLsiAuV0pS3cwwW1YQ%3D%3D';
   const decodingKey : String = 'fz5Hm9lLf6rINuNGkSXXWbyxKNTGyJh8sbloH5kVc91wa3vIuSP/pvDXp8K1ycamW1k6TLsiAuV0pS3cwwW1YQ==';
   const type : String = 'json';
   const sortKey  : String = 'chrstnType';
   const filterKey : String = 'chrstnType';
   const filterValues : String = 'DC콤보'
   var numOfRows : String = '0';
   const numNO : String = '10';

   useEffect(() => {
      fetch(`${url}/serviceKey=${sortKey}&type=${type}&sortKey=${sortKey}&filterKey=${filterKey}&filterValues=${filterValues}&numOfRows=${numOfRows}&numNO=${numNO}`)
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
