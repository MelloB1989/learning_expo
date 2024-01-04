import { Center, FormControl, Input, InputField, Heading, Image, Button, ButtonText } from '@gluestack-ui/themed';
import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';

const config = {
    authURL: 'f',
    NBSP_KEY: 'f'
};

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function login() {
      const response = await axios.post(`${config.authURL}/auth`, {
        username: email,
        password: password,
        server_key: config.NBSP_KEY,
      }, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded', // Set the appropriate content type for form data
        },
      });

        if(response.data.api_status === 200) {
            Toast.show({
                type: 'success',
                text1: 'Hello',
                text2: 'Login Successful'
              });
            // Save the access token
            try {
                await AsyncStorage.setItem('access_key', response.data.access_token);
                await AsyncStorage.setItem('user_id', response.data.user_id);
            } catch (e) {
                // saving error
                console.log(e);
            }
        }

    }  

    return (
        <Center >
            <Heading>Login to Avidia Labs</Heading>
            <Image
  size="2xl"
  borderRadius="$none"
  source={{
    uri: "https://avidia.in/assets/images/logo.png",
  }}
  style={{marginTop: 40}}
/>
        <FormControl style={{marginTop: 40}}>
            <Input w={200}>
                <InputField type="text" placeholder="Email" onChangeText={(text)=>{setEmail(text)}} />
            </Input>
            <Input w={200} style={{marginTop: 20}}>
                <InputField type="password" placeholder="Password" onChangeText={(text)=>{setPassword(text)}} />
            </Input>
        </FormControl>

        <Button style={{marginTop: 50}} size="lg" variant="outline" action="positive" isDisabled={false} isFocusVisible={false} onPress={login} >
          <ButtonText>Add </ButtonText>
        </Button>
      
        </Center>
    );
}

export default Login;