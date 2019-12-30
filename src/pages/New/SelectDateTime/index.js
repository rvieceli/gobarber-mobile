import React, { useState, useEffect } from 'react';

import api from '~/services/api';
import { Background, IconButton, DateInput } from '~/components';

import { Container, List, Hour, Title } from './styles';

export default function SelectDateTime({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [hours, setHours] = useState([]);

  const provider = navigation.getParam('provider');

  useEffect(() => {
    async function loadAvailableHours() {
      const { data } = await api.get(`providers/${provider.id}/available`, {
        params: {
          date: date.getTime(),
        },
      });

      setHours(data);
    }

    loadAvailableHours();
  }, [date, provider.id]);

  function handleSelectHour(time) {
    navigation.navigate('Confirm', {
      provider,
      time,
    });
  }

  return (
    <Background>
      <Container>
        <DateInput date={date} onChange={setDate} />

        <List
          data={hours}
          keyExtractor={hour => hour.time}
          renderItem={({ item: hour }) => (
            <Hour
              enabled={hour.available}
              onPress={() => handleSelectHour(hour.value)}
            >
              <Title>{hour.time}</Title>
            </Hour>
          )}
        />
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
