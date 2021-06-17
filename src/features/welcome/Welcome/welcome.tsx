/**
 * @format
 */

import React, { FC, useState } from 'react';
import { ScrollView, View, Text, StatusBar, Button, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { AnyAction, compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import RouteNames from 'routeNames';
import { selectWelcomeUser } from 'features/welcome/Welcome/welcome.selector';
import { welcomeCreators } from './welcome.reducer';

import Styles from './welcome.styles';

const Welcome: FC<Props> = (props: Props) => {
  const { navigation, user, dispatchSetWelcomeUser } = props;
  const [userName, setUserName] = useState<string>('');

  const goToDashboard = (): void => navigation.navigate(RouteNames.Welcome.dashboard);
  const submitUser = (): void => {
    dispatchSetWelcomeUser(userName);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={Styles.wrapper}>
          {user ? (
            <Text style={Styles.userName}>
              Hello
              {user}
            </Text>
          ) : (
            <>
              <TextInput
                placeholder="Enter your name"
                style={Styles.textInput}
                value={userName}
                onChangeText={(text): void => {
                  setUserName(text);
                }}
              />
              <Button onPress={submitUser} title="Submit" color="#841584" />
            </>
          )}

          <View>
            <Button
              onPress={goToDashboard}
              title="Go to Dashboard"
              color="#841584"
              accessibilityLabel="Go to Dashboard button"
            />
          </View>
        </View>
      </ScrollView>
    </>
  );
};
type Props = {
  navigation: any;
  user: string;
  dispatchSetWelcomeUser: (name: string) => void;
};
const mapStateToProps = createStructuredSelector({
  user: selectWelcomeUser(),
});

function mapDispatchToProps(dispatch: (arg0: AnyAction) => any) {
  const { setWelcomeUser } = welcomeCreators;
  return {
    dispatchSetWelcomeUser: (name: string) => dispatch(setWelcomeUser(name)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(withConnect)(Welcome);
