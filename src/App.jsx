

import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    resumeUrl: "",
    coverLetter: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    alert(result.message);
  };

  return (
    <div className="page">
      <div className="form-container">
        <h2>Job Application</h2>
        <p className="subtitle">
          Please fill out the form below to apply for the position
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Full Name *</label>
            <input name="name" placeholder="John Doe" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Email Address *</label>
            <input name="email" type="email" placeholder="john.doe@example.com" onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Phone Number *</label>
            <input name="phone" placeholder="+91 8776123986 " onChange={handleChange} required />
          </div>

          <div className="form-group">
            <label>Position *</label>
            <select name="position" onChange={handleChange} required>
              <option value="">Select position</option>
              <option>Frontend Developer</option>
              <option>Backend Developer</option>
              <option>Full Stack Developer</option>
            </select>
          </div>

          <div className="form-group">
            <label>Years of Experience</label>
            <input name="experience" type="number" placeholder="5" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Resume URL (Optional)</label>
            <input name="resumeUrl" placeholder="https://example.com/resume.pdf" onChange={handleChange} />
          </div>

          <div className="form-group">
            <label>Cover Letter</label>
            <textarea
              name="coverLetter"
              placeholder="Tell us why you'd be a great fit for this position..."
              rows="4"
              onChange={handleChange}
            ></textarea>
          </div>

          <button type="submit">Submit Application</button>
        </form>
      </div>
    </div>
  );
}

export default App;

