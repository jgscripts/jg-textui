function DrawText(text, position)
  SendNUIMessage({
    type = 'show',
    text = text
  })
end

exports('DrawText', DrawText)

function HideText()
  SendNUIMessage({
    type = 'hide'
  })
end

exports('HideText', HideText)
