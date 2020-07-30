
exports.getBusinesses = functions.https.onRequest(async (request, response) => {
    var preCheck = await helpers.PreFunctionChecks(request, response, false, false);
    if (preCheck.ret) return;

    var state = request.body.data.state;
    var city = request.body.data.city;
    var category = request.body.data.category;

    try {
        var stores = db.collection(`businesses`);
        if (state) {
            stores = stores.where("state_key", "==", state);
        }
        if (city) {
            stores = stores.where("city_key", "==", city);
        }
        if (category) {
            stores = stores.where("category_key", "==", category);
        }

        stores = await stores.where("approved", "==", true).get();
        var result = [];
        stores.forEach((store) => {
            var storeWithId = store.data()
            storeWithId.id = store.id;
            result.push(storeWithId)
        });

        response.send({ data: result });
    } catch (e) {
        response.status(500).send(`Error: ${e}`);
    }
    return;
});

exports.addBusiness = functions.https.onRequest(async (request, response) => {
    var preCheck = await helpers.PreFunctionChecks(request, response, false, false);
    if (preCheck.ret) return;

    var business = request.body.data.business;

    try {
        // TODO: conform this to the way we are doing things in our data
        // We might even change this to add a business to "Changes" not to businesses
        // But we will have to think about that
        business.approved = false;

        await db.collection(`businesses`).doc(uuidv4()).set(business);

        response.status(200).send(business);
    } catch (e) {
        response.status(500).send(`Error: ${e}`);
    }
    return;
});

exports.addApprovedKey = functions.https.onRequest(async (request, response) => {
    var preCheck = await helpers.PreFunctionChecks(request, response, true, true);
    if (preCheck.ret) return;

    var defaultVal = request.body.data.defaultValue;

    try {
        var businesses = await db.collection(`businesses`).get();

        businesses.forEach(async function (business) {
            if (business.data().approved === undefined) {
                await business.ref.update({ approved: defaultVal });
            }
        });

        response.status(200).send(`Businesses successfully updated with approved tag and default val: ${defaultVal}`);
    } catch (e) {
        response.status(500).send(`Error updating businesses: ${e}`);
    }
    return;
});