import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	body:       {
		minHeight:       "100%",
		backgroundColor: "#F2F2F2"
	},
	header:     {
		paddingVertical: 20,
		backgroundColor: "#1976D2"
	},
	h1:         {
		color:      "#FFF",
		fontSize:   28,
		fontWeight: "700",
		alignSelf:  "center"
	},
	h2:         {
		color:      "#FFF",
		fontSize:   18,
		fontWeight: "500",
		alignSelf:  "center"
	},
	main:       {
		minHeight:       "100%",
		margin:          8,
		padding:         8,
		backgroundColor: "#F2F2F2"
	},
	form:       {
		width: "80%",
		// paddingVertical: 16,
		alignSelf: "center"
	},
	amount:     {
		width:     "40%",
		alignSelf: "center"
	},
	inputLabel: {
		marginBottom: 4,
		marginLeft:   4,
		fontSize:     16,
		alignSelf:    "flex-start"
	},
	textInput:  {
		padding:         8,
		borderWidth:     1,
		borderRadius:    4,
		backgroundColor: "#FFF",
		fontSize:        16
	},
	button:     {
		paddingHorizontal: 16,
		paddingVertical:   8,
		borderRadius:      4,
		backgroundColor:   "#1976D2"
	},
	buttonText: {
		color:         "#FFF",
		fontSize:      18,
		fontWeight:    "700",
		textTransform: "uppercase",
		textAlign:     "center",
		letterSpacing: 4
	},
	result:     {
		marginVertical: 20,
		fontSize:       18,
		fontWeight:     "600",
		textAlign:      "center",
		alignSelf:      "center"
	},
	boxShadow:  {
		shadowOpacity: .5,
		shadowOffset:  { width: 1, height: 1 },
		shadowRadius:  2,
		shadowColor:   "#000"
	}
});
