'use client';

import React from 'react';

const Timeline = () => {
  const events = [
    { date: 'March 7, 1971', title: 'Historic Speech', description: 'The historic speech that ignited the liberation movement.' },
    { date: 'March 26, 1971', title: 'Declaration of Independence', description: 'Formal declaration and beginning of armed resistance.' },
    { date: 'April 17, 1971', title: 'Provisional Government', description: 'Formation of the Mujibnagar government.' },
    { date: 'December 16, 1971', title: 'Victory Day', description: 'Final surrender and victory of the liberation struggle.' }
  ];

  return (
    <section className="py-16 bg-white">
      <h2 className="text-center text-2xl font-bold mb-8">Liberation War Timeline</h2>
      <div className="max-w-2xl mx-auto">
        {events.map((event, index) => (
          <div key={index} className="relative pl-8 mb-8">
            <div className="absolute left-0 top-0 w-4 h-full bg-red-700" />
            <div className="absolute left-[-0.75rem] top-0 w-6 h-6 rounded-full bg-yellow-400 border-4 border-white" />
            <div className="bg-gray-100 p-4 rounded-lg">
              <div className="text-blue-600 text-sm font-semibold">{event.date}</div>
              <h3 className="mt-2 mb-2 text-lg font-bold">{event.title}</h3>
              <p className="text-gray-700 text-sm">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;