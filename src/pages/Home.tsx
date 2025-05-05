import { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import { getTrendingRecipes } from "../services/api";
import { Recipe } from "../components/RecipeCard";
import SkeletonCard from "../components/SkeletonCard";

const Home = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // const [searchQuery, setSearchQuery] = useState<string>('')
  // const [searchResults, setSearchResults] = useState<Recipe[]>([])

  useEffect(() => {
    let isMounted = true; // Flag to track if component is mounted
    
    const fetchRecipes = async () => {
      try {
        const data = await getTrendingRecipes();
        if (isMounted) {
          setRecipes(data);
        }
      } catch (error) {
        if (isMounted) {
          console.error("Error fetching recipes:", error);
        }
      } finally {
        if (isMounted) {
          console.log("Fetch completed");
          setLoading(false);
        }
      }
    };

    fetchRecipes();
    
    return () => {
      isMounted = false;
    };
  }, []);
  
  return (
    <div className="home bg-sky-50 min-h-screen">
      <div className="title pt-8">
        <h1 className="text-center text-4xl font-bold">CrumbTrail</h1>
        <p className="text-center mt-2 text-xl italic">
          Leaving a trail of tastier choices
        </p>
      </div>
      <div className="search mt-10 mx-[20px]">
        <SearchBar />
      </div>
      <hr className="mt-10 mx-8" />
      <div className="trending-recipes">
        <div className="trending-title justify-center mt-10 border p-2 rounded-xl mx-[5px] md:mx-[350px] bg-amber-50 ">
          <h2 className="text-center text-2xl font-bold ">Trending Recipes</h2>
        </div>
        <div className="trending-cards flex flex-wrap justify-center mt-10 gap-4 pb-5">
          {loading ? (
            <>
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
              <SkeletonCard />
            </>
          ) : recipes && recipes.length > 0 ? (
            recipes.map((recipe) => (
              <RecipeCard recipe={recipe} key={recipe.id} />
            ))
          ) : (
            <div className="text-center p-8">No recipes found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;