<script lang="ts">
  let isMenuOpen = false;
  let selectedTab = 'habits';

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function selectTab(tab: string) {
    selectedTab = tab;
  }
</script>

<!-- Top Navigation Bar -->
<nav class="bg-[#432874] text-white shadow-lg">
  <div class="flex justify-between items-center h-16 px-4">
    <!-- Left side - Logo and Menu -->
    <div class="flex items-center space-x-4">
      <div class="flex items-center space-x-2">
        <div class="w-8 h-8 bg-[#ffa624] rounded-full flex items-center justify-center">
          <span class="text-[#432874] font-bold text-lg">H</span>
        </div>
        <span class="text-xl font-bold font-['Roboto_Condensed']">Habitica</span>
      </div>

      <!-- Desktop Menu -->
      <div class="hidden md:flex items-center space-x-4 ml-8">
        <a href="#" class="text-white hover:text-[#ffa624] px-3 py-2 rounded-md text-sm font-medium">Tasks</a>
        <a href="#" class="text-[#878190] hover:text-[#ffa624] px-3 py-2 rounded-md text-sm font-medium">Party</a>
        <a href="#" class="text-[#878190] hover:text-[#ffa624] px-3 py-2 rounded-md text-sm font-medium">Guilds</a>
        <a href="#" class="text-[#878190] hover:text-[#ffa624] px-3 py-2 rounded-md text-sm font-medium">Market</a>
      </div>
    </div>

    <!-- Right side - User info and notifications -->
    <div class="flex items-center space-x-4">
      <!-- Notifications -->
      <button class="text-white hover:text-[#ffa624] p-2">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM4 19h6v-6H4v6zM4 5h6v6H4V5zM14 5h6v6h-6V5z"/>
        </svg>
      </button>

      <!-- User Avatar -->
      <div class="flex items-center space-x-2">
        <div class="w-8 h-8 bg-[#ffa624] rounded-full flex items-center justify-center">
          <span class="text-[#432874] font-bold text-sm">W</span>
        </div>
        <span class="text-sm font-medium">Warrior</span>
        <svg class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </div>
    </div>
  </div>
</nav>

<!-- Main Layout -->
<div class="flex h-screen bg-[#f9f9f9]">
  <!-- Sidebar -->
  <div class="w-64 bg-[#edecee] p-6 hidden md:block">
    <div class="space-y-6">
      <!-- Character Stats -->
      <div class="bg-white rounded-lg p-4 shadow-sm">
        <h3 class="text-lg font-bold text-[#34313a] mb-4 font-['Roboto_Condensed']">Character Stats</h3>

        <!-- Health Bar -->
        <div class="mb-3">
          <div class="flex justify-between text-sm mb-1">
            <span class="text-[#4e4a57]">Health</span>
            <span class="text-[#4e4a57]">45/50</span>
          </div>
          <div class="w-full bg-[#edecee] rounded-full h-2">
            <div class="bg-[#f74e52] h-2 rounded-full" style="width: 90%"></div>
          </div>
        </div>

        <!-- Experience Bar -->
        <div class="mb-3">
          <div class="flex justify-between text-sm mb-1">
            <span class="text-[#4e4a57]">Experience</span>
            <span class="text-[#4e4a57]">1,245/1,500</span>
          </div>
          <div class="w-full bg-[#edecee] rounded-full h-2">
            <div class="bg-[#ffbe5d] h-2 rounded-full" style="width: 83%"></div>
          </div>
        </div>

        <!-- Mana Bar -->
        <div class="mb-3">
          <div class="flex justify-between text-sm mb-1">
            <span class="text-[#4e4a57]">Mana</span>
            <span class="text-[#4e4a57]">35/35</span>
          </div>
          <div class="w-full bg-[#edecee] rounded-full h-2">
            <div class="bg-[#50b5e9] h-2 rounded-full" style="width: 100%"></div>
          </div>
        </div>

        <!-- Level -->
        <div class="text-center mt-4">
          <div class="text-2xl font-bold text-[#34313a]">Level 15</div>
          <div class="text-sm text-[#878190]">Warrior</div>
        </div>
      </div>

      <!-- Navigation Menu -->
      <div class="bg-white rounded-lg p-4 shadow-sm">
        <h3 class="text-lg font-bold text-[#34313a] mb-4 font-['Roboto_Condensed']">Tasks</h3>
        <div class="space-y-2">
          <button
            on:click={() => selectTab('habits')}
            class="w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors {selectedTab === 'habits' ? 'bg-[#d5c8ff] text-[#6133b4]' : 'text-[#4e4a57] hover:bg-[#edecee]'}"
          >
            Habits
          </button>
          <button
            on:click={() => selectTab('dailies')}
            class="w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors {selectedTab === 'dailies' ? 'bg-[#d5c8ff] text-[#6133b4]' : 'text-[#4e4a57] hover:bg-[#edecee]'}"
          >
            Dailies
          </button>
          <button
            on:click={() => selectTab('todos')}
            class="w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors {selectedTab === 'todos' ? 'bg-[#d5c8ff] text-[#6133b4]' : 'text-[#4e4a57] hover:bg-[#edecee]'}"
          >
            To-Dos
          </button>
          <button
            on:click={() => selectTab('rewards')}
            class="w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors {selectedTab === 'rewards' ? 'bg-[#d5c8ff] text-[#6133b4]' : 'text-[#4e4a57] hover:bg-[#edecee]'}"
          >
            Rewards
          </button>
        </div>
      </div>

      <!-- Party Info -->
      <div class="bg-white rounded-lg p-4 shadow-sm">
        <h3 class="text-lg font-bold text-[#34313a] mb-4 font-['Roboto_Condensed']">Party</h3>
        <div class="text-sm text-[#4e4a57] mb-2">Quest Progress</div>
        <div class="w-full bg-[#edecee] rounded-full h-2 mb-2">
          <div class="bg-[#24cc8f] h-2 rounded-full" style="width: 65%"></div>
        </div>
        <div class="text-xs text-[#878190]">65% Complete</div>
      </div>
    </div>
  </div>

  <!-- Main Content Area -->
  <div class="flex-1 p-6">
    <!-- Mobile Menu Button -->
    <div class="md:hidden mb-4">
      <button on:click={toggleMenu} class="text-[#4e4a57] hover:text-[#6133b4]">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
      </button>
    </div>

    <!-- Task Management Interface -->
    <div class="bg-white rounded-lg shadow-sm">
      <!-- Tab Headers -->
      <div class="border-b border-[#edecee]">
        <div class="flex">
          <button
            on:click={() => selectTab('habits')}
            class="px-6 py-4 text-sm font-medium transition-colors {selectedTab === 'habits' ? 'text-[#6133b4] border-b-2 border-[#6133b4]' : 'text-[#4e4a57] hover:text-[#6133b4]'}"
          >
            Habits
          </button>
          <button
            on:click={() => selectTab('dailies')}
            class="px-6 py-4 text-sm font-medium transition-colors {selectedTab === 'dailies' ? 'text-[#6133b4] border-b-2 border-[#6133b4]' : 'text-[#4e4a57] hover:text-[#6133b4]'}"
          >
            Dailies
          </button>
          <button
            on:click={() => selectTab('todos')}
            class="px-6 py-4 text-sm font-medium transition-colors {selectedTab === 'todos' ? 'text-[#6133b4] border-b-2 border-[#6133b4]' : 'text-[#4e4a57] hover:text-[#6133b4]'}"
          >
            To-Dos
          </button>
          <button
            on:click={() => selectTab('rewards')}
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
                <button class="bg-[#ffa624] text-[#432874] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#ffbe5d] transition-colors">
                  Buy
                </button>
              </div>

              <div class="flex items-center p-4 bg-[#f9f9f9] rounded-lg">
                <div class="flex-1">
                  <h3 class="font-medium text-[#34313a]">Buy a new book</h3>
                  <p class="text-sm text-[#878190]">Cost: 15 Gold</p>
                </div>
                <button class="bg-[#ffa624] text-[#432874] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#ffbe5d] transition-colors">
                  Buy
                </button>
              </div>

              <div class="flex items-center p-4 bg-[#f9f9f9] rounded-lg">
                <div class="flex-1">
                  <h3 class="font-medium text-[#34313a]">Order takeout</h3>
                  <p class="text-sm text-[#878190]">Cost: 10 Gold</p>
                </div>
                <button class="bg-[#ffa624] text-[#432874] px-4 py-2 rounded-md text-sm font-medium hover:bg-[#ffbe5d] transition-colors">
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
