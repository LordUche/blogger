export const respondWith = (res, statusCode, payload) => {
  return res.status(statusCode).json(payload);
};

export const asyncWrapper = handler => {
  return async (req, res) => {
    try {
      await handler(req, res);
    } catch (e) {
      res.status(500).json({ error: e.message });
    }
  };
};
