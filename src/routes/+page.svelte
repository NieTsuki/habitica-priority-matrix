<script lang="ts">
  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import Habitica from "$lib/habitica";

  let selectedTab = $state("habits");

  function selectTab(tab: string) {
    selectedTab = tab;
  }

  onMount(() => {
    if (!Habitica.instance) {
      goto("/login");
    }
  });
</script>

<!-- Top Navigation Bar -->
<nav class="bg-[#432874] text-white shadow-lg">
  <div class="flex justify-between items-center h-16 px-4">
    <!-- Left side - Logo and Menu -->
    <div class="flex items-center space-x-4">
      <div class="flex items-center space-x-4">
        <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="fill-white">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M31.62 28.86c-.32-.706-1.057-1.048-1.538-.706-.48.341-1.147.393-1.78.24-.633-.153-.753-1.604-.616-3.278.136-1.673.363-2.318.506-2.925.162-.61.877-.562.962-.084.086.479.582.479 1.307-.391.724-.87.617-3.409-.218-5.474-.836-2.065.326-1.865.664-1.66.337.205.544-.102.462-1.28-.082-1.178-1.166-2.098-2.039-2.663-.873-.564-1.936-1.186-1.911-2.697.025-1.511 2.08-1.464 2.358-1.439.279.025.815-.093.506-1.663-.31-1.57-1.43-1.869-2.133-1.826-.703.042-1.177.428-2.17.053-.995-.376-1.655-.23-2.58-.023-.926.206-2.138.776-3.646 1.183-.795.219-1.064.274-1.93.288-.532.008-.755.653-.043 1.444.563.643 1.839.814 2.606.707.494-.07.608.258.563.74a8.013 8.013 0 0 0-.01 1.795c.08.6.18 1.62-.103 2.286-.14.326-.545.677-.98.653-.565-.034-1.022-.7-1.414-1.49-.825-1.662-1.793-2.014-5.404-3.535-3.248-1.367-5.007-3.5-6.096-4.874-.969-1.217-1.939-.756-1.85.342.07.852.592 3.604 1.912 5.257 1.623 2.525 4.128 3.67 7.013 3.895.755.06 1.226.208 1.29.553.095.735-.622 1.244-1.959 1.09-1.336-.157-1.907.087-1.641.848.85 1.79 2.809 1.869 3.623 1.942.275.05 1.246 0 1.764.143.605.166.735 1.005-.14 1.459-1.558.76-2.237 1.391-3.025 2.83-.595 1.13-1.108 3.022-.574 5.745.513 2.648-3.337 2.733-5 2.357-.716-.151-1.47-1.512.287-2.65 1.421-.922 1.708-1.49 1.645-2.657-.074-1.36-.824-1.458-.822-2.64v-2.82a.435.435 0 0 0-.435-.435H7.698a.435.435 0 0 1-.435-.434v-1.7a.435.435 0 0 0-.435-.435H5.501a.435.435 0 0 1-.435-.435v-1.524a.435.435 0 0 0-.435-.435H3.015a.435.435 0 0 1-.435-.435v-1.603a.435.435 0 0 0-.435-.434H.435a.435.435 0 0 0-.435.434v1.705c0 .24.195.435.435.435h1.62c.24 0 .435.195.435.435v6.076c0 .241.195.435.435.435h1.71c.241 0 .436.196.436.435v1.988c0 .24.195.434.435.434h2.402c.734-.052.862.934.854 1.286-.016.803-.923 1.06-1.352 1.395-1.145.884-2.031 1.783-1.513 3.512l.013.036c.945 2.007 3.542 1.8 5.183 1.8h10.326c.584 0 1.184.135 1.046-.545-.136-.68-.425-1.61-1.265-1.61-.84 0-.703.467-1.524.228-.821-.238-.822-1.348.411-3.279 1.276-1.649 3.46-1.524 4.781-.358 1.32 1.166.93 3.191.653 4.354-.158.82.218 1.224.669 1.213h5.242c.806-.014.647-.556.185-1.614h.003z"></path>
        </svg>

        <a href="https://habitica.com/" class="text-xl font-bold font-['Roboto_Condensed']">Go to Habitica</a>
      </div>
    </div>

    <!-- Right side - User info and notifications -->
    <div class="flex items-center space-x-4">
      <button class="text-white p-2 cursor-pointer text-sm">Log Out</button>
    </div>
  </div>
</nav>

<!-- Main Layout -->
<div class="flex h-screen bg-[#f9f9f9]">
  <!-- Main Content Area -->
  <div class="flex-1">
    <!-- Task Management Interface -->
    <div>
      <!-- Tab Headers -->
      <div class="border-b border-[#edecee]">
        <div class="flex">
          <button
            onclick={() => selectTab('habits')}
            class="px-6 py-4 text-sm font-medium transition-colors {selectedTab === 'habits' ? 'text-[#6133b4] border-b-2 border-[#6133b4]' : 'text-[#4e4a57] hover:text-[#6133b4]'}"
          >
            Habits
          </button>
          <button
            onclick={() => selectTab('dailies')}
            class="px-6 py-4 text-sm font-medium transition-colors {selectedTab === 'dailies' ? 'text-[#6133b4] border-b-2 border-[#6133b4]' : 'text-[#4e4a57] hover:text-[#6133b4]'}"
          >
            Dailies
          </button>
          <button
            onclick={() => selectTab('todos')}
            class="px-6 py-4 text-sm font-medium transition-colors {selectedTab === 'todos' ? 'text-[#6133b4] border-b-2 border-[#6133b4]' : 'text-[#4e4a57] hover:text-[#6133b4]'}"
          >
            To-Dos
          </button>
          <button
            onclick={() => selectTab('rewards')}
            class="px-6 py-4 text-sm font-medium transition-colors {selectedTab === 'rewards' ? 'text-[#6133b4] border-b-2 border-[#6133b4]' : 'text-[#4e4a57] hover:text-[#6133b4]'}"
          >
            Rewards
          </button>
        </div>
      </div>

      <!-- Tab Content -->
      <div class="p-6">
        {#if selectedTab === 'habits'}
          <!-- Habits Tab -->
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h2 class="text-xl font-bold text-[#34313a] font-['Roboto_Condensed']">Habits</h2>
              <button class="bg-[#6133b4] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#4f2a93] transition-colors">
                + Add Habit
              </button>
            </div>

            <!-- Habit Items -->
            <div class="space-y-3">
              <div class="flex items-center p-4 bg-[#f9f9f9] rounded-lg">
                <div class="flex space-x-2 mr-4">
                  <button class="w-8 h-8 bg-[#24cc8f] rounded-full flex items-center justify-center text-white hover:bg-[#1ca372] transition-colors">
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                  </button>
                  <button class="w-8 h-8 bg-[#ff6165] rounded-full flex items-center justify-center text-white hover:bg-[#de3f3f] transition-colors">
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                    </svg>
                  </button>
                </div>
                <div class="flex-1">
                  <h3 class="font-medium text-[#34313a]">Exercise for 30 minutes</h3>
                  <p class="text-sm text-[#878190]">+2 XP, +1 Gold</p>
                </div>
                <div class="text-sm text-[#878190]">+2</div>
              </div>

              <div class="flex items-center p-4 bg-[#f9f9f9] rounded-lg">
                <div class="flex space-x-2 mr-4">
                  <button class="w-8 h-8 bg-[#24cc8f] rounded-full flex items-center justify-center text-white hover:bg-[#1ca372] transition-colors">
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                  </button>
                  <button class="w-8 h-8 bg-[#ff6165] rounded-full flex items-center justify-center text-white hover:bg-[#de3f3f] transition-colors">
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                    </svg>
                  </button>
                </div>
                <div class="flex-1">
                  <h3 class="font-medium text-[#34313a]">Read a book</h3>
                  <p class="text-sm text-[#878190]">+1 XP, +1 Gold</p>
                </div>
                <div class="text-sm text-[#878190]">+1</div>
              </div>

              <div class="flex items-center p-4 bg-[#f9f9f9] rounded-lg">
                <div class="flex space-x-2 mr-4">
                  <button class="w-8 h-8 bg-[#24cc8f] rounded-full flex items-center justify-center text-white hover:bg-[#1ca372] transition-colors">
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                    </svg>
                  </button>
                  <button class="w-8 h-8 bg-[#ff6165] rounded-full flex items-center justify-center text-white hover:bg-[#de3f3f] transition-colors">
                    <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"/>
                    </svg>
                  </button>
                </div>
                <div class="flex-1">
                  <h3 class="font-medium text-[#34313a]">Drink 8 glasses of water</h3>
                  <p class="text-sm text-[#878190]">+1 XP, +1 Gold</p>
                </div>
                <div class="text-sm text-[#878190]">+3</div>
              </div>
            </div>
          </div>
        {:else if selectedTab === 'dailies'}
          <!-- Dailies Tab -->
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h2 class="text-xl font-bold text-[#34313a] font-['Roboto_Condensed']">Dailies</h2>
              <button class="bg-[#6133b4] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#4f2a93] transition-colors">
                + Add Daily
              </button>
            </div>

            <!-- Daily Items -->
            <div class="space-y-3">
              <div class="flex items-center p-4 bg-[#f9f9f9] rounded-lg">
                <button class="w-6 h-6 border-2 border-[#878190] rounded mr-4 hover:border-[#6133b4] transition-colors">
                  <svg class="h-4 w-4 text-[#878190] m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </button>
                <div class="flex-1">
                  <h3 class="font-medium text-[#34313a]">Morning meditation</h3>
                  <p class="text-sm text-[#878190]">+2 XP, +1 Gold</p>
                </div>
                <div class="text-sm text-[#878190]">Due today</div>
              </div>

              <div class="flex items-center p-4 bg-[#f9f9f9] rounded-lg">
                <button class="w-6 h-6 border-2 border-[#878190] rounded mr-4 hover:border-[#6133b4] transition-colors">
                  <svg class="h-4 w-4 text-[#878190] m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </button>
                <div class="flex-1">
                  <h3 class="font-medium text-[#34313a]">Walk 10,000 steps</h3>
                  <p class="text-sm text-[#878190]">+3 XP, +2 Gold</p>
                </div>
                <div class="text-sm text-[#878190]">Due today</div>
              </div>

              <div class="flex items-center p-4 bg-[#f9f9f9] rounded-lg">
                <button class="w-6 h-6 border-2 border-[#878190] rounded mr-4 hover:border-[#6133b4] transition-colors">
                  <svg class="h-4 w-4 text-[#878190] m-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </button>
                <div class="flex-1">
                  <h3 class="font-medium text-[#34313a]">Practice guitar</h3>
                  <p class="text-sm text-[#878190]">+2 XP, +1 Gold</p>
                </div>
                <div class="text-sm text-[#878190]">Due today</div>
              </div>
            </div>
          </div>
        {:else if selectedTab === 'todos'}
          <!-- To-Dos Tab -->
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h2 class="text-xl font-bold text-[#34313a] font-['Roboto_Condensed']">To-Dos</h2>
              <button class="bg-[#6133b4] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#4f2a93] transition-colors">
                + Add To-Do
              </button>
            </div>

            <!-- To-Do Items -->
            <div class="space-y-3">
              <div class="flex items-center p-4 bg-[#f9f9f9] rounded-lg">
                <button class="w-6 h-6 border-2 border-[#878190] rounded mr-4 hover:border-[#6133b4] transition-colors">
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
                <button class="w-6 h-6 border-2 border-[#878190] rounded mr-4 hover:border-[#6133b4] transition-colors">
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
                <button class="w-6 h-6 border-2 border-[#878190] rounded mr-4 hover:border-[#6133b4] transition-colors">
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
        {:else if selectedTab === 'rewards'}
          <!-- Rewards Tab -->
          <div class="space-y-4">
            <div class="flex items-center justify-between">
              <h2 class="text-xl font-bold text-[#34313a] font-['Roboto_Condensed']">Rewards</h2>
              <button class="bg-[#6133b4] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#4f2a93] transition-colors">
                + Add Reward
              </button>
            </div>

            <!-- Reward Items -->
            <div class="space-y-3">
              <div class="flex items-center p-4 bg-[#f9f9f9] rounded-lg">
                <div class="flex-1">
                  <h3 class="font-medium text-[#34313a]">Watch Netflix for 1 hour</h3>
                  <p class="text-sm text-[#878190]">Cost: 5 Gold</p>
                </div>
                <button class="bg-[#4f2a93] text-[#432874] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#ffbe5d] transition-colors">
                  Buy
                </button>
              </div>

              <div class="flex items-center p-4 bg-[#f9f9f9] rounded-lg">
                <div class="flex-1">
                  <h3 class="font-medium text-[#34313a]">Buy a new book</h3>
                  <p class="text-sm text-[#878190]">Cost: 15 Gold</p>
                </div>
                <button class="bg-[#4f2a93] text-[#432874] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#ffbe5d] transition-colors">
                  Buy
                </button>
              </div>

              <div class="flex items-center p-4 bg-[#f9f9f9] rounded-lg">
                <div class="flex-1">
                  <h3 class="font-medium text-[#34313a]">Order takeout</h3>
                  <p class="text-sm text-[#878190]">Cost: 10 Gold</p>
                </div>
                <button class="bg-[#4f2a93] text-[#432874] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#ffbe5d] transition-colors">
                  Buy
                </button>
              </div>
            </div>
          </div>
        {/if}
      </div>
    </div>
  </div>
</div>
