import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET( res: NextApiResponse) {
 

  try {
    // Fetch all colleges
    const colleges = await prisma.college.findMany()

    if (colleges.length === 0) {
      return res.status(400).json({ message: 'No colleges found. Seed colleges first.' })
    }

    // Generate courses for all colleges
    const coursesData = colleges.flatMap((college) => [
      {
        name: 'B.Tech in Computer Science',
        description: `Computer Science program at ${college.name}`,
        collegeId: college.id
      },
      {
        name: 'B.Tech in Biotechnology',
        description: `Biotechnology program at ${college.name}`,
        collegeId: college.id
      },
      {
        name: 'M.Tech in Mechanical Engineering',
        description: `Mechanical Engineering program at ${college.name}`,
        collegeId: college.id
      },
      {
        name: 'B.Ed in Education',
        description: `Education program at ${college.name}`,
        collegeId: college.id
      }
    ])

    // Create courses
    const createdCourses = await prisma.course.createMany({
      data: coursesData,
      skipDuplicates: true
    })

    return NextResponse.json({"YAYA":"Hell yeah"})
  } catch (error) {
    console.error('Course seeding error:', error)
    return NextResponse.json({"sorry btro":":("})
  }
}