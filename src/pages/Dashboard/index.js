import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '~/services/api';

import { Background, Appointment } from '~/components';
import { Container, Title, List } from './styles';

export default function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    async function loadAppointments() {
      const { data } = await api.get(`appointments`);

      setAppointments(data);
    }

    loadAppointments();
  }, []);

  async function handleCancel(id) {
    try {
      const { data } = await api.delete(`appointments/${id}`);

      setAppointments(
        appointments.map(appointment =>
          appointment.id === id
            ? { ...appointment, canceled_at: data.canceled_at }
            : appointment
        )
      );
    } catch (err) {
      if (err.response) {
        Alert.alert('Erro', err.response.data.error);
      } else {
        Alert.alert('Erro', 'Houve um erro ao cancelar.');
      }
    }
  }

  return (
    <Background>
      <Container>
        <Title>Agendamentos</Title>

        <List
          data={appointments}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Appointment data={item} onCancel={() => handleCancel(item.id)} />
          )}
        />
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Agendamentos',
  tabBarIcon: ({ tintColor }) => (
    <Icon name="event" size={20} color={tintColor} />
  ),
};
