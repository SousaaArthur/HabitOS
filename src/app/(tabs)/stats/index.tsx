import React from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native';

import { defaultStyles } from '../../../styles/default';
import { Button } from '../../../components/common/button';
import CardCreate from '../../../components/common/card';
import { CardStatus } from '../../../components/common/cardStats';
import SwitchStats from '../../../components/statsComponents/switchStats';
import { StyleSheet } from 'react-native';


function Stats(){
  return (
    <SafeAreaView style={defaultStyles.main}>
      <View style={defaultStyles.header}>
        <Button icon='arrow-back' label='' bgColor='#ff00' textColor='#000' fontSize={20} gap={0} route='../(tabs)/'/>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Estatísticas</Text> 
      </View>

      <ScrollView>
        <SwitchStats></SwitchStats>
        <CardCreate flexDirection='row' alignItems='center' justifyContent='space-around' gap={0} padding={12}>
          <CardStatus cardText='Taxa de conclusão' cardNumber={5} iconName='checkmark-circle' iconColor='#4CAF50'/>
          <CardStatus cardText='Maior Streak' cardNumber={10} iconName='flame' iconColor='#FF5722'/>
        </CardCreate>
        <CardCreate title='Progresso do Nível' padding={0}>
          <View style={{gap: 12, padding: 12}}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5}}>
              <Text style={styles.mainText}>Nível 1</Text>
              <Text style={styles.mainText}>0/100 XP</Text>
            </View>
            <Text style={styles.subTitle}>100 XP para o próximo nível</Text>
          </View>
        </CardCreate>
        <CardCreate>
          
        </CardCreate>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  subTitle: {
    color: '#666'
  }
})

export default Stats;