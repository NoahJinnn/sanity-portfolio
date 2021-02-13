const navBar = {
  navBlog: "Blog",
  navProject: "Project",
  navAbout: "About",
  navContact: "Contact",
};

const blogPage = {
  "welcome.blog": "Welcome to my blogs",
};

const projectPage = {
  "welcome.project": "Welcome to my projects",
  viewProject: "View project",
};

const aboutPage = {
  "welcome.about": "Hey there. I am",
};

export default {
  ...navBar,
  ...blogPage,
  ...projectPage,
  ...aboutPage,
};
