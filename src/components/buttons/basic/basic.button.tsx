/**
 * @format
 */

import React, { FC } from 'react';
import { Button } from 'react-native';

const BasicButton: FC<Props> = ({ onPress, title, accessibilityLabel, color }) => (
  <Button onPress={onPress} title={title} color={color} accessibilityLabel={accessibilityLabel} />
);
type Props = {
  onPress: () => void;
  title: string;
  color: string;
  accessibilityLabel?: string;
};

export default BasicButton;
