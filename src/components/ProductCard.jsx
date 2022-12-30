import React, { useContext } from 'react'
import { formatCurrency } from '../utilities/formatCurrency'
import { Cartcontext } from '../context/Context'
import { ToastContainer, toast } from 'react-toastify';

const ProductCard = ({ product }) => {
    const Globalstate = useContext(Cartcontext);
    const dispatch = Globalstate.dispatch;

    const notify = () => toast.success('Addded to cart successfully.', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
    const handleAddToCart = (item) => {
        notify()
        dispatch({ type: "ADD", payload: item })
    }
    return (
        <>
            {product.map((item, index) => {
                item.quantity = 1;
                return (
                    <div className="col" key={index} >
                        <div className="card h-70">
                            <img src={item.img} className="card-img-top h-10" style={{ height: 300 }} />
                            <div className="card-body">
                                <h5 className="card-title text-center">{item.name}</h5>
                                <h5 className='text-center'>Price:<span className='fs-3 fw-bold text-success'>{formatCurrency(item.price)}</span></h5>
                            </div>
                            <div className="card-footer d-grid gap-2">
                                <button className='btn btn-dark btn-block' onClick={() => handleAddToCart(item)}>Shop Now</button>
                            </div>
                        </div>
                    </div>
                )
            })}
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </>
    )
}

export default ProductCard