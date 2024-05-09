import React from "react";
import '../../Admin/design/css/main.min.css'
import '../../Admin/design/fonts/style.css'
import '../../Admin/design/css/bootstrap.min.css'
import './AddWoman.scss'


const AddWoman = () => {

    return(
        <>
        <div className="add-woman-container">


  <div className="container-fluid">

    <div className="main-container">
      <div className="page-header">

           <h1> Add Womans Details</h1>

        
      </div>
      <div className="content-wrapper">
        <div className="row gutters">
          <div className="col-lg-3 col-sm-12">
            <div className="card">
              <div className="card-body">
                <div className="doctor-profile">
                  <div className="doctor-thumb">
                    <img
                      alt="Smart Admin"
                      src="img/user6.png"
                    />
                  </div>
                  <div className="input-group mb-3">
                    <div className="custom-file">
                      <input
                        aria-describedby="changeProfile"
                        className="custom-file-input"
                        id="changeProfile"
                        type="file"
                      />
                      <label
                        className="custom-file-label"
                        htmlFor="changeProfile"
                      >
                        Update Image
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-sm-12">
            <div className="card">
              <div className="card-header">
                <div className="card-title">
                  Womans Details
                </div>
              </div>
              <div className="card-body">
                <div className="row gutters">
                  <div className="col-sm-4 col-12">
                    <div className="form-group">
                      <label htmlFor="fullName">
                        Full Name
                      </label>
                      <input
                        className="form-control"
                        id="fullName"
                        placeholder="Srinu"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 col-12">
                    <div className="form-group">
                      <label htmlFor="patID">
                        Create ID
                      </label>
                      <input
                        className="form-control"
                        id="patID"
                        placeholder="ID"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 col-12">
                    <div className="form-group">
                      <label htmlFor="agE">
                        Age
                      </label>
                      <input
                        className="form-control"
                        id="agE"
                        placeholder="Age"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 col-12">
                    <div className="form-group">
                      <label htmlFor="phoNe">
                        Phone
                      </label>
                      <input
                        className="form-control"
                        id="phoNe"
                        placeholder="Phone"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="col-sm-4 col-12">
                    <div className="form-group">
                      <label htmlFor="inputEmail">
                        Email
                      </label>
                      <input
                        className="form-control"
                        id="inputEmail"
                        placeholder="medical@bm.com"
                        type="email"
                      />
                    </div>
                  </div>
                  <div
                    className="col-sm-6"
                    col-12 =""
                  >
                    <div className="form-group">
                      <label htmlFor="addreSs">
                        Current Address
                      </label>
                      <textarea
                        className="form-control"
                        id="addreSs"
                        placeholder="Current Address"
                        rows="3"
                      />
                    </div>
                  </div>
                  <div
                    className="col-sm-6"
                    col-12=""
                  >
                    <div className="form-group">
                      <label htmlFor="biO">
                        Patient History
                      </label>
                      <textarea
                        className="form-control"
                        id="biO"
                        placeholder="Patient History"
                        rows="3"
                      />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="text-right">
                      <button className="btn btn-primary">
                        Create Profile
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer className="main-footer">
      © Bootstrap Gallery 2023
    </footer>
  </div>
</div>
        
        </>
    )

}
export default AddWoman