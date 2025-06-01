import React from 'react'
import { View, Text } from 'react-native';

import { styles } from '../../../styles/deafult'; // Assuming you have a styles file for config
import { Button } from '../../../components/common/button';

function Config() {
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Button label='teste'></Button>
      </View>
    </View>
  );
}

export default Config;