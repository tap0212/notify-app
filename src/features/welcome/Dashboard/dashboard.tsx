/**
 * @format
 */

import React, { FC } from 'react';
import { ScrollView, View, StatusBar, Button } from 'react-native';
import RouteNames from 'routeNames';

const Dashboard: FC<Props> = (props: Props) => {
  const { navigation } = props;
  const goToHome = () => navigation.navigate(RouteNames.Welcome.home);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Button
            onPress={goToHome}
            title="Go to home"
            color="#841584"
            accessibilityLabel="Go to home button"
          />
        </View>
      </ScrollView>
    </>
  );
};
type Props = {
  navigation: any;
};
export default Dashboard;
