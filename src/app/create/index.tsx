import React from 'react';
import { View, Text } from 'react-native';

import { styles } from '../../styles/deafult';
import { Button } from '../../components/common/button';


function CreateHabitScreen() {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Button icon='arrow-back' label='Voltar' bgColor='#ff00' textColor='#000' fontSize={20} route='../(tabs)/'/>
      </View>

    </View>
  );
}

export default CreateHabitScreen;