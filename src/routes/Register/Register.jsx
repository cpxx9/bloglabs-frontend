import { useRef, useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from '../../api/axios';
import StyledRegister from './StyledRegister';
import useAuth from '../../hooks/useAuth';

const USER_REGEX = /^[A-z][A-z0-9-_]{5,30}$/;
const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,32}$/;
const REGISTER_URL = '/register';

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();
  const { setAuth } = useAuth();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = EMAIL_REGEX.test(email);
    setValidEmail(result);
  }, [email]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [user, email, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg('Invalid Entry');
      return;
    }

    if (email !== '') {
      const v3 = EMAIL_REGEX.test(email);
      if (!v3) {
        setErrMsg('Invalid email');
        return;
      }
    }

    try {
      const res = await axios.post(
        REGISTER_URL,
        email !== ''
          ? JSON.stringify({ username: user, email, password: pwd, confirmPassword: matchPwd })
          : JSON.stringify({ username: user, password: pwd, confirmPassword: matchPwd }),
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        },
      );
      const accessToken = res?.data?.token;
      setAuth({ user, accessToken });
      navigate(`${location.state.path}`);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No server response');
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed');
      }
      errRef.current.focus();
    }
  };

  return (
    <StyledRegister>
      <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
        {errMsg}
      </p>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="username">
              Username:
              <span className={validName ? 'valid' : 'hide'}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={validName || !user ? 'hide' : 'invalid'}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              type="text"
              name="username"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              required
              aria-invalid={validName ? 'false' : 'true'}
              aria-describedby="uidnote"
              onFocus={() => {
                setUserFocus(true);
              }}
              onBlur={() => {
                setUserFocus(false);
              }}
            />
            <p
              id="uidnote"
              className={userFocus && user && !validName ? 'instructions note' : 'offscreen note'}>
              <FontAwesomeIcon icon={faInfoCircle} />
              5 to 30 characters. <br /> Must begin with a letter. <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>
          </li>
          <li>
            <label htmlFor="email">
              Email:
              <span className={validEmail ? 'valid' : 'hide'}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={validEmail || !email ? 'hide' : 'invalid'}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <p className="not-req">
              <em>(Not required)</em>
            </p>
            <input
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={validName ? 'false' : 'true'}
              aria-describedby="uidnote"
              onFocus={() => {
                setEmailFocus(true);
              }}
              onBlur={() => {
                setEmailFocus(false);
              }}
            />
            <p
              id="emailnote"
              className={
                emailFocus && email && !validEmail ? 'instructions note' : 'offscreen note'
              }>
              <FontAwesomeIcon icon={faInfoCircle} />
              Must be a valid email!
            </p>
          </li>
          <li>
            <label htmlFor="password">
              Password:
              <span className={validPwd ? 'valid' : 'hide'}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
              <span className={validPwd || !pwd ? 'hide' : 'invalid'}>
                <FontAwesomeIcon icon={faTimes} />
              </span>
            </label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              required
              aria-invalid={validPwd ? 'false' : 'true'}
              aria-describedby="pwdnote"
              onFocus={() => {
                setPwdFocus(true);
              }}
              onBlur={() => {
                setPwdFocus(false);
              }}
            />
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? 'instructions note' : 'offscreen note'}>
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 32 characters. <br /> Must include uppercase and lowercase letters, a number, and
              a special character. <br />
              Allowed special characters: <span aria-label="exclamation mark">!</span>{' '}
              <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span>{' '}
              <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
            </p>
          </li>
          <li>
            <label htmlFor="confirm_pwd">
              Confirm Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validMatch && matchPwd ? 'valid' : 'hide'}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMatch || !matchPwd ? 'hide' : 'invalid'}
              />
            </label>
            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? 'false' : 'true'}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />
            <p
              id="confirmnote"
              className={matchFocus && !validMatch ? 'instructions note' : 'offscreen note'}>
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>
          </li>
          <li>
            <button
              disabled={
                !validName || !validPwd || !validMatch || (!validEmail && email.length > 0)
                  ? true
                  : false
              }>
              Sign Up
            </button>
          </li>
        </ul>
      </form>
      <p>
        Already registered?
        <br />
        <span className="line">
          {/*put router link here*/}
          <Link to="/login">Log in</Link>
        </span>
      </p>
    </StyledRegister>
  );
};

export default Register;
