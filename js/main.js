import React from 'react';
import ReactDOM from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
  {
    'title': "Carlton Carriages WordPress Site",
    'image': {
      'desc': "Screenshot of a Carlton Carriages Landau and four horses outside Buckingham Palace",
      'src': "images/carlton-carriages_buckingham-palace_640x350.jpg",
      'alt': "Screenshot of a Carlton Carriages Landau and four horses outside Buckingham Palace",
      'comment': ""
    }
  },
  {
    'title': "WordPress, DevOps Styly",
    'image': {
      'desc': "screenshot of a WordPress project using DevOps principles",
      'src': "images/example2.png",
      'alt': "screenshot of a WordPress project using DevOps principles",
      'comment': `“Chemistry” by Surian Soosay is licensed under CC BY 2.0
                  https://www.flickr.com/photos/ssoosay/4097410999`
    }
  },
  {
    'title': "Serverless: Function As A Service",
    'image': {
      'desc': "screenshot of a project involving Serverless Architecture",
      'src': "images/example3.png",
      'alt': "screenshot of a project involving Serverless Architecture",
      'comment': `“Bengal cat” by roberto shabs is licensed under CC BY 2.0
                  https://www.flickr.com/photos/37287295@N00/2540855181`
    }
  }
]

ReactDOM.render(<ExampleWork work={myWork} />, document.getElementById('example-work'));

// console.log("Loaded react-dom");
// console.log("Webpack working");
