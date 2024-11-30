import React, { useState, useEffect } from 'react';

const App = () => {
  const [categorizedData, setCategorizedData] = useState({
    low: [],
    moderate: [],
    serious: [],
    alarming: [],
    extremelyAlarming: [],
  });

  // 데이터 가져오기 및 그룹화
  const getGHI = async () => {
    try {
      const response = await fetch('https://6743ce15b7464b1c2a65e803.mockapi.io/GHI');
      const data = await response.json();

      // 데이터를 카테고리별로 그룹화
      const groupedData = {
        low: data.filter((item) => item.ghi < 10),
        moderate: data.filter((item) => item.ghi >= 10 && item.ghi < 20),
        serious: data.filter((item) => item.ghi >= 20 && item.ghi < 35),
        alarming: data.filter((item) => item.ghi >= 35 && item.ghi < 50),
        extremelyAlarming: data.filter((item) => item.ghi >= 50),
      };

      setCategorizedData(groupedData);
    } catch (error) {
      console.error('데이터를 가져오는 중 오류 발생:', error);
    }
  };

  useEffect(() => {
    getGHI();
  }, []);

  return (
    <div>
      
      <section style={{ float: "left", margin: "20px" }}>
        <h2 style={{ color: "Blue" }}>Low (0 ~ 9.9)</h2>
        <table style={{ border: "1px solid black", borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>Country</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>Year</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>GHI</th>
            </tr>
          </thead>
          <tbody>
            {categorizedData.low.map((item) => (
              <tr key={item.id}>
                <td style={{ border: "1px solid black", padding: "8px" }}>{item.country}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{item.year}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{item.ghi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      
      <section style={{ float: "left", margin: "20px" }}>
        <h2 style={{ color: "green" }}>Moderate (10.0 ~ 19.9)</h2>
        <table style={{ border: "1px solid black", borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>Country</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>Year</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>GHI</th>
            </tr>
          </thead>
          <tbody>
            {categorizedData.moderate.map((item) => (
              <tr key={item.id}>
                <td style={{ border: "1px solid black", padding: "8px" }}>{item.country}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{item.year}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{item.ghi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

     
      <section style={{ float: "left", margin: "20px" }}>
        <h2 style={{ color: "Goldenrod" }}>Serious (20.0 ~ 34.9)</h2>
        <table style={{ border: "1px solid black", borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>Country</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>Year</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>GHI</th>
            </tr>
          </thead>
          <tbody>
            {categorizedData.serious.map((item) => (
              <tr key={item.id}>
                <td style={{ border: "1px solid black", padding: "8px" }}>{item.country}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{item.year}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{item.ghi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

  
      <section style={{ float: "left", margin: "20px" }}>
        <h2 style={{ color: "orange" }}>Alarming (35.0 ~ 49.9)</h2>
        <table style={{ border: "1px solid black", borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>Country</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>Year</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>GHI</th>
            </tr>
          </thead>
          <tbody>
            {categorizedData.alarming.map((item) => (
              <tr key={item.id}>
                <td style={{ border: "1px solid black", padding: "8px" }}>{item.country}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{item.year}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{item.ghi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      
      <section style={{ float: "left", margin: "20px" }}>
        <h2 style={{ color: "red" }}>Extremely Alarming (50 or higher)</h2>
        <table style={{ border: "1px solid black", borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>Country</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>Year</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>GHI</th>
            </tr>
          </thead>
          <tbody>
            {categorizedData.extremelyAlarming.map((item) => (
              <tr key={item.id}>
                <td style={{ border: "1px solid black", padding: "8px" }}>{item.country}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{item.year}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{item.ghi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default App;