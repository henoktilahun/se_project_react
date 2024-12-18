import { useEffect, useState } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import { CurrentTemperatureUnitContext } from "../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import ItemModal from "../ItemModal/ItemModal";
import Footer from "../Footer/Footer";
import AddItemModal from "../AddItemModal/AddItemModal";
import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import EditProfileModal from "../EditProfileModal/EditProfileModal";
import Profile from "../Profile/Profile";
import { getWeather, filterWeatherData } from "../../utils/weatherApi";
import { coordinates, APIkey } from "../../utils/constants";
import { getItems, addItems, deleteItems, getUserInfo } from "../../utils/api";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import * as auth from "../../utils/auth";
import * as api from "../../utils/api";
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
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();

  const handleCardLike = ({ _id, isLiked }) => {
    const token = localStorage.getItem("jwt");
    // Check if this card is not currently liked
    !isLiked
      ? // if so, send a request to add the user's id to the card's likes array
        api
          // the first argument is the card's id
          .addCardLike(_id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === _id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err))
      : // if not, send a request to remove the user's id from the card's likes array
        api
          // the first argument is the card's id
          .removeCardLike(_id, token)
          .then((updatedCard) => {
            setClothingItems((cards) =>
              cards.map((item) => (item._id === _id ? updatedCard : item))
            );
          })
          .catch((err) => console.log(err));
  };

  //HANDLE LOGIN
  const handleLogin = ({ email, password }, resetForm) => {
    auth
      .signin(email, password)
      .then((res) => {
        if (res.token) {
          setToken(res.token);
          return getUserInfo(res.token);
        }
      })
      .then((user) => {
        setCurrentUser(user);
        setIsLoggedIn(true);
        closeModal();
        resetForm();
        navigate("/");
      })
      .catch(console.error);
  };

  const handleLogOut = () => {
    localStorage.removeItem("jwt");
    setIsLoggedIn(false);
    navigate("/");
  };

  //HANDLE REGESTRATION
  const handleRegistration = ({ name, avatar, email, password }, resetForm) => {
    auth
      .register(name, avatar, email, password)
      .then(() => {
        handleLogin({ email, password }, resetForm);
        closeModal();
        resetForm();
        navigate("/");
      })
      .catch(console.error);
  };

  const handleChangeProfile = ({ name, avatar }) => {
    const jwt = getToken();
    api
      .updateUserInfo({ name, avatar }, jwt)
      .then((data) => {
        setCurrentUser(data);
        closeModal();
        setIsLoggedIn(true);
      })
      .catch(console.error);
  };

  //HANDLE TOKEN
  useEffect(() => {
    const jwt = getToken();

    if (!jwt) {
      return;
    }

    api
      .getUserInfo(jwt)
      .then((data) => {
        setIsLoggedIn(true);
        setCurrentUser(data);
      })
      .catch(console.error);
  }, []);

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

  const handleChangeProfileClick = () => {
    setActiveModal("change-profile");
  };

  const handleDeleteItem = () => {
    const jwt = getToken();
    deleteItems(selectedCard._id, jwt)
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
    const jwt = getToken();
    evt.preventDefault();
    addItems(values, jwt)
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
    <CurrentUserContext.Provider value={currentUser}>
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
                    handleCardLike={handleCardLike}
                    isLoggedIn={isLoggedIn}
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
                      handleLogOut={handleLogOut}
                      handleChangeProfile={handleChangeProfile}
                      handleChangeProfileClick={handleChangeProfileClick}
                      isLoggedIn={isLoggedIn}
                      handleCardLike={handleCardLike}
                    />
                  </ProtectedRoute>
                }
              />
              <Route
                path="*"
                element={
                  isLoggedIn ? (
                    <Navigate to="/" replace />
                  ) : (
                    <Navigate to="/" replace />
                  )
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
            handleRegistrationClick={handleRegistrationClick}
          />
          <RegisterModal
            title="Register"
            buttonText="Sign Up"
            activeModal={activeModal}
            closeModal={closeModal}
            isOpen={activeModal === "register"}
            handleRegistration={handleRegistration}
            handleLoginClick={handleLoginClick}
          />
          <ItemModal
            activeModal={activeModal}
            card={selectedCard}
            closeModal={closeModal}
            isOpen={activeModal === "preview"}
            handleDeleteItem={handleDeleteItem}
            selectedCard={selectedCard}
          />
          <EditProfileModal
            title="Change profile data"
            buttonText="Save changes"
            activeModal={activeModal}
            closeModal={closeModal}
            isOpen={activeModal === "change-profile"}
            handleChangeProfile={handleChangeProfile}
          />
        </CurrentTemperatureUnitContext.Provider>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
