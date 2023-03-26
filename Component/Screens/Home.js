import { View, Text,StyleSheet, Image, TouchableOpacity, TextInput} from 'react-native'
import React from 'react'

const Home = () => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <TouchableOpacity>
                <Image style={styles.img} source={require("../images/user.png")}/>
            </TouchableOpacity>
            <View style={styles.serachBox}>
            <TouchableOpacity>
                <Image style={styles.search} resizeMode={'contain'} source={require("../images/search.png")}/>
            </TouchableOpacity>
            <TextInput style={styles.textInput} placeholder='Search'/>
            </View>
            <TouchableOpacity><Image  style={styles.chat} source={require("../images/chat.png")}/></TouchableOpacity>

        </View>
        <View style={styles.editBox}>
            <Image style={styles.search} source={require("../images/edit.png")}/>
            <Text style={{marginLeft:20,fontSize:15,color:"#8e8e8e"}}>Start a Post</Text>
        </View>
        <View style={styles.postType}>
            <TouchableOpacity style={styles.postTab}>
                <Image style={styles.addPhoto} source={require("../images/photo.png")}/>
                <Text style={{marginLeft:10,color:"#8e8e8e"}}>Photo/Video</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.postTab}>
                <Image style={styles.addPhoto} source={require("../images/template.png")}/>
                <Text style={{marginLeft:10,color:"#8e8e8e"}}>Template</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.postTab}>
                <Image style={styles.addPhoto} source={require("../images/event.png")}/>
                <Text style={{marginLeft:10,color:"#8e8e8e"}}>Event</Text>
            </TouchableOpacity>
        </View>

     
    </View>
  )
}

export default Home;
const styles=StyleSheet.create({
    container:{
        flex:1,
        marginTop:30,
    },
    header:{
        height:50,
        width:'100%',
        elevation:5,
        backgroundColor:'#fff',
        shadowColor: "#000",
        shadowRadius: 5,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingRight:20,
        shadowOffset: {
            x: 1, y: 1,
        }
    },
    img:{
        width:40,
        height:40,
        borderRadius:3,
    },
    serachBox:{
        width:"70%",
        height:"70%",
        backgroundColor:'#EBEBEB',
        borderRadius:7,
        flexDirection:'row',
        alignItems:'center',

    },
    search:{
        width:24,
        height:24,
        marginLeft:6,
        tintColor:'#666666'
    },
    textInput:{
        paddingLeft:10,
        fontSize:16

    },
    chat:{
        width:24,
        height:24,
        
    },
    editBox:{
        width:"100%",
        height:50,
        flexDirection:'row',
        borderBottomWidth:0.5,
        borderTopColor:'#D8D8D8',
        borderBottomColor:'#D8D8D8',
        backgroundColor:'#FFFFFF',
        alignItems:'center',
        paddingLeft:20,

    },
    postType:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-evenly',
        width:'100%',
        height:50,
        borderBottomWidth:0.5,
        borderTopColor:'#D8D8D8',
        borderBottomColor:'#D8D8D8',
        backgroundColor:'#FFFFFF',

    },
    postTab:{
        height:40,
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row'
     },
     addPhoto:{
        width:24,
        height:24,
     }

    

})