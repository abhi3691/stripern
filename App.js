import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { StripeProvider } from '@stripe/stripe-react-native'
import Payment from './src/screens/payment_screen/Payment'

const App = () => {
  return (
    <View style={styles.container}>
      <StripeProvider
        publishableKey='pk_test_51LnPZoSBmuoiIsMXS2I0nOKmF2hrGa6AewPHx4x0DwJhblBKCGzgzssMDdQD6cmynUs7VQEQ7qVvoAjQzgA5uLDS00iys4X78X'

      >
        <Payment />
      </StripeProvider>
    </View>
  )
}

export default App


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'

  }
})