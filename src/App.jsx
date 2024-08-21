import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

function Empform() {
  const [initdata, setinitdata] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    birthDate: "",
    email: "",
    phoneNumber: "",
    gender: "",
    startTime: "",
    endTime: "",
    jobPosition: "",
    team: "",
    designation: "",
    billableHours: "",
    isBillable: false,
  });

  useEffect(() => {
    console.log("Form Data Updated:", initdata);
  }, [initdata]
);

  const handleChanges = (e) => {
    const { name, value, type, checked } = e.target;
    setinitdata({
      ...initdata,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const submitCheck = (e) => {
    e.preventDefault();
    alert("Form Submitted")
    console.log("Form Submitted", initdata);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <form onSubmit={submitCheck} className="employee-form">
        {}
        <div className="row">
          <div className="col-md-4 form-group">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={initdata.firstName}
              onChange={handleChanges}
              className="form-control"
              required
            />
          </div>

          <div className="col-md-4 form-group">
            <label>Middle Name</label>
            <input
              type="text"
              name="middleName"
              value={initdata.middleName}
              onChange={handleChanges}
              className="form-control"
            />
          </div>

          <div className="col-md-4 form-group">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={initdata.lastName}
              onChange={handleChanges}
              className="form-control"
              required
            />
          </div>
        </div>

        {}
        <div className="row">
          <div className="col-md-4 form-group">
            <label>Birth Date</label>
            <input
              type="date"
              name="birthDate"
              value={initdata.birthDate}
              onChange={handleChanges}
              className="form-control"
              required
            />
          </div>

          <div className="col-md-4 form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={initdata.email}
              onChange={handleChanges}
              className="form-control"
              required
            />
          </div>

          <div className="col-md-4 form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              value={initdata.phoneNumber}
              onChange={handleChanges}
              className="form-control"
              required
            />
          </div>
        </div>

        {}
        <div className="row">
          <div className="col-md-4 form-group">
            <label>Gender</label>
            <select
              name="gender"
              value={initdata.gender}
              onChange={handleChanges}
              className="form-control"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="col-md-4 form-group">
            <label>Start Time</label>
            <input
              type="time"
              name="startTime"
              value={initdata.startTime}
              onChange={handleChanges}
              className="form-control"
              required
            />
          </div>

          <div className="col-md-4 form-group">
            <label>End Time</label>
            <input
              type="time"
              name="endTime"
              value={initdata.endTime}
              onChange={handleChanges}
              className="form-control"
              required
            />
          </div>
        </div>

        {}
        <div className="row">
          <div className="col-md-4 form-group">
            <label>Job Position</label>
            <input
              type="text"
              name="jobPosition"
              value={initdata.jobPosition}
              onChange={handleChanges}
              className="form-control"
              required
            />
          </div>

          <div className="col-md-4 form-group">
            <label>Select Teams</label>
            <select
              name="team"
              value={initdata.team}
              onChange={handleChanges}
              className="form-control"
              required
            >
              <option value="">Select Team</option>
              <option value="team1">Team 1</option>
              <option value="team2">Team 2</option>
            </select>
          </div>

          <div className="col-md-4 form-group">
            <label>Select Designation</label>
            <select
              name="designation"
              value={initdata.designation}
              onChange={handleChanges}
              className="form-control"
              required
            >
              <option value="">Select Designation</option>
              <option value="junior">Junior</option>
              <option value="senior">Senior</option>
            </select>
          </div>
        </div>

        {}
        <div className="row">
          <div className="col-md-4 form-group">
            <label>Billable Hours</label>
            <input
              type="number"
              name="billableHours"
              value={initdata.billableHours}
              onChange={handleChanges}
              className="form-control"
              required
              min="0"
            />
          </div>

          <div className="col-md-4 form-group">
            <label>Is Billable?</label>
            <div className="form-check">
              <input
                type="checkbox"
                name="isBillable"
                checked={initdata.isBillable}
                onChange={handleChanges}
                className="form-check-input"
              />
              <label className="form-check-label">Yes</label>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-button btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
}
export default Empform;
