import produce from 'immer';

type Company = {
  readonly name: string;
  readonly city: string;
};

const companyV1: Company = { name: `Kevala Design LLC`, city: `Tempe` };

const companyV2 = produce(companyV1, (draft) => {
  draft.city = `Phoenix`;
});

describe(`Immer`, () => {
  test(`Immer is enabled`, () => {
    expect(companyV1.city).toBe(`Tempe`);
    expect(companyV2.city).toBe(`Phoenix`);
  });
});
