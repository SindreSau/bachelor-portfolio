type Technology = {
  name: string;
  icon: string; // URL representing the iconify icon
};

type Technologies = {
  [key: string]: Technology;
};

export const technologies: Technologies = {
  nextjs: {
    name: 'Next.js',
    icon: 'logos:nextjs-icon',
  },
  typescript: {
    name: 'TypeScript',
    icon: 'logos:typescript-icon',
  },
  postgresql: {
    name: 'PostgreSQL',
    icon: 'logos:postgresql',
  },
  azureBlobStorage: {
    name: 'Azure Blob Storage',
    icon: 'devicon:azure',
  },
  docker: {
    name: 'Docker',
    icon: 'logos:docker-icon',
  },
  tailwindcss: {
    name: 'Tailwind CSS',
    icon: 'logos:tailwindcss-icon',
  },
  prismaORM: {
    name: 'Prisma ORM',
    icon: 'lineicons:prisma',
  },
};
