import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ExampleWorkModal from '../js/example-work-modal';

configure({ adapter: new Adapter() });

const myExample = {
  'title': "Carlton Carriages WordPress Site",
  'href': "https://Carlton-Carriages.co.uk",
  'desc': "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  'image': {
    'desc': "Screenshot of a Carlton Carriages Landau and four horses outside Buckingham Palace",
    'src': "images/carlton-carriages_buckingham-palace_640x350.jpg",
    'alt': "Screenshot of a Carlton Carriages Landau and four horses outside Buckingham Palace",
    'comment': ""
  }
};

describe("ExampleWorkModal component", () => {
  let mockCloseModalFn = jest.fn();

  let component = shallow(<ExampleWorkModal example={myExample}
    open={false}/>);
  let openComponent = shallow(<ExampleWorkModal example={myExample}
    open={true} closeModal={mockCloseModalFn}/>);

  let anchors = component.find("a");

  it("Should contain a single 'a' element", () => {
    expect(anchors.length).toEqual(1);
  });

  it("Should link to our project", () => {
    expect(anchors.getElement().props.href).toEqual(myExample.href);
  });

  it("Should have the modal class set correctly", () => {
    expect(component.find(".background--skyBlue").hasClass("modal--closed")).toBe(true);
    expect(openComponent.find(".background--skyBlue").hasClass("modal--open")).toBe(true);
  });
  it("Should call the closeModal handler when clicked", () => {
    openComponent.find(".modal__closeButton").simulate('click');
    expect(mockCloseModalFn).toHaveBeenCalled();
  });
});
