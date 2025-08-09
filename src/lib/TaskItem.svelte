<script lang="ts">
    import { formatDueDate } from "./utils";
    import { type Task } from "./index";

    const { task } = $props<{ task: Task }>();
</script>

<div class="flex bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-4 items-center justify-between">
    <div class="flex items-center">
        <button
            class="w-6 h-6 border-2 border-[#878190] rounded mr-4 hover:border-[#6133b4] transition-colors cursor-pointer {task.completed ? 'bg-[#6133b4] border-[#6133b4]' : ''}"
        >
            {#if task.completed}
                <svg class="h-4 w-4 text-white m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
            {:else}
                <svg class="h-4 w-4 text-[#878190] m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
            {/if}
        </button>

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
