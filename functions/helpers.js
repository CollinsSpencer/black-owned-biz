exports.GetUserId = async (auth) => {
  try {
    console.log(auth.split('Bearer ')[1]);
    const decodedIdToken = await admin
      .auth()
      .verifyIdToken(auth.split('Bearer ')[1]);
    return decodedIdToken.user_id;
  } catch (err) {
    console.error(err);
    return undefined;
  }
};

exports.SetCorsHeaders = (response) => {
  // Send response to OPTIONS requests
  response.set('Access-Control-Allow-Origin', '*');
  response.set(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization',
  );
  response.set(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS',
  );
  response.set('Access-Control-Allow-Credentials', 'true');
};

exports.PreFunctionChecks = async (request, response, checkAuth, checkAdmin) => {
  const result = { ret: false, userId: undefined };

  this.SetCorsHeaders(response);
  if (request.method === 'OPTIONS') {
    response.status(204).send('');
    result.ret = true;
    return result;
  }
  if (request.method !== 'POST') {
    response
      .status(400)
      .send(
        `Request must be 'POST', but received request was of type ${request.method}`,
      );
    result.ret = true;
    return result;
  }

  const userId = await helpers.GetUserId(request.headers.authorization);
  result.userId = userId;
  if (checkAuth) {
    // Check to make sure user is authorized
    if (userId === undefined || userId === null) {
      response.status(403).send('Unauthorized');
      result.ret = true;
      return result;
    }
    result.ret = false;
  }

  if (checkAdmin) {
    const user = await db.collection('users').doc(userId).get();
    if (!user.exists || user.data().role !== 'admin') {
      response
        .status(500)
        .send(`User is not admin and so can't perform this operation.`);
      result.ret = true;
      return result;
    }
    result.ret = false;
  }

  return result;
};
