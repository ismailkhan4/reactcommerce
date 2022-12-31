import React, { useContext } from 'react'
import { Cartcontext } from '../context/Context';
import { formatCurrency } from '../utilities/formatCurrency';

const CartItem = () => {
    const Globalstate = useContext(Cartcontext);
    const state = Globalstate.state;
    const dispatch = Globalstate.dispatch;

    return (
        <>
            {state.map((item, index) => {
                return (
                    <div className="row mb-4 d-flex justify-content-between align-items-center" key={index}>
                        <div className="col-md-2 col-lg-2 col-xl-2">
                            <img
                                src={item.img}
                                className="img-fluid rounded-3" alt={item.name} />
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-3">
                            <h6 className="text-black mb-0">{item.name}</h6>
                        </div>

                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex align-items-center">
                            <button
                                className='btn btn-warning btn-sm w-25'
                                onClick={() => {
                                    if (item.quantity > 1) {
                                        dispatch({ type: "DECREASE", payload: item });
                                    } else {
                                        dispatch({ type: "REMOVE", payload: item });
                                    }
                                }}>
                                -
                            </button>

                            <button className='btn btn-light btn-sm w-25' disabled>{item.quantity}</button>

                            <button
                                className='btn btn-secondary btn-sm w-25'
                                onClick={() => dispatch({ type: "INCREASE", payload: item })}>
                                +
                            </button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                            <h6 className="mb-0">{formatCurrency(item.quantity * item.price)}</h6>
                        </div>
                        <div className="col-md-2 col-lg-2 col-xl-2 text-end">
                            <button
                                className='btn btn-danger btn-sm w-25'
                                onclick={() => dispatch({ type: "REMOVE", payload: item })}>
                                x
                            </button>
                        </div>
                    </div>
                )
            }
            )}
        </>

    )
}

export default CartItem