import cookie from 'js-cookie';

// TODO: config
const GOOGLE_ONLY = false;

const setCookie = (name, value, longExpire) => {
  const expire = (longExpire ? 365 * 24 * 60 : 8 * 60) * 60 * 1000;
  const secure = window.location.protocol.includes('https');
  const date = new Date();
  date.setTime(date.getTime() + expire);
  cookie.set(name, value, {
    path: '/',
    domain: document.domain,
    expires: date,
    secure,
  });
};

const getCookie = cookie.get;
const removeCookie = cookie.remove;
const portalTokenCookieName = 'ft-portaltoken';
const userCookieName = 'ft-user';

const setPortalToken = (value) => setCookie(portalTokenCookieName, value, true);

const setUser = (value) => {
  setPortalToken(value.AuthToken);

  value.Permissions = value.Permissions || [];

  setCookie(
    userCookieName,
    JSON.stringify({
      UserId: value.UserId,
      Username: value.Username,
      AuthToken: value.AuthToken,
      Permissions: value.Permissions.filter((p) =>
        p.toLowerCase().includes('serviceportal')
      ),
    }),
    true
  );
};

const getPortalToken = () => getCookie(portalTokenCookieName);

const removePortalToken = () =>
  removeCookie(portalTokenCookieName, { path: '/', domain: document.domain });

const googleOnly = async () => {
  return GOOGLE_ONLY;
};

export {
  setUser,
  setCookie,
  getCookie,
  getPortalToken,
  setPortalToken,
  removePortalToken,
  googleOnly,
};
