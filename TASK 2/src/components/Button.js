import {React, useState} from 'react'
import "./Button.css"
import Data from './Data';
import DataCard from './DataCard';

const Button = (props) => {

    const [data, setData] = useState([]);

    let showData=async ()=>{
        const api="https://reqres.in/api/users?page=1";
        let result= await fetch(api);
        let parseData=  await result.json();
        setData(parseData['data']);
    }
    

    return (
        <>
            <div className="wrapper">
                <a className="button" onClick={showData}>{props.title}</a>
            </div>
            <Data data={data}/>
        </>
    )
}

export default Button
