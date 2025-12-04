import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormPage() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    phone: "",
    countryCode: "",
    country: "",
    city: "",
    pan: "",
    aadhaar: ""
  });

  const [showPass, setShowPass] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.firstName.trim()) newErrors.firstName = "First Name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last Name is required";
    if (!form.username.trim()) newErrors.username = "Username is required";

    if (!form.email.includes("@")) newErrors.email = "Enter a valid email";

    if (form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!form.countryCode.trim())
      newErrors.countryCode = "Country code required";

    if (form.phone.length !== 10)
      newErrors.phone = "Phone number must be 10 digits";

    if (!form.country.trim()) newErrors.country = "Country required";
    if (!form.city.trim()) newErrors.city = "City required";

    if (form.pan.length !== 10)
      newErrors.pan = "PAN must be 10 characters";

    if (form.aadhaar.length !== 12)
      newErrors.aadhaar = "Aadhaar must be 12 digits";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      navigate("/details", { state: form });
    }
  };

  const isFormValid = Object.keys(errors).length === 0 &&
    Object.values(form).every((v) => v.trim().length > 0);

  return (
    <div className="container">
      <h2>React Registration Form</h2>

      <form onSubmit={handleSubmit}>
        {/** FIRST NAME */}
        <div className="input-group">
          <label>First Name</label>
          <input
            name="firstName"
            value={form.firstName}
            onChange={handleChange}
            className={errors.firstName ? "error" : ""}
          />
          {errors.firstName && <small>{errors.firstName}</small>}
        </div>

        {/** LAST NAME */}
        <div className="input-group">
          <label>Last Name</label>
          <input
            name="lastName"
            value={form.lastName}
            onChange={handleChange}
            className={errors.lastName ? "error" : ""}
          />
          {errors.lastName && <small>{errors.lastName}</small>}
        </div>

        {/** USERNAME */}
        <div className="input-group">
          <label>Username</label>
          <input
            name="username"
            value={form.username}
            onChange={handleChange}
            className={errors.username ? "error" : ""}
          />
          {errors.username && <small>{errors.username}</small>}
        </div>

        {/** EMAIL */}
        <div className="input-group">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {errors.email && <small>{errors.email}</small>}
        </div>

        {/** PASSWORD */}
        <div className="input-group">
          <label>Password</label>
          <div className="password-box">
            <input
              name="password"
              type={showPass ? "text" : "password"}
              value={form.password}
              onChange={handleChange}
              className={errors.password ? "error" : ""}
            />
            <button
              type="button"
              className="show-btn"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? "Hide" : "Show"}
            </button>
          </div>
          {errors.password && <small>{errors.password}</small>}
        </div>

        {/** PHONE */}
        <div className="input-group">
          <label>Country Code</label>
          <input
            name="countryCode"
            value={form.countryCode}
            onChange={handleChange}
            className={errors.countryCode ? "error" : ""}
          />
          {errors.countryCode && <small>{errors.countryCode}</small>}
        </div>

        <div className="input-group">
          <label>Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            className={errors.phone ? "error" : ""}
          />
          {errors.phone && <small>{errors.phone}</small>}
        </div>

        {/** COUNTRY */}
        <div className="input-group">
          <label>Country</label>
          <input
            name="country"
            value={form.country}
            onChange={handleChange}
            className={errors.country ? "error" : ""}
          />
          {errors.country && <small>{errors.country}</small>}
        </div>

        {/** CITY */}
        <div className="input-group">
          <label>City</label>
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            className={errors.city ? "error" : ""}
          />
          {errors.city && <small>{errors.city}</small>}
        </div>

        {/** PAN */}
        <div className="input-group">
          <label>PAN</label>
          <input
            name="pan"
            value={form.pan}
            onChange={handleChange}
            className={errors.pan ? "error" : ""}
          />
          {errors.pan && <small>{errors.pan}</small>}
        </div>

        {/** AADHAAR */}
        <div className="input-group">
          <label>Aadhaar</label>
          <input
            name="aadhaar"
            value={form.aadhaar}
            onChange={handleChange}
            className={errors.aadhaar ? "error" : ""}
          />
          {errors.aadhaar && <small>{errors.aadhaar}</small>}
        </div>

        <button className="submit-btn" disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormPage;
