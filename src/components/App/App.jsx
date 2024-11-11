import { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import Profile from "../Profile/Profile";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import { getItems, addItems, deleteItems } from "../../utils/api";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as auth from "../../utils/auth";
import { setToken, getToken } from "../../utils/token";

function App() {
  const [weatherData, setWeatherData] = useState({
    type: "",
    temp: { F: 999, C: 999 },
    city: "",
  });
  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [activeModal, setActiveModal] = useState("");
  const [selectedCard, setSelectedCard] = useState({});
  const [clothingItems, setClothingItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  //HANDLE LOGIN
  const handleLogin = ({ email, password }) => {
    auth
      .signin(email, password)
      .then((data) => {
        console.log(data.token);
        if (data.token) {
          setToken(data.token);
          //setUserData(data.user);
          setIsLoggedIn(true);
          navigate("/profile");
          closeModal();
          // const redirectPath = location.state?.from?.pathname || "/profile";
          // navigate(redirectPath);
        }
      })
      .catch(console.error);
  };

  //HANDLE REGESTRATION
  const handleRegistration = ({ name, avatar, email, password }) => {
    auth
      .register(name, avatar, email, password)
      .then(() => {
        navigate("/profile");
        closeModal();
        setIsLoggedIn(true);
      })
      .catch(console.error);
  };

  //HANDLE TOKEN STUFF
  // useEffect(() => {
  //   const jwt = getToken();

  //   if (!jwt) {
  //     return;
  //   }

  //   api
  //     .getUserInfo(jwt)
  //     .then(({ username, email }) => {
  //       setIsLoggedIn(true);
  //       setUserData({ username, email });
  //     })
  //     .catch(console.error);
  // }, []);

  const handleToggleSwitchChange = () => {
    if (currentTemperatureUnit === "F") {
      setCurrentTemperatureUnit("C");
    } else if (currentTemperatureUnit === "C") {
      setCurrentTemperatureUnit("F");
    }
  };

  const handleCardClick = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddClick = () => {
    setActiveModal("add-garment");
  };

  const handleRegistrationClick = () => {
    setActiveModal("register");
  };

  const handleLoginClick = () => {
    setActiveModal("login");
  };

  const handleDeleteItem = () => {
    deleteItems(selectedCard._id)
      .then(() => {
        setClothingItems((prevItems) =>
          prevItems.filter((item) => item._id !== selectedCard._id)
        );
        closeModal();
      })
      .catch(console.error);
  };

  const closeModal = () => {
    setActiveModal("");
  };

  const onAddItem = (evt, values, resetForm) => {
    evt.preventDefault();
    addItems(values)
      .then((data) => {
        setClothingItems([data, ...clothingItems]);
        closeModal();
        resetForm();
      })
      .catch(console.error);
  };

  useEffect(() => {
    getWeather(coordinates, APIkey)
      .then((data) => {
        const filteredData = filterWeatherData(data);
        setWeatherData(filteredData);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    getItems()
      .then((data) => {
        setClothingItems(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="page">
      <CurrentTemperatureUnitContext.Provider
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <div className="page__content">
          <Header
            handleAddClick={handleAddClick}
            weatherData={weatherData}
            handleLoginClick={handleLoginClick}
            handleRegistrationClick={handleRegistrationClick}
            isLoggedIn={isLoggedIn}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  weatherData={weatherData}
                  handleCardClick={handleCardClick}
                  clothingItems={clothingItems}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn} anonymous>
                  <Profile
                    handleCardClick={handleCardClick}
                    clothingItems={clothingItems}
                    handleAddClick={handleAddClick}
                    selectedCard={selectedCard}
                  />
                </ProtectedRoute>
              }
            />
          </Routes>
          {/* <Main weatherData={weatherData} handleCardClick={handleCardClick} /> */}
          <Footer />
        </div>
        <AddItemModal
          title="New garment"
          buttonText="Add garment"
          activeModal={activeModal}
          closeModal={closeModal}
          isOpen={activeModal === "add-garment"}
          onAddItem={onAddItem}
        />
        <LoginModal
          title="Log In"
          buttonText="Log In"
          activeModal={activeModal}
          closeModal={closeModal}
          isOpen={activeModal === "login"}
          handleLogin={handleLogin}
          //onAddItem={onAddItem}
        />
        <RegisterModal
          title="Register"
          buttonText="Sign Up"
          activeModal={activeModal}
          closeModal={closeModal}
          isOpen={activeModal === "register"}
          handleRegistration={handleRegistration}
        />
        <ItemModal
          activeModal={activeModal}
          card={selectedCard}
          closeModal={closeModal}
          isOpen={activeModal === "preview"}
          handleDeleteItem={handleDeleteItem}
        />
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
