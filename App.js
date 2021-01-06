import React, { Component } from "react";

import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import BookItem from "./BookItem";


class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = { datause:null ,isload:true};
  }

 componentDidMount() {
   return fetch(`https://gorest.co.in/public-api/users`)
    .then((response) => response.json())
    .then((responseJson) => {
     this.setState({
       isload:false,
       datause:responseJson.data,
     })
    })
    .catch(error => {
        console.error(error);
      });
  }
 _renderItem=({item})=>
 {
   return(
   <BookItem title={item.name} author={item.email}/>
   );
 }
  render(){
    return <FlatList data={this.state.datause} renderItem={this._renderItem} keyExtractor={(item,index)=>index.toString()} />;    
  }
}

  
export default BookList;  