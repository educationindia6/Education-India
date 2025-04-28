import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../prisma/prisma'
import { NextResponse } from 'next/server'
import {sendMail} from '../../../../components/emailMessage.ts'

export  async function POST(req: NextApiRequest, res: NextApiResponse) {
  const {collegeName,message}=(await req.json())
  const college=await prisma.college.findUnique({
    where:{
        name:collegeName
    },
    include:{
        enrollments:{
            include:{
                user:true
            }
            
        }
    }
  })
  college?.enrollments.forEach(async (e)=>{

    await prisma.message.create({
        data:{
            collegeId:college.id,
            recipientId:e.user.id,
            content:message
        }
    })
    console.log("message made")
    sendMail(
        "singhsarvagya260508@gmail.com",college.name,message
     
    )
    
    
  })
  return NextResponse.json({"ok":200})
}