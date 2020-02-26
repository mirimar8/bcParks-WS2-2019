import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from '../screens/Home';
import ActivityScreen from '../screens/Activity';
import TimerScreen from '../screens/Timer';
import ExploreScreen from '../screens/Explore';
import MoodSelectScreen from '../screens/MoodSelect';

const HomeStack = createStackNavigator({
    Home: HomeScreen
});
const ActivityStack = createStackNavigator({
    Activity: ActivityScreen
});
const TimerStack = createStackNavigator({
    Timer: TimerScreen,
    MoodSelect: MoodSelectScreen
});
const ExploreStack = createStackNavigator({
    Explore: ExploreScreen
});


const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeStack,
        Activity: ActivityStack,
        Timer: TimerStack,
        Explore: ExploreStack,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({

        }),
        tabBarOptions: {
            activeTintColor: 'white',
            inactiveTintColor: 'grey',
            labelStyle: {
                fontSize: 14,
                fontFamily: 'Comfortaa-Bold',

            },
            style: {
                backgroundColor: "#000",
                height: 60,
                paddingVertical: 5
            }
        },
    }
)

export default TabNavigator;