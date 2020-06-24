/**
 * User object shape:
 * {
 *  role: user, admin, pending, god -> helps define permissions
 *  cities: [city1, city2] -> Shows what cities they can moderate. Most granulate
 *  states: [NE, IA] -> Shows what states they can moderate. Can do whole state if this is listed
 *  change_history: Future link to all their change approves and deletes.
 *  other_info: We might want to add other info, like name etc, but that isn't necessary to start
 * }
 */

exports.addUser = functions.https.onRequest(async (request, response) => {
    // PreFunctionChecks handles a bunch of CORS, verifying auth, etc.
    // It also returns the userId if one exists base on the auth token
    var preCheck = await helpers.PreFunctionChecks(request, response, true, false);
    if (preCheck.ret) return;
    
    // Grab data from the request
    // Data is always in the request.body.data.yourDataField sub-object
    var userObj = request.body.data.user;

    try {
        // Actual work is done in the try catch to keep things safe
        // All firebase stuff is the same as normal js
        await db.collection("users").doc(userId).set(userObj);
        var result = await helpers.GetUserObject(userId);

        response.send({data: result});
    } catch (e) {
        response.status(500).send(`Error: ${e}`);
    }
});

exports.requestModeratorStatus = functions.https.onRequest(async (request, response) => {
    var preCheck = await helpers.PreFunctionChecks(request, response, true, false);
    if (preCheck.ret) return;

    try {
        // TODO: Basically just set the role property on the user object to "pending"
        // use the preCheck.userId to get the right user to change
    } catch (e) {
        response.status(500).send(`Error: ${e}`);
    }
});

exports.approveModeratorStatus = functions.https.onRequest(async (request, response) => {
    var preCheck = await helpers.PreFunctionChecks(request, response, true, true);
    if (preCheck.ret) return;

    try {
        // TODO: Check that the moderator who is approving has moderator rights
        // in the city/state the requesting moderator wants to be in
        // Could be good to add the checkModeratorRegion functionality to helpers.js
        // as it will be reused
        // Then switch the requesting moderator role to admin
    } catch (e) {
        response.status(500).send(`Error: ${e}`);
    }
});