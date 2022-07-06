import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from '../../contexts/UserContext';
import array from '../../utils';
// import user from '../../utils';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import PopupBook from '../PopupBook/PopupBook';

function App() {
  //создание хуков состояния
  const [books, setBooks] = React.useState([]);
  const [selectedBook, setSelectedBook] = React.useState({});
  const [openedPopup, setOpenedPopup] = React.useState(false);
  //тут может быть залогированный пользователь
  const [userData, setUserData] = React.useState({});
  //методы
  function clearBooks() {
    setBooks([]);
  }
  function openPopup(book) {
    // console.log(book);
    setSelectedBook(book);
    setOpenedPopup(true);
  }
  function closePopup() {
    // console.log('window closed');
    setOpenedPopup(false);
  }
  //здесь симулируется обарщение к серверу для получения значений из бд, например
  //массив зависиомстей пустой, иначем будет бесконечный ререндер DOM
  React.useEffect(() => {
    setBooks(array);
    setUserData({
      name: "Андрей Зиновьев",
      age: 29,
      education: 'РЭУ им. Г.В Плеханова',
      courses: 'Yandex Praktikum',
      hobbies: ["японский", "озвучка", "тренажерный зал", "ночная работа", "аним- стоп, нет"]
    })
  }, []);

  return (
    <BrowserRouter>
      <React.Fragment>
        <UserContext.Provider value ={userData}>
          <Header></Header>
          <Main booksList={books} clearBooks={clearBooks} openBookPopup={openPopup}></Main>
          <Footer></Footer>
          <PopupBook openedPopup={openedPopup} closePopup={closePopup} book={selectedBook}></PopupBook>
        </UserContext.Provider>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
