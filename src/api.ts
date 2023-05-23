import axios from "axios";

const searchImages = async (term: string) => {
  const {
    data: { results },
  } = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID GfkOkbVwdDrQCeuCAuz5VTcjDgwmVHEtqv0Ny7rNXJc",
    },
    params: {
      query: term,
    },
  });
  

  return results;
};
export default searchImages;
