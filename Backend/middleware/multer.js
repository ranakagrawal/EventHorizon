//Venue Image Multer

exports.venueImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folderName = `assets/venueImages/${req.body.name}`;
    cb(null, folderName);
  },
  filename: function (req, file, cb) {
    const uniqueFileName = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueFileName + path.extname(file.originalname));
  },
});

exports.venueImageUpload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
      return cb(
        res
          .status(404)
          .json({ message: "Only .png, .jpg or .jpeg formats are supported" })
      );
    }
    cb(null, true);
  },
  limits: {
    //fileSize: 1024 * 1024
  },
});



//QR Image Multer

exports.qrImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folderName = `assets/qrImages`;
    cb(null, folderName);
  },
  filename: function (req, file, cb) {
    const uniqueFileName = req.body._id + "-" + Math.round(Math.random() * 1e9); //editing required
    cb(null, uniqueFileName + path.extname(file.originalname));
  },
});

exports.qrImageUpload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
      return cb(
        res
          .status(404)
          .json({ message: "Only .png, .jpg or .jpeg formats are supported" })
      );
    }
    cb(null, true);
  },
  limits: {
    //fileSize: 1024 * 1024
  },
});



///Event Logo, Banner and Report Image Multer

exports.eventLogoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folderName = `assets/events/${req.body.name}`;
    cb(null, folderName);
  },
  filename: function (req, file, cb) {
    cb(null, "logo" + path.extname(file.originalname));
  },
});
exports.eventBannerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folderName = `assets/events/${req.body.name}`;
    cb(null, folderName);
  },
  filename: function (req, file, cb) {
    cb(null, "banner" + path.extname(file.originalname));
  },
});
exports.eventImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folderName = `assets/event/${req.body.name}`;
    cb(null, folderName);
  },
  filename: function (req, file, cb) {
    const uniqueFileName = "report" + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueFileName + path.extname(file.originalname));
  },
});

exports.eventImageUpload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
      return cb(
        res
          .status(404)
          .json({ message: "Only .png, .jpg or .jpeg formats are supported" })
      );
    }
    cb(null, true);
  },
  limits: {
    //fileSize: 1024 * 1024
  },
});



//Event Report File Multer

exports.eventFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folderName = `assets/event/${req.body.name}`;
    cb(null, folderName);
  },
  filename: function (req, file, cb) {
    const uniqueFileName = "reportFile" + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueFileName + path.extname(file.originalname));
  },
});

exports.venueImageUpload = multer({
  storage: storage,
  fileFilter: function (req, file, cb) {
    var ext = path.extname(file.originalname);
    if (ext !== ".pdf" && ext !== ".doc" && ext !== ".docx") {
      return cb(
        res
          .status(404)
          .json({ message: "Only .pdf, .doc or .docx formats are supported" })
      );
    }
    cb(null, true);
  },
  limits: {
    //fileSize: 1024 * 1024
  },
});
