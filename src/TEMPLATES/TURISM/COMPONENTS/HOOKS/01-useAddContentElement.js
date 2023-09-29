import React, {useState} from "react";

export const useContentElement = () => {

    const [displayed, setDisplay] = useState(false);
    const [data, setData] = useState('')

    const onCreateElement = (button) => {
            //console.log('onCreate element has been executed');

        
        console.log(displayed)

        switch(button) {
            case "button1":
                setDisplay(true)
                setData("button1")

                break;
               
            
            case "button2":
                setDisplay(true)
                setData("button2")

                break;
                

            default:
                return null;
        }
    }

    return{
        onCreateElement,
        displayed,
        data
    }
    
}