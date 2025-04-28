import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../../../prisma/prisma'



export default async function handler(req: NextApiRequest) {
    const{id}=await req.json()
    const user=await prisma.user.findUnique({
        where:{
            id:id
        },
        include:{
            messages:true
        }
    })
    return 
  
}