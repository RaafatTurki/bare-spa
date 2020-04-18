function includeHTML() {
    let all = document.getElementsByTagName("*")

    for (let i = 0; i < all.length; i++) {
      let elmnt = all[i]
      let attr = elmnt.getAttribute("include")
      
      if (attr) {
            let xhttp = new XMLHttpRequest()
            xhttp.onreadystatechange = function() {
                if (this.readyState == 4) {

                    if (this.status == 200) {
                        let slotHTML = elmnt.innerHTML
                        elmnt.innerHTML = this.responseText
                        for (let i = 0; i < all.length; i++) {
                            if (all[i].hasAttribute("slot")) all[i].innerHTML = slotHTML
                            all[i].removeAttribute("slot")
                        }
                    }

                    if (this.status == 404) elmnt.innerHTML = "page not found."
                    elmnt.removeAttribute("include")
                    includeHTML()
                }
            }
            
            let file = attr
            if (file.charAt(0) == '@') file = "./components/" + file.substr(1, file.length)
            if (file.charAt(0) == '$') file = "./views/" + file.substr(1, file.length)
            file += ".htm"

            xhttp.open("GET", file, true)
            xhttp.send()
            return
        }
    }
}