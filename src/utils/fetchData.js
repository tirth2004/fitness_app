export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6226545f69msh1a49e23bead3d62p123158jsn92bf6d0a1b94',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '6226545f69msh1a49e23bead3d62p123158jsn92bf6d0a1b94',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
