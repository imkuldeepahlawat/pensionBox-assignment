import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setProductList,
  setCategoryFilter,
  setPriceRangeFilter,
  setSorttBy,
} from "../redux/productActions";
import ProductCard from "./ProductCard";

const Product = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList);
  const categoryFilter = useSelector((state) => state.categoryFilter);
  const priceRangeFilter = useSelector((state) => state.priceRangeFilter);
  const searchQuery = useSelector((state) => state.searchQuery);
  const sortBy = useSelector((state) => state.sortBy);

  useEffect(() => {
    const onLoad = async () => {
      try {
        let url = `https://fakestoreapi.com/products/`;
  
        if (categoryFilter) {
          url += `category/${categoryFilter}`;
        }
  
        if (sortBy) {
          url += `?sort=${sortBy}`;
        }
  
        const response = await axios.get(url);
        let filteredList = response.data;
  
        if (priceRangeFilter !== null) {
          // Filter by price range
          filteredList = filteredList.filter((item) => item.price <= priceRangeFilter);
        }
  
        if (searchQuery !== "") {
          // Filter by search query in the title
          filteredList = filteredList.filter((item) => item.title.includes(searchQuery));
        }
  
        dispatch(setProductList(filteredList));
      } catch (error) {
        console.log("Error fetching and filtering products:", error);
      }
    };
  
    onLoad();
  
    // Add dispatch to the dependency array if it's defined within this component
  }, [categoryFilter, priceRangeFilter, searchQuery, sortBy, dispatch]);
  

  const handleCategoryChange = (e) => {
    if (e.target.value == "null") {
      dispatch(setCategoryFilter(null));
    } else {
      dispatch(setCategoryFilter(e.target.value));
    }
  };
  const handleSortByChange = (e) => {
    if (e.target.value === "null") {
      dispatch(setSorttBy(null));
    } else {
      dispatch(setSorttBy(e.target.value));
    }
  };
  const handlePriceRangeFilter = (e) => {
    if (e.target.value === "null") {
      dispatch(setPriceRangeFilter(null));
    } else {
      dispatch(setPriceRangeFilter(e.target.value));
    }
  };
  // men's clothing
  return (
    <div className="flex flex-col  md:flex-row ">
    {/* filter */}
      <div className="w-[15%] p-2">
        <h2 className="font-semibold text-4xl md:flex md:flex-wrap">Filters</h2>
        {/* category */}
        <div className="">
          <h4 className="font-bold">Category</h4>
          <ul className="ml-[10px]">
            <li className="flex gap-1">
              <input
                type="radio"
                name="category"
                value="null"
                onClick={handleCategoryChange}
              />
              <span className="font-Bold text-lg ">Default</span>
            </li>
            <li className="flex gap-1">
              <input
                type="radio"
                name="category"
                value="men's clothing"
                onClick={handleCategoryChange}
              />
              <span className="font-Bold text-lg ">Men</span>
            </li>
            <li className="flex gap-1">
              <input
                type="radio"
                name="category"
                value="women's clothing"
                onClick={handleCategoryChange}
              />
              <span className="font-Bold text-lg ">Women</span>
            </li>
            <li className="flex gap-1">
              <input
                type="radio"
                name="category"
                value="jewelery"
                onClick={handleCategoryChange}
              />
              <span className="font-Bold text-lg ">Jewelery</span>
            </li>
            <li className="flex gap-1">
              <input
                type="radio"
                name="category"
                value="electronics"
                onClick={handleCategoryChange}
              />
              <span className="font-Bold text-lg ">Electronics</span>
            </li>
          </ul>
        </div>
        {/* price range */}
        <div className="">
          <h4 className="font-bold">Price Range</h4>
          <ul className="ml-[10px]">
            <li className="flex gap-1">
              <input
                type="radio"
                name="priceRange"
                value="null"
                onClick={handlePriceRangeFilter}
              />
              <span className="font-Bold text-lg ">Default</span>
            </li>
            <li className="flex gap-1">
              <input
                type="radio"
                name="priceRange"
                value="50"
                onClick={handlePriceRangeFilter}
              />
              <span className="font-Bold text-lg ">0 - 50</span>
            </li>
            <li className="flex gap-1">
              <input
                type="radio"
                name="priceRange"
                value="100"
                onClick={handlePriceRangeFilter}
              />
              <span className="font-Bold text-lg ">100</span>
            </li>
            <li className="flex gap-1">
              <input
                type="radio"
                name="priceRange"
                value="500"
                onClick={handlePriceRangeFilter}
              />
              <span className="font-Bold text-lg ">500</span>
            </li>
            <li className="flex gap-1">
              <input
                type="radio"
                name="priceRange"
                value="1000"
                onClick={handlePriceRangeFilter}
              />
              <span className="font-Bold text-lg ">1000</span>
            </li>
          </ul>
        </div>
        {/* sort */}
        <div className="">
          <h4 className="font-bold">Sort</h4>
          <ul className="ml-[10px]">
            <li className="flex gap-1">
              <input
                type="radio"
                name="sort"
                value="null"
                onClick={handleSortByChange}
              />
              <span className="font-Bold text-lg ">Ascending (Default)</span>
            </li>
            <li className="flex gap-1">
              <input
                type="radio"
                name="sort"
                value="desc"
                onClick={handleSortByChange}
              />
              <span className="font-Bold text-lg ">Descending</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-[85%] flex flex-wrap flex-shrink gap-2">
        {productList.length === 0 ? (
          <></>
        ) : (
          productList.map((item) => {
            return <ProductCard key={item.id} card={item} />;
          })
        )}
      </div>
    </div>
  );
};

export default Product;
