export interface CurrencyFreaksResponse {
  date: string
  base: string
  rates: Record<string, string>
}

export interface ConversionResult {
  from: string
  to: string
  amount: number
  exchangeRate: number
  conversionFee: number
  conversionFeePercent: number
  convertedAmount: number
  amountAfterFee: number
  rateDate: string
  deliveryTime: string
}