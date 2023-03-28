export const getCurPage = () => {
    const pages = getCurrentPages()
    const curPage = pages[pages.length - 1] || {}
    return curPage
}

export const getCurQuery = () => {
    const options = getCurPage().options || {}
    return options
}

export const formatQueryStr = (query = {}) => {
  const params = []
  console.log(query)
  Object.keys(query).forEach((key) => {
    let value = query[key]
    if (typeof value === 'undefined') {
      value = ''
    }
    params.push([key, value].join('='))
  })
  return params.join('&')
}
