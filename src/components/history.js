import React, { useState } from "react";

function History() {
  return (
    <div>
      <div className="container">
        <hr></hr>
        <p className="display">History:</p>
        <div className="justify-content-center">
          <button className="btn history">
            <span>1 EGP = 0.063634 USD</span>
          </button>
          <button className="btn history">
            <span>1 EGP = 0.063634 USD</span>
          </button>
          <button className="btn history">
            <span>1 EGP = 0.063634 USD</span>
          </button>
          <button className="btn history">
            <span>1 EGP = 0.063634 USD</span>
          </button>
        </div>
      </div>
      <div className="container">
        <div className="form-inline justify-content-center mb-3">
          <button className="btn col-sm-2 btn-success">Clear</button>
        </div>
      </div>
    </div>
  );
}

export default History;
