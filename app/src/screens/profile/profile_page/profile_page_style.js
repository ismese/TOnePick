import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 20,
	color: "#473B3B",
  },
  profileCard: {
    width: "100%",
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 65,
    height: 65,
    backgroundColor: "#eee",
    borderRadius: 100,
  },
  profileTextContainer: {
    flex: 1,
    marginLeft: 20,   
  },
  profileName: {
    fontSize: 16,   
	color: "#000000",
 	marginBottom: 7,
	fontWeight: "500", 
  },
  profileId: {
    fontSize: 16,
    color: "#000000",
  },
  arrow: {
    fontSize: 25,
    color: "#666",
  },
  divider: {
	width: "100%",            
	height: 1,      
	backgroundColor: "#e0e0e0",  
	marginVertical: 10,  
	marginBottom: 20,
  },
  menuList: {
    width: "100%",
  },
  menuItem: {
    fontSize: 16,
    color: "#646464",
    marginBottom: 50,
	paddingLeft: 20, 
  },
});

export default styles;
