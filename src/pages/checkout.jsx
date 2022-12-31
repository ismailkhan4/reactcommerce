import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartItem, CartSummary, EmptyCart, Layout } from '../components'
import { Cartcontext } from '../context/Context';
import './style.css'

const Checkout = () => {
  const Globalstate = useContext(Cartcontext);
  const state = Globalstate.state;
  return (
    <Layout>
      <section className="h-100 h-custom">
        {state.length > 0 ?
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12">
                <div className="card card-registration card-registration-2" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-0">
                    <div className="row g-0">
                      <div className="col-lg-8">
                        <div className="p-5">
                          <div className="d-flex justify-content-between align-items-center mb-5">
                            <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                            <h6 className="mb-0 text-muted">3 items</h6>
                          </div>
                          <hr className="my-4" />

                          <CartItem />

                          <hr className="my-4" />

                          <div className="pt-5">
                            <h6 className="mb-0"><Link to='/items' className="text-body"><i
                              className="fas fa-long-arrow-alt-left me-2"></i>Back to shop</Link></h6>
                          </div>
                        </div>
                      </div>
                      <CartSummary />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> :
          <EmptyCart />
        }
      </section>
    </Layout >
  )
}

export default Checkout