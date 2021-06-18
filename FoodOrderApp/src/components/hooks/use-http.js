import axios from "axios"
import { useCallback, useState } from "react"

const useHttp = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const sendRequest = useCallback(async (reqConfig, applyData) => {
        setIsLoading(true)
        const { url, method, data } = { ...reqConfig }
        try {
            const response = await axios({
                method: method,
                url: url,
                data: data
            })
            if (response.status === 200) {
                applyData(data)
            } else {
                setError(new Error('Something wrong happened, please try again !'))
            }
        } catch (err) {
            setError(err)
        }
        setIsLoading(false)
    }, [])

    return { isLoading, error, sendRequest }
}

export default useHttp