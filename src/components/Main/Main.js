import React from "react";
import ContentSection from "../ContentSection/ContentSection";
import About from "../About/About";
import { Route, Routes } from 'react-router-dom';

function Main(props) {
  const { booksList, clearBooks, openBookPopup } = props;

  return (
    <main className="main">
      <Routes>
        <Route exact path="/" element={<ContentSection booksList={booksList} clearBooks={clearBooks} openBookPopup={openBookPopup}></ContentSection>}>
        </Route>
        <Route path="/about" element={<About></About>}>
        </Route>
      </Routes>
    </main>
  );
}

export default Main;