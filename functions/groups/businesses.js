
exports.getBusinesses = functions.https.onRequest(async (request, response) => {
    var state = request.body.data.state;
    var city = request.body.data.city;

    try {
        var stores = await db.collection(`${state}-${city}`).where("approved", "==", true).get();

        response.send({data: stores});
    } catch (e) {
        response.status(500).send(`Error: ${e}`);
    }
});

exports.addBusiness = functions.https.onRequest((request, response) => {
    var business = request.body.data.business;
    var state = request.body.data.state;
    var city = request.body.data.city;

    try{
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