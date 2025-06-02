import React from 'react'
import { View, Text } from 'react-native';

import { styles } from '../../../styles/config'; // Assuming you have a styles file for config
import { Button } from '../../../components/common/button';

function Config() {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Button icon='arrow-back' label='' bgColor='#ff00' textColor='#000' fontSize={20} gap={0} route='../(tabs)/'/>
        <Text style={{ fontSize: 24, fontWeight: 'bold', paddingLeft: 30 }}>Configurações</Text> 
      </View>
    </View>
  );
}

export default Config;