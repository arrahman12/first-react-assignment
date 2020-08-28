import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Alldata = (props) => {
    const {courseName,instructor,enrolled,price} = props.courses;
    return (
        <div>
            <div className="card" style={{width: "18rem"}} >
                <div className="card-body">
                    <h1 className="card-title">{courseName}</h1>
                    <h4 className="card-text">by {instructor}</h4>
                    <p>enrolled {enrolled} person</p>
                    <p>$ {price}</p>
                    <a href="#" onClick={()=>props.handleClick(props.courses)} className="btn btn-primary">Enroll this course</a>
                </div>
            </div>
        </div>
    );
};

export default Alldata;
