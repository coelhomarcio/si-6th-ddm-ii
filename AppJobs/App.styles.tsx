import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	body:                {
		minHeight:       "100%",
		backgroundColor: "#FFAB40"
	},
	header:              {
		backgroundColor: "#FFF",
		shadowOpacity:   .5,
		shadowOffset:    { width: 1, height: 1 },
		shadowRadius:    2,
		shadowColor:     "#000"
	},
	h1:                  {
		paddingVertical: 20,
		color:           "#FFAB40",
		fontSize:        28,
		fontWeight:      "700",
		alignSelf:       "center"
	},
	main:                {
		minHeight:         "100%",
		paddingHorizontal: 20
	},
	productDetails:      {
		marginVertical:    20,
		paddingHorizontal: 10,
		paddingVertical:   50,
		borderRadius:      32,
		backgroundColor:   "#EF6C00",
		shadowOpacity:     .5,
		shadowOffset:      { width: 1, height: 1 },
		shadowRadius:      2,
		shadowColor:       "#000"
	},
	productDetailsTitle: {
		fontSize:   26,
		fontWeight: "700"
	},
	productDetailsBody:  {
		fontSize:   20,
		fontWeight: "500"
	},
	productDetailsText:  {
		paddingVertical: 20,
		color:           "#FFF",
		textAlign:       "center",
		alignSelf:       "center"
	}
});
