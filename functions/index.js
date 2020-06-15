global.functions = require('firebase-functions');
global.admin = require("firebase-admin");
admin.initializeApp();
global.db = admin.firestore();

global.uuid = require('uuid');

const businesses = require('./groups/businesses');
const changes = require('');

const testAdd = 'Test';

exports['getBusinesses'+testAdd] = businesses.getBusinesses;
exports['addBusiness'+testAdd] = businesses.addBusiness;
exports['approveBusiness'+testAdd] = businesses.approveBusiness;

