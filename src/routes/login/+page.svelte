<script lang="ts">
    import { goto } from "$app/navigation";
    import { resolve } from "$app/paths";
    import Habitica from "$lib/services/habitica";

    let userId = $state("");
    let apiToken = $state("");
    let isLoading = $state(false);
    let isFailed = $state(false);

    async function handleLogin() {
      isLoading = true;
      isFailed = false;

      const habitica = new Habitica(userId, apiToken);
      const profile = await habitica.call("https://habitica.com/api/v3/user");

      if (profile.ok) {
        Habitica.instance = habitica;
        goto(resolve("/"));
      } else {
        Habitica.instance = undefined;
        isFailed = true;
      }

      isLoading = false;
    }
  </script>

  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-90"></div>

    <div class="absolute inset-0" style="background-image: radial-gradient(2px 2px at 20px 30px, #3b82f6, transparent), radial-gradient(2px 2px at 40px 70px, rgba(59,130,246,0.8), transparent), radial-gradient(1px 1px at 90px 40px, #6366f1, transparent), radial-gradient(1px 1px at 130px 80px, rgba(99,102,241,0.6), transparent), radial-gradient(2px 2px at 160px 30px, #8b5cf6, transparent); background-repeat: repeat; background-size: 200px 100px;"></div>

    <div class="max-w-md w-full space-y-8 relative z-10">
      <div class="text-center">
        <h2 class="text-3xl font-bold text-gray-900 mb-2 font-['Roboto_Condensed']">Login</h2>
        <p class="text-gray-600 text-sm">Habitica Priority Matrix</p>
      </div>

      <div class="bg-white rounded-lg shadow-xl p-8 border border-gray-200">
        <form on:submit|preventDefault={handleLogin} class="space-y-6">
          <div>
            <label for="userId" class="block text-sm font-medium text-gray-700 mb-2">
              User ID
            </label>
            <input
              id="userId"
              type="text"
              bind:value={userId}
              required
              class="w-full px-4 py-3 border {isFailed ? 'border-red-500' : 'border-gray-300'} rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6133b4] focus:border-[#6133b4] transition-colors"
              placeholder="Enter your user ID"
            />
          </div>

          <div>
            <label for="apiToken" class="block text-sm font-medium text-gray-700 mb-2">
              API Token
            </label>
            <input
              id="apiToken"
              type="password"
              bind:value={apiToken}
              required
              class="w-full px-4 py-3 border {isFailed ? 'border-red-500' : 'border-gray-300'} rounded-md bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6133b4] focus:border-[#6133b4] transition-colors"
              placeholder="Enter your API token"
            />
          </div>

          <button
            type="submit"
            disabled={isLoading}
            class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#6133b4] hover:bg-[#4f2a93] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6133b4] disabled:opacity-50 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            {#if isLoading}
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Signing in...
            {:else}
              Sign in
            {/if}
          </button>
        </form>
      </div>
    </div>
  </div>
