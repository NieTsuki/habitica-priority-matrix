<script lang="ts">
    import { onMount } from "svelte";
    import { type Task, TaskService, TaskModal, PriorityMatrix } from "$lib";

    let dailies: { [key: string]: Task } = $state({});
    let loading = $state(true);
    let showModal = $state(false);

    onMount(async () => {
        const taskService = TaskService.getInstance();
        dailies = await taskService.fetchTasks("dailys");
        loading = false;
    });

    function openModal() {
        showModal = true;
    }

    function closeModal() {
        showModal = false;
    }

    function handleTaskCreated(newTask: Task) {
        dailies[newTask.id] = newTask;
    }
</script>

<div class="space-y-4">
    <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold text-[#34313a] font-['Roboto_Condensed']">Dailies</h2>
        <button class="bg-[#6133b4] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#4f2a93] transition-colors cursor-pointer" on:click={openModal}>
            + Add Daily
        </button>
    </div>

    <div class="space-y-3">
        {#if loading}
            <div class="flex justify-center py-8">
                <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-[#6133b4]"></div>
            </div>
        {:else if Object.keys(dailies).length === 0}
            <div class="text-center py-8 text-[#878190]">No dailies found</div>
        {:else}
            <PriorityMatrix tasks={dailies} />
        {/if}
    </div>
</div>

<TaskModal
    showModal={showModal}
    taskType="daily"
    onClose={closeModal}
    onTaskCreated={handleTaskCreated}
/>
