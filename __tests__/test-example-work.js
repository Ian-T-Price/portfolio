import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExampleWork, {ExampleWorkBubble} from '../js/example-work';

configure({ adapter: new Adapter() });

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
  let mockCloseModalFn = jest.fn();

  let component = shallow(<ExampleWork work={myWork}/>);

  it("Should be a 'span' element", () => {
    expect(component.type()).toEqual('span');
  });

  it("Should contain as many children as there are work examples", () => {
    expect(component.find("ExampleWorkBubble").length).toEqual(myWork.length);
  });

  it("Should allow the modal to open and close", () => {
    component.instance().openModal();
    expect(component.instance().state.modalOpen).toBe(true);
    component.instance().closeModal();
    expect(component.instance().state.modalOpen).toBe(false);
  });

});

describe("ExampleWorkBubble component", () => {
  let mockOpenModalFn = jest.fn();

  let component = shallow(<ExampleWorkBubble example={myWork[0]}
    openModal={mockOpenModalFn} />);
    //closeModal={mockCloseModalFn}

  let images = component.find("img");

  it("Should contain a single 'img' element", () => {
    expect(images.length).toEqual(1);
  });

  it("Should have the image src set correctly", () => {
    expect(images.getElement().props.src).toEqual(myWork[0].image.src)
  });

  it("Should call the openModal handler when clicked", () => {
    component.find(".section__exampleWrapper").simulate('click');
    expect(mockOpenModalFn).toHaveBeenCalled();
  });
  //  it("Should call the closeModal handler when clicked", () => {
  //    component.find(".modal__closeButton").simulate('click');
  //    expect(mockCloseModalFn).toHaveBeenCalled();
  //  });
});
