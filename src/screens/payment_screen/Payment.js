import { View, Text, Button, Alert, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useStripe } from '@stripe/stripe-react-native'
import axios from 'axios'

const Payment = () => {
    const [name, setName] = useState('')
    const stripe = useStripe()

    const subscribe = async () => {
        try {
            const response = await fetch("http://192.168.1.75:8000/play",
                {
                    method: 'POST',
                    body: JSON.stringify({ name }),
                    headers: {
                        "content-Type": "application/json"
                    }
                }
            )
            const data = await response.json()
            if (!response.ok) return Alert.alert(data.message)
            const clintSecret = data.clintSecret
            const initSheet = await stripe.initPaymentSheet({
                paymentIntentClientSecret: clintSecret,
                merchantDisplayName: "abhiannd"
            })
            if (initSheet.error) return Alert.alert(initSheet.error.message)
            const presentSheet = await stripe.presentPaymentSheet({
                clintSecretu
            })
            if (presentSheet.error) return Alert.alert(presentSheet.error.message)
            Alert.alert("payment complete,thanks you!")


        }
        catch (err) {
            console.log(err)
            Alert.alert("Somthing went wrong, try again later!")
        }

    }
    return (
        <View>
            <TextInput
                value={name}
                onChangeText={text => setName(text)}
                placeholder="Name"
                style={{
                    width: 300,
                    fontSize: 20,
                    padding: 10,
                    borderWidth: 1
                }}

            />
            <Button
                title='Subscribe - 25 INR'
                onPress={subscribe}

            />
        </View>
    )
}

export default Payment