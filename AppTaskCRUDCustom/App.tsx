import * as React               from "react";
import { NavigationContainer }  from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Task from "./component/task/task";
import Form from "./component/form/form";

const Stack = createStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={ "Task" }>
				<Stack.Screen name="Task" component={ Task }
				              options={ {
					              title:                  "Tarefas",
					              headerStyle:            { backgroundColor: "#2C6CBC" },
					              headerTintColor:        "#FFF",
					              headerBackTitleVisible: false
				              } }
				/>
				<Stack.Screen name="Form" component={ Form }
				              options={ {
					              title:                  "Formulário",
					              headerStyle:            { backgroundColor: "#2C6CBC" },
					              headerTintColor:        "#FFF",
					              headerBackTitleVisible: false
				              } }
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
