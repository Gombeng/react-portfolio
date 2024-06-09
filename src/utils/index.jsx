const size = {
  mobile: "375px",
  tablet: "768px",
  laptop: "1124px",
  desktop: "1440px",
};

const device = {
  mobile: `(min-width: ${size.mobile})`,
  mobilemax: `(max-width: calc(${size.tablet} - .1px))`,
  tablet: `(min-width: ${size.tablet})`,
  tabletmax: `(max-width: calc(${size.laptop} - .1px))`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};

const tabTitle = (newTitle) => {
  return (document.title = newTitle);
};

const fakeApiCall = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ success: true });
    }, 1000);
  });
};

export { device, tabTitle, fakeApiCall };
