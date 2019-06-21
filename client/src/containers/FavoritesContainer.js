import React from "react";
import FavoriteParks from "../components/FavoriteParks";
import FavoritesHeader from "../components/FavoritesHeader";

const FavoritesContainer = () => {
  return (
    <div>
      <div>
        <FavoritesHeader />
      </div>
      <div className="ui four column grid">
        <div>
          <FavoriteParks />
        </div>
      </div>
    </div>
  );
};

export default FavoritesContainer;
