import Student from "../model/Student";

const homeController = (req, res) => {
  res.render("screens/home");
};

const studentController = (req, res) => {};

export const globalController = {
  homeController,
};
