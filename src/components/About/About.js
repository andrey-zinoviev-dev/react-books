import React from "react";
import './About.css';
import '../../blocks/container.css';
import me from '../../images/me.jpg';
import UserContext from "../../contexts/UserContext";
import ListElement from "../ListElement/ListElement";
function About() {

  return (
    //подпись на контекст пользователя, чтобы не передавать его по всей цепочке компонентов из App в About
    <UserContext.Consumer>
      {function (userData) {
        return (
          <section className="about">
          <div className="container">
            <h2>Автор работы</h2>
            <p>{userData.name}, {userData.age} лет (скоро 29)</p>
            <div>
              <h3>Обучение</h3>
              <span>{userData.education}</span>
            </div>
            <div>
              <h3>Увлечения</h3>
              <ul>
                {userData.hobbies && userData.hobbies.map((hobbie, index) => {
                  return <ListElement key={index}>
                    <span>{hobbie}</span>
                  </ListElement>
                })}
              </ul>
            </div>
            <img src={me}></img>
          </div>
        </section>
        )
      }}

    </UserContext.Consumer>

  );
}

export default About;