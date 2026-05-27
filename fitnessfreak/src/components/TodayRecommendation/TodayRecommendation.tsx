"use client"

import React from 'react'
import './TodayRecommendation.css'

const suggestions = [
    {
        title: "Push Day",
        text: "Your upper body recovery is optimal today 💪"
    },
    {
        title: "Hydration Alert",
        text: "You drank less water yesterday. Increase intake today 💧"
    },
    {
        title: "Recovery Focus",
        text: "Your activity level was high. Prioritize sleep tonight 💤"
    },
   {
    title: "Leg Day Ready",
    text: "Your lower body energy levels look strong today 🦵🔥"
},
{
    title: "Protein Reminder",
    text: "Your workout recovery will improve with a protein-rich meal today 🍳🥛"
},
{
    title: "Step Goal Boost",
    text: "You are close to your weekly activity target. Keep moving 🚶‍♀️⚡"
},
{
    title: "Sleep Recovery",
    text: "A good 7-8 hour sleep tonight can improve your performance tomorrow 🌙💤"
},
{
    title: "Stretch Time",
    text: "Your muscles may feel tight after recent workouts. Take 10 minutes to stretch 🧘‍♀️✨"
},
{
    title: "Consistency Streak",
    text: "You have stayed active consistently this week. Great discipline 🔥🏆"
}
]

const TodayRecommendation = () => {

    const [current, setCurrent] = React.useState(0)

    React.useEffect(() => {

        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % suggestions.length)
        }, 3000)

        return () => clearInterval(interval)

    }, [])

    return (
        <div className='ai-card'>

            <div className='ai-badge'>
                AI COACH
            </div>

            <h2>{suggestions[current].title}</h2>

            <p>
                {suggestions[current].text}
            </p>

        </div>
    )
}

export default TodayRecommendation