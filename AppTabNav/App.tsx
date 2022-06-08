import * as React                        from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer }           from '@react-navigation/native';
import { createBottomTabNavigator }      from '@react-navigation/bottom-tabs';

// @ts-ignore
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home       from './component/home/home';
import Personal   from './component/personal/personal';
import Degree     from './component/degree/degree';
import Experience from './component/experience/experience';

const Tab = createBottomTabNavigator();

const icons: any = {
	Home:       { name: 'ios-home' },
	Personal:   { name: 'ios-person-circle' },
	Degree:     { name: 'ios-school' },
	Experience: { name: 'ios-document' },
};

export default function App() {
	return (
		<NavigationContainer>
			<Tab.Navigator
				initialRouteName="Home"
				screenOptions={ ({ route }) => ({
					tabBarIcon: ({ color, size }) => {
						const { name } = icons[route.name];
						return <Ionicons name={ name } color={ color } size={ size }/>;
					},
				}) }
			>
				<Tab.Screen name="Home" component={ Home } options={ { title: 'Home' } }/>
				<Tab.Screen name="Personal" component={ Personal } options={ { title: 'Pessoal' } }/>
				<Tab.Screen name="Degree" component={ Degree } options={ { title: 'Formação' } }/>
				<Tab.Screen name="Experience" component={ Experience } options={ { title: 'Experiência' } }/>
			</Tab.Navigator>
		</NavigationContainer>
	);
}
