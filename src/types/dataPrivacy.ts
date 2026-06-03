export type DataPrivacyState = {
  autoBackup: boolean;
  gdpr: boolean;
  localRules: boolean;
  restrictExports: boolean;
  managerView: boolean;
  backupFrequency: string;
  exportModule: string;
};

export type DataPrivacyToggleKeys =
  | "autoBackup"
  | "gdpr"
  | "localRules"
  | "restrictExports"
  | "managerView";