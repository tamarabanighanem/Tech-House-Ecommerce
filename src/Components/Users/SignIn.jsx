import React, { useEffect, useState } from 'react'
import '../../CSS/Users.css'
import Logo from '../../Images/Techhouse-logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SignGoogle from './SignInWithGoogle'
import Facebook from './SigInWithFacebook';

if (localStorage.Users === undefined) {
  localStorage.setItem('Users', JSON.stringify([]))
}

export default function SignIn({updateIsLog}) {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  const [users, setUsers] = useState(JSON.parse(localStorage.Users));
  const [user, setUser] = useState({});
  const [path, setPath] = useState('/');

  const location = useLocation();

  useEffect( () => {
    if (location.search === "?CheckOut")
      setPath('/payment');
  }, []);

  const themeValue = {
    success: "green",
    error: "red",
    warning: "red",
    normal: "teal"
  }

  const [inputTheme, setInputTheme] = useState({
    email: themeValue.normal,
    password: themeValue.normal
  });

  const [massageWarning, setMassageWarning] = useState({
    email: '',
    password: ''
  })

  function checkSignIn(email, password) {

    for (let index = 0; index < users.length; index++) {
      if (email === users[index].email && password === users[index].password) {
        return users[index];
      }
    }
    return false;
  }

  function handleEmail(event) {
    const patternEmail = /^[A-z0-9\.]+@[A-z0-9]+\.[A-z]{3,5}$/;
    const email = event.target.value;

    if (email === '') {
      setInputTheme({ ...inputTheme, email: themeValue.normal });
      setMassageWarning({ ...massageWarning, email: '' });
    }
    else if (!patternEmail.test(email)) {
      setInputTheme({ ...inputTheme, email: themeValue.error });
      setMassageWarning({ ...massageWarning, email: 'Invalid email' });
    }
    else {
      setMassageWarning({ ...massageWarning, email: '' });
      setInputTheme({ ...inputTheme, email: themeValue.success });
      setUser({ ...user, email: email });
    }
  }

  function handlePassword(event) {
    const patternPassword = /^(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[\!@#$%^&*()\\[\]{}\-_+=~`|:;"'<>,.?]).{8,}$/;
    const password = event.target.value;

    if (password === '') {
      setInputTheme({ ...inputTheme, password: themeValue.normal });
      setMassageWarning({ ...massageWarning, password: '' });
    }
    else if (!patternPassword.test(password)) {
      setInputTheme({ ...inputTheme, password: themeValue.error });
      setMassageWarning({ ...massageWarning, password: 'Invalid password' })
    }
    else {
      setMassageWarning({ ...massageWarning, password: '' });
      setInputTheme({ ...inputTheme, password: themeValue.success });
      setUser({ ...user, password: password });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    let isUser = checkSignIn(user.email, user.password);
    if (isUser) {
      sessionStorage.setItem('User', JSON.stringify(isUser));
      updateIsLog(true);
      event.target.reset();
      navigate(path);
    }
    else {
      setMassageWarning({ ...massageWarning, submit: 'Password or email is incorrect.' });
      setInputTheme({ ...inputTheme, email: themeValue.error, password: themeValue.error });
    }
  }

  return (
    <div class="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      

      <div class="max-w-screen-xl m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center flex-1">

        <div class="flex-1 bg-teal-600 text-center hidden lg:flex">
          <div class="hero-img xl:m-16 w-full bg-contain bg-center bg-no-repeat">
          </div>
        </div>
        <div class="lg:w-1/2 xl:w-5/12 p-6 sm:p-12 sm:w-10/12">
          <div>
            <img
              src={Logo}
              class="w-32 mx-auto"
              alt='Shopping image'
            />
          </div>
          <div class="mt-12 flex flex-col items-center">
            <h1 class="text-2xl xl:text-3xl font-extrabold text-teal-600 ">
              Sign in your account
            </h1>
            <div class="w-full flex-1 mt-8">
              <div class="flex flex-col items-center">

                  <SignGoogle  massage={"Sign in with Google"} path={path} updateIsLog={updateIsLog}/> 

                  <Facebook massage={"Sign in with Facebook"} path={path} updateIsLog={updateIsLog}/>
              </div>

              <div class="my-12 border-b text-center">
                <div
                  class="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2"
                >
                  Or sign in with e-mail
                </div>
              </div>
              <form onSubmit={(event) => handleSubmit(event)}>
                <div class="mx-auto max-w-xs">
                  <div class="mb-6">
                    <label for="email" className={`block mb-2 text-sm font-medium text-${inputTheme.email}-700 dark:text-${inputTheme.email}-500 `}>Email</label>
                    <input onChange={(event) => handleEmail(event)} type="text" id="email" className={`border-${inputTheme.email}-300 text-${inputTheme.email}-900 dark:text-${inputTheme.email}-400 placeholder-${inputTheme.email}-700 dark:placeholder-${inputTheme.email}-500 focus:ring-${inputTheme.email}-500 focus:border-${inputTheme.email}-500 dark:border-${inputTheme.email}-500 bg-white border-2 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 focus:outline-none`} placeholder="Enter your email" />
                    <p className={`mt-2 text-sm text-${themeValue.warning}-600 dark:text-${themeValue.warning}-500`}>{massageWarning.email}<span class="font-medium"></span></p>
                  </div>
                  <div>
                    <label for="password" className={`text-${inputTheme.password}-700 dark:text-${inputTheme.password}-500 block mb-2 text-sm font-medium`}>Password</label>
                    <input onChange={(event) => handlePassword(event)} type="password" id="password" className={`border-${inputTheme.password}-300 text-${inputTheme.password}-900 placeholder-${inputTheme.password}-700 focus:ring-${inputTheme.password}-500 focus:border-${inputTheme.password}-500 dark:text-${inputTheme.password}-500 dark:placeholder-${inputTheme.password}-500 dark:border-${inputTheme.password}-500 bg-white border-2 text-sm rounded-lg dark:bg-gray-700 block w-full p-2.5 focus:outline-none`} placeholder="Enter your password" />
                    <p className={`mt-2 text-sm text-${themeValue.warning}-600 dark:text-${themeValue.warning}-500`}><span class="font-medium">{massageWarning.password}</span></p>
                  </div>
                  <button type='submit'
                    class="mt-5 tracking-wide font-semibold bg-teal-600 text-gray-100 w-full py-4 rounded-lg hover:text-teal-600 hover:bg-gray-200 transition-bg duration-500 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
                  >
                    <svg
                      class="w-6 h-6 -ml-2"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                      <circle cx="8.5" cy="7" r="4" />
                    </svg>
                    <span class="ml-3 ">
                      Sign in
                    </span>
                  </button>
                  <p className={`mt-2 text-sm text-${themeValue.warning}-600 dark:text-${themeValue.warning}-500`}><span class="font-medium">{massageWarning.submit}</span></p>
                  <p className={`mt-2 text-sm text-${themeValue.normal}-600 dark:text-${themeValue.normal}-500`}>Don't have an account! <Link to={path === "/payment" ? { pathname: "/signUp", search: "CheckOut" } : "/signUp"}className={`font-bold text-${themeValue.normal}-300 transition hover:text-${themeValue.normal}-500/75`}>Sign Up</Link></p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}
