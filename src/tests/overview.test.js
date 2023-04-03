import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '@testing-library/jest-dom';

import { render, screen, cleanup, getByText, waitFor, fireEvent } from '@testing-library/react';

import Overview from '../Components/Overview/Overview.jsx'; //test to see if component renders (?)
// import OverviewPrice from '../Components/Overview/OverviewInfo/OverviewPrice.jsx';//check for sale price functionality

// import OverviewMainPic from '../Components/Overview/OverviewPicture/OverviewMainPic.jsx'; import RefactoredCarousel from '../Components/Overview/OverviewPicture/RefactoredCarousel.jsx';//test to see if pic changes when a style is clicked

//test to see if clicking reviews link jumps to reviews

//test to see if click tracker works

afterEach(() => {cleanup()}); //

const productInfo = {
  "id": 37311,
  "campus": "hr-rfe",
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",

  "default_price": "140.00",
  "created_at": "2021-08-13T14:37:33.145Z",

  "updated_at": "2021-08-13T14:37:33.145Z",

  "features": [

      {
          "feature": "Fabric",
          "value": "Canvas"

      },
      {

          "feature": "Buttons",
          "value": "Brass"
      }
  ]
}

test('Render the description of the current product when the component loads', async () => {


render(<Overview current={productInfo}/>);
const description = screen.getByText(productInfo.description);

expect(description).toBeInTheDocument();
})













const mainPic1 = "https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"
const ThumbnailPic = "https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
// const setPic = () =>





//check for product description - simplest test


//check for sale price functionality

//test to see if component renders (?)

//test to see if pic changes when a style is clicked
//test to see if clicking reviews link jumps to reviews
//test to see if click tracker works

