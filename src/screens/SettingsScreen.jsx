/* eslint-disable react/prop-types */
import { View, Text, StyleSheet, TouchableOpacity,Image} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import IntroScreen from './IntroScreen';

const SettingsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back-circle-outline" size={40} color="black" style={{marginTop: 8, marginRight: 10}}/>
                </TouchableOpacity>
                <Text style={{fontSize: 36,fontFamily: 'Kanit-SemiBold'}}>การตั้งค่า</Text>
            </View>
            <View style={styles.Rectangleshape1}>
                <View style={styles.detail}>
                        <Image style={styles.pic} source={require('../assets/img/Takumi.jpg')}/>
                        <View style={{flexDirection: 'column', marginLeft: 25, marginTop:6}}>
                            <Text style={{fontSize: 16,fontWeight: '300',color: '#ffffff',fontFamily: 'Kanit-SemiBold'}}>ชื่อ: Nitwaree Boonuea</Text>
                            <Text style={{fontSize: 16,fontWeight: '300',color: '#ffffff',fontFamily: 'Kanit-SemiBold'}}>อีเมล: Nitwaree1234@ku.th</Text>
                            <Text style={{fontSize: 16,fontWeight: '300',color: '#ffffff',fontFamily: 'Kanit-SemiBold'}}>เบอร์: 086XXXXXXX</Text>
                        </View>
                </View>
            </View>
            <Text style={{fontSize: 15,marginTop: 50,marginLeft:30,color:'#6C6A6A',fontFamily:'Kanit-Medium' }}>ทั่วไป</Text>
            <View style={styles.Rectangleshape2}>
                <View style={{flexDirection: 'row',marginLeft: 20}}>
                <MaterialIcons name="notifications-on" size={23} color="#767af3" style={{marginTop: 13}}/>
                    <Text style={{marginTop: 15,marginLeft: 15,fontFamily: 'Kanit-Regular'}}>ประกาศ & การเเจ้งเตือน</Text>
                    <Text style={{marginTop: 15,marginLeft: 78,fontFamily: 'Kanit-Regular'}}>ปิด</Text>
                    <Text style={{fontSize: 15,marginTop: 13,marginLeft:15,fontFamily: 'Kanit-Regular'}}></Text>
                </View>
                <View style={styles.line1}/>
                <View style={{flexDirection: 'row',marginLeft: 20}}>
                <MaterialIcons name="format-paint" size={23} color="#767af3" style={{marginTop: 18}}/>
                 <Text style={{marginTop: 20,marginLeft: 15,fontFamily: 'Kanit-Regular'}} >รูปลักษณ์</Text>   
                 <Text style={{marginTop: 20,marginLeft: 160,fontFamily: 'Kanit-Regular'}}>ปิด</Text>
                 <Text style={{fontSize: 15,marginTop: 15,marginLeft:15,fontFamily: 'Kanit-Regular'}}></Text>
                </View>
                <View style={styles.line2}/>
                <View style={{flexDirection: 'row',marginLeft: 20}}>
                <FontAwesome name="cogs" size={20} color="#767af3"style={{marginTop: 18}} />
                 <Text style={{marginTop: 20,marginLeft: 15,fontFamily: 'Kanit-Regular'}} >ขั้นสูง</Text>   
                 <Text style={{marginTop: 20,marginLeft: 185,fontFamily: 'Kanit-Regular'}}>ปิด</Text>
                 <Text style={{fontSize: 15,marginTop: 20,marginLeft:15,fontFamily: 'Kanit-Regular'}}></Text>   
                </View>  
                <View style={styles.line3}/>
            </View>
            <Text style={{fontSize: 15,marginTop: 10,marginLeft:30,color:'#6C6A6A',fontFamily:'Kanit-Medium' }}>สนับสนุน</Text>
            <View style={styles.Rectangleshape2}>
                <View style={{flexDirection: 'row',marginLeft: 20}}>
                <MaterialCommunityIcons name="chat-question" size={24} color="#767af3"style={{marginTop: 15}} />
                <Text style={{marginTop: 15,marginLeft: 15,fontFamily: 'Kanit-Regular'}}>ความช่วยเหลือ & คำติชม</Text>
                <Text style={{marginTop: 15,marginLeft: 72,fontFamily: 'Kanit-Regular'}}>ปิด</Text>
                <Text style={{fontSize: 15,marginTop: 14,marginLeft:15,fontFamily: 'Kanit-Regular'}}></Text>
                </View>
                <View style={styles.line1}/>
                <View style={{flexDirection: 'row',marginLeft: 20}}>
                <MaterialIcons name="privacy-tip" size={23} color="#767af3" style={{marginTop: 17}}/>
                <Text style={{marginTop: 20,marginLeft: 15,fontFamily: 'Kanit-Regular'}}>นโยบายความเป็นส่วนตัว  </Text>
                <Text style={{marginTop: 20,marginLeft: 70,fontFamily: 'Kanit-Regular'}}>ปิด</Text>
                <Text style={{fontSize: 15,marginTop: 20,marginLeft:15,fontFamily: 'Kanit-Regular'}}></Text>
                </View>
                <View style={styles.line2}/>
                <View style={{flexDirection: 'row',marginLeft: 20}}>
                <Ionicons name="document-text" size={23} color="#767af3" style={{marginTop: 17}}/>
                <Text style={{marginTop: 20,marginLeft: 15,fontFamily: 'Kanit-Regular'}}>เงื่อนไขการให้บริการ </Text>
                <Text style={{marginTop: 20,marginLeft: 94,fontFamily: 'Kanit-Regular'}}>ปิด</Text>
                <Text style={{fontSize: 15,marginTop: 20,marginLeft:15,fontFamily: 'Kanit-Regular'}}></Text>
                </View>
                <View style={styles.line3}/>
            </View>
            <View style={{alignItems: 'center',marginTop: 20}}>
              <TouchableOpacity onPress={() => navigation.replace("SignInScreen")}>
                <View style={styles.ButtonLogout}>
                    <Text style={{color: '#ffffff',fontFamily: 'Kanit-SemiBold',fontSize: 20}}>ออกจากระบบ</Text>
                </View>
              </TouchableOpacity>
                
            </View>
        </View>
        
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F8F8F8',
        flex: 1
        
    },
    header: {
        marginTop: 60,
        marginLeft: 15,
        flexDirection: 'row'
    },
    Rectangleshape1: {
        width: 340,
        height: 110,
        top: 30,
        backgroundColor: '#767af3',
        borderRadius: 20,
        alignSelf: 'center',
      },
      detail: {
        marginTop: 14,
        flexDirection: 'row',
        margin: 5,
      },
      pic: {
        width: 80,
        height: 80,
        borderRadius: 50,
        marginLeft: 20,
        borderWidth: 6,
        backgroundColor: '#ffffff',
        borderColor: 'white',
      },
      line1: {
        height: 1,
        width:280,
        alignSelf: 'flex-end',
        top:10,
        backgroundColor: '#dfdfdf',
      },
      line2: {
        height: 1,
        width:280,
        alignSelf: 'flex-end',
        top:10,
        backgroundColor: '#dfdfdf',
      },
      line3: {
        height: 1,
        width:280,
        alignSelf: 'flex-end',
        top:15,
        backgroundColor: '#dfdfdf',
      },
      Rectangleshape2: {
        width: 340,
        height: 145,
        top: 5,
        backgroundColor: '#ffffff',
        borderRadius: 20,
        alignSelf: 'center',
      },
      ButtonLogout: {
        width: 200,
        height: 65,
        borderRadius: 30,
        backgroundColor: '#DF0000',
        alignItems: 'center',
        justifyContent: 'center'
      }
  
});

export default SettingsScreen;