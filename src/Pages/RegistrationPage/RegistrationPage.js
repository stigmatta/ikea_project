import './RegistrationPage.css';
import './../../common_styles/LoginAndRegistration.css'

import { useState } from 'react';
import GoBack from '../../assets/GoBack.png'
import ShowPassword from '../LoginPage/assets/ShowPassword.png'


function RegistrationPage(){

    const [name,setName] = useState("");
    const [surname,setSurname] = useState('');
    const [date,setDate] = useState('');
    const [country,setCountry] = useState('');
    const [address,setAddress] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = () => {
      setShowPassword(!showPassword);
    };

    const handleNameChange = (e) =>{
        setName(e.target.value);
    }

    const isNameValid = () => {
        const regex = /^[a-zA-Z]+$/;
        return (name.length>2 && regex.test(name));
    }

    const handleSurnameChange = (e) =>{
        setSurname(e.target.value);
    }

    const isSurnameValid = () => {
        const regex = /^[a-zA-Z]+$/;
        return (surname.length>2 && regex.test(surname));
    }

    const handleDateChange = (e) =>{
        setDate(e.target.value);
    }

    const isDateValid = () => {
        const userDate = new Date(date);
        const currentDate = new Date();
        const ageDifferenceInYears = currentDate.getFullYear() - userDate.getFullYear();
        return ageDifferenceInYears > 6;
    }

    const handleCountryChange = (e) => {
        setCountry(e.target.value);
    }

    const isCountryValid = () =>{
        const regex = /^[a-zA-Z]+$/;
        return (country.length>2 && regex.test(country));
    }
    
    const handleAddressChange = (e)=>{
        setAddress(e.target.value);
    }

    const isAddressValid = () => {
        const regex = /^[a-zA-Z0-9]+$/;
        return regex.test(address);
    }

    const handlePhoneChange = (e) =>{
        setPhone(e.target.value);
    }

    const handleEmailChange = (e) =>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e)=>{
        setPassword(e.target.value);
    }

    const isPasswordValid = () => {
        return password.length>7;
    }

    return(
        <div className="Page">
            <div id = "ImagePart">
                <img src = {GoBack} id = "go-back" alt = "go-back"></img>
            </div>

            <div id = "FormPart">
                <form>
                    <label className='reg-label'>Ім'я
                        <input type = "text" onChange={handleNameChange} required></input>
                    </label>

                    <label className='reg-label'>Прізвище
                        <input type = "text" onChange={handleSurnameChange} required></input>
                    </label>

                    <label className='reg-label'>Дата народження
                        <input type = "date" onChange={handleDateChange} placeholder='xd' required></input>
                    </label>

                    <label className='reg-label'>Країна
                        <input type = "text" onChange={handleCountryChange} required></input>
                    </label>

                    <label className='reg-label'>Адреса
                        <input type = "text" onChange={handleAddressChange} required></input>
                    </label>
                    

                    <label className='reg-label'>Мобільний телефон
                        <input type = "tel" onChange={handlePhoneChange} required></input>
                        <small>
                        By entering your mobile number and one-time code sign-in option,
                         you agree to receive a one-time verification code via SMS from IKEA. Message and data rates may apply.
                        </small>
                        <a href=""><small>More info about Privacy Policy</small></a>
                    </label>
                    
                    <label className='reg-label'>Електронна пошта
                        <input type = "email" onChange={handleEmailChange} required></input>
                        <small id = "verification-text">Вам потрібно буде пройти верифікацію</small>
                    </label>

                   

                    <label className='reg-label'>
                        Пароль
                        <div className='password-input'>
                            <input id = "password-input-form" type={showPassword ? "text" : "password"} />
                            <img id = 'show-password' src={ShowPassword} alt="show-password" onClick={handleShowPassword} />
                        </div>
                    </label>

                    <div id = "save-data-div">
                        <input type="checkbox" id="save-data" name="save-data" value=""></input>
                        <label className='grey-label' id = "registration-label" for="save-data">Я, ознайомлений з Політикою конфіденційності з обробки та захисту персональних даних </label>
                    </div>

                    <button type="submit" id="continue-button">ПРОДОВЖИТИ</button>
                </form>
            </div>
        </div>

    )
}

export default RegistrationPage;