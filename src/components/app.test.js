import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { Images, StyledImage } from "./images";

configure({ adapter: new Adapter() });

const images = [
  {
    id: "s870ONIxP1o",
    created_at: "2022-03-09T07:02:00-05:00",
    updated_at: "2022-03-30T11:21:14-04:00",
    promoted_at: "2022-03-09T09:56:03-05:00",
    width: 2977,
    height: 4465,
    color: "#264040",
    blur_hash: "LHAUT*_M.7tQ?[xut7t7RPRQazt7",
    description: null,
    alt_description: null,
    urls: {
      raw: "https://images.unsplash.com/photo-1646827154310-1a3bbf3a8a9a?ixid=MnwzMTQ5NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDg2NjA4MTc\u0026ixlib=rb-1.2.1",
      full: "https://images.unsplash.com/photo-1646827154310-1a3bbf3a8a9a?crop=entropy\u0026cs=srgb\u0026fm=jpg\u0026ixid=MnwzMTQ5NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDg2NjA4MTc\u0026ixlib=rb-1.2.1\u0026q=85",
      regular:
        "https://images.unsplash.com/photo-1646827154310-1a3bbf3a8a9a?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMTQ5NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDg2NjA4MTc\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=1080",
      small:
        "https://images.unsplash.com/photo-1646827154310-1a3bbf3a8a9a?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMTQ5NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDg2NjA4MTc\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=400",
      thumb:
        "https://images.unsplash.com/photo-1646827154310-1a3bbf3a8a9a?crop=entropy\u0026cs=tinysrgb\u0026fit=max\u0026fm=jpg\u0026ixid=MnwzMTQ5NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDg2NjA4MTc\u0026ixlib=rb-1.2.1\u0026q=80\u0026w=200",
      small_s3:
        "https://s3.us-west-2.amazonaws.com/images.unsplash.com/photo-1646827154310-1a3bbf3a8a9a",
    },
    links: {
      self: "https://api.unsplash.com/photos/s870ONIxP1o",
      html: "https://unsplash.com/photos/s870ONIxP1o",
      download:
        "https://unsplash.com/photos/s870ONIxP1o/download?ixid=MnwzMTQ5NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDg2NjA4MTc",
      download_location:
        "https://api.unsplash.com/photos/s870ONIxP1o/download?ixid=MnwzMTQ5NTB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NDg2NjA4MTc",
    },
    categories: [],
    likes: 64,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {
      "color-of-water": {
        status: "approved",
        approved_on: "2022-03-30T11:21:14-04:00",
      },
    },
    user: {
      id: "pyx39X4AThQ",
      updated_at: "2022-03-30T13:12:54-04:00",
      username: "filipp_roman_photography",
      name: "Filipp Romanovski",
      first_name: "Filipp",
      last_name: "Romanovski",
      twitter_username: null,
      portfolio_url: "https://filipp-roma.de/",
      bio: "Hi, iam Filipp, iam a professional Photographer from Germany with passion for Food, Love and Street Photography. Enjoy my Pictures and feel free to connect with me. \r\n Instagram @filipp_roman_photography ",
      location: "Hannover",
      links: {
        self: "https://api.unsplash.com/users/filipp_roman_photography",
        html: "https://unsplash.com/@filipp_roman_photography",
        photos:
          "https://api.unsplash.com/users/filipp_roman_photography/photos",
        likes: "https://api.unsplash.com/users/filipp_roman_photography/likes",
        portfolio:
          "https://api.unsplash.com/users/filipp_roman_photography/portfolio",
        following:
          "https://api.unsplash.com/users/filipp_roman_photography/following",
        followers:
          "https://api.unsplash.com/users/filipp_roman_photography/followers",
      },
      profile_image: {
        small:
          "https://images.unsplash.com/profile-1641160168038-6335f0a47370image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=32\u0026w=32",
        medium:
          "https://images.unsplash.com/profile-1641160168038-6335f0a47370image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=64\u0026w=64",
        large:
          "https://images.unsplash.com/profile-1641160168038-6335f0a47370image?ixlib=rb-1.2.1\u0026q=80\u0026fm=jpg\u0026crop=faces\u0026cs=tinysrgb\u0026fit=crop\u0026h=128\u0026w=128",
      },
      instagram_username: "filipp_roman_photography",
      total_collections: 21,
      total_likes: 70,
      total_photos: 584,
      accepted_tos: true,
      for_hire: true,
      social: {
        instagram_username: "filipp_roman_photography",
        portfolio_url: "https://filipp-roma.de/",
        twitter_username: null,
        paypal_email: null,
      },
    },
    exif: {
      make: "FUJIFILM",
      model: "X100V",
      name: "FUJIFILM, X100V",
      exposure_time: "1/4000",
      aperture: "2.0",
      focal_length: "23.0",
      iso: 250,
    },
    location: {
      title: "Lyon, Frankreich",
      name: "Lyon, Frankreich",
      city: "Lyon",
      country: "Frankreich",
      position: { latitude: 45.764043, longitude: 4.835659 },
    },
    views: 370615,
    downloads: 1663,
  },
];

const setup = () => {
  return shallow(<Images images={images} />);
};

describe("App component", () => {
  it("renders without crashing", () => {
    const wrapper = setup();
    expect(wrapper).not.toBe(null);
  });

  it("should render correct number of images", () => {
    const wrapper = setup();

    expect(wrapper.find(StyledImage).length).toEqual(1);
  });
});
