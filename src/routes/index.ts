export enum Tab {
    Habits = "habits",
    Dailies = "dailies",
    Todos = "todos",
    Rewards = "rewards",
}

export interface ChecklistItem {
    completed: boolean;
    text: string;
    id: string;
}

export interface Group {
    completedBy: Record<string, any>;
    assignedUsers: string[];
}

export interface ToDo {
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
    date?: string;
}
