import Habitica from "./habitica";
import { type Task, type CreateTaskData } from "../task";
import { TagService } from "./tagService";

export class TaskService {
    private static instance: TaskService;
    private habitica: Habitica;
    private tagService: TagService;

    private constructor() {
        this.habitica = Habitica.instance!;
        this.tagService = TagService.getInstance();
    }

    static getInstance(): TaskService {
        if (!TaskService.instance) {
            TaskService.instance = new TaskService();
        }
        return TaskService.instance;
    }

    async fetchTasks(type: "dailys" | "todos"): Promise<{ [key: string]: Task }> {
        const res = await this.habitica.call(`https://habitica.com/api/v3/tasks/user?type=${type}`);
        const data = await res?.json();
        return data?.data || {};
    }

    async createTask(taskData: CreateTaskData): Promise<Task | null> {
        try {
            const processedTaskData = { ...taskData };

            if (processedTaskData.tags && processedTaskData.tags.includes("Important")) {
                const importantTagId = await this.tagService.getImportantTagId();
                if (importantTagId) {
                    processedTaskData.tags = processedTaskData.tags.map((tag) =>
                        tag === "Important" ? importantTagId : tag
                    );
                } else {
                    processedTaskData.tags = processedTaskData.tags.filter((tag) => tag !== "Important");
                }
            }

            const res = await this.habitica.call("https://habitica.com/api/v3/tasks/user", "POST", processedTaskData);

            if (res?.ok) {
                const data = await res.json();
                return data.data;
            }
            return null;
        } catch (error) {
            console.error("Error creating task:", error);
            return null;
        }
    }
}
