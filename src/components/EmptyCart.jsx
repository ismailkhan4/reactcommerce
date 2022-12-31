import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <div className="container-fluid  mt-100">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body cart">
                            <div className="col-sm-12 empty-cart-cls text-center">
                                <img src="https://i.imgur.com/dCdflKN.png" width="130" height="130" className="img-fluid mb-4 mr-3" alt='No Item in Cart' />
                                <h3><strong>Your Cart is Empty</strong></h3>
                                <h4>We've added some cool stuff to the shop. Go Get Them :)</h4>
                                <Link to='/items' className="btn btn-primary cart-btn-transform m-3" data-abc="true">continue shopping</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmptyCart