// @flow
import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';

type Props = {};

export default class Dashboard extends Component<Props> {
  props: Props;

  render() {
    return <Sidebar />;
  }
}
