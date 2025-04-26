import { useContext, useEffect, useLayoutEffect } from "react"
import { Alert, View } from "react-native"
import { Button, Text, Title } from "react-native-paper"
import { StoreContext } from "./Store"

const Home = ({navigation}) => {
  const {currentUser} = useContext(StoreContext)
  const [userLogin, setUserLogin] = currentUser

  useEffect(() => {
    if(userLogin == null)
      navigation.navigate("login")
  }, [userLogin])

  // useLayoutEffect(() => {
  //     navigation.setOptions({
  //         title : userLogin.email
  //     })
  // }, [navigation])

  return (
    <View style={{flex: 1}}>
      <Button onPress={() => setUserLogin(null)}>
        Logout
      </Button>
    </View>
  )
}

export default Home
