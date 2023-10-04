import React, { useState, useEffect } from "react";
import { View, Button } from "react-native";
import styled from "styled-components/native";
import { Camera, CameraType } from "expo-camera";
import { Text } from "../../components/TypoGraphy";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;

const StyledView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const CameraScreen = () => {
  const [type] = useState(CameraType.front);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await requestPermission();
  //   })();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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

  return <ProfileCamera type={type} />;
};
