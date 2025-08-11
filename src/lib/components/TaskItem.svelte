<script lang="ts">
    import { type Task } from "$lib";
    import { formatDueDate } from "$lib/utils";

    const { task } = $props<{ task: Task }>();
</script>

<div class="flex bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-4 items-center justify-between gap-2">
    <div class="flex items-center grow">
        <div class="space-y-2 w-full">
            <h3 class="font-medium text-gray-800 text-sm {task.completed ? 'line-through text-gray-500' : ''}">{task.text}</h3>

            {#if task.notes}
                <p class="text-xs text-gray-600 break-all">
                    {task.notes.length > 128 ? task.notes.slice(0, 128) + '...' : task.notes}
                </p>
            {/if}
        </div>
    </div>

    <div class="text-sm text-[#878190] whitespace-nowrap">
        {#if task.date}
            {formatDueDate(task.date)}
        {/if}
    </div>
</div>
