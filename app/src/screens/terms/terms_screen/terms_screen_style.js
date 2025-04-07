import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    backgroundColor: "#ffffff",
  },
  backButton: {
    marginBottom: 20,
    paddingLeft:10
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#473b3b",
    marginBottom: 20,
    paddingLeft:10
  },
  line: {
    height: 2,
    backgroundColor: "#705F5F",
    marginTop: 10,
    width: "100%",
  },
  agreeBox: {
    marginTop: 30,
    marginHorizontal: 30,
    backgroundColor: "#f7f7f7",
    borderRadius: 20,
    paddingVertical: 25,
    paddingHorizontal: 25,
  },
  agreeItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  agreeText: {
    fontSize: 14,
    marginLeft: 15,
    color: "#473b3b",
  },
  footer: {
    marginTop: "auto",
    alignItems: "center",
  },
  completeButton: {
    backgroundColor: "#705f5f",
    width: 310,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  completeButtonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 13,
  },
});
