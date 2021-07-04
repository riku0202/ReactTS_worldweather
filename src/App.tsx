import React, {useState} from 'react';
import {Title} from "./components/Title";
import {Form} from "./components/Form";
import {Results} from "./components/Results";
import {Loading} from "./components/Loading";

type ResultsStateType = {
    country: string
    cityName: string
    temperature: string
    conditionText: string
    icon: string
}

export const App: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const [city, setCity] = useState<string>("")
    const [results, setResults] = useState<ResultsStateType>({
        country: "",
        cityName: "",
        temperature: "",
        conditionText: "",
        icon: ""
    })
    const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)
        fetch(`http://api.weatherapi.com/v1/current.json?key=a4f5798e118c4f538e5233258210307&q=${city}&aqi=no`)
            .then(res => res.json())
            .then(data => {
                setResults({
                    country: data.location.country,
                    cityName: data.location.name,
                    temperature: data.current.temp_c,
                    conditionText: data.current.condition.text,
                    icon: data.current.condition.icon
                })
                setCity("")
                setLoading(false)
            })
            .catch(err => alert("エラーが発生しました。"))
    }
    return (
        <div>
            <Title/>
            <Form setCity={setCity} getWeather={getWeather} city={city}/>
            <Results results={results}/>
            {loading ? <Loading/> : <Results results={results}/>}
        </div>
    )
}