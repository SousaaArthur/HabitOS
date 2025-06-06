import { View, Text, SafeAreaView } from "react-native";
import { styles } from "../../styles/home";
import { Ionicons, FontAwesome } from "@expo/vector-icons";

// Components
import { ProgressCard } from "../../components/homeComponents/cards/progress";
import { CardStreaks } from "../../components/homeComponents/cards/streaks";
import { ListOfHabits } from "../../components/homeComponents/listOfHabits";
import { Button } from "../../components/common/button";  


export default function Index(){
  return(
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <View>
          <Text style={{fontSize:24, fontWeight:"bold"}}>HabitOS</Text>
          <Text>Olá, Arthur!</Text>
        </View>
        <View style={{flexDirection:"row", gap:12, alignItems:"center"}}>
          <View style={styles.contentLevel}>
            <FontAwesome name="star" size={12} color="#27ae60"/>
            <Text>Nível 1</Text>
          </View>
            <Button
              route='/config'
              icon='settings-outline'
              bgColor='transparent'
              textColor='#000'
            ></Button>
        </View>
      </View>
      <ProgressCard/>
      <CardStreaks/>
      <ListOfHabits/>
    </SafeAreaView>
  );
}