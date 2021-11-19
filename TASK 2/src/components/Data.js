import React from 'react'
import DataCard from './DataCard'

const Data = (props) => {
    return (
        <div className="row">
                    {
                        props.data.map(element => {
                            return <div key={element.id} className="col-md-4 py-3 px-md-5">
                                <DataCard imgSrc={element.avatar} name={element.first_name+" "+element.last_name} email={element.email} id={element.id}/>
                            </div>
                        })
                    }
        </div>
    )
}

export default Data
