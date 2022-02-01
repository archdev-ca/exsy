const clipBoardInput = document.createElement("textarea");
clipBoardInput.style.zIndex = -1;
clipBoardInput.style.position = "absolute";
clipBoardInput.style.height = "0";
clipBoardInput.id = "exsy-clipboard-input";

if (!document.getElementById("exsy-clipboard-input")) {
  document.body.appendChild(clipBoardInput);
}

const copyAddressBtn = document.createElement("span");
const copyAddressIcon = document.createElement("img");
copyAddressBtn.id = "copy-address-btn";
copyAddressIcon.src = chrome.extension.getURL("images/copy.svg");
copyAddressBtn.appendChild(copyAddressIcon);

// document.body.style.opacity = "0";
let observer = new MutationObserver((mutations) => {
  for (let mutation of mutations) {
    for (let addedNode of mutation.addedNodes) {
      // const addressWrapper = document.querySelector(".repository-content ");
      const addressWrapper = document.querySelector(
        "#order-detail-container .panel-body .address"
      );
      if (addressWrapper) {
        addressWrapper.style.position = "relative";
      }
      if (addressWrapper && !document.getElementById("copy-address-btn")) {
        const copyAddress = () => {
          const name = addressWrapper.getElementsByClassName("name");
          const firstLine = addressWrapper.getElementsByClassName("first-line");
          const secondLine = addressWrapper.getElementsByClassName(
            "second-line"
          );
          const city = addressWrapper.getElementsByClassName("city");
          const state = addressWrapper.getElementsByClassName("state");
          const zip = addressWrapper.getElementsByClassName("zip");
          const countryName = addressWrapper.getElementsByClassName(
            "country-name"
          );
          const addressJSONString = JSON.stringify({
            name: name ? name[0].textContent : null,
            firstLine: firstLine ? firstLine[0].textContent : null,
            secondLine:
              secondLine && secondLine[0] ? secondLine[0].textContent : null,
            city: city ? city[0].textContent : null,
            state: state ? state[0].textContent : null,
            zip: zip ? zip[0].textContent : null,
            countryName: countryName ? countryName[0].textContent : null,
          });
          clipBoardInput.innerText = addressJSONString;
          clipBoardInput.select();
          clipBoardInput.setSelectionRange(0, 99999);
          document.execCommand("copy");
        };
        copyAddressBtn.addEventListener("click", copyAddress);
        addressWrapper.appendChild(copyAddressBtn);
      }

      // Highlight quantity
      const container = document.querySelector("#order-detail-container");
      if (container) {
        const tableContainer = container.lastChild;
        const table = tableContainer.querySelector(".panel > table");
        if (table) {
          const rows = table.querySelectorAll("tbody > tr");
          if (rows && rows.length > 1) {
            for (let i = 1, len = rows.length; i < len; i++) {
              const row = rows[i];
              const cells = row.childNodes;
              if (cells[1]) {
                const quantity = Number(cells[1].innerText);
                if (quantity > 1) {
                  const childNodes = cells[1].childNodes;
                  if (childNodes[0]) {
                    childNodes[0].style.display = "inline-block";
                    childNodes[0].style.color = "#fff";
                    childNodes[0].style.fontSize = "16px";
                    childNodes[0].style.fontWeight = "700";
                    childNodes[0].style.backgroundColor = "#f00";
                    childNodes[0].style.padding = "2px 10px";
                    childNodes[0].style.borderRadius = "2px";
                  }
                }
              }
            }
          }
        }
      }
    }
  }
});
observer.observe(document, { childList: true, subtree: true });
