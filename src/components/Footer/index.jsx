import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
  background: #fff;
  border-top: solid 2px #411582;
  padding-top: 10px;
`
const Text = styled.p`
    color: #333;
`

export function Footer() {   
    return(
        <Container className="row Footer">
            <div className="col-lg-12">
                <Text>Made by <a href="http://dorianmorones.com/">Dorian Morones</a></Text>
            </div>
        </Container>
    );
}