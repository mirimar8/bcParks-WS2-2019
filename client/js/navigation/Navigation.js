import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Explore from '../assets/images/Explore';
import Timer from '../assets/images/Timer';
import Activity from '../assets/images/Activity';
import HomeScreen from '../screens/Home';
import ActivityScreen from '../screens/Activity';
import TimerScreen from '../screens/Timer';
import ExploreScreen from '../screens/Explore';
import MoodSelectScreen from '../screens/MoodSelect';
import TextInputScreen from '../screens/TextInput';
import GoalScreen from '../screens/Goal';
import JournalScreen from '../screens/Journal';
import { OnLanding, OnLocation, OnTime, OnActivity, OnGoal, OnEnd } from '../screens/Onboarding';
import { LoginContainer, SignUpContainer } from '../screens/User';
import MapContext from '../context/MapContext';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import { theme } from '../globalStyles'

const OnboardingStack = createStackNavigator();
const OnboardingStackScreen = () => {
  return (
    <OnboardingStack.Navigator initialRouteName="OnLanding" headerMode="none">
      <OnboardingStack.Screen name="OnLanding" component={OnLanding} />
      <OnboardingStack.Screen name="OnLocation" component={OnLocation} />
      <OnboardingStack.Screen name="OnTime" component={OnTime} />
      <OnboardingStack.Screen name="OnActivity" component={OnActivity} />
      <OnboardingStack.Screen name="OnGoal" component={OnGoal} />
      <OnboardingStack.Screen name="OnEnd" component={OnEnd} />
    </OnboardingStack.Navigator>
  );
};

const UserStack = createStackNavigator();

const UserStackScreen = () => {
  return (
    <UserStack.Navigator initialRouteName="Login" headerMode="none">
      <UserStack.Screen name="Login" component={LoginContainer} />
      <UserStack.Screen name="SignUp" component={SignUpContainer} />
      <UserStack.Screen name="Goal" component={GoalScreen} />
    </UserStack.Navigator>
  );
};

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator headerMode="none">
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Goal" component={GoalScreen} />
    </HomeStack.Navigator>
  );
};

const ExploreStack = createStackNavigator();

const ExploreStackScreen = () => {
  return (
    <ExploreStack.Navigator headerMode="none">
      <ExploreStack.Screen name="Explore" component={ExploreScreen} />
    </ExploreStack.Navigator>
  );
};

const TimerStack = createStackNavigator();

const TimerStackScreen = () => {
  return (
    <TimerStack.Navigator headerMode="none">
      <TimerStack.Screen name="Timer" component={TimerScreen} />
      <TimerStack.Screen name="MoodSelect" component={MoodSelectScreen} />
      <TimerStack.Screen name="TextInput" component={TextInputScreen} />
    </TimerStack.Navigator>
  );
};

const ActivityStack = createStackNavigator();

const ActivityStackScreen = () => {
  return (
    <ActivityStack.Navigator headerMode="none">
      <ActivityStack.Screen name="Activity" component={ActivityScreen} />
      <ActivityStack.Screen name="Journal" component={JournalScreen} />
    </ActivityStack.Navigator>
  );
};

const SettingsStack = createStackNavigator();

const SettingsStackScreen = () => {
  return (
    <SettingsStack.Navigator headerMode="none">
      <SettingsStack.Screen name="Settings" component={GoalScreen} />
    </SettingsStack.Navigator>
  )
}

const Tab = createBottomTabNavigator();

const NavTabs = () => {
  const MapState = useContext(MapContext);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: () => {
          const { name } = route;
          if (name === 'Home') {
            return <Icon2 name='home' size={35} color={theme.primaryColor} />;
          } else if (name === 'Explore') {
            return <Explore />;
          } else if (name === 'Timer') {
            return <Timer />;
          } else if (name === 'Activity') {
            return <Activity />;
          } else if (name === 'Settings') {
            return <Icon2 name='settings' size={35} color={theme.primaryColor} />
          }
        },
      })}
      tabBarOptions={{
        inactiveTintColor: 'grey',
        activeTintColor: '#49773A',
        style: {
          height: 105,
          padding: 10,
          backgroundColor: '#fff',
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{ title: 'Home' }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{ title: 'Explore', tabBarVisible: false }}
      />
      <Tab.Screen
        name="Timer"
        component={TimerStackScreen}
        options={{ title: 'Timer', tabBarVisible: false }}
      />
      <Tab.Screen
        name="Activity"
        component={ActivityStackScreen}
        options={{ title: 'Activity', tabBarVisible: false }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStackScreen}
        options={{ title: 'Settings' }}
      />
    </Tab.Navigator>
  );
};

const RootStack = createStackNavigator();

const Navigation = () => (
  <NavigationContainer>
    <RootStack.Navigator initialRouteName="Onboarding" headerMode="none">
      <RootStack.Screen name="Onboarding" component={OnboardingStackScreen} />
      <RootStack.Screen name="User" component={UserStackScreen} />
      <RootStack.Screen name="Tabs" component={NavTabs} />
    </RootStack.Navigator>
  </NavigationContainer>
);
export default Navigation;
