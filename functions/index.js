global.functions = require('firebase-functions');
global.admin = require("firebase-admin");
admin.initializeApp();
global.db = admin.firestore();

global.uuid = require('uuid');

global.helpers = require('./helpers');

const businesses = require('./groups/businesses');
const changes = require('./groups/changes');

const testAdd = 'Test';

// This is how you export a function. If you declare a function here it will
// be exposed with an endpoint
// The 'testAdd' is just something to quickly deploy test functions in firebase,
// but we probably don't need it since we have a staging environment
exports['getBusinesses'+testAdd] = businesses.getBusinesses;
exports['addBusiness'+testAdd] = businesses.addBusiness;
exports['approveBusiness'+testAdd] = businesses.approveBusiness;

