import { v4 as uuidv4 } from "uuid";

const createBookWithID = (
  book: { title: string; author: string },
  source: string
) => {
  return {
    ...book,
    source,
    isFavorite: false,
    id: uuidv4(),
  };
};
export default createBookWithID;
