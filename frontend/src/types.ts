/*
 * Common types, should be kept up to date with backend types
 */

export type OdhApplication = {
  metadata: {
    name: string;
  };
  spec: {
    displayName: string;
    provider: string;
    description: string;
    route: string | null;
    routeNamespace: string | null;
    routeSuffix: string | null;
    serviceName: string | null;
    endpoint: string | null;
    link: string | null;
    img: string;
    docsLink: string;
    getStartedLink: string;
    category: string;
    support: string;
    quickStart: string | null;
    comingSoon: boolean | null;
    isEnabled: boolean | null;
    kfdefApplications: string[];
    csvName: string;
    enable?: {
      title: string;
      actionLabel: string;
      description?: string;
      variables?: { [key: string]: string };
      variableDisplayText?: { [key: string]: string };
      variableHelpText?: { [key: string]: string };
      validationSecret: string;
      validationJob: string;
      validationConfigMap?: string;
    };
    featureFlag?: string;
  };
};

export enum OdhDocumentType {
  Documentation = 'documentation',
  HowTo = 'how-to',
  QuickStart = 'quickstart',
  Tutorial = 'tutorial',
}

export type OdhDocument = {
  metadata: {
    name: string;
    type: string;
  };
  spec: {
    displayName: string;
    appName?: string;
    provider?: string;
    description: string;
    url: string;
    img?: string;
    icon?: string;
    durationMinutes?: number;
    markdown?: string;
    featureFlag?: string;
  };
};

export type OdhGettingStarted = {
  appName: string;
  markdown: string;
};

export type BuildStatus = {
  name: string;
  status: string;
  timestamp: string;
};