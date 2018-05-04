import React from 'react';
import Link from 'gatsby-link';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMobileNav: false
    };
  }

  render() {
    const { showMobileNav } = this.state;
    return (
      <div className="header">
        <div className="row-fluid">
          <div className="span12">
            <a href="http://www.stigaus.com" className="logo">
              <div className="sitelogo">
                <img src="/logo-desk.jpg" alt="" />
              </div>
            </a>
            <div className={`menu ${showMobileNav ? 'active' : ''}`}>
              <div className="nav primary">
                <div className="home">
                  <a href="http://www.stigaus.com">Home</a>
                </div>
                <div className="first news">
                  <a href="http://www.stigaus.com/news">News</a>
                </div>
                <div className="products">
                  <a href="http://www.stigaus.com/products">Products</a>
                </div>
                <div className="tech-specs">
                  <a href="http://www.stigaus.com/tech-specs">Tech Specs</a>
                </div>
                <div className="last team-stiga">
                  <a href="http://www.stigaus.com/team-stiga">Team Stiga</a>
                </div>
                <div className="contact">
                  <a href="http://www.stigaus.com/2014/05/event-daily-review-day-6-world-team-table-tennis-championships">
                    Contact
                  </a>
                </div>
              </div>
              <div className="nav secondary">
                <div className="home">
                  <a href="http://www.stigaus.com">Home</a>
                </div>
                <div className="first">
                  <a href="http://www.stigaus.com/drill-your-skills">
                    Drill Your Skills
                  </a>
                </div>
                <div>
                  <a href="http://www.stigaus.com/about-stiga/downloads/catalog">
                    Catalog
                  </a>
                </div>
                <div>
                  <a href="http://www.stigaus.com/about-stiga">About Stiga</a>
                </div>
                <div>
                  <a href="http://www.stigaus.com/about-stiga/stiga-history">
                    Stiga History
                  </a>
                </div>
                <div className="last">
                  <a href="http://www.stigaus.com/where-to-buy">Where to Buy</a>
                </div>
                <div className="contact">
                  <a href="http://www.stigaus.com/about-stiga/contact">
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div
              className="mobile-nav"
              onClick={() => this.setState({ showMobileNav: !showMobileNav })}
            >
              <span>Menu</span>
              <div>
                <div />
                <div />
                <div />
              </div>
            </div>
          </div>
        </div>
        <style jsx>{`
          .mobile-nav {
            border: 1px solid;
            color: #999;
            float: right;
            padding: 3px;
            position: absolute;
            top: 10%;
            right: 2%;
            width: auto;
            cursor: pointer;
          }
          .mobile-nav:hover {
            color: #fff;
          }
          .mobile-nav span {
            font-size: 12px;
            font-weight: 700;
            text-transform: uppercase;
            line-height: 20px;
            float: left;
          }
          .mobile-nav > div {
            float: right;
            margin: 2px 2px 0;
            width: 15px;
            padding: 0;
          }
          .mobile-nav > div > div {
            border: 1px solid;
            border-radius: 2px;
            margin: 3px 0;
            z-index: 20;
          }
          .nav.secondary {
            display: none;
            float: right;
          }

          a {
            text-decoration: none;
            color: #ccc;
          }
          .nav {
            float: right;
            margin-bottom: 20px;
            margin-left: 0;
          }
          .nav.primary {
            position: absolute;
            top: 40px;
            left: 0;
            z-index: 7;
            background: #000;
            border-top: 1px solid #999;
            width: 100%;
            margin: 0;
            padding: 0;
            border: 0;
            text-transform: uppercase;
            font-weight: 700;
            text-align: center;
            display: none;
          }
          .active .nav.primary {
            display: block;
          }
          .nav.primary a {
            border: 0;
            color: #ccc;
            border-bottom: 1px solid #999;
            background: #333;
            margin: 0;
            padding: 2px;
            display: block;
          }
          .nav.primary a:hover {
            background: #474747;
          }
          .nav.primary > div {
            line-height: 20px;
          }
          .nav.secondary > div {
            line-height: 20px;
          }
          img {
            vertical-align: middle;
            border: 0;
            max-width: 100% !important;
          }
          .menu {
            width: 77%;
            height: 30px;
            float: right;
          }
          .header {
            position: relative;
            top: 0;
            margin: 0;
            width: 100%;
            background: #000;
            height: 40px;
            border-bottom: 1px solid #333;
            z-index: 2;
          }
          .span12 {
            margin: 0;
            padding: 10px 0 0;
          }
          .span12:after,
          .span12:before {
            clear: both;
            content: '';
            display: block;
          }
          .logo {
            float: left;
            text-decoration: none;
            color: #666;
            outline: 0 !important;
          }
          .sitelogo img {
            height: 21px;
          }
          .sitelogo {
            margin: 0;
            padding: 0;
            border: 0;
            outline: 0;
            font-size: 100%;
            vertical-align: baseline;
            background: transparent;
          }
          @media (min-width: 600px) {
            .mobile-nav span {
              display: none;
            }
            .nav.secondary {
              position: absolute;
              top: 40px;
              left: 0;
              z-index: 7;
              background: #000;
              border-top: 1px solid #999;
              width: 100%;
              margin: 0;
              padding: 0;
              border: 0;
              text-transform: uppercase;
              font-weight: 700;
              text-align: center;
            }
            .active .nav.secondary {
              display: block;
            }
            .nav.secondary a {
              border: 0;
              color: #707070;
              border-bottom: 1px solid #999;
              background: #333;
              margin: 0;
              padding: 2px;
              display: block;
            }
            .nav.secondary a:hover {
              background: #474747;
              color: #ee7600;
            }
            .nav.primary {
              display: block;
              position: static;
              left: auto;
              top: auto;
              background: none;
              width: 85%;
            }
            .nav.primary a:hover {
              border-bottom: 2px solid #ccc !important;
              background: none;
            }
            .last {
              border: none !important;
            }
            .nav.primary > div {
              float: left;
              padding: 0 2%;
              border-right: 1px dotted #333;
              position: relative;
            }
            .nav.primary a {
              border: none;
              background: none;
              padding: 0 0 2px;
              margin: 0;
              font-size: 100%;
              letter-spacing: -0.3px;
            }
            .nav.primary .home {
              display: none;
            }
            .nav.primary .contact {
              display: none;
            }
          }
          @media (min-width: 600px) and (max-width: 767px) {
            .mobile-nav {
              width: auto;
              position: absolute;
              right: 6px;
              top: 6px;
            }
          }
          @media (min-width: 768px) {
            .nav.secondary {
              display: block;
              font-size: 9px;
              width: 92%;
              line-height: 18px;
              letter-spacing: 0.045em;
              display: block;
              left: auto;
              top: 0;
              right: 0;
              background: none;
              font-weight: 400;
            }
            .nav.secondary a:hover {
              background: none;
              color: #ccc;
            }
            .nav.secondary a {
              color: #ccc;
              border: 0;
              background: none;
              padding: 0;
              margin: 0;
            }
            .nav.secondary .home {
              display: none;
            }
            .nav.secondary .contact {
              display: none;
            }
            .nav.secondary > div {
              float: left;
              margin-left: 4%;
            }
            .header {
              height: 60px;
            }
            .menu {
              width: 67%;
              position: relative;
              height: 50px;
            }
            .sitelogo img {
              height: auto;
            }
            .mobile-nav {
              display: none;
            }
            .nav.primary {
              font-size: 17px;
              width: 90%;
              letter-spacing: 1px;
              position: absolute;
              right: 0;
              bottom: 0;
            }
            .nav.primary a {
              padding: 0 0 4px;
            }
            .nav.primary a:hover {
              border-bottom: 4px solid #ccc !important;
              padding-bottom: 0px;
            }
            .nav.primary > div {
              line-height: 26px;
            }
          }
          @media (min-width: 810px) {
            .nav.primary {
              font-size: 19px;
            }
            .nav.primary > div {
              line-height: 28px;
            }
          }
          @media (min-width: 900px) {
            .menu {
              width: 74%;
            }
            .nav.primary {
              font-size: 23px;
            }
            .nav.secondary {
              font-size: 12px;
            }
            .nav.primary > div {
              line-height: 30px;
            }
          }
          @media (min-width: 980px) {
            .header .row-fluid {
              max-width: 960px;
              margin: 0 auto;
            }
            .nav.primary > div {
              line-height: 38px;
            }
            .header {
              height: 80px;
            }
            .span12 {
              padding: 20px 0 0;
            }
            .menu {
              width: 72%;
              height: 60px;
            }
            .nav.primary {
              font-size: 24px;
            }
          }
        `}</style>
        <style jsx global>{`
          .row-fluid:after,
          .row-fluid:before {
            content: '';
            display: block;
            clear: both;
          }
          .row-fluid {
            width: 100%;
          }
        `}</style>
      </div>
    );
  }
}
