
change = {
    type: "EDIT", // Probably ADD, EDIT, REMOVE
    key: "Name", // This will be the key to the property that the change deals with on the business object, if we are adding we might just leave this blank
    oldValue: "Old Name", // Name before suggested change
    newValue: "New Name", // New name proposed
    timestamp: "date", // Time change was proposed
}

exports.addChange = functions.https.onRequest(async (request, response) => {
    var state = request.body.data.state;
    var city = request.body.data.city;

    try {
        var stores = await db.collection(`${state}-${city}`).where("approved", "==", true).get();

        response.send({data: stores});
    } catch (e) {
        response.status(500).send(`Error: ${e}`);
    }
});

exports.approveChange = functions.https.onRequest(async (request, response) => {
    var state = request.body.data.state;
    var city = request.body.data.city;

    try {
        var stores = await db.collection(`${state}-${city}`).where("approved", "==", true).get();

        response.send({data: stores});
    } catch (e) {
        response.status(500).send(`Error: ${e}`);
    }
});

exports.declineChange = functions.https.onRequest(async (request, response) => {
    var state = request.body.data.state;
    var city = request.body.data.city;

    try {
        var stores = await db.collection(`${state}-${city}`).where("approved", "==", true).get();

        response.send({data: stores});
    } catch (e) {
        response.status(500).send(`Error: ${e}`);
    }
});

/**
 * Gets all the changes. The front end will filter based on proposed, approved, declined, etc.
 * This function will also automatically scope the changes it returns based on the permissions of 
 * the user who requests them.
 */
exports.getAllChanges = functions.https.onRequest(async (request, response) => {
    var state = request.body.data.state;
    var city = request.body.data.city;

    try {
        var stores = await db.collection(`${state}-${city}`).where("approved", "==", true).get();

        response.send({data: stores});
    } catch (e) {
        response.status(500).send(`Error: ${e}`);
    }
});