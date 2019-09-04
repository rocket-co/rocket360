/*!
 * Codebase - v3.0.0
 * @author pixelcave - https://pixelcave.com
 * Copyright (c) 2018
 */

 document.addEventListener("turbolinks:load", function() {


      ! function(e) {
          var a = {};

          function t(n) {
              if (a[n]) return a[n].exports;
              var o = a[n] = {
                  i: n,
                  l: !1,
                  exports: {}
              };
              return e[n].call(o.exports, o, o.exports, t), o.l = !0, o.exports
          }
          t.m = e, t.c = a, t.d = function(e, a, n) {
              t.o(e, a) || Object.defineProperty(e, a, {
                  enumerable: !0,
                  get: n
              })
          }, t.r = function(e) {
              "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                  value: "Module"
              }), Object.defineProperty(e, "__esModule", {
                  value: !0
              })
          }, t.t = function(e, a) {
              if (1 & a && (e = t(e)), 8 & a) return e;
              if (4 & a && "object" == typeof e && e && e.__esModule) return e;
              var n = Object.create(null);
              if (t.r(n), Object.defineProperty(n, "default", {
                  enumerable: !0,
                  value: e
              }), 2 & a && "string" != typeof e)
                  for (var o in e) t.d(n, o, function(a) {
                      return e[a]
                  }.bind(null, o));
              return n
          }, t.n = function(e) {
              var a = e && e.__esModule ? function() {
                  return e.default
              } : function() {
                  return e
              };
              return t.d(a, "a", a), a
          }, t.o = function(e, a) {
              return Object.prototype.hasOwnProperty.call(e, a)
          }, t.p = "", t(t.s = 1)
      }([function(e, a) {}, function(e, a, t) {
          e.exports = t(2)
      }, function(e, a, t) {
          "use strict";
          t.r(a);
          t(0);

          function n(e, a) {
              for (var t = 0; t < a.length; t++) {
                  var n = a[t];
                  n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
              }
          }
          var o = function() {
              function e() {
                  ! function(e, a) {
                      if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                  }(this, e)
              }
              var a, t, o;
              return a = e, o = [{
                  key: "updateTheme",
                  value: function(e, a) {
                      "default" === a ? e.length && e.remove() : e.length ? e.attr("href", a) : jQuery("#css-main").after('<link rel="stylesheet" id="css-theme" href="' + a + '">')
                  }
              }, {
                  key: "getWidth",
                  value: function() {
                      return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
                  }
              }], (t = null) && n(a.prototype, t), o && n(a, o), e
          }();

          function l(e, a) {
              for (var t = 0; t < a.length; t++) {
                  var n = a[t];
                  n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
              }
          }
          var r = function() {
              function e() {
                  ! function(e, a) {
                      if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                  }(this, e)
              }
              var a, t, n;
              return a = e, n = [{
                  key: "run",
                  value: function(e) {
                      var a = this,
                          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                          n = {
                              "core-tooltip": function() {
                                  return a.coreBootstrapTooltip()
                              },
                              "core-popover": function() {
                                  return a.coreBootstrapPopover()
                              },
                              "core-tab": function() {
                                  return a.coreBootstrapTabs()
                              },
                              "core-custom-file-input": function() {
                                  return a.coreBootstrapCustomFileInput()
                              },
                              "core-toggle-class": function() {
                                  return a.coreToggleClass()
                              },
                              "core-scrollTo": function() {
                                  return a.coreScrollTo()
                              },
                              "core-year-copy": function() {
                                  return a.coreYearCopy()
                              },
                              "core-appear": function() {
                                  return a.coreAppear()
                              },
                              "core-appear-countTo": function() {
                                  return a.coreAppearCountTo()
                              },
                              "core-ripple": function() {
                                  return a.coreRipple()
                              },
                              "print-page": function() {
                                  return a.print()
                              },
                              "table-tools": function() {
                                  a.tableToolsSections(), a.tableToolsCheckable()
                              },
                              "content-filter": function() {
                                  return a.contentFilter()
                              },
                              slimscroll: function() {
                                  return a.slimscroll()
                              },
                              "magnific-popup": function() {
                                  return a.magnific()
                              },
                              summernote: function() {
                                  return a.summernote()
                              },
                              ckeditor: function() {
                                  return a.ckeditor()
                              },
                              simplemde: function() {
                                  return a.simpleMDE()
                              },
                              slick: function() {
                                  return a.slick()
                              },

                              colorpicker: function() {
                                  return a.colorpicker()
                              },
                              "tags-inputs": function() {
                                  return a.tagsInputs()
                              },
                              "masked-inputs": function() {
                                  return a.maskedInputs()
                              },
                              select2: function() {
                                  return a.select2()
                              },
                              highlightjs: function() {
                                  return a.highlightjs()
                              },
                              notify: function(e) {
                                  return a.notify(e)
                              },
                              "draggable-items": function() {
                                  return a.draggableItems()
                              },
                              "easy-pie-chart": function() {
                                  return a.easyPieChart()
                              },
                              maxlength: function() {
                                  return a.maxlength()
                              },
                              rangeslider: function() {
                                  return a.rangeslider()
                              }
                          };
                      if (e instanceof Array)
                          for (var o in e) n[e[o]] && n[e[o]](t);
                      else n[e] && n[e](t)
                  }
              }, {
                  key: "coreBootstrapTooltip",
                  value: function() {
                      jQuery('[data-toggle="tooltip"]:not(.js-tooltip-enabled)').add(".js-tooltip:not(.js-tooltip-enabled)").each(function(e, a) {
                          var t = jQuery(a);
                          t.addClass("js-tooltip-enabled").tooltip({
                              container: t.data("container") || "body",
                              animation: t.data("animation") || !1
                          })
                      })
                  }
              }, {
                  key: "coreBootstrapPopover",
                  value: function() {
                      jQuery('[data-toggle="popover"]:not(.js-popover-enabled)').add(".js-popover:not(.js-popover-enabled)").each(function(e, a) {
                          var t = jQuery(a);
                          t.addClass("js-popover-enabled").popover({
                              container: t.data("container") || "body",
                              animation: t.data("animation") || !1,
                              trigger: t.data("trigger") || "hover focus"
                          })
                      })
                  }
              }, {
                  key: "coreBootstrapTabs",
                  value: function() {
                      jQuery('[data-toggle="tabs"]:not(.js-tabs-enabled)').add(".js-tabs:not(.js-tabs-enabled)").each(function(e, a) {
                          jQuery(a).addClass("js-tabs-enabled").find("a").on("click.cb.helpers.core", function(e) {
                              e.preventDefault(), jQuery(e.currentTarget).tab("show")
                          })
                      })
                  }
              }, {
                  key: "coreBootstrapCustomFileInput",
                  value: function() {
                      jQuery('[data-toggle="custom-file-input"]:not(.js-custom-file-input-enabled)').each(function(e, a) {
                          var t = jQuery(a);
                          t.addClass("js-custom-file-input-enabled").on("change", function(e) {
                              var a = e.target.files.length > 1 ? e.target.files.length + " " + (t.data("lang-files") || "Files") : e.target.files[0].name;
                              t.next(".custom-file-label").css("overflow-x", "hidden").html(a)
                          })
                      })
                  }
              }, {
                  key: "coreToggleClass",
                  value: function() {
                      jQuery('[data-toggle="class-toggle"]:not(.js-class-toggle-enabled)').add(".js-class-toggle:not(.js-class-toggle-enabled)").on("click.cb.helpers.core", function(e) {
                          var a = jQuery(e.currentTarget);
                          a.addClass("js-class-toggle-enabled").blur(), jQuery(a.data("target").toString()).toggleClass(a.data("class").toString())
                      })
                  }
              }, {
                  key: "coreScrollTo",
                  value: function() {
                      jQuery('[data-toggle="scroll-to"]:not(.js-scroll-to-enabled)').on("click.cb.helpers.core", function(e) {
                          e.stopPropagation();
                          var a = jQuery("#page-header"),
                              t = jQuery(e.currentTarget),
                              n = t.data("target") || t.attr("href"),
                              o = t.data("speed") || 1e3,
                              l = a.length && jQuery("#page-container").hasClass("page-header-fixed") ? a.outerHeight() : 0;
                          t.addClass("js-scroll-to-enabled"), jQuery("html, body").animate({
                              scrollTop: jQuery(n).offset().top - l
                          }, o)
                      })
                  }
              }, {
                  key: "coreYearCopy",
                  value: function() {
                      var e = jQuery(".js-year-copy:not(.js-year-copy-enabled)");
                      if (e.length > 0) {
                          var a = (new Date).getFullYear(),
                              t = e.html().length > 0 ? e.html() : a;
                          e.addClass("js-year-copy-enabled").html(parseInt(t) >= a ? a : t + "-" + a.toString().substr(2, 2))
                      }
                  }
              }, {
                  key: "coreAppear",
                  value: function() {
                      jQuery('[data-toggle="appear"]:not(.js-appear-enabled)').each(function(e, a) {
                          var t = o.getWidth(),
                              n = jQuery(a),
                              l = n.data("class") || "animated fadeIn",
                              r = n.data("offset") || 0,
                              i = t < 992 ? 0 : n.data("timeout") ? n.data("timeout") : 0;
                          n.addClass("js-appear-enabled").appear(function() {
                              setTimeout(function() {
                                  n.removeClass("invisible").addClass(l)
                              }, i)
                          }, {
                              accY: r
                          })
                      })
                  }
              }, {
                  key: "coreAppearCountTo",
                  value: function() {
                      jQuery('[data-toggle="countTo"]:not(.js-count-to-enabled)').each(function(e, a) {
                          var t = jQuery(a),
                              n = t.data("after"),
                              o = t.data("before");
                          t.addClass("js-count-to-enabled").appear(function() {
                              t.countTo({
                                  speed: t.data("speed") || 1500,
                                  refreshInterval: t.data("refresh-interval") || 15,
                                  onComplete: function() {
                                      n ? t.html(t.html() + n) : o && t.html(o + t.html())
                                  }
                              })
                          })
                      })
                  }
              }, {
                  key: "coreRipple",
                  value: function() {
                      jQuery('[data-toggle="click-ripple"]:not(.js-click-ripple-enabled)').each(function(e, a) {
                          var t = jQuery(a);
                          t.addClass("js-click-ripple-enabled").css({
                              overflow: "hidden",
                              position: "relative",
                              "z-index": 1
                          }).on("click.cb.helpers.core", function(e) {
                              var a, n, o, l;
                              0 === t.children(".click-ripple").length ? t.prepend('<span class="click-ripple"></span>') : t.children(".click-ripple").removeClass("animate"), (a = t.children(".click-ripple")).height() || a.width() || (n = Math.max(t.outerWidth(), t.outerHeight()), a.css({
                                  height: n,
                                  width: n
                              })), o = e.pageX - t.offset().left - a.width() / 2, l = e.pageY - t.offset().top - a.height() / 2, a.css({
                                  top: l + "px",
                                  left: o + "px"
                              }).addClass("animate")
                          })
                      })
                  }
              }, {
                  key: "print",
                  value: function() {
                      var e = jQuery("#page-container"),
                          a = e.prop("class");
                      e.prop("class", ""), window.print(), e.prop("class", a)
                  }
              }, {
                  key: "tableToolsSections",
                  value: function() {
                      jQuery(".js-table-sections:not(.js-table-sections-enabled)").each(function(e, a) {
                          var t = jQuery(a);
                          t.addClass("js-table-sections-enabled"), jQuery(".js-table-sections-header > tr", t).on("click.cb.helpers", function(e) {
                              if (!("checkbox" === e.target.type || "button" === e.target.type || "a" === e.target.tagName.toLowerCase() || jQuery(e.target).parent("a").length || jQuery(e.target).parent("button").length || jQuery(e.target).parent(".custom-control").length || jQuery(e.target).parent("label").length)) {
                                  var a = jQuery(e.currentTarget).parent("tbody");
                                  a.hasClass("show") || jQuery("tbody", t).removeClass("show table-active"), a.toggleClass("show table-active")
                              }
                          })
                      })
                  }
              }, {
                  key: "tableToolsCheckable",
                  value: function() {
                      var e = this;
                      jQuery(".js-table-checkable:not(.js-table-checkable-enabled)").each(function(a, t) {
                          var n = jQuery(t);
                          n.addClass("js-table-checkable-enabled"), jQuery("thead input:checkbox", n).on("click.cb.helpers", function(a) {
                              var t = jQuery(a.currentTarget).prop("checked");
                              jQuery("tbody input:checkbox", n).each(function(a, n) {
                                  var o = jQuery(n);
                                  o.prop("checked", t).change(), e.tableToolscheckRow(o, t)
                              })
                          }), jQuery("tbody input:checkbox, tbody input + label", n).on("click.cb.helpers", function(a) {
                              var t = jQuery(a.currentTarget);
                              t.prop("checked") ? jQuery("tbody input:checkbox:checked", n).length === jQuery("tbody input:checkbox", n).length && jQuery("thead input:checkbox", n).prop("checked", !0) : jQuery("thead input:checkbox", n).prop("checked", !1), e.tableToolscheckRow(t, t.prop("checked"))
                          }), jQuery("tbody > tr", n).on("click.cb.helpers", function(a) {
                              if (!("checkbox" === a.target.type || "button" === a.target.type || "a" === a.target.tagName.toLowerCase() || jQuery(a.target).parent("a").length || jQuery(a.target).parent("button").length || jQuery(a.target).parent(".custom-control").length || jQuery(a.target).parent("label").length)) {
                                  var t = jQuery("input:checkbox", a.currentTarget),
                                      o = t.prop("checked");
                                  t.prop("checked", !o).change(), e.tableToolscheckRow(t, !o), o ? jQuery("thead input:checkbox", n).prop("checked", !1) : jQuery("tbody input:checkbox:checked", n).length === jQuery("tbody input:checkbox", n).length && jQuery("thead input:checkbox", n).prop("checked", !0)
                              }
                          })
                      })
                  }
              }, {
                  key: "tableToolscheckRow",
                  value: function(e, a) {
                      a ? e.closest("tr").addClass("table-active") : e.closest("tr").removeClass("table-active")
                  }
              }, {
                  key: "contentFilter",
                  value: function() {
                      jQuery(".js-filter:not(.js-filter-enabled)").each(function(e, a) {
                          var t, n = jQuery(a),
                              l = jQuery(".nav-pills", n),
                              r = jQuery("a[data-category-link]", n),
                              i = jQuery("[data-category]", n),
                              s = n.data("speed") || 200;
                          (n.addClass("js-filter-enabled"), l.length) && jQuery(window).on("resize.cb.helpers", function() {
                              clearTimeout(t), t = setTimeout(function() {
                                  o.getWidth() < 768 ? l.addClass("flex-column") : l.removeClass("flex-column")
                              }, 150)
                          }).trigger("resize.cb.helpers");
                          n.data("numbers") && r.each(function(e, a) {
                              var t = jQuery(a),
                                  n = t.data("category-link");
                              "all" === n ? t.append(" (" + i.length + ")") : t.append(" (" + i.filter('[data-category="' + n + '"]').length + ")")
                          }), r.on("click.cb.helpers", function(e) {
                              var a, t = jQuery(e.currentTarget);
                              return t.hasClass("active") || (r.removeClass("active"), t.addClass("active"), "all" === (a = t.data("category-link")) ? i.filter(":visible").length ? i.filter(":visible").fadeOut(s, function() {
                                  i.fadeIn(s)
                              }) : i.fadeIn(s) : i.filter(":visible").length ? i.filter(":visible").fadeOut(s, function() {
                                  i.filter('[data-category="' + a + '"]').fadeIn(s)
                              }) : i.filter('[data-category="' + a + '"]').fadeIn(s)), !1
                          })
                      })
                  }
              }, {
                  key: "slimscroll",
                  value: function() {
                      jQuery('[data-toggle="slimscroll"]:not(.js-slimscroll-enabled)').each(function(e, a) {
                          var t = jQuery(a);
                          t.addClass("js-slimscroll-enabled").slimScroll({
                              height: t.data("height") || "200px",
                              size: t.data("size") || "5px",
                              position: t.data("position") || "right",
                              color: t.data("color") || "#000",
                              opacity: t.data("opacity") || ".25",
                              distance: t.data("distance") || "0",
                              alwaysVisible: !!t.data("always-visible"),
                              railVisible: !!t.data("rail-visible"),
                              railColor: t.data("rail-color") || "#999",
                              railOpacity: t.data("rail-opacity") || .3
                          })
                      })
                  }
              }, {
                  key: "magnific",
                  value: function() {
                      jQuery(".js-gallery:not(.js-gallery-enabled)").each(function(e, a) {
                          jQuery(a).addClass("js-gallery-enabled").magnificPopup({
                              delegate: "a.img-lightbox",
                              type: "image",
                              gallery: {
                                  enabled: !0
                              }
                          })
                      })
                  }
              }, {
                  key: "summernote",
                  value: function() {
                      jQuery(".js-summernote-air:not(.js-summernote-air-enabled)").each(function(e, a) {
                          jQuery(a).addClass("js-summernote-air-enabled").summernote({
                              airMode: !0,
                              tooltip: !1
                          })
                      }), jQuery(".js-summernote:not(.js-summernote-enabled)").each(function(e, a) {
                          var t = jQuery(a);
                          t.addClass("js-summernote-enabled").summernote({
                              height: t.data("height") || 350,
                              minHeight: t.data("min-height") || null,
                              maxHeight: t.data("max-height") || null
                          })
                      })
                  }
              }, {
                  key: "ckeditor",
                  value: function() {
                      jQuery("#js-ckeditor-inline:not(.js-ckeditor-inline-enabled)").length && (jQuery("#js-ckeditor-inline").attr("contenteditable", "true"), CKEDITOR.inline("js-ckeditor-inline"), jQuery("#js-ckeditor-inline").addClass("js-ckeditor-inline-enabled")), jQuery("#js-ckeditor:not(.js-ckeditor-enabled)").length && (CKEDITOR.replace("js-ckeditor"), jQuery("#js-ckeditor").addClass("js-ckeditor-enabled"))
                  }
              }, {
                  key: "simpleMDE",
                  value: function() {
                      jQuery(".js-simplemde:not(.js-simplemde-enabled)").each(function(e, a) {
                          var t = jQuery(a);
                          t.addClass("js-simplemde-enabled"), new SimpleMDE({
                              element: t[0]
                          })
                      })
                  }
              }, {
                  key: "slick",
                  value: function() {
                      jQuery(".js-slider:not(.js-slider-enabled)").each(function(e, a) {
                          var t = jQuery(a);
                          t.addClass("js-slider-enabled").slick({
                              arrows: t.data("arrows") || !1,
                              dots: t.data("dots") || !1,
                              slidesToShow: t.data("slides-to-show") || 1,
                              slidesToScroll: t.data("slides-to-scroll") || 1,
                              centerMode: t.data("center-mode") || !1,
                              autoplay: t.data("autoplay") || !1,
                              autoplaySpeed: t.data("autoplay-speed") || 3e3,
                              infinite: void 0 === t.data("infinite") || t.data("infinite")
                          })
                      })
                  }
              }, {
                  key: "colorpicker",
                  value: function() {
                      jQuery(".js-colorpicker:not(.js-colorpicker-enabled)").each(function(e, a) {
                          jQuery(a).addClass("js-colorpicker-enabled").colorpicker()
                      })
                  }
              }, {
                  key: "tagsInputs",
                  value: function() {
                      jQuery(".js-tags-input:not(.js-tags-input-enabled)").each(function(e, a) {
                          var t = jQuery(a);
                          t.addClass("js-tags-input-enabled").tagsInput({
                              height: t.data("height") || !1,
                              width: t.data("width") || "100%",
                              defaultText: t.data("default-text") || "Add tag",
                              removeWithBackspace: t.data("remove-with-backspace") || !0,
                              delimiter: [","]
                          })
                      })
                  }
              }, {
                  key: "maskedInputs",
                  value: function() {
                      jQuery(".js-masked-date:not(.js-masked-enabled)").mask("99/99/9999"), jQuery(".js-masked-date-dash:not(.js-masked-enabled)").mask("99-99-9999"), jQuery(".js-masked-phone:not(.js-masked-enabled)").mask("(999) 999-9999"), jQuery(".js-masked-phone-ext:not(.js-masked-enabled)").mask("(999) 999-9999? x99999"), jQuery(".js-masked-taxid:not(.js-masked-enabled)").mask("99-9999999"), jQuery(".js-masked-ssn:not(.js-masked-enabled)").mask("999-99-9999"), jQuery(".js-masked-pkey:not(.js-masked-enabled)").mask("a*-999-a999"), jQuery(".js-masked-time:not(.js-masked-enabled)").mask("99:99"), jQuery(".js-masked-date").add(".js-masked-date-dash").add(".js-masked-phone").add(".js-masked-phone-ext").add(".js-masked-taxid").add(".js-masked-ssn").add(".js-masked-pkey").add(".js-masked-time").addClass("js-masked-enabled")
                  }
              }, {
                  key: "select2",
                  value: function() {
                      jQuery(".js-select2:not(.js-select2-enabled)").each(function(e, a) {
                          var t = jQuery(a);
                          t.addClass("js-select2-enabled").select2({
                              placeholder: t.data("placeholder") || !1
                          })
                      })
                  }
              }, {
                  key: "highlightjs",
                  value: function() {
                      hljs.isHighlighted || hljs.initHighlighting()
                  }
              }, {
                  key: "notify",
                  value: function() {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                      jQuery.isEmptyObject(e) ? jQuery(".js-notify:not(.js-notify-enabled)").each(function(e, a) {
                          jQuery(a).addClass("js-notify-enabled").on("click.cb.helpers", function(e) {
                              var a = jQuery(e.currentTarget);
                              jQuery.notify({
                                  icon: a.data("icon") || "",
                                  message: a.data("message"),
                                  url: a.data("url") || ""
                              }, {
                                  element: "body",
                                  type: a.data("type") || "info",
                                  placement: {
                                      from: a.data("from") || "top",
                                      align: a.data("align") || "right"
                                  },
                                  allow_dismiss: !0,
                                  newest_on_top: !0,
                                  showProgressbar: !1,
                                  offset: 20,
                                  spacing: 10,
                                  z_index: 1033,
                                  delay: 5e3,
                                  timer: 1e3,
                                  animate: {
                                      enter: "animated fadeIn",
                                      exit: "animated fadeOutDown"
                                  }
                              })
                          })
                      }) : jQuery.notify({
                          icon: e.icon || "",
                          message: e.message,
                          url: e.url || ""
                      }, {
                          element: e.element || "body",
                          type: e.type || "info",
                          placement: {
                              from: e.from || "top",
                              align: e.align || "right"
                          },
                          allow_dismiss: !1 !== e.allow_dismiss,
                          newest_on_top: !1 !== e.newest_on_top,
                          showProgressbar: !!e.show_progress_bar,
                          offset: e.offset || 20,
                          spacing: e.spacing || 10,
                          z_index: e.z_index || 1033,
                          delay: e.delay || 5e3,
                          timer: e.timer || 1e3,
                          animate: {
                              enter: e.animate_enter || "animated fadeIn",
                              exit: e.animate_exit || "animated fadeOutDown"
                          }
                      })
                  }
              }, {
                  key: "draggableItems",
                  value: function() {
                      jQuery(".js-draggable-items:not(.js-draggable-items-enabled)").each(function(e, a) {
                          jQuery(a).addClass("js-draggable-items-enabled").children(".draggable-column").sortable({
                              connectWith: ".draggable-column",
                              items: ".draggable-item",
                              dropOnEmpty: !0,
                              opacity: .75,
                              handle: ".draggable-handler",
                              placeholder: "draggable-placeholder",
                              tolerance: "pointer",
                              start: function(e, a) {
                                  a.placeholder.css({
                                      height: a.item.outerHeight(),
                                      "margin-bottom": a.item.css("margin-bottom")
                                  })
                              }
                          })
                      })
                  }
              }, {
                  key: "easyPieChart",
                  value: function() {
                      jQuery(".js-pie-chart:not(.js-pie-chart-enabled)").each(function(e, a) {
                          var t = jQuery(a);
                          t.addClass("js-pie-chart-enabled").easyPieChart({
                              barColor: t.data("bar-color") || "#777777",
                              trackColor: t.data("track-color") || "#eeeeee",
                              lineWidth: t.data("line-width") || 3,
                              size: t.data("size") || "80",
                              animate: t.data("animate") || 750,
                              scaleColor: t.data("scale-color") || !1
                          })
                      })
                  }
              }, {
                  key: "maxlength",
                  value: function() {
                      jQuery(".js-maxlength:not(.js-maxlength-enabled)").each(function(e, a) {
                          var t = jQuery(a);
                          t.addClass("js-maxlength-enabled").maxlength({
                              alwaysShow: !!t.data("always-show"),
                              threshold: t.data("threshold") || 10,
                              warningClass: t.data("warning-class") || "badge badge-warning",
                              limitReachedClass: t.data("limit-reached-class") || "badge badge-danger",
                              placement: t.data("placement") || "bottom",
                              preText: t.data("pre-text") || "",
                              separator: t.data("separator") || "/",
                              postText: t.data("post-text") || ""
                          })
                      })
                  }
              }, {
                  key: "rangeslider",
                  value: function() {
                      jQuery(".js-rangeslider:not(.js-rangeslider-enabled)").each(function(e, a) {
                          jQuery(a).addClass("js-rangeslider-enabled").ionRangeSlider({
                              input_values_separator: ";"
                          })
                      })
                  }
              }], (t = null) && l(a.prototype, t), n && l(a, n), e
          }();

          function i(e, a) {
              for (var t = 0; t < a.length; t++) {
                  var n = a[t];
                  n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
              }
          }
          var s = function() {
              function e() {
                  ! function(e, a) {
                      if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                  }(this, e), this._uiInit()
              }
              var a, t, n;
              return a = e, (t = [{
                  key: "_uiInit",
                  value: function() {
                      this._lHtml = jQuery("html"), this._lBody = jQuery("body"), this._lpageLoader = jQuery("#page-loader"), this._lPage = jQuery("#page-container"), this._lSidebar = jQuery("#sidebar"), this._lSideOverlay = jQuery("#side-overlay"), this._lHeader = jQuery("#page-header"), this._lHeaderSearch = jQuery("#page-header-search"), this._lHeaderSearchInput = jQuery("#page-header-search-input"), this._lHeaderLoader = jQuery("#page-header-loader"), this._lMain = jQuery("#main-container"), this._lFooter = jQuery("#page-footer"), this._lSidebarScroll = !1, this._lSideOverlayScroll = !1, this._windowW = o.getWidth(), this._uiHandleScroll("init"), this._uiHandleMain(), this._uiHandleHeader(), this._uiHandleNav(), this._uiHandleForms(), this._uiHandleTheme(), this._uiApiLayout(), this._uiApiBlocks(), this.helpers(["core-tooltip", "core-popover", "core-tab", "core-custom-file-input", "core-toggle-class", "core-scrollTo", "core-year-copy", "core-appear", "core-appear-countTo", "core-ripple"]), this._uiHandlePageLoader()
                  }
              }, {
                  key: "_uiHandleScroll",
                  value: function() {
                      this._lPage.hasClass("side-scroll") ? (this._lSidebar.length > 0 && !this._lSidebarScroll && (this._lSidebarScroll = new SimpleBar(this._lSidebar[0]), jQuery(".simplebar-scroll-content", this._lSidebar).scrollLock("enable")), this._lSideOverlay.length > 0 && !this._lSideOverlayScroll && (this._lSideOverlayScroll = new SimpleBar(this._lSideOverlay[0]), jQuery(".simplebar-scroll-content", this._lSideOverlay).scrollLock("enable"))) : (this._lSidebar && this._lSidebarScroll && (jQuery(".simplebar-scroll-content", this._lSidebar).scrollLock("disable"), this._lSidebarScroll.unMount(), this._lSidebarScroll = null, this._lSidebar.removeAttr("data-simplebar").html(jQuery(".simplebar-content", this._lSidebar).html())), this._lSideOverlay && this._lSideOverlayScroll && (jQuery(".simplebar-scroll-content", this._lSideOverlay).scrollLock("disable"), this._lSideOverlayScroll.unMount(), this._lSideOverlayScroll = null, this._lSideOverlay.removeAttr("data-simplebar").html(jQuery(".simplebar-content", this._lSideOverlay).html())))
                  }
              }, {
                  key: "_uiHandleMain",
                  value: function() {
                      var e, a = this;
                      jQuery(window).off("resize.cb.main orientationchange.cb.main"), a._lMain.length && jQuery(window).on("resize.cb.main orientationchange.cb.main", function(t) {
                          clearTimeout(e), e = setTimeout(function(e) {
                              var t = jQuery(window).height(),
                                  n = a._lHeader.outerHeight() || 0,
                                  o = a._lFooter.outerHeight() || 0;
                              a._lPage.hasClass("page-header-fixed") || a._lPage.hasClass("page-header-glass") ? a._lMain.css("min-height", t - o) : a._lMain.css("min-height", t - n - o), a._lFooter.fadeTo(1e3, 1)
                          }, 150)
                      }).triggerHandler("resize.cb.main"), a._lPage.addClass("side-trans-enabled")
                  }
              }, {
                  key: "_uiHandleHeader",
                  value: function() {
                      var e = this;
                      jQuery(window).off("scroll.cb.header"), e._lPage.hasClass("page-header-glass") && e._lPage.hasClass("page-header-fixed") && jQuery(window).on("scroll.cb.header", function(a) {
                          jQuery(a.currentTarget).scrollTop() > 60 ? e._lPage.addClass("page-header-scroll") : e._lPage.removeClass("page-header-scroll")
                      }).trigger("scroll.cb.header")
                  }
              }, {
                  key: "_uiHandleNav",
                  value: function() {
                      var e = this;
                      e._lPage.off("click.cb.menu"), e._lPage.on("click.cb.menu", '[data-toggle="nav-submenu"]', function(a) {
                          var t = jQuery(a.currentTarget),
                              n = t.parent("li");
                          return n.hasClass("open") ? n.removeClass("open") : (t.closest("ul").children("li").removeClass("open"), n.addClass("open")), e._lHtml.hasClass("no-focus") && t.blur(), !1
                      })
                  }
              }, {
                  key: "_uiHandlePageLoader",
                  value: function() {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "hide",
                          a = arguments.length > 1 ? arguments[1] : void 0;
                      "show" === e ? this._lpageLoader.length ? (a && this._lpageLoader.removeClass().addClass(a), this._lpageLoader.addClass("show")) : this._lBody.prepend('<div id="page-loader" class="show'.concat(a ? " " + a : "", '"></div>')) : "hide" === e && this._lpageLoader.length && this._lpageLoader.removeClass("show")
                  }
              }, {
                  key: "_uiHandleForms",
                  value: function() {
                      jQuery(".form-material.floating > .form-control").each(function(e, a) {
                          var t = jQuery(a),
                              n = t.parent(".form-material");
                          setTimeout(function(e) {
                              t.val() && n.addClass("open")
                          }, 150), t.off("change.cb.inputs").on("change.cb.inputs", function(e) {
                              t.val() ? n.addClass("open") : n.removeClass("open")
                          })
                      })
                  }
              }, {
                  key: "_uiHandleTheme",
                  value: function() {
                      var e = jQuery("#css-theme"),
                          a = !!this._lPage.hasClass("enable-cookies");
                      if (a) {
                          var t = Cookies.get("cbThemeName") || !1;
                          t && o.updateTheme(e, t), e = jQuery("#css-theme")
                      }
                      jQuery('[data-toggle="theme"][data-theme="' + (e.length ? e.attr("href") : "default") + '"]').parent("li").addClass("active"), this._lPage.off("click.cb.themes"), this._lPage.on("click.cb.themes", '[data-toggle="theme"]', function(t) {
                          t.preventDefault();
                          var n = jQuery(t.currentTarget),
                              l = n.data("theme");
                          jQuery('[data-toggle="theme"]').parent("li").removeClass("active"), jQuery('[data-toggle="theme"][data-theme="' + l + '"]').parent("li").addClass("active"), o.updateTheme(e, l), e = jQuery("#css-theme"), a && Cookies.set("cbThemeName", l, {
                              expires: 7
                          }), n.blur()
                      })
                  }
              }, {
                  key: "_uiApiLayout",
                  value: function() {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "init",
                          a = this;
                      a._windowW = o.getWidth();
                      var t = {
                          init: function() {
                              a._lPage.off("click.cb.layout"), a._lPage.off("click.cb.overlay"), a._lPage.on("click.cb.layout", '[data-toggle="layout"]', function(e) {
                                  var t = jQuery(e.currentTarget);
                                  a._uiApiLayout(t.data("action")), t.blur()
                              }), a._lPage.hasClass("enable-page-overlay") && (a._lPage.prepend('<div id="page-overlay"></div>'), jQuery("#page-overlay").on("click.cb.overlay", function(e) {
                                  a._uiApiLayout("side_overlay_close")
                              }))
                          },
                          sidebar_pos_toggle: function() {
                              a._lPage.toggleClass("sidebar-r")
                          },
                          sidebar_pos_left: function() {
                              a._lPage.removeClass("sidebar-r")
                          },
                          sidebar_pos_right: function() {
                              a._lPage.addClass("sidebar-r")
                          },
                          sidebar_toggle: function() {
                              a._windowW > 991 ? a._lPage.toggleClass("sidebar-o") : a._lPage.toggleClass("sidebar-o-xs")
                          },
                          sidebar_open: function() {
                              a._windowW > 991 ? a._lPage.addClass("sidebar-o") : a._lPage.addClass("sidebar-o-xs")
                          },
                          sidebar_close: function() {
                              a._windowW > 991 ? a._lPage.removeClass("sidebar-o") : a._lPage.removeClass("sidebar-o-xs")
                          },
                          sidebar_mini_toggle: function() {
                              a._windowW > 991 && a._lPage.toggleClass("sidebar-mini")
                          },
                          sidebar_mini_on: function() {
                              a._windowW > 991 && a._lPage.addClass("sidebar-mini")
                          },
                          sidebar_mini_off: function() {
                              a._windowW > 991 && a._lPage.removeClass("sidebar-mini")
                          },
                          sidebar_style_inverse_toggle: function() {
                              a._lPage.toggleClass("sidebar-inverse")
                          },
                          sidebar_style_inverse_on: function() {
                              a._lPage.addClass("sidebar-inverse")
                          },
                          sidebar_style_inverse_off: function() {
                              a._lPage.removeClass("sidebar-inverse")
                          },
                          side_overlay_toggle: function() {
                              a._lPage.hasClass("side-overlay-o") ? a._uiApiLayout("side_overlay_close") : a._uiApiLayout("side_overlay_open")
                          },
                          side_overlay_open: function() {
                              a._lPage.addClass("side-overlay-o"), jQuery(document).on("keydown.cb.sideOverlay", function(e) {
                                  27 === e.which && (e.preventDefault(), a._uiApiLayout("side_overlay_close"))
                              })
                          },
                          side_overlay_close: function() {
                              a._lPage.removeClass("side-overlay-o"), jQuery(document).off("keydown.cb.sideOverlay")
                          },
                          side_overlay_hoverable_toggle: function() {
                              a._lPage.toggleClass("side-overlay-hover")
                          },
                          side_overlay_hoverable_on: function() {
                              a._lPage.addClass("side-overlay-hover")
                          },
                          side_overlay_hoverable_off: function() {
                              a._lPage.removeClass("side-overlay-hover")
                          },
                          header_fixed_toggle: function() {
                              a._lPage.toggleClass("page-header-fixed"), a._uiHandleHeader(), a._uiHandleMain()
                          },
                          header_fixed_on: function() {
                              a._lPage.addClass("page-header-fixed"), a._uiHandleHeader(), a._uiHandleMain()
                          },
                          header_fixed_off: function() {
                              a._lPage.removeClass("page-header-fixed"), a._uiHandleHeader(), a._uiHandleMain()
                          },
                          header_style_modern: function() {
                              a._lPage.removeClass("page-header-glass page-header-inverse").addClass("page-header-modern"), a._uiHandleHeader(), a._uiHandleMain()
                          },
                          header_style_classic: function() {
                              a._lPage.removeClass("page-header-glass page-header-modern"), a._uiHandleHeader(), a._uiHandleMain()
                          },
                          header_style_glass: function() {
                              a._lPage.removeClass("page-header-modern").addClass("page-header-glass"), a._uiHandleHeader(), a._uiHandleMain()
                          },
                          header_style_inverse_toggle: function() {
                              a._lPage.hasClass("page-header-modern") || a._lPage.toggleClass("page-header-inverse")
                          },
                          header_style_inverse_on: function() {
                              a._lPage.hasClass("page-header-modern") || a._lPage.addClass("page-header-inverse")
                          },
                          header_style_inverse_off: function() {
                              a._lPage.hasClass("page-header-modern") || a._lPage.removeClass("page-header-inverse")
                          },
                          header_search_on: function() {
                              a._lHeaderSearch.addClass("show"), a._lHeaderSearchInput.focus(), jQuery(document).on("keydown.cb.header.search", function(e) {
                                  27 === e.which && (e.preventDefault(), a._uiApiLayout("header_search_off"))
                              })
                          },
                          header_search_off: function() {
                              a._lHeaderSearch.removeClass("show"), a._lHeaderSearchInput.blur(), jQuery(document).off("keydown.cb.header.search")
                          },
                          header_loader_on: function() {
                              a._lHeaderLoader.addClass("show")
                          },
                          header_loader_off: function() {
                              a._lHeaderLoader.removeClass("show")
                          },
                          side_scroll_toggle: function() {
                              a._lPage.toggleClass("side-scroll"), a._uiHandleScroll()
                          },
                          side_scroll_on: function() {
                              a._lPage.addClass("side-scroll"), a._uiHandleScroll()
                          },
                          side_scroll_off: function() {
                              a._lPage.removeClass("side-scroll"), a._uiHandleScroll()
                          },
                          content_layout_toggle: function() {
                              a._lPage.hasClass("main-content-boxed") ? a._uiApiLayout("content_layout_narrow") : a._lPage.hasClass("main-content-narrow") ? a._uiApiLayout("content_layout_full_width") : a._uiApiLayout("content_layout_boxed")
                          },
                          content_layout_boxed: function() {
                              a._lPage.removeClass("main-content-narrow").addClass("main-content-boxed")
                          },
                          content_layout_narrow: function() {
                              a._lPage.removeClass("main-content-boxed").addClass("main-content-narrow")
                          },
                          content_layout_full_width: function() {
                              a._lPage.removeClass("main-content-boxed main-content-narrow")
                          }
                      };
                      t[e] && t[e]()
                  }
              }, {
                  key: "_uiApiBlocks",
                  value: function() {
                      var e, a, t, n = this,
                          o = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                          l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "init",
                          r = this,
                          i = "fal fa-arrows",
                          s = {
                              init: function() {
                                  jQuery('[data-toggle="block-option"][data-action="fullscreen_toggle"]').each(function(e, a) {
                                      var t = jQuery(a);
                                      t.html('<i class="' + (jQuery(t).closest(".block").hasClass("block-mode-fullscreen") ? "si si-size-actual" : i) + '"></i>')
                                  }), jQuery('[data-toggle="block-option"][data-action="content_toggle"]').each(function(e, a) {
                                      var t = jQuery(a);
                                      t.html('<i class="' + (t.closest(".block").hasClass("block-mode-hidden") ? "si si-arrow-down" : "si si-arrow-up") + '"></i>')
                                  }), r._lPage.off("click.cb.blocks"), r._lPage.on("click.cb.blocks", '[data-toggle="block-option"]', function(e) {
                                      n._uiApiBlocks(jQuery(e.currentTarget).closest(".block"), jQuery(e.currentTarget).data("action"))
                                  })
                              },
                              fullscreen_toggle: function() {
                                  e.removeClass("block-mode-pinned").toggleClass("block-mode-fullscreen"), e.hasClass("block-mode-fullscreen") ? jQuery(e).scrollLock("enable") : jQuery(e).scrollLock("disable"), a.length && (e.hasClass("block-mode-fullscreen") ? jQuery("i", a).removeClass(i).addClass("si si-size-actual") : jQuery("i", a).removeClass("si si-size-actual").addClass(i))
                              },
                              fullscreen_on: function() {
                                  e.removeClass("block-mode-pinned").addClass("block-mode-fullscreen"), jQuery(e).scrollLock("enable"), a.length && jQuery("i", a).removeClass(i).addClass("si si-size-actual")
                              },
                              fullscreen_off: function() {
                                  e.removeClass("block-mode-fullscreen"), jQuery(e).scrollLock("disable"), a.length && jQuery("i", a).removeClass("si si-size-actual").addClass(i)
                              },
                              content_toggle: function() {
                                  e.toggleClass("block-mode-hidden"), t.length && (e.hasClass("block-mode-hidden") ? jQuery("i", t).removeClass("si si-arrow-up").addClass("si si-arrow-down") : jQuery("i", t).removeClass("si si-arrow-down").addClass("si si-arrow-up"))
                              },
                              content_hide: function() {
                                  e.addClass("block-mode-hidden"), t.length && jQuery("i", t).removeClass("si si-arrow-up").addClass("si si-arrow-down")
                              },
                              content_show: function() {
                                  e.removeClass("block-mode-hidden"), t.length && jQuery("i", t).removeClass("si si-arrow-down").addClass("si si-arrow-up")
                              },
                              state_toggle: function() {
                                  e.toggleClass("block-mode-loading"), jQuery('[data-toggle="block-option"][data-action="state_toggle"][data-action-mode="demo"]', e).length && setTimeout(function() {
                                      e.removeClass("block-mode-loading")
                                  }, 2e3)
                              },
                              state_loading: function() {
                                  e.addClass("block-mode-loading")
                              },
                              state_normal: function() {
                                  e.removeClass("block-mode-loading")
                              },
                              pinned_toggle: function() {
                                  e.removeClass("block-mode-fullscreen").toggleClass("block-mode-pinned")
                              },
                              pinned_on: function() {
                                  e.removeClass("block-mode-fullscreen").addClass("block-mode-pinned")
                              },
                              pinned_off: function() {
                                  e.removeClass("block-mode-pinned")
                              },
                              close: function() {
                                  e.addClass("d-none")
                              },
                              open: function() {
                                  e.removeClass("d-none")
                              }
                          };
                      "init" === l ? s[l]() : (e = o instanceof jQuery ? o : jQuery(o)).length && (a = jQuery('[data-toggle="block-option"][data-action="fullscreen_toggle"]', e), t = jQuery('[data-toggle="block-option"][data-action="content_toggle"]', e), s[l] && s[l]())
                  }
              }, {
                  key: "init",
                  value: function() {
                      this._uiInit()
                  }
              }, {
                  key: "layout",
                  value: function(e) {
                      this._uiApiLayout(e)
                  }
              }, {
                  key: "blocks",
                  value: function(e, a) {
                      this._uiApiBlocks(e, a)
                  }
              }, {
                  key: "loader",
                  value: function(e, a) {
                      this._uiHandlePageLoader(e, a)
                  }
              }, {
                  key: "helpers",
                  value: function(e) {
                      var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                      r.run(e, a)
                  }
              }, {
                  key: "helper",
                  value: function(e) {
                      var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                      r.run(e, a)
                  }
              }]) && i(a.prototype, t), n && i(a, n), e
          }();

          function c(e) {
              return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                  return typeof e
              } : function(e) {
                  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              })(e)
          }

          function d(e, a) {
              return !a || "object" !== c(a) && "function" != typeof a ? function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
              }(e) : a
          }

          function u(e) {
              return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                  return e.__proto__ || Object.getPrototypeOf(e)
              })(e)
          }

          function h(e, a) {
              return (h = Object.setPrototypeOf || function(e, a) {
                  return e.__proto__ = a, e
              })(e, a)
          }
          t.d(a, "default", function() {
              return g
          });
          var g = function(e) {
              function a() {
                  return function(e, a) {
                      if (!(e instanceof a)) throw new TypeError("Cannot call a class as a function")
                  }(this, a), d(this, u(a).call(this))
              }
              return function(e, a) {
                  if ("function" != typeof a && null !== a) throw new TypeError("Super expression must either be null or a function");
                  e.prototype = Object.create(a && a.prototype, {
                      constructor: {
                          value: e,
                          writable: !0,
                          configurable: !0
                      }
                  }), a && h(e, a)
              }(a, s), a
          }();
          jQuery(function() {
            window.Codebase = new g
          })
      }]);


      Codebase.helpers('table-tools');

      //Override the default confirm dialog by rails
      $.rails.allowAction = function(link){
        if (link.data("confirm") == undefined){
          return true;
        }
        $.rails.showConfirmationDialog(link);
        return false;
      };

      //User click confirm button
      $.rails.confirmed = function(link){
        link.data("confirm", null);
        Turbolinks.visit(link.attr('href'))
      };

      //Display the confirmation dialog
      $.rails.showConfirmationDialog = function(link){
        var message = link.data("confirm");
        swal({
          title: message,
          type: 'warning',
          confirmButtonText: 'Continue',
          confirmButtonColor: '#0A6EFF',
          showCancelButton: true
        }).then(function(e){
          $.rails.confirmed(link);
        });
      };

})
