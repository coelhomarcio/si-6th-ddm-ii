import React                                               from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";


const App = () => {
	return (
		<SafeAreaView style={ { height: "100%", flexDirection: "row", justifyContent: "center", alignItems: "center" } }>
			<StatusBar/>
			<ScrollView>
				<View>
					<Text style={ { color: "#090981", fontSize: 28, fontWeight: "700", textAlign: "center" } }>Hello World!</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

export default App;
