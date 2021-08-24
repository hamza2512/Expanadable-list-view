import {StyleSheet} from 'react-native';


styles = StyleSheet.create({
    container: {
      flex: 1,
      top:30,
     // backgroundColor: '#fff',
    //  alignItems: 'center',
     // justifyContent: 'center',
    },
    header :{
      flexDirection:'row',
      padding: 10,
      
  
    },
    titleText :{
      flex:1,
      fontSize:24,
      fontWeight:"bold"
    },
    headerButton :{
      alignItems:'center',
      justifyContent :'center',
      fontSize:18,
    },
    items :{
      backgroundColor:'orange',
      padding:20
    },
    itemTest :{
       fontSize:16,
       fontWeight:'600',
    },
    content :{
        paddingLeft:10,
        paddingRight:10,
        backgroundColor :'#fff'
  
    },
    text :{
      fontSize:16,
      padding:10,
    },
    separator :{
      height :0.5,
      backgroundColor: '#c8c8c8',
      width:'100%',
    },
  
  });
  export default styles;