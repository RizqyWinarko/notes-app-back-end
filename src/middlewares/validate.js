// 1. Tambahkan export const untuk validasi Body
export const validate = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body, {
    abortEarly: false,
    allowUnknown: false,
    stripUnknown: true
  });

  if (error) return next(error);
  req.validated = value;
  next();
};

// 2. Tambahkan export const baru khusus untuk validasi Query
export const validateQuery = (schema) => (req, res, next) => {
  // Perhatikan: di sini kita memvalidasi req.query, bukan req.body
  const { error, value } = schema.validate(req.query, {
    abortEarly: false,
    allowUnknown: false,
    stripUnknown: true
  });

  if (error) return next(error);
  req.query = value;
  next();
};

// HAPUS baris 'export default validate;' karena kita sudah pakai 'export const' di atas