import React, { useCallback, useRef } from 'react'
import { DataContext } from '../Context/Data.context'
const Mainpage = () => {
    const{data, loading, error,fetchMoreData} = useContext(DataContext) // get data and functions from context
    const observer = useRef(); //ref for observer

    //call back function to handle intersection observer
    const lastDataElementref = useCallback(
        (node)=>{
            if (loading) return; //if loading, do nothimg
            if (observer.current) observer.current.disconnect(); //disconnect former observer
            observer.current = new IntersectionObserver((entries)=>{
                if (entries[0].isIntersecting){
                    fetchMoreData(); //fetch more data if last elemnt is in view
                }
            });
            if(node) observer.current.observe(node); //observe the new nodw
        }, [loading,fetchMoreData]);
  return (
    <div>{
        data.map((item,index)=>{
            const{name, genre, etc}= item; //destructure item props

            //attach ref bto the last data element
            if(index === data.length -1 ){
                return(
                    <div ref={lastDataElementref}
                    key={index}
                    style={{border: '1px solid ', padding:'i6px', margin:'16px 0'}}> 
                    <img  src='' alt=''/>
                    <h3> {name}</h3>
                    <p>{genre}</p>
                    </div>
                );
            }
        })};
        {
            loading && <p> Loading ...</p> //show loader
        };
        {
            error && <p> Error: {error.message}</p> //show error message
        }
        </div>
  )
}

export default Mainpage