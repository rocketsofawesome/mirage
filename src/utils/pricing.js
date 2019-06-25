import accounting from 'accounting'

export const formatPrice = (value = 0) => {
  return accounting.formatMoney(value)
}
