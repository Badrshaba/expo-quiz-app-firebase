import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import {useNavigation} from '@react-navigation/native'

const QuizApp = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container} >
      <View style={styles.categoryContainer} >
 <TouchableOpacity style={styles.category} onPress={()=>navigation.navigate('PlayGround',{category:'Science'})} >

      <Text style={styles.categoryTitle} >Science</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.category} onPress={()=>navigation.navigate('PlayGround',{category:'Geography'})} >

      <Text style={styles.categoryTitle} >Geography</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.category} onPress={()=>navigation.navigate('PlayGround',{category:'Literature'})} >

      <Text style={styles.categoryTitle} >Literature</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.category} onPress={()=>navigation.navigate('PlayGround',{category:'History'})} >

      <Text style={styles.categoryTitle} >History</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.category} onPress={()=>navigation.navigate('PlayGround',{category:'Music'})} >

      <Text style={styles.categoryTitle} >Music</Text>
 </TouchableOpacity>
 <TouchableOpacity style={styles.category} onPress={()=>navigation.navigate('PlayGround',{category:'Art'})} >

      <Text style={styles.categoryTitle} >Art</Text>
 </TouchableOpacity>
      </View>
    </View>
  ) 
}

export default QuizApp

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryContainer:{
    flexDirection:'row',
    flexWrap:'wrap',
    justifyContent:'center',
    alignItems:'center',
    marginTop:50
  },
  category:{
    width:150,
    height:150,
    margin:10,
    borderRadius:10,
    backgroundColor:'#FFFFFF',
    shadowColor:'#000000',
    shadowOpacity:0.3,
    shadowRadius:5,
    elevation:5,
    justifyContent:'center',
    alignItems:'center'
  },
  categoryTitle:{
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center',
    color:'#000000'
  }
})