import react from 'react'
import { StyleSheet, SafeAreaView, ScrollView,Pressable, Text, View,  FlatList } from 'react-native'
import React, { useState } from 'react'
import {createStaticNavigation,useNavigation} from '@react-navigation/native'

const Home=()=>{
 
      const navigation=useNavigation();
      const [number, setNumber] = useState();
      const [content, setContent] = useState([]);
      const [views, setViews] = useState([]);
      const [prev,setPrev]=useState();
      const [history,setHistory]=useState([]);
    
      const getRandomInt = () => {
        let value=1;
        const min = 1;
        const max = 6;
        while(true){ 
          value = (Math.floor(Math.random() * 10)) % ((max - min) + 1) + min;
          setPrev(value)
          if(prev!=value){
            break;
          }
          
        }
        setNumber(value);
          var data={  id:Date.now(),
          value:value};
        content.push(data);
        setHistory([...content])
        var list = [];
        for (let index = 1; index <= value; index++) {
          list.push({ id: Date.now(),
            value:index
           });
        }
        setViews(list);
      }

      const deleteItem=(id)=>{
         setContent(content.filter((item)=> item.id !== id))
      }


      const clearPreviousRolls=()=>{
        setContent([]);
      }

    return (
        <SafeAreaView style={styles.container}>
        <View style={styles.main_container}>
          <View style={styles.top_section}>
            <Text style={styles.comment_tag}>Game</Text>
            <Pressable onPress={()=> navigation.navigate('History',{content:history})} style={styles.btn} ><Text style={styles.btn_text}>History</Text></Pressable>
          </View>
          {/* box section which contain the dice and box containing dice */}
          <View style={styles.box_container}>
            <View style={styles.box}>
              {
                (number == 1) ? <View style={styles.dice}>{views.map((item, index) => <View style={styles.dot} key={item.id}></View>)}</View> : null
              }
  
            </View>
            <View style={styles.box}>
              {
                (number == 2) ? <View style={styles.dice2}>{views.map((item, index) => <View style={styles.dot} key={index}></View>)}</View> : null
              }
            </View>
            <View style={styles.box}>
              {
                (number == 3) ? <View style={styles.dice2}>{views.map((item, index) => <View style={styles.dot} key={index}></View>)}</View> : null
              }
            </View>
            <View style={styles.box}>
              {
                (number == 4) ? <View style={styles.dice4}>{views.map((item, index) => <View style={styles.dot} key={index}></View>)}</View> : null
              }
            </View>
            <View style={styles.box}>
              {
                (number == 5) ? <View style={styles.dice5}>
                  <View style={styles.dot5_section1}>
                    <View style={styles.dot5} ></View>
                    <View style={styles.dot5} ></View>
                  </View>
                  <View style={styles.dot5_section2} ><View style={styles.dot5} ></View></View>
                  <View style={styles.dot5_section3} >
                    <View style={styles.dot5} ></View>
                    <View style={styles.dot5} ></View>
                  </View>
                </View> : null
              }
            </View>
            <View style={styles.box}>
              {
                (number == 6) ? <View style={styles.dice6}>{views.map((item, index) => <View style={styles.dot} key={index}><Text>{index}</Text></View>)}</View> : null
              }
            </View>
  
          </View>
  
          {/* the last and button section which perform action on pressing  */}
  
          <Pressable style={styles.btn} onPress={getRandomInt}>
            <Text style={styles.btn_text} >Click</Text>
          </Pressable>
          <View style={styles.comment_container}>
  
  
            <Text style={styles.comment_tag}>Previous Rolls</Text>
            <FlatList keyExtractor={item => { item.id }} data={content} renderItem={({ item }) => (
              <ScrollView style={styles.value_container} >
                  <View style={styles.comment}>
                    <Text style={styles.value}>The Last Dice Roll is {item.value}</Text>
                    <Pressable style={styles.delete_btn} onPress={()=>deleteItem(item.id)}><Text style={styles.delete_text}>Delete</Text></Pressable>
                  </View>
              </ScrollView>
            )} ItemSeparatorComponent={<View style={{ height: 3 }}  ></View>} />
          </View>
          <Pressable style={styles.btn} onPress={()=>clearPreviousRolls()}><Text style={styles.btn_text}>Clear</Text></Pressable>
        </View>
      </SafeAreaView>
    )
}

export default Home

const styles=StyleSheet.create({
    top_section: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 10,
      },
      container: {
        width: "100%",
        height: "100%",
        backgroundColor: " #9B4DCA",
      },
      main_container: {
        width: "100%",
        height: "100%",
        padding: 10,
        display: "flex",
        flexDirection: "column",
        gap: 10,
      },
      box_container: {
        width: "100%",
        height: 300,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignContent: "center",
        gap: 10,
      },
      btn: {
        backgroundColor: "yellow",
        display: "flex",
        justifyContext: "center",
        alignItems: "center",
        padding: 15,
        borderRadius: 15,
    
      },
      btn_text: {
        fontWeight: 900,
        fontSize: 20,
        font: "bold",
        color: "black",
      },
      box: {
        width: "29%",
        height: 120,
        backgroundColor: "#dadada",
        direction: "flex",
        justifyContent: "center",
        alignItems: 'center',
        padding: 10,
      },
      dice: {
        width: "75%",
        height: "70%",
        backgroundColor: 'red',
        borderRadius: 10,
        opacity: 0.8,
        gap: 4,
        dispaly: "flex",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "wrap",
        padding: 4,
      },
      dot: {
        width: "25%",
        height: "20%",
        borderRadius: "50%",
        backgroundColor: "black",
      },
      dot5:{
        width: "25%",
        height: "55%",
        borderRadius: "50%",
        backgroundColor: "black"
      },
      comment_container: {
        height: 320,
        width: "100%",
        backgroundColor: "aqua",
        borderRadius: 20,
        padding: 20,
        marginBottom: 20,
        display: "flex",
      },
      comment_tag: {
        color: "black",
        fontSize: 20,
        font: "bold",
        fontWeight: 900,
        margin: "auto"
      },
      value: {
        height:"100%",
        color: "black",
        fontSize: 20,
        font: "bold",
        fontWeight: 900,
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      },
      value_container: {
        display: "flex",
        flexDirection: "row",
        padding: 10,
        backgroundColor: "white",
        gap: 2,
        borderRadius: 10,
      },
      dice2: {
        width: "75%",
        height: "70%",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      },
      dice6: {
        width: "75%",
        height: "70%",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "red",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "wrap",
        gap: 10,
      },
      dice4: {
        width: "75%",
        height: "70%",
        padding: 10,
        borderRadius: 10,
        backgroundColor: "red",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignContent: "center",
        flexWrap: "wrap",
        gap: 20,
      },
      dice5: {
        width: "75%",
        height: "70%",
        borderRadius: 10,
        backgroundColor: "red",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding:8,
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
        color:"black",
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
        gap:100,
      },
      dot5_section1:{
        display:"flex",
        flexDirection:"row",
        flex:1,
         justifyContent:'space-between',
         alignItems:"center"
      },
      dot5_section2:{
        display:"flex" ,
        justifyContent:"center",
        flex:1,
        alignItems:"center"
      },
      dot5_section3:{
        display:"flex",
        flex:1,
        flexDirection:"row" ,
        justifyContent:"space-between",
        alignItems:"center"
      }
});