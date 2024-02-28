import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth";
import classes from "./Header.module.css";

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const Logout = () => {
    dispatch(authActions.logout());
  };

  const Login = () => {
    dispatch(authActions.login());
  };


  console.log(auth.isAuthenticated)
  return (
    <header className={classes.header}>
      <h1>Redux Cart</h1>
      <nav>
        {
          <ul>
            <li>
              {!auth.isAuthenticated && <button onClick={Login}>Login </button>}
              {auth.isAuthenticated && <button onClick={Logout}>Logout 🧑</button>}
            </li>
            <li>
              {auth.isAuthenticated && <button>CART 🛒</button>}
            </li>
          </ul>
        }
      </nav>
    </header>
  );
};

export default Header;
