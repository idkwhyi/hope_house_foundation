// src/components/ProjectBlog.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { projectContents } from '@/data/projectContents';
import { Project } from '@/types/Project';

// Recommendation Card Component
const RecommendationCard: React.FC<{ project: Project }> = ({ project }) => (
  <Link 
    href={`/about/${project.id}`} 
    className="block p-4 hover:bg-gray-100 transition-colors border-b last:border-b-0"
  >
    <div className="flex items-center space-x-4">
      <div className="relative w-20 h-20">
        <Image 
          src={project.imageUrl} 
          alt={project.title} 
          fill
          className="object-cover rounded"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{project.title}</h3>
        <p className="text-gray-600 line-clamp-2">{project.summary}</p>
      </div>
    </div>
  </Link>
);

// Project Links Component
const ProjectLinks: React.FC<{ project: Project }> = ({ project }) => (
  <div className="flex space-x-4 mt-6">
    {project.githubLink && (
      <Link 
        href={project.githubLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
      >
        GitHub
      </Link>
    )}
    {project.liveLink && (
      <Link 
        href={project.liveLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition"
      >
        Live Demo
      </Link>
    )}
  </div>
);
