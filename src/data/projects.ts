import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Sales & Operations Performance Analysis',
    category: 'multi-tool',
    year: '2024',
    slug: 'sales-operations-analysis',
    techStack: 'Excel, SQL, Python',
    description: 'End-to-end analytics solution analyzing transactional sales and shipment data with dashboards tracking revenue, orders, and performance trends.',
    details: [
      'Cleaned and transformed data using Python and Excel',
      'Queried structured datasets with SQL to analyze customer behavior and product performance',
      'Built interactive Excel dashboards for revenue, shipments, and order status',
      'Performed validation and exploratory analysis to support business decisions'
    ],
    // Photo by Zain Creations on Unsplash
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
      'Used Pivot Tables and charts to analyze sales patterns',
      'Built slicer-based interactive dashboard',
      'Generated insights on best-selling products and store performance'
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
      'Handled missing values, duplicates, and incorrect types',
      'Used aggregation and statistics for trend discovery',
      'Produced insights on demand, revenue, and order patterns'
    ],
    coverImage: 'https://images.unsplash.com/photo-1758543437543-6d61ca0fd530?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjR8&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      { id: '3-1', src: 'https://images.unsplash.com/photo-1762344682624-176d89eb3bfe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjR8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Python analysis', aspectRatio: 'landscape' },
    ]
  },
  {
    id: '4',
    title: 'Amazon SQL Data Analysis Project',
    category: 'sql',
    year: '2024',
    slug: 'amazon-sql-analysis',
    techStack: 'SQL',
    description: 'Designed relational database and analyzed e-commerce product sales performance.',
    details: [
      'Created normalized tables with constraints',
      'Performed grouped sales analysis',
      'Used SELECT, WHERE, GROUP BY, HAVING, ORDER BY for insights'
    ],
    coverImage: 'https://images.unsplash.com/photo-1682232568244-edbb92614c2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjZ8&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      { id: '4-1', src: 'https://images.unsplash.com/photo-1730724620317-2b806898bdda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NjZ8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'SQL query results', aspectRatio: 'landscape' },
    ]
  },
  {
    id: '5',
    title: 'Customer Churn Prediction Dashboard',
    category: 'multi-tool',
    year: '2024',
    slug: 'customer-churn-prediction',
    techStack: 'Python, Excel',
    description: 'Predictive analytics dashboard identifying at-risk customers using behavioral and transactional data patterns.',
    details: [
      'Performed feature engineering on customer usage and billing data using Pandas',
      'Built churn indicator metrics and segmented customers by risk category',
      'Designed Excel dashboard with conditional formatting to highlight churn-prone segments',
      'Delivered actionable retention insights to reduce customer attrition'
    ],
    coverImage: 'https://images.unsplash.com/photo-1742260765447-239ed006350a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njh8&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      { id: '5-1', src: 'https://images.unsplash.com/photo-1680287327539-9467451a8b81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njh8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Churn analysis', aspectRatio: 'landscape' },
    ]
  },
  {
    id: '6',
    title: 'Retail Inventory Optimization Analysis',
    category: 'multi-tool',
    year: '2023',
    slug: 'retail-inventory-optimization',
    techStack: 'SQL, Excel',
    description: 'Inventory management analysis optimizing stock levels and reducing overstock through demand pattern recognition.',
    details: [
      'Queried inventory and sales tables using SQL joins and aggregation functions',
      'Identified slow-moving and fast-moving SKUs through turnover ratio analysis',
      'Created Excel reports with reorder point calculations and safety stock recommendations',
      'Reduced simulated overstock costs by identifying seasonal demand fluctuations'
    ],
    coverImage: 'https://images.unsplash.com/photo-1669908752972-e04c3b65e855?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1Njl8&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      { id: '6-1', src: 'https://images.unsplash.com/photo-1619508126123-3586ee993858?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzB8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Inventory report', aspectRatio: 'landscape' },
    ]
  },
  {
    id: '7',
    title: 'Financial Revenue Trend Visualization',
    category: 'python',
    year: '2023',
    slug: 'financial-revenue-trends',
    techStack: 'Python, Matplotlib',
    description: 'Time-series revenue visualization uncovering quarterly growth patterns and seasonal financial trends.',
    details: [
      'Loaded and cleaned multi-year revenue data using Pandas DataFrames',
      'Created line charts, bar plots, and heatmaps using Matplotlib for trend analysis',
      'Computed rolling averages and growth rates to identify revenue momentum',
      'Summarized findings in a Jupyter Notebook report for stakeholder review'
    ],
    coverImage: 'https://images.unsplash.com/photo-1616267624976-b45d3a7bac73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzF8&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      { id: '7-1', src: 'https://images.unsplash.com/photo-1616267624976-b45d3a7bac73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzF8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Revenue charts', aspectRatio: 'landscape' },
    ]
  },
  {
    id: '8',
    title: 'Marketing Campaign Performance Analysis',
    category: 'multi-tool',
    year: '2023',
    slug: 'marketing-campaign-analysis',
    techStack: 'Excel, SQL',
    description: 'Multi-channel marketing analytics evaluating campaign ROI, conversion rates, and audience engagement metrics.',
    details: [
      'Extracted campaign performance data using SQL queries across multiple marketing channels',
      'Built Excel dashboards comparing CTR, conversion rates, and cost-per-acquisition',
      'Identified top-performing campaigns and underperforming ad segments',
      'Provided data-backed recommendations for budget reallocation and targeting optimization'
    ],
    coverImage: 'https://images.unsplash.com/photo-1582210413269-f0bf6d13f58f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzN8&ixlib=rb-4.1.0&q=80&w=1080',
    images: [
      { id: '8-1', src: 'https://images.unsplash.com/photo-1617293134227-0ec282f3ed89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MDA2OTF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI3Njk1NzN8&ixlib=rb-4.1.0&q=80&w=1080', alt: 'Campaign metrics', aspectRatio: 'landscape' },
    ]
  }
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
