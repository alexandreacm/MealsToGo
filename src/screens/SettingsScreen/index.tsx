import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";

import { Text } from "../../components/TypoGraphy";
import { Spacer } from "../../components/Spacer/";
import { SafeArea } from "../../utility/SafeArea";
import { AuthenticationContext } from "../../services/authentication/authentication.context";
import { useTheme } from "styled-components";

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

const AvatarIcon = styled(Avatar.Icon)``;

const TouchableCamera = styled(TouchableOpacity)``;

export const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useContext(AuthenticationContext);
  const { colors } = useTheme();

  return (
    <SafeArea>
      <AvatarContainer>
        <TouchableCamera onPress={navigation.navigate("Camera")}>
          <AvatarIcon
            size={180}
            icon="human"
            backgroundColor={colors.brand.primary}
          />
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
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favorites")}
        />
        <SettingsItem
          style={{ padding: 16 }}
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};
