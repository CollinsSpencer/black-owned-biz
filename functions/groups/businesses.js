
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
        var stores = await db.collection(`${state}-${city}`).where("approved", "==", true).get();

        response.send({data: stores});
    } catch (e) {
        response.status(500).send(`Error: ${e}`);
    }
});

exports.addBusiness = functions.https.onRequest((request, response) => {
    var preCheck = await helpers.PreFunctionChecks(request, response, false, false);
    if (preCheck.ret) return;

    var business = request.body.data.business;
    var state = request.body.data.state;
    var city = request.body.data.city;

    try{
        // TODO: conform this to the way we are doing things in our data
        // We might even change this to add a business to "Changes" not to businesses
        // But we will have to think about that
        business.approved = false;
        
        await db.collection(`${state}-${city}`).doc(uuid.uuidv4()).set(business);

        response.status(200).send(business);
    }catch(e){
        response.status(500).send(`Error: ${e}`);
    }
});

exports.approveBusiness = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});