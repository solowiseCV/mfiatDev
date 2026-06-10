import { Request, Response, NextFunction } from 'express'
import { BadRequestError } from '../../types'

export const validateConvertQuery = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const { from, to, amount } = req.query

  if (!from || typeof from !== 'string' || from.trim().length === 0) {
    return next(new BadRequestError('from currency is required e.g. ?from=GBP', 400))
  }

  if (!to || typeof to !== 'string' || to.trim().length === 0) {
    return next(new BadRequestError('to currency is required e.g. ?to=NGN', 400))
  }

  if (!amount) {
    return next(new BadRequestError('amount is required e.g. ?amount=10000', 400))
  }

  const parsed = parseFloat(amount as string)

  if (Number.isNaN(parsed) || parsed <= 0) {
    return next(new BadRequestError('amount must be a positive number', 400))
  }

  if (from.length > 10 || to.length > 10) {
    return next(new BadRequestError('Invalid currency code', 400))
  }

  next()
}

export const validateRatesQuery = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const { base, symbols } = req.query

  if (!base || typeof base !== 'string' || base.trim().length === 0) {
    return next(new BadRequestError('base currency is required e.g. ?base=USD', 400))
  }

  if (!symbols || typeof symbols !== 'string' || symbols.trim().length === 0) {
    return next(new BadRequestError('symbols are required e.g. ?symbols=NGN,GHS,KES', 400))
  }

  next()
}

