// [GET] /admin/dashboard
module.exports.dashboard = (req, res)=>{
  res.render("admins/pages/dashboard/index.pug", {
    pageTitle: "Trang tổng quan",
  });
}
