import React from 'react'
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native'
import * as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'

export default class TranscactionScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            hasCameraPermissions:null,
            scanned:false,
            scannedData:'',
            buttonState:'normal'
        }
    }

    getCameraPermissions = async() => {
     const {status} = await Permissions.askAsync(Permissions.CAMERA)
     this.setState({hasCameraPermissions:status=="granted",buttonState:'clicked',scanned:false})
     
    }

    handleBarCodeScanned = async ({type,data}) => {
        this.setState({scanned:true,scannedData:data,buttonState:'normal'})
    }

    render(){
        const hasCameraPermissions = this.state.hasCameraPermissions
        const scanned = this.state.scanned
        const buttonState = this.state.buttonState

    if (buttonState === "clicked"&&hasCameraPermissions){
        return(
            <BarCodeScanner
            onBarCodeScanned = {scanned?undefined:this.handleBarCodeScanned}
            style = {StyleSheet.absoluteFillObject}
            />
        )
    }

    else if (
        buttonState === "normal"
    ){
        return(
            <View style = {{justifyContent:'center',alignItems:'center',flex:1}}>
                <Text>
                    {hasCameraPermissions === true?
                    this.state.scannedData:
                    "request camera permissions"}
                </Text>
                <Text style = {styles.displayText}>
                    Issue or Return
                </Text>
                <TouchableOpacity style = {styles.scanButton}
                onPress = {this.getCameraPermissions}>
                    <Text style = {styles.buttonText}>
                     Scan Qr Code
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
    }
}

const styles = StyleSheet.create({

container:
{
flex:1,
justifyContent:'center',
alignItems:'center'
},

scanButton:
{
    backgroundColor:'blue',
    padding:10,
    margin:10
},
displayText:
{
fontSize:20
},
buttonText:
{
fontSize:30
}
})