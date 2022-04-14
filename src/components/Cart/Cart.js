import React from 'react';

const Cart = (props) => {
    const { name, id, img } = props.item;
    return (
        <div>
            <div classname="card" style="width: 18rem;">
                <img src={img} classname="card-img-top" alt="..." />
                <div classname="card-body">
                    <h5 classname="card-title">{name}</h5>
                    <p classname="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    {/* <a href="#" classname="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    );
};

export default Cart;