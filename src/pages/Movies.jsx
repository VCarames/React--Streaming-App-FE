import Header from "../components/header/Header";
import Searchbar from "../components/searchbar/Searchbar";

function Movies() {
  return (
    <>
      <Header />
      <Searchbar
        labelText="Search for movies"
        placeholderText="Search for movies"
      />
      <main>
        <h1>Movies Page</h1>
        <p>This is the "Movies" page</p>
      </main>
    </>
  );
}

export default Movies;
