import React, { useState, useEffect } from 'react';
import Stars from 'react-rating-stars-component';
import axios from 'axios';
import logo from './img/logo.png';
import './App.scss';
import { sendData } from './api/api';
import casinosList from './api/casinos.json';
import { numberDotDecimal, numberWithComma } from './functions';

export const App = () => {
  const [casinos, setCasinos] = useState([]);
  const [userIp, setUserIp] = useState(null);
  const [dateNow, setDateNow] = useState(null);
  const [buttonId, setButtonId] = useState(null);
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    setCasinos(casinosList);
  }, []);

  const getIp = async() => {
    const res = await axios.get('https://geolocation-db.com/json/');

    setUserIp(res.data.IPv4);
  };

  const getDateNow = () => {
    const actual = new Date();
    const actualDateTime = actual.toISOString();

    setDateNow(actualDateTime);
  };

  const getId = (event) => {
    setButtonId(event.target.value);
  };

  const buildJsonData = () => {
    const jsonFile = {
      user: userIp,
      date: dateNow,
      id: buttonId,
    };

    setJsonData(jsonFile);
  };

  useEffect(() => {
    getIp().then(data => console.log(data));
    getDateNow();
    buildJsonData();
  }, [buttonId]);

  useEffect(() => {
    sendData('http://localhost', jsonData)
      .then(data => console.log(data));
  }, [jsonData]);

  return (
    <div className="body">
      <section className="header">
        <div className="header__wrapper">
          <div className="header__logo">
            <img
              className="header__logo-img"
              src={logo}
              alt="logo"
            />
          </div>
        </div>
      </section>

      <section className="main">
        <article className="info">
          <h1 className="info__title">
            TOP 5 Real Money Online Casino Bonus List!
          </h1>
          <p className="info__call">Play online slots for real money at trusted online casinos in Europe. Claim your exclusive welcome bonus and start playing slots today!</p>
          <h2 className="info__subtitle">10,302 Claimed Bonuses And Counting!</h2>
        </article>

        <div className="main__wrapper">
          <article className="casinos">
            <div className="casinos__header">
              <div className="casinos__header-image">casino</div>
              <div className="casinos__header-bonuses">welcome bonus</div>
              <div className="casinos__header-rating">user rating</div>
              <div className="casinos__header-average">rating</div>
              <div className="casinos__header-button">play now</div>
            </div>

            <div className="casinos__body">
              {casinos.map(casino => {
                const
                  {
                    id,
                    casinoName,
                    casinoLabel,
                    casinoUrl,
                    casinoBackgroundColour,
                    welcomeBonuses,
                    userRatingNumber,
                    userRatingAverage
                  } = casino;

                return (
                  <div
                    key={id}
                    className="casino__card casino__grid card"
                  >
                    {casinoLabel
                    && (
                      <span className="label__desktop">
                        {casinoLabel}
                      </span>
                    )
                    }
                    <div className="card__cell card__cell-image">

                      <div
                        className="card__cell--wrapper"
                        style={{
                          backgroundColor: casinoBackgroundColour,
                        }}
                      >
                        <img
                          className="card__cell--img"
                          src={casinoUrl}
                          alt={casinoName}
                        />
                      </div>
                      <div
                        className="card__cell--triangle"
                        style={{
                          borderLeftColor: casinoBackgroundColour,
                        }}
                      />
                    </div>
                    <div className="card__cell-bonuses">
                      <div
                        className="card__name"
                      >
                        {casinoName}
                      </div>
                      <div className="card__cell-bonuses-block">
                        <span
                          className="card__cell-bonuses-others"
                        >
                          {welcomeBonuses.UpTo
                            ? `${welcomeBonuses.UpTo}% Up to`
                            : 'Welcome Bonus'}
                        </span>

                        <span className="card__cell-bonuses-amount">
                          <span className="card__cell-bonuses-plus">
                            {' + '}
                          </span>
                          &euro;
                          {numberWithComma(welcomeBonuses.Amount)}
                        </span>

                        {welcomeBonuses.ZeeSpins
                        && (
                          <span className="card__cell-bonuses-others">
                            <span>
                              {' + '}
                            </span>
                            {`${welcomeBonuses.ZeeSpins} Zee Spins`}
                          </span>
                        )
                        }

                        {welcomeBonuses.ZeePoints
                          && (
                            <span className="card__cell-bonuses-others">
                              <span>
                                {' + '}
                              </span>
                              {`${welcomeBonuses.ZeePoints} Zee Points`}
                            </span>
                          )
                        }

                        {welcomeBonuses.FreeSpins
                          && (
                            <span className="card__cell-bonuses-others">
                              <span>
                                {' + '}
                              </span>
                              {casinoLabel
                                ? `${welcomeBonuses.FreeSpins} FREE SPINS`
                                : `${welcomeBonuses.FreeSpins} Free Spins`
                              }
                            </span>
                          )
                        }

                        {welcomeBonuses.FreeSpinsOnBook
                          && (
                            <span className="card__cell-bonuses-others">
                              <span>
                                {' + '}
                              </span>
                              {`${welcomeBonuses.FreeSpinsOnBook} Free Spins on Book of Dead`}
                            </span>
                          )
                        }
                      </div>

                    </div>
                    <div className="card__cell-inner">
                      <div className="card__cell-rating">
                        <div className="card__cell-rating--number">
                          {`Rating (${userRatingNumber})`}
                        </div>

                        <Stars
                          size={16}
                          value={userRatingAverage / 2}
                          edit={false}
                          isHalf
                        />
                      </div>
                      <div className="card__cell-average">
                        {numberDotDecimal(userRatingAverage)}
                      </div>
                      <div className="card__cell-button">
                        <button
                          type="button"
                          id={id}
                          value={id}
                          className="button"
                          onClick={getId}
                        >
                          Play
                        </button>
                      </div>
                    </div>
                    {casinoLabel
                    && (
                      <span className="label__mobile">
                        {casinoLabel}
                      </span>
                    )
                    }
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};
