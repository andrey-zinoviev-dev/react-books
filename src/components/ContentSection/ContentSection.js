import React from "react";
import './ContentSection.css';
import ListElement from "../ListElement/ListElement";

function ContentSection(props) {
  const { booksList, clearBooks, openBookPopup } = props;
  
  return (
    <section className="content">
      <div className="container">
        <h2 className="content__headline">Книги, которые я почти прочитал</h2>
        <ul className="content__headline-list">
          {booksList && booksList.map((book, index) => {
            return <ListElement key={index} classValue="content__headline-list-element">
              <h3 className="content__headline-list-element-headline">{book.name}</h3>
              <img className="content__headline-list-element-img" src={book.image} alt=""></img>
              <button onClick={() => {
                openBookPopup(book);
              }}>Подробнее</button>
            </ListElement>
          })}
        </ul>
        <button onClick={clearBooks}>Отменить книги</button>
      </div>
    </section>
  )
}

export default ContentSection;