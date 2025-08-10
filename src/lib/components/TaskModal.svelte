<script lang="ts">
    import { type Task, type CreateTaskData, TaskService } from "$lib";

        const {
        showModal = false,
        taskType = "todo",
        onClose = () => {},
        onTaskCreated = () => {}
    } = $props<{
        showModal: boolean;
        taskType: "todo" | "daily";
        onClose: () => void;
        onTaskCreated: (task: Task) => void;
    }>();

    let currentStep = $state(1);
    let taskTitle = $state("");
    let taskNotes = $state("");
    let taskChecklist = $state([{ text: "", completed: false }]);
    let taskDifficulty: string | null = $state(null);
    let taskDueDate = $state("");
    let taskImportant = $state(false);
    let isCreating = $state(false);

    // Drag and drop state
    let draggedItem = $state<number | null>(null);
    let draggedOverIndex = $state<number | null>(null);

    function resetForm() {
        currentStep = 1;
        taskTitle = "";
        taskNotes = "";
        taskChecklist = [{ text: "", completed: false }];
        taskDifficulty = null;
        taskDueDate = "";
        taskImportant = false;
        isCreating = false;
        draggedItem = null;
        draggedOverIndex = null;
    }

    function closeModal() {
        onClose();
        resetForm();
    }

    function nextStep() {
        if (currentStep === 1 && taskTitle.trim()) {
            currentStep = 2;
        } else if (currentStep === 2) {
            currentStep = 3;
        } else if (currentStep === 3) {
            currentStep = 4;
        } else if (currentStep === 4 && taskDifficulty !== null) {
            currentStep = 5;
        } else if (currentStep === 5) {
            currentStep = 6;
        }
    }

    function previousStep() {
        if (currentStep > 1) {
            currentStep--;
        }
    }

    function addChecklistItem() {
        taskChecklist = [...taskChecklist, { text: "", completed: false }];
    }

    function removeChecklistItem(index: number) {
        if (taskChecklist.length > 1) {
            taskChecklist = taskChecklist.filter((_, i) => i !== index);
        }
    }

    function updateChecklistItem(index: number, text: string) {
        taskChecklist[index].text = text;
        taskChecklist = [...taskChecklist];
    }

    // Drag and drop functions
    function handleDragStart(e: DragEvent, index: number) {
        draggedItem = index;
        if (e.dataTransfer) {
            e.dataTransfer.effectAllowed = 'move';
        }
    }

    function handleDragOver(e: DragEvent, index: number) {
        e.preventDefault();
        if (draggedItem !== null && draggedItem !== index) {
            draggedOverIndex = index;
        }
    }

    function handleDragLeave() {
        draggedOverIndex = null;
    }

    function handleDrop(e: DragEvent, dropIndex: number) {
        e.preventDefault();
        if (draggedItem !== null && draggedItem !== dropIndex) {
            const newChecklist = [...taskChecklist];
            const [draggedItemData] = newChecklist.splice(draggedItem, 1);
            newChecklist.splice(dropIndex, 0, draggedItemData);
            taskChecklist = newChecklist;
        }
        draggedItem = null;
        draggedOverIndex = null;
    }

    function handleDragEnd() {
        draggedItem = null;
        draggedOverIndex = null;
    }

    async function createTask() {
        if (taskTitle.trim()) {
            isCreating = true;
            const taskService = TaskService.getInstance();
            const newTask: CreateTaskData = {
                text: taskTitle,
                type: taskType,
                priority: Number(taskDifficulty || 1)
            };

            if (taskImportant) {
                newTask.tags = ["Important"];
            }

            if (taskNotes.trim()) {
                newTask.notes = taskNotes;
            }

            if (taskChecklist.length > 1 || (taskChecklist.length === 1 && taskChecklist[0].text.trim())) {
                newTask.checklist = taskChecklist.filter(item => item.text.trim());
            }

            if (taskDueDate) {
                newTask.date = taskDueDate;
            }

            try {
                const createdTask = await taskService.createTask(newTask);

                if (createdTask) {
                    onTaskCreated(createdTask);
                    closeModal();
                } else {
                    console.error("Failed to create task");
                }
            } catch (error) {
                console.error("Error creating task:", error);
            } finally {
                isCreating = false;
            }
        }
    }
</script>

{#if showModal}
    <div class="modal-overlay">
        <div class="modal-content">
            <div class="step-indicator">
                <div class="step {currentStep >= 1 ? 'active' : 'inactive'}">1</div>
                <div class="step {currentStep >= 2 ? 'active' : 'inactive'}">2</div>
                <div class="step {currentStep >= 3 ? 'active' : 'inactive'}">3</div>
                <div class="step {currentStep >= 4 ? 'active' : 'inactive'}">4</div>
                <div class="step {currentStep >= 5 ? 'active' : 'inactive'}">5</div>
                <div class="step {currentStep >= 6 ? 'active' : 'inactive'}">6</div>
            </div>

            {#if currentStep === 1}
                <div class="form-group">
                    <label class="form-label" for="task-title">What is the title of the task?</label>
                    <input
                        id="task-title"
                        type="text"
                        class="form-input"
                        placeholder={`Enter ${taskType} title...`}
                        bind:value={taskTitle}
                    />
                </div>
            {:else if currentStep === 2}
                <div class="form-group">
                    <label class="form-label" for="task-notes">What notes would you like to add?</label>
                    <textarea
                        id="task-notes"
                        class="form-textarea"
                        placeholder={`Enter ${taskType} notes...`}
                        bind:value={taskNotes}
                    ></textarea>
                </div>
            {:else if currentStep === 3}
                <div class="form-group">
                    <label class="form-label">What checklist items do you need?</label>
                    <div class="checklist-container">
                        {#each taskChecklist as item, index (index)}
                            <div
                                class="checklist-item {draggedOverIndex === index ? 'drag-over' : ''} {draggedItem === index ? 'dragging' : ''}"
                                draggable="true"
                                on:dragstart={(e) => handleDragStart(e, index)}
                                on:dragover={(e) => handleDragOver(e, index)}
                                on:dragleave={handleDragLeave}
                                on:drop={(e) => handleDrop(e, index)}
                                on:dragend={handleDragEnd}
                            >
                                <div class="drag-handle">
                                    <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                                        <circle cx="8" cy="8" r="1.5"/>
                                        <circle cx="16" cy="8" r="1.5"/>
                                        <circle cx="8" cy="16" r="1.5"/>
                                        <circle cx="16" cy="16" r="1.5"/>
                                        <circle cx="8" cy="12" r="1.5"/>
                                        <circle cx="16" cy="12" r="1.5"/>
                                    </svg>
                                </div>
                                <div class="checkbox-wrapper">
                                    <input
                                        type="checkbox"
                                        bind:checked={item.completed}
                                        class="checklist-checkbox"
                                    />
                                </div>
                                <input
                                    type="text"
                                    class="checklist-input"
                                    placeholder="Enter checklist item..."
                                    bind:value={item.text}
                                    on:input={(e) => updateChecklistItem(index, (e.target as HTMLInputElement).value)}
                                />
                                {#if taskChecklist.length > 1}
                                    <button
                                        class="remove-item-btn"
                                        on:click={() => removeChecklistItem(index)}
                                        title="Remove item"
                                    >
                                        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                                        </svg>
                                    </button>
                                {/if}
                            </div>
                        {/each}
                        <button class="add-item-btn" on:click={addChecklistItem}>
                            <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/>
                            </svg>
                            <span>New checklist item</span>
                        </button>
                    </div>
                </div>
            {:else if currentStep === 4}
                <div class="form-group">
                    <label class="form-label">How difficult is this task?</label>
                    <select class="form-input" bind:value={taskDifficulty}>
                        <option value="0.1">Trivial</option>
                        <option value="1">Easy</option>
                        <option value="1.5">Medium</option>
                        <option value="2">Hard</option>
                    </select>
                </div>
            {:else if currentStep === 5}
                <div class="form-group">
                    <label class="form-label">When is this task due?</label>
                    <input
                        type="date"
                        class="form-input"
                        bind:value={taskDueDate}
                    />
                </div>
            {:else if currentStep === 6}
                <div class="form-group">
                    <label class="form-label">Is this task important?</label>
                    <div class="radio-group">
                        <label class="radio-option">
                            <input
                                type="radio"
                                name="important"
                                value={true}
                                bind:group={taskImportant}
                                class="radio-input"
                            />
                            <span class="radio-label">Yes</span>
                        </label>
                        <label class="radio-option">
                            <input
                                type="radio"
                                name="important"
                                value={false}
                                bind:group={taskImportant}
                                class="radio-input"
                            />
                            <span class="radio-label">No</span>
                        </label>
                    </div>
                </div>
            {/if}

            <div class="button-group">
                {#if currentStep === 1}
                    <button class="btn btn-secondary" on:click={closeModal}>Cancel</button>
                    <button
                        class="btn btn-primary"
                        on:click={nextStep}
                        disabled={!taskTitle.trim()}
                    >
                        Next
                    </button>
                {:else if currentStep === 2}
                    <div class="flex gap-2">
                        <button class="btn btn-secondary" on:click={closeModal}>Cancel</button>
                        <button class="btn btn-secondary" on:click={previousStep}>Back</button>
                    </div>
                    <button
                        class="btn btn-primary"
                        on:click={nextStep}
                    >
                        Next
                    </button>
                {:else if currentStep === 3}
                    <div class="flex gap-2">
                        <button class="btn btn-secondary" on:click={closeModal}>Cancel</button>
                        <button class="btn btn-secondary" on:click={previousStep}>Back</button>
                    </div>
                    <button
                        class="btn btn-primary"
                        on:click={nextStep}
                    >
                        Next
                    </button>
                {:else if currentStep === 4}
                    <div class="flex gap-2">
                        <button class="btn btn-secondary" on:click={closeModal}>Cancel</button>
                        <button class="btn btn-secondary" on:click={previousStep}>Back</button>
                    </div>
                    <button
                        class="btn btn-primary"
                        on:click={nextStep}
                        disabled={!taskDifficulty}
                    >
                        Next
                    </button>
                {:else if currentStep === 5}
                    <div class="flex gap-2">
                        <button class="btn btn-secondary" on:click={closeModal}>Cancel</button>
                        <button class="btn btn-secondary" on:click={previousStep}>Back</button>
                    </div>
                    <button
                        class="btn btn-primary"
                        on:click={nextStep}
                    >
                        Next
                    </button>
                {:else if currentStep === 6}
                    <div class="flex gap-2">
                        <button class="btn btn-secondary" on:click={closeModal}>Cancel</button>
                        <button class="btn btn-secondary" on:click={previousStep}>Back</button>
                    </div>
                    <button
                        class="btn btn-primary"
                        on:click={createTask}
                        disabled={!taskTitle.trim() || isCreating}
                    >
                        {isCreating ? "Creating..." : `Create ${taskType.charAt(0).toUpperCase() + taskType.slice(1)}`}
                    </button>
                {/if}
            </div>
        </div>
    </div>
{/if}

<style>
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
    }

    .modal-content {
        background: white;
        border-radius: 8px;
        padding: 1.5rem;
        width: 90%;
        max-width: 500px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }

    .step-indicator {
        display: flex;
        justify-content: center;
        margin-bottom: 0.8rem;
    }

    .step {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        margin: 0 0.5rem;
        font-size: 0.875rem;
    }

    .step.active {
        background-color: #6133b4;
        color: white;
    }

    .step.completed {
        background-color: #4f2a93;
        color: white;
    }

    .step.inactive {
        background-color: #e5e7eb;
        color: #6b7280;
    }

    .form-group {
        margin-bottom: 1rem;
    }

    .form-label {
        display: block;
        margin-bottom: 0.5rem;
        font-weight: 500;
        color: #374151;
    }

    .form-input {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        font-size: 1rem;
    }

    .form-input:focus {
        outline: none;
        border-color: #6133b4;
        box-shadow: 0 0 0 3px rgba(97, 51, 180, 0.1);
    }

    .form-textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #d1d5db;
        border-radius: 6px;
        font-size: 1rem;
        min-height: 100px;
        resize: vertical;
    }

    .form-textarea:focus {
        outline: none;
        border-color: #6133b4;
        box-shadow: 0 0 0 3px rgba(97, 51, 180, 0.1);
    }

    .button-group {
        display: flex;
        justify-content: space-between;
        margin-top: 1.5rem;
    }

    .btn {
        padding: 0.375rem 0.75rem;
        border-radius: 6px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s;
    }

    .btn-primary {
        background-color: #6133b4;
        color: white;
        border: none;
    }

    .btn-primary:hover {
        background-color: #4f2a93;
    }

    .btn-secondary {
        background-color: #f3f4f6;
        color: #374151;
        border: 1px solid #d1d5db;
    }

    .btn-secondary:hover {
        background-color: #e5e7eb;
    }

    .btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    }

    .btn-primary:disabled {
        background-color: #9ca3af;
    }

    .btn-primary:disabled:hover {
        background-color: #9ca3af;
    }

    .checklist-container {
        border: 1px solid #e5e7eb;
        border-radius: 8px;
        overflow: hidden;
        background: white;
    }

    .checklist-item {
        display: flex;
        align-items: center;
        padding: 0.75rem;
        border-bottom: 1px solid #f3f4f6;
        background: white;
        transition: background-color 0.2s;
    }

    .checklist-item:last-child {
        border-bottom: none;
    }

    .checklist-item:hover {
        background-color: #f9fafb;
    }

    .checklist-item.dragging {
        opacity: 0.5;
        background-color: #f3f4f6;
    }

    .checklist-item.drag-over {
        background-color: #e0e7ff;
        border-left: 3px solid #6133b4;
    }

    .drag-handle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        color: #9ca3af;
        cursor: grab;
        margin-right: 0.5rem;
        opacity: 0.6;
        transition: opacity 0.2s;
    }

    .drag-handle:hover {
        opacity: 1;
    }

    .drag-handle:active {
        cursor: grabbing;
    }

    .checkbox-wrapper {
        display: flex;
        align-items: center;
        margin-right: 0.75rem;
    }

    .checklist-checkbox {
        width: 18px;
        height: 18px;
        border: 2px solid #d1d5db;
        border-radius: 4px;
        cursor: pointer;
        transition: all 0.2s;
    }

    .checklist-checkbox:checked {
        background-color: #6133b4;
        border-color: #6133b4;
    }

    .checklist-checkbox:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(97, 51, 180, 0.1);
    }

    .checklist-input {
        flex: 1;
        border: none;
        background: transparent;
        padding: 0.25rem 0;
        font-size: 0.875rem;
        color: #374151;
        outline: none;
    }

    .checklist-input:focus {
        outline: none;
    }

    .checklist-input::placeholder {
        color: #9ca3af;
    }

    .remove-item-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        color: #ef4444;
        background: transparent;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        opacity: 0.6;
        transition: all 0.2s;
        margin-left: 0.5rem;
    }

    .remove-item-btn:hover {
        opacity: 1;
        background-color: #fef2f2;
    }

    .add-item-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: 100%;
        padding: 0.75rem;
        background: transparent;
        border: none;
        color: #6b7280;
        font-size: 0.875rem;
        cursor: pointer;
        transition: all 0.2s;
        border-top: 1px solid #f3f4f6;
    }

    .add-item-btn:hover {
        background-color: #f9fafb;
        color: #374151;
    }

    .add-item-btn svg {
        color: #9ca3af;
    }

    .add-item-btn:hover svg {
        color: #6133b4;
    }

    .radio-group {
        display: flex;
        gap: 1rem;
        margin-top: 0.5rem;
    }

    .radio-option {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        cursor: pointer;
        padding: 0.5rem;
        border-radius: 6px;
        transition: background-color 0.2s;
    }

    .radio-option:hover {
        background-color: #f9fafb;
    }

    .radio-input {
        width: 18px;
        height: 18px;
        border: 2px solid #d1d5db;
        border-radius: 50%;
        cursor: pointer;
        transition: all 0.2s;
        appearance: none;
        position: relative;
    }

    .radio-input:checked {
        border-color: #6133b4;
        background-color: #6133b4;
    }

    .radio-input:checked::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 8px;
        height: 8px;
        background-color: white;
        border-radius: 50%;
    }

    .radio-input:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(97, 51, 180, 0.1);
    }

    .radio-label {
        font-size: 0.875rem;
        color: #374151;
        font-weight: 500;
    }
</style>
