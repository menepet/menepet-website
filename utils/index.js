
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
