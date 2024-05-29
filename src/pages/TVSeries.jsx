import Header from "../components/header/Header";
import Searchbar from "../components/searchbar/Searchbar";

function TVSeries() {
  return (
    <>
      <Header />
      <Searchbar
        labelText="Search for TV series"
        placeholderText="Search for TV series"
      />
      <main>
        <h1>TVSeries Page</h1>
        <p>This is the "TVSeries" page</p>
      </main>
    </>
  );
}

export default TVSeries;
