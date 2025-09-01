'use client';

import React from 'react';

const EducationalResources = () => {
  const resources = [
    { title: 'Research Papers', icon: 'book', description: 'Academic research about the liberation war.', action: 'Access Research' },
    { title: 'Teaching Materials', icon: 'graduation-cap', description: 'Lesson plans and worksheets for educators.', action: 'Download Materials' },
    { title: 'Oral Histories', icon: 'video', description: 'Interviews with freedom fighters.', action: 'Watch Videos' }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <h2 className="text-center text-2xl font-bold mb-8">Educational Resources</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {resources.map((resource, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">📖</span>
            </div>
            <div className="w-full text-center p-4 bg-white rounded shadow transition-all">
              <h3 className="mb-2 text-lg font-bold">{resource.title}</h3>
              <p className="mb-4 text-gray-700 text-sm">{resource.description}</p>
              <button className="px-4 py-2 bg-blue-600 text-white rounded">{resource.action} →</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationalResources;