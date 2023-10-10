import React, { useEffect, useState } from "react";

//fetchs
//Free meals
import { getFetchInfo } from "./FETCH/01-FreeMealApi";

export const useGetInfoFetch = () => {

    const [info, setInfo] = useState([])

    const getData = async() => {
        const data = await getFetchInfo();
        setInfo(data)

    }

    useEffect(() => {
        getData()
    }, [])

    return{
        info
    }
}