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

const arrayOfLensMock: Array<ILens & { _id: string }> = [
  {
    _id: '62cf1fc6498565d94eba52cd',
    degree: 2,
    antiGlare: true,
    blueLightFilter: true
  },
  {
    _id: '62cf1fc6498565d94eba52ce',
    degree: 3,
    antiGlare: false,
    blueLightFilter: true
  },
  {
    _id: '62cf1fc6498565d94eba52cf',
    degree: 4,
    antiGlare: true,
    blueLightFilter: false
  }
]

export { lenMock, lenMockWithId, arrayOfLensMock };