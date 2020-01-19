import React from 'react';
import { mount, shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header/index.js';


describe('<Header />', () => {
    test('Render del componente Header', () => {
      const header = shallow(
        <ProviderMock>
          <Header />
        </ProviderMock>,
      );
      expect(header.length).toEqual(1);
    });
  });
  