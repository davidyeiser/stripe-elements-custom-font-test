import React from 'react'
import { CardElement } from '@stripe/react-stripe-js'

const CheckoutForm = () => (
  <div>
    <div style={{
      width: '350px',
      margin: '50px',
      padding: '10px',
      border: '1px solid #ccc'
    }}>
      <CardElement
        options={{
          style: {
            base: {
              fontFamily: 'Trispace',
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
    </div>

    <p style={{
      margin: '50px',
      fontFamily: 'CustomStripeSyne'
    }}>Test “CustomStripeSyne” font-family</p>
  </div>
)

export default CheckoutForm
