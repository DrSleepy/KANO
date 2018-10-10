export const createContact = async (req, res, next) => {
  const response = { ok: false, errors: [], data: null };

  // code for adding to database here

  response.ok = true;
  res.status(200).json(response);
};
