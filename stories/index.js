// @flow

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import createScrollStore from '../src';

const RestoreScrollOnMount = createScrollStore();

storiesOf('Component')
  .add('default', () => <div><RestoreScrollOnMount /></div>);
