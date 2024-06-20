import React, { useCallback, useState } from 'react'
//custom hook to fetch movie from api
function useFetchData(query) {
    const [data, setData]= useState([]);//stste for data
    const [page, setpage] = useState(1); // state for pagination
    const [loading, setLoading] =useState(false);//state for loader
    const [error, setError]= useState(null); // stste for error handling

    //function to fetch data
    const fetchData = useCallback(
        async ()=>{
            setLoading(true) //manipulate loader
            try {
                const response = await fetch('api');
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