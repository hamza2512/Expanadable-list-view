import React ,{useState, useEffect}from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import styles from './styles';


export const  ExpandableComponent =({item,onClickFunction})=>{
    const [layoutHeight, setlayoutHeight] = useState(0)
  
    useEffect (()=>{
      if(item.isExpanded){
        setlayoutHeight(null);
      }
      else {
        setlayoutHeight(0);
      } 
    }
    ,[item.isExpanded])
  
    return(
      <View>
        <TouchableOpacity style={styles.items}
        onPress ={onClickFunction}>
        <Text style={styles.itemTest}>
          {item.category_name}
        </Text>
        </TouchableOpacity>
        <View
        style={{
        height : layoutHeight,
         overflow:'hidden'
         }}
        >
        {
          
          item.subcategory.map((item , key) =>(
            <TouchableOpacity
             key={key}
             style={styles.content}>
  
              <Text style={styles.text}>
                {key}.{item.val}
              </Text>
            
              <View  style={styles.separator}/>
            </TouchableOpacity>
  
          ))
        }
  
        </View>
      </View>
    )
  }
  