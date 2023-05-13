const getGifs = async (category) => {

    const api_key = '0EnE9NwSPcdcYnP0lki2HGin5NdthYuz';
    const limite = 10;

    const enlace = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${category}&limit=${limite}`;
    const resp = await fetch(enlace);
    const { data } = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url,
    }));
    
    return gifs;
}

export default getGifs;