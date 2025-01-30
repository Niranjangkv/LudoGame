
import {View,Text,FlatList, ScrollView,StyleSheet,Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useState} from "react";


const History=({route})=>{
  const navigation=useNavigation();
  const {content}=route.params;
  const [history,setHistory]=useState(content);
  

  const deleteHandler=(id)=>{
    setHistory(content.filter((item)=> item.id !== id))
  }
   return (

      <View style={styles.main} >
        <View style={styles.comment_container}>
            <FlatList data={history} keyExtractor={(item)=>item.id}
              renderItem={({item})=>(
                <ScrollView style={styles.value_container}>
                  <View style={styles.container}>
                     <View style={styles.comment}>
                    <Text style={styles.comment_tag}>The Last Dice Roll is {item.value}</Text>
                    <Pressable style={styles.delete_btn} onPress={()=>deleteHandler(item.id)}><Text style={styles.delete_btn}>Delete</Text></Pressable>
                  </View>
                  </View>
                 
                </ScrollView>
              )}
             />
        </View>
      </View>
       
    )
}

   

export default History
const styles=StyleSheet.create({
  container:{
    padding:5,
    flexDirection:"column",
    justifyContent:"center",
    alignContent:"center",
    backgroundColor:"white",
    marginTop:5,
    marginBottom:5,
    borderRadius:15,
  },  
  main:{
    height: "100%",
    width: "100%",
  },
 
  comment_tag: {
    color: "black",
    fontSize: 20,
    font: "bold",
    fontWeight: 900,
    margin: "auto",
    alignContent:"center"
  },
  delete_btn:{
    display:'flex',
    alignItems:'center',
    justifyContent:"center",
    padding:6,
    backgroundColor:"green",
    borderRadius:10,
  },
  delete_text:{
    color:"red",
    font:"bold",
    fontSize:15,
    alignContent:"center",
    fontWeight:600,
  },
  comment:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItem:"center",
    gap:120,
  },
  comment_container: {
    height:"100%",
    width:"100%",
    backgroundColor: "aqua",
    display: "flex",
    padding:20,
  },
})