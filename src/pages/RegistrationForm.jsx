import React, { useState } from "react";
import axios from "axios";
import InputField from "../components/InputField";
import Dropdown from "../components/Dropdown";
import RadioButton from "../components/RadioButton";

const countries = ["USA", "India", "Canada"];
const states = { USA: ["New York", "California"], India: ["Delhi", "Mumbai"], Canada: ["Toronto", "Vancouver"] };
const cities = {
  "New York": ["NYC", "Buffalo"],
  California: ["Los Angeles", "San Francisco"],
  Delhi: ["Connaught Place", "Karol Bagh"],
  Mumbai: ["Bandra", "Andheri"],
  Toronto: ["Downtown", "North York"],
  Vancouver: ["Richmond", "Burnaby"],
};

const RegistrationForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    age: "",
    gender: "",
    country: "",
    state: "",
    city: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });

    if (name === "dob") {
      const birthDate = new Date(value);
      const today = new Date();
      setForm({ ...form, dob: value, age: today.getFullYear() - birthDate.getFullYear() });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/register`, form, {
        headers: { "Content-Type": "application/json" },
      });
      alert("Registration Successful");
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        dob: "",
        age: "",
        gender: "",
        country: "",
        state: "",
        city: "",
      });
    } catch (error) {
      alert("Error registering user");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>User Registration</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <InputField label="First Name" type="text" name="firstName" value={form.firstName} onChange={handleChange} />
        <InputField label="Last Name" type="text" name="lastName" value={form.lastName} onChange={handleChange} />
        <InputField label="Email" type="email" name="email" value={form.email} onChange={handleChange} />
        <InputField label="Date of Birth" type="date" name="dob" value={form.dob} onChange={handleChange} />
        <InputField label="Age" type="number" name="age" value={form.age} readOnly />
        <RadioButton label="Gender" name="gender" options={["Male", "Female", "Other"]} value={form.gender} onChange={handleChange} />
        <Dropdown label="Country" name="country" options={countries} value={form.country} onChange={handleChange} />
        <Dropdown label="State" name="state" options={states[form.country] || []} value={form.state} onChange={handleChange} />
        <Dropdown label="City" name="city" options={cities[form.state] || []} value={form.city} onChange={handleChange} />
        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

// Internal CSS with better styling
const styles = {
  container: {
    maxWidth: "450px",
    margin: "40px auto",
    padding: "25px",
    borderRadius: "12px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f8f9fa",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#343a40",
    marginBottom: "20px",
  },
  form: {
    display: "grid",
    gap: "15px",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#007BFF",
    color: "#fff",
    fontSize: "18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "all 0.3s ease",
    fontWeight: "bold",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
};

// Responsive Design
window.addEventListener("resize", () => {
  if (window.innerWidth <= 600) {
    styles.container.maxWidth = "90%";
    styles.container.padding = "15px";
  } else {
    styles.container.maxWidth = "450px";
    styles.container.padding = "25px";
  }
});

export default RegistrationForm;
