let host = (typeof process.env.npm_config_host) === 'undefined' ? 'https://qa-lab4.finesource.org' : process.env.npm_config_host;
let domainUUID = (typeof process.env.npm_config_domain_uuid) === 'undefined' ? '10b80601-3225-4928-b346-25eda1f3f51e' : process.env.npm_config_domain_uuid;
let email = (typeof process.env.npm_config_email) === 'undefined' ? 'qa.staging.inbound4@outlook.com' : process.env.npm_config_email;
let domain = (typeof process.env.npm_config_domain) === 'undefined' ? 'tests.ci' : process.env.npm_config_domain;
Object.assign(global, {
  BASE_URL: host,
  WEBCHAT_CLIENT_URL: 'https://www.pingodoce.pt',
  WEBCHAT_IFRAME_URL: host + '/webchat_public/build/webchat.html',
  WEBCHAT_DOMAIN: domainUUID,
  WEBCHAT_SERVER: host + ':443/poll',
  TICKET_COUNTER: host + '/poll/ticket-main-service/tickets/counters/get',
  EMAIL: email,
  DOMAIN: domain,
  QA_API_KEY: 'kDsYFK0YuYM1jCRl94ruLAO#BESTZ7?MhD!'
});
