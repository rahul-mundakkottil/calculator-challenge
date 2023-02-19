

import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View,TouchableHighlight} from 'react-native';


const Calculator = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [value,setvalue] =useState("");
  return (
    <View style={{backgroundColor:"#333333",height:"100%"}}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World</Text>
           
          </View>
        </View>
      </Modal>
      <View style={{alignItems:"flex-end"}}>
      <Text style={{ color:"#737373",fontSize:40,marginTop:270,}}>{value}</Text></View>

      <View style={{flexDirection:"row",marginTop:20}}>
     <View style={{backgroundColor:"#333333",borderRadius:30,marginLeft:30}} >
     <TouchableHighlight style={styles.thstyle}><Text style={styles.thtext} >C</Text></TouchableHighlight>
     <TouchableHighlight style={styles.thstyle}><Text style={styles.thtext}>7</Text></TouchableHighlight>
     <TouchableHighlight style={styles.thstyle}><Text style={styles.thtext}>4</Text></TouchableHighlight>
     <TouchableHighlight style={styles.thstyle}><Text style={styles.thtext} onPress={()=>setvalue( value=>value+"1")}>1</Text></TouchableHighlight>
     <TouchableHighlight style={styles.thstyle}><Text style={styles.thtext}></Text></TouchableHighlight>
     </View>

     <View  style={{backgroundColor:"#333333",borderRadius:30,marginLeft:30}}  >
     <TouchableHighlight style={styles.thstyle}><Text style={styles.thtext}>+/-</Text></TouchableHighlight>
     <TouchableHighlight style={styles.thstyle}><Text style={styles.thtext}>8</Text></TouchableHighlight>
     <TouchableHighlight style={styles.thstyle}><Text style={styles.thtext}>5</Text></TouchableHighlight>
     <TouchableHighlight style={styles.thstyle}><Text style={styles.thtext}>2</Text></TouchableHighlight>
     <TouchableHighlight style={styles.thstyle}><Text style={styles.thtext}>0</Text></TouchableHighlight>
     </View>

     <View style={{backgroundColor:"#333333",borderRadius:30,marginLeft:30}} >
     <TouchableHighlight style={styles.thstyle}><Text style={styles.thtext}>%</Text></TouchableHighlight>
     <TouchableHighlight style={styles.thstyle}><Text style={styles.thtext}onPress={()=>{
       setvalue( value=>value+"9")
       if(value=="1+3+"){ setModalVisible(!modalVisible);}  
     }}>9</Text></TouchableHighlight>
     <TouchableHighlight style={styles.thstyle}><Text style={styles.thtext}>6</Text></TouchableHighlight>
     <TouchableHighlight style={styles.thstyle}><Text style={styles.thtext} onPress={()=>setvalue( value=>value+"3")}>3</Text></TouchableHighlight>
     <TouchableHighlight style={styles.thstyle}><Text style={styles.thtext}>00</Text></TouchableHighlight>
     </View>
     <View >
        <View style={{backgroundColor:"#1A1A1A",borderRadius:30,marginLeft:30,marginBottom:0}}>
     <TouchableHighlight style={{ alignItems:"center",justifyContent:"center",height:55,width:60,marginTop:10}}><Text style={styles.thtext}>/</Text></TouchableHighlight>
     <TouchableHighlight style={styles.thstyle2}><Text style={styles.thtext}>X</Text></TouchableHighlight>
     <TouchableHighlight style={styles.thstyle2}><Text style={styles.thtext}>-</Text></TouchableHighlight>
     <TouchableHighlight style={styles.thstyle2}><Text style={styles.thtext}onPress={()=>setvalue( value=>value+"+")}>+</Text></TouchableHighlight>
     <TouchableHighlight style={styles.thstyle2}><View style={{height:60,width:60,borderRadius:30,alignItems:"center",justifyContent:"center",backgroundColor:"white",marginTop:10}}><Text style={styles.thtext}>=</Text></View></TouchableHighlight>
       </View>
     </View>
     
     </View>
    
     
    </View>
  );
};

const styles = StyleSheet.create({
 
  modalView: { height:320, width:305,marginLeft:45,
    marginTop:210,
    backgroundColor:"white",
    opacity: .7,
    borderRadius: 40,
    //padding: 35,  // adjust size of popup
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
     height: 2,
   },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5, alignItems:"center",justifyContent:"center"
  },
 
  modalText: {
    marginBottom: 0,
    textAlign: 'center',fontSize:40,color:"white"
  },
  thstyle:{
    alignItems:"center", justifyContent:"center",height:75,width:60,backgroundColor:""
  },
  thtext:{
    color:"#737373",fontSize:30
  },
  thstyle2:{
    alignItems:"center",justifyContent:"center",height:55,width:60,marginTop:20
  },
});

export default Calculator;