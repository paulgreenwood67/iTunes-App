//freecodecamp tutorial on unit testing

//https://www.freecodecamp.org/news/testing-react-hooks/#:~:text=gist%20of%20it.-,What%20not%20to%20test%3F,-I%20like%20to

// Import libraries and frameworks
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
// import pretty from "pretty";

// Import component to be tested
import Media from "../src/components/Media";

/**
 *
 * UNIT TESTING:
 *
 * This component ItunesItem is more concerned with triggering
 * some events that have been passed as props from the parent
 * component to render the itunes items or the favourite items
 * depending on the state of the application such as the
 * handleAddToFavouriteItunes and handleRemoveFavouriteItem
 *
 * Otherwise the component is more of a presentational component
 * to render the items as the handlers have been defined in the
 * parent and only passed as props here, while this component
 * maintains its internal state is only to determine whether
 * the item is added to favourites or not which is tested
 * below in the unit tests
 *
 * The presentational bit of tested through snapshot testing
 * below all the unit tests in this file
 *
 * RESEARCH: The React Docs provides sufficient guidance for
 * testing events:
 * https://reactjs.org/docs/testing-recipes.html#events
 *
 * Guidance on snapshots:
 * https://reactjs.org/docs/testing-recipes.html#snapshot-testing
 *
 *
 */

// Initialize the target element to render our components
// temporarily while testing
let targetContainerEl = null;

// Mock some fake data and store in the variable fakeData
const fakeData = {
  wrapperType: "track",
  kind: "song",
  artistId: 721552376,
  collectionId: 1445295867,
  trackId: 1445295869,
  artistName: "Diamond Platnumz",
  collectionName: "Marry You (feat. Ne-Yo) - Single",
  trackName: "Marry You (feat. Ne-Yo)",
  collectionCensoredName: "Marry You (feat. Ne-Yo) - Single",
  trackCensoredName: "Marry You (feat. Ne-Yo)",
  artistViewUrl:
    "https://music.apple.com/us/artist/diamond-platnumz/721552376?uo=4",
  collectionViewUrl:
    "https://music.apple.com/us/album/marry-you-feat-ne-yo/1445295867?i=1445295869&uo=4",
  trackViewUrl:
    "https://music.apple.com/us/album/marry-you-feat-ne-yo/1445295867?i=1445295869&uo=4",
  previewUrl:
    "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/53/b1/18/53b118d3-e589-8be9-3753-09f561fe5992/mzaf_10679750533222968992.plus.aac.p.m4a",
  artworkUrl30:
    "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/db/d5/86/dbd586f6-5c4b-e9f3-8ec6-4716adf881c8/source/30x30bb.jpg",
  artworkUrl60:
    "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/db/d5/86/dbd586f6-5c4b-e9f3-8ec6-4716adf881c8/source/60x60bb.jpg",
  artworkUrl100:
    "https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/db/d5/86/dbd586f6-5c4b-e9f3-8ec6-4716adf881c8/source/100x100bb.jpg",
  collectionPrice: 1.29,
  trackPrice: 1.29,
  releaseDate: "2016-12-02T12:00:00Z",
  collectionExplicitness: "notExplicit",
  trackExplicitness: "notExplicit",
  discCount: 1,
  discNumber: 1,
  trackCount: 1,
  trackNumber: 1,
  trackTimeMillis: 246805,
  country: "USA",
  currency: "USD",
  primaryGenreName: "Pop",
  isStreamable: true,
  uniqueId: 164286039837,
};

// Setting up and Tearing down the the target element
// in order to isolate the effects of the test to itself

// SetUp
beforeEach(() => {
  // Setting up the targetElement for rendering during the tests
  // Then appending it to the body of the HTML
  targetContainerEl = document.createElement("div");
  document.body.appendChild(targetContainerEl);
});

// Tear Down
afterEach(() => {
  // Cleaning up the effects of the test
  unmountComponentAtNode(targetContainerEl);
  targetContainerEl.remove();
  targetContainerEl = null;
});

// UNIT Testing
test("value changes when addToFavourites click event is fired", () => {
  //   Mock the addToFavourites event handler function using jest
  const handleAddToFavouriteItunes = jest.fn();

  //   Action of rendering the component on the jestdom
  act(() => {
    (
      <Media
        musicItem={fakeData}
        isFromStore={true}
        handleAddToFavouriteItunes={handleAddToFavouriteItunes}
      />
    ),
      targetContainerEl;
  });
});
