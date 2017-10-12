import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExampleWork, {ExampleWorkBubble} from '../js/example-work';

configure({ adapter: new Adapter() });

// Attempt to fix `npm test` warning about 'React depends on requestAnimationFrame'
global.requestAnimationFrame = function(callback) {
  setTimeout(callback,0);
}

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
  }
];

describe("ExampleWork component", () => {
  let component = shallow(<ExampleWork work={myWork}/>);

  it("Should be a 'section' element", () => {
    expect(component.type()).toEqual('section');
  });

  it("Should contain as many children as there are work examples", () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  });
});

describe("ExampleWorkBubble component", () => {
  let component = shallow(<ExampleWorkBubble example={myWork[1]}/>);

  let images = component.find("img");

  it("Should contain a single 'img' element", () => {
    expect(images.length).toEqual(1);
  });

  it("Should have the image src set correctly", () => {
    expect(images.getElement().props.src).toEqual(myWork[1].image.src)
  });
});
