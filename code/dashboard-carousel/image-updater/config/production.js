var config = {

  screenshotServiceUrl: 'http://0.0.0.0:4000/',
  interval: 5, //minutes
  urls: {
    1: 'http://datadash.wc1.yellowpages.com:3072/tube',
    2: 'http://searchdash.prod.wc1.yellowpages.com:3072/tube',
    3: 'http://webdashboard.prod.wc1.yellowpages.com/summary/buzz',
    4: 'http://webdash.np.wc1.yellowpages.com:3000/summary/itl'
  },
  tmpImagesPath: '../website/public/reports/tmp/',
  imagesPath:  '../website/public/reports/'

}

module.exports = config;
