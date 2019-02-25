import React from 'react';
import { css } from '@emotion/core';
import { BeatLoader } from 'react-spinners';

 
const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;
 
class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
  }
  render() {
    return (
      <div className='sweet-loading'>
        <BeatLoader
          css={override}
          sizeUnit={"px"}
          size={12}
          color={'#123abc'}
          loading={this.state.loading}
        />
      </div> 
    )
  }
}

export default Loading;