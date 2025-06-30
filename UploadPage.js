import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  
import Header from './Header';
import './UploadPage.css';

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();  

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setError("");  
  };

  const handleFileUpload = async () => {
    if (!file) {
      setError("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('prediction', data.prediction);
        localStorage.setItem('svmAccuracy', data.svm_accuracy);
        localStorage.setItem('kmeansAccuracy', data.kmeans_accuracy);

        
        navigate('/results');
      } else {
        setError(data.error || "An error occurred while processing the file.");
      }
    } catch (error) {
      setError("Unable to connect to the backend. Please try again later.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="upload-page">
      <Header />
      <div className="upload-container">
        <h2>Upload CT Scan</h2>
        <p>Select a CT scan image to analyze for lung cancer.</p>
        <input
          type="file"
          onChange={handleFileChange}
          id="file-upload"
          style={{ display: 'none' }}
        />
        <label htmlFor="file-upload" className="upload-button">
          Choose File
        </label>
        {file && <p>Selected File: {file.name}</p>}
        <button onClick={handleFileUpload} className="submit-button">
          Analyze
        </button>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default UploadPage;
