import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
  },
  content: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  header: {
    width: "90%",
    alignItems: "flex-start",
    gap: 10,
    paddingVertical: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: "#473b3b",
    lineHeight: 40,
  },
  subTitle: {
    fontSize: 13,
    fontWeight: "500",
    color: "#aeaeae",
    lineHeight: 20,
    marginTop: 10,
  },
  permissionList: {
    flex: 1,
    width: "100%",
    marginTop: 20,
    gap: 20,
  },
  permissionItem: {
    backgroundColor: "#fff",
    padding: 15, 
	borderRadius: 10,
  },
  permissionTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#000",
    marginBottom: 5,
  },
  permissionDesc: {
    fontSize: 13,
    color: "#777",
  },
  footer: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 30,
  },
  completeButton: {
	backgroundColor: "#705F5F",
	width: 310,
	height: 40,           
	alignItems: "center",
	justifyContent: "center", 
	borderRadius: 15,
  },
  completeButtonText: {
    color: "#ffffff",
    fontWeight: "500",
    fontSize: 14,
  },
});
