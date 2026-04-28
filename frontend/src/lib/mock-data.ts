import type { AuditLog, Client, ClientDocument } from "./types";

export const currentUser = {
  id: "user_sarah",
  name: "Sarah Advisor",
  email: "sarah@example.com",
  role: "advisor",
};

export const clients: Client[] = [
  {
    id: "client_jane_doe",
    fullName: "Jane Doe",
    riskProfile: "moderate",
    householdNotes: "Pre-retirement household with an 8-year planning horizon.",
    documentCount: 5,
    lastActivityAt: "Today",
    flaggedIssue: "Equity drift above stated moderate tolerance",
  },
  {
    id: "client_alan_chen",
    fullName: "Alan Chen",
    riskProfile: "aggressive",
    householdNotes: "Technology executive with concentrated employer equity.",
    documentCount: 4,
    lastActivityAt: "Yesterday",
  },
  {
    id: "client_maria_gomez",
    fullName: "Maria Gomez",
    riskProfile: "conservative",
    householdNotes: "Retired client focused on income and capital preservation.",
    documentCount: 6,
    lastActivityAt: "Apr 18",
  },
  {
    id: "client_nina_patel",
    fullName: "Nina Patel",
    riskProfile: "growth",
    householdNotes: "Young professional building first long-term portfolio.",
    documentCount: 3,
    lastActivityAt: "Apr 16",
  },
];

export const documents: ClientDocument[] = [
  {
    id: "doc_q2",
    filename: "Jane_Q2_Portfolio_Report.pdf",
    documentType: "Portfolio review",
    status: "ready",
    chunkCount: 14,
    uploadedAt: "Today",
  },
  {
    id: "doc_q1",
    filename: "Jane_Q1_Portfolio_Report.pdf",
    documentType: "Portfolio review",
    status: "ready",
    chunkCount: 12,
    uploadedAt: "Apr 2",
  },
  {
    id: "doc_risk",
    filename: "Jane_Risk_Profile.pdf",
    documentType: "Risk questionnaire",
    status: "ready",
    chunkCount: 8,
    uploadedAt: "Mar 28",
  },
  {
    id: "doc_notes",
    filename: "Jane_Meeting_Notes_April.docx",
    documentType: "Meeting notes",
    status: "processing",
    chunkCount: 0,
    uploadedAt: "Today",
  },
];

export const auditLogs: AuditLog[] = [
  {
    id: "audit_1",
    advisorName: "Sarah Advisor",
    clientName: "Jane Doe",
    actionType: "Ask question",
    queryText: "Summarize Q1 to Q2 portfolio changes and flag risk issues.",
    retrievedChunkCount: 4,
    status: "success",
    latencyMs: 2310,
    createdAt: "Today 9:42 AM",
  },
  {
    id: "audit_2",
    advisorName: "Sarah Advisor",
    clientName: "Jane Doe",
    actionType: "Generate meeting prep",
    queryText: "Meeting prep using latest portfolio report and risk profile.",
    retrievedChunkCount: 6,
    status: "success",
    latencyMs: 2880,
    createdAt: "Today 9:45 AM",
  },
  {
    id: "audit_3",
    advisorName: "Sarah Advisor",
    clientName: "Maria Gomez",
    actionType: "Ingestion failed",
    queryText: "Unsupported scanned PDF upload.",
    retrievedChunkCount: 0,
    status: "failure",
    latencyMs: null,
    createdAt: "Apr 18 2:13 PM",
  },
];

