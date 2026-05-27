
"use client"

import HomeBanner1 from "@/components/HomeBanner1/HomeBanner1"
import TodayRecommendation from "@/components/TodayRecommendation/TodayRecommendation"
import HomeBanner2 from "@/components/HomeBanner2/HomeBanner2"

export default function Home() {
  return (
    <div className="homepage">


      <HomeBanner1 />

      <TodayRecommendation />

      <HomeBanner2 />

    </div>
  )
}