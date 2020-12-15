const copyAddressBtn = document.createElement("span");
const copyAddressIcon = document.createElement("img");
copyAddressBtn.id = "copy-address-btn";
copyAddressIcon.src = chrome.extension.getURL("images/paste.svg");
copyAddressBtn.appendChild(copyAddressIcon);

const countryCodeMap = {
  "United States": "US",
  Singapore: "SG",
  Philippines: "PH",
  "United Kingdom": "GB",
  Afghanistan: "AF",
  "Aland Islands": "AX",
  Albania: "AL",
  Algeria: "DZ",
  Andorra: "AD",
  Angola: "AO",
  Anguilla: "AI",
  "Antigua And Barbuda": "AG",
  Argentina: "AR",
  Armenia: "AM",
  Aruba: "AW",
  Australia: "AU",
  Austria: "AT",
  Azerbaijan: "AZ",
  Bahamas: "BS",
  Bahrain: "BH",
  Bangladesh: "BD",
  Barbados: "BB",
  Belarus: "BY",
  Belgium: "BE",
  Belize: "BZ",
  Benin: "BJ",
  Bermuda: "BM",
  Bhutan: "BT",
  Bolivia: "BO",
  "Bosnia And Herzegovina": "BA",
  Botswana: "BW",
  "Bouvet Island": "BV",
  Brazil: "BR",
  "British Indian Ocean Territory": "IO",
  "Virgin Islands, British": "VG",
  Brunei: "BN",
  Bulgaria: "BG",
  "Burkina Faso": "BF",
  Burundi: "BI",
  Cambodia: "KH",
  "Republic of Cameroon": "CM",
  Canada: "CA",
  "Cape Verde": "CV",
  "Caribbean Netherlands": "BQ",
  "Cayman Islands": "KY",
  "Central African Republic": "CF",
  Chad: "TD",
  Chile: "CL",
  China: "CN",
  "Christmas Island": "CX",
  "Cocos (Keeling) Islands": "CC",
  Colombia: "CO",
  Comoros: "KM",
  Congo: "CG",
  "Congo, The Democratic Republic Of The": "CD",
  "Cook Islands": "CK",
  "Costa Rica": "CR",
  Croatia: "HR",
  Curaçao: "CW",
  Cyprus: "CY",
  "Czech Republic": "CZ",
  "Côte d'Ivoire": "CI",
  Denmark: "DK",
  Djibouti: "DJ",
  Dominica: "DM",
  "Dominican Republic": "DO",
  Ecuador: "EC",
  Egypt: "EG",
  "El Salvador": "SV",
  "Equatorial Guinea": "GQ",
  Eritrea: "ER",
  Estonia: "EE",
  Eswatini: "SZ",
  Ethiopia: "ET",
  "Falkland Islands (Malvinas)": "FK",
  "Faroe Islands": "FO",
  Fiji: "FJ",
  Finland: "FI",
  France: "FR",
  "French Guiana": "GF",
  "French Polynesia": "PF",
  "French Southern Territories": "TF",
  Gabon: "GA",
  Gambia: "GM",
  Georgia: "GE",
  Germany: "DE",
  Ghana: "GH",
  Gibraltar: "GI",
  Greece: "GR",
  Greenland: "GL",
  Grenada: "GD",
  Guadeloupe: "GP",
  Guatemala: "GT",
  Guernsey: "GG",
  Guinea: "GN",
  "Guinea Bissau": "GW",
  Guyana: "GY",
  Haiti: "HT",
  "Heard Island And Mcdonald Islands": "HM",
  Honduras: "HN",
  "Hong Kong": "HK",
  Hungary: "HU",
  Iceland: "IS",
  India: "IN",
  Indonesia: "ID",
  Iraq: "IQ",
  Ireland: "IE",
  "Isle Of Man": "IM",
  Israel: "IL",
  Italy: "IT",
  Jamaica: "JM",
  Japan: "JP",
  Jersey: "JE",
  Jordan: "JO",
  Kazakhstan: "KZ",
  Kenya: "KE",
  Kiribati: "KI",
  Kosovo: "XK",
  Kuwait: "KW",
  Kyrgyzstan: "KG",
  "Lao People's Democratic Republic": "LA",
  Latvia: "LV",
  Lebanon: "LB",
  Lesotho: "LS",
  Liberia: "LR",
  "Libyan Arab Jamahiriya": "LY",
  Liechtenstein: "LI",
  Lithuania: "LT",
  Luxembourg: "LU",
  Macao: "MO",
  Madagascar: "MG",
  Malawi: "MW",
  Malaysia: "MY",
  Maldives: "MV",
  Mali: "ML",
  Malta: "MT",
  Martinique: "MQ",
  Mauritania: "MR",
  Mauritius: "MU",
  Mayotte: "YT",
  Mexico: "MX",
  "Moldova, Republic of": "MD",
  Monaco: "MC",
  Mongolia: "MN",
  Montenegro: "ME",
  Montserrat: "MS",
  Morocco: "MA",
  Mozambique: "MZ",
  Myanmar: "MM",
  Namibia: "NA",
  Nauru: "NR",
  Nepal: "NP",
  Netherlands: "NL",
  "New Caledonia": "NC",
  "New Zealand": "NZ",
  Nicaragua: "NI",
  Niger: "NE",
  Nigeria: "NG",
  Niue: "NU",
  "Norfolk Island": "NF",
  "North Macedonia": "MK",
  Norway: "NO",
  Oman: "OM",
  Pakistan: "PK",
  "Palestinian Territory, Occupied": "PS",
  Panama: "PA",
  "Papua New Guinea": "PG",
  Paraguay: "PY",
  Peru: "PE",
  Philippines: "PH",
  Pitcairn: "PN",
  Poland: "PL",
  Portugal: "PT",
  Qatar: "QA",
  Reunion: "RE",
  Romania: "RO",
  Russia: "RU",
  Rwanda: "RW",
  Samoa: "WS",
  "San Marino": "SM",
  "Sao Tome And Principe": "ST",
  "Saudi Arabia": "SA",
  Senegal: "SN",
  Serbia: "RS",
  Seychelles: "SC",
  "Sierra Leone": "SL",
  Singapore: "SG",
  "Sint Maarten": "SX",
  Slovakia: "SK",
  Slovenia: "SI",
  "Solomon Islands": "SB",
  Somalia: "SO",
  "South Africa": "ZA",
  "South Georgia And The South Sandwich Islands": "GS",
  "South Korea": "KR",
  "South Sudan": "SS",
  Spain: "ES",
  "Sri Lanka": "LK",
  "Saint Barthélemy": "BL",
  "Saint Helena": "SH",
  "Saint Kitts And Nevis": "KN",
  "Saint Lucia": "LC",
  "Saint Martin": "MF",
  "Saint Pierre And Miquelon": "PM",
  "St. Vincent": "VC",
  Sudan: "SD",
  Suriname: "SR",
  "Svalbard And Jan Mayen": "SJ",
  Sweden: "SE",
  Switzerland: "CH",
  Taiwan: "TW",
  Tajikistan: "TJ",
  "Tanzania, United Republic Of": "TZ",
  Thailand: "TH",
  "Timor Leste": "TL",
  Togo: "TG",
  Tokelau: "TK",
  Tonga: "TO",
  "Trinidad and Tobago": "TT",
  Tunisia: "TN",
  Turkey: "TR",
  Turkmenistan: "TM",
  "Turks and Caicos Islands": "TC",
  Tuvalu: "TV",
  "United States Minor Outlying Islands": "UM",
  Uganda: "UG",
  Ukraine: "UA",
  "United Arab Emirates": "AE",
  "United Kingdom": "GB",
  "United States": "US",
  Uruguay: "UY",
  Uzbekistan: "UZ",
  Vanuatu: "VU",
  "Holy See (Vatican City State)": "VA",
  Venezuela: "VE",
  Vietnam: "VN",
  "Wallis And Futuna": "WF",
  "Western Sahara": "EH",
  Yemen: "YE",
  Zambia: "ZM",
  Zimbabwe: "ZW",
};

// document.body.style.opacity = "0";
let observer = new MutationObserver((mutations) => {
  for (let mutation of mutations) {
    for (let addedNode of mutation.addedNodes) {
      // const addressWrapper = document.querySelector(".repository-content ");
      const addressWrapper = document.querySelector(
        "form.edit_checkout .address-fields"
      );
      if (addressWrapper && !document.getElementById("copy-address-btn")) {
        addressWrapper.style.position = "relative";

        const country = document.getElementById(
          "checkout_shipping_address_country"
        );

        const autoFillShippingAddress = () => {
          let nameParts = [];
          const firstName = document.getElementById(
            "checkout_shipping_address_first_name"
          );
          const lastName = document.getElementById(
            "checkout_shipping_address_last_name"
          );
          const address1 = document.getElementById(
            "checkout_shipping_address_address1"
          );
          const address2 = document.getElementById(
            "checkout_shipping_address_address2"
          );
          const zip = document.getElementById("checkout_shipping_address_zip");
          const city = document.getElementById(
            "checkout_shipping_address_city"
          );
          const province = document.getElementById(
            "checkout_shipping_address_province"
          );
          navigator.clipboard.readText().then((text) => {
            let address = null;
            try {
              address = JSON.parse(text);
            } catch (e) {
              // alert(e); // error in the above string (in this case, yes)!
            }
            if (address) {
              if (firstName && address.name) {
                nameParts = address.name.split(" ");
                firstName.value = nameParts[0] ? nameParts[0] : "";
              }
              if (lastName && address.name) {
                lastName.value = nameParts[1] ? nameParts[1] : "";
              }
              if (address1 && address.firstLine) {
                address1.value = address.firstLine;
              }
              if (address2 && address.secondLine) {
                address2.value = address.secondLine;
              }
              if (zip && address.zip) {
                zip.value = address.zip;
              }
              if (city && address.city) {
                city.value = address.city;
              }
              if (province && address.state) {
                setTimeout(() => {
                  province.value = address.state;
                }, 500);
              }
            }
          });
        };

        if (country) {
          country.addEventListener("change", autoFillShippingAddress);
        }
        copyAddressBtn.addEventListener("click", autoFillShippingAddress);
        addressWrapper.appendChild(copyAddressBtn);
      }
    }
  }
});
observer.observe(document, { childList: true, subtree: true });
