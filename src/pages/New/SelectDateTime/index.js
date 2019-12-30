import React, { useState } from 'react';

import { Background, IconButton, DateInput } from '~/components';
import { Container } from './styles';

export default function SelectDateTime() {
  const [date, setDate] = useState(new Date());

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />
      </Container>
    </Background>
  );
}

SelectDateTime.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o horário',
  headerLeft: () => (
    <IconButton icon="chevron-left" onPress={() => navigation.goBack()} />
  ),
});
