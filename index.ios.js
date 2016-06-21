'use strict';

import { AppRegistry, StatusBarIOS } from 'react-native'
import setup from './src/setup'

StatusBarIOS.setStyle('light-content');
AppRegistry.registerComponent('minio', setup);
