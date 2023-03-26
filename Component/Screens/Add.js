import { View, Text, StyleSheet, TouchableOpacity,Alert, Image, TextInput, KeyboardAvoidingView, FlatList } from 'react-native'
import { React, useRef,useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import RBSheet from "react-native-raw-bottom-sheet";


const Add = () => {
    const data = [
        {
            name: "Add Photo",
            icon: require("../images/gallery.png")
        },
        {
            name: "Take a Video",
            icon: require("../images/video-camera.png")
        },
        {
            name: "Use a Template",
            icon: require("../images/template2.png")
        },
        {
            name: "Celebrate an Occasion",
            icon: require("../images/occasion.png")
        },
        {
            name: "Add a Document",
            icon: require("../images/doc.png")
        },
        {
            name: "Share that you're hiring",
            icon: require("../images/briefcase.png")
        },
        {
            name: "Find an expert",
            icon: require("../images/cmaera.png")
        },
        {
            name: "Create a Poll",
            icon: require("../images/poll.png")
        },
        {
            name: "Create an event",
            icon: require("../images/event2.png")
        },
    ]
    const [imageData, setimageData] = useState(null);
    const openGallery=async ()=>{
        
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
          });
      
          console.log(result);
      
          if (!result.canceled) {
            setimageData(result.assets[0].uri);
          }
            
    }
    const toggleCameraType=()=>{

    }
    const refRBSheet = useRef();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <Image style={styles.icon} source={require("../images/close.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.clock}>
                    <Image style={styles.icon} source={require("../images/clock.png")} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.txt}>Post</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.profileDetail}>
                <Image style={styles.profile} source={require("../images/user.png")} />
                <TouchableOpacity style={styles.btni}>
                    <Image style={{ width: 16, height: 16, tintColor: '#8e8e8e' }} source={require("../images/globe.png")} />
                    <Text style={{ fontSize: 12, color: '#8e8e8e' }}>Anyone</Text>
                    <Image style={{ width: 16, height: 16, tintColor: '#8e8e8e' }} source={require("../images/down.png")} />
                </TouchableOpacity>
            </View>
            <View style={styles.captionView}>
                <TextInput placeholder='What do you want to talk about?' />
            </View>
            <View style={{width:"100%",alignItems:'center'}}>
            {imageData && <Image source={{ uri: imageData }} style={{ width: '80%', height: 200 }} />}
            </View>
            <KeyboardAvoidingView style={{ position: 'absolute', bottom: 0 }}>
                <View style={styles.bottomView}>
                    <View style={styles.leftView}>
                        <TouchableOpacity style={{ marginLeft: 15 }}>
                            <Image style={styles.optioIcon} source={require("../images/cmaera.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginLeft: 25 }}>
                            <Image style={styles.optioIcon} source={require("../images/video-camera.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            openGallery();
                        }} style={{ marginLeft: 25 }}>
                            <Image style={styles.optioIcon} source={require("../images/gallery.png")} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => {
                            refRBSheet.current.open();
                        }} style={{ marginLeft: 25 }}>
                            <Image style={styles.optioIcon} source={require("../images/option.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.rightView}>
                        <TouchableOpacity style={{ flexDirection: "row", marginRight: 15 }}>
                            <Image style={[styles.optioIcon]} source={require("../images/messenger.png")} />
                            <Text style={[styles.txtl]}>Anyone</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
            <RBSheet
                ref={refRBSheet}
                height={500}
                openDuration={250}
                customStyles={{
                    container: {
                        justifyContent: "center",
                        alignItems: "center",
                        borderTopWidth:0.5,
                        borderTopColor:'black',

                    }
                }}
            >
                <View style={styles.bottomSheet}>
                    <FlatList data={data} renderItem={({ item }) => {
                        return <TouchableOpacity style={styles.bottomFlat}>
                            <Image style={styles.optioIcon} source={item.icon} />
                            <Text style={{color:'black',marginLeft:10}}>{item.name}</Text>
                        </TouchableOpacity>
                    }} />
                </View>
            </RBSheet>
        </View>
    )
}

export default Add;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
    },
    header: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#C0C0C0',
    },
    icon: {
        width: 24,
        height: 24,
    },
    btn: {
        backgroundColor: '#B1B1B1',
        borderRadius: 20,
        paddingLeft: 15,
        paddingRight: 15,

    },
    clock: {
        marginLeft: 180,
    },
    txt: {
        padding: 10,
        color: 'black',
    },
    //header end
    profileDetail: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    profile: {
        width: 40,
        height: 40,
        borderRadius: 20,

    },
    btni: {
        marginLeft: 10,
        flexDirection: 'row',
        borderColor: '#B1B1B1',
        borderRadius: 40,
        borderWidth: 0.5,
        paddingTop: 10,
        paddingHorizontal: 10,

    },
    captionView: {
        padding: 20,
        width: '100%',
        height: 200,
    },
    //profile end

    bottomView: {
        width: '100%',
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftView: {
        width: '50%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightView: {
        width: '50%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: 10
    },
    optioIcon: {
        width: 24,
        height: 24,
        tintColor: '#8e8e8e'
    },
    txtl: {
        color: '#8e8e8e',
    },
    bottomSheet: {
        width: '100%',
    },
    bottomFlat: {
        paddingLeft:20,
        flexDirection: 'row',
        width: '100%',
        height: 50,
        alignItems: 'center',
    }


})
