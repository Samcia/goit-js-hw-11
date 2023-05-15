import axios from "axios";

const per_page = 40;
let totalPages = 0;

const getGallery = async (query, page) => {
  const API_KEY = "36428255-6a4e182375d5164975cc14432";
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: per_page,
    page: page,
  });

  const response = await axios.get(`https://pixabay.com/api/?${params}`);
  totalPages = response.data.totalHits / per_page;
  return response;
};

export { getGallery, totalPages };
