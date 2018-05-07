import React from 'react'

export default () => {
  return (
    <div className="spinner">
      <style jsx>{`
        div.spinner {
          border: 16px solid #fff;
          border-top: 16px solid #000;
          border-radius: 50%;
          width: 120px;
          height: 120px;
          animation: spin 2s linear infinite;
          margin: 0 auto;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  )
}
