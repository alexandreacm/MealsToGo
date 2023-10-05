import React, { useState, useRef, useContext } from "react";
import { View, Button } from "react-native";
import styled from "styled-components/native";
import { Camera, CameraType } from "expo-camera";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Text } from "../../components/TypoGraphy";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TakePicture = styled(TouchableOpacity)``;

export const CameraScreen = ({ navigation }) => {
  const [type] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef(null);
  const { user } = useContext(AuthenticationContext);

  // const [hasPermission, setHasPermission] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     const { granted } = await Camera.requestCameraPermissionsAsync();
  //     setHasPermission(granted);
  //   })();
  // }, []);

  const onTakePicture = async () => {
    if (cameraRef) {
      const myRef = cameraRef.current as any;
      const photo = await myRef.takePictureAsync();

      await AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };

  if (!permission) {
    return <View />;
  }

  if (!permission?.granted) {
    return (
      <StyledView>
        <Text variant="body">No access to camera</Text>
        <Button title="Grant permission" onPress={requestPermission} />
      </StyledView>
    );
  }

  return (
    <TakePicture onPress={onTakePicture}>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={type}
      />
    </TakePicture>
  );
};
