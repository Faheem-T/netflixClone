export async function fetchFromAPI({ pathParams, queryParams = "" }) {
  const url = `https://api.themoviedb.org/3/${pathParams}?language=en-US${queryParams}`;
  return fetch(url, options)
    .then((res) => res.json())
    .then((data) => data.results)
    .catch((err) => err.json());
}

export async function fetchVideo(id, type) {
  return fetchFromAPI({ pathParams: type + "/" + id + "/videos" });
}

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2Y2VkN2Y4Yzg3NjQ3NWQxMjE1NGUwZTcxYWI1YjY2MyIsIm5iZiI6MTczMDQ2MzI0MS45ODgwNjU3LCJzdWIiOiI2NzI0YmJjZWMxYzc0MzNlYmJjNDI5OTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.s_qvHsk_NAVv-3PXUeMfm_LT2sXOEy4A2slc4evjhPk",
  },
};
