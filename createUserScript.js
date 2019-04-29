const util = require('util');
const exec = util.promisify(require('child_process').exec);
const CUSTOMER_ADMIN_USERNAME = '';
const CUSTOMER_ADMIN_PASSWORD = '';
const SSO_URL = '';

createUser();

async function createUser() {
  const SSO_TOKEN = await getAccessToken();
  await createSsoUser(SSO_TOKEN);
}

async function createSsoUser(TOKEN) {
  const COMMAND = `curl -k ${SSO_URL}/auth/admin/realms/openshift/users -X POST -d @./userConfig.json -H "Content-Type: application/json" -H "Authorization: bearer ${TOKEN}"`;
  const output = await exec(COMMAND);
  return output;
}

async function getAccessToken() {
  const COMMAND = `curl -k ${SSO_URL}/auth/realms/openshift/protocol/openid-connect/token -X POST -d "username=${CUSTOMER_ADMIN_USERNAME}&password=${CUSTOMER_ADMIN_PASSWORD}&client_id=admin-cli&grant_type=password"`;
  const output = await exec(COMMAND);
  return JSON.parse(output.stdout)["access_token"];
}
