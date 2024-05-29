import Header from "../components/header/Header";
import Searchbar from "../components/searchbar/Searchbar";

function Bookmarked() {
  return (
    <>
      <Header />
      <Searchbar
        labelText="Search for bookmarked shows"
        placeholderText="Search for bookmarked shows"
      />
      <main>
        <h1>Bookmarked Page</h1>
        <p>This is the "Bookmarked" page</p>
      </main>
    </>
  );
}

export default Bookmarked;
