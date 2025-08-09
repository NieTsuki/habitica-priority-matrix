<script lang="ts">
    import { onMount } from "svelte";
    import Habitica from "$lib/habitica";
    import { formatDueDate } from "$lib/utils";
    import { type ToDo } from "./index";

    let todos: { [key: string]: ToDo } = $state({});
    let loading = $state(true);

    onMount(async () => {
        const habitica = Habitica.instance;
        const res = await habitica?.call("https://habitica.com/api/v3/tasks/user?type=todos");
        const data = await res?.json();

        if (data) {
            todos = data.data;
        }

        loading = false;
    });
</script>

<style>
    .todos-container {
        padding: 1rem;
    }
</style>

<div class="space-y-4">
    <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold text-[#34313a] font-['Roboto_Condensed']">To-Dos</h2>
        <button class="bg-[#6133b4] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#4f2a93] transition-colors cursor-pointer">
            + Add To-Do
        </button>
    </div>

    <div class="space-y-3">
        {#if loading}
            <div class="flex justify-center py-8">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6133b4]"></div>
            </div>
        {:else if Object.keys(todos).length === 0}
            <div class="text-center py-8 text-[#878190]">No todos found</div>
        {:else}
            {#each Object.values(todos) as todo (todo.id)}
                <div class="flex bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden p-4 items-center justify-between">
                    <div class="flex items-center">
                        <button class="w-6 h-6 border-2 border-[#878190] rounded mr-4 hover:border-[#6133b4] transition-colors cursor-pointer">
                            <svg class="h-4 w-4 text-[#878190] m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                            </svg>
                        </button>

                        <div class="space-y-2">
                            <h3 class="font-medium text-gray-800 text-sm">{todo.text}</h3>
                        </div>
                    </div>

                    <div class="text-sm text-[#878190]">
                        {#if todo.date}
                            {formatDueDate(todo.date)}
                        {:else}
                            No due date
                        {/if}
                    </div>
                </div>
            {/each}
        {/if}
    </div>
</div>
