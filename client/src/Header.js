import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";
import sentidos from './assets/sentidos.png';


export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
        console.log(JSON.stringify(userInfo) + 'info aca genio')
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
    window.location.reload();
  }
  const username = userInfo?.username;
  const profilePicture = userInfo?.profilePicture;

  console.log(profilePicture)



  return (
    <header>
      <Link to="/" className="logo">COPIA</Link>
      <nav>

        {username && (
          <>
            <img className="author-avatar-img" src={sentidos} />
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout ({username})</a>
          </>
        )}
        {!username && (
          <>
            <img className="img-sentidos" src={sentidos} />

            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
