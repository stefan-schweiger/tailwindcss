export default function (value) {
  value = `${value}`

  // Flip sign of numbers
  if (/^[+-]?(\d+|\d*\.\d+)(e[+-]?\d+)?(%|\w+)?$/.test(value)) {
    return value.replace(/^[+-]?/, (sign) => (sign === '-' ? '' : '-'))
  }

  if (value.includes('var(') || value.includes('calc(')) {
    return `calc(${value} * -1)`
  }

  return value
}
