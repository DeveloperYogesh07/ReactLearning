export function filterData(SearchInput, Restaurants) {
    const data = Restaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(SearchInput.toLowerCase())
    );
    return data;
  }