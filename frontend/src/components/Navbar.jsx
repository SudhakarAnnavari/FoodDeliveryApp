
import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
// import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
// import { useCart } from './ContextReducer';
import Modal from '../Modal';
import Cart from '../pages/Cart';
import { useCart } from './ContextReducer';

const Navbar = (props) => {
  const [cartView, setCartView] = useState(false)
  let navigate = useNavigate();
  const handleLogout = () => {
      localStorage.removeItem('authToken')
      localStorage.removeItem('username')

      navigate("/login")
  }
  let data = useCart()
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary ">
        <div className="container-fluid ">
          <Link className="navbar-brand fst-italic fs-3" to="/">
            Foodie
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto ">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-5"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              {localStorage.getItem("authToken") ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active fs-5"
                    aria-current="page"
                    to="/myorders"
                  >
                    MyOrders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className=" d-flex">
                <Link className="btn bg-white text-success mx-1" to="/login">
                  Login
                </Link>

                <Link className="btn bg-white text-success mx-1" to="/signup">
                  SignUp
                </Link>
              </div>
            ) : (
              <div>
                 <div className="btn bg-white text-success mx-2 " onClick={()=> {setCartView(true)}}>
                                    my cart
                                    <Badge bg="danger" pill  >
                                        {data.length}
                                    </Badge>
                                    
                                </div>

                                {cartView ? <Modal onClose={() => setCartView(false)}><Cart/></Modal> : ""}

                <div className="btn bg-white text-danger mx-1" onClick={handleLogout}>LogOut</div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
