import React from "react";
import BookContextProvider from "./Context/BookContext";
import Navbar from "./Component/Navbar";
import BookList from "./Component/BookList";
import BookForm from "./Component/BookForm";

function App() {
  return (
    <div className="App">
      <BookContextProvider>
        <Navbar />
        <BookList />
        <BookForm />
      </BookContextProvider>
    </div>
  );
}

export default App;
