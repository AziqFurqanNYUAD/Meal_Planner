import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [mealPlans, setMealPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch meal categories on component load
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/list.php?c=list"
        );
        setCategories(response.data.meals);
      } catch (err) {
        console.error("Failed to fetch categories:", err);
      }
    };
    fetchCategories();
  }, []);

  // Fetch meals by selected category
  const fetchMealsByCategory = async (category) => {
    setLoading(true);
    setError("");
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      );
      setMealPlans(response.data.meals);
    } catch (err) {
      setError("Failed to fetch meal plans. Please try again.");
    }
    setLoading(false);
  };

  const fetchRandomMeal = async () => {
    setLoading(true);
    setError("");
    setSelectedCategory(""); // Reset the dropdown
    try {
      const response = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      setMealPlans([response.data.meals[0]]);
    } catch (err) {
      setError("Failed to fetch a random meal. Please try again.");
    }
    setLoading(false);
  };

  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);
    if (category) {
      fetchMealsByCategory(category);
    } else {
      setMealPlans([]);
    }
  };

  const filteredMeals = mealPlans.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mt-5">
      <h1 className="text-center">Meal Selector</h1>
      <div className="mb-4 d-flex justify-content-center gap-3 flex-wrap">
        <select
          className="form-select w-auto"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Select a Category</option>
          {categories.map((category) => (
            <option key={category.strCategory} value={category.strCategory}>
              {category.strCategory}
            </option>
          ))}
        </select>
        <button
          className="btn btn-primary"
          onClick={fetchRandomMeal}
          disabled={loading}
        >
          {loading ? "Loading..." : "Get Random Meal"}
        </button>
      </div>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search for meals..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="row">
        {filteredMeals.map((meal) => (
          <div className="col-md-4 mb-4" key={meal.idMeal}>
            <div className="card">
              <img
                src={meal.strMealThumb}
                className="card-img-top"
                alt={meal.strMeal}
              />
              <div className="card-body">
                <h5 className="card-title">{meal.strMeal}</h5>
                <a
                  href={`https://www.themealdb.com/meal/${meal.idMeal}`}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Recipe
                </a>
              </div>
            </div>
          </div>
        ))}
        {!filteredMeals.length && !loading && !error && (
          <p className="text-center">No meals found. Try a different search or category.</p>
        )}
      </div>
    </div>
  );
};

export default App;
