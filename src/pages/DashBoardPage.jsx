import "./Dashboard.css";
import SideNavigationBar from "../components/SideNavigationBar.jsx";
import SideDecoration from "../components/SideDecoration";
import Chart from "chart.js/auto";

import { Bar, Doughnut, Line } from "react-chartjs-2";

function DashboardPage() {
  const monthlyData = [
    { month: "JAN", product: 2.2, subscription: 1.8, other: 0.5 },
    { month: "FEB", product: 3.5, subscription: 1.2, other: 1.0 },
    { month: "MAR", product: 4.8, subscription: 2.5, other: 1.5 },
    { month: "APR", product: 3.2, subscription: 4.2, other: 2.0 },
    { month: "MAY", product: 2.8, subscription: 3.0, other: 1.8 },
    { month: "JUN", product: 1.5, subscription: 1.0, other: 0.8 },
    { month: "JUL", product: 0.5, subscription: 0.2, other: 0.5 },
    { month: "AUG", product: 1.0, subscription: 1.5, other: 0.8 },
    { month: "SEP", product: 2.5, subscription: 3.0, other: 1.2 },
    { month: "OCT", product: 4.0, subscription: 3.5, other: 1.8 },
    { month: "NOV", product: 2.8, subscription: 1.5, other: 1.0 },
    { month: "DEC", product: 0.5, subscription: 0.1, other: 0.2 },
  ];

  const lineChartData = {
    labels: monthlyData.map((d) => d.month), // X-axis labels

    datasets: [
      {
        label: "Product",
        data: monthlyData.map((d) => d.product),
        borderColor: "rgba(75,192,192,1)",
        backgroundColor: "rgba(75,192,192,0.2)",
        tension: 0.4,
        borderDash: [12, 5],
        pointRadius: 0,
         borderWidth:1.5,
      },

      {
        label: "Subscription",
        data: monthlyData.map((d) => d.subscription),
        borderColor: "rgba(153,102,255,1)",
        backgroundColor: "rgba(153,102,255,0.2)",
        tension: 0.4,
        borderDash: [12, 5],
        pointRadius: 0,
        borderWidth:1.5,
      },

      {
        label: "Other",
        data: monthlyData.map((d) => d.other),
        borderColor: "rgba(255,159,64,1)",
        backgroundColor: "rgba(255,159,64,0.2)",
        tension: 0.4,
        borderDash: [12, 5],
        pointRadius: 0,
         borderWidth:1.5,
      },
    ],
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideNavigationBar />
      <div
        style={{ marginLeft: "280px", display: "flex", flexDirection: "row" }}
      >
        <SideDecoration />

        <div className="layout">
          <div className="cardLayout">
            <div className=" card-base salesReport">
              <Line
                data={lineChartData}
                options={{
                  scales: {
                    x: {
                      grid: {
                        display: false, 
                      },
                    },
                    y: {
                      grid: {
                        display: true, 
                      },
                    },
                  },
                }}
              />
            </div>

            <div className="bottomCard">
              <div className="card-base realTimeUser">
                <h3>Real-Time Users 🟢</h3>
                <p>125 people currently browsing</p>
              </div>

              <div className="card-base totalVisits">
                <h3>Total Visits 👁️</h3>
                <p>55,231 this week</p>
              </div>

              <div className="card-base visitDuration">
                <h3>Avg. Visit Duration ⏱️</h3>
                <p>3 min 45 sec</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
