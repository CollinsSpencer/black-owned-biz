change = {
  type: 'EDIT', // Probably ADD, EDIT, REMOVE
  key: 'Name', // This will be the key to the property that the change deals with on the business object, if we are adding we might just leave this blank
  oldValue: 'Old Name', // Name before suggested change
  newValue: 'New Name', // New name proposed
  status: 'pending',
  city: 'Lincoln,NE',
  timestamp: 'date', // Time change was proposed
};

exports.addChange = functions.https.onRequest(async (request, response) => {
  const preCheck = await helpers.PreFunctionChecks(
    request,
    response,
    false,
    false,
  );
  if (preCheck.ret) return;

  try {
    // TODO: Validate the change object is correct and add it to the change collection
  } catch (e) {
    response.status(500).send(`Error: ${e}`);
  }
});

exports.approveChange = functions.https.onRequest(async (request, response) => {
  const preCheck = await helpers.PreFunctionChecks(
    request,
    response,
    true,
    true,
  );
  if (preCheck.ret) return;

  try {
    // TODO: Ensure the moderator can moderator the change due to its location
    // If they can apply the change to the correct place and set status to approved
    // In the future we will also add a reference to this change to the moderator object
  } catch (e) {
    response.status(500).send(`Error: ${e}`);
  }
});

exports.declineChange = functions.https.onRequest(async (request, response) => {
  const preCheck = await helpers.PreFunctionChecks(
    request,
    response,
    true,
    true,
  );
  if (preCheck.ret) return;

  try {
    // TODO: Ensure the moderator can moderator the change due to its location
    // If they can set status to denied
    // In the future we will also add a reference to this change to the moderator object
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
  const preCheck = await helpers.PreFunctionChecks(
    request,
    response,
    true,
    true,
  );
  if (preCheck.ret) return;

  try {
    // TODO: Get all the changes for a moderator filtering on the cities/states
    // where this moderator has admin rights
    // Possibly do other filtering here
  } catch (e) {
    response.status(500).send(`Error: ${e}`);
  }
});
