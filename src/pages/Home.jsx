import Header from "../components/header/Header";
import SearchBar from "../components/searchbar/Searchbar";

function Home() {
  return (
    <>
      <Header />
      <SearchBar
        labelText="Search for movies or TV series"
        placeholderText="Search for movies or TV series"
      />
      <main>
        <h1>Home Page</h1>
        <p>This is the "Home" page</p>
      </main>
    </>
  );
}

export default Home;
