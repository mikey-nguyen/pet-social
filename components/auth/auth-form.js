import classes from './auth-form.module.scss';
import { useState, useRef } from 'react';
import { createUser } from '../../utilities/createUser';

function AuthForm() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  function switchAuthModeHandler() {
    setIsLogin(prevState => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    // TO DO: ... ADD VALIDATION ON CLIENT SIDE

    if (isLogin) {
      // TO DO: ... LOG USER IN
    } else {
      try {
        const result = await createUser(enteredEmail, enteredPassword);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <section className={classes.auth}>
      <h1 className={classes.auth__header}>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.form__container}>
          <label htmlFor="email" className={classes.form__label} />
          <input
            type="email"
            id="email"
            placeholder="Email"
            required
            ref={emailInputRef}
            className={classes.form__input}
          />
        </div>

        <div>
          <label htmlFor="password" className={classes.form__label} />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
            ref={passwordInputRef}
            className={classes.form__input}
          />
        </div>

        <div className={classes.button}>
          <button className={classes.button__action}>
            {isLogin ? 'Login' : 'Create Account'}
          </button>
          <button
            type="button"
            className={classes.button__toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'New to Pet Social?' : 'Already have an account?'}
          </button>
        </div>
      </form>
    </section>
  );
}

export default AuthForm;