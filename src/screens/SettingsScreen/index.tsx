import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";

import { Text } from "../../components/TypoGraphy";
import { Spacer } from "../../components/Spacer/";
import { SafeArea } from "../../utility/SafeArea";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { useTheme } from "styled-components";
import { useFocusEffect } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
`;
const SettingsBackground = styled.ImageBackground.attrs({
  source: require("../../../assets/home_bg.jpg"),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.4);
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

const AvatarIcon = styled(Avatar.Icon)``;
const AvatarImage = styled(Avatar.Image)``;
const TouchableCamera = styled(TouchableOpacity)``;

export const SettingsScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (currentUser) => {
    const photoUri = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(photoUri);
  };

  useFocusEffect(
    React.useCallback(() => {
      getProfilePicture(user);
    }, [user]),
  );

  return (
    <SettingsBackground>
      <TransparentSafeArea>
        <AvatarContainer>
          <TouchableCamera onPress={() => navigation.navigate("Camera")}>
            {!photo && (
              <AvatarIcon
                size={180}
                icon="human"
                backgroundColor={colors.brand.primary}
              />
            )}
            {photo && (
              <AvatarImage
                size={180}
                source={{ uri: photo }}
                backgroundColor={colors.brand.primary}
              />
            )}
          </TouchableCamera>
          <Spacer position="top" size="large">
            <Text variant="label">{user?.email}</Text>
          </Spacer>
        </AvatarContainer>

        <List.Section>
          <SettingsItem
            style={{ padding: 16 }}
            title="Favourites"
            description="View your favourites"
            left={(props) => (
              <List.Icon {...props} color="black" icon="heart" />
            )}
            onPress={() => navigation.navigate("Favorites")}
          />
          <SettingsItem
            style={{ padding: 16 }}
            title="Logout"
            left={(props) => <List.Icon {...props} color="black" icon="door" />}
            onPress={onLogout}
          />
        </List.Section>
      </TransparentSafeArea>
    </SettingsBackground>
  );
};
