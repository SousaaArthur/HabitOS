import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import { styles } from '../../../styles/default';
import { Button } from '../../../components/common/button';
import CardCreate from '../../../components/common/card';
import { CardStatus } from '../../../components/statsComponent/cardStats';


function Stats(){
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <Button icon='arrow-back' label='' bgColor='#ff00' textColor='#000' fontSize={20} gap={0} route='../(tabs)/'/>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Estatísticas</Text> 
      </View>

      <ScrollView>
        <CardCreate flexDirection='row' alignItems='center' justifyContent='space-around' gap={0} padding={12}>
          <CardStatus cardText='Taxa de conclusão' cardNumber={5} iconName='checkmark-circle' iconColor='#4CAF50'/>
          <CardStatus cardText='Maior Streak' cardNumber={10} iconName='flame' iconColor='#FF5722'/>
        </CardCreate>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Stats;