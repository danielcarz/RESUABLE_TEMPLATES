import React from "react";

//custom
import { useGetInfoFetch } from "./02-GetInfoFetch";

export const useGetInfoByProp = (prop) => {
    const validProps = ['Chicken', 'Beef']

    const {info} = useGetInfoFetch();


    if(!validProps.includes(prop)){
        throw Error (`${prop} is not  valid`)
    }

    return info.filter((infoProp => infoProp.strCategory === prop))
}