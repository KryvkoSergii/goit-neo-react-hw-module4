import axios from "axios";

const ACCESS_KEY = "4hie28yqZE3_qf_B07YwMEZeRM9O-5eU0urrn49WahE"; 

export default async function search({query, page}, onError) {
  try {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: {
        page: page,
        per_page: 10,
        query: query
      },
      headers: { "Authorization": `Client-ID ${ACCESS_KEY}` },
    });

    return response.data;
  } catch (error) {
    onError(error);
  }
}
