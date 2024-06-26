import { CameraView, useCameraPermissions, CameraProps } from 'expo-camera';
import { useRef, useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react'
import { Image } from 'react-native';

export default function Capture() {
          //-------- Camera Hooks: --------
          const [facing, setFacing] = useState<CameraProps["facing"]>("back");
          const [permission, requestPermission] = useCameraPermissions();
          const cameraRef = useRef<CameraView | null>(null);
        
          //-------- useState to save the photo uri string: --------
          const [uri, setUri] = useState<string | undefined>('');
        
          //-------- Camera permissions: --------
          if (!permission) {
            // Camera permissions are still loading.
            return <View />;
          }
          if (!permission.granted) {
            // Camera permissions are not granted yet.
            return (
              <View >
                <Text>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="grant permission" />
              </View>
            );
          }
        
          //-------- Toggle function to switch between front and back cameras: --------
          function toggleCameraFacing() {
            setFacing(current => (current === 'back' ? 'front' : 'back'));
          }
        
          //-------- Take picture ASYNC function: --------
          const takePic = async () => {
            const photo = await cameraRef.current?.takePictureAsync({});
            setUri(photo?.uri)
            console.log(JSON.stringify(photo));
          }

          //-------- What we render to the UI: --------
          return (
          <SafeAreaView>
            <View style={styles.container2}>
              <CameraView style={styles.camera} facing={facing} ref={cameraRef}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                    <Text style={styles.text}>Flip Camera</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.takePic} onPress={() => { takePic(); console.log("Capture") }} />
                </View>
              </CameraView>
              <Image source={{ uri: uri }} />
            </View>
            </SafeAreaView>
          );
        }

        const styles = StyleSheet.create({
          container2: {
            flex: 1,
            justifyContent: 'center',
          },
          camera: {
            flex: 1,
            height:'auto',
            width:'auto'
          },
          buttonContainer: {
            flex: 1,
            flexDirection: 'row',
            backgroundColor: 'transparent',
            margin: 20,
          },
          button: {
            flex: 1,
            alignSelf: 'flex-end',
            alignItems: 'center',
          },
          text: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
          },
          takePic: {
            height: 50,
            width: 50,
            backgroundColor: 'white',
            borderRadius: 50,
            alignSelf: 'flex-end',
            marginHorizontal: '20%'
          }
});