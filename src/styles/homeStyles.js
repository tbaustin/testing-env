import css from 'styled-jsx/css';

export const homeStyles = css`
  .spinBgImage {
    width: 100%;
  }
  .thumbImage {
    cursor: pointer;
  }
  .staticImage {
    display: none !important;
  }
  .cartButton {
    background-color: #000;
    color: #c0c0c0;
    outline: none;
    margin: 5px 0;
    width: 100%;
    font-size: 16px;
    padding: 10px 15px;
    cursor: pointer;
    border: 0;
  }
  .cartButton:hover {
    background-color: #666;
    color: #f2f2f2;
  }
  .main {
    color: #2f3033;
    line-height: 20px;
  }
  .mainImg img {
    display: block;
    margin: 0 auto;
  }
  .product {
    max-width: 1200px;
    margin: auto;
    padding: 60px 30px;
  }
  .prodRow {
    background-color: #fff;
    border-top: 10px solid #000;
  }
  .productCont > :nth-of-type(1n) {
    width: 100%;
    float: left;
    padding: 10px;
    padding-top: 0;
  }
  .product .copy ul {
    list-style: disc;
  }
  ul {
    padding: 0;
    margin: 0 0 10px 25px;
    font-size: 1em;
  }
  .prodRow:after,
  .prodRow:before {
    content: '';
    display: block;
    clear: both;
  }
  p {
    font-family: Lato, Arial, Helvetica, sans-serif;
    margin: 0 0 10px;
    padding: 0;
    border: 0;
    outline: 0;
    font-size: 1em;
    vertical-align: baseline;
    background: transparent;
  }

  .pane {
    position: relative;
  }
  .pane h1,
  .pane h2 {
    letter-spacing: 3px;
  }
  .pane h1 {
    font-size: 4vw;
    line-height: 4.5vw;
    top: 10%;
  }
  .pane h1,
  .pane h2 {
    font-weight: 400;
    position: absolute;
    color: #fff;
    left: 10%;
    margin-bottom: 10px;
  }
  .pane h1 {
    text-transform: uppercase;
    color: #fff;
    margin: 0;
  }
  .pane h1 span {
    display: block;
  }
  .pane h2 {
    letter-spacing: 2px;
    margin-bottom: 10px;
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    bottom: 10%;
    font-size: 1vw;
    line-height: 1.5vw;
    font-style: italic;
  }
  .pane h2 img {
    display: block;
    width: 100px;
    margin-top: 10px;
  }
  h1,
  h2,
  h3 {
    letter-spacing: 2px;
    margin-top: 0;
    margin-bottom: 10px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-transform: uppercase;
    margin: 0;
    padding: 0;
    line-height: normal;
  }
  h2 {
    font-size: 31.5px;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 10px 0;
    font-family: inherit;
    font-weight: 700;
    color: inherit;
    text-rendering: optimizelegibility;
  }
  img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    border: 0;
  }
  .thumbnails {
    display: none;
  }
  @media (min-width: 600px) {
    .cartButton {
      width: auto;
    }
  }
  @media (min-width: 1024px) {
    .thumbnails {
      display: block;
    }
    .slideShow {
      display: none !important;
    }
    .staticImage {
      display: block !important;
    }
    .productCont > :first-of-type {
      width: calc(100% / 12);
    }
    .productCont > :nth-of-type(2) {
      width: 50%;
    }
    .productCont > :nth-of-type(3) {
      width: calc(100% / 2.4);
    }
    .productCont:after,
    .productCont:before {
      display: block;
      content: '';
      clear: both;
    }
  }
`;
