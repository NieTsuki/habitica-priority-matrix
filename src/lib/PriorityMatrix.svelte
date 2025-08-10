<script lang="ts">
    import { type Task } from "$lib";
    import TaskItem from "./TaskItem.svelte";
    import { TagService } from "./tagService";
    import { onMount } from "svelte";

    interface Props {
        tasks: { [key: string]: Task };
    }

    let { tasks }: Props = $props();

    let importantTagId: string | null = $state(null);
    let urgentImportant = $state<Task[]>([]);
    let notUrgentImportant = $state<Task[]>([]);
    let urgentNotImportant = $state<Task[]>([]);
    let notUrgentNotImportant = $state<Task[]>([]);

    onMount(async () => {
        const tagService = TagService.getInstance();
        importantTagId = await tagService.getImportantTagId();
        categorizeTasks();
    });

    function categorizeTasks() {
        if (!importantTagId) return;

        // Filter tasks that have due dates to calculate the urgency threshold
        const tasksWithDates = Object.values(tasks).filter(task => task.date);

        // Handle edge case: if no tasks have due dates, only categorize by importance
        if (tasksWithDates.length === 0) {
            urgentImportant = [];
            notUrgentImportant = Object.values(tasks).filter(task =>
                task.tags.includes(importantTagId!)
            );
            urgentNotImportant = [];
            notUrgentNotImportant = Object.values(tasks).filter(task =>
                !task.tags.includes(importantTagId!)
            );
            return;
        }

        // Calculate the average due date across all tasks with dates
        // This creates a dynamic urgency threshold that adapts to the user's project timeline
        // - Short-term projects: average will be low, so only recent deadlines are urgent
        // - Long-term projects: average will be high, so tasks due in coming months are urgent
        const averageDueDate = tasksWithDates.reduce((sum, task) => {
            // Normalize to start of day to avoid sub-day precision issues
            const date = new Date(task.date!);
            const normalizedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            return sum + normalizedDate.getTime();
        }, 0) / tasksWithDates.length;

        const sortByDate = (a: Task, b: Task) => {
            if (!a.date && !b.date) return 0;
            if (!a.date) return 1;
            if (!b.date) return -1;
            // Normalize to start of day for consistent sorting
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            const normalizedDateA = new Date(dateA.getFullYear(), dateA.getMonth(), dateA.getDate());
            const normalizedDateB = new Date(dateB.getFullYear(), dateB.getMonth(), dateB.getDate());
            return normalizedDateA.getTime() - normalizedDateB.getTime();
        };

        // Determine if a task is urgent based on whether its due date is earlier than or equal to the average
        // This makes urgency relative to the user's current workload and project timeline
        const isUrgent = (task: Task) => {
            if (!task.date) return false;
            // Normalize to start of day for consistent urgency calculation
            const date = new Date(task.date);
            const normalizedDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
            const taskTime = normalizedDate.getTime();
            const isUrgentResult = taskTime <= averageDueDate;
            return isUrgentResult;
        };

        // Categorize tasks into the four quadrants using the dynamic urgency threshold
        urgentImportant = Object.values(tasks).filter(task =>
            isUrgent(task) && task.tags.includes(importantTagId!)
        ).sort(sortByDate);
        notUrgentImportant = Object.values(tasks).filter(task =>
            !isUrgent(task) && task.tags.includes(importantTagId!)
        ).sort(sortByDate);
        urgentNotImportant = Object.values(tasks).filter(task =>
            isUrgent(task) && !task.tags.includes(importantTagId!)
        ).sort(sortByDate);
        notUrgentNotImportant = Object.values(tasks).filter(task =>
            !isUrgent(task) && !task.tags.includes(importantTagId!)
        ).sort(sortByDate);
    }

    $effect(() => {
        if (importantTagId && Object.keys(tasks).length > 0) {
            categorizeTasks();
        }
    });
</script>

<div class="space-y-4">
    <div class="grid grid-cols-2 gap-4">
        <div class="bg-red-100 border-2 border-red-300 rounded-lg p-3 min-h-[80px]">
            <div class="text-center mb-2">
                <div class="text-xs font-medium text-red-700">Urgent</div>
                <div class="text-xs font-medium text-red-700">Important</div>
            </div>
            <div class="space-y-1">
                {#each urgentImportant as task (task._id)}
                    <TaskItem {task} />
                {/each}
            </div>
        </div>
        <div class="bg-blue-100 border-2 border-blue-300 rounded-lg p-3 min-h-[80px]">
            <div class="text-center mb-2">
                <div class="text-xs font-medium text-blue-700">Not Urgent</div>
                <div class="text-xs font-medium text-blue-700">Important</div>
            </div>
            <div class="space-y-1">
                {#each notUrgentImportant as task (task._id)}
                    <TaskItem {task} />
                {/each}
            </div>
        </div>
        <div class="bg-yellow-100 border-2 border-yellow-300 rounded-lg p-3 min-h-[80px]">
            <div class="text-center mb-2">
                <div class="text-xs font-medium text-yellow-700">Urgent</div>
                <div class="text-xs font-medium text-yellow-700">Not Important</div>
            </div>
            <div class="space-y-1">
                {#each urgentNotImportant as task (task._id)}
                    <TaskItem {task} />
                {/each}
            </div>
        </div>
        <div class="bg-gray-100 border-2 border-gray-300 rounded-lg p-3 min-h-[80px]">
            <div class="text-center mb-2">
                <div class="text-xs font-medium text-gray-700">Not Urgent</div>
                <div class="text-xs font-medium text-gray-700">Not Important</div>
            </div>
            <div class="space-y-1">
                {#each notUrgentNotImportant as task (task._id)}
                    <TaskItem {task} />
                {/each}
            </div>
        </div>
    </div>
</div>
