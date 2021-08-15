/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable arrow-body-style */
/* eslint-disable arrow-parens */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import Stars from 'react-rating-stars-component';
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
                const { id, casinoName, casinoLabel, casinoUrl, casinoBackgroundColour, welcomeBonuses, userRatingNumber, userRatingAverage } = casino;

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
                          ? (
                            <span className="card__cell-bonuses-others">
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
                            <span className="card__cell-bonuses-others">
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
                          : null
                        }

                        {welcomeBonuses.FreeSpinsOnBook
                          ? (
                            <span className="card__cell-bonuses-others">
                              <span>
                                {' + '}
                              </span>
                              {`${welcomeBonuses.FreeSpinsOnBook} Free Spins on Book of Dead`}
                            </span>
                          )
                          : null
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
                          className="button"
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
