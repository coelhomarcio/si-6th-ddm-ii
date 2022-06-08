import "react-native-gesture-handler";
import * as React                                                         from "react";
import { Image, StyleSheet, Text, View }                                  from "react-native";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { NavigationContainer }                                            from "@react-navigation/native";

// @ts-ignore
import Ionicons from "react-native-vector-icons/Ionicons";

import Home       from "./component/home/home";
import Personal   from "./component/personal/personal";
import Degree     from "./component/degree/degree";
import Experience from "./component/experience/experience";

const Drawer = createDrawerNavigator();

const icons: any = {
	Home:       { name: "ios-home" },
	Personal:   { name: "ios-person-circle" },
	Degree:     { name: "ios-school" },
	Experience: { name: "ios-document" }
};

const styles = StyleSheet.create({
	boxShadow: {
		shadowOpacity: .5,
		shadowOffset:  { width: 1, height: 1 },
		shadowRadius:  2,
		shadowColor:   "#000"
	}
});

function AppDrawer(props: any) {
	return (
		<DrawerContentScrollView { ...props } style={ { margin: 20 } }>
			<View style={ {
				width:          "100%",
				height:         160,
				alignItems:     "center",
				justifyContent: "center"
			} }>
				<View style={ { ...styles.boxShadow } }>
					<Image
						source={ require("./assets/img/Coelho.png") }
						style={ { width: 120, height: 120, borderRadius: 100 } }
					/>
				</View>
				<Text style={ { fontSize: 28, marginTop: 5 } }>
					Coelho
				</Text>
			</View>
			<DrawerItemList { ...props } />
		</DrawerContentScrollView>
	);
}

export default function App() {
	return (
		<NavigationContainer>
			<Drawer.Navigator
				drawerContent={ AppDrawer }
				initialRouteName="Home"
				screenOptions={ ({ route }) => ({
					drawerIcon: ({ color, size }) => {
						const { name } = icons[route.name];
						return <Ionicons name={ name } color={ color } size={ size }/>;
					}
				}) }
			>
				<Drawer.Screen name="Home" component={ Home } options={ { title: "Home" } }/>
				<Drawer.Screen name="Personal" component={ Personal } options={ { title: "Pessoal" } }/>
				<Drawer.Screen name="Degree" component={ Degree } options={ { title: "Formação" } }/>
				<Drawer.Screen name="Experience" component={ Experience } options={ { title: "Experiência" } }/>
			</Drawer.Navigator>
		</NavigationContainer>
	);
}
