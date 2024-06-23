import React, { useCallback, useState,useEffect } from 'react'
//custom hook to fetch movie from api
function useFetchData(query) {
    const [data, setData]= useState([]);//stste for data
    const [page, setpage] = useState(2); // state for pagination
    const [loading, setLoading] =useState(false);//state for loader
    const [error, setError]= useState(null); // stste for error handling

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: process.env.MOVIE_DB_ACCESSTOKEN
        }
      };
    //function to fetch data
   // 'https://api.themoviedb.org/3/movie/changes?page=1
    const fetchData = useCallback(
        async ()=>{
            setLoading(true) //manipulate loader
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=1?api_key={process.env.MOVEDB_AUTH_TOKEN}lists?page=1`
                    ,options);
                const result = await response.json(); //convert response to json
                
           setData((prevData)=>[...prevData, result]); //set response to state
           
            }catch(err){
                setError(err)
            }
        }, [query, page]);

        //fetch data when data or quey changes 
        useEffect(()=>{
            fetchData()
        }, [fetchData]);

        //fetch more data (infinite scrolling)
        const fetchMoreData = ()=> setPage((prevPage) => prevPage + 1);
  return (
   {
    data, loading, error, fetchMoreData
   }
  )
}

export default useFetchData