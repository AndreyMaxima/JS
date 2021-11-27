import { RecoilValueReadOnly, selector, selectorFamily } from 'recoil';
import { getFishText } from '../api/fishText';

export const getRandomTextSelector: RecoilValueReadOnly<string> = selector({
  key: 'RANDOM_TEXT/getRandomTextSelector',
  get: () => getFishText().then((resp) => resp.text),
});

export const echoApiMock: (echoText: string) => RecoilValueReadOnly<string> = selectorFamily({
  key: 'RANDOM_TEXT/echoApiMock',
  get: (echoText: string) =>
    // eslint-disable-next-line @typescript-eslint/no-unused-vars, implicit-arrow-linebreak
    ({ get }) => new Promise(
      (res) => {
        setTimeout(() => res(`${echoText}`),
          2000);
      },
    ),
});
