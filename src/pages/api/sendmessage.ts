import { fauna } from '@/lib/fauna'
import { query as Q } from 'faunadb'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  message: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const method = req.method
  const request = req.body

  if(method === 'POST') {
    
    try {
      const response = await fauna.query(
        Q.Create(
          Q.Collection('messages'), {
            data: request
          }
        )
      )

      if(response) {
        res.status(200).json({ message: 'Proposta enviada com sucesso' })
      } else {
        res.status(400).json(response)
      }
      return
    } catch (error) {
      res.status(400).json({message: error as any})
      return
    }
  }

  res.status(405).json({ message: 'Método de requisição não permitido' })
}
