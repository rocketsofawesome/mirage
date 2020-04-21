import accounting from 'accounting'

export const formatPrice = (value = 0, ...options) => {
  return accounting.formatMoney(value, ...options)
}

export const calculateItemPriceAdjustment = ({ amount, adjustments, on_sale }) => {
  const eligibleAdjustments = adjustments.filter(
    adjustment => (adjustment.eligible && adjustment.label !== 'Tax')
  )

  if (!on_sale && eligibleAdjustments.length === 0) {
    return null
  }

  const adjustmentTotal = eligibleAdjustments.reduce(
    (total, adjustment) => (total + parseFloat(adjustment.amount)), 0
  )
  return parseFloat(amount) + adjustmentTotal
}
