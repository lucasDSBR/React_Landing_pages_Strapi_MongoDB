module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e3ae860974aa969d285cdc0f200db851'),
  },
});
