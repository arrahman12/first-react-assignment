import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


import Alldata from "../Alldata/Alldata";
import data from '../data/data.json';
import Cart from "../Cart/Cart";


const Courses = () => {

    const [Data,setData] = useState(data);
    const [cart,setCart] = useState([]);

    const handleClick = (Data)=>{
        const newCart = [...cart,Data];
        setCart(newCart);
    }

    return (
        <div className="container">
        <div className="row">

                <div className="col-8">
                    {
                        Data.map(d=><Alldata handleClick={handleClick} courses={d}></Alldata>)
                    }
                </div>


            <div className="col-4">

                <Cart cart={cart}></Cart>

            </div>
        </div>
        </div>
    );
};

export default Courses;
