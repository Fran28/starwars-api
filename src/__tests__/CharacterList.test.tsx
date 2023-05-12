// eslint-disable-next-line jest/no-mocks-import
import { axiosMock, characterListMock } from '../__mocks__';
import { CharacterList } from '../pages/characterList';
import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react/pure';

describe('CharacterList', () => {
  const mockedAxios = axiosMock;
  mockedAxios.get.mockResolvedValue(characterListMock);
  afterEach(jest.clearAllMocks);
  afterEach(cleanup);

  it('has to render characters', async () => {
    render(
        <CharacterList />
    );

    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalled();
    });
  });
});
