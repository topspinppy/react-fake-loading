import React, { Component } from 'react';
import styled from 'styled-components'
import { Spin } from 'antd'


class FakeLoading extends Component {
  state = {
    isLoading: true,
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ isLoading: false })
    }, this.props.time)
  }
  render() {
    const { children } = this.props
    return (
      <Fragment>
        {
          this.state.isLoading === true ? (
            <LandingPage>
              <Spin tip="Loading ..." size="large" />
            </LandingPage>
          ) : (
            children
          )
        }
      </Fragment>
    );
  }
}

export default FakeLoading;
