// src/pages/Writings.jsx
import React from 'react';
import { BookOpen, Newspaper, FileText, PenTool, ExternalLink } from 'lucide-react';

const Writings = () => {
  // -------------------------------------------------
  // 1. Writing Focus Areas
  // -------------------------------------------------
  const writingCategories = [
    {
      name: 'Engineering Economics',
      count: 4,
      description: 'Bridging technology and economic analysis for sustainable development',
    },
    {
      name: 'Social Commentary',
      count: 3,
      description: 'Analysis of social structures and reform opportunities',
    },
    {
      name: 'Feminist Writing',
      count: 2,
      description: 'Gender analysis and feminist perspectives',
    },
    {
      name: 'Creative Writing',
      count: 1,
      description: 'Poetry and literary expression',
    },
  ];

  // -------------------------------------------------
  // 2. Featured Publications
  // -------------------------------------------------
  const writings = [
    {
      title: 'Is Bangladesh Missing an Opportunity?',
      publication: 'The Daily Star',
      type: 'Opinion Piece',
      icon: <Newspaper className="h-6 w-6 text-primary" />,
      date: '2024',
      description: 'Analysis of economic opportunities and technological advancements in Bangladesh.',
      link: 'https://www.thedailystar.net/opinion/readers-voice/news/bangladesh-missing-opportunity-3567781',
    },
    {
      title: 'After the July 24 Uprising: Is Bangladesh Ready for Long-Term Reforms to End Discrimination and Build a Strong Economy?',
      publication: 'Medium',
      type: 'Economic Analysis',
      icon: <FileText className="h-6 w-6 text-primary" />,
      date: '2024',
      description: 'Exploration of post-uprising economic reforms and social changes needed in Bangladesh.',
      link: 'https://medium.com/@nur35982/after-the-july-24-uprising-is-bangladesh-ready-for-long-term-reforms-to-end-discrimination-and-7b3f4b8c2f8d',
    },
    {
      title: 'বঙ্গদেশে নারী-পুরুষ বনাম প্রভু-দাসীর জীবন',
      publication: 'Feminist Factor',
      type: 'Feminist Analysis',
      icon: <PenTool className="h-6 w-6 text-primary" />,
      date: '2024',
      description: 'Critical analysis of gender dynamics and power structures in Bangladeshi society.',
      link: '#', // Available upon request
    },
    {
      title: 'মৃত্যু',
      publication: 'Prothom Alo, Bandhusova',
      type: 'Poem',
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      date: '2024',
      description: 'Literary exploration of mortality and human existence.',
      link: '#', // Available upon request
    },
  ];

  return (
    <div className="py-12 bg-light">
      <div className="container space-y-12">

        {/* ---------- Hero ---------- */}
        <section className="text-center space-y-4">
          <BookOpen className="h-12 w-12 text-primary mx-auto" />
          <h1 className="text-3xl font-bold text-neutral">Writing Portfolio</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Exploring the intersection of technology, economics, and social change through written analysis.
          </p>
        </section>

        {/* ---------- Writing Focus Areas ---------- */}
        <section>
          <h2 className="section-title mb-8">Writing Focus Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {writingCategories.map((category, index) => (
              <div key={index} className="card text-center py-8">
                <div className="text-4xl font-bold text-primary mb-3">{category.count}+</div>
                <h3 className="text-xl font-bold text-neutral mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Featured Publications ---------- */}
        <section>
          <h2 className="section-title mb-8">Featured Publications</h2>
          <div className="space-y-8">
            {writings.map((writing, index) => (
              <div key={index} className="card">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-start space-x-4">
                    {writing.icon}
                    <div>
                      <h3 className="text-xl font-bold text-neutral">{writing.title}</h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-500 mt-1">
                        <span>{writing.publication}</span>
                        <span>• {writing.type}</span>
                        <span>• {writing.date}</span>
                      </div>
                    </div>
                  </div>
                  {writing.link && writing.link !== '#' && (
                    <a
                      href={writing.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>

                <p className="text-gray-600 mb-4">{writing.description}</p>

                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Published in {writing.publication}</span>
                  {writing.link && writing.link !== '#' ? (
                    <a
                      href={writing.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline flex items-center"
                    >
                      Read Article <ExternalLink size={16} className="ml-1" />
                    </a>
                  ) : (
                    <span className="text-gray-500 italic">Available upon request</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Writing Philosophy ---------- */}
        <section className="card text-center max-w-4xl mx-auto py-10">
          <BookOpen className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-neutral mb-6">Writing Philosophy</h2>
          <p className="text-lg text-gray-600 italic leading-relaxed px-6">
            "My writing aims to bridge technical expertise with social analysis, exploring how technology 
            intersects with economic systems, social structures, and human experiences. Through engineering 
            economics analysis, feminist critique, and creative expression, I seek to contribute to 
            meaningful conversations about development, equity, and innovation in Bangladesh and beyond."
          </p>
        </section>

      </div>
    </div>
  );
};

export default Writings;