import { Product } from "../../models/products";
import reducer, { getProductsSuccess } from "./products.reducer";

const mockProducts1: Product[] = [
  {
    bestRate: 2.04,
    created: "2021-06-07T13:34:14Z",
    family: "VALUE_FLEX",
    fixedPenaltySpread: "SMALL_PENALTY",
    helocDelta: 0,
    helocOption: "HELOC_WITHOUT",
    id: 12347,
    insurable: true,
    insurance: "CONVENTIONAL",
    lenderName: "nesto",
    lenderType: "MONOLINE",
    name: "MCAP Value-Flex Fixed Special",
    prepaymentOption: "STANDARD",
    rate: 2.24,
    rateHold: "90_DAYS",
    ratePrimeVariance: 0,
    restrictions: "MCAP_VALUE_FLEX_RESTRICTIONS",
    restrictionsOption: "SOME_RESTRICTIONS",
    term: "5_YEAR",
    type: "FIXED",
    updated: "2021-06-07T13:47:33Z",
  },
  {
    bestRate: 1.04,
    created: "2021-06-07T13:34:14Z",
    family: "VALUE_FLEX",
    fixedPenaltySpread: "SMALL_PENALTY",
    helocDelta: 0,
    helocOption: "HELOC_WITHOUT",
    id: 12347,
    insurable: true,
    insurance: "CONVENTIONAL",
    lenderName: "nesto",
    lenderType: "MONOLINE",
    name: "MCAP Value-Flex Fixed Special",
    prepaymentOption: "STANDARD",
    rate: 2.24,
    rateHold: "90_DAYS",
    ratePrimeVariance: 0,
    restrictions: "MCAP_VALUE_FLEX_RESTRICTIONS",
    restrictionsOption: "SOME_RESTRICTIONS",
    term: "5_YEAR",
    type: "FIXED",
    updated: "2021-06-07T13:47:33Z",
  },
  {
    bestRate: 5.04,
    created: "2021-06-07T13:34:14Z",
    family: "VALUE_FLEX",
    fixedPenaltySpread: "SMALL_PENALTY",
    helocDelta: 0,
    helocOption: "HELOC_WITHOUT",
    id: 12347,
    insurable: true,
    insurance: "CONVENTIONAL",
    lenderName: "nesto",
    lenderType: "MONOLINE",
    name: "MCAP Value-Flex Fixed Special",
    prepaymentOption: "STANDARD",
    rate: 2.24,
    rateHold: "90_DAYS",
    ratePrimeVariance: 0,
    restrictions: "MCAP_VALUE_FLEX_RESTRICTIONS",
    restrictionsOption: "SOME_RESTRICTIONS",
    term: "5_YEAR",
    type: "VARIABLE",
    updated: "2021-06-07T13:47:33Z",
  },
] as Product[];

const mockProducts2: Product[] = [
  {
    bestRate: 2.04,
    created: "2021-06-07T13:34:14Z",
    family: "VALUE_FLEX",
    fixedPenaltySpread: "SMALL_PENALTY",
    helocDelta: 0,
    helocOption: "HELOC_WITHOUT",
    id: 12347,
    insurable: true,
    insurance: "CONVENTIONAL",
    lenderName: "nesto",
    lenderType: "MONOLINE",
    name: "MCAP Value-Flex Fixed Special",
    prepaymentOption: "STANDARD",
    rate: 2.24,
    rateHold: "90_DAYS",
    ratePrimeVariance: 0,
    restrictions: "MCAP_VALUE_FLEX_RESTRICTIONS",
    restrictionsOption: "SOME_RESTRICTIONS",
    term: "5_YEAR",
    type: "FIXED",
    updated: "2021-06-07T13:47:33Z",
  },
  {
    bestRate: 1.04,
    created: "2021-06-07T13:34:14Z",
    family: "VALUE_FLEX",
    fixedPenaltySpread: "SMALL_PENALTY",
    helocDelta: 0,
    helocOption: "HELOC_WITHOUT",
    id: 12347,
    insurable: true,
    insurance: "CONVENTIONAL",
    lenderName: "nesto",
    lenderType: "MONOLINE",
    name: "MCAP Value-Flex Fixed Special",
    prepaymentOption: "STANDARD",
    rate: 2.24,
    rateHold: "90_DAYS",
    ratePrimeVariance: 0,
    restrictions: "MCAP_VALUE_FLEX_RESTRICTIONS",
    restrictionsOption: "SOME_RESTRICTIONS",
    term: "5_YEAR",
    type: "FIXED",
    updated: "2021-06-07T13:47:33Z",
  },
] as Product[];

const payload1 = [
  {
    bestRate: 1.04,
    created: "2021-06-07T13:34:14Z",
    family: "VALUE_FLEX",
    fixedPenaltySpread: "SMALL_PENALTY",
    helocDelta: 0,
    helocOption: "HELOC_WITHOUT",
    id: 12347,
    insurable: true,
    insurance: "CONVENTIONAL",
    lenderName: "nesto",
    lenderType: "MONOLINE",
    name: "MCAP Value-Flex Fixed Special",
    prepaymentOption: "STANDARD",
    rate: 2.24,
    rateHold: "90_DAYS",
    ratePrimeVariance: 0,
    restrictions: "MCAP_VALUE_FLEX_RESTRICTIONS",
    restrictionsOption: "SOME_RESTRICTIONS",
    term: "5_YEAR",
    type: "FIXED",
    updated: "2021-06-07T13:47:33Z",
  },
  {
    bestRate: 5.04,
    created: "2021-06-07T13:34:14Z",
    family: "VALUE_FLEX",
    fixedPenaltySpread: "SMALL_PENALTY",
    helocDelta: 0,
    helocOption: "HELOC_WITHOUT",
    id: 12347,
    insurable: true,
    insurance: "CONVENTIONAL",
    lenderName: "nesto",
    lenderType: "MONOLINE",
    name: "MCAP Value-Flex Fixed Special",
    prepaymentOption: "STANDARD",
    rate: 2.24,
    rateHold: "90_DAYS",
    ratePrimeVariance: 0,
    restrictions: "MCAP_VALUE_FLEX_RESTRICTIONS",
    restrictionsOption: "SOME_RESTRICTIONS",
    term: "5_YEAR",
    type: "VARIABLE",
    updated: "2021-06-07T13:47:33Z",
  },
];

const payload2 = [
  {
    bestRate: 1.04,
    created: "2021-06-07T13:34:14Z",
    family: "VALUE_FLEX",
    fixedPenaltySpread: "SMALL_PENALTY",
    helocDelta: 0,
    helocOption: "HELOC_WITHOUT",
    id: 12347,
    insurable: true,
    insurance: "CONVENTIONAL",
    lenderName: "nesto",
    lenderType: "MONOLINE",
    name: "MCAP Value-Flex Fixed Special",
    prepaymentOption: "STANDARD",
    rate: 2.24,
    rateHold: "90_DAYS",
    ratePrimeVariance: 0,
    restrictions: "MCAP_VALUE_FLEX_RESTRICTIONS",
    restrictionsOption: "SOME_RESTRICTIONS",
    term: "5_YEAR",
    type: "FIXED",
    updated: "2021-06-07T13:47:33Z",
  },
];

test("should return the initial state", () => {
  expect(reducer(undefined, { type: undefined })).toEqual({
    products: [],
    loading: false,
    error: "",
  });
});

test("should have two products for each type", () => {
  const previousState = {
    products: [] as Product[],
    loading: false,
    error: "",
  };

  expect(reducer(previousState, getProductsSuccess(mockProducts1))).toEqual({
    loading: false,
    error: "",
    products: payload1,
  });
});

test("should handle only one product", () => {
  const previousState = {
    products: [] as Product[],
    loading: false,
    error: "",
  };

  expect(reducer(previousState, getProductsSuccess(mockProducts2))).toEqual({
    loading: false,
    error: "",
    products: payload2,
  });
});
