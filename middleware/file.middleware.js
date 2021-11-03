const Multer = require("koa-multer");
const Jimp = require("jimp");
const avatarUpload = Multer({
  dest: "./uploads/avatar",
});
const pictureUpload = Multer({
  dest: "./uploads/images",
});
const avatarHandler = avatarUpload.single("avatar"); //自动单张将字段为'avatar'图片保存到指定路径
const pictureHandler = pictureUpload.array("picture", 9); //自动将多张将字段为'picture'图片数组依次保存到指定路径
module.exports = { avatarHandler, pictureHandler };
