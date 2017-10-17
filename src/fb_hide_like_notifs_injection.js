function markUninterestedNotifsRead () {
  var selectorString = `ul:not([data-gt*='"ref":"notif_page"']) ._33c[data-gt*='"notif_type":"like"'] ._55m9._55ma._5c9q,
  ul:not([data-gt*='"ref":"notif_page"']) ._33c[data-gt*='"notif_type":"like_tagged"'] ._55m9._55ma._5c9q,
  ul:not([data-gt*='"ref":"notif_page"']) ._33c[data-gt*='"notif_type":"feedback_reaction_generic"'] ._55m9._55ma._5c9q,
  ul:not([data-gt*='"ref":"notif_page"']) ._33c[data-gt*='"notif_type":"feedback_reaction_generic_tagged"'] ._55m9._55ma._5c9q,
  ul:not([data-gt*='"ref":"notif_page"']) ._33c[data-gt*='"notif_type":"page_new_likes"'] ._55m9._55ma._5c9q,
  ul:not([data-gt*='"ref":"notif_page"']) ._33c[data-gt*='"notif_type":"page_user_activity"'] ._55m9._55ma._5c9q,
  ul:not([data-gt*='"ref":"notif_page"']) ._33c[data-gt*='"notif_type":"open_graph_action_like"'] ._55m9._55ma._5c9q,
  ul:not([data-gt*='"ref":"notif_page"']) ._33c[data-gt*='"notif_type":"page_fan"'] ._55m9._55ma._5c9q`

  var fnSendClickEvent = function (elm) {
    var evt = document.createEvent("MouseEvent")
    evt.initUIEvent("click", true, true)
    elm.dispatchEvent(evt)
  }

  document.querySelectorAll(selectorString).forEach(fnSendClickEvent)
}

setInterval(markUninterestedNotifsRead, 2000)