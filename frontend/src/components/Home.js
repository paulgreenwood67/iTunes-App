import React, { useEffect, useState } from "react";
import Favorites from "./Favorites";
import Media from "./Media";





export default function AppLayout() {
  //State for searchterm
  const [searchTerm] = useState("");
  //State for api data
  const [mediaInfo, setMediaInfo] = useState([]);
  //State for favortites
  const [favorites, setFavorites] = useState([]);
  //Variable for media types
  const allMedia = [
    "all",
    "movie",
    "podcast",
    "musicVideo",
    "audiobook",
    "shortFilm",
    "tvShow",
    "software",
    "ebook",
  ];
  //Variabel for number of searches
  const mediaAmount = ['all', 5, 10, 15, 20, 50];
  //State for mediatype API url
  const [mediaType] = useState("");
  //State for API amount url
  const [amount] = useState("");
 //State for request data
  const [frontEndRequest, setFrontEndRequest] = useState({
    searchTerm: searchTerm,
    amount: amount,
    mediaType: mediaType,
  });

  //the following 3 functions are to set the query paramaters to be sent to the backend for the API request

  const searchTermSubmit = (e) => {
    setFrontEndRequest({
      ...frontEndRequest,
      searchTerm: e.target.value,
    });
  };
//function for the media selection
  const handleMediaChange = (e) => {
    setFrontEndRequest({
      ...frontEndRequest,
      mediaType: e.target.value,
    });
  };
//function for the search term submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setFrontEndRequest({
      ...frontEndRequest,
      searchTerm: e.target.searchTerm.value,
    });
  };

  // function for the POST request from the submit button
  function onSearch() {
    fetch("/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(frontEndRequest),
    })
      .then((res) => res.json())
      .then(() => {});
  }

  //useEffect to fetch API data on page load.
  useEffect(() => {
    function getApiData() {
      fetch("/api")
        .then((response) => response.json())
        .then((data) => setMediaInfo(data));
    }
    const interval = setInterval(() => {
      getApiData();
    }, 1000);
  }, []);

// function to handle the amount selection
  const onAmountChange = (e) => {
    setFrontEndRequest({
      ...frontEndRequest,
      amount: e.target.value,
    });
  };

  // function to add favourites
  const addfav = (e) => {
    let index = e.target.dataset.songid;
    const newItem = {
      id: mediaInfo[index].trackId,
      artist: mediaInfo[index].artistName,
      track: mediaInfo[index].trackName,
      genre: mediaInfo[index].primaryGenreName,
    };
    const newItems = [...favorites, newItem];

    setFavorites(newItems);
    
  };

   
 // function to remove favourites
  function removeFav(e, id) {
    let index = e.target.dataset.songid;
    favorites.splice(index, 1);
   
  }

  return (
    <div>
      <div className="app-wrapper">
        <h1>iTunes search</h1>
         {/* Artist / Author / Product..." input */}
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            id="searchTerm"
            name="searchTerm"
            className="input"
            onChange={searchTermSubmit}
            placeholder ="Artist / Author / Product..."
          />{" "}
          
           {/* Select media type*/}
          <h4>Media</h4>
          <select className="select-sizeMedia" onChange={handleMediaChange}>
            {allMedia?.map((media) => {
              return (
                <option key={media} value={media}>
                  {" "}
                  {media}{" "}
                </option>
              );
            })}
          </select>

           {/* Select media type*/}
          <h4>Items</h4>
          <select className="select-sizeItems" onChange={onAmountChange}>
            {mediaAmount?.map((amount) => {
              return (
                <option key={amount} value={amount}>
                  {" "}
                  {amount}{" "}
                </option>
              );
            })}
          </select>

        {/* Search Button  */}
          <button variant="primary" onClick={onSearch}>
            {'Search'}
          </button>
        </form>
        <div className="music-item-wrapper"></div>
      </div>
      <div className="music-item-display">
        {mediaInfo?.map((mediaInfo, index) => {
          return (
            <div className="music-item-card" key={mediaInfo.trackId}>
              <Media
                index={index}
                trackId={mediaInfo.trackId}
                artistName={mediaInfo.artistName}
                trackName={mediaInfo.trackName}
                primaryGenreName={mediaInfo.primaryGenreName}
                addfav={addfav}
                buttonName={mediaInfo.trackName}
              />
            </div>
          );
        })}
       
         {/* Favourites  */}
        <div className="favorites-wrapper">
        <br />
          <h1 className="favorites">Favorites</h1>
          <br />
          <div className="favorites-container">
            {favorites?.map((favorites, index) => {
              return (
                <div className="music-item-card" key={index}>
                  <Favorites
                    index={index}
                    artist={favorites.artist}
                    track={favorites.track}
                    genre={favorites.genre}
                    removeFav={removeFav}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </div>
  );
}
