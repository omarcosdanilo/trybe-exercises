// import Frame from '../models/Frame';

interface IModel<T> {
  create(obj:T):Promise<T>,
  readOne(_id:string):Promise<T | null>,
  // Utility Types https://www.typescriptlang.org/docs/handbook/utility-types.html
  update(payload: Partial<T>, id: string): Promise<T | null>
}

// ===== Exemplo =====
// const ModelFrame: IModel<Frame> = {
//   create(obj: Frame): Promise<Frame> {
    
//   },

//   readOne(_id: string): Promise<Frame | null> {
    
//   },
// };

export default IModel;

// export { ModelFrame };