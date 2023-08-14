export const setProductList = (productList) => ({
  type: `SET_PRODUCT_LIST`,
  payload: productList,
});
export const setCategoryFilter = (category) => ({
  type: `SET_CATEGORY_FILTER`,
  payload: category,
});
export const setPriceRangeFilter = (priceRange) => ({
  type: `SET_PRICE_RANGE_FILTER`,
  payload: priceRange,
});
export const setSearchQuery = (query) => ({
  type: `SET_SEARCH_QUERY`,
  payload: query,
});
export const setSorttBy = (sortOption) => ({
  type: `SET_SORT_BY`,
  payload: sortOption,
});
