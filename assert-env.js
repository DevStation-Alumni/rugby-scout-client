const required = [
  'DEV_API_URL',
];

try {
  required.forEach(key => {
    if (!process.env[key])
      throw new Error(`ENVIRONMENT ERROR: Rugby Scout requires process.env.${key} to be set`);
  });
} catch (e) {
  console.error(e.message);
  process.exit(1);
}