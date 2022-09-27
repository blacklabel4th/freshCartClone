import React from "react"

const Daily = () => {
    return (
        <section className="mb-5">
            <div className="container">
                <div className="row">
                    <div className=" col-md-12 mb-6 ">
                        <h3 className="mb-3"> Daily Best Sells</h3>
                    </div>
                </div>
                <div className="row row-cols-lg-4 row-cols-sm-1 row-cols-md-2 g-4">
                    <div className="col-6 mb-3">
                        <div className="card card-product " style={{ height: '470px', width: '100%', border: '0px' }}>
                            <div className="card-body " style={{ borderRadius: "10px", backgroundSize: "cover", backgroundImage: `url('${process.env.PUBLIC_URL}/gg4.png')` }}>
                                <div>
                                    <h3 className="card-title fw-bold text-white">Special title treatment</h3>
                                    <p className="card-title text-white">With supporting text below as a natural lead-in to additional content.</p>
                                    <a href="#" className="btn btn-success" >Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mb-3">
                        <div className="card card-product " style={{ height: '470px', width: '100%' }}>
                            <div className="card-body ">
                                <div className="text-center  position-relative ">
                                    <img src="gg3.jpg" alt="pic" style={{ height: "150px" }} className=" mb-5 img-fluid" />
                                </div>
                                <div className="text-small mb-1">
                                    <a href="#!" className="text-decoration-none text-muted">
                                        <small>Snacks & Munchies</small>
                                    </a>
                                </div>
                                <h2 className="fs-6">
                                    <a href="#!" className="text-dark text-decoration-none">Onion Flavoured Potato</a>
                                </h2>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                        <span className="text-dark">$13</span>
                                        <span className="text-decoration-line-through text-muted">$18</span>
                                    </div>
                                    <div>
                                        <small>4.5</small>
                                    </div>
                                </div>
                                <div className="d-grid mt-2">
                                    <a href="#!" className="btn btn-success">Add To Cart</a>
                                </div>
                                <div className="d-flex justify-content-start text-center mt-3">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mb-3">
                        <div className="card card-product " style={{ height: '470px', width: '100%' }}>
                            <div className="card-body ">
                                <div className="text-center  position-relative ">
                                    <img src="gg3.jpg" alt="pic" style={{ height: "150px" }} className=" mb-5 img-fluid" />
                                </div>
                                <div className="text-small mb-1">
                                    <a href="#!" className="text-decoration-none text-muted">
                                        <small>Snacks & Munchies</small>
                                    </a>
                                </div>
                                <h2 className="fs-6">
                                    <a href="#!" className="text-dark text-decoration-none">Onion Flavoured Potato</a>
                                </h2>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                        <span className="text-dark">$13</span>
                                        <span className="text-decoration-line-through text-muted">$18</span>
                                    </div>
                                    <div>
                                        <small>4.5</small>
                                    </div>
                                </div>
                                <div className="d-grid mt-2">
                                    <a href="#!" className="btn btn-success">Add To Cart</a>
                                </div>
                                <div className="d-flex justify-content-start text-center mt-3">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mb-3">
                        <div className="card card-product " style={{ height: '470px', width: '100%' }}>
                            <div className="card-body ">
                                <div className="text-center  position-relative ">
                                    <img src="gg3.jpg" alt="pic" style={{ height: "150px" }} className=" mb-5 img-fluid" />
                                </div>
                                <div className="text-small mb-1">
                                    <a href="#!" className="text-decoration-none text-muted">
                                        <small>Snacks & Munchies</small>
                                    </a>
                                </div>
                                <h2 className="fs-6">
                                    <a href="#!" className="text-dark text-decoration-none">Onion Flavoured Potato</a>
                                </h2>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <div>
                                        <span className="text-dark">$13</span>
                                        <span className="text-decoration-line-through text-muted">$18</span>
                                    </div>
                                    <div>
                                        <small>4.5</small>
                                    </div>
                                </div>
                                <div className="d-grid mt-2">
                                    <a href="#!" className="btn btn-success">Add To Cart</a>
                                </div>
                                <div className="d-flex justify-content-start text-center mt-3">
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section >
    );
}

export default Daily 