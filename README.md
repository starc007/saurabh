# Portfolio Website

## Browser analytics

Tracwell is initialized once after browser mount from the root layout, following
the [Next.js guide](https://tracwell.app/docs/frameworks/nextjs). It runs only in
production builds; `npm run dev` does not collect analytics. No additional
environment variables are required. The public project key is in
`utils/analytics.ts`, with Product mode, granted consent, and Do Not Track enabled.

The SDK handles initial page views and History API navigation automatically.
`project_filter_applied` records a committed project category change with
`category` and `result_count`, excluding the initial default and reselection.
No custom event properties contain personal data.

This portfolio has no sign-in/logout or consent UI. Visitors remain anonymous
with SDK-managed Product mode persistence. If authentication is added, identify
users with opaque internal IDs and reset on logout. If a consent flow is added,
forward its saved choice and changes to the existing client's `setConsent()`.
External booking and resume links do not expose successful completion here and
are not recorded as completed bookings or downloads.
