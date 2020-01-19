import React from 'react';
import { shallow } from 'enzyme';
import ProviderMock from '../../__mocks__/ProviderMock';
import RepoMock from '../../__mocks__/RepoMock';
import Results from '../../components/Results';

describe('<Results/>', () => {
  test('Render del componente Results', () => {
    const results = shallow(
      <ProviderMock>
        <Results />
      </ProviderMock>,
    );
    expect(results.length).toEqual(1);
  });
});