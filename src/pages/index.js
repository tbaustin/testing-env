import React from 'react'
import cloudinary from '../utils/cloudinary'
import { PriceAndStock } from 'react-escalade-priceline'
import zygote from 'zygote-cart'
import Spinner from '../components/spinner'
import { homeStyles } from '../styles/homeStyles'

export default class Index extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      white: 0,
      black: 0,
      whiteImage: this.props.data.whiteTable.webImages[0].url,
      blackImage: this.props.data.blackTable.webImages[0].url,
    }
  }

  componentDidMount() {
    zygote.site('stiga')
  }

  componentWillMount() {
    const { whiteTable, blackTable } = this.props.data
    let wcount = 0
    let bcount = 0
    setInterval(() => {
      if (window.innerWidth > 1024) return
      this.setState({
        white: wcount,
        black: bcount,
      })
      wcount++
      bcount++
      if (wcount > whiteTable.webImages.length - 1) wcount = 0
      if (bcount > blackTable.webImages.length - 1) bcount = 0
    }, 6000)
  }

  render() {
    const { blackTable, whiteTable } = this.props.data
    return (
      <div className="main">
        <div className="row-fluid">
          <div className="pane">
            <h1>
              <span>Stiga</span>
              <span>Conference</span>
              <span>Tables</span>
            </h1>
            <h2>
              As seen at
              <img src="/spin-logo.svg" alt="" />
            </h2>
            <img src="/spin-bg.jpg" alt="" className="spinBgImage" />
          </div>
          <div className="prodRow">
            <div className="product">
              <div className="productCont">
                <div className="thumbnails">
                  {whiteTable.webImages.map((image, i) => (
                    <div
                      key={i}
                      className="thumbImage"
                      onClick={() => this.setState({ whiteImage: image.url })}
                    >
                      <img
                        src={cloudinary(image.url, 'c_pad', 'w_100', 'h_100')}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
                <div className="mainImg">
                  <img
                    className="slideShow"
                    src={cloudinary(
                      whiteTable.webImages[this.state.white].url,
                      'w_900',
                      'h_900',
                      'c_pad'
                    )}
                    alt=""
                  />
                  <img
                    className="staticImage"
                    src={this.state.whiteImage}
                    alt=""
                  />
                </div>
                <div className="copy">
                  <h1>Test site</h1>
                  <h2>Stiga Conference Table White</h2>
                  <p>Suggested Retail: $3499</p>
                  <p>
                    The Conference Table from Stiga combines the beauty, design,
                    and strength of a premium piece of furniture with the
                    playability and functionality of a world class table tennis
                    table. This table can convert from conference, dining, or
                    multipurpose table into table tennis table in just seconds
                    providing ultimate flexibility in the use of your space.
                    This table was designed and engineered from the ground up to
                    last a lifetime with a timeless style that fits nearly any
                    décor from modern to rustic. It is available in either a
                    black or white frame, both with a rich Walnut finished top.
                    The tops glide open and closed to expose a storage
                    compartment in the center of the table. This space is ideal
                    for keeping your table tennis net, paddles and balls out of
                    sight when not in table tennis mode. There is also plenty of
                    room to store a conference phone with an integrated
                    communication cable pass through. You will also find
                    recessed storage areas around the edges of the table, ideal
                    for cell phones, notebooks, etc… Whether you are searching
                    for a new conference table for your workplace or dining
                    table for your home, if you enjoy playing table tennis, the
                    Conference Table from Stiga can deliver all three in one
                    table, in one space.
                  </p>
                  <ul>
                    <li>
                      Includes 4 premium paddles, 3* balls, and tournament grade
                      clipper net and post system
                    </li>
                    <li>Assembled dimensions: 108"L x 60"W x 30"H</li>
                  </ul>
                  <div>
                    <PriceAndStock site="stiga" id={whiteTable.itemNumber}>
                      {({ stock, price, loading }) => {
                        if (loading) return <Spinner />
                        if (!stock)
                          return (
                            <div
                              style={{ color: '#E50000', fontSize: '1.2em' }}
                            >
                              Not in stock
                            </div>
                          )
                        return (
                          <zygote.AddToCart
                            price={price}
                            desc={whiteTable.longDescription}
                            id={whiteTable.itemNumber}
                            image={whiteTable.webImages[0].url}
                            name={whiteTable.itemName}
                            url={'https://spin.stigaus.com/'}
                            open
                          >
                            <button className="cartButton">Add to Cart</button>
                          </zygote.AddToCart>
                        )
                      }}
                    </PriceAndStock>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="prodRow">
            <div className="product">
              <div className="productCont">
                <div className="thumbnails">
                  {blackTable.webImages.map((image, i) => (
                    <div
                      key={i}
                      className="thumbImage"
                      onClick={() => this.setState({ blackImage: image.url })}
                    >
                      <img
                        src={cloudinary(image.url, 'c_pad', 'w_100', 'h_100')}
                        alt=""
                      />
                    </div>
                  ))}
                </div>
                <div className="mainImg">
                  <img
                    className="slideShow"
                    src={cloudinary(
                      blackTable.webImages[this.state.black].url,
                      'w_900',
                      'h_900',
                      'c_pad'
                    )}
                    alt=""
                  />
                  <img
                    className="staticImage"
                    src={this.state.blackImage}
                    alt=""
                  />
                </div>
                <div className="copy">
                  <h2>Stiga Conference Table Black</h2>
                  <p>Suggested Retail: $3499</p>
                  <p>
                    The Conference Table from Stiga combines the beauty, design,
                    and strength of a premium piece of furniture with the
                    playability and functionality of a world class table tennis
                    table. This table can convert from conference, dining, or
                    multipurpose table into table tennis table in just seconds
                    providing ultimate flexibility in the use of your space.
                    This table was designed and engineered from the ground up to
                    last a lifetime with a timeless style that fits nearly any
                    décor from modern to rustic. It is available in either a
                    black or white frame, both with a rich Walnut finished top.
                    The tops glide open and closed to expose a storage
                    compartment in the center of the table. This space is ideal
                    for keeping your table tennis net, paddles and balls out of
                    sight when not in table tennis mode. There is also plenty of
                    room to store a conference phone with an integrated
                    communication cable pass through. You will also find
                    recessed storage areas around the edges of the table, ideal
                    for cell phones, notebooks, etc… Whether you are searching
                    for a new conference table for your workplace or dining
                    table for your home, if you enjoy playing table tennis, the
                    Conference Table from Stiga can deliver all three in one
                    table, in one space.
                  </p>
                  <ul>
                    <li>
                      Includes 4 premium paddles, 3* balls, and tournament grade
                      clipper net and post system
                    </li>
                    <li>Assembled dimensions: 108"L x 60"W x 30"H</li>
                  </ul>
                  <div>
                    <PriceAndStock site="stiga" id={blackTable.itemNumber}>
                      {({ stock, price, loading }) => {
                        if (loading) return <Spinner />
                        if (!stock)
                          return (
                            <div
                              style={{ color: '#E50000', fontSize: '1.2em' }}
                            >
                              Not in stock
                            </div>
                          )
                        return (
                          <zygote.AddToCart
                            price={price}
                            desc={blackTable.longDescription}
                            id={blackTable.itemNumber}
                            image={blackTable.webImages[0].url}
                            name={blackTable.itemName}
                            url={'https://spin.stigaus.com/'}
                            open
                          >
                            <button className="cartButton">Add to Cart</button>
                          </zygote.AddToCart>
                        )
                      }}
                    </PriceAndStock>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <zygote.ZygoteContainer />
        <style jsx>{homeStyles}</style>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query HomepageQueries {
    blackTable: salsifyContent(id: { eq: "T8591B" }) {
      itemName
      itemNumber
      longDescription
      webImages {
        url
      }
    }
    whiteTable: salsifyContent(id: { eq: "T8591W" }) {
      itemName
      itemNumber
      longDescription
      webImages {
        url
      }
    }
  }
`
