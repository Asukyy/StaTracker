import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity, Switch } from "react-native";
import { useState, useEffect } from "react";

import Modal from 'react-native-modal';


export default function Settingscreen() {
    const [isModalVisibleTheme, setModalVisibleTheme] = useState(false);
    const [isModalVisibleNotif, setModalVisibleNotif] = useState(false);
    const [isModalVisibleProp, setModalVisibleProp] = useState(false);
    const [isModalVisibleAide, setModalVisibleAide] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
  
    const [mode, setMode] = useState(false);
  
  
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 19, marginBottom: 20 }}>StaTrack !</Text>
        <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginBottom: 20, marginTop: 20, width: 500 }} />
        <TouchableOpacity onPress={() => setModalVisibleTheme(true)}>
          <Text style={{ fontSize: 16 }}>Theme</Text>
        </TouchableOpacity>
        <Modal style={{ backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 220, marginBottom: 220 }} isVisible={isModalVisibleTheme}>
          <View >
            <Text>Dark Mode</Text>
            <Switch style={{ width: 60 }} value={mode} onValueChange={() => setMode((value) => !value)} />
            <TouchableOpacity style={styles.button} onPress={() => setModalVisibleTheme(false)}>
              <Text style={styles.titlebutton} >Fermer</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginBottom: 20, marginTop: 20, width: 500 }} />
        <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginBottom: 20, marginTop: 20, width: 500 }} />
        <TouchableOpacity onPress={() => setModalVisibleNotif(true)}>
          <Text style={{ fontSize: 16 }}>Notifications</Text>
        </TouchableOpacity>
        <Modal style={{ backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 220, marginBottom: 220 }} isVisible={isModalVisibleNotif}>
          <View >
            <Text>Ceci est un modal</Text>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisibleNotif(false)}>
              <Text style={styles.titlebutton} >Fermer</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginBottom: 20, marginTop: 20, width: 500 }} />
        <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginBottom: 20, marginTop: 20, width: 500 }} />
        <TouchableOpacity onPress={() => setModalVisibleProp(true)}>
          <Text style={{ fontSize: 16 }}>A propos</Text>
        </TouchableOpacity>
        <Modal style={{ backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginTop: 220, marginBottom: 220 }} isVisible={isModalVisibleProp}>
          <View >
            <Text>Ceci est un modal</Text>
            <TouchableOpacity style={styles.button} onPress={() => setModalVisibleProp(false)}>
              <Text style={styles.titlebutton} >Fermer</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginBottom: 20, marginTop: 20, width: 500 }} />
        <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginBottom: 20, marginTop: 20, width: 500 }} />
        <TouchableOpacity onPress={() => setModalVisibleAide(true)}>
          <Text style={{ fontSize: 16 }}>Aide et Confidentialité</Text>
        </TouchableOpacity>
        <Modal style={{ backgroundColor: 'white', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }} isVisible={isModalVisibleAide}>
          <View style={{padding: 20}}>
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
        
        <TouchableOpacity style={styles.button} onPress={() => setModalVisibleAide(false)}>
              <Text style={styles.titlebutton} >Fermer</Text>
        </TouchableOpacity>
          </View>
        </Modal>
        <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginBottom: 20, marginTop: 20, width: 500 }} />
        <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginBottom: 20, marginTop: 20, width: 500 }} />
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={{ fontSize: 16 }}>Logout</Text>
        </TouchableOpacity>
        <Modal style={{ backgroundColor: 'white', borderRadius: 20, marginTop: 220, marginBottom: 220 }} isVisible={isModalVisible}>
          <Text style={{ fontSize: 16, textAlign: 'center', marginBottom: 20, fontWeight: 'bold' }}>Do you really want to disconnect?</Text>
          <View >
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonlogout} >Fermer</Text>
            </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(false)}>
              <Text style={styles.titlebutton} >Fermer</Text>
            </TouchableOpacity>
          </View>
        </Modal>
        <View style={{ borderBottomColor: 'grey', borderBottomWidth: 1, marginBottom: 20, marginTop: 20, width: 500 }} />
      </View>
    );
  
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
      marginVertical: 8,
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
      fontSize: 15,
      marginBottom: 10,
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

  
  });


  