import { useState } from "react";
import "./App.css";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [formValues, setFormValues] = useState({ username: "", email: "", password: "" });
  const [formErrors, setFormErrors] = useState([]);
  const [successMessage, setSuccessMessage] = useState(false);

  const validate = (values) => {
    const errors = [];
    if (!values.username) errors.push("Username is required!");
    if (!values.email) errors.push("Email is required!");
    if (!values.password) errors.push("Password is required!");
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);

    if (errors.length === 0) {
      // Display success message for 3 seconds
      setSuccessMessage(true);
      setTimeout(() => {
        setSuccessMessage(false);
      }, 3000);
    }

    // Automatically clear error boxes after 3 seconds
    if (errors.length > 0) {
      setTimeout(() => {
        setFormErrors([]);
      }, 3000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  return (
    <div className="login-container">
      {/* Success Message */}
      <div className="success-container">
        <AnimatePresence>
          {successMessage && (
            <motion.div
              className="success-box"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              <p>Signed in successfully!</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Error Messages */}
      <div className="error-container">
        <AnimatePresence>
          {formErrors.map((error, index) => (
            <motion.div
              key={index}
              className="error-box"
              initial={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 300 }}
              transition={{ duration: 0.5 }}
            >
              <p>{error}</p>
              <motion.div
                className="progress-line"
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 3 }}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Form */}
      <form className="login-form" onSubmit={handleSubmit}>
        <h1 className="login-title">Login</h1>
        <p className="login-subtitle">Please login to continue.</p>

        <div className="input-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formValues.username}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formValues.email}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <div className="input-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleChange}
            className="input-field"
          />
        </div>

        <button type="submit" className="login-button">
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default App;
