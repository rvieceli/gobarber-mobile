import React, { useMemo } from 'react';
import { TouchableOpacity } from 'react-native';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment({ onCancel, data }) {
  const { provider } = data;

  const dateFormatted = useMemo(
    () =>
      formatRelative(parseISO(data.date), new Date(), {
        addSuffix: true,
        locale: pt,
      }),
    [data.date]
  );

  return (
    <Container past={data.past}>
      <Left>
        <Avatar
          source={{
            uri: provider.avatar
              ? provider.avatar.url
              : `https://api.adorable.io/avatars/50/${provider.name}.png`,
          }}
        />

        <Info>
          <Name>{provider.name}</Name>
          <Time>{dateFormatted}</Time>
        </Info>
      </Left>
      {data.cancelable && !data.canceled_at && (
        <TouchableOpacity onPress={onCancel}>
          <Icon name="event-busy" size={20} color="#f64c75" />
        </TouchableOpacity>
      )}
    </Container>
  );
}

Appointment.propTypes = {
  onCancel: PropTypes.func.isRequired,
  data: PropTypes.shape({
    cancelable: PropTypes.bool,
    provider: PropTypes.object,
    past: PropTypes.bool,
    date: PropTypes.string,
    canceled_at: PropTypes.string,
  }).isRequired,
};
