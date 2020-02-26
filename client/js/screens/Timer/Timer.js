import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const TimerScreen = () => {

    const [startStop, setStartStop] = useState(true);

    startStopPress = () => {
        setStartStop(!startStop)
    }

    return (
        <View>
            <View>
                <Text>pic</Text>
            </View>
            <View>
                <Text>00:00:00</Text>
                <Text>Spending more time in nature contributes to a better sleep cycle and helps in lowering anxiety</Text>
                <TouchableOpacity onPress={this.startStopPress}>
                    {startStop ?
                        <Text>
                            Start Green Time
                        </Text> :
                        <Text>
                            Stop Green Time
                        </Text>
                    }
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default TimerScreen;