import React from "react";

type FormPropsType = {
    city: string
    setCity: (value: (((prevState: string) => string) | string)) => void
    getWeather: (e: React.FormEvent<HTMLFormElement>) => void
}

export const Form: React.FC<FormPropsType> = ({city, setCity, getWeather}) => {
    return (
        <form onSubmit={getWeather}>
            <input type="text" name="city" placeholder="都市名" onChange={e => setCity(e.target.value)} value={city}/>
            <button type="submit">Get Weather</button>
        </form>
    )
}