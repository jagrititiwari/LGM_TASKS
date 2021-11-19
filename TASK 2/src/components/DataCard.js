import React from 'react'

const DataCard = (props) => {
    return (
        <>
            <div className="card" style={{width: "18rem",boxShadow: "0 5px 30px rgb(0 120 255 / 20%)"}}>
                <img src={props.imgSrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h4 className="card-title text-center">User{props.id}</h4>
                    <div className="d-flex align-content-center">
                        <h5>Name: </h5>
                        <p>{props.name}</p>
                    </div>
                    <div className="d-flex align-content-center">
                        <h5>Email: </h5>
                        <p>{props.email}</p>
                    </div>
                </div>
            </div>  
        </>
    )
}

export default DataCard
