import React from 'react';
import { createContext } from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity, Switch, useColorScheme } from 'react-native';
import { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Modal from 'react-native-modal';
import { LoginButton } from 'react-native-tiktok-login';
import axios from 'axios';


const MyContext = createContext();

const tab = createBottomTabNavigator();

function HomeScreen() {

  return (
    <View>
      <LoginButton
        appId="your-app-id"
        appSecret="your-app-secret"
        redirectUrl="your-redirect-url"
        scope="your-requested-scope"
        onLoginSuccess={(token) => console.log(token)}
        onLoginFailure={(error) => console.error(error)}
      />
    </View>
  );
}

function MyStatsScreen() {
  return (
    <View style={styles.container}>
      <Text>My Stats!</Text>
    </View>
  );
}

function Autorisations() {
  return (
    <View style={styles.container}>
      <Text>Autorisations!</Text>
    </View>
  );
}



function SettingsScreen() {
  const [isModalVisibleTheme, setModalVisibleTheme] = useState(false);
  const [isModalVisibleNotif, setModalVisibleNotif] = useState(false);
  const [isModalVisibleProp, setModalVisibleProp] = useState(false);
  const [isModalVisibleAide, setModalVisibleAide] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [mode, setMode] = useState(false);

  const colorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(colorScheme === 'dark');

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#212527' : 'white' }]}>
      <Text style={[styles.textsettings, { color: isDarkMode ? 'white' : 'black' }]}>StaTrack !</Text>
      <View style={[styles.horizontal, { borderBottomColor: isDarkMode ? 'white' : 'black' }]} />
      <TouchableOpacity onPress={() => setModalVisibleTheme(true)}>
        <Text style={[styles.textsettings, { color: isDarkMode ? 'white' : 'black' }]}>Theme</Text>
      </TouchableOpacity>
      <Modal style={{ backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 220, marginBottom: 220 }} isVisible={isModalVisibleTheme}>
        <View >
          <Text>Dark Mode</Text>
          <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
          <TouchableOpacity style={styles.button} onPress={() => setModalVisibleTheme(false)}>
            <Text style={styles.titlebutton} >Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={[styles.horizontal, { borderBottomColor: isDarkMode ? 'white' : 'black' }]} />
      <View style={[styles.horizontal, { borderBottomColor: isDarkMode ? 'white' : 'black' }]} />
      <TouchableOpacity onPress={() => setModalVisibleNotif(true)}>
        <Text style={[styles.textsettings, { color: isDarkMode ? 'white' : 'black' }]}>Notifications</Text>
      </TouchableOpacity>
      <Modal style={{ backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 220, marginBottom: 220 }} isVisible={isModalVisibleNotif}>
        <View >
          <Text>Ceci est un modal</Text>
          <TouchableOpacity style={styles.button} onPress={() => setModalVisibleNotif(false)}>
            <Text style={styles.titlebutton} >Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={[styles.horizontal, { borderBottomColor: isDarkMode ? 'white' : 'black' }]} />
      <View style={[styles.horizontal, { borderBottomColor: isDarkMode ? 'white' : 'black' }]} />
      <TouchableOpacity onPress={() => setModalVisibleProp(true)}>
        <Text style={[styles.textsettings, { color: isDarkMode ? 'white' : 'black' }]}>A propos</Text>
      </TouchableOpacity>
      <Modal style={{ backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 120, marginBottom: 120 }} isVisible={isModalVisibleProp}>
        <View >
          <Text style={styles.titreprop}>A propos</Text>
          <Text style={styles.textprop}>
            Notre application vous permet de suivre vos statistiques et votre activité sur TikTok. Vous pouvez voir le nombre de likes, de messages et de commentaires que vous avez reçus, ainsi que le temps que vous avez passé sur l'application. Nous vous offrons également la possibilité de limiter votre temps d'utilisation sur TikTok afin de mieux gérer votre temps et votre utilisation des réseaux sociaux. Nous avons utilisé l'API de TikTok et React Native pour développer cette application, afin de vous offrir une expérience simple et fluide. Nous espérons que notre application vous sera utile et que vous apprécierez ses fonctionnalités.
          </Text>
          <TouchableOpacity style={{ backgroundColor: '#0094FF', marginTop: 10, borderRadius: 15, width: 150, height: 50, marginLeft: 100, marginBottom: 60 }} onPress={() => setModalVisibleProp(false)}>
            <Text style={styles.titlebutton} >Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={[styles.horizontal, { borderBottomColor: isDarkMode ? 'white' : 'black' }]} />
      <View style={[styles.horizontal, { borderBottomColor: isDarkMode ? 'white' : 'black' }]} />
      <TouchableOpacity onPress={() => setModalVisibleAide(true)}>
        <Text style={[styles.textsettings, { color: isDarkMode ? 'white' : 'black' }]}>Aide et Confidentialité</Text>
      </TouchableOpacity>
      <Modal style={{ backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }} isVisible={isModalVisibleAide}>
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>Comment obtenir de l'aide</Text>
          <Text style={styles.text}>
            Si vous avez besoin d'aide ou si vous rencontrez un problème avec notre application, veuillez nous contacter en utilisant l'un des moyens suivants :
          </Text>
          <Text style={styles.listItem}>
            . Envoyez-nous un email à l'adresse support@monapplication.com
          </Text>
          <Text style={styles.listItem}>
            . Utilisez notre formulaire de contact sur notre site web à l'adresse monapplication.com/contact
          </Text>
          <Text style={styles.text}>
            Nous ferons de notre mieux pour vous répondre rapidement et résoudre votre problème.
          </Text>

          <Text style={styles.title}>Politiques de confidentialité</Text>
          <Text style={styles.text}>
            Chez Mon Application, nous prenons très au sérieux la confidentialité de vos données personnelles. Voici comment nous les collectons et les utilisons :
          </Text>
          <Text style={styles.listItem}>
            . Nous collectons certaines données lorsque vous utilisez notre application, comme votre nom d'utilisateur, votre adresse email et votre emplacement géographique.
          </Text>
          <Text style={styles.listItem}>
            . Nous utilisons ces données pour améliorer les fonctionnalités de notre application et pour personnaliser les publicités que nous vous affichons.
          </Text>
          <Text style={styles.listItem}>
            . Nous ne vendons pas vos données à des tiers.
          </Text>
          <Text style={styles.text}>
            Si vous avez des questions ou des inquiétudes concernant notre utilisation de vos données, n'hésitez pas à nous contacter en utilisant les coordonnées fournies ci-dessus. Nous ferons de notre mieux pour répondre à vos demandes et résoudre tout problème.
          </Text>

          <TouchableOpacity style={{ backgroundColor: '#0094FF', marginTop: 10, borderRadius: 15, width: 150, height: 50, marginLeft: 90 }} onPress={() => setModalVisibleAide(false)}>
            <Text style={styles.titlebutton} >Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={[styles.horizontal, { borderBottomColor: isDarkMode ? 'white' : 'black' }]} />
      <View style={[styles.horizontal, { borderBottomColor: isDarkMode ? 'white' : 'black' }]} />
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={[styles.textsettings, { color: isDarkMode ? 'white' : 'black' }]}>Logout</Text>
      </TouchableOpacity>
      <Modal style={{ backgroundColor: 'white', borderRadius: 20, marginTop: 220, marginBottom: 220 }} isVisible={isModalVisible}>
        <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 20, fontWeight: 'bold' }}>Do you really want to disconnect?</Text>
        <View >
          <TouchableOpacity style={{ marginLeft: 85, backgroundColor: 'red', borderRadius: 10, width: 200, height: 50 }} onPress={() => setModalVisibleTheme(false)}>
            <Text style={{ textAlign: 'center', color: 'white', marginVertical: 13 }} >Logout</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: '#0094FF', marginTop: 20, borderRadius: 15, width: 150, height: 50, marginLeft: 110 }} onPress={() => setModalVisible(false)}>
            <Text style={styles.titlebutton} >Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={[styles.horizontal, { borderBottomColor: isDarkMode ? 'white' : 'black' }]} />
    </View>
  );

}



export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (



    <NavigationContainer>

      <tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = "home"
            } else if (route.name === 'Settings') {
              iconName = "settings"
            }
            else if (route.name === 'My Stats') {
              iconName = "stats-chart"
            }
            else if (route.name === 'Autorisations') {
              iconName = "shield-checkmark"
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <tab.Screen name="Home" component={HomeScreen} />
        <tab.Screen name="My Stats" component={MyStatsScreen} />
        <tab.Screen name="Autorisations" component={Autorisations} />
        <tab.Screen name="Settings" component={SettingsScreen} />
      </tab.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'grey',
    borderRadius: 25,
  },
  titlebutton: {
    textAlign: 'center',
    marginVertical: 12,
    color: 'white',
    fontSize: 15,
    borderRadius: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  text: {
    fontSize: 13,
    marginBottom: 10,
  },
  textprop: {
    fontSize: 16,
    marginBottom: 25,
    marginLeft: 5,
    textAlign: 'center',
  },
  titreprop: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  textsettings: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#0094FF',
    borderRadius: 15,
    width: 150,
    height: 50,
    justifyContent: 'center',
  },
  buttonlogout: {
    backgroundColor: 'red',
    borderRadius: 5,
    width: 150,
    height: 50,
    justifyContent: 'center',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
  },
  flex: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  horizontal: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginBottom: 20,
    marginTop: 20,
    width: 500,
  },

});



