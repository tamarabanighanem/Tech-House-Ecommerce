import { useEffect, useState } from 'react'
import axios from 'axios'

export default function useFetch(url) {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    
    useEffect(() => {
        setLoading(true)
        axios.get(url).then(response => {
            setData(response.data.products)
        }).catch((error) => {
            setError(error)
        }).finally(() => {
            setLoading(false)
        })
    }, [url]);
    
    return { data, loading, error }


}
