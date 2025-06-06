import React from 'react'
import { View, Text, SafeAreaView } from 'react-native';

import { styles } from '../../../styles/default';
import { Button } from '../../../components/common/button';

function Organize() {
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.header}>
        <Button icon='arrow-back' label='' bgColor='#ff00' textColor='#000' fontSize={20} gap={0} route='../(tabs)/'/>
        <Text style={{ fontSize: 24, fontWeight: 'bold'}}>Organizar Hábitos</Text> 
      </View>
    </SafeAreaView>
  );
}

export default Organize;