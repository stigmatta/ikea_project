import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import BlackButton from '../Components/BlackButton/BlackButton';
import TransparentButton from '../Components/TransparentButton/TransparentButton';
import ShowPassword from './assets/ShowPassword.png';
import Info from './assets/Info.png';
import GoBack from '../../assets/GoBack.png';
import './LoginPage.css';
import '../../common_styles/FontAndColors.css';
import '../../common_styles/LoginAndRegistration.css';

Modal.setAppElement('#root');

function LoginPage({ setCurrentPage }) {
  const [showPassword, setShowPassword] = useState(false);
  const [emailOrNumber, setEmailOrNumber] = useState('');
  const [password, setPassword] = useState('');
  const [saveData, setSaveData] = useState(false);
  const [formValid, setFormValid] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setCurrentPage('login');
  }, [setCurrentPage]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleEmailOrNumberChange = (event) => {
    setEmailOrNumber(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSaveDataChange = (event) => {
    setSaveData(event.target.checked);
  };

  const validateForm = () => {
    return emailOrNumber.trim() !== '' && password.trim() !== '';
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const isValid = validateForm();

    if (isValid) {
      setFormValid(true);
      setModalIsOpen(true);
    } else {
      setFormValid(false);
      // Optionally, you can handle invalid form submission (e.g., show error message)
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="Page">
      <div className="ImagePart">
        <Link to="/">
          <img id="go-back" src={GoBack} alt="go-back" />
        </Link>
        <h1 className="ImagePartText">заповніть вхід до облікового запису</h1>
      </div>
      <div className="LoginFormPart">
        <form className="login-form" onSubmit={handleFormSubmit}>
          <label className="login-label">
            Електронна пошта або мобільний номер
            <input
              type="text"
              value={emailOrNumber}
              onChange={handleEmailOrNumberChange}
              required
            />
            <small>
              By entering your mobile number and one-time code sign-in option, you agree to receive a one-time
              verification code via SMS from IKEA. Message and data rates may apply.
            </small>
            <a href="#">
              <small>More info about Privacy Policy</small>
            </a>
          </label>

          <label className="login-label">
            Пароль
            <div className="password-input">
              <input
                id="password-input-form"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={handlePasswordChange}
                required
              />
              <img
                id="show-password"
                src={ShowPassword}
                alt="show-password"
                onClick={handleShowPassword}
              />
            </div>
            <a href="#">
              <small id="forgot-password">Забули свій пароль?</small>
            </a>
          </label>

          <div id="save-data-div">
            <input
              type="checkbox"
              id="save-data"
              name="save-data"
              checked={saveData}
              onChange={handleSaveDataChange}
            />
            <label className="grey-label" id="save-label" htmlFor="save-data">
              Зберегти інформацію
            </label>
            <br />
            <img id="info-button" src={Info} alt="info-button" />
          </div>

          <BlackButton
            id="log-black-button"
            title="ПРОДОВЖИТИ"
            type="submit"
            width="428px"
            height="50px"
            disabled={!validateForm()}
          />

        </form>

        <small id="create-acc">
          У вас ще немає облікового запису? Створіть його:
        </small>
        <Link className="browser-link" to="/registration" id="log-trans-button">
          <TransparentButton
            id="log-trans-button"
            title="створити аккаунт"
            type="button"
          />
        </Link>
      </div>

      <Modal
        className="modal-window"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
      >
        <h2>Авторизація відбулася успішно!</h2>
        <Link to="/" className="modal-link">
          <BlackButton
            minWidth="70px"
            fSize="clamp(14px,2vw,30px)"
            width="5vw"
            onClick={closeModal}
            title="OK"
          >
            OK
          </BlackButton>
        </Link>
      </Modal>
    </div>
  );
}

export default LoginPage;
