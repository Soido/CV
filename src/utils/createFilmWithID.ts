import { v4 as uuidv4 } from "uuid";

const createFilmWithID = (
  film: { title: string; author: string; ganre: string; year: string | number },
  source: string
) => {
  return {
    ...film,
    source,
    isFavorite: false,
    id: uuidv4(),
  };
};
export default createFilmWithID;
