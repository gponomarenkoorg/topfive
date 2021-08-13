/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import './App.scss';
import casinosList from './api/casinos.json';

export const App = () => {
  const [casinos, setCasinos] = useState([]);

  useEffect(() => {
    setCasinos(casinosList);
  }, []);

  return (
    <div className="body">
      <section className="header">
        <div className="header__logo">
          <img
            src="https://winmagictoys.com/wp-content/uploads/2018/09/dummy-logo.png"
            alt="logo"
          />
        </div>
        <h1 className="header__title">
          TOP 5 Real Money Online Casino Bonus List!
        </h1>
        <p className="header__call">Play online slots for real money at trusted online casinos in Europe. Claim your exclusive welcome bonus and start playing slots today!</p>
        <h2 className="header__subtitle">10,302 Claimed Bonuses And Counting!</h2>
      </section>
      <section className="main">
        <table className="casinos">
          <thead>
            <tr className="casinos_header">
              <th>casino</th>
              <th>welcome bonus</th>
              <th>user rating</th>
              <th>rating</th>
              <th>play now</th>
            </tr>
          </thead>
          <tbody className="casinos_body">
            {casinos.map(casino => {
              const { id, casinoName, casinoUrl, casinoBackgroundColour, welcomeBonuses, userRatingNumber } = casino;

              return (
                <tr
                  key={id}
                  className="casino__card"
                >
                  {/* // put label_before_raw_ */}
                  <td>

                    <div className="casino__wrapper">
                      <img
                        className="casino__img"
                        src={casinoUrl}
                        alt={casinoName}
                      />
                    </div>
                  </td>
                  <td>
                    {welcomeBonuses.welcomeBonusAmount}
                    _put bonuses
                  </td>
                  <td>
                    {userRatingNumber}
                    _put stars
                  </td>
                  <td>
                    {casinoName}
                    _put rating
                  </td>
                  <td>
                    <button
                      type="button"
                    >
                      play
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </div>
  );
};
