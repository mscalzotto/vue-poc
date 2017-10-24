export const filtersToString = (filters, callApi) => {
  var params = new URLSearchParams()

  params.append('offset', filters.offset)
  if (callApi) {
    params.append('limit', filters.limit)
  }
  if (filters.name) {
    params.append('name', filters.name)
  }
  if (filters.star && filters.star.length > 0) {
    params.append('star', filters.star)
  }
  if (filters.price_range.change) {
    params.append('price_range', `${filters.price_range.value[0]}-${filters.price_range.value[1]}`)
  }
  return params.toString()
}
export const paramsToFilter = (params, filters) => {
  let newState = {...filters}
  if (params.name) {
    newState.name = params.name
  }
  if (params.star) {
    newState.star = params.star.split(',').map(Number)
  }
  if (params.offset) {
    newState.offset = params.offset
  }
  if (params.price_range) {
    let range = params.price_range.split('-')
    newState.price_range.min = range[0]
    newState.price_range.max = range[1]
    newState.price_range.change = true
  }
  return newState
}
