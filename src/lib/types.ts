export type UserRole = "advisor" | "admin";

export type ClientRiskProfile =
  | "conservative"
  | "moderate"
  | "growth"
  | "aggressive";

export type DocumentStatus = "processing" | "ready" | "failed";

export type Client = {
  id: string;
  fullName: string;
  riskProfile: ClientRiskProfile;
  householdNotes: string;
  documentCount: number;
  lastActivityAt: string;
  flaggedIssue?: string;
};

export type ClientDocument = {
  id: string;
  filename: string;
  documentType: string;
  status: DocumentStatus;
  chunkCount: number;
  uploadedAt: string;
  failureReason?: string;
};

export type AuditLog = {
  id: string;
  advisorName: string;
  clientName: string;
  actionType: string;
  queryText: string;
  retrievedChunkCount: number;
  status: "success" | "failure";
  latencyMs: number | null;
  createdAt: string;
};

