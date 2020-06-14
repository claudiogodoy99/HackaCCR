import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { Text, View, TouchableOpacity,SafeAreaView  } from 'react-native';
import { Camera } from 'expo-camera';
import * as FaceDetector from 'expo-face-detector';
import * as Speech from 'expo-speech';

export default function  monitoring() {

 

  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);



  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  
  const speak = () => {
    //this.vibrarPulseira();
    Speech.speak('Você está a 12h dirigindo, tem um posto em 3 quilometros');
  }

  const speak2 = () => {
    //this.vibrarPulseira();
    Speech.speak('Você apresenta sinais de sono, tem um posto em 2 quilometros');
  }

  const speak3 = () => {
    //vibrarPulseira();
    Speech.speak('Você apresenta sinais de fadiga, fique atento para não causar acidentes');
  }

  const speak4 = () => {
    //vibrarPulseira();
    Speech.speak('Não estou conseguindo reconhecer seu rosto');
  }

  return (
    
    <SafeAreaView style={{ flex: 1 }}>
      <Camera 
      style={{ flex: 1 }} 
      type={type} 
      onFacesDetected={({faces}) => {
        if(faces.length > 0){
            const face = faces[0];

            if(!face)
                speak4()
            if(face.faceId < 0)
                speak4()

            const {
                leftEyeOpenProbability,
                rightEyeOpenProbability,
            } = face;

            if(leftEyeOpenProbability < 0.2 && rightEyeOpenProbability < 0.2)
                speak3();
         }
      }}
      faceDetectorSettings={
        {
          mode: FaceDetector.Constants.Mode.fast,
          detectLandmarks: FaceDetector.Constants.Landmarks.all,
          runClassifications: FaceDetector.Constants.Classifications.all,
          minDetectionInterval: 3000,
          tracking: true,
        }}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
     </SafeAreaView>
  );
}