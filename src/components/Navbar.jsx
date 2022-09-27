import React from "react";


const Navbar = () => {
    return (
        <div className="line1">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-white bg-white">
                    <a className="navbar-brand mb-2 brand" style={{ color: "black", fontWeight: "bold", fontSize: "25px" }} href="#">Fresh Cart</a>
                    <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
                        <form className="form-inline mb-2 form11 input-group">
                            <input className="form-control form12 mr-md-2" type="search" placeholder="Search for Products" aria-label="Search" />
                            <span className="input-group-text border1"><img className="pic1" src="gg1.png" alt="pic"></img></span>
                        </form>
                        <form className="mb-2">
                            <button className="btn btn-outline-secondary my-2 my-sm-0 " type="submit">Location</button>
                        </form>
                    </div>
                </nav>
                <nav className="navbar navbar-white bg-white navbar-expand-lg">
                    <div className="nav-item">
                        <button className="navbar-brand btn btn-success" style={{ color: "white", fontWeight: "bold", fontSize: "14px", padding: "10px 15px" }} type="button" >All Departments</button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarToggleExternalContent">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#" className="btn  dropdown-toggle" type="button">Home</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="btn  dropdown-toggle" type="button" >Shop</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="btn  dropdown-toggle" type="button" >Stores</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="btn  dropdown-toggle" type="button" >Mega Menu</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="btn  dropdown-toggle" type="button" >Pages</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="btn  dropdown-toggle" type="button" >Account</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="btn  dropdown-toggle" type="button" >Docs</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div >
    );
}


export default Navbar