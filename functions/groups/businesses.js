
exports.getBusinesses = functions.https.onRequest(async (request, response) => {
    var preCheck = await helpers.PreFunctionChecks(request, response, false, false);
    if (preCheck.ret) return;

    var state = request.body.data.state;
    var city = request.body.data.city;

    try {
        // TODO: We might want to do filtering of businesses here to only show approved ones
        // NOTE: The shape of the data represented here is not what is actually in our database.
        // This is from before we set it up based on what I thought it would be. This will need to 
        // be changed to reflect our data
        var stores = await db.collection(`businesses`)
            .where("state_key", "==", state).where("city_key", "==", city)
            .where("approved", "==", true).get();

        response.send({ data: stores });
    } catch (e) {
        response.status(500).send(`Error: ${e}`);
    }
});

exports.addBusiness = functions.https.onRequest((request, response) => {
    var preCheck = await helpers.PreFunctionChecks(request, response, false, false);
    if (preCheck.ret) return;

    var business = request.body.data.business;

    try {
        // TODO: conform this to the way we are doing things in our data
        // We might even change this to add a business to "Changes" not to businesses
        // But we will have to think about that
        business.approved = false;

        await db.collection(`businesses`).doc(uuid.uuidv4()).set(business);

        response.status(200).send(business);
    } catch (e) {
        response.status(500).send(`Error: ${e}`);
    }
});

exports.addApprovedKey = functions.https.onRequest((request, response) => {
    var preCheck = await helpers.PreFunctionChecks(request, response, false, false);
    if (preCheck.ret) return;

    var defaultVal = request.body.data.defaultValue;

    try {
        var businesses = await db.collection(`businesses`).get();

        businesses.foreach(async function (business) {
            if (business.data().approved === undefined) {
                await business.ref.update({ approved: defaultVal });
            }
        });

        response.status(200).send(`Businesses successfully updated with approved tag and default val: ${defaultVal}`);
    } catch (e) {
        response.status(500).send(`Error updating businesses: ${e}`);
    }
});