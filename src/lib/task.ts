export interface ChecklistItem {
    completed: boolean;
    text: string;
    id: string;
}

export interface Group {
    completedBy: Record<string, any>;
    assignedUsers: string[];
}

export interface Task {
    _id: string;
    type: string;
    text: string;
    notes: string;
    tags: string[];
    value: number;
    priority: number;
    attribute: string;
    challenge: Record<string, any>;
    group: Group;
    reminders: any[];
    byHabitica: boolean;
    completed: boolean;
    collapseChecklist: boolean;
    checklist: ChecklistItem[];
    createdAt: string;
    updatedAt: string;
    userId: string;
    id: string;
    date?: string; // Only available for todos
    startDate?: string; // Only available for dailies
}

export interface CreateTaskData {
    text: string;
    type: string;
    priority: number;
    notes?: string;
    checklist?: Array<{ text: string; completed: boolean }>;
    date?: string; // Only for todos
    startDate?: string; // Only for dailies
    tags?: string[];
}

export type TaskType = "daily" | "todo";
