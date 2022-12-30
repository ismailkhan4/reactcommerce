import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Cartcontext } from '../context/Context';

const Navbar = () => {
    const {state} = useContext(Cartcontext);
    let cartQuantity = state.length;
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm fs-4 px-5">
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold fs-4" to='/'>ReactCommerce</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className='nav-link active' to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/items'>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/add-items'>Add Product</Link>
                        </li>
                    </ul>
                    <div className="buttons">
                        <Link className='btn btn-outline-dark' to='/checkout'>
                            Cart {cartQuantity}
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar