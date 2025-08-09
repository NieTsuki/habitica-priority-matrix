<script lang="ts">
    let email = $state("");
    let password = $state("");
    let isLoading = $state(false);

    function handleLogin() {
      isLoading = true;
      // Simulate login process
      setTimeout(() => {
        isLoading = false;
        // Redirect to main page after successful login
        window.location.href = "/";
      }, 1500);
    }
  </script>

  <div class="min-h-screen bg-[#1a1a2e] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-[#1a1a2e] opacity-90"></div>

    <!-- Stars effect -->
    <div class="absolute inset-0" style="background-image: radial-gradient(2px 2px at 20px 30px, #eee, transparent), radial-gradient(2px 2px at 40px 70px, rgba(255,255,255,0.8), transparent), radial-gradient(1px 1px at 90px 40px, #fff, transparent), radial-gradient(1px 1px at 130px 80px, rgba(255,255,255,0.6), transparent), radial-gradient(2px 2px at 160px 30px, #ddd, transparent); background-repeat: repeat; background-size: 200px 100px;"></div>

    <div class="max-w-md w-full space-y-8 relative z-10">
      <!-- Logo and Header -->
      <div class="text-center">
        <div class="flex justify-center mb-6">
          <svg width="64" height="64" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" class="fill-white">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M31.62 28.86c-.32-.706-1.057-1.048-1.538-.706-.48.341-1.147.393-1.78.24-.633-.153-.753-1.604-.616-3.278.136-1.673.363-2.318.506-2.925.162-.61.877-.562.962-.084.086.479.582.479 1.307-.391.724-.87.617-3.409-.218-5.474-.836-2.065.326-1.865.664-1.66.337.205.544-.102.462-1.28-.082-1.178-1.166-2.098-2.039-2.663-.873-.564-1.936-1.186-1.911-2.697.025-1.511 2.08-1.464 2.358-1.439.279.025.815-.093.506-1.663-.31-1.57-1.43-1.869-2.133-1.826-.703.042-1.177.428-2.17.053-.995-.376-1.655-.23-2.58-.023-.926.206-2.138.776-3.646 1.183-.795.219-1.064.274-1.93.288-.532.008-.755.653-.043 1.444.563.791 1.408 1.608 2.515 1.768 1.236.174 1.521-.645 1.407-1.85a20.023 20.023 0 0 0-.024 4.488c.198 1.5.45 4.051-.258 5.713-.35.817-1.361 1.693-2.449 1.633-1.413-.084-2.555-1.75-3.537-3.726-2.06-4.152-4.48-5.033-13.509-8.835-8.12-3.417-12.516-8.749-15.24-12.185-2.421-3.042-4.846-1.89-4.626.855.179 2.128 1.48 9.008 4.781 13.141 4.058 6.314 10.32 9.177 17.534 9.739 1.885.149 3.065.52 3.225 1.383.236 1.835-1.557 3.11-4.898 2.722-3.341-.39-4.768.22-4.103 2.121 2.123 4.477 7.021 4.672 9.058 4.857.686.122 3.114 0 4.41.355 1.51.418 1.836 2.514-.353 3.648-3.892 1.903-5.59 3.479-7.561 7.075-1.486 2.826-2.77 7.555-1.435 14.365 1.283 6.62-8.342 6.83-12.497 5.89-1.793-.377-3.675-3.778.716-6.625 3.553-2.305 4.269-3.724 4.111-6.642-.184-3.4-2.058-3.644-2.053-6.598v-7.05c0-.602-.488-1.088-1.087-1.088h-3.334a1.087 1.087 0 0 1-1.087-1.087v-4.25c0-.602-.488-1.087-1.088-1.087h-3.317a1.087 1.087 0 0 1-1.087-1.088v-3.81c0-.602-.489-1.087-1.088-1.087h-4.04a1.087 1.087 0 0 1-1.089-1.088V26.25c0-.602-.488-1.088-1.087-1.088H1.088C.485 25.161 0 25.65 0 26.25v4.26c0 .602.488 1.087 1.088 1.087h4.049c.602 0 1.087.489 1.087 1.088v15.192c0 .602.489 1.087 1.088 1.087h4.277c.602 0 1.088.489 1.088 1.088v4.968c0 .602.488 1.087 1.087 1.087h6.005c1.836-.13 2.156 2.335 2.137 3.214-.04 2.007-2.308 2.652-3.382 3.487-2.861 2.21-5.077 4.459-3.78 8.781l.032.09c2.362 5.017 8.855 4.499 12.956 4.499h25.817c1.459 0 2.959.339 2.614-1.362-.342-1.7-1.063-4.024-3.162-4.024-2.1 0-1.758 1.166-3.81.57-2.054-.597-2.057-3.371 1.027-8.198 3.19-4.122 8.652-3.81 11.952-.895 3.301 2.915 2.325 7.978 1.633 10.885-.396 2.048.545 3.06 1.67 3.032H78.58c2.015-.035 1.62-1.391.464-4.035h.008z"/>
          </svg>
        </div>
        <h2 class="text-3xl font-bold text-white mb-2">habitica</h2>
        <p class="text-gray-300 text-sm">Gamify Your Life</p>
      </div>

      <!-- Social Login Buttons -->
      <div class="space-y-3">
        <button class="w-full flex items-center justify-center px-4 py-3 border border-[#2d2d44] rounded-lg bg-[#2d2d44] text-white hover:bg-[#3d3d54] transition-colors">
          <svg class="w-5 h-5 mr-3" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>

        <button class="w-full flex items-center justify-center px-4 py-3 border border-[#2d2d44] rounded-lg bg-[#2d2d44] text-white hover:bg-[#3d3d54] transition-colors">
          <svg class="w-5 h-5 mr-3" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          Continue with Apple
        </button>
      </div>

      <!-- Divider -->
      <div class="relative">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-[#2d2d44]"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-[#1a1a2e] text-gray-400">Or continue with</span>
        </div>
      </div>

      <!-- Login Form -->
      <div class="bg-[#2d2d44] rounded-lg shadow-lg p-8">
        <form on:submit|preventDefault={handleLogin} class="space-y-6">
          <!-- Email Field -->
          <div>
            <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              bind:value={email}
              required
              class="w-full px-4 py-3 border border-[#3d3d54] rounded-md bg-[#1a1a2e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6133b4] focus:border-transparent transition-colors"
              placeholder="Enter your email"
            />
          </div>

          <!-- Password Field -->
          <div>
            <label for="password" class="block text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              id="password"
              type="password"
              bind:value={password}
              required
              class="w-full px-4 py-3 border border-[#3d3d54] rounded-md bg-[#1a1a2e] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6133b4] focus:border-transparent transition-colors"
              placeholder="Enter your password"
            />
          </div>

          <!-- Login Button -->
          <button
            type="submit"
            disabled={isLoading}
            class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#6133b4] hover:bg-[#4f2a93] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#6133b4] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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

        <!-- Links -->
        <div class="mt-6 text-center space-y-2">
          <a href="/forgot-password" class="text-sm text-[#6133b4] hover:text-[#4f2a93] transition-colors">
            Forgot your password?
          </a>
          <div class="text-sm text-gray-400">
            Don't have an account?
            <a href="/signup" class="text-[#6133b4] hover:text-[#4f2a93] transition-colors">
              Sign up
            </a>
          </div>
        </div>
      </div>

      <!-- Back to Habitica -->
      <div class="text-center">
        <a href="https://habitica.com" class="text-sm text-gray-400 hover:text-white transition-colors">
          ← Back to Habitica
        </a>
      </div>
    </div>
  </div>
