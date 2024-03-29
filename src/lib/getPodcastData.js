export async function getAllPodcast() {
  const url = "https://api.lyrics.ovh/suggest/e";
  const options = {
    header: "GET",
    next: {
      revalidate: 60 * 60 * 24,
    },
  };

  const res = await fetch(url, options);
  const data = await res.json();

  return data.data;
}

export async function getSinglePodcast(id) {
  const url = "https://api.lyrics.ovh/suggest/e";
  const options = {
    header: "GET",
    next: {
      revalidate: 60 * 60 * 24,
    },
  };
  const currentId = parseInt(id);

  const res = await fetch(url, options);
  const data = await res.json();
  const filteredData = await data?.data.filter((data) => data.id === currentId);

  return filteredData;
}
