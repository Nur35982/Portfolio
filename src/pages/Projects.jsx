import React from 'react';
import ProjectCard from '../components/ProjectCard';

// Temporary data — directly inside the file (no import needed)
const projects = [
  {
    id: 1,
    title: "AI Attendance System from RTSP Camera",
    description: "Real-time attendance system using RetinaFace and RTSP stream processing with anti-spoofing capabilities.",
    technologies: ["Python", "FastAPI", "PostgreSQL", "RetinaFace", "OpenCV", "WebSocket"],
    features: [
      "Live RTSP camera stream processing",
      "Anti-spoofing face recognition",
      "Real-time WebSocket notifications",
      "Role-based access control & audit logs"
    ],
    githubUrl: "https://github.com/Nur35982",
    status: "Production",
    category: "Computer Vision"
  },
  {
    id: 2,
    title: "Multilingual Depression Assessment RAG Chatbot",
    description: "Clinical chatbot based on WHO mhGAP & PHQ-9 guidelines for depression assessment in multiple languages.",
    technologies: ["LangChain", "FAISS", "MiniLM", "Transformers", "FastAPI"],
    features: [
      "Multilingual support for clinical assessment",
      "RAG-based knowledge retrieval",
      "WHO guideline integration",
      "Privacy-preserving design"
    ],
    githubUrl: "https://github.com/Nur35982",
    status: "Active Development",
    category: "NLP"
  },
  {
    id: 3,
    title: "Breast Cancer Agentic RAG Chatbot",
    description: "Django-based RAG system using Mistral-7B for clinical treatment suggestions and patient support.",
    technologies: ["Django", "Mistral-7B", "FAISS", "LangChain", "PostgreSQL"],
    features: [
      "Clinical decision support system",
      "RAG with medical literature",
      "Treatment suggestion engine",
      "Patient education portal"
    ],
    githubUrl: "https://github.com/Nur35982",
    status: "Completed",
    category: "Healthcare AI"
  },
  {
    id: 4,
    title: "Ekok - AI-based Digital Prescription Platform",
    description: "Integrated EHR solution with AI capabilities for modern healthcare record management.",
    technologies: ["React", "Node.js", "MongoDB", "TensorFlow", "FastAPI"],
    features: [
      "Digital prescription management",
      "Integrated EHR system",
      "AI-powered diagnostics",
      "Patient portal & analytics"
    ],
    githubUrl: "https://github.com/Nur35982",
    status: "Incubated at NSU Startup Next",
    category: "Healthcare Platform"
  }
];

const publications = [
  {
    title: "A Multi-Agent AI System for Optimizing Antibiotic Decisions in Pediatric Sepsis",
    venue: "PRFC 2025 (Paediatric Research for the Future of Children)",
    status: "Accepted",
    authors: "Nurnobi Islam et al.",
    abstract: "Temporal memory simulation study for antibiotic decision support using EHR data."
  },
  {
    title: "Offline Reinforcement-Learning Agent for Pediatric Sepsis Triage and Early Action",
    venue: "PRFC 2025",
    status: "Accepted",
    authors: "Nurnobi Islam et al.",
    abstract: "Using synthetic ED EHR data for sepsis triage and early intervention."
  }
];

const Projects = () => {
  return (
    <div className="py-12 bg-light">
      <div className="container space-y-12">
        <section className="text-center space-y-4">
          <h1 className="text-3xl font-bold text-neutral">Projects & Research</h1>
          <p className="text-lg text-gray-600">A showcase of my work in AI, computer vision, and healthcare technology.</p>
        </section>

        <section>
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="section-title">Research Publications</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="card">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-neutral">{pub.title}</h3>
                  <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded-full">{pub.status}</span>
                </div>
                <p className="text-sm text-gray-600">{pub.venue}</p>
                <p className="text-sm text-gray-500">{pub.authors}</p>
                <p className="text-gray-600 mt-2">{pub.abstract}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;