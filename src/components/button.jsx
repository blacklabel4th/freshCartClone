import React from "react";

const button = () => {
  return (
    <div>
      <div
        className="card card-product "
        style={{ height: "13rem", width: "100%", border: "0px" }}
      >
        <div
          className="card-body "
          style={{
            borderRadius: "2px",
            backgroundSize: "cover",
            backgroundImage: `url('${process.env.PUBLIC_URL}/gg2.jpg')`,
          }}
        >
          <div
            style={{
              padding: "0px 50px",
              display: "flex",
              justifyContent: "center",
              height: "100%",
              flexDirection: "column",
            }}
          >
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a
              href="#"
              className="btn btn-primary"
              style={{ padding: "0.50rem 0.50rem", width: "150px" }}
            >
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default button;
