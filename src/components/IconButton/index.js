import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import PropTypes from 'prop-types';

export default function IconButton({ icon, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={icon} size={20} color="#fff" />
    </TouchableOpacity>
  );
}

IconButton.propTypes = {
  icon: PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

IconButton.defaultProps = {
  icon: 'chevron-left',
};
