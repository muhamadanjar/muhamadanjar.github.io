import cvData from './cv.json';

// Personal Info
export const personal = cvData.personal;

// Data sections
export const skills = cvData.skills.map(skill => ({
  name: skill.category,
  items: skill.items
}));

export const experience = cvData.experience.slice(0, 10).map(exp => ({
  role: exp.title,
  company: exp.tech.join(', '),
  period: exp.year,
  description: exp.titleId
}));

export const projects = cvData.experience.map((exp) => {
  const tech = exp.tech.map(t => t.toLowerCase());
  let category = 'Web Development';
  
  if (tech.some(t => ['geoserver', 'arcgis', 'openlayers', 'leaflet', 'cityengine'].includes(t))) {
    category = 'WebGIS';
  } else if (tech.some(t => ['flutter', 'react native', 'ionic'].includes(t))) {
    category = 'Mobile';
  } else if (tech.some(t => ['odoo', 'erp'].includes(t))) {
    category = 'ERP';
  }

  let image = '/projects/dashboard.png';
  if (category === 'WebGIS') image = '/projects/webgis.png';
  if (category === 'Mobile') image = '/projects/mobile.png';

  return {
    title: exp.title,
    category,
    image,
    description: exp.titleId,
    tags: exp.tech
  };
});



export const education = cvData.education;

export const certifications = cvData.certifications;

export const organizations = cvData.organizations;


export const blogPosts = [
  {
    id: 1,
    title: 'Modern Web Development Trends in 2026',
    excerpt: 'Exploring the shift towards AI-first applications and the return to server-side rendering with frameworks like Remix and Next.js.',
    date: 'March 15, 2026',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Mastering GSAP Animations in React',
    excerpt: 'A comprehensive guide to creating high-performance smooth animations in modern React applications using the new useGSAP hook.',
    date: 'February 28, 2026',
    category: 'Tutorial',
    image: 'https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'The Future of TypeScript',
    excerpt: 'Deep dive into incoming features like context-sensitive auto-imports and enhanced pattern matching support in the next major release.',
    date: 'January 10, 2026',
    category: 'Coding',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=1000&auto=format&fit=crop'
  }
];