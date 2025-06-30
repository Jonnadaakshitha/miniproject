import React, { useEffect, useState } from 'react';  
import Header from './Header';
import './ResultsPage.css';

const ResultsPage = () => {
  const [prediction, setPrediction] = useState("");

  useEffect(() => {
    const pred = localStorage.getItem('prediction');

    if (pred) {
      setPrediction(pred);
    }
  }, []);

  return (
    <div className="results-page">
      <Header />
      <div className="results-container">
        <h2>Analysis Results</h2>
        
        <p className="prediction-text">Prediction: {prediction || "Not available"}</p>

        {prediction === "Abnormal" ? (
          <>
           

            

           
            <h3>Common Risk Factors:</h3>
            <ul>
              <li>Smoking</li>
              <li>Exposure to harmful chemicals</li>
              <li>Family history of lung cancer</li>
            </ul>
            <h3>Did You Know?</h3>
            <p>Lung cancer detected early has a 5-year survival rate of over 55%.</p>

            <h3>Mitigation:</h3>
            <ul>
              <li>Avoid smoking and secondhand smoke.</li>
              <li>Get annual health checkups.</li>
            </ul>

            <h3>Recommended Tests:</h3>
            <ul>
              
              <li>Biopsy</li>
              <li>PET Scan</li>
            </ul>

            <h3>Learn More:</h3>
            <ul>
              <li>
                <a href="https://www.lungevity.org/for-patients-caregivers" target="_blank" rel="noopener noreferrer">
                  Lung Health Foundation
                </a>
              </li>
              <li>
                <a href="https://www.worldcancerday.org" target="_blank" rel="noopener noreferrer">
                  World Cancer Day Initiatives
                </a>
              </li>
            </ul>
          </>
        ) : (
          
          <>
            <h3>No Worries, You're Cancer-Free!</h3>
            <p>But to be sure, regular checkups are important.</p>

            <h3>Prevention is Better than Cure</h3>
            <p>To stay healthy and prevent any risks in the future, we recommend the following:</p>

            <h3>Health Tips for a Healthy Lungs:</h3>
            <ul>
              <li>Avoid smoking and secondhand smoke.</li>
              <li>Maintain a healthy diet rich in antioxidants.</li>
              <li>Engage in regular physical exercise.</li>
              <li>Stay hydrated and avoid exposure to environmental pollutants.</li>
            </ul>

            <h3>Keep Up with Annual Checkups:</h3>
            <ul>
              <li>Regular checkups with your healthcare provider.</li>
              <li>Periodic lung health screenings if you have any risk factors.</li>
            </ul>

            <h3>Learn More:</h3>
            <ul>
              <li>
                <a href="https://www.lungevity.org/for-patients-caregivers" target="_blank" rel="noopener noreferrer">
                  Lung Health Foundation
                </a>
              </li>
              <li>
                <a href="https://www.worldcancerday.org" target="_blank" rel="noopener noreferrer">
                  World Cancer Day Initiatives
                </a>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default ResultsPage;
