"use client";

import React from "react";
import CircularProgress from "@mui/joy/CircularProgress";
import { AiOutlineEye } from "react-icons/ai";
import { useRouter } from "next/navigation";
import "./HomeBanner1.css";

type Metric = {
  name: string;
  value: number;
  unit: string;
  goal: number;
  goalUnit: string;
};

const HomeBanner1 = () => {
  const [data, setData] = React.useState<Metric[]>([]);
  const router = useRouter();

  React.useEffect(() => {
    const temp: Metric[] = [
      { name: "calories", value: 2000, unit: "kcal", goal: 2500, goalUnit: "kcal" },
      { name: "sleep", value: 8, unit: "hrs", goal: 8, goalUnit: "hrs" },
      { name: "steps", value: 2000, unit: "steps", goal: 10000, goalUnit: "steps" },
      { name: "water", value: 2000, unit: "ml", goal: 3000, goalUnit: "ml" },
      { name: "weight", value: 75, unit: "kg", goal: 70, goalUnit: "kg" },
      { name: "workout", value: 2, unit: "days", goal: 5, goalUnit: "days" },
    ];

    setData(temp);
  }, []);

  function simplifyFraction(n: number, d: number): [number, number] {
    const gcd = (a: number, b: number): number =>
      b === 0 ? a : gcd(b, a % b);

    const g = gcd(n, d);
    return [n / g, d / g];
  }

  return (
    <div className="meters">
      {data.map((item, index) => {
        const percent = item.goal ? (item.value / item.goal) * 100 : 0;

        const [a, b] = simplifyFraction(item.value, item.goal || 1);

        return (
          <div className="card" key={index}>
            <div className="card-header">
              <div className="card-header-box">
                <div className="card-header-box-name">{item.name}</div>
                <div className="card-header-box-value">
                  {item.value} {item.unit}
                </div>
              </div>

              <div className="card-header-box">
                <div className="card-header-box-name">Target</div>
                <div className="card-header-box-value">
                  {item.goal} {item.goalUnit}
                </div>
              </div>
            </div>

            <CircularProgress
              color="neutral"
              determinate
              variant="solid"
              size="lg"
              value={percent}
            >
              <span className="textincircle">
                {a} / {b}
              </span>
            </CircularProgress>

            <button onClick={() => router.push(`/report/${item.name}`)}>
              Show Report <AiOutlineEye />
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default HomeBanner1;
