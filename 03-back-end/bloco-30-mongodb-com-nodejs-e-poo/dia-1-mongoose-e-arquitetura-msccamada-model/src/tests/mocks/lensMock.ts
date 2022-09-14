import ILens from "../../interfaces/Lens";

const lenMock: ILens = {
  degree: 2,
  antiGlare: true,
  blueLightFilter: true
};

const lenMockWithId: ILens & { _id: string } = {
  _id: '62cf1fc6498565d94eba52cd',
  degree: 2,
  antiGlare: true,
  blueLightFilter: true
};

export { lenMock, lenMockWithId };