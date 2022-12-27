import Footer from "./Footer";
import Header from "./Header";
import ItemListContainer from "./ItemListContainer";
import Main from "./Main";

function App() {
  return (
    <>
      <Header />
      <ItemListContainer greeting="mensaje de texto" />
      <Main/>
      <Footer />
    </>
  );
}

export default App;
