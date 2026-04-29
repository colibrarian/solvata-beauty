// Solvata Beauty — Auth Guard
// Include this script as the FIRST script in any protected page:
// <script src="auth-check.js"></script>
(function () {
  if (sessionStorage.getItem('sb_auth') !== 'ok') {
    // Not authenticated — send to login
    window.location.replace('login.html');
  }
})();
