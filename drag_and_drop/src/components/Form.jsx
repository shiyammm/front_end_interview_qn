import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = 'Username is required';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!emailPattern.test(formData.email)) {
      errors.email = 'Email is invalid';
    }
    if (!formData.password) {
      errors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = validate();
    setErrors(validation);

    if (Object.keys(validation).length === 0) {
      console.log(formData);
    }
  };

  const onChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setErrors((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="name">Enter Username</label>
        <br />
        <input
          name="name"
          onChange={onChange}
          value={formData.name}
          type="text"
          placeholder="Enter Username"
        />
        {errors.name && <p>{errors.name}</p>}
        <br />
        <label htmlFor="email">Enter Email</label>
        <br />
        <input
          name="email"
          onChange={onChange}
          value={formData.email}
          type="email"
          placeholder="Enter Email"
        />
        {errors.email && <p>{errors.email}</p>}
        <br />
        <label htmlFor="password">Enter Password</label>
        <br />
        <input
          name="password"
          onChange={onChange}
          value={formData.password}
          type="password"
          placeholder="Enter Password"
        />
        {errors.password && <p>{errors.password}</p>}
        <br />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Form;
