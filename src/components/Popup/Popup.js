import React from "react";
import './Popup.css';

function Popup(props) {
  const { openedPopup, closePopup } = props;
  return(
    <section className={openedPopup ? 'popup popup_opened' : 'popup'}>
      <div className="container container_popup">
        <button className="popup__close-btn" onClick={closePopup}>X</button>
        {props.children}
      </div>
      <div className="filter"></div>
    </section>
  );
};

export default Popup;