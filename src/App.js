import './App.css';
import React, { useState } from 'react';

function fakeAuthentication(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'test@gmail.com' && password === 'password') {
        resolve('LoggedIn');
      } else {
        reject('error');
      }
    }, 1000);
  });
}


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    const email = document.getElementById('emailInput').value;
    const password = document.getElementById('passwordInput').value;

    fakeAuthentication(email, password).then(LoggedIn => {
      setLoggedIn(true);
    })
      .catch(error => {
        console.error('Ошибка входа:', error);
        alert('Неверные данные.');
      });


  };

  const closeModal = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      {loggedIn && (
        <div className="modal">
          <div className="modal__сontent">
            <h2>Вы успешно вошли в систему!</h2>
            <button className="modal__сloseButton" onClick={closeModal}>Закрыть</button>
          </div>
        </div>
      )}

      <form className="form" onSubmit={handleSubmit}>
        <input className="form__input" type="email" id="emailInput" placeholder="Введите ваш Email" required></input>
        <input className="form__input" type="password" id="passwordInput" placeholder="Введите Пароль" required></input>
        <button className="form__button" type="submit">Войти</button>
      </form>
      <div>Тестовый email:test@gmail.com</div>
      <div>Тестовый password: password</div>
    </div>
  );
}

export default App;