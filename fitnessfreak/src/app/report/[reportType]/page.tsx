"use client";

import React from "react";
import { useParams } from "next/navigation";
import { LineChart } from "@mui/x-charts/LineChart";
import { AiFillEdit } from "react-icons/ai";
import CalorieIntakePopup from "@/components/ReportFormPopup/CalorieIntake/CalorieIntakePopup";
import "./ReportPage.css";

/* ============================= */
/*  CONFIG (UI ONLY)            */
/* ============================= */

const reportConfig = {
  calories: {
    title: "Calories Intake",
    image: "/calories.png",
    description: "Track your daily calorie intake trends.",
    unit: "kcal",
    color: "#ff9800",
  },
  sleep: {
    title: "Sleep Hours",
    image: "/sleep.png",
    description: "Monitor sleep quality and recovery.",
    unit: "hrs",
    color: "#041c59",
  },
  steps: {
    title: "Steps Count",
    image: "/steps.png",
    description: "Daily activity tracking.",
    unit: "steps",
    color: "#00bcd4",
  },
  water: {
    title: "Water Intake",
    image: "/water.png",
    description: "Hydration tracking.",
    unit: "ml",
    color: "#2196f3",
  },
  weight: {
    title: "Weight Progress",
    image: "/weight.png",
    description: "Track your weight journey.",
    unit: "kg",
    color: "#ff7043",
  },
  workout: {
    title: "Workout Performance",
    image: "/workout.png",
    description: "Workout consistency tracking.",
    unit: "sessions",
    color: "#ffc107",
  },
};

interface ChartConfig {
  title: string;
  color: string;
  data: number[];
  dates: Date[];
}

/* ============================= */
/*            PAGE              */
/* ============================= */

const Page = () => {
  const params = useParams();

  const reportType = (params?.reportType as string)?.toLowerCase();

  const config = reportConfig[reportType as keyof typeof reportConfig];

  const [chart, setChart] = React.useState<ChartConfig | null>(null);
  const [loading, setLoading] = React.useState(true);
  const [showPopup, setShowPopup] = React.useState(false);

  /* ============================= */
  /*          FETCH DATA          */
  /* ============================= */

  React.useEffect(() => {
    if (!config) return;

    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_API}/reports?type=${reportType}`,
          {
            method: "GET",
            credentials: "include",
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch report data");
        }

        const result = await res.json();

        setChart({
          title: config.title,
          color: config.color,
          data: result.data.map((d: any) => d.value),
          dates: result.data.map((d: any) => new Date(d.date)),
        });

      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [reportType]);

  /* ============================= */
  /*         ANALYTICS            */
  /* ============================= */

  const values = React.useMemo(() => chart?.data || [], [chart]);

  const average = values.length
    ? values.reduce((a, b) => a + b, 0) / values.length
    : 0;

  const best = values.length ? Math.max(...values) : 0;
  const lowest = values.length ? Math.min(...values) : 0;

  /* ============================= */
  /*         VALIDATION           */
  /* ============================= */

  if (!config) return <div>Invalid Report Type</div>;

  /* ============================= */
  /*            UI                */
  /* ============================= */

  return (
    <div className="report-container">

      {/* HERO */}
      {!loading && chart && (
        <div className="hero-section">
          <div>
            <h1 className="hero-number">
              {average.toFixed(1)} {config.unit}
            </h1>

            <p className="hero-title">{config.title}</p>

            <p className="hero-description">{config.description}</p>
          </div>

          <img src={config.image} className="hero-image" />
        </div>
      )}

      {/* CHART */}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        chart && (
          <div className="chart-card">
            <LineChart
              height={300}
              xAxis={[
                {
                  data: chart.dates,
                  scaleType: "time",
                  valueFormatter: (date: any) =>
                    new Date(date).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                    }),
                },
              ]}
              series={[
                {
                  data: chart.data,
                  label: chart.title,
                  color: chart.color,
                  area: true,
                },
              ]}
            />
          </div>
        )
      )}

      {/* INSIGHTS */}
      {!loading && chart && (
        <div className="insight-section">
          <div className="insight-card">
            <h3>🔥 Best</h3>
            <p>{best} {config.unit}</p>
          </div>

          <div className="insight-card">
            <h3>⚠️ Lowest</h3>
            <p>{lowest} {config.unit}</p>
          </div>

          <div className="insight-card">
            <h3>📊 Average</h3>
            <p>{average.toFixed(1)} {config.unit}</p>
          </div>
        </div>
      )}

      {/* EDIT BUTTON */}
      <button className="edit-btn" onClick={() => setShowPopup(true)}>
        <AiFillEdit size={22} />
      </button>

      {showPopup && (
        <CalorieIntakePopup setShowCalorieIntakePopup={setShowPopup} />
      )}

    </div>
  );
};

export default Page;