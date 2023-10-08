///////////////////////////////////////////
//////// **Venue Images Multer** //////////
///////////////////////////////////////////

// setting multer folder and file name for venue images
// with folder name as venue name and file name as date-randomNo.
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

////////////////////////////////////////////
///////// **QR Images Multer** ////////////
//////////////////////////////////////////

// setting multer folder and file name for QR images
// with folder name as QRImages and file name as User ID.

//*****EDIT REQUIRED******//
exports.qrImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folderName = `assets/qrImages`;
    cb(null, folderName);
  },
  filename: function (req, file, cb) {
    const uniqueFileName = req.body._id; //editing required
    cb(null, uniqueFileName + path.extname(file.originalname));
  },
});

///////////////////////////////////////////
//////// **Event Related Multer** /////////
///////////////////////////////////////////

//Event Logo multer with 'logo' as filename
exports.eventLogoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folderName = `assets/events/${req.body.name}`;
    cb(null, folderName);
  },
  filename: function (req, file, cb) {
    cb(null, "logo" + path.extname(file.originalname));
  },
});

// Event banner multer with 'banner' as filename
//with foldername as event name

exports.eventBannerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folderName = `assets/events/${req.body.name}`;
    cb(null, folderName);
  },
  filename: function (req, file, cb) {
    cb(null, "banner" + path.extname(file.originalname));
  },
});

// multiple event images multer with filename as 'report+$randomValue'
//with foldername as event name

exports.eventReportImageStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const folderName = `assets/event/${req.body.name}`;
    cb(null, folderName);
  },
  filename: function (req, file, cb) {
    const uniqueFileName = "report" + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueFileName + path.extname(file.originalname));
  },
});

//Event Report File 'pdf' Multer with filename 'reportFile+$randomValue'
//with foldername as event name
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

///////////////////////////////////////////
//////// **Multer File Filters** //////////
///////////////////////////////////////////

// all images uses this same filter

exports.imageFileFilter = function (req, file, cb) {
  var ext = path.extname(file.originalname);
  if (ext !== ".png" && ext !== ".jpg" && ext !== ".jpeg") {
    return cb(
      res
        .status(404)
        .json({ message: "Only .png, .jpg or .jpeg formats are supported" })
    );
  }
  cb(null, true);
};


// event report pdf file multer filter
exports.pdfFileFilter = function (req, file, cb) {
  var ext = path.extname(file.originalname);
  if (ext !== ".pdf" && ext !== ".doc" && ext !== ".docx") {
    return cb(
      res
        .status(404)
        .json({ message: "Only .pdf, .doc or .docx formats are supported" })
    );
  }
  cb(null, true);
};
