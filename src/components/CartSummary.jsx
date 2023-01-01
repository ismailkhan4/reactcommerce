import React, { useContext } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import { Cartcontext } from '../context/Context';
import { formatCurrency } from '../utilities/formatCurrency';

const CartSummary = () => {
    const Globalstate = useContext(Cartcontext);
    const state = Globalstate.state;
    const dispatch = Globalstate.dispatch;

    const total = state.reduce((total, item) => {
        return (total + item.price * item.quantity)
    }, 0);
    const notify = () => toast.success('Thank you for your Shopping! Your order is on the way 🚀', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const handleCheckout = () => {
        notify()
        setTimeout(() => {
            dispatch({ type: "CLEARCART" })
        }, 3000);
    }
    return (
        <div className="col-lg-4 bg-grey">
            <div className="p-5">
                <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>

                <hr className="my-4" />

                <div className="d-flex justify-content-between mb-5">
                    <h5 className="text-uppercase">Total price</h5>
                    <h5>{formatCurrency(total)}</h5>
                </div>

                <hr className='my-4' />

                <button type="button" onClick={handleCheckout} className="btn btn-dark btn-block btn-lg"
                    data-mdb-ripple-color="dark">Checkout</button>

                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
                />

            </div>
        </div>
    )
}

export default CartSummary