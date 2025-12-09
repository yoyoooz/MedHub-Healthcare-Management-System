// This file configures the initialization of Sentry on the client.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://acc0a7805b8baeb8831ba84d19fc25ec@o4510324631339008.ingest.us.sentry.io/4510505043427328",

  integrations: [
    Sentry.replayIntegration(),
  ],

  tracesSampleRate: 1,

  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  sendDefaultPii: true,
});

// ❌ REMOVE THIS LINE COMPLETELY
// export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;

// Nothing needs to be exported anymore
