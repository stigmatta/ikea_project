import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import BlackButton from '../Components/BlackButton/BlackButton';
import TransparentButton from '../Components/TransparentButton/TransparentButton';
import ShowPassword from './assets/ShowPassword.png';
import Info from './assets/Info.png';
import GoBack from '../../assets/GoBack.png';
import './LoginPage.css';
import '../../common_styles/FontAndColors.css';
import '../../common_styles/LoginAndRegistration.css';

function LoginPage({ setCurrentPage }) {
  useEffect(() => {
    setCurrentPage("login");
  }, [setCurrentPage]);

  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    // history.push('/main_page');
  };

  return (
    <div className="Page">
      <div className="ImagePart">
        <Link to="/"><a href=""><img id="go-back" src={GoBack} alt="go-back" /></a></Link>
        <h1 className="ImagePartText">заповніть вхід до облікового запису</h1>
      </div>
      <div className="LoginFormPart">
        <form className='login-form' onSubmit={handleFormSubmit}>
          <label className='login-label'>
            Електронна пошта або мобільний номер
            <input type="email" />
            <small>
              By entering your mobile number and one-time code sign-in option, you agree to receive a one-time
              verification code via SMS from IKEA. Message and data rates may apply.
            </small>
            <a href=""><small>More info about Privacy Policy</small></a>
          </label>

          <label className='login-label'>
            Пароль
            <div className='password-input'>
              <input
                id="password-input-form"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
              />
              <img
                id='show-password'
                src={ShowPassword}
                alt="show-password"
                onClick={handleShowPassword}
              />
            </div>
            <a href=""><small id="forgot-password">Забули свій пароль?</small></a>
          </label>

          <div id="save-data-div">
            <input type="checkbox" id="save-data" name="save-data" value="Зберегти інформацію"></input>
            <label className='grey-label' id="save-label" htmlFor="save-data">Зберегти інформацію </label><br></br>
            <img id="info-button" src={Info} alt="info-button" />
          </div>

          <BlackButton id="log-black-button" title="ПРОДОВЖИТИ" type="submit" width='428px' height='50px'></BlackButton>

        </form>

        <small id="create-acc">У вас ще немає облікового запису? Створіть його:</small>
        <Link className='browser-link' to="/registration" id="log-trans-button">
          <TransparentButton id="log-trans-button" title="створити аккаунт" type="button"></TransparentButton>
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
