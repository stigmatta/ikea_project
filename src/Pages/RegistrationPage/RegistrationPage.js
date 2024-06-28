import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import BlackButton from '../Components/BlackButton/BlackButton';
import GoBack from '../../assets/GoBack.png';
import ShowPassword from '../LoginPage/assets/ShowPassword.png';
import '../../common_styles/LoginAndRegistration.css';
import '../../common_styles/FontAndColors.css';
import './RegistrationPage.css';

Modal.setAppElement('#root');

function RegistrationPage({ setCurrentPage }) {
  useEffect(() => {
    setCurrentPage('registration');
  }, [setCurrentPage]);

  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [date, setDate] = useState('');
  const [country, setCountry] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const isNameValid = () => {
    const regex = /^[a-zA-Z]+$/;
    return name.length > 2 && regex.test(name);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const isSurnameValid = () => {
    const regex = /^[a-zA-Z]+$/;
    return surname.length > 2 && regex.test(surname);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const isDateValid = () => {
    const userDate = new Date(date);
    const currentDate = new Date();
    const ageDifferenceInYears = currentDate.getFullYear() - userDate.getFullYear();
    return ageDifferenceInYears > 6;
  };

  const handleCountryChange = (e) => {
    setCountry(e.target.value);
  };

  const isCountryValid = () => {
    const regex = /^[a-zA-Z]+$/;
    return country.length > 2 && regex.test(country);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const isAddressValid = () => {
    const regex = /^[a-zA-Z0-9]+$/;
    return regex.test(address);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Your form submission logic here
    // For demonstration, just open the modal
    setModalIsOpen(true);
  };

  return (
    <div className="Page">
      <div className="RegImagePart">
        <Link to="/">
          <img src={GoBack} id="go-back" alt="go-back" />
        </Link>
      </div>

      <div id="FormPart">
        <form className="reg-form" onSubmit={handleFormSubmit}>
          <label className="reg-label">
            Ім'я
            <input type="text" onChange={handleNameChange} required />
          </label>

          <label className="reg-label">
            Прізвище
            <input type="text" onChange={handleSurnameChange} required />
          </label>

          <label className="reg-label">
            Дата народження
            <input type="date" onChange={handleDateChange} placeholder="xd" required />
          </label>

          <label className="reg-label">
            Країна
            <input type="text" onChange={handleCountryChange} required />
          </label>

          <label className="reg-label">
            Адреса
            <input type="text" onChange={handleAddressChange} required />
          </label>

          <label className="reg-label">
            Мобільний телефон
            <input type="tel" onChange={handlePhoneChange} required />
            <small>
              By entering your mobile number and one-time code sign-in option, you agree to receive a one-time
              verification code via SMS from IKEA. Message and data rates may apply.
            </small>
            <a href="#">
              <small>More info about Privacy Policy</small>
            </a>
          </label>

          <label className="reg-label">
            Електронна пошта
            <input type="email" onChange={handleEmailChange} required />
            <small id="verification-text">Вам потрібно буде пройти верифікацію</small>
          </label>

          <label className="reg-label">
            Пароль
            <div className="password-input">
              <input id="password-input-form" type={showPassword ? 'text' : 'password'} />
              <img
                id="show-password"
                src={ShowPassword}
                alt="show-password"
                onClick={handleShowPassword}
              />
            </div>
          </label>

          <div id="save-data-div">
            <input type="checkbox" id="save-data" name="save-data" value="" />
            <label className="grey-label" id="registration-label" htmlFor="save-data">
              Я, ознайомлений з Політикою конфіденційності з обробки та захисту персональних даних
            </label>
          </div>

          <BlackButton
            id="reg-black-button"
            title="ПРОДОВЖИТИ"
            type="submit"
            width="21.94vw"
            height="50px"
          />
        </form>
      </div>

      <Modal
        className={"modal-window"}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
      >
        <h2>Регістрація відбулася успішно!</h2>
        <Link to="/" className="modal-link">
          <BlackButton minWidth="70px" fSize="clamp(14px,2vw,30px)" width="5vw" onClick={closeModal} title="OK" />
        </Link>
      </Modal>
    </div>
  );
}

export default RegistrationPage;
