<script lang="ts">
    import { type Task } from "$lib";
    import { formatDueDate } from "$lib/utils";

    const { task } = $props<{ task: Task }>();
</script>

<div class="flex bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-4 items-center justify-between">
    <div class="flex items-center">
        <div class="space-y-2">
            <h3 class="font-medium text-gray-800 text-sm {task.completed ? 'line-through text-gray-500' : ''}">{task.text}</h3>
        </div>
    </div>

    <div class="text-sm text-[#878190]">
        {#if task.date}
            {formatDueDate(task.date)}
        {/if}
    </div>
</div>
