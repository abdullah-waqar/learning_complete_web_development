import { useDispatch, useSelector } from "react-redux"
import {FetchData} from "./slicer1"
import { useEffect } from "react"


const CoinCreate = () => {

    const { data, loading, error } = useSelector( (state) => state.slice1 )
    
    const dispatch = useDispatch()


    useEffect(() => {
    
    dispatch(FetchData(5));
  }, [dispatch]);


    if (loading) return <p>Loading users...</p>;
    if (error) return <p>Error: {error}</p>;
    
    console.log(data)
    return (
    <div>
       <ul>
            {data.map((data) => (
                <li key={data.id}>{data.name}</li>
            ))}
    </ul>
    </div>
  )
}

export default CoinCreate