if (self !== global) self = global;
if(!self.__tfAppInited) {
 self.__tfAppInited = 1;
require('./config.js?hash=e9f9a843a394140affef550a3986337781aa6896');

const TFApp = self.TFApp.getAppContext
  ? self.TFApp.getAppContext().TFApp
  : self.TFApp;
self.App = TFApp.App;
self.getApp = TFApp.getApp;
self.getCurrentPages = TFApp.getCurrentPages;
self.Page = TFApp.Page;
self.Component = TFApp.Component;
self.$global = TFApp.$global;
self.my = TFApp.bridge;


if (TFApp.registerApp) {
  TFApp.registerApp({
    appJSON: tfAppJson
  });
}

 function success() {
require('../app.js?hash=b763cdf7258c3bb9ea1f9bc0cf633e12191da08c');
require('../pages/index/index?hash=5d416faac325d5366b956b62d72e926affa390a0');
require('../pages/user/user?hash=39c595f209b00855c6ffc0693e34defd5ec34822');
require('../pages/videos-example/videos-example?hash=7c148f09d6f0309d9421bfe246fdfa52763098b9');
require('../pages/progress-example/progress-example?hash=b4e46e448d79c4b1f534e347706774587469cdf6');
 }
 self.TFApp.bootstrapApp({ success });
}