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
      <h2 class="text-2xl font-semibold text-[#6133b4] mb-3">Matrix Quadrants</h2>
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
      <h2 class="text-2xl font-semibold text-[#6133b4] mb-3">Urgency = Due Date</h2>
      <div class="bg-[#f8f7fa] rounded-lg p-4">
        <p class="text-[#4e4a57] mb-2"><strong>Simple rule:</strong> Tasks due before/on the average due date = urgent</p>
        <p class="text-[#4e4a57] text-sm">Example: If average is Jan 15, tasks due Jan 1-15 are urgent, Jan 16+ are not</p>
      </div>
    </section>

    <!-- Mark Important -->
    <section class="mb-8">
      <h2 class="text-2xl font-semibold text-[#6133b4] mb-3">Mark Tasks Important</h2>
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
      <h2 class="text-2xl font-semibold text-[#6133b4] mb-3">Need Help?</h2>
      <div class="bg-[#f8f7fa] rounded-lg p-4">
        <p class="text-[#4e4a57] text-sm mb-2">
          Message me on Habitica: <span class="font-mono text-[#6133b4]">@nie0x6708</span>
        </p>
        <p class="text-[#4e4a57] text-sm">
          Report bugs on <a href="https://github.com/NieTsuki/habitica-priority-matrix/issues" class="text-[#6133b4] hover:underline">GitHub</a>
        </p>
      </div>
    </section>
  </div>
</div>
