import React, {useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, Button,Image, Alert } from 'react-native';
import {Camera} from 'expo-camera';
import {Audio} from 'expo-av';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
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
});
const [temPermissaoCamera, setTemPermissaoCamera] = useState(null);
  const [temPermissaoAudio, setTemPermissaoAudio] = useState(null);

const cameraRef = useRef(null);
  const [uriDaImagem, setUriDaImagem] = useState(null);
  const [cameraPronta, setCameraPronta] = useState(false);