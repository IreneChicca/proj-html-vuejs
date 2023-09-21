import { createApp } from "vue";
import App from "./App.vue";

/* import bootsrtap */
import "bootstrap/dist/css/bootstrap.min.css";
import * as bootstrap from "bootstrap";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faMoneyBill1 } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faBookOpenReader } from "@fortawesome/free-solid-svg-icons";
import { faLifeRing } from "@fortawesome/free-regular-svg-icons";

/* add icons to the library */
library.add(
  faStar,
  faMagnifyingGlass,
  faUserPlus,
  faUser,
  faEye,
  faMoneyBill1,
  faCalendarDays,
  faPaperPlane,
  faFacebookF,
  faTwitter,
  faInstagram,
  faCartShopping,
  faBookOpenReader,
  faLifeRing
);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
