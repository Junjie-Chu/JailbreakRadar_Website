$(function () {
  var leaderboard = $('#example');

  if (leaderboard.length) {
    leaderboard.DataTable({
      paging: false,
      ordering: true,
      info: true,
      scrollX: true
    });
  }
});
