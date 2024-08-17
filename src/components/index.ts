import tabbar from './tabbar/index.vue';
import SvgIcon from './SvgIcon/index.vue';
import FirstScreen from './firstScreen/index.vue';
import Welcome from './welcome/index.vue';
import Video from './videoCom/index.vue';
import Introduce from './introduce/index.vue';
import SignIn from './signin/index.vue';
import signUpForm from './signUpForm/index.vue'
import signButton from './signButton/index.vue'
import Footer from './footer/index.vue'
import MTitle from './m_title/index.vue'
const allGlobalComponent: Object = {
  tabbar,
  SvgIcon,
  FirstScreen,
  Welcome,
  Video,
  Introduce,
  SignIn,
  signButton,
  signUpForm,
  Footer,
  MTitle,
};
export default {
  install(app: any) {
    Object.keys(allGlobalComponent).forEach((item) => {
      // @ts-ignore
      app.component(item, allGlobalComponent[item]);
    });
  },
};
