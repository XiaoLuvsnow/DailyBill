// 滚动进入视口时淡入；视频静音循环自动播放：进入视口播放、离开视口暂停，节省手机流量与电量。
(function () {
  "use strict";

  var revealIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        revealIO.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach(function (el) { revealIO.observe(el); });

  var videoIO = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      var v = e.target;
      if (e.isIntersecting) {
        if (v.paused) { var p = v.play(); if (p) { p.catch(function () {}); } }
      } else if (!v.paused) {
        v.pause();
      }
    });
  }, { threshold: 0.25 });
  document.querySelectorAll("video").forEach(function (v) { videoIO.observe(v); });
})();
