<script lang="ts">
  // Help component for explaining how to use the site
</script>

<div class="max-w-4xl mx-auto">
  <div class="bg-white rounded-lg shadow-sm p-8">
    <h1 class="text-3xl font-bold text-[#432874] mb-6">Help & About</h1>

    <!-- About Section -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-[#6133b4] mb-3">What is this?</h2>
      <p class="text-[#4e4a57]">
        Habitica Priority Matrix organizes your Habitica tasks using the Eisenhower Matrix. Tasks are automatically sorted by importance (tags) and urgency (due dates).
      </p>
    </section>

    <!-- Matrix Explained -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-[#6133b4] mb-3">Matrix quadrants</h2>
      <div class="grid grid-cols-2 gap-3">
        <div class="bg-red-100 border-l-4 border-red-500 p-3 rounded">
          <h4 class="font-semibold text-red-800 text-sm">Urgent + Important</h4>
          <p class="text-red-700 text-xs">Do first - early due date + important tag</p>
        </div>
        <div class="bg-blue-100 border-l-4 border-blue-500 p-3 rounded">
          <h4 class="font-semibold text-blue-800 text-sm">Important, Not Urgent</h4>
          <p class="text-blue-700 text-xs">Schedule - later due date + important tag</p>
        </div>
        <div class="bg-yellow-100 border-l-4 border-yellow-500 p-3 rounded">
          <h4 class="font-semibold text-yellow-800 text-sm">Urgent, Not Important</h4>
          <p class="text-yellow-700 text-xs">Delegate - early due date, no important tag</p>
        </div>
        <div class="bg-gray-100 border-l-4 border-gray-500 p-3 rounded">
          <h4 class="font-semibold text-gray-800 text-sm">Not Urgent, Not Important</h4>
          <p class="text-gray-700 text-xs">Eliminate - later due date, no important tag</p>
        </div>
      </div>
    </section>

    <!-- Urgency -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-[#6133b4] mb-3">Tasks marked as urgent</h2>
      <div class="bg-[#f8f7fa] rounded-lg p-4">
        <p class="text-[#4e4a57] mb-3"><strong>How it works:</strong> The app calculates the average due date of all your tasks, then splits them into urgent (before/on average) and not urgent (after average).</p>

        <div class="bg-white rounded p-3 mb-3">
          <h4 class="font-semibold text-[#432874] mb-2">Example:</h4>
          <p class="text-[#4e4a57] text-sm">If you have tasks due Jan 10, Jan 15, Jan 20, and Jan 25:</p>
          <ul class="text-[#4e4a57] text-sm mt-2 space-y-1">
            <li>• Average due date: Jan 17.5</li>
            <li>• <strong>Urgent:</strong> Jan 10, Jan 15 (before/on average)</li>
            <li>• <strong>Not Urgent:</strong> Jan 20, Jan 25 (after average)</li>
          </ul>
        </div>

        <p class="text-[#4e4a57] text-sm"><strong>Note:</strong> Tasks without due dates are never considered urgent. Since daily tasks don't have due dates, no dailies will be marked as urgent.</p>
      </div>
    </section>

    <!-- Mark Important -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-[#6133b4] mb-3">Tasks marked as important</h2>
      <div class="space-y-3">
        <div class="bg-[#f8f7fa] rounded-lg p-4">
          <h4 class="font-semibold text-[#432874] mb-2">In Habitica:</h4>
          <p class="text-[#4e4a57] text-sm">Add "Important" tag to any task</p>
        </div>
        <div class="bg-[#f8f7fa] rounded-lg p-4">
          <h4 class="font-semibold text-[#432874] mb-2">In this app:</h4>
          <p class="text-[#4e4a57] text-sm">Click "+ Add Daily/To-Do" → follow 6 steps → mark "Yes" for important</p>
        </div>
      </div>
    </section>

    <!-- Contact -->
    <section>
      <h2 class="text-2xl font-semibold text-[#6133b4] mb-3">Need help?</h2>
      <div class="bg-[#f8f7fa] rounded-lg p-4">
        <p class="text-[#4e4a57] text-sm mb-2">
          Message me on Habitica: <span class="font-mono text-[#6133b4]">@nie0x6708</span>
        </p>
        <p class="text-[#4e4a57] text-sm">
          Report bugs on <a href="https://github.com/NieTsuki/habitica-priority-matrix/issues" class="text-[#6133b4] hover:underline" target="_blank">GitHub</a>
        </p>
      </div>
    </section>
  </div>
</div>
