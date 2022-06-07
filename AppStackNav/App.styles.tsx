import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	body:             {
		minHeight:       "100%",
		backgroundColor: "#E9E9E9"
	},
	header:           {
		paddingVertical: 20,
		backgroundColor: "#00796B"
	},
	h1:               {
		color:      "#FFF",
		fontSize:   28,
		fontWeight: "700",
		alignSelf:  "center"
	},
	main:             {
		padding: 20
	},
	formNameAge:      {
		marginBottom:   20,
		padding:        4,
		flexDirection:  "row",
		justifyContent: "space-between"
	},
	formName:         {
		width: "75%"
	},
	formAge:          {
		width: "20%"
	},
	textLabel:        {
		paddingVertical: 2,
		fontSize:        18,
		fontWeight:      "500"
	},
	textInput:        {
		width:           "100%",
		height:          40,
		padding:         8,
		borderWidth:     1,
		borderRadius:    4,
		backgroundColor: "#FFF",
		fontSize:        18
	},
	formGender:       {
		marginBottom: 20,
		padding:      4,
		fontSize:     12
	},
	formSchooling:    {
		marginBottom: 20,
		padding:      4,
		fontSize:     12
	},
	picker:           {
		width:        "100%",
		padding:      8,
		borderWidth:  1,
		borderRadius: 4
	},
	formIsBrazilian:  {
		marginBottom:   20,
		padding:        4,
		fontSize:       12,
		flexDirection:  "row",
		justifyContent: "space-between"
	},
	formAccountLimit: {
		marginBottom: 20,
		padding:      4,
		fontSize:     28
	},
	pressable:        {
		marginVertical:    20,
		marginHorizontal:  4,
		paddingHorizontal: 16,
		paddingVertical:   8,
		borderRadius:      4,
		backgroundColor:   "#00796B"
	},
	textPressable:    {
		color:         "#FFF",
		fontSize:      18,
		fontWeight:    "700",
		textTransform: "uppercase",
		textAlign:     "center",
		letterSpacing: 4
	},
	result:           {
		padding: 4
	},
	resultTitle:      {
		marginBottom:       20,
		fontSize:           22,
		fontWeight:         "500",
		textDecorationLine: "underline"
	},
	resultText:       {
		fontSize: 18
	},
	boxShadow:        {
		shadowOpacity: .5,
		shadowOffset:  { width: 1, height: 1 },
		shadowRadius:  2,
		shadowColor:   "#000"
	},
	textCenter:       {
		textAlign: "center"
	}
});
