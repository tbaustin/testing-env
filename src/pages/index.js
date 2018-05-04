import React from 'react'
import Link from 'gatsby-link'
import zygote from 'zygote-cart'

export default class Index extends React.Component {
  componentDidMount() {
    zygote.site('test')
  }
  render() {
    return (
      <div>
        <button onClick={() => zygote.toggleCart()}>Cart</button>
        <zygote.ZygoteContainer />
        <style jsx>{`
          button {
            background-color: #444;
            color: #fff;
            border: none;
            outline: none;
            cursor: pointer;
            border-radius: 5px;
            &:hover {
              background-color: #fff;
              color: #444;
            }
          }
        `}</style>
      </div>
    )
  }
}
