import React from 'react'

const Work = () => {
  return (
    <section id="work" className="py-16 px-6 bg-primary text-white">
      <div className="max-w-4xl mx-auto space-y-6" data-aos="fade-up">
        <h2 className="text-3xl font-bold mb-4">Work & Projects</h2>

        <div>
          <h3 className="text-xl font-semibold">NSE Education – Quiz App</h3>
          <p>React.js, MongoDB | Feb 2024 – April 2025</p>
          <p>Implemented quizzes for classes 6–8 integrated into website seamlessly.</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">My Rights</h3>
          <p>React, MongoDB | Dec 2024</p>
          <p>
            Legal consulting platform with dynamic data, REST APIs and responsive design.
            <a href="https://myrights.netlify.app" className="text-accent"> Visit site</a>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">Notes App</h3>
          <p>Swift | April 2025</p>
          <p>iOS App to manage notes and reminders using Core Data and push notifications.</p>
        </div>
      </div>
    </section>
  )
}

export default Work
