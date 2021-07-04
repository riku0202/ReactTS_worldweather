import React from "react";

type ResultPropsType = {
    results: {
        country: string
        cityName: string
        temperature: string
        conditionText: string
        icon: string
    }
}

export const Results: React.FC<ResultPropsType> = ({results}) => {
    const {cityName, country, temperature, conditionText, icon} = results


    return (
        <>
            {cityName && <div>cityName</div>}
            {country && <div>country</div>}
            {temperature && <div>temperature</div>}
            {conditionText &&
            <div>
                <img src={icon} alt="icon"/>
                <span>{conditionText}</span>
            </div>
            }
        </>
    )
}