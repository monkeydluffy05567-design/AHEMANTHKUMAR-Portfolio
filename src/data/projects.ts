import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Sales & Operations Performance Analysis',
    category: 'multi-tool',
    year: '2024',
    slug: 'sales-operations-analysis',
    techStack: 'Excel, SQL, Python, Power BI',
    description: 'End-to-end analytics solution analyzing transactional sales and shipment data with dashboards tracking revenue, orders, and performance trends.',
    details: [
      'Designed an end-to-end data analytics solution by collecting transactional sales and shipment data, cleaning and transforming it using Python (Pandas) and Excel',
      'Stored and queried structured data using SQL to analyze sales trends, order status, customer behavior, and product performance',
      'Built interactive Power BI dashboards with slicers and visual reports to track revenue, shipment volumes, order status, and monthly performance',
      'Performed data validation and exploratory analysis using Pivot Tables and Excel dashboards to cross-check insights and support business decisions'
    ],
    coverImage: 'https://images.unsplash.com/photo-1733496637708-9470e9c8cfe2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjB8&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      { id: '1-1', src: 'https://images.unsplash.com/photo-1610142004358-e4e987e4c5af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjF8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Dashboard screenshot', aspectRatio: 'landscape' },
      { id: '1-2', src: 'https://images.unsplash.com/photo-1705321217071-b1b6672fa23c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjF8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Data visualization', aspectRatio: 'portrait' },
    ]
  },
  {
    id: '2',
    title: 'Coffee Shop Sales Analysis',
    category: 'excel',
    year: '2024',
    slug: 'coffee-shop-sales',
    techStack: 'Excel',
    description: 'Retail sales dashboard identifying peak hours, revenue trends, and customer purchasing behavior.',
    details: [
      'Analyzed coffee shop retail sales data using Excel Pivot Tables and Pivot Charts to identify peak sales hours, high-revenue days, and monthly sales trends',
      'Built an interactive Excel dashboard with slicers (Month, Day) to track total sales, footfall, average bill per person, and product category performance',
      'Derived actionable insights on best-selling products, store-wise performance, and customer purchasing patterns to support business decision-making'
    ],
    coverImage: 'https://images.unsplash.com/photo-1761870033405-d1474ec5dae9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjJ8&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      { id: '2-1', src: 'https://images.unsplash.com/photo-1559123988-ebd5228736b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjJ8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Sales dashboard', aspectRatio: 'landscape' },
    ]
  },
  {
    id: '3',
    title: 'Sales Data Cleaning & Analysis',
    category: 'python',
    year: '2024',
    slug: 'sales-data-cleaning',
    techStack: 'Python',
    description: 'Performed preprocessing and EDA on raw sales data to identify trends and revenue distribution.',
    details: [
      'Performed data cleaning and preprocessing on raw sales data using Python (Pandas, NumPy), handling missing values, incorrect data types, and duplicates',
      'Conducted exploratory data analysis (EDA) using grouping, aggregation, and statistical summaries to identify sales trends, top-performing products, and monthly performance',
      'Generated insights on revenue distribution, product demand, and order patterns using Python-based analysis'
    ],
    coverImage: 'https://images.unsplash.com/photo-1758543437543-6d61ca0fd530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjR8&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      { id: '3-1', src: 'https://images.unsplash.com/photo-1762344682624-176d89eb3bfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjR8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Python analysis', aspectRatio: 'landscape' },
    ]
  },
  {
    id: '4',
    title: 'Sales & Shipment Performance Dashboard',
    category: 'multi-tool',
    year: '2024',
    slug: 'sales-shipment-dashboard',
    techStack: 'Power BI',
    description: 'Interactive Power BI dashboards analyzing sales revenue, shipment volume, and order status across products and time periods.',
    details: [
      'Designed interactive Power BI dashboards to analyze sales revenue, shipment volume, and order status across products and time periods',
      'Built data models and relationships, created DAX measures such as total sales, order count, and monthly trends',
      'Implemented slicers and filters to enable dynamic analysis by month, product, and order status for business reporting'
    ],
    coverImage: 'https://images.unsplash.com/photo-1742260765447-239ed006350a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njh8&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      { id: '4-1', src: 'https://images.unsplash.com/photo-1680287327539-9467451a8b81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njh8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Power BI dashboard', aspectRatio: 'landscape' },
    ]
  },
  {
    id: '5',
    title: 'Amazon SQL Data Analysis Project',
    category: 'sql',
    year: '2024',
    slug: 'amazon-sql-analysis',
    techStack: 'SQL',
    description: 'Designed relational database and analyzed e-commerce product sales performance.',
    details: [
      'Designed and implemented an Amazon-style relational database using SQL to analyze e-commerce sales data',
      'Analyzed product-wise and category-wise sales performance using aggregate functions',
      'Created tables with primary keys, foreign keys, and constraints to maintain data integrity',
      'Performed data analysis using SELECT, WHERE, GROUP BY, HAVING, ORDER BY clauses'
    ],
    coverImage: 'https://images.unsplash.com/photo-1682232568244-edbb92614c2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjZ8&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      { id: '5-1', src: 'https://images.unsplash.com/photo-1730724620317-2b806898bdda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjZ8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'SQL query results', aspectRatio: 'landscape' },
    ]
  },
];

// Helper function to get project by slug
export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

// Helper function to get projects by category
export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

// Helper function to get featured projects (first 4)
export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

// Helper function to get next/previous project
export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};
