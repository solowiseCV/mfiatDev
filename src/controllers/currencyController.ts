import { Response, NextFunction } from 'express'
import { AuthRequest, successResponse } from '../types'
import * as currencyService from '../services/currencyService'

export const convert = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { from, to, amount } = req.query

    const data = await currencyService.convert(
      from as string,
      to as string,
      parseFloat(amount as string)
    )

    res.json(successResponse('Conversion rate retrieved', data))
  } catch (err) {
    next(err)
  }
}


export const getRates = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  try {
    const { base, symbols } = req.query

    const symbolList = (symbols as string)
      .split(',')
      .map((s) => s.trim())
      .filter(Boolean)

    const data = await currencyService.getRates(base as string, symbolList)

    res.json(successResponse('Rates retrieved', data))
  } catch (err) {
    next(err)
  }
}