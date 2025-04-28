// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Define random courses to add
  const coursesToAdd = [
    { name: 'B.Tech in Rizziology', description: 'An innovative course in Rizziology.' },
    { name: 'M.Tech in Skibidi Science', description: 'Advanced studies in Skibidi Science.' },
    { name: 'B.Tech in Computer Science', description: 'Study of computer systems and programming.' },
    { name: 'B.Tech in Mechanical Engineering', description: 'Focus on mechanical systems and design.' },
    { name: 'B.Tech in Civil Engineering', description: 'Study of infrastructure and construction.' },
    { name: 'M.Sc in Data Science', description: 'Data analysis and machine learning techniques.' },
    { name: 'MBA in Marketing', description: 'Focus on market research and consumer behavior.' },
  ];

  // Fetch all colleges
  const colleges = await prisma.college.findMany();

  // Add random courses to each college
  for (const college of colleges) {
    await prisma.course.createMany({
      data: coursesToAdd.map(course => ({
        name: course.name,
        description: course.description,
        collegeId: college.id, // Associate course with the current college
      })),
    });
  }

  console.log('Courses added to existing colleges.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
