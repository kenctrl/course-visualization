import { darkTheme } from 'reagraph';

export var courseTheme = {
  ...darkTheme,
  node: {
    label: {
      color: '#fff'
    },
    ...darkTheme.node,
    color: '#000'
  }
};