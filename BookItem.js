import React, { Component } from "react";

import { StyleSheet, Text, View,} from "react-native";

const styles = StyleSheet.create({
    bookItem: {
      flexDirection: "row",
      backgroundColor: "#FFFFFF",
      borderBottomColor: "#AAAAAA",
      borderBottomWidth: 2,
      padding: 5,
      height: 175
    },
    cover: { flex: 1, height: 150, resizeMode: "contain" },
    info: {
      flex: 3,
      alignItems: "flex-end",
      flexDirection: "column",
      alignSelf: "center",
      padding: 20
    },
    author: { fontSize: 18 },
    title: { fontSize: 18, fontWeight: "bold" }
  });
class bookItem extends Component{
    render()
    {
        return(
            <View style={styles.bookItem}>
            <Text style={styles.info}>{this.props.author}</Text>
            <Text style={styles.author}>{this.props.title}</Text>
            </View>
        );
    }
}  
export default bookItem;