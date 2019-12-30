import React, { useEffect, useState } from 'react';

import api from '~/services/api';
import { Background, IconButton } from '~/components';

import { Container, List, Provider, Avatar, Name } from './styles';

export default function SelectProvider({ navigation }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    async function loadProviders() {
      const { data } = await api.get(`providers`);

      setProviders(data);
    }

    loadProviders();
  }, []);

  return (
    <Background>
      <Container>
        <List
          data={providers}
          keyExtractor={provider => String(provider.id)}
          renderItem={({ item: provider }) => (
            <Provider
              onPress={() =>
                navigation.navigate('SelectDateTime', { provider })
              }
            >
              <Avatar
                source={{
                  uri: provider.avatar
                    ? provider.avatar.url
                    : `https://api.adorable.io/avatars/50/${provider.name}.png`,
                }}
              />
              <Name>{provider.name}</Name>
            </Provider>
          )}
        />
      </Container>
    </Background>
  );
}

SelectProvider.navigationOptions = ({ navigation }) => ({
  title: 'Selecione o prestador',
  headerLeft: () => (
    <IconButton
      icon="chevron-left"
      onPress={() => navigation.navigate('Dashboard')}
    />
  ),
});
