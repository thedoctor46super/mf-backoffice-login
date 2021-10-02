import axios from 'axios';
import { getPortalToken } from '../scripts/utils';

// TODO: config
const PRISMA_URL = 'https://patrik-staging.ft-crm.com/prisma-api';
const CRM_API_URL = 'https://patrik-staging.ft-crm.com/crm-api';

async function loginAdminCaptcha({ username, password, recaptchaToken }) {
  return axios.post(`${PRISMA_URL}/Authentication/LoginAdminCaptcha`, {
    Username: username,
    Password: password,
    RecaptchaToken: recaptchaToken,
  });
}

async function googleLogin(gToken) {
  return axios.post(`${CRM_API_URL}/Authentication/GoogleLogin`, {
    gToken,
  });
}

async function validateToken() {
  return axios.post(
    `${PRISMA_URL}/Authentication/ValidateAdminToken`,
    {},
    {
      headers: {
        authtoken: getPortalToken(),
      },
    }
  );
}

export { loginAdminCaptcha, googleLogin, validateToken };
