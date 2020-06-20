exports.addUser = functions.https.onRequest(async (request, response) => {
    var state = request.body.data.state;
    var city = request.body.data.city;

    try {
        var stores = await db.collection(`${state}-${city}`).where("approved", "==", true).get();

        response.send({data: stores});
    } catch (e) {
        response.status(500).send(`Error: ${e}`);
    }
});

exports.requestModeratorStatus = functions.https.onRequest(async (request, response) => {
    var state = request.body.data.state;
    var city = request.body.data.city;

    try {
        var stores = await db.collection(`${state}-${city}`).where("approved", "==", true).get();

        response.send({data: stores});
    } catch (e) {
        response.status(500).send(`Error: ${e}`);
    }
});

exports.approveModeratorStatus = functions.https.onRequest(async (request, response) => {
    var state = request.body.data.state;
    var city = request.body.data.city;

    try {
        var stores = await db.collection(`${state}-${city}`).where("approved", "==", true).get();

        response.send({data: stores});
    } catch (e) {
        response.status(500).send(`Error: ${e}`);
    }
});