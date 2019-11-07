import accounting from 'accounting'

export const formatPrice = (value = 0, ...options) => {
  return accounting.formatMoney(value, ...options)
}
