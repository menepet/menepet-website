/**
 * Returns the basic head meta tags for a good SEO ranking
 * @param {*} title - page title
 * @param {*} description - page description
 * @returns a spread object with title and meta tags
 */
export const metaHead = (title, description) => ({
  title,
  meta: [{
    hid: 'title',
    name: 'title',
    content: title
  }, {
    hid: 'og:title',
    name: 'og:title',
    content: title
  }, {
    hid: 'description',
    name: 'description',
    content: description
  }, {
    hid: 'og:description',
    name: 'og:description',
    content: description
  }]
})

/**
 * Calculates the diff between two Dates and returns a string.
 * Usually the date2 is bigger
 * @param {date} date1 - January, 2020
 * @param {date} date2 - January, 2021
 * @returns an Object like: { years: 1, months: 2 }
 */
export const diffDates = (date1, date2) => {
  const date1Year = date1?.getFullYear()
  const date2Year = date2?.getFullYear()
  const date1Month = date1?.getMonth()
  const date2Month = date2?.getMonth()
  const monthsDiff = (date2Month + 12 * date2Year) - (date1Month + 12 * date1Year)

  return {
    years: Math.floor(monthsDiff / 12),
    months: monthsDiff % 12
  }
}
