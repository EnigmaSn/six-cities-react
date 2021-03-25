import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const hotelsData = [
  {
    "bedrooms": 3,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Amsterdam`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/1.png`,
      "id": 3,
      "is_pro": true,
      "name": `Angelina`
    },
    "id": 1,
    "images": [`img/1.png`, `img/2.png`],
    "is_favorite": false,
    "is_premium": true,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": `img/apartment-01.jpg`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `Apartment`
  },
  {
    "bedrooms": 2,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Amsterdam`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/2.png`,
      "id": 3,
      "is_pro": true,
      "name": `Angelina`
    },
    "id": 2,
    "images": [`img/1.png`, `img/2.png`],
    "is_favorite": false,
    "is_premium": true,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": `img/apartment-02.jpg`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `Apartment`
  },
  {
    "bedrooms": 2,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Amsterdam`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/2.png`,
      "id": 3,
      "is_pro": true,
      "name": `Angelina`
    },
    "id": 3,
    "images": [`img/1.png`, `img/2.png`],
    "is_favorite": false,
    "is_premium": true,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": `img/apartment-02.jpg`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `Apartment`
  },
  {
    "bedrooms": 2,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Amsterdam`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/2.png`,
      "id": 3,
      "is_pro": true,
      "name": `Angelina`
    },
    "id": 4,
    "images": [`img/1.png`, `img/2.png`],
    "is_favorite": false,
    "is_premium": true,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": `img/apartment-02.jpg`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `Apartment`
  },
  {
    "bedrooms": 2,
    "city": {
      "location": {
        "latitude": 52.370216,
        "longitude": 4.895168,
        "zoom": 10
      },
      "name": `Amsterdam`
    },
    "description": `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.`,
    "goods": [`Heating`, `Kitchen`, `Cable TV`, `Washing machine`, `Coffee machine`, `Dishwasher`],
    "host": {
      "avatar_url": `img/2.png`,
      "id": 3,
      "is_pro": true,
      "name": `Angelina`
    },
    "id": 5,
    "images": [`img/1.png`, `img/2.png`],
    "is_favorite": false,
    "is_premium": true,
    "location": {
      "latitude": 52.35514938496378,
      "longitude": 4.673877537499948,
      "zoom": 8
    },
    "max_adults": 4,
    "preview_image": `img/apartment-02.jpg`,
    "price": 120,
    "rating": 4.8,
    "title": `Beautiful & luxurious studio at great location`,
    "type": `Apartment`
  },
];

ReactDOM.render(
    <App hotelsData={hotelsData}/>,
    document.querySelector(`#root`)
);
