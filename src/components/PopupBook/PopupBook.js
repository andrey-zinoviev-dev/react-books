import React from "react";
import './PopupBook.css';
import Popup from '../Popup/Popup';

function PopupBook(props) {
  const { openedPopup, closePopup, book } = props;
  return (
    <Popup closePopup={closePopup} openedPopup={openedPopup}>
      <h2>Подробнее о книге</h2>
        <div className="book">
          <div className="book__text">
            <h3>{book.name}</h3>
            <p>{book.description}</p>
            <p>Автор: {book.author}</p>
          </div>
            <img src={book.image} alt={book.name}></img>
        </div>
    </Popup>
  );
};

export default PopupBook;