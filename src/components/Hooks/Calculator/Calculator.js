
import React, { useState } from "react";
import "./style.css";

const Calculator = () => {
  // input box  const [value, setValue] = useState("");
  const [value, setValue] = useState('')
  
  // C Button
  const backspace = () => {
    try {
        setValue(value.slice(0, -1))

    }catch(err){
        console.log(err)

    }
  }

  // = Button

  const calculate = () => {
    setValue(eval(value));

  }

//   % Button

  return (
    <div className="container bg-info">
      <div className="row">
        <div className="col-12 ">
          <h1 className="display-6 fw-bolder text-center text-success">
            CALCULATOR
          </h1>
          <hr className="line"></hr>
        </div>
      </div>

      {/* //cards */}

      <div className="row justify-content-center">
        <div className="col-md-4">
          <div class="card shadow mb-3">
            <div className="card-body text-primary">
              <input
                type="text"
                className="form-control form-control-lg mb-4 
                text-center bg-light fs-4 text-dark shadow"
                value={value}
              ></input>

              {/* // buttons */}

              <div className="row">
                <div className="col-3">
                  <button
                    className="btn btn-light text-success shadow p-4 fs-4"
                    value="1"
                    onClick={(e) => setValue(value + e.target.value)}
                  >
                    1
                  </button>
                </div>

                <div className="col-3">
                  <button
                    className="btn btn-light text-success shadow p-4 fs-4"
                    value="2"
                    onClick={(e) => setValue(value + e.target.value)}
                  >
                    2
                  </button>
                </div>

                <div className="col-3">
                  <button
                    className="btn btn-light text-success shadow p-4 fs-4"
                    value="3"
                    onClick={(e) => setValue(value + e.target.value)}
                  >
                    3
                  </button>
                </div>

                <div className="col-3">
                  <button
                    className="btn btn-light text-success shadow px-2 py-4 fs-4"
                    value="C"
                    onClick={() => backspace()}
                  >
                    C/CE
                  </button>
                </div>
              </div>

              {/* //second row buttons */}
              <div className="row ">
                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light text-success shadow p-4 fs-4"
                    value="4"
                    onClick={(e) => setValue(value + e.target.value)}
                  >
                    4
                  </button>
                </div>

                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light text-success shadow p-4 fs-4"
                    value="5"
                    onClick={(e) => setValue(value + e.target.value)}
                  >
                    5
                  </button>
                </div>

                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light text-success shadow p-4 fs-4"
                    value="6"
                    onClick={(e) => setValue(value + e.target.value)}
                  >
                    6
                  </button>
                </div>

                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light text-success shadow p-4 fs-4"
                    value="+"
                    onClick={(e) => setValue(value + e.target.value)}
                  >
                    +
                  </button>
                </div>
              </div>

              {/* //third row buttons */}

              <div className="row ">
                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light text-success shadow p-4 fs-4"
                    value="7"
                    onClick={(e) => setValue(value + e.target.value)}
                  >
                    7
                  </button>
                </div>

                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light text-success shadow p-4 fs-4"
                    value="8"
                    onClick={(e) => setValue(value + e.target.value)}
                  >
                    8
                  </button>
                </div>

                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light text-success shadow p-4 fs-4"
                    value="9"
                    onClick={(e) => setValue(value + e.target.value)}
                  >
                    9
                  </button>
                </div>

                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light text-success shadow p-4 fs-4"
                    value="*"
                    onClick={(e) => setValue(value + e.target.value)}
                  >
                    *
                  </button>
                </div>
              </div>

              {/* // fourth row buttons */}

              <div className="row ">
                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light text-success shadow p-4 fs-5"
                    value="."
                    onClick={(e) => setValue(value + e.target.value)}
                  >
                    .
                  </button>
                </div>

                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light text-success shadow p-4 fs-4"
                    value="0"
                    onClick={(e) => setValue(value + e.target.value)}
                  >
                    0
                  </button>
                </div>

                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light text-success shadow p-4 fs-4"
                    value="="
                    onClick={() => calculate()}
                  >
                    =
                  </button>
                </div>

                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light text-success shadow p-4 fs-4"
                    value="/"
                    onClick={(e) => setValue(value + e.target.value)}
                  >
                    /
                  </button>
                </div>


                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light text-success shadow p-4 fs-4"
                    value="-"
                    onClick={(e) => setValue(value + e.target.value)}
                  >
                    -
                  </button>
                  
                  
                </div>
            

                {/* //clear button */}
                <div className="col-6 mt-2">
                  <button
                    className="btn btn-light text-success shadow p-4 fs-4"
                    value="clear"
                    onClick={() => setValue('')}
                  >
                    Clear
                  </button>
                  
                  
                </div>
                
                

              </div>




            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
