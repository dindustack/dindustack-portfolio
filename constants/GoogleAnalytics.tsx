import Script from "next/script";

type GoogleAnalyticsProps = {
    ga_id: string;
};

const GoogleAnalytics = ({ ga_id }: GoogleAnalyticsProps) => (
  <Script
    strategy="afterInteractive"
    src={`https://www.googletagmanager.com/gtag/js?id=${ga_id}`}
    onLoad={() => {
      const win: any = window;
      win.dataLayer = win.dataLayer || [];
      function gtag(...args: (string | Date)[]) {
        win.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", ga_id);
    }}
  />
);

export default GoogleAnalytics;
