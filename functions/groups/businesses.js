exports.getBusinesses = functions.https.onRequest(async (request, response) => {
  const preCheck = await helpers.PreFunctionChecks(
    request,
    response,
    false,
    false,
  );
  if (preCheck.ret) return;

  const { state, city, category } = request.body.data;

  try {
    let stores = db.collection(`businesses`);
    if (state) {
      stores = stores.where('state_key', 'array-contains', state);
    }
    // Since firebase does not allow multiple array-contains filters on a single call, we cannot filter for stores until later
    if (category) {
      stores = stores.where('category_key', '==', category);
    }

    stores = await stores.where('approved', '==', true).get();
    const result = [];
    stores.forEach((store) => {
      const storeWithId = store.data();
      storeWithId.id = store.id;
      result.push(storeWithId);
    });

    // Filter for city now
    let returnStores = result;
    if (city) {
      returnStores = result.filter((s) => s.city_key.includes(city));
    }

    response.send({ data: returnStores });
  } catch (e) {
    response.status(500).send(`Error: ${e}`);
  }
});

exports.addBusiness = functions.https.onRequest(async (request, response) => {
  const preCheck = await helpers.PreFunctionChecks(
    request,
    response,
    false,
    false,
  );
  if (preCheck.ret) return;

  const { business } = request.body.data;

  try {
    // TODO: conform this to the way we are doing things in our data
    // We might even change this to add a business to "Changes" not to businesses
    // But we will have to think about that
    business.approved = false;
    business.lastUpdated = new Date(
      Date.now() + new Date().getTimezoneOffset() * 60000,
    );

    await db.collection(`businesses`).add(business);

    response.status(200).send({ data: business });
  } catch (e) {
    response.status(500).send(`Error: ${e}`);
  }
});

exports.addApprovedKey = functions.https.onRequest(
  async (request, response) => {
    const preCheck = await helpers.PreFunctionChecks(
      request,
      response,
      true,
      true,
    );
    if (preCheck.ret) return;

    const defaultVal = request.body.data.defaultValue;

    try {
      const businesses = await db.collection(`businesses`).get();

      businesses.forEach(async (business) => {
        if (business.data().approved === undefined) {
          await business.ref.update({ approved: defaultVal });
        }
      });

      response
        .status(200)
        .send(
          `Businesses successfully updated with approved tag and default val: ${defaultVal}`,
        );
    } catch (e) {
      response.status(500).send(`Error updating businesses: ${e}`);
    }
  },
);

exports.updateCityAndStateKeys = functions.https.onRequest(
  async (request, response) => {
    const preCheck = await helpers.PreFunctionChecks(
      request,
      response,
      false,
      false,
    );
    if (preCheck.ret) return;

    try {
      const businesses = await db.collection(`businesses`).get();

      businesses.forEach(async (business) => {
        const businessObj = business.data();
        if (typeof businessObj.city_key === 'string') {
          await business.ref.update({ city_key: [businessObj.city_key] });
        }

        if (typeof businessObj.state_key === 'string') {
          await business.ref.update({ state_key: [businessObj.state_key] });
        }
      });

      response
        .status(200)
        .send(`Businesses keys successfully changed to be arrays.`);
    } catch (e) {
      response.status(500).send(`Error updating businesses: ${e}`);
    }
  },
);
