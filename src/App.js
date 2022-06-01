import React, { useState, useEffect } from "react";
import "./App.css";
import Footer from "./Footer";
import Watch from "./Watch";
import Loading from "./Loading";

function App() {
  const [items, setItems] = useState({});
  const [method, setMethod] = useState(4);
  const [city, setCity] = useState("Mecca");
  let country = "";

  switch (city) {
    case "Amman":
      country = "Jordan";
      break;

    case "Cairo":
      country = "Egypt";
      break;

    case "Riyadh":
      country = "SaudiArabia";
      break;

    case "Mecca":
      country = "SaudiArabia";
      break;

    case "Medina":
      country = "SaudiArabia";
      break;

    case "Chicago":
      country = "UnitedStates";
      break;

    case "Quds":
      country = "Palastine";
      break;

    default:
      break;
  }

  const date = new Date();
  const today = date.getDate();

  useEffect(async () => {
    fetch(
      `https://api.aladhan.com/v1/calendarByCity?city=${city}&country=${country}&method=${method}`
    )
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((e) => console.log(e));
  }, [city]);

  console.log(items);
  return (
    <>
      <div className="overlay"></div>
      {items.data ? (
        <>
          <div className="container">
            <Watch items={items} today={today} city={city} setCity={setCity} />
          </div>
          <Footer />
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default App;
