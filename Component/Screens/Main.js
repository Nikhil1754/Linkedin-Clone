import { View, TouchableOpacity,StyleSheet, Image } from 'react-native'
import {React,useState} from 'react'
import Home from './Home';
import Network from './Network';
import Add from './Add';
import Notifi from './Notifi';
import Jobs from './Jobs';

const Main = ({navigation}) => {
    const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.container}>
        {selectedTab==0?(<Home/>):selectedTab==1?(<Network/>):selectedTab==3?(<Notifi/>):(<Jobs/>)}
        <View style={styles.bottomView}>
            <TouchableOpacity onPress={()=>{
                setSelectedTab(0)
            }} style={[styles.bottomTab,{borderTopWidth:selectedTab==0?2:0}]}><Image style={[styles.bottomTabImage,{tintColor:selectedTab==0?'black':'#8e8e8e'}]} source={require("../images/home.png")}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                setSelectedTab(1)
            }} style={[styles.bottomTab,{borderTopWidth:selectedTab==1?2:0}]}><Image style={[styles.bottomTabImageN,{tintColor:selectedTab==1?'black':'#8e8e8e'}]} source={require("../images/network.png")}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                navigation.navigate("Add");
            }} style={[styles.bottomTab,{borderTopWidth:selectedTab==2?2:0}]}><Image style={[styles.bottomTabImage,{tintColor:selectedTab==2?'black':'#8e8e8e'}]} source={require("../images/addition.png")}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                setSelectedTab(3)
            }} style={[styles.bottomTab,{borderTopWidth:selectedTab==3?2:0}]}><Image style={[styles.bottomTabImage,{tintColor:selectedTab==3?'black':'#8e8e8e'}]} source={require("../images/bell.png")}/></TouchableOpacity>
            <TouchableOpacity onPress={()=>{
                setSelectedTab(4)
            }} style={[styles.bottomTab,{borderTopWidth:selectedTab==4?2:0}]}><Image style={[styles.bottomTabImage,{tintColor:selectedTab==4?'black':'#8e8e8e'}]} source={require("../images/briefcase.png")}/></TouchableOpacity>
        </View>
    </View>
  )
}

export default Main;
const styles=StyleSheet.create({
    container: {
        flex: 1,
    },
    bottomView: {
        backgroundColor: '#fff',
        height: 70,
        width:'100%',
        position:'absolute',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        elevation: 5,
        bottom: 0,
        shadowColor: "#000",
        shadowRadius: 5,
        shadowOffset: {
            x: 1, y: 1,
        }
    },
    bottomTab: {
        width: "15%",
        height: '100%',
        justifyContent: "center",
        alignItems: 'center',
    },
    bottomTabImage: {
        width:28,
        height:28,
    },
    bottomTabImageN: {
        width:48,
        height:48,
    }

})