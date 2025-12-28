// src/pages/Theatre.jsx
import React from 'react';
import { Theater, Users, Award } from 'lucide-react';

const Theatre = () => {
  // -------------------------------------------------
  // 1. Productions (stage work)
  // -------------------------------------------------
  const productions = [
    {
      title: 'Raktokorobi',
      playwright: 'Rabindranath Tagore',
      role: 'Organizer',
      year: '2023',
      description: 'A classic Bengali drama exploring human emotions and societal structures.',
      icon: <Theater className="h-6 w-6 text-primary" />,
    },
    {
      title: 'Othello',
      playwright: 'William Shakespeare',
      role: 'Organizer',
      year: '2023',
      description: 'Shakespearean tragedy performed with modern interpretation.',
      icon: <Theater className="h-6 w-6 text-primary" />,
    },
    {
      title: 'Tartuffe',
      playwright: 'Molière',
      role: 'Coordinator',
      year: '2024',
      description: 'French comedy exploring hypocrisy and religious pretense.',
      icon: <Theater className="h-6 w-6 text-primary" />,
    },
  ];

  // -------------------------------------------------
  // 2. Club leadership & roles
  // -------------------------------------------------
  const clubRoles = [
    {
      position: 'In-charge of Media & Documentation',
      organization: 'NSU Cine & Drama Club',
      period: '2023-2024',
      responsibilities: [
        'Led content creation for major club events',
        'Managed documentation of productions and activities',
        'Oversaw media coverage and promotional materials',
      ],
      icon: <Users className="h-6 w-6 text-primary" />,
    },
    {
      position: 'Active Theatre Performer',
      organization: 'NSU Cine & Drama Club',
      period: '2020-2024',
      responsibilities: [
        'Participated in multiple stage productions',
        'Involved in flash mob performances',
        'Contributed to production organization',
      ],
      icon: <Theater className="h-6 w-6 text-primary" />,
    },
  ];

  // -------------------------------------------------
  // 3. Theatre skills
  // -------------------------------------------------
  const theatreSkills = [
    'Stage Performance',
    'Production Coordination',
    'Script Analysis',
    'Team Leadership',
    'Creative Direction',
    'Event Management',
  ];

  return (
    <div className="py-12 bg-light">
      <div className="container space-y-12">

        {/* ---------- Hero ---------- */}
        <section className="text-center space-y-4">
          <Theater className="h-12 w-12 text-primary mx-auto" />
          <h1 className="text-3xl font-bold text-neutral">Theatre &amp; Performing Arts</h1>
          <p className="text-lg text-gray-600">
            Over 3.5 years of dedicated involvement in theatre, combining performance, production, and leadership.
          </p>
        </section>

        {/* ---------- Club Leadership ---------- */}
        <section>
          <h2 className="section-title flex items-center space-x-2 mb-6">
            <Users className="h-6 w-6 text-primary" />
            <span>Club Leadership &amp; Roles</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {clubRoles.map((role, idx) => (
              <div key={idx} className="card">
                <div className="flex items-center space-x-3 mb-4">
                  {role.icon}
                  <div>
                    <h3 className="text-lg font-bold text-neutral">{role.position}</h3>
                    <p className="text-sm text-gray-600">{role.organization}</p>
                    <span className="text-sm text-gray-500">{role.period}</span>
                  </div>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-gray-600">
                  {role.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Productions ---------- */}
        <section>
          <h2 className="section-title flex items-center space-x-2 mb-6">
            <Theater className="h-6 w-6 text-primary" />
            <span>Stage Productions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productions.map((prod, idx) => (
              <div key={idx} className="card text-center">
                <div className="flex justify-center mb-3">{prod.icon}</div>
                <h3 className="text-lg font-bold text-neutral">{prod.title}</h3>
                <p className="text-sm text-gray-600 italic">{prod.playwright}</p>
                <div className="mt-2 text-sm text-gray-500">
                  <span className="font-medium">{prod.role}</span> • {prod.year}
                </div>
                <p className="mt-3 text-gray-600">{prod.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Theatre Skills ---------- */}
        <section>
          <h2 className="section-title flex items-center space-x-2 mb-6">
            <Award className="h-6 w-6 text-primary" />
            <span>Theatre Skills</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {theatreSkills.map((skill, idx) => (
              <div
                key={idx}
                className="flex items-center space-x-2 bg-white rounded-lg p-3 shadow-sm hover:shadow-md transition-shadow"
              >
                <Award className="h-5 w-5 text-primary" />
                <span className="text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Philosophy ---------- */}
        <section className="card text-center max-w-4xl mx-auto">
          <Theater className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-xl font-bold text-neutral mb-4">Theatre Philosophy</h2>
          <p className="text-gray-600 italic leading-relaxed">
            "Theatre has been an integral part of my personal and professional development. 
            It taught me the importance of empathy, collaboration, and creative expression. 
            Whether performing on stage or coordinating behind the scenes, theatre has enhanced 
            my ability to communicate effectively, lead teams, and approach problems with creativity. 
            These skills directly translate to my work in software engineering, where storytelling, 
            user empathy, and collaborative problem-solving are essential."
          </p>
        </section>

      </div>
    </div>
  );
};

export default Theatre;
