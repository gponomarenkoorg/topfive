/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import Stars from 'react-rating-stars-component';
// import cn from 'classnames';
import logo from './img/logo.png';
import './App.scss';
import casinosList from './api/casinos.json';

export const App = () => {
  const [casinos, setCasinos] = useState([]);

  useEffect(() => {
    setCasinos(casinosList);
  }, []);

  const numberWithComma = (x) => {
    return x % 1000 === 0 ? x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : x;
  };

  const numberDotDecimal = (number) => {
    return number % 1 === 0 ? number.toString().concat('.0') : number.toFixed(1).toString();
  };

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
        <div className="info">
          <h1 className="info__title">
            TOP 5 Real Money Online Casino Bonus List!
          </h1>
          <p className="info__call">Play online slots for real money at trusted online casinos in Europe. Claim your exclusive welcome bonus and start playing slots today!</p>
          <h2 className="info__subtitle">10,302 Claimed Bonuses And Counting!</h2>
        </div>
        <div className="main__wrapper">
          <div className="casinos">
            <table className="casinos__head">
              <tr className="casinos__header">
                <th className="casinos__header-image">casino</th>
                <th className="casinos__header-bonuses">welcome bonus</th>
                <th className="casinos__header-rating">user rating</th>
                <th className="casinos__header-average">rating</th>
                <th className="casinos__header-button">play now</th>
              </tr>
            </table>

            <table className="casinos__body">
              {casinos.map(casino => {
                const { id, casinoName, casinoLabel, casinoUrl, casinoBackgroundColour, welcomeBonuses, userRatingNumber, userRatingAverage } = casino;

                return (
                  <tr
                    key={id}
                    className="casino__card"
                  >
                    {/* // put label here */}
                    <td className="card__cell-image">

                      <div
                        className="casino__wrapper"
                        style={{
                          backgroundColor: casinoBackgroundColour,
                        }}
                      >
                        <img
                          className="casino__img"
                          src={casinoUrl}
                          alt={casinoName}
                        />
                      </div>
                    </td>
                    <td className="card__cell-bonuses">
                      <div
                        className="casino__name"
                      >
                        {casinoName}
                      </div>
                      <span>
                        {welcomeBonuses.UpTo
                          ? `${welcomeBonuses.UpTo}% Up to`
                          : 'Welcome Bonus'}
                      </span>

                      <span>
                        <span>
                          {' + '}
                        </span>
                        &euro;
                        {numberWithComma(welcomeBonuses.Amount)}
                      </span>

                      {welcomeBonuses.ZeeSpins
                        ? (
                          <span>
                            <span>
                              {' + '}
                            </span>
                            {`${welcomeBonuses.ZeeSpins} Zee Spins`}
                          </span>
                        )
                        : null
                      }

                      {welcomeBonuses.ZeePoints
                        ? (
                          <span>
                            <span>
                              {' + '}
                            </span>
                            {`${welcomeBonuses.ZeePoints} Zee Points`}
                          </span>
                        )
                        : null
                      }

                      {welcomeBonuses.FreeSpins
                        ? (
                          <span>
                            <span>
                              {' + '}
                            </span>
                            {casinoLabel
                              ? `${welcomeBonuses.FreeSpins} FREE SPINS`
                              : `${welcomeBonuses.FreeSpins} Free Spins`
                            }
                          </span>
                        )
                        : null
                      }

                      {welcomeBonuses.FreeSpinsOnBook
                        ? (
                          <span>
                            <span>
                              {' + '}
                            </span>
                            {`${welcomeBonuses.FreeSpinsOnBook} Free Spins on Book of Dead`}
                          </span>
                        )
                        : null
                      }

                    </td>
                    <td className="card__cell-rating">
                      {`Rating (${userRatingNumber})`}
                      <Stars
                        size={16}
                        value={userRatingAverage / 2}
                        edit={false}
                        isHalf
                      />
                    </td>
                    <td className="card__cell-average">
                      {numberDotDecimal(userRatingAverage)}
                    </td>
                    <td className="card__cell-button">
                      <button
                        type="button"
                      >
                        play
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
