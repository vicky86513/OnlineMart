import React from "react";
import "./App.css";
import List from "./components/List/List";
import Cart from "./components/Cart/Cart";
import shopify3 from "./images/shopify5.png";
import Login from "./components/Login/Login";
import { CartProvider } from "./context/cartContext";
import { ThemeContext } from "./context/themeContext";

function App() {
  const [theme, changeTheme] = React.useContext(ThemeContext);

  const [userData, setUserData] = React.useState(
    JSON.parse(localStorage.getItem("userData")) || null
  );

  function changeData(data) {
    localStorage.setItem("userData", JSON.stringify(data));
    //make login api call here
    //get that token
    //store this token also in localstorgae

    //postman
    // fetch('https://api.github.com/user/repos', {
    //   method: 'POST',
    //   body: data
    // })
    //   .then(res => res.json())
    //   .then(data => console.log(data))
    setUserData(data);
  }

  //User logs in ===> auth key , JWT token , auth token

  //how to optimize react app
  function handleLogout() {
    localStorage.removeItem("userData");
    setUserData(null);
  }

  return (
    
    <CartProvider>
      <div className={`App ${theme}`}>
        
        {userData ? (
          <>
            <header className="App-header">
              <img src={shopify3} alt="Hunter" className="shopify"/>
              <div className="right-header">
                <Cart />
                <label className="switch">
                  <input type="checkbox" onChange={changeTheme} />
                  <span className="slider round"></span>
                </label>
                <button
                  href=""
                  className="logout-linkButton"
                  onClick={handleLogout}
                >
                  Logout
                </button>
                
              </div>
            </header>
            <div className="body-container">
              <List />
            </div>
          </>
        ) : (
          <Login changeData={changeData} />
        )}
      </div>
    </CartProvider>
  );
}

export default App;
