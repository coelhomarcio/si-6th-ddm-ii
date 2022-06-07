import React from "react";

import { NavigationContainer }  from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home   from "./component/home/home";
import Result from "./component/result/result";

const App = () => {
	const Stack = createStackNavigator();
	const title = "Abertura de Conta Bancária";
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={ "Home" }>
				<Stack.Screen
					name="Home"
					component={ Home }
					options={ {
						title:                  title,
						headerStyle:            { backgroundColor: "#00796B" },
						headerTintColor:        "#FFF",
						headerBackTitleVisible: false
					} }
				/>
				<Stack.Screen
					name="Result"
					component={ Result }
					options={ {
						title:                  title,
						headerStyle:            { backgroundColor: "#00796B" },
						headerTintColor:        "#FFF",
						headerBackTitleVisible: false
					} }
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
