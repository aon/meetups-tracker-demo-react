import {useContext} from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);
  const anyFavorites = favoritesCtx.totalFavorites > 0

  return <section>
    <h1>My Favorites</h1>
    {anyFavorites && <MeetupList meetups={favoritesCtx.favorites} />}
    {!anyFavorites && <p>You have no favorites yet. Wanna add some?</p>}
  </section>;
}

export default FavoritesPage;
