<script lang="ts">
    // Todos tab component
</script>

<div class="space-y-4">
    <div class="flex items-center justify-between">
        <h2 class="text-xl font-bold text-[#34313a] font-['Roboto_Condensed']">To-Dos</h2>
        <button class="bg-[#6133b4] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#4f2a93] transition-colors cursor-pointer">
            + Add To-Do
        </button>
    </div>

    <div class="space-y-3">
        <div class="flex items-center p-4 bg-[#f9f9f9] rounded-lg">
            <button class="w-6 h-6 border-2 border-[#878190] rounded mr-4 hover:border-[#6133b4] transition-colors cursor-pointer">
                <svg class="h-4 w-4 text-[#878190] m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
            </button>
            <div class="flex-1">
                <h3 class="font-medium text-[#34313a]">Finish project proposal</h3>
                <p class="text-sm text-[#878190]">+5 XP, +3 Gold</p>
            </div>
            <div class="text-sm text-[#878190]">Due tomorrow</div>
        </div>

        <div class="flex items-center p-4 bg-[#f9f9f9] rounded-lg">
            <button class="w-6 h-6 border-2 border-[#878190] rounded mr-4 hover:border-[#6133b4] transition-colors cursor-pointer">
                <svg class="h-4 w-4 text-[#878190] m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
            </button>
            <div class="flex-1">
                <h3 class="font-medium text-[#34313a]">Buy groceries</h3>
                <p class="text-sm text-[#878190]">+2 XP, +1 Gold</p>
            </div>
            <div class="text-sm text-[#878190]">Due Friday</div>
        </div>

        <div class="flex items-center p-4 bg-[#f9f9f9] rounded-lg">
            <button class="w-6 h-6 border-2 border-[#878190] rounded mr-4 hover:border-[#6133b4] transition-colors cursor-pointer">
                <svg class="h-4 w-4 text-[#878190] m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
            </button>
            <div class="flex-1">
                <h3 class="font-medium text-[#34313a]">Call dentist for appointment</h3>
                <p class="text-sm text-[#878190]">+1 XP, +1 Gold</p>
            </div>
            <div class="text-sm text-[#878190]">Due next week</div>
        </div>
    </div>
</div>

<style>
    .todos-container {
        padding: 1rem;
    }
</style>
