import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function DetailsPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p>No data found!</p>;

  return (
    <div className="container">
      <h2>Submitted Details</h2>

      <div className="details-box">
        {Object.entries(state).map(([key, value]) => (
          <p key={key}>
            <strong>{key}:</strong> {value}
          </p>
        ))}
      </div>

      <button onClick={() => navigate("/")}>Go Back</button>
    </div>
  );
}

export default DetailsPage;
