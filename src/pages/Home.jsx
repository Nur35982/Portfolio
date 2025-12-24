import React from 'react';
import { Briefcase, GraduationCap, Code, Brain, Database, GitBranch, Award, Users, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { experiences } from '../data/experiences';

const Home = () => {
  const skills = [
    { category: 'Languages', items: ['Python', 'C++', 'C', 'SQL', 'JavaScript'], icon: <Code className="h-6 w-6 text-primary" /> },
    { category: 'Frameworks', items: ['TensorFlow', 'PyTorch', 'HuggingFace', 'LangChain', 'FastAPI', 'Django'], icon: <GitBranch className="h-6 w-6 text-primary" /> },
    { category: 'AI/ML', items: ['LLMs', 'NLP', 'Computer Vision', 'RAG Systems', 'Generative AI'], icon: <Brain className="h-6 w-6 text-primary" /> },
    { category: 'Tools & DB', items: ['Git', 'Docker', 'PostgreSQL', 'FAISS', 'Pinecone', 'Figma'], icon: <Database className="h-6 w-6 text-primary" /> }
  ];

  const certificates = [
    { title: 'Campus Ambassador', org: 'Machine Learning Olympiad (2024)', icon: <Users className="h-5 w-5 text-primary" /> },
    { title: 'ICPC Participant', org: 'Asia Dhaka Site Preliminary (2023 & 2024)', icon: <Award className="h-5 w-5 text-primary" /> },
    { title: 'Semi-Finalist', org: 'Climate Science Olympiad 2023', icon: <Award className="h-5 w-5 text-primary" /> },
    { title: 'General Member', org: 'NSU CSE Club (2022-24)', icon: <Users className="h-5 w-5 text-primary" /> },
    { title: 'Media In-charge', org: 'NSU Cine & Drama Club (2023-24)', icon: <Users className="h-5 w-5 text-primary" /> }
  ];

  return (
    <div className="py-12 bg-light">
      <div className="container space-y-12">
        {/* Hero */}
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-neutral">
            Building Intelligent Systems at the Intersection of <span className="highlight">AI</span> and <span className="highlight">Healthcare</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Software Engineer specializing in NLP, Computer Vision & Generative AI. Currently revolutionizing healthcare with AI at Duke University while building production systems at ATI Limited.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/Nur35982" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Github size={20} className="mr-2" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/nurnobi-islam-nsu/" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Linkedin size={20} className="mr-2" /> LinkedIn
            </a>
            <a href="mailto:nur35982@gmail.com" className="btn btn-success">
              <Mail size={20} className="mr-2" /> Contact
            </a>
          </div>
        </section>

        {/* Current Roles */}
        <section>
          <div className="flex items-center space-x-2 mb-6">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="section-title">Current Roles</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((role) => (
              <div key={role.id} className="card">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-neutral">{role.title}</h3>
                    <p className="text-sm text-gray-600">{role.company}</p>
                  </div>
                  <span className="text-sm text-gray-500">{role.period}</span>
                </div>
                <p className="text-sm text-gray-500 mt-1">{role.location}</p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-600">
                  {role.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section>
          <div className="flex items-center space-x-2 mb-6">
            <Brain className="h-6 w-6 text-primary" />
            <h2 className="section-title">Technical Skills</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {skills.map((group, index) => (
              <div key={index} className="card">
                <div className="flex items-center space-x-2 mb-4">
                  {group.icon}
                  <h3 className="text-lg font-bold text-neutral">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-light text-gray-800 rounded-lg text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certificates */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Education */}
            <div className="card">
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-bold text-neutral">Education</h2>
              </div>
              <h3 className="text-lg font-bold text-neutral">BS in Computer Science & Engineering</h3>
              <p className="text-sm text-gray-600">North South University, Dhaka</p>
              <p className="text-sm text-gray-500">2020 - 2024 • Specialized in AI & Machine Learning</p>
              <div className="mt-4">
                <h4 className="font-bold text-neutral">Senior Design Project</h4>
                <p className="text-gray-600">Plurality Evaluation of Large Language Models: A South Asian Perspective</p>
                <p className="text-sm text-gray-500">Created PluBench with 3,600 prompts for LLM evaluation</p>
              </div>
            </div>

            {/* Certificates */}
            <div className="card">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="h-6 w-6 text-primary" />
                <h2 className="text-xl font-bold text-neutral">Certificates & Recognition</h2>
              </div>
              <div className="space-y-4">
                {certificates.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    {cert.icon}
                    <div>
                      <h4 className="font-bold text-neutral">{cert.title}</h4>
                      <p className="text-sm text-gray-600">{cert.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-neutral">Want to See More?</h2>
          <p className="text-gray-600">Explore my projects, writings, and theatre work</p>
          <div className="flex justify-center space-x-4">
            <Link to="/projects" className="btn btn-primary">View Projects</Link>
            <Link to="/writings" className="btn btn-outline">Read Writings</Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;