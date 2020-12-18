import Student from "../model/Student";

const homeController = (req, res) => {
  res.render("screens/home.pug");
};

const globalController = {
  homeController,
};

export default globalController;
