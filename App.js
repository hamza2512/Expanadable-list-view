import React ,{useState}from 'react';
import { LayoutAnimation,
      SafeAreaView,
      ScrollView,
      Text,
      TouchableOpacity,
      View } from 'react-native';
import styles from './source/styles';
import { CONTENT } from './source/data';
import { ExpandableComponent } from './source/ExpandableComponent';



export default function App() {

  const [multiSelect, setmultiSelect] = useState(false);
  const [listDataSource, setlistDataSource] = useState(CONTENT);
  
  const updateLayout = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const array = [...listDataSource];
    if(multiSelect){
      //If Multiple select is enabled
      array[index]['isExpanded'] = !array[index]['isExpanded'];
    }
    else {
      //If single select is enabled
      array.map((value,placeindex) =>
      placeindex === index
      ? (array[placeindex]['isExpanded'])= !array[placeindex]['isExpanded']
      : (array[placeindex]['isExpanded'])=false
      );
    }
     setlistDataSource(array)
  }
  
  
  return (
    
    <SafeAreaView style={{flex:1}}>
      <View style={styles.container}>
       <View style={styles.header}>
          <Text style={styles.titleText}>
           Expandable List View
          </Text>
           <TouchableOpacity
            onPress ={() => setmultiSelect(!multiSelect)}
             >
             <Text style={styles.headerButton}>
              {
                multiSelect 
                ? 'Enable Single \n Expand'
                : 'Enable Multiple \n Expand'
              }
             </Text>
           </TouchableOpacity>
        </View>
        <ScrollView>
         {
           listDataSource.map((item,key) =>(
             <ExpandableComponent
              key={item.category_name} 
               item ={item}
               onClickFunction ={()=>
               {
                 updateLayout(key)
               }}

             />
           ))
         }
        </ScrollView>
      </View>
     
    
           
    </SafeAreaView>
  );
}


