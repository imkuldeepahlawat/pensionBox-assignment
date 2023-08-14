const setProductList = (productList) => ({
  type: `SET_PRODUCT_LIST`,
  payload: productList,
});
const setCategoryFilter = (category) => ({
  type: `SET_CATEGORY_FILTER`,
  payload: category,
});
const setPriceRangeFilter = (priceRange) => ({
  type: `SET_PRICE_RANGE_FILTER`,
  payload: priceRange,
});
const setSearchQuery = (query) => ({
  type: `SET_SEARCH_QUERY`,
  payload: query,
});
const setSorttBy = (sortOption) => ({
  type: `SET_SORT_BY`,
  payload: sortOption,
});
const setPageNo = (pageNo) => ({
  type: `SET_PAGE_NO`,
  payload: pageNo,
});

export {
  setProductList,
  setCategoryFilter,
  setPriceRangeFilter,
  setSearchQuery,
  setSorttBy,
  setPageNo
};
