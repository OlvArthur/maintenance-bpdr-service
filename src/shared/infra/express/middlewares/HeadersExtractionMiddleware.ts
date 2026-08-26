import { Request, Response, NextFunction } from 'express'

export const extractHeaders = (request: Request, response: Response, next: NextFunction) =>{
    const userId = request.headers['x-user-id']
    if (!userId) return response.status(401).json({ error: 'Unauthorized: Missing or invalid x-user-id header' })

    request.user = { id: Number(userId) }
    return next()
}