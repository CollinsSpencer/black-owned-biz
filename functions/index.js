global.functions = require('firebase-functions');
global.admin = require("firebase-admin");

admin.initializeApp();
global.db = admin.firestore();

global.helpers = require('./helpers');
const businesses = require('./groups/businesses');
const changes = require('./groups/changes');

exports.getBusinesses = businesses.getBusinesses;
exports.addBusiness = businesses.addBusiness;
exports.addApprovedKey = businesses.addApprovedKey;
