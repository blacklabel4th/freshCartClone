import React from "react"

const Carousel = () => {
    return (
        <div className="line2">
            <body className="container">
                <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={3} aria-label="Slide 4" />
                    </div>
                    <div className="carousel-inner ">
                        <div className="carousel-item content-item  active" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/gg2.jpg')` }}>
                            <div className="carousel-caption  my-caption d-none d-md-block">
                                <p><span>Opening sales discount 50%</span></p>
                                <h1>First slide label</h1>
                                <h4>Some representative placeholder content for the first slide.</h4>
                                <button className="btn btn-secondary">Shop now</button>
                            </div>
                        </div>
                        <div className="carousel-item content-item" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/gg2.jpg')` }} >
                            <div className="carousel-caption my-caption d-none d-md-block">
                                <p><span>Opening sales discount 50%</span></p>
                                <h1>Second slide label</h1>
                                <h4>Some representative placeholder content for the second slide.</h4>
                                <button className="btn btn-secondary">Shop now</button>
                            </div>
                        </div>
                        <div className="carousel-item content-item" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/gg2.jpg')` }} >
                            <div className="carousel-caption my-caption d-none d-md-block">
                                <p><span>Opening sales discount 50%</span></p>
                                <h1>Third slide label</h1>
                                <h4>Some representative placeholder content for the third slide.</h4>
                                <button className="btn btn-secondary">Shop now</button>
                            </div>
                        </div>
                        <div className="carousel-item content-item" style={{ backgroundImage: `url('${process.env.PUBLIC_URL}/gg2.jpg')` }} >
                            <div className="carousel-caption my-caption d-none d-md-block">
                                <p><span>Opening sales discount 50%</span></p>
                                <h1>Third slide label</h1>
                                <h4>Some representative placeholder content for the third slide.</h4>
                                <button className="btn btn-secondary">Shop now</button>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </body>
        </div>
    );
}

export default Carousel
